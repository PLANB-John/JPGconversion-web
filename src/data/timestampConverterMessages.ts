import { defaultLocale, type LocaleCode } from "@/data/locales";

type TimestampConverterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
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
