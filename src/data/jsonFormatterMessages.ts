import { defaultLocale, type LocaleCode } from "@/data/locales";

type JsonFormatterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  outputLabel: string;
  formatButton: string;
  minifyButton: string;
  validateLabel: string;
  validText: string;
  invalidText: string;
  sampleButton: string;
  copyButton: string;
  copiedButton: string;
  emptyInputMessage: string;
  invalidJsonMessage: string;
};

const jsonFormatterMessages: Partial<Record<LocaleCode, JsonFormatterMessages>> = {
  en: {
    metadataTitle: "JSON Formatter",
    metadataDescription: "Format, minify, and validate JSON instantly in your browser.",
    title: "JSON Formatter",
    description: "Paste JSON text, format it for readability, minify it for compact output, and validate it quickly.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste your JSON into the input area.",
      "Click Format to pretty-print with indentation, or Minify to compress into one line.",
      "Check the validation status and copy the output when you are ready."
    ],
    inputLabel: "JSON input",
    outputLabel: "Result",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "Validation",
    validText: "Valid JSON",
    invalidText: "Invalid JSON",
    sampleButton: "Sample JSON",
    copyButton: "Copy output",
    copiedButton: "Copied!",
    emptyInputMessage: "Please enter JSON before running this action.",
    invalidJsonMessage: "JSON is invalid. Please check commas, quotes, and brackets."
  },
  ko: {
    metadataTitle: "JSON 포매터",
    metadataDescription: "브라우저에서 JSON을 포맷, 압축, 검증하세요.",
    title: "JSON 포매터",
    description: "JSON 텍스트를 붙여넣고 보기 좋게 포맷하거나 한 줄로 압축하고, 유효성도 빠르게 확인하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 JSON을 붙여넣으세요.",
      "Format 버튼으로 들여쓰기 포맷을 적용하거나 Minify 버튼으로 한 줄로 압축하세요.",
      "검증 상태를 확인하고 필요하면 결과를 복사하세요."
    ],
    inputLabel: "JSON 입력",
    outputLabel: "결과",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "검증",
    validText: "유효한 JSON",
    invalidText: "유효하지 않은 JSON",
    sampleButton: "샘플 JSON",
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    emptyInputMessage: "실행 전에 JSON을 입력해 주세요.",
    invalidJsonMessage: "JSON 형식이 올바르지 않습니다. 쉼표, 따옴표, 괄호를 확인해 주세요."
  },
  ja: {
    metadataTitle: "JSONフォーマッター",
    metadataDescription: "ブラウザ上でJSONを整形・圧縮・検証できます。",
    title: "JSONフォーマッター",
    description: "JSONテキストを貼り付け、読みやすく整形したり1行に圧縮したりして、すばやく検証できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にJSONを貼り付けます。",
      "Formatで整形、Minifyで1行に圧縮します。",
      "検証ステータスを確認し、必要なら結果をコピーします。"
    ],
    inputLabel: "JSON入力",
    outputLabel: "結果",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "検証",
    validText: "有効なJSON",
    invalidText: "無効なJSON",
    sampleButton: "サンプルJSON",
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    emptyInputMessage: "実行前にJSONを入力してください。",
    invalidJsonMessage: "JSONが無効です。カンマ、引用符、括弧を確認してください。"
  },
  es: {
    metadataTitle: "Formateador JSON",
    metadataDescription: "Formatea, minifica y valida JSON al instante en tu navegador.",
    title: "Formateador JSON",
    description: "Pega texto JSON, dale formato para leerlo mejor, minifícalo en una línea y valida su estructura.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega tu JSON en el área de entrada.",
      "Haz clic en Format para aplicar sangría o en Minify para comprimir en una sola línea.",
      "Revisa el estado de validación y copia el resultado cuando esté listo."
    ],
    inputLabel: "Entrada JSON",
    outputLabel: "Resultado",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "Validación",
    validText: "JSON válido",
    invalidText: "JSON no válido",
    sampleButton: "JSON de ejemplo",
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    emptyInputMessage: "Ingresa JSON antes de ejecutar esta acción.",
    invalidJsonMessage: "El JSON no es válido. Revisa comas, comillas y llaves."
  },
  fr: {
    metadataTitle: "Formateur JSON",
    metadataDescription: "Formatez, minifiez et validez du JSON instantanément dans votre navigateur.",
    title: "Formateur JSON",
    description: "Collez du JSON, formatez-le pour le lire facilement, minifiez-le sur une ligne et validez-le rapidement.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez votre JSON dans la zone d'entrée.",
      "Cliquez sur Format pour l'indentation ou sur Minify pour le compresser sur une ligne.",
      "Vérifiez le statut de validation puis copiez le résultat si besoin."
    ],
    inputLabel: "Entrée JSON",
    outputLabel: "Résultat",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "Validation",
    validText: "JSON valide",
    invalidText: "JSON invalide",
    sampleButton: "JSON exemple",
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    emptyInputMessage: "Veuillez saisir du JSON avant d'exécuter cette action.",
    invalidJsonMessage: "Le JSON est invalide. Vérifiez les virgules, guillemets et accolades."
  },
  de: {
    metadataTitle: "JSON-Formatter",
    metadataDescription: "JSON im Browser sofort formatieren, minifizieren und validieren.",
    title: "JSON-Formatter",
    description: "Füge JSON-Text ein, formatiere ihn für bessere Lesbarkeit, minifiziere ihn auf eine Zeile und prüfe die Gültigkeit.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge dein JSON in das Eingabefeld ein.",
      "Klicke auf Format für Einrückung oder auf Minify für eine einzeilige Ausgabe.",
      "Prüfe den Validierungsstatus und kopiere bei Bedarf das Ergebnis."
    ],
    inputLabel: "JSON-Eingabe",
    outputLabel: "Ergebnis",
    formatButton: "Format",
    minifyButton: "Minify",
    validateLabel: "Validierung",
    validText: "Gültiges JSON",
    invalidText: "Ungültiges JSON",
    sampleButton: "Beispiel-JSON",
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    emptyInputMessage: "Bitte gib JSON ein, bevor du diese Aktion ausführst.",
    invalidJsonMessage: "JSON ist ungültig. Bitte prüfe Kommas, Anführungszeichen und Klammern."
  }
};

export function getJsonFormatterMessages(locale: LocaleCode): JsonFormatterMessages {
  return jsonFormatterMessages[locale] ?? jsonFormatterMessages[defaultLocale]!;
}

export type { JsonFormatterMessages };
