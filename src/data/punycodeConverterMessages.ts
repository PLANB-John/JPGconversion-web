import { defaultLocale, type LocaleCode } from "@/data/locales";

export type PunycodeConverterMessages = {
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
    supportSectionTitle: "Quick Punycode workflow guide",
    supportSectionDescription: "Use this lightweight reference to decide when to convert domains, avoid common mistakes, and jump to related guides.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need to decode an xn-- domain before reviewing it.",
      "You are validating internationalized domains in redirects or forms.",
      "You want to compare Unicode and ASCII forms of the same domain."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste a Unicode or xn-- domain into the matching field.",
      "Convert, then review the output label-by-label.",
      "Copy the normalized result and verify it in your actual workflow."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Assuming every xn-- domain is malicious without decoding it.",
      "Comparing Unicode and Punycode strings as unrelated values.",
      "Converting only one label in a multi-label domain."
    ],
    relatedGuidesTitle: "Related Punycode guides",
    relatedGuidesDescription: "Read short practical guides to understand xn-- labels, Unicode vs Punycode differences, and safer domain checks.",
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
    supportSectionTitle: "Punycode 빠른 실무 가이드",
    supportSectionDescription: "짧은 안내로 변환 시점을 판단하고, 자주 하는 실수를 줄인 뒤, 관련 가이드로 이어서 학습하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "xn-- 도메인을 검토 전에 먼저 해석해야 할 때",
      "리디렉션/입력 폼에서 국제화 도메인을 검증할 때",
      "같은 도메인의 유니코드/ASCII 형태를 비교할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "유니코드 또는 xn-- 도메인을 맞는 입력칸에 붙여넣습니다.",
      "변환 후 라벨 단위로 결과를 확인합니다.",
      "정규화된 값을 복사해 실제 워크플로에서 재확인합니다."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "디코딩 없이 xn-- 도메인을 바로 악성으로 판단하는 것",
      "유니코드와 Punycode를 서로 무관한 값처럼 비교하는 것",
      "여러 라벨 도메인에서 일부 라벨만 변환하는 것"
    ],
    relatedGuidesTitle: "관련 Punycode 가이드",
    relatedGuidesDescription: "xn-- 의미, Unicode vs Punycode 차이, 안전한 도메인 점검 흐름을 짧은 가이드로 확인하세요.",
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
    supportSectionTitle: "Punycodeクイック実務ガイド",
    supportSectionDescription: "変換が必要な場面をすばやく判断し、よくあるミスを避け、関連ガイドに進めます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "xn-- ドメインを確認前にデコードしたいとき",
      "リダイレクトやフォームで国際化ドメインを検証するとき",
      "同一ドメインのUnicode表記とASCII表記を比較したいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "Unicodeまたはxn--ドメインを対応する欄に貼り付けます。",
      "変換し、ラベルごとに結果を確認します。",
      "正規化した結果をコピーし、実運用で再確認します。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "デコードせずに xn-- ドメインを危険と決めつけること",
      "UnicodeとPunycodeを別物として比較すること",
      "複数ラベルのドメインで一部ラベルだけ変換すること"
    ],
    relatedGuidesTitle: "関連Punycodeガイド",
    relatedGuidesDescription: "xn-- の意味、UnicodeとPunycodeの違い、安全なドメイン確認手順を短いガイドで学べます。",
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
    supportSectionTitle: "Guía rápida de flujo Punycode",
    supportSectionDescription: "Úsala como referencia breve para decidir cuándo convertir, evitar errores comunes y abrir guías relacionadas.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Necesitas decodificar un dominio xn-- antes de evaluarlo.",
      "Validas dominios internacionalizados en redirecciones o formularios.",
      "Quieres comparar la forma Unicode y ASCII del mismo dominio."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega un dominio Unicode o xn-- en el campo correcto.",
      "Convierte y revisa el resultado por etiquetas.",
      "Copia el resultado normalizado y valídalo en tu flujo real."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Asumir que todo dominio xn-- es malicioso sin decodificar.",
      "Comparar Unicode y Punycode como si fueran valores distintos.",
      "Convertir solo una etiqueta en dominios con varias etiquetas."
    ],
    relatedGuidesTitle: "Guías relacionadas de Punycode",
    relatedGuidesDescription: "Lee guías prácticas sobre etiquetas xn--, diferencia Unicode/Punycode y comprobaciones seguras de dominios.",
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
    supportSectionTitle: "Guide rapide du workflow Punycode",
    supportSectionDescription: "Référence courte pour savoir quand convertir, éviter les erreurs fréquentes et ouvrir les guides liés.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vous devez décoder un domaine xn-- avant vérification.",
      "Vous validez des domaines internationalisés dans des redirections ou formulaires.",
      "Vous comparez les formes Unicode et ASCII d’un même domaine."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez un domaine Unicode ou xn-- dans le champ adapté.",
      "Convertissez puis vérifiez le résultat label par label.",
      "Copiez le résultat normalisé et validez-le dans votre workflow."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Considérer un domaine xn-- comme malveillant sans le décoder.",
      "Comparer Unicode et Punycode comme des valeurs indépendantes.",
      "Ne convertir qu’un seul label sur un domaine multi-label."
    ],
    relatedGuidesTitle: "Guides Punycode associés",
    relatedGuidesDescription: "Consultez des guides courts sur les labels xn--, Unicode vs Punycode et la vérification sûre des domaines.",
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
    supportSectionTitle: "Kurzer Punycode-Workflow-Guide",
    supportSectionDescription: "Nutze diese Kurzreferenz, um den richtigen Einsatz zu wählen, typische Fehler zu vermeiden und passende Guides zu öffnen.",
    whenToUseTitle: "Wann dieses Tool hilft",
    whenToUseItems: [
      "Du willst eine xn--Domain vor der Prüfung decodieren.",
      "Du validierst internationale Domains in Redirects oder Formularen.",
      "Du vergleichst Unicode- und ASCII-Form derselben Domain."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "Unicode- oder xn--Domain in das passende Feld einfügen.",
      "Konvertieren und das Ergebnis labelweise prüfen.",
      "Normalisiertes Ergebnis kopieren und im echten Workflow verifizieren."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Jede xn--Domain ohne Decoding sofort als bösartig einordnen.",
      "Unicode und Punycode wie unabhängige Werte vergleichen.",
      "Bei Mehrfach-Labels nur ein Label konvertieren."
    ],
    relatedGuidesTitle: "Passende Punycode-Guides",
    relatedGuidesDescription: "Lies kurze Praxis-Guides zu xn-- Labels, Unicode-vs-Punycode und sicherer Domain-Prüfung.",
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
