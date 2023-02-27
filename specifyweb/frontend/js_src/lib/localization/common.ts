/**
 * Localization strings that are shared across components
 *
 * @module
 */

import { createDictionary } from './utils';

// Refer to "Guidelines for Programmers" in ./README.md before editing this file

export const commonText = createDictionary({
  specifySeven: {
    comment: `
      This is an example of how to provide comments. Comments are visible to
      translators.
    `,
    'en-us': 'Specify 7',
    'ru-ru': 'Specify 7',
    'es-es': 'Specify 7',
    'fr-fr': 'Specify 7',
    'uk-ua': 'Specify 7',
  },
  no: {
    'en-us': 'No',
    'ru-ru': 'Нет',
    'es-es': 'No',
    'fr-fr': 'Non',
    'uk-ua': 'Ні',
  },
  cancel: {
    'en-us': 'Cancel',
    'ru-ru': 'Отмена',
    'es-es': 'Cancelar',
    'fr-fr': 'Annuler',
    'uk-ua': 'Скасувати',
  },
  back: {
    'en-us': 'Back',
    'ru-ru': 'Назад',
    'es-es': 'Volver',
    'fr-fr': 'Retour',
    'uk-ua': 'Назад',
  },
  skip: {
    'en-us': 'Skip',
    'ru-ru': 'Пропустить',
    'es-es': 'Omitir',
    'fr-fr': 'Passer',
    'uk-ua': 'Пропустити',
  },
  create: {
    'en-us': 'Create',
    'ru-ru': 'Создать',
    'es-es': 'Crear',
    'fr-fr': 'Créer',
    'uk-ua': 'Створити',
  },
  close: {
    'en-us': 'Close',
    'ru-ru': 'Закрыть',
    'es-es': 'Cerrar',
    'fr-fr': 'Fermer',
    'uk-ua': 'Закрити',
  },
  apply: {
    'en-us': 'Apply',
    'ru-ru': 'Применить',
    'es-es': 'Solicitar',
    'fr-fr': 'Appliquer',
    'uk-ua': 'Застосувати',
  },
  applyAll: {
    'en-us': 'Apply All',
    'ru-ru': 'Применить все',
    'es-es': 'Aplicar todo',
    'fr-fr': 'Appliquer tout',
    'uk-ua': 'Застосувати до всіх',
  },
  clearAll: {
    'en-us': 'Clear all',
    'ru-ru': 'Очистить все',
    'es-es': 'Limpiar todo',
    'fr-fr': 'Tout effacer',
    'uk-ua': 'Очистити все',
  },
  save: {
    'en-us': 'Save',
    'ru-ru': 'Сохранить',
    'es-es': 'Guardar',
    'fr-fr': 'Enregistrer',
    'uk-ua': 'Зберегти',
  },
  add: {
    'en-us': 'Add',
    'ru-ru': 'Добавить',
    'es-es': 'Añadir',
    'fr-fr': 'Ajouter',
    'uk-ua': 'Додати',
  },
  open: {
    'en-us': 'Open',
    'ru-ru': 'Открыть',
    'es-es': 'Abrir',
    'fr-fr': 'Ouvrir',
    'uk-ua': 'Відкрити',
  },
  delete: {
    'en-us': 'Delete',
    'ru-ru': 'Удалить',
    'es-es': 'Borrar',
    'fr-fr': 'Supprimer',
    'uk-ua': 'Видалити',
  },
  next: {
    'en-us': 'Next',
    'ru-ru': 'Следующий',
    'es-es': 'Siguiente',
    'fr-fr': 'Suivant',
    'uk-ua': 'Наступний',
  },
  previous: {
    'en-us': 'Previous',
    'ru-ru': 'Предыдущий',
    'es-es': 'Anterior',
    'fr-fr': 'Précédent',
    'uk-ua': 'Попередній',
  },
  tool: {
    'en-us': 'Tool',
    'ru-ru': 'Инструмент',
    'es-es': 'Herramienta',
    'fr-fr': 'Outil',
    'uk-ua': 'Інструмент',
  },
  tools: {
    'en-us': 'Tools',
    'ru-ru': 'Инструменты',
    'es-es': 'Herramientas',
    'fr-fr': 'Outils',
    'uk-ua': 'Інструменти',
  },
  loading: {
    'en-us': 'Loading…',
    'ru-ru': 'Загрузка…',
    'es-es': 'Cargando…',
    'fr-fr': 'Chargement…',
    'uk-ua': 'Завантаження…',
  },
  uploaded: {
    'en-us': 'Uploaded',
    'ru-ru': 'Загружено',
    'es-es': 'Cargado',
    'fr-fr': 'Importé',
    'uk-ua': 'Завантажено',
  },
  remove: {
    'en-us': 'Remove',
    'ru-ru': 'Удалить',
    'es-es': 'Eliminar',
    'fr-fr': 'Supprimer',
    'uk-ua': 'Видалити',
  },
  search: {
    'en-us': 'Search',
    'ru-ru': 'Искать',
    'es-es': 'Buscar',
    'fr-fr': 'Rechercher',
    'uk-ua': 'Пошук',
  },
  noResults: {
    'en-us': 'No Results',
    'ru-ru': 'Нет результатов',
    'es-es': 'Sin resultados',
    'fr-fr': 'Aucun résultat',
    'uk-ua': 'Немає результатів',
  },
  notApplicable: {
    'en-us': 'N/A',
    'ru-ru': 'Н/Д',
    'es-es': 'N/A',
    'fr-fr': 'N/A',
    'uk-ua': 'Н/З',
  },
  new: {
    'en-us': 'New',
    'ru-ru': 'Новый',
    'es-es': 'Nuevo',
    'fr-fr': 'Nouveau',
    'uk-ua': 'Новий',
  },
  edit: {
    'en-us': 'Edit',
    'ru-ru': 'Редактировать',
    'es-es': 'Editar',
    'fr-fr': 'Modifier',
    'uk-ua': 'Редагувати',
  },
  ignore: {
    'en-us': 'Ignore',
    'ru-ru': 'Игнорировать',
    'es-es': 'Ignorar',
    'fr-fr': 'Ignorer',
    'uk-ua': 'Ігнорувати',
  },
  proceed: {
    'en-us': 'Proceed',
    'ru-ru': 'Продолжить',
    'es-es': 'Proceder',
    'fr-fr': 'Procéder',
    'uk-ua': 'Продовжити',
  },
  start: {
    'en-us': 'Start',
    'ru-ru': 'Начало',
    'es-es': 'Comenzar',
    'fr-fr': 'Début',
    'uk-ua': 'Старт',
  },
  end: {
    'en-us': 'End',
    'ru-ru': 'Конец',
    'es-es': 'Fin',
    'fr-fr': 'Fin',
    'uk-ua': 'Кінець',
  },
  update: {
    comment: 'Verb',
    'en-us': 'Update',
    'ru-ru': 'Обновить',
    'es-es': 'Actualizar',
    'fr-fr': 'Mettre à jour',
    'uk-ua': 'Оновити',
  },
  listTruncated: {
    'en-us': '(list truncated)',
    'ru-ru': '(список усечен)',
    'es-es': '(lista truncada)',
    'fr-fr': '(liste tronquée)',
    'uk-ua': '(список скорочено)',
  },
  fullDate: {
    'en-us': 'Full Date',
    'ru-ru': 'Полная дата',
    'es-es': 'Fecha completa',
    'fr-fr': 'Date complète',
    'uk-ua': 'Повна дата',
  },
  view: {
    comment: 'Verb',
    'en-us': 'View',
    'ru-ru': 'Смотреть',
    'es-es': 'Vista',
    'fr-fr': 'Affichage',
    'uk-ua': 'Відкрити',
  },
  opensInNewTab: {
    comment: 'Used in a hover-over message for links that open in new tab',
    'en-us': '(opens in a new tab)',
    'ru-ru': '(открывается в новой вкладке)',
    'es-es': '(abre en una nueva pestaña)',
    'fr-fr': "(s'ouvre dans un nouvel onglet)",
    'uk-ua': '(відкривається в новій вкладці)',
  },
  goToHomepage: {
    'en-us': 'Go to Home Page',
    'ru-ru': 'Вернуться на Домашнюю Страницу',
    'es-es': 'Ir a la página de inicio',
    'fr-fr': "Aller à la page d'accueil",
    'uk-ua': 'Перейти на домашню сторінку',
  },
  actions: {
    'en-us': 'Actions',
    'ru-ru': 'Действия',
    'es-es': 'Acciones',
    'fr-fr': 'Actions',
    'uk-ua': 'Дії',
  },
  chooseCollection: {
    'en-us': 'Choose Collection',
    'ru-ru': 'Выбрать коллекцию',
    'es-es': 'Elegir colección',
    'fr-fr': 'Choisissez Collection',
    'uk-ua': 'Виберіть колекцію',
  },
  ascending: {
    comment: 'As in "Ascending sort"',
    'en-us': 'Ascending',
    'ru-ru': 'По возрастанию',
    'es-es': 'Ascendente',
    'fr-fr': 'Ascendant',
    'uk-ua': 'За зростанням',
  },
  descending: {
    comment: 'As in "Descending sort"',
    'en-us': 'Descending',
    'ru-ru': 'По убыванию',
    'es-es': 'Descendente',
    'fr-fr': 'Descendant',
    'uk-ua': 'За спаданням',
  },
  recordSets: {
    'en-us': 'Record Sets',
    'ru-ru': 'Наборы объектов',
    'es-es': 'Conjuntos de registros',
    'fr-fr': "Ensembles d'enregistrements",
    'uk-ua': 'Набори записів',
  },
  recordCount: {
    'en-us': 'Record Count',
    'ru-ru': 'Количество объектов',
    'es-es': 'Número de registros',
    'fr-fr': "Nombre d'enregistrements",
    'uk-ua': 'Кількість записів',
  },
  size: {
    'en-us': 'Size',
    'ru-ru': 'Размер',
    'es-es': 'Tamaño',
    'fr-fr': 'Taille',
    'uk-ua': 'Розмір',
  },
  running: {
    'en-us': 'Running…',
    'ru-ru': 'Выполнение…',
    'es-es': 'Ejecutandose…',
    'fr-fr': 'Exécution…',
    'uk-ua': 'Виконується…',
  },
  noMatches: {
    'en-us': 'No Matches',
    'ru-ru': 'Нет совпадений',
    'es-es': 'Sin coincidencias',
    'fr-fr': 'Pas de correspondance',
    'uk-ua': 'Немає збігів',
  },
  searchQuery: {
    'en-us': 'Search Query',
    'ru-ru': 'Поиск',
    'es-es': 'Consulta de busqueda',
    'fr-fr': 'Requête de recherche',
    'uk-ua': 'Пошуковий запит',
  },
  unknown: {
    'en-us': 'Unknown',
    'ru-ru': 'Неизвестно',
    'es-es': 'Desconocido',
    'fr-fr': 'Inconnu',
    'uk-ua': 'Невідомий',
  },
  language: {
    'en-us': 'Language',
    'ru-ru': 'Язык',
    'es-es': 'Idioma',
    'fr-fr': 'Langue',
    'uk-ua': 'Мова',
  },
  country: {
    'en-us': 'Country',
    'ru-ru': 'Страна',
    'es-es': 'País',
    'fr-fr': 'Pays',
    'uk-ua': 'Країна',
  },
  transactions: {
    'en-us': 'Transactions',
    'ru-ru': 'Транзакции',
    'es-es': 'Transacciones',
    'fr-fr': 'Transactions',
    'uk-ua': 'Транзакції',
  },
  viewRecord: {
    'en-us': 'View Record',
    'ru-ru': 'Открыть запись',
    'es-es': 'Ver registro',
    'fr-fr': "Afficher l'enregistrement",
    'uk-ua': 'Переглянути запис',
  },
  nullInline: {
    'en-us': '(null)',
    'ru-ru': '(нулевой)',
    'es-es': '(nulo)',
    'fr-fr': '(null)',
    'uk-ua': '(нема)',
  },
  filePickerMessage: {
    comment: 'Generic. Could refer to any file',
    'en-us': 'Choose a file or drag it here',
    'ru-ru': 'Выберите файл или перетащите его сюда',
    'es-es': 'Elija un archivo o arrástrelo aquí',
    'fr-fr': 'Sélectionnez un fichier ou déposez-le ici',
    'uk-ua': 'Виберіть файл або перетягніть його сюди',
  },
  selectedFileName: {
    'en-us': 'Selected file',
    'ru-ru': 'Выбранный файл',
    'es-es': 'Fichero seleccionado',
    'fr-fr': 'Fichier sélectionné',
    'uk-ua': 'Вибраний файл',
  },
  all: {
    'en-us': 'All',
    'ru-ru': 'Все',
    'es-es': 'Todo',
    'fr-fr': 'Tous',
    'uk-ua': 'Все',
  },
  unused: {
    'en-us': 'Unused',
    'ru-ru': 'Неиспользованные',
    'es-es': 'Sin usar',
    'fr-fr': 'Inutilisé',
    'uk-ua': 'Невикористаний',
  },
  ordinal: {
    'en-us': 'Ordinal',
    'ru-ru': 'Порядковый номер',
    'es-es': 'Ordinal',
    'fr-fr': 'Ordinal',
    'uk-ua': 'Порядковий',
  },
  export: {
    'en-us': 'Export',
    'ru-ru': 'Экспорт',
    'es-es': 'Exportar',
    'fr-fr': 'Exporter',
    'uk-ua': 'Експорт',
  },
  import: {
    'en-us': 'Import',
    'ru-ru': 'Импорт',
    'es-es': 'Importar',
    'fr-fr': 'Importer',
    'uk-ua': 'Імпорт',
  },
  dismiss: {
    'en-us': 'Dismiss',
    'ru-ru': 'Отклонить',
    'es-es': 'Desestimar',
    'fr-fr': 'Fermer',
    'uk-ua': 'Відхилити',
  },
  id: {
    'en-us': 'ID',
    'ru-ru': 'ИД',
    'es-es': 'IDENTIFICACIÓN',
    'fr-fr': 'ID',
    'uk-ua': 'ІД',
  },
  filter: {
    'en-us': 'Filter',
    'ru-ru': 'Фильтрировать',
    'es-es': 'Filtro',
    'fr-fr': 'Filtre',
    'uk-ua': 'Фільтр',
  },
  results: {
    'en-us': 'Results',
    'ru-ru': 'Результаты',
    'es-es': 'Resultados',
    'fr-fr': 'Résultats',
    'uk-ua': 'Результати',
  },
  downloadErrorMessage: {
    'en-us': 'Download Error Message',
    'ru-ru': 'Скачать ошибку',
    'es-es': 'Mensaje de error de descarga',
    'fr-fr': "Télécharger le message d'erreur",
    'uk-ua': 'Завантажити звіт',
  },
  copied: {
    'en-us': 'Copied!',
    'ru-ru': 'Скопировано!',
    'es-es': '¡Copiado!',
    'fr-fr': 'Copié !',
    'uk-ua': 'Скопійовано!',
  },
  copyToClipboard: {
    'en-us': 'Copy to clipboard',
    'ru-ru': 'Скопировать в буфер обмена',
    'es-es': 'Copiar al portapapeles',
    'fr-fr': 'Copier dans le presse-papiers',
    'uk-ua': 'Копіювати в буфер обміну',
  },
  selected: {
    'en-us': 'Selected',
    'ru-ru': 'Выбрано',
    'es-es': 'Selección',
    'fr-fr': 'Sélectionné',
    'uk-ua': 'Вибрано',
  },
  expand: {
    'en-us': 'Expand',
    'ru-ru': 'Расширить',
    'es-es': 'Ampliar',
    'fr-fr': 'Agrandir',
    'uk-ua': 'Розгорнути',
  },
  expandAll: {
    'en-us': 'Expand All',
    'ru-ru': 'Развернуть все',
    'es-es': 'Ampliar todo',
    'fr-fr': 'Tout agrandir',
    'uk-ua': 'Розгорнути всі',
  },
  collapse: {
    'en-us': 'Collapse',
    'es-es': 'Colapso',
    'fr-fr': 'Effondrement',
    'ru-ru': 'Крах',
    'uk-ua': 'Колапс',
  },
  collapseAll: {
    'en-us': 'Collapse All',
    'ru-ru': 'Свернуть все',
    'es-es': 'Contraer todo',
    'fr-fr': 'Tout réduire',
    'uk-ua': 'Згорнути всі',
  },
  reset: {
    'en-us': 'Reset',
    'ru-ru': 'Сброс',
    'es-es': 'Restablecer',
    'fr-fr': 'Réinitialiser',
    'uk-ua': 'Скинути',
  },
  select: {
    'en-us': 'Select',
    'ru-ru': 'Выбрать',
    'es-es': 'Seleccione',
    'fr-fr': 'Sélectionner',
    'uk-ua': 'Вибрати',
  },
  none: {
    'en-us': 'None',
    'ru-ru': 'Никакой',
    'es-es': 'Ninguno',
    'fr-fr': 'Aucun',
    'uk-ua': 'Ніяке',
  },
  noneAvailable: {
    'en-us': 'None available',
    'ru-ru': 'Нет доступных вариантов',
    'es-es': 'No disponible',
    'fr-fr': 'Aucun disponible',
    'uk-ua': 'Немає доступних',
  },
  countLine: {
    comment: 'Example usage: Record Sets (1,234)',
    'en-us': '{resource:string} ({count:number|formatted})',
    'ru-ru': '{resource:string} ({count:number|formatted})',
    'es-es': '{resource:string} ({count:number|formatted})',
    'fr-fr': '{resource:string} ({count:number|formatted})',
    'uk-ua': '{resource:string} ({count:number|formatted})',
  },
  jsxCountLine: {
    comment: 'Example usage: Record Sets (1,234)',
    'en-us': '{resource:string} <wrap>({count:number|formatted})</wrap>',
    'ru-ru': '{resource:string} <wrap>({count:number|formatted})</wrap>',
    'es-es': '{resource:string} <wrap>({count:number|formatted})</wrap>',
    'fr-fr': '{resource:string} <wrap>({count:number|formatted})</wrap>',
    'uk-ua': '{resource:string} <wrap>({count:number|formatted})</wrap>',
  },
  colonLine: {
    comment: `
      Example usage: "Created by: Full Name" OR "Record Set: Record Set Name"
    `,
    'en-us': '{label:string}: {value:string}',
    'ru-ru': '{label:string}: {value:string}',
    'es-es': '{label:string}: {value:string}',
    'fr-fr': '{label:string}: {value:string}',
    'uk-ua': '{label:string}: {value:string}',
  },
  jsxColonLine: {
    comment: `
      Example usage: "Created by: Full Name" OR "Record Set: Record Set Name"
    `,
    'en-us': '{label:string}: <wrap />',
    'ru-ru': '{label:string}: <wrap />',
    'es-es': '{label:string}: <wrap />',
    'fr-fr': '{label:string} : <wrap />',
    'uk-ua': '{label:string}: <wrap />',
  },
  online: {
    'en-us': 'online',
    'es-es': 'conectado',
    'fr-fr': 'en ligne',
    'ru-ru': 'онлайн',
    'uk-ua': 'онлайн',
  },
  offline: {
    'en-us': 'offline',
    'es-es': 'desconectado',
    'fr-fr': 'hors ligne',
    'ru-ru': 'не в сети',
    'uk-ua': 'офлайн',
  },
  timeRemaining: {
    'en-us': 'Time remaining'
  },
} as const);
