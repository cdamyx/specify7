/**
 *
 * Walks through front-end files in search of invalid usages of localization
 * keys.
 *
 * Accepts optional `--verbose` argument to enable verbose output
 *
 */

import fs from 'fs';
import path from 'path';

import { f } from '../functools';
import type {
  Dictionary as LanguageDictionary,
  Language,
  Value,
} from '../localization/utils';
import { DEFAULT_LANGUAGE, languages } from '../localization/utils';
import type { IR, R } from '../types';
import { filterArray } from '../types';

if (process.argv[1] === undefined)
  throw new Error('Unable to find the path of the current directory');

// CONFIGURATION
/**
 * When tests are build, this scrip would get executed from
 * `js_src/testBuild/tests/testlocalization.js`. We need to go up two
 * levels to get to the `js_src` directory.
 *
 */
const jsSourceDirectory = path.dirname(path.dirname(process.argv[1]));
const libraryDirectory = path.join(path.dirname(jsSourceDirectory), 'lib');

// Directory that contains the localization script
const localizationDirectory = path.join(libraryDirectory, 'localization');
const compiledLocalizationDirectory = '../localization';

// Directories that contain front-end source code (non-recursively)
const directoriesToScan = ['./', './components', '/components/toolbar'];

const extensionsToScan = ['js', 'jsx', 'ts', 'tsx', 'html'];

// Decide whether verbose mode should be turned on
const verbose = process.argv[2] === '--verbose';

const log = console.log;
const debug = verbose ? console.log : () => undefined;

let todosCount = 0;

function todo(value: string): void {
  todosCount += 1;
  // Green
  console.warn(`\u001B[36m${value}\u001B[0m\n`);
}

let warningsCount = 0;

function warn(value: string): void {
  warningsCount += 1;
  // Orange
  console.warn(`\u001B[33m${value}\u001B[0m\n`);
}

let errorsCount = 0;

function error(value: string): void {
  errorsCount += 1;
  process.exitCode = 1;
  // Red
  console.error(`\u001B[31m${value}\u001B[0m\n\n`);
}

log(`Looking for localization dictionaries in ${localizationDirectory}`);

const lookAroundLength = 40;

type Key = {
  readonly strings: Partial<Value>;
  useCount: number;
};

type Dictionary = IR<Key>;

// This allows to call await at the top level
(async (): Promise<void> => {
  const localizationFiles = fs.readdirSync(localizationDirectory);
  const dictionaries = Object.fromEntries(
    Array.from(
      filterArray(
        await Promise.all(
          localizationFiles.map<Promise<undefined | [string, Dictionary]>>(
            async (fileName) => {
              if (!path.extname(fileName).includes('ts')) return undefined;

              const compiledFilePath = path.join(
                compiledLocalizationDirectory,
                fileName
              );
              const filePathWithoutExtension = compiledFilePath
                .split('.')
                .slice(0, -1)
                .join('.');

              const dictionaryFile = await import(filePathWithoutExtension);
              const dictionaries = Object.keys(dictionaryFile ?? {}).filter(
                (dictionaryName) => dictionaryName.endsWith('Text')
              );
              if (dictionaries.length > 1) {
                error(
                  `Found multiple dictionaries in ${fileName}: ${dictionaries.join(
                    ', '
                  )}`
                );
                return undefined;
              }
              const dictionaryName = dictionaries[0];
              const dictionary = dictionaryFile?.[dictionaryName ?? '']
                ?.dictionary as LanguageDictionary | undefined;
              if (
                typeof dictionaryName !== 'string' ||
                typeof dictionary !== 'object'
              ) {
                // This is not thrown as an error because of "utils.tsx"
                warn(`Unable to find a dictionary in ${fileName}`);
                return undefined;
              }
              debug(`Found a ${dictionaryName} dictionary in ${fileName}`);

              if (Object.keys(dictionary).length === 0) {
                error(
                  `Unable to find any keys in the ${dictionaryName} dictionary`
                );
                return undefined;
              }

              const entries = Object.fromEntries(
                Object.entries(dictionary).map(([key, strings]) => {
                  languages
                    .filter((language) => !(language in strings))
                    .forEach((language) =>
                      (language === DEFAULT_LANGUAGE ? error : todo)(
                        [
                          `${language} localization is missing for key ${key}`,
                          `in ${dictionaryName}`,
                        ].join('')
                      )
                    );

                  Object.keys(strings)
                    .filter((language) => !f.includes(languages, language))
                    .forEach((language) =>
                      warn(
                        [
                          `A string for an undefined language ${language} was`,
                          `found for key ${key} in ${dictionaryName}`,
                        ].join('')
                      )
                    );

                  return [
                    key,
                    {
                      strings,
                      useCount: 0,
                    },
                  ];
                })
              );

              return [dictionaryName, entries];
            }
          )
        )
      )
    )
  );

  if (Object.keys(dictionaries).length === 0)
    error('Unable to find any localization dictionaries');

  const sourceFiles = directoriesToScan
    .flatMap((directoryName) =>
      fs
        .readdirSync(path.join(libraryDirectory, directoryName))
        .map((fileName) => path.join(directoryName, fileName))
    )
    .filter((fileName) =>
      extensionsToScan.includes(fileName.split('.').slice(-1)[0])
    );

  debug('Looking for usages of strings');
  sourceFiles.forEach((fileName) => {
    debug(`Looking for language string usages in ${fileName}`);

    const fileContent = fs
      .readFileSync(path.join(libraryDirectory, fileName))
      .toString();
    let foundUsages = false;

    Object.entries(dictionaries).forEach(([dictionaryName, entries]) => {
      const regex = new RegExp(
        `${dictionaryName}\\s*\\(\\s*((?<parameters>[^)]+))`,
        'g'
      );

      Array.from(fileContent.matchAll(regex)).forEach(({ groups, index }) => {
        if (groups === undefined || index === undefined)
          return;

        const parameters = groups.parameters;
        const [rawPaddedKeyName, ...args] = parameters.split(',');
        const hasArguments = args.join('').length > 0;

        const paddedKeyName = rawPaddedKeyName.trim();
        const keyName = paddedKeyName.slice(1, -1);

        const position = fileContent.slice(
          index - lookAroundLength,
          index + lookAroundLength + dictionaryName.length + keyName.length
        );
        const lineNumber = (fileContent.slice(0, index).match(/\n/g) ?? [])
          .length;

        if (
          !`'"\``.includes(paddedKeyName[0]) ||
          !paddedKeyName.endsWith(paddedKeyName[0])
        ) {
          error(
            [
              `Found invalid key ${dictionaryName}[${paddedKeyName}] in ${fileName}\n`,
              `Key must be a string literal, not a variable or function call.\n`,
              `\n`,
              `On line ${lineNumber}:\n`,
              `${position}`,
            ].join('')
          );
          return;
        }

        if (!(keyName in entries)) {
          error(
            [
              `Found unknown key ${dictionaryName}.${keyName} in ${fileName}\n`,
              `\n`,
              `On line ${lineNumber}:\n`,
              `${position}`,
            ].join('')
          );
          return;
        }

        const expectsArguments =
          typeof entries[keyName].strings[DEFAULT_LANGUAGE] === 'function';
        if (expectsArguments !== hasArguments) {
          if (hasArguments)
            error(
              [
                `${fileName} provides arguments to ${dictionaryName}.${keyName} `,
                `but it is not supposed to.\n`,
                `\n`,
                `On line ${lineNumber}:\n`,
                `${position}`,
              ].join('')
            );
          else
            error(
              [
                `${fileName} does not provide arguments to `,
                `${dictionaryName}.${keyName} but it is supposed to.\n`,
                `\n`,
                `On line ${lineNumber}:\n`,
                `${position}`,
              ].join('')
            );
        }

        entries[keyName].useCount += 1;
        foundUsages = true;
      });
    });

    if (!foundUsages) debug(`Didn't find any usages in ${fileName}`);
  });

  // Find duplicate values
  const compoundDictionaries = Object.entries(dictionaries).reduce<
    Partial<Record<Language, R<(readonly [fileName: string, key: string])[]>>>
  >((compoundDictionaries, [fileName, entries]) => {
    Object.entries(entries).forEach(([key, { strings }]) =>
      Object.entries(strings).forEach(([language, value]) => {
        const valueString =
          typeof value === 'string'
            ? value
            : typeof value === 'object'
            ? JSON.stringify(value)
            : (value ?? '').toString();
        compoundDictionaries[language] ??= {};
        compoundDictionaries[language]![valueString] ??= [];
        compoundDictionaries[language]![valueString].push([fileName, key]);
      })
    );
    return compoundDictionaries;
  }, {});
  Object.entries(compoundDictionaries).forEach(([language, valueDictionary]) =>
    Object.entries(valueDictionary ?? {})
      .filter(([_valueString, instances]) => instances.length > 1)
      .forEach(([valueString, instances]) => {
        warn(
          [
            'Multiple instances of the same value were found for language ',
            `${language} in:\n`,
            ...instances.map(
              ([fileName, key]) => `\t"${fileName}" under key "${key}"\n`
            ),
            'Value:\n',
            valueString,
          ].join('')
        );
      })
  );

  // Unused key errors
  Object.entries(dictionaries).forEach(([dictionaryName, keys]) =>
    Object.entries(keys)
      .filter(([_keyName, { useCount }]) => useCount === 0)
      .forEach(([keyName]) =>
        error(`No usages of ${dictionaryName}.${keyName} found`)
      )
  );

  // Output stats
  debug(dictionaries);
  if (verbose)
    Object.entries(dictionaries).forEach(([dictionaryName, keys]) =>
      log(
        `${dictionaryName} has ${
          Object.keys(keys).length
        } keys with a total use count of ${Object.values(keys)
          .map(({ useCount }) => useCount)
          .reduce((total, useCount) => total + useCount, 0)}`
      )
    );
  todo(`TODOs: ${todosCount}`);
  warn(`Warnings: ${warningsCount}`);
  // Not using error() here as that would change the exit code to 1
  warn(`Errors: ${errorsCount}`);
})();
