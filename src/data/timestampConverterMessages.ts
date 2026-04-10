import { defaultLocale, type LocaleCode } from "@/data/locales";

type TimestampConverterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  supportSectionTitle: string;
  supportSectionDescription: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  quickStepsTitle: string;
  quickSteps: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  timestampSectionTitle: string;
  dateTimeSectionTitle: string;
  timestampLabel: string;
  dateTimeLabel: string;
  timestampPlaceholder: string;
  dateTimePlaceholder: string;
  secondsLabel: string;
  millisecondsLabel: string;
  localTimeLabel: string;
  utcTimeLabel: string;
  isoTimeLabel: string;
  timestampToDateButton: string;
  dateToTimestampButton: string;
  useCurrentTimeButton: string;
  sampleButton: string;
  clearButton: string;
  copyButton: string;
  copiedButton: string;
  resultTitle: string;
  emptyState: string;
  timestampHint: string;
  dateTimeHint: string;
  invalidTimestampMessage: string;
  invalidDateTimeMessage: string;
  outOfRangeMessage: string;
  currentTimeReadyMessage: string;
};

const timestampConverterMessages: Partial<Record<LocaleCode, TimestampConverterMessages>> = {
  en: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "Convert Unix timestamps and readable dates instantly in your browser.",
    title: "Timestamp Converter",
    description: "Convert Unix seconds, Unix milliseconds, and readable date/time text in both directions without leaving your browser.",
    supportSectionTitle: "Timestamp conversion quick guide",
    supportSectionDescription: "Use this lightweight section to choose the right timestamp workflow and jump into deeper troubleshooting guides.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need to read raw API or log timestamps quickly.",
      "You want to verify if a value is in seconds or milliseconds.",
      "You need a fast UTC and local-time comparison before debugging further."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste a timestamp or date/time value.",
      "Run conversion and compare seconds, milliseconds, UTC, and local output.",
      "Use related guides if unit or timezone issues still look unclear."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Assuming every numeric timestamp is milliseconds.",
      "Comparing local output to UTC logs without converting both sides.",
      "Trusting one field without checking source timezone assumptions."
    ],
    relatedGuidesTitle: "Related Timestamp Converter guides",
    relatedGuidesDescription: "Read short practical guides for unit mismatches, API date differences, and timezone debugging.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter a Unix timestamp and click Convert to Date to see local time, UTC, and ISO output.",
      "Enter a readable date/time like 2026-03-18 14:30:00 and click Convert to Timestamp.",
      "Use Current Time, Sample, Copy, and Clear to test quickly."
    ],
    timestampSectionTitle: "Timestamp to date/time",
    dateTimeSectionTitle: "Date/time to timestamp",
    timestampLabel: "Unix timestamp",
    dateTimeLabel: "Date/time text",
    timestampPlaceholder: "Example: 1710768000 or 1710768000000",
    dateTimePlaceholder: "Example: 2026-03-18 14:30:00 or 2026-03-18T14:30:00Z",
    secondsLabel: "Unix seconds",
    millisecondsLabel: "Unix milliseconds",
    localTimeLabel: "Local time",
    utcTimeLabel: "UTC time",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "Use Current Time",
    sampleButton: "Sample",
    clearButton: "Clear",
    copyButton: "Copy",
    copiedButton: "Copied!",
    resultTitle: "Results",
    emptyState: "Enter a timestamp or date/time to see conversion results.",
    timestampHint: "You can paste either 10-digit seconds or 13-digit milliseconds.",
    dateTimeHint: "Use a readable format such as YYYY-MM-DD HH:mm:ss or an ISO string.",
    invalidTimestampMessage: "Enter a valid Unix timestamp using digits only.",
    invalidDateTimeMessage: "Enter a valid date/time. Try formats like 2026-03-18 14:30:00 or 2026-03-18T14:30:00Z.",
    outOfRangeMessage: "That value is outside the supported JavaScript date range.",
    currentTimeReadyMessage: "Current time loaded."
  },
  ko: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "브라우저에서 유닉스 타임스탬프와 읽기 쉬운 날짜를 바로 변환하세요.",
    title: "Timestamp Converter",
    description: "유닉스 초, 유닉스 밀리초, 읽기 쉬운 날짜/시간 텍스트를 브라우저 안에서 양방향으로 변환할 수 있습니다.",
    supportSectionTitle: "타임스탬프 변환 빠른 가이드",
    supportSectionDescription: "가벼운 안내로 단위/시간대 확인 흐름을 잡고, 필요한 심화 가이드로 바로 이동하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "API나 로그의 원시 타임스탬프를 빠르게 읽어야 할 때",
      "값이 초 단위인지 밀리초 단위인지 확인할 때",
      "본격 디버깅 전에 UTC와 로컬 시간을 빠르게 비교할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "타임스탬프 또는 날짜/시간 값을 붙여넣으세요.",
      "변환 후 seconds, milliseconds, UTC, local 결과를 비교하세요.",
      "단위/시간대가 헷갈리면 관련 가이드로 이어서 확인하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "숫자 타임스탬프를 모두 밀리초로 가정하는 것",
      "로컬 표시값과 UTC 로그를 변환 없이 직접 비교하는 것",
      "소스 시간대 가정을 확인하지 않고 한 필드만 믿는 것"
    ],
    relatedGuidesTitle: "관련 Timestamp Converter 가이드",
    relatedGuidesDescription: "단위 혼동, API 날짜 불일치, 시간대 디버깅을 다루는 짧은 가이드를 확인하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "유닉스 타임스탬프를 입력하고 Convert to Date를 누르면 로컬 시간, UTC, ISO 결과를 확인할 수 있습니다.",
      "2026-03-18 14:30:00 같은 날짜/시간 문자열을 입력하고 Convert to Timestamp를 누르세요.",
      "현재 시간, 샘플, 복사, 지우기 버튼으로 빠르게 테스트할 수 있습니다."
    ],
    timestampSectionTitle: "타임스탬프 → 날짜/시간",
    dateTimeSectionTitle: "날짜/시간 → 타임스탬프",
    timestampLabel: "유닉스 타임스탬프",
    dateTimeLabel: "날짜/시간 텍스트",
    timestampPlaceholder: "예: 1710768000 또는 1710768000000",
    dateTimePlaceholder: "예: 2026-03-18 14:30:00 또는 2026-03-18T14:30:00Z",
    secondsLabel: "유닉스 초",
    millisecondsLabel: "유닉스 밀리초",
    localTimeLabel: "로컬 시간",
    utcTimeLabel: "UTC 시간",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "현재 시간 사용",
    sampleButton: "샘플",
    clearButton: "지우기",
    copyButton: "복사",
    copiedButton: "복사됨!",
    resultTitle: "결과",
    emptyState: "타임스탬프 또는 날짜/시간을 입력하면 변환 결과가 표시됩니다.",
    timestampHint: "10자리 초 단위 또는 13자리 밀리초 단위를 붙여넣을 수 있습니다.",
    dateTimeHint: "YYYY-MM-DD HH:mm:ss 또는 ISO 문자열처럼 읽을 수 있는 형식을 사용하세요.",
    invalidTimestampMessage: "숫자만 포함한 올바른 유닉스 타임스탬프를 입력해 주세요.",
    invalidDateTimeMessage: "올바른 날짜/시간을 입력해 주세요. 예: 2026-03-18 14:30:00 또는 2026-03-18T14:30:00Z",
    outOfRangeMessage: "이 값은 JavaScript 날짜 범위를 벗어납니다.",
    currentTimeReadyMessage: "현재 시간을 불러왔습니다."
  },
  ja: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "ブラウザ上でUnixタイムスタンプと読みやすい日時をすぐに変換できます。",
    title: "Timestamp Converter",
    description: "Unix秒、Unixミリ秒、日時テキストをブラウザ内で双方向に変換できます。",
    supportSectionTitle: "タイムスタンプ変換クイックガイド",
    supportSectionDescription: "短い実務向けガイドで変換手順を確認し、必要なら関連トラブルシュート記事へ進めます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "APIやログの生タイムスタンプをすぐ読みたいとき",
      "秒かミリ秒かを素早く切り分けたいとき",
      "詳細調査前にUTCとローカル表示を比較したいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "タイムスタンプまたは日時を貼り付けます。",
      "変換して seconds / milliseconds / UTC / local を見比べます。",
      "単位やタイムゾーンが不明なら関連ガイドを開きます。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "数値タイムスタンプをすべてミリ秒と決めつけること",
      "ローカル表示とUTCログを変換せず比較すること",
      "ソースのタイムゾーン前提を確認しないこと"
    ],
    relatedGuidesTitle: "関連Timestamp Converterガイド",
    relatedGuidesDescription: "単位不一致、API日付差分、タイムゾーン調査の実践ガイドを確認できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "Unixタイムスタンプを入力してConvert to Dateを押すと、ローカル時間、UTC、ISOが表示されます。",
      "2026-03-18 14:30:00 のような日時文字列を入力してConvert to Timestampを押します。",
      "Current Time、Sample、Copy、Clear を使ってすばやく試せます。"
    ],
    timestampSectionTitle: "タイムスタンプ → 日時",
    dateTimeSectionTitle: "日時 → タイムスタンプ",
    timestampLabel: "Unixタイムスタンプ",
    dateTimeLabel: "日時テキスト",
    timestampPlaceholder: "例: 1710768000 または 1710768000000",
    dateTimePlaceholder: "例: 2026-03-18 14:30:00 または 2026-03-18T14:30:00Z",
    secondsLabel: "Unix秒",
    millisecondsLabel: "Unixミリ秒",
    localTimeLabel: "ローカル時間",
    utcTimeLabel: "UTC時間",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "現在時刻を使う",
    sampleButton: "サンプル",
    clearButton: "クリア",
    copyButton: "コピー",
    copiedButton: "コピーしました！",
    resultTitle: "結果",
    emptyState: "タイムスタンプまたは日時を入力すると変換結果が表示されます。",
    timestampHint: "10桁の秒または13桁のミリ秒を入力できます。",
    dateTimeHint: "YYYY-MM-DD HH:mm:ss や ISO 文字列のような読みやすい形式を使ってください。",
    invalidTimestampMessage: "数字のみの有効なUnixタイムスタンプを入力してください。",
    invalidDateTimeMessage: "有効な日時を入力してください。例: 2026-03-18 14:30:00 または 2026-03-18T14:30:00Z",
    outOfRangeMessage: "この値はJavaScriptの日付範囲を超えています。",
    currentTimeReadyMessage: "現在時刻を読み込みました。"
  },
  es: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "Convierte timestamps Unix y fechas legibles al instante en tu navegador.",
    title: "Timestamp Converter",
    description: "Convierte en ambos sentidos entre segundos Unix, milisegundos Unix y texto de fecha/hora sin salir del navegador.",
    supportSectionTitle: "Guía rápida de conversión de timestamps",
    supportSectionDescription: "Sección breve para elegir el flujo correcto y saltar a guías de depuración más específicas.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Necesitas leer timestamps crudos de API o logs rápidamente.",
      "Quieres confirmar si el valor está en segundos o milisegundos.",
      "Debes comparar UTC y hora local antes de depurar más."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega un timestamp o una fecha/hora.",
      "Convierte y compara segundos, milisegundos, UTC y hora local.",
      "Si sigue la duda, abre las guías relacionadas de unidad y zona horaria."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Asumir que todo timestamp numérico está en milisegundos.",
      "Comparar salida local con logs UTC sin convertir ambos lados.",
      "Confiar en un campo sin validar la zona horaria de origen."
    ],
    relatedGuidesTitle: "Guías relacionadas de Timestamp Converter",
    relatedGuidesDescription: "Consulta guías breves sobre desajustes de unidad, fechas API y confusión de zona horaria.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Ingresa un timestamp Unix y haz clic en Convert to Date para ver hora local, UTC e ISO.",
      "Ingresa una fecha legible como 2026-03-18 14:30:00 y haz clic en Convert to Timestamp.",
      "Usa Current Time, Sample, Copy y Clear para probar rápido."
    ],
    timestampSectionTitle: "Timestamp → fecha/hora",
    dateTimeSectionTitle: "Fecha/hora → timestamp",
    timestampLabel: "Timestamp Unix",
    dateTimeLabel: "Texto de fecha/hora",
    timestampPlaceholder: "Ejemplo: 1710768000 o 1710768000000",
    dateTimePlaceholder: "Ejemplo: 2026-03-18 14:30:00 o 2026-03-18T14:30:00Z",
    secondsLabel: "Segundos Unix",
    millisecondsLabel: "Milisegundos Unix",
    localTimeLabel: "Hora local",
    utcTimeLabel: "Hora UTC",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "Usar hora actual",
    sampleButton: "Ejemplo",
    clearButton: "Limpiar",
    copyButton: "Copiar",
    copiedButton: "¡Copiado!",
    resultTitle: "Resultados",
    emptyState: "Ingresa un timestamp o una fecha/hora para ver los resultados.",
    timestampHint: "Puedes pegar segundos de 10 dígitos o milisegundos de 13 dígitos.",
    dateTimeHint: "Usa un formato legible como YYYY-MM-DD HH:mm:ss o una cadena ISO.",
    invalidTimestampMessage: "Ingresa un timestamp Unix válido usando solo números.",
    invalidDateTimeMessage: "Ingresa una fecha/hora válida. Prueba formatos como 2026-03-18 14:30:00 o 2026-03-18T14:30:00Z.",
    outOfRangeMessage: "Ese valor está fuera del rango admitido por JavaScript Date.",
    currentTimeReadyMessage: "Hora actual cargada."
  },
  fr: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "Convertissez instantanément les timestamps Unix et les dates lisibles dans votre navigateur.",
    title: "Timestamp Converter",
    description: "Convertissez dans les deux sens entre secondes Unix, millisecondes Unix et texte date/heure directement dans le navigateur.",
    supportSectionTitle: "Guide rapide de conversion des timestamps",
    supportSectionDescription: "Petit guide pratique pour valider rapidement les valeurs et continuer vers des guides de diagnostic ciblés.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vous devez lire vite des timestamps bruts d'API ou de logs.",
      "Vous voulez vérifier l'unité secondes vs millisecondes.",
      "Vous devez comparer UTC et heure locale avant un debug complet."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez un timestamp ou une date/heure.",
      "Lancez la conversion puis comparez secondes, millisecondes, UTC et local.",
      "Ouvrez les guides liés si l'écart d'unité ou de fuseau persiste."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Supposer que toute valeur numérique est en millisecondes.",
      "Comparer affichage local et logs UTC sans conversion commune.",
      "Faire confiance à un seul champ sans vérifier le fuseau source."
    ],
    relatedGuidesTitle: "Guides liés au Timestamp Converter",
    relatedGuidesDescription: "Parcourez des guides courts sur les unités, les dates API et les erreurs de fuseau horaire.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez un timestamp Unix puis cliquez sur Convert to Date pour voir l'heure locale, UTC et ISO.",
      "Saisissez une date lisible comme 2026-03-18 14:30:00 puis cliquez sur Convert to Timestamp.",
      "Utilisez Current Time, Sample, Copy et Clear pour tester rapidement."
    ],
    timestampSectionTitle: "Timestamp → date/heure",
    dateTimeSectionTitle: "Date/heure → timestamp",
    timestampLabel: "Timestamp Unix",
    dateTimeLabel: "Texte date/heure",
    timestampPlaceholder: "Exemple : 1710768000 ou 1710768000000",
    dateTimePlaceholder: "Exemple : 2026-03-18 14:30:00 ou 2026-03-18T14:30:00Z",
    secondsLabel: "Secondes Unix",
    millisecondsLabel: "Millisecondes Unix",
    localTimeLabel: "Heure locale",
    utcTimeLabel: "Heure UTC",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "Utiliser l'heure actuelle",
    sampleButton: "Exemple",
    clearButton: "Effacer",
    copyButton: "Copier",
    copiedButton: "Copié !",
    resultTitle: "Résultats",
    emptyState: "Saisissez un timestamp ou une date/heure pour voir les résultats.",
    timestampHint: "Vous pouvez coller des secondes sur 10 chiffres ou des millisecondes sur 13 chiffres.",
    dateTimeHint: "Utilisez un format lisible comme YYYY-MM-DD HH:mm:ss ou une chaîne ISO.",
    invalidTimestampMessage: "Saisissez un timestamp Unix valide avec des chiffres uniquement.",
    invalidDateTimeMessage: "Saisissez une date/heure valide. Essayez par exemple 2026-03-18 14:30:00 ou 2026-03-18T14:30:00Z.",
    outOfRangeMessage: "Cette valeur dépasse la plage prise en charge par JavaScript Date.",
    currentTimeReadyMessage: "Heure actuelle chargée."
  },
  de: {
    metadataTitle: "Timestamp Converter",
    metadataDescription: "Konvertiere Unix-Timestamps und lesbare Datumswerte sofort im Browser.",
    title: "Timestamp Converter",
    description: "Wandle Unix-Sekunden, Unix-Millisekunden und lesbaren Datums-/Zeittext direkt im Browser in beide Richtungen um.",
    supportSectionTitle: "Schnellhilfe zur Timestamp-Konvertierung",
    supportSectionDescription: "Kurzer Praxisbereich für schnelle Einheiten- und Zeitzonenchecks mit direkten Links zu passenden Guides.",
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Du willst rohe API- oder Log-Timestamps schnell lesen.",
      "Du musst Sekunden und Millisekunden eindeutig unterscheiden.",
      "Du willst UTC- und Lokalzeit vergleichen, bevor du tiefer debuggst."
    ],
    quickStepsTitle: "Kurze Schritte",
    quickSteps: [
      "Timestamp oder Datum/Uhrzeit einfügen.",
      "Konvertieren und Sekunden, Millisekunden, UTC und Lokalzeit vergleichen.",
      "Bei Unklarheiten passende Guides zu Einheit und Zeitzone öffnen."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Jeden numerischen Timestamp als Millisekunden behandeln.",
      "Lokale Ausgabe direkt mit UTC-Logs vergleichen.",
      "Eine Zeitangabe übernehmen, ohne Quell-Zeitzone zu prüfen."
    ],
    relatedGuidesTitle: "Zugehörige Timestamp-Converter-Guides",
    relatedGuidesDescription: "Lies kurze Guides zu Einheitenfehlern, API-Datumsabweichungen und Zeitzonenproblemen.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib einen Unix-Timestamp ein und klicke auf Convert to Date, um lokale Zeit, UTC und ISO zu sehen.",
      "Gib ein lesbares Datum wie 2026-03-18 14:30:00 ein und klicke auf Convert to Timestamp.",
      "Nutze Current Time, Sample, Copy und Clear zum schnellen Testen."
    ],
    timestampSectionTitle: "Timestamp → Datum/Uhrzeit",
    dateTimeSectionTitle: "Datum/Uhrzeit → Timestamp",
    timestampLabel: "Unix-Timestamp",
    dateTimeLabel: "Datums-/Zeittext",
    timestampPlaceholder: "Beispiel: 1710768000 oder 1710768000000",
    dateTimePlaceholder: "Beispiel: 2026-03-18 14:30:00 oder 2026-03-18T14:30:00Z",
    secondsLabel: "Unix-Sekunden",
    millisecondsLabel: "Unix-Millisekunden",
    localTimeLabel: "Lokale Zeit",
    utcTimeLabel: "UTC-Zeit",
    isoTimeLabel: "ISO 8601",
    timestampToDateButton: "Convert to Date",
    dateToTimestampButton: "Convert to Timestamp",
    useCurrentTimeButton: "Aktuelle Zeit verwenden",
    sampleButton: "Beispiel",
    clearButton: "Leeren",
    copyButton: "Kopieren",
    copiedButton: "Kopiert!",
    resultTitle: "Ergebnisse",
    emptyState: "Gib einen Timestamp oder Datums-/Zeitwert ein, um Ergebnisse zu sehen.",
    timestampHint: "Du kannst 10-stellige Sekunden oder 13-stellige Millisekunden einfügen.",
    dateTimeHint: "Nutze ein lesbares Format wie YYYY-MM-DD HH:mm:ss oder einen ISO-String.",
    invalidTimestampMessage: "Gib einen gültigen Unix-Timestamp nur mit Ziffern ein.",
    invalidDateTimeMessage: "Gib ein gültiges Datum bzw. eine gültige Uhrzeit ein. Zum Beispiel 2026-03-18 14:30:00 oder 2026-03-18T14:30:00Z.",
    outOfRangeMessage: "Dieser Wert liegt außerhalb des von JavaScript Date unterstützten Bereichs.",
    currentTimeReadyMessage: "Aktuelle Zeit geladen."
  }
};

export function getTimestampConverterMessages(locale: LocaleCode): TimestampConverterMessages {
  return timestampConverterMessages[locale] ?? timestampConverterMessages[defaultLocale]!;
}

export type { TimestampConverterMessages };
