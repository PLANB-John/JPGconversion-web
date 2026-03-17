import { defaultLocale, type LocaleCode } from "@/data/locales";

type Base64EncodeDecodeMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  outputLabel: string;
  encodeButton: string;
  decodeButton: string;
  copyButton: string;
  copiedButton: string;
  sampleButton: string;
  clearButton: string;
  inputPlaceholder: string;
  outputPlaceholder: string;
  decodeErrorMessage: string;
  emptyInputMessage: string;
};

const base64EncodeDecodeMessages: Partial<Record<LocaleCode, Base64EncodeDecodeMessages>> = {
  en: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Encode text to Base64 or decode Base64 back to UTF-8 text directly in your browser.",
    title: "Base64 Encode / Decode",
    description: "Convert plain text to Base64 and decode Base64 back to readable text, with UTF-8 support for multilingual content.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter or paste text in the input area.",
      "Click Encode to convert text to Base64, or Decode to convert Base64 back to text.",
      "Copy the result, try sample text, or clear both fields to start over."
    ],
    inputLabel: "Input text",
    outputLabel: "Result",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copy result",
    copiedButton: "Copied!",
    sampleButton: "Sample text",
    clearButton: "Clear",
    inputPlaceholder: "Enter plain text or Base64 text...",
    outputPlaceholder: "Your result will appear here.",
    decodeErrorMessage: "Decoding failed. Please check if the input is valid Base64 UTF-8 text.",
    emptyInputMessage: "Please enter text before running this action."
  },
  ko: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "브라우저에서 텍스트를 Base64로 인코딩하거나 UTF-8 텍스트로 디코딩하세요.",
    title: "Base64 Encode / Decode",
    description: "일반 텍스트를 Base64로 변환하고 Base64를 다시 읽기 쉬운 텍스트로 복원하세요. 다국어 UTF-8을 지원합니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 입력하거나 붙여넣으세요.",
      "Encode를 누르면 Base64로 변환되고, Decode를 누르면 텍스트로 복원됩니다.",
      "결과를 복사하거나 샘플 텍스트를 넣고, Clear로 초기화할 수 있습니다."
    ],
    inputLabel: "입력 텍스트",
    outputLabel: "결과",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플 텍스트",
    clearButton: "지우기",
    inputPlaceholder: "일반 텍스트 또는 Base64 텍스트를 입력하세요...",
    outputPlaceholder: "결과가 여기에 표시됩니다.",
    decodeErrorMessage: "디코딩에 실패했습니다. 입력값이 올바른 Base64 UTF-8 텍스트인지 확인해 주세요.",
    emptyInputMessage: "실행 전에 텍스트를 입력해 주세요."
  },
  ja: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "ブラウザ上でテキストをBase64にエンコードし、UTF-8テキストにデコードできます。",
    title: "Base64 Encode / Decode",
    description: "通常テキストをBase64に変換し、Base64を読みやすいテキストに戻せます。多言語UTF-8に対応しています。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを入力または貼り付けます。",
      "EncodeでBase64に変換し、Decodeでテキストに戻します。",
      "結果をコピーしたり、サンプル入力やClearでやり直しできます。"
    ],
    inputLabel: "入力テキスト",
    outputLabel: "結果",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプルテキスト",
    clearButton: "クリア",
    inputPlaceholder: "通常テキストまたはBase64テキストを入力してください...",
    outputPlaceholder: "ここに結果が表示されます。",
    decodeErrorMessage: "デコードに失敗しました。入力が有効なBase64 UTF-8テキストか確認してください。",
    emptyInputMessage: "実行前にテキストを入力してください。"
  },
  es: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Codifica texto a Base64 o decodifica Base64 a texto UTF-8 directamente en tu navegador.",
    title: "Base64 Encode / Decode",
    description: "Convierte texto normal a Base64 y vuelve de Base64 a texto legible con soporte UTF-8 para contenido multilingüe.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe o pega texto en el área de entrada.",
      "Haz clic en Encode para convertir a Base64, o en Decode para recuperar el texto.",
      "Copia el resultado, usa texto de ejemplo o limpia todo para empezar de nuevo."
    ],
    inputLabel: "Texto de entrada",
    outputLabel: "Resultado",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    sampleButton: "Texto de ejemplo",
    clearButton: "Limpiar",
    inputPlaceholder: "Ingresa texto normal o Base64...",
    outputPlaceholder: "Tu resultado aparecerá aquí.",
    decodeErrorMessage: "La decodificación falló. Verifica si la entrada es Base64 UTF-8 válida.",
    emptyInputMessage: "Ingresa texto antes de ejecutar esta acción."
  },
  fr: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Encodez du texte en Base64 ou décodez du Base64 en texte UTF-8 directement dans votre navigateur.",
    title: "Base64 Encode / Decode",
    description: "Convertissez du texte brut en Base64 et revenez à du texte lisible avec prise en charge UTF-8 pour le contenu multilingue.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez ou collez du texte dans la zone d'entrée.",
      "Cliquez sur Encode pour convertir en Base64, ou sur Decode pour restaurer le texte.",
      "Copiez le résultat, utilisez un exemple ou effacez tout pour recommencer."
    ],
    inputLabel: "Texte d'entrée",
    outputLabel: "Résultat",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    sampleButton: "Texte exemple",
    clearButton: "Effacer",
    inputPlaceholder: "Saisissez du texte brut ou Base64...",
    outputPlaceholder: "Votre résultat apparaîtra ici.",
    decodeErrorMessage: "Le décodage a échoué. Vérifiez que l'entrée est un texte Base64 UTF-8 valide.",
    emptyInputMessage: "Veuillez saisir du texte avant d'exécuter cette action."
  },
  de: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Kodiere Text in Base64 oder dekodiere Base64 zurück zu UTF-8-Text direkt im Browser.",
    title: "Base64 Encode / Decode",
    description: "Wandle normalen Text in Base64 um und dekodiere Base64 zurück in lesbaren Text mit UTF-8-Unterstützung für mehrsprachige Inhalte.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib Text in das Eingabefeld ein oder füge ihn ein.",
      "Klicke auf Encode, um in Base64 umzuwandeln, oder auf Decode, um den Text wiederherzustellen.",
      "Kopiere das Ergebnis, nutze Beispieltext oder lösche alles für einen Neustart."
    ],
    inputLabel: "Eingabetext",
    outputLabel: "Ergebnis",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispieltext",
    clearButton: "Leeren",
    inputPlaceholder: "Normalen Text oder Base64-Text eingeben...",
    outputPlaceholder: "Dein Ergebnis erscheint hier.",
    decodeErrorMessage: "Dekodierung fehlgeschlagen. Bitte prüfe, ob die Eingabe gültiger Base64-UTF-8-Text ist.",
    emptyInputMessage: "Bitte gib Text ein, bevor du diese Aktion ausführst."
  }
};

export function getBase64EncodeDecodeMessages(locale: LocaleCode): Base64EncodeDecodeMessages {
  return base64EncodeDecodeMessages[locale] ?? base64EncodeDecodeMessages[defaultLocale]!;
}

export type { Base64EncodeDecodeMessages };
