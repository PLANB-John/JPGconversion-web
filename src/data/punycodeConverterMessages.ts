import { defaultLocale, type LocaleCode } from "@/data/locales";

export type PunycodeConverterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  unicodeLabel: string;
  punycodeLabel: string;
  unicodePlaceholder: string;
  punycodePlaceholder: string;
  toPunycodeButton: string;
  toUnicodeButton: string;
  copyButton: string;
  copiedButton: string;
  sampleButton: string;
  clearButton: string;
  errorPrefix: string;
  emptyUnicodeMessage: string;
  emptyPunycodeMessage: string;
  invalidUnicodeMessage: string;
  invalidPunycodeMessage: string;
  successToPunycodeMessage: string;
  successToUnicodeMessage: string;
  helperText: string;
};

const punycodeConverterMessages: Partial<Record<LocaleCode, PunycodeConverterMessages>> = {
  en: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "Convert Unicode domain names to ASCII Punycode and decode Punycode back to readable Unicode in your browser.",
    title: "Punycode Converter",
    description: "Convert internationalized domain names between readable Unicode and ASCII Punycode without leaving your browser.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter a domain such as bücher.de or 例え.テスト in the Unicode field and click Convert to Punycode.",
      "Paste a domain such as xn--bcher-kva.de in the Punycode field and click Convert to Unicode.",
      "Use Sample to load an example domain, Copy to save the result, or Clear to reset both fields."
    ],
    unicodeLabel: "Unicode domain",
    punycodeLabel: "Punycode / ASCII domain",
    unicodePlaceholder: "Enter a Unicode domain, for example: café.example",
    punycodePlaceholder: "ASCII result appears here, for example: xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "Copy",
    copiedButton: "Copied!",
    sampleButton: "Sample",
    clearButton: "Clear",
    errorPrefix: "Error:",
    emptyUnicodeMessage: "Please enter a Unicode domain before converting to Punycode.",
    emptyPunycodeMessage: "Please enter an ASCII or Punycode domain before converting to Unicode.",
    invalidUnicodeMessage: "That domain could not be converted. Please check for spaces, empty labels, or invalid characters.",
    invalidPunycodeMessage: "That Punycode domain looks invalid. Please check each label and try again.",
    successToPunycodeMessage: "Converted to ASCII Punycode successfully.",
    successToUnicodeMessage: "Converted to Unicode successfully.",
    helperText: "Tip: full domains with multiple labels are supported, such as subdomain.مثال.إختبار."
  },
  ko: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "브라우저에서 유니코드 도메인을 ASCII Punycode로 변환하고 다시 유니코드로 복원하세요.",
    title: "Punycode Converter",
    description: "국제화 도메인 이름을 사람이 읽기 쉬운 유니코드와 ASCII Punycode 사이에서 빠르게 변환하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "Unicode 영역에 bücher.de 또는 例え.テスト 같은 도메인을 입력한 뒤 Convert to Punycode를 누르세요.",
      "Punycode 영역에 xn--bcher-kva.de 같은 값을 붙여넣고 Convert to Unicode를 누르세요.",
      "Sample로 예시를 불러오고, Copy로 결과를 복사하거나, Clear로 두 입력값을 모두 지울 수 있습니다."
    ],
    unicodeLabel: "유니코드 도메인",
    punycodeLabel: "Punycode / ASCII 도메인",
    unicodePlaceholder: "유니코드 도메인을 입력하세요. 예: café.example",
    punycodePlaceholder: "ASCII 결과가 여기에 표시됩니다. 예: xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플",
    clearButton: "지우기",
    errorPrefix: "오류:",
    emptyUnicodeMessage: "Punycode로 변환하려면 먼저 유니코드 도메인을 입력해 주세요.",
    emptyPunycodeMessage: "유니코드로 변환하려면 먼저 ASCII 또는 Punycode 도메인을 입력해 주세요.",
    invalidUnicodeMessage: "도메인을 변환할 수 없습니다. 공백, 빈 라벨, 잘못된 문자가 없는지 확인해 주세요.",
    invalidPunycodeMessage: "Punycode 도메인 형식이 올바르지 않습니다. 각 라벨을 다시 확인해 주세요.",
    successToPunycodeMessage: "ASCII Punycode로 변환했습니다.",
    successToUnicodeMessage: "유니코드로 변환했습니다.",
    helperText: "팁: subdomain.مثال.إختبار 같은 여러 라벨 도메인도 처리할 수 있습니다."
  },
  ja: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "UnicodeドメインをASCII Punycodeへ変換し、PunycodeをUnicodeへ戻せます。",
    title: "Punycode Converter",
    description: "国際化ドメイン名を、読みやすいUnicodeとASCII Punycodeの間でブラウザ内変換できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "Unicode欄に bücher.de や 例え.テスト のようなドメインを入力して Convert to Punycode を押します。",
      "Punycode欄に xn--bcher-kva.de のような値を貼り付けて Convert to Unicode を押します。",
      "Sample でサンプルを読み込み、Copy で結果をコピーし、Clear で両方の欄をリセットできます。"
    ],
    unicodeLabel: "Unicodeドメイン",
    punycodeLabel: "Punycode / ASCIIドメイン",
    unicodePlaceholder: "Unicodeドメインを入力してください。例: café.example",
    punycodePlaceholder: "ASCII結果がここに表示されます。例: xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "コピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプル",
    clearButton: "クリア",
    errorPrefix: "エラー:",
    emptyUnicodeMessage: "Punycodeへ変換する前にUnicodeドメインを入力してください。",
    emptyPunycodeMessage: "Unicodeへ変換する前にASCIIまたはPunycodeドメインを入力してください。",
    invalidUnicodeMessage: "そのドメインは変換できませんでした。空白、空ラベル、無効な文字を確認してください。",
    invalidPunycodeMessage: "そのPunycodeドメインは無効な可能性があります。各ラベルを確認してください。",
    successToPunycodeMessage: "ASCII Punycodeに変換しました。",
    successToUnicodeMessage: "Unicodeに変換しました。",
    helperText: "ヒント: subdomain.مثال.إختبار のような複数ラベルのドメインにも対応します。"
  },
  es: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "Convierte dominios Unicode a ASCII Punycode y vuelve a Unicode directamente en tu navegador.",
    title: "Punycode Converter",
    description: "Convierte nombres de dominio internacionalizados entre Unicode legible y ASCII Punycode de forma instantánea.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe un dominio como bücher.de o 例え.テスト en el campo Unicode y haz clic en Convert to Punycode.",
      "Pega un dominio como xn--bcher-kva.de en el campo Punycode y haz clic en Convert to Unicode.",
      "Usa Sample para cargar un ejemplo, Copy para guardar el resultado o Clear para vaciar ambos campos."
    ],
    unicodeLabel: "Dominio Unicode",
    punycodeLabel: "Dominio Punycode / ASCII",
    unicodePlaceholder: "Ingresa un dominio Unicode, por ejemplo: café.example",
    punycodePlaceholder: "El resultado ASCII aparecerá aquí, por ejemplo: xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "Copiar",
    copiedButton: "¡Copiado!",
    sampleButton: "Ejemplo",
    clearButton: "Limpiar",
    errorPrefix: "Error:",
    emptyUnicodeMessage: "Ingresa un dominio Unicode antes de convertir a Punycode.",
    emptyPunycodeMessage: "Ingresa un dominio ASCII o Punycode antes de convertir a Unicode.",
    invalidUnicodeMessage: "No se pudo convertir ese dominio. Revisa espacios, etiquetas vacías o caracteres no válidos.",
    invalidPunycodeMessage: "Ese dominio Punycode parece no válido. Revisa cada etiqueta e inténtalo de nuevo.",
    successToPunycodeMessage: "Convertido correctamente a ASCII Punycode.",
    successToUnicodeMessage: "Convertido correctamente a Unicode.",
    helperText: "Consejo: se admiten dominios completos con varias etiquetas, como subdomain.مثال.إختبار."
  },
  fr: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "Convertissez des domaines Unicode en ASCII Punycode et inversement directement dans votre navigateur.",
    title: "Punycode Converter",
    description: "Convertissez rapidement des noms de domaine internationalisés entre Unicode lisible et ASCII Punycode.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez un domaine comme bücher.de ou 例え.テスト dans le champ Unicode puis cliquez sur Convert to Punycode.",
      "Collez un domaine comme xn--bcher-kva.de dans le champ Punycode puis cliquez sur Convert to Unicode.",
      "Utilisez Sample pour charger un exemple, Copy pour enregistrer le résultat, ou Clear pour vider les deux champs."
    ],
    unicodeLabel: "Domaine Unicode",
    punycodeLabel: "Domaine Punycode / ASCII",
    unicodePlaceholder: "Saisissez un domaine Unicode, par exemple : café.example",
    punycodePlaceholder: "Le résultat ASCII s'affiche ici, par exemple : xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "Copier",
    copiedButton: "Copié !",
    sampleButton: "Exemple",
    clearButton: "Effacer",
    errorPrefix: "Erreur :",
    emptyUnicodeMessage: "Veuillez saisir un domaine Unicode avant la conversion en Punycode.",
    emptyPunycodeMessage: "Veuillez saisir un domaine ASCII ou Punycode avant la conversion en Unicode.",
    invalidUnicodeMessage: "Impossible de convertir ce domaine. Vérifiez les espaces, les étiquettes vides ou les caractères invalides.",
    invalidPunycodeMessage: "Ce domaine Punycode semble invalide. Vérifiez chaque étiquette et réessayez.",
    successToPunycodeMessage: "Conversion en ASCII Punycode réussie.",
    successToUnicodeMessage: "Conversion en Unicode réussie.",
    helperText: "Astuce : les domaines complets avec plusieurs étiquettes sont pris en charge, comme subdomain.مثال.إختبار."
  },
  de: {
    metadataTitle: "Punycode Converter",
    metadataDescription: "Wandle Unicode-Domains im Browser in ASCII-Punycode um und dekodiere sie wieder zurück.",
    title: "Punycode Converter",
    description: "Konvertiere internationalisierte Domainnamen direkt zwischen lesbarem Unicode und ASCII-Punycode.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib im Unicode-Feld eine Domain wie bücher.de oder 例え.テスト ein und klicke auf Convert to Punycode.",
      "Füge im Punycode-Feld eine Domain wie xn--bcher-kva.de ein und klicke auf Convert to Unicode.",
      "Nutze Sample für ein Beispiel, Copy zum Übernehmen des Ergebnisses oder Clear zum Zurücksetzen beider Felder."
    ],
    unicodeLabel: "Unicode-Domain",
    punycodeLabel: "Punycode- / ASCII-Domain",
    unicodePlaceholder: "Unicode-Domain eingeben, zum Beispiel: café.example",
    punycodePlaceholder: "Das ASCII-Ergebnis erscheint hier, zum Beispiel: xn--caf-dma.example",
    toPunycodeButton: "Convert to Punycode",
    toUnicodeButton: "Convert to Unicode",
    copyButton: "Kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispiel",
    clearButton: "Leeren",
    errorPrefix: "Fehler:",
    emptyUnicodeMessage: "Bitte gib eine Unicode-Domain ein, bevor du in Punycode umwandelst.",
    emptyPunycodeMessage: "Bitte gib eine ASCII- oder Punycode-Domain ein, bevor du in Unicode umwandelst.",
    invalidUnicodeMessage: "Diese Domain konnte nicht umgewandelt werden. Bitte prüfe Leerzeichen, leere Labels oder ungültige Zeichen.",
    invalidPunycodeMessage: "Diese Punycode-Domain scheint ungültig zu sein. Bitte prüfe jedes Label und versuche es erneut.",
    successToPunycodeMessage: "Erfolgreich in ASCII-Punycode umgewandelt.",
    successToUnicodeMessage: "Erfolgreich in Unicode umgewandelt.",
    helperText: "Tipp: vollständige Domains mit mehreren Labels werden unterstützt, zum Beispiel subdomain.مثال.إختبار."
  }
};

export function getPunycodeConverterMessages(locale: LocaleCode): PunycodeConverterMessages {
  return punycodeConverterMessages[locale] ?? punycodeConverterMessages[defaultLocale]!;
}
