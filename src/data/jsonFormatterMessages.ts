import { defaultLocale, type LocaleCode } from "@/data/locales";

type JsonFormatterMessages = {
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
    supportSectionTitle: "JSON workflow quick guide",
    supportSectionDescription: "Use this page to clean copied JSON, catch parse issues, and jump to practical debugging guides.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "A payload fails after copy and paste and you need a quick structure check.",
      "You want a readable JSON view before reviewing nested fields.",
      "You need minified JSON for logs, configs, or API testing."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste JSON into the input field.",
      "Click Format to inspect structure, or Minify for compact output.",
      "Check the validation status, then copy the cleaned result."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Pasting smart quotes from docs or chat tools.",
      "Missing commas after moving lines manually.",
      "Assuming valid JavaScript object syntax is always valid JSON."
    ],
    relatedGuidesTitle: "Related JSON Formatter guides",
    relatedGuidesDescription: "Read short guides for parsing errors, validation routines, and formatting decisions.",
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
    supportSectionTitle: "JSON 작업 빠른 가이드",
    supportSectionDescription: "복사한 JSON 정리, 파싱 오류 확인, 관련 디버깅 가이드 이동까지 한 번에 처리하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "복사·붙여넣기 후 payload가 실패해 구조 점검이 필요할 때",
      "중첩 필드를 보기 쉽게 정리해 검토하고 싶을 때",
      "로그, 설정, API 테스트용으로 minified JSON이 필요할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "입력 칸에 JSON을 붙여넣으세요.",
      "구조 확인은 Format, 한 줄 압축은 Minify를 누르세요.",
      "검증 상태를 확인한 뒤 정리된 결과를 복사하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "문서/메신저의 스마트 따옴표를 그대로 붙여넣는 경우",
      "수정 중 줄 끝 쉼표를 빠뜨리는 경우",
      "JavaScript 객체 문법이면 JSON도 항상 유효하다고 생각하는 경우"
    ],
    relatedGuidesTitle: "관련 JSON Formatter 가이드",
    relatedGuidesDescription: "파싱 오류, 사전 검증, 포맷 선택을 다루는 짧은 가이드를 확인하세요.",
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
    supportSectionTitle: "JSON作業クイックガイド",
    supportSectionDescription: "コピー後に壊れたJSONの整理、エラー確認、関連ガイドへの導線をこのページでまとめて行えます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "コピー＆ペースト後にペイロードが失敗し、構文確認したいとき",
      "ネスト構造を読みやすくして内容を見直したいとき",
      "ログやAPIテスト用に1行JSONが必要なとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "入力欄にJSONを貼り付けます。",
      "構造確認はFormat、圧縮はMinifyを選びます。",
      "検証状態を確認して、整えた結果をコピーします。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "ドキュメント由来のスマートクォートをそのまま使うこと",
      "手編集でカンマを落としてしまうこと",
      "JavaScriptオブジェクト構文をJSONとして扱ってしまうこと"
    ],
    relatedGuidesTitle: "関連JSON Formatterガイド",
    relatedGuidesDescription: "パースエラー、事前バリデーション、整形判断を短いガイドで確認できます。",
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
    supportSectionTitle: "Guía rápida de flujo JSON",
    supportSectionDescription: "Úsalo para limpiar JSON copiado, detectar errores de parseo y saltar a guías prácticas.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Cuando un payload falla después de copiar y pegar.",
      "Cuando necesitas ver mejor estructuras JSON anidadas.",
      "Cuando debes generar JSON minificado para logs o pruebas API."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega el JSON en el campo de entrada.",
      "Pulsa Format para revisar estructura o Minify para compactar.",
      "Revisa el estado de validación y copia el resultado limpio."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Pegar comillas tipográficas desde documentos o chats.",
      "Olvidar comas al mover líneas manualmente.",
      "Creer que la sintaxis de objeto JavaScript siempre es JSON válido."
    ],
    relatedGuidesTitle: "Guías relacionadas de JSON Formatter",
    relatedGuidesDescription: "Consulta guías breves sobre errores de parseo, validación y decisiones de formato.",
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
    supportSectionTitle: "Guide rapide du workflow JSON",
    supportSectionDescription: "Nettoyez du JSON collé, repérez les erreurs de parsing et accédez aux guides pratiques.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Quand un payload échoue après un copier-coller.",
      "Quand vous voulez relire une structure JSON imbriquée plus clairement.",
      "Quand vous avez besoin d'un JSON minifié pour logs ou tests API."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez le JSON dans la zone d'entrée.",
      "Utilisez Format pour la lecture, ou Minify pour une sortie compacte.",
      "Vérifiez la validation puis copiez le résultat corrigé."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Coller des guillemets typographiques depuis un document ou un chat.",
      "Oublier une virgule après une édition manuelle.",
      "Confondre syntaxe d'objet JavaScript et JSON valide."
    ],
    relatedGuidesTitle: "Guides JSON Formatter associés",
    relatedGuidesDescription: "Lisez des guides courts sur les erreurs de parsing, la validation et les choix de format.",
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
    supportSectionTitle: "Schnellguide für JSON-Workflows",
    supportSectionDescription: "Bereinige kopiertes JSON, finde Parse-Fehler schneller und springe zu passenden Kurz-Guides.",
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Wenn ein Payload nach Copy-Paste fehlschlägt.",
      "Wenn du verschachtelte JSON-Strukturen lesbar prüfen willst.",
      "Wenn du minifiziertes JSON für Logs oder API-Tests brauchst."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "JSON in das Eingabefeld einfügen.",
      "Format für Lesbarkeit oder Minify für kompakte Ausgabe wählen.",
      "Validierungsstatus prüfen und das bereinigte Ergebnis kopieren."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Typografische Anführungszeichen aus Docs oder Chats einfügen.",
      "Beim manuellen Verschieben von Zeilen Kommas vergessen.",
      "JavaScript-Objektsyntax mit gültigem JSON verwechseln."
    ],
    relatedGuidesTitle: "Passende JSON-Formatter-Guides",
    relatedGuidesDescription: "Kurze Guides zu Parse-Fehlern, Vorab-Validierung und Formatentscheidungen.",
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
