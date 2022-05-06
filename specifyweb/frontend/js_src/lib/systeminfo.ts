/**
 * Fetch basic server information
 */

import { Http, ping } from './ajax';
import { load } from './initialcontext';
import { formatUrl } from './querystring';

type SystemInfo = {
  readonly version: string;
  readonly specify6_version: string;
  readonly database_version: string;
  readonly schema_version: string;
  readonly collection: string;
  readonly collection_guid: string;
  readonly database: string;
  readonly discipline: string;
  readonly institution: string;
  readonly institution_guid: string;
  readonly isa_number: string;
  readonly stats_url: string | null;
};

let systemInfo: SystemInfo;

export const fetchContext = load<SystemInfo>(
  '/context/system_info.json',
  'application/json'
).then((data) => {
  systemInfo = data;
  if (systemInfo.stats_url !== null)
    ping(
      formatUrl(
        systemInfo.stats_url,
        {
          version: systemInfo.version,
          dbVersion: systemInfo.database_version,
          institution: systemInfo.institution,
          institutionGUID: systemInfo.institution_guid,
          discipline: systemInfo.discipline,
          collection: systemInfo.collection,
          collectionGUID: systemInfo.collection_guid,
          isaNumber: systemInfo.isa_number,
        },
        false
      ),
      {},
      { strict: false, expectedResponseCodes: [Http.NO_CONTENT] }
    ).catch(console.error);
});

export const getSystemInfo = (): SystemInfo => systemInfo;
