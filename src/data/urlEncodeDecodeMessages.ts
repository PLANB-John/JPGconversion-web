import { defaultLocale, type LocaleCode } from "@/data/locales";

type UrlEncodeDecodeMessages = {
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

const urlEncodeDecodeMessages: Partial<Record<LocaleCode, UrlEncodeDecodeMessages>> = {
  en: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Encode and decode URL text safely in your browser.",
    title: "URL Encode / Decode",
    description: "Convert plain text into URL-safe format or decode encoded text back to readable form.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste text into the input area.",
      "Click Encode to convert special characters to URL-safe values, or Decode to convert them back.",
      "Copy the result or clear everything to start over."
    ],
    inputLabel: "Input text",
    outputLabel: "Result",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copy result",
    copiedButton: "Copied!",
    sampleButton: "Sample text",
    clearButton: "Clear",
    inputPlaceholder: "Enter text to encode or decode...",
    outputPlaceholder: "Your result will appear here.",
    decodeErrorMessage: "Decoding failed. Please check if the text is a valid encoded URL string.",
    emptyInputMessage: "Please enter text before running this action."
  },
  ko: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "브라우저에서 URL 텍스트를 안전하게 인코딩하거나 디코딩하세요.",
    title: "URL Encode / Decode",
    description: "일반 텍스트를 URL에서 안전한 형식으로 변환하거나, 인코딩된 텍스트를 다시 읽기 쉽게 복원하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 붙여넣으세요.",
      "Encode 버튼으로 특수 문자를 URL-safe 값으로 변환하거나 Decode 버튼으로 다시 복원하세요.",
      "결과를 복사하거나 Clear 버튼으로 모두 지우고 다시 시작하세요."
    ],
    inputLabel: "입력 텍스트",
    outputLabel: "결과",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플 텍스트",
    clearButton: "지우기",
    inputPlaceholder: "인코딩 또는 디코딩할 텍스트를 입력하세요...",
    outputPlaceholder: "결과가 여기에 표시됩니다.",
    decodeErrorMessage: "디코딩에 실패했습니다. 올바르게 인코딩된 URL 문자열인지 확인해 주세요.",
    emptyInputMessage: "실행 전에 텍스트를 입력해 주세요."
  },
  ja: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "ブラウザでURLテキストを安全にエンコード/デコードできます。",
    title: "URL Encode / Decode",
    description: "通常のテキストをURLで安全な形式に変換したり、エンコード済みテキストを読みやすい形に戻したりできます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを貼り付けます。",
      "Encodeで特殊文字をURL安全形式に変換し、Decodeで元に戻します。",
      "結果をコピーするか、Clearでリセットしてやり直します。"
    ],
    inputLabel: "入力テキスト",
    outputLabel: "結果",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプルテキスト",
    clearButton: "クリア",
    inputPlaceholder: "エンコードまたはデコードするテキストを入力してください...",
    outputPlaceholder: "ここに結果が表示されます。",
    decodeErrorMessage: "デコードに失敗しました。文字列が正しくURLエンコードされているか確認してください。",
    emptyInputMessage: "実行前にテキストを入力してください。"
  },
  es: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Codifica y decodifica texto de URL de forma segura en tu navegador.",
    title: "URL Encode / Decode",
    description: "Convierte texto normal a formato seguro para URL o devuelve texto codificado a una forma legible.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega texto en el área de entrada.",
      "Haz clic en Encode para convertir caracteres especiales a formato URL seguro, o en Decode para revertirlos.",
      "Copia el resultado o limpia todo para empezar de nuevo."
    ],
    inputLabel: "Texto de entrada",
    outputLabel: "Resultado",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    sampleButton: "Texto de ejemplo",
    clearButton: "Limpiar",
    inputPlaceholder: "Ingresa texto para codificar o decodificar...",
    outputPlaceholder: "El resultado aparecerá aquí.",
    decodeErrorMessage: "La decodificación falló. Verifica si el texto es una cadena URL codificada válida.",
    emptyInputMessage: "Ingresa texto antes de ejecutar esta acción."
  },
  fr: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Encodez et décodez du texte URL en toute sécurité dans votre navigateur.",
    title: "URL Encode / Decode",
    description: "Convertissez du texte brut en format sûr pour URL ou restaurez un texte encodé dans un format lisible.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez du texte dans la zone d'entrée.",
      "Cliquez sur Encode pour convertir les caractères spéciaux en valeurs URL sûres, ou sur Decode pour les restaurer.",
      "Copiez le résultat ou effacez tout pour recommencer."
    ],
    inputLabel: "Texte d'entrée",
    outputLabel: "Résultat",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    sampleButton: "Texte exemple",
    clearButton: "Effacer",
    inputPlaceholder: "Saisissez un texte à encoder ou décoder...",
    outputPlaceholder: "Votre résultat apparaîtra ici.",
    decodeErrorMessage: "Le décodage a échoué. Vérifiez que le texte est une chaîne URL encodée valide.",
    emptyInputMessage: "Veuillez saisir du texte avant d'exécuter cette action."
  },
  de: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Kodiere und dekodiere URL-Text sicher direkt im Browser.",
    title: "URL Encode / Decode",
    description: "Wandle normalen Text in ein URL-sicheres Format um oder dekodiere kodierten Text zurück in lesbare Form.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge Text in das Eingabefeld ein.",
      "Klicke auf Encode, um Sonderzeichen URL-sicher zu kodieren, oder auf Decode, um sie zurückzuwandeln.",
      "Kopiere das Ergebnis oder lösche alles, um neu zu starten."
    ],
    inputLabel: "Eingabetext",
    outputLabel: "Ergebnis",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispieltext",
    clearButton: "Leeren",
    inputPlaceholder: "Text zum Kodieren oder Dekodieren eingeben...",
    outputPlaceholder: "Dein Ergebnis erscheint hier.",
    decodeErrorMessage: "Dekodierung fehlgeschlagen. Bitte prüfe, ob der Text ein gültig URL-kodierter String ist.",
    emptyInputMessage: "Bitte gib Text ein, bevor du diese Aktion ausführst."
  }
};

export function getUrlEncodeDecodeMessages(locale: LocaleCode): UrlEncodeDecodeMessages {
  return urlEncodeDecodeMessages[locale] ?? urlEncodeDecodeMessages[defaultLocale]!;
}

export type { UrlEncodeDecodeMessages };
