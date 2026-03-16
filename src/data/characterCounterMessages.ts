import { defaultLocale, type LocaleCode } from "@/data/locales";

type CharacterCounterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  placeholder: string;
  totalCharactersLabel: string;
  charactersWithoutSpacesLabel: string;
  wordCountLabel: string;
  lineCountLabel: string;
  byteCountLabel: string;
  clearButton: string;
  sampleTextButton: string;
  emptyState: string;
};

const characterCounterMessages: Partial<Record<LocaleCode, CharacterCounterMessages>> = {
  en: {
    metadataTitle: "Character Counter",
    metadataDescription: "Count characters, words, lines, and bytes instantly in your browser.",
    title: "Character Counter",
    description: "Type or paste text to get live counts for characters, words, lines, and UTF-8 byte size.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Type or paste your text into the input area.",
      "Watch the stats update automatically as you edit.",
      "Use Sample Text to test quickly, or Clear to start over."
    ],
    inputLabel: "Text input",
    placeholder: "Type or paste your text here...",
    totalCharactersLabel: "Total characters",
    charactersWithoutSpacesLabel: "Characters without spaces",
    wordCountLabel: "Word count",
    lineCountLabel: "Line count",
    byteCountLabel: "Byte count (UTF-8)",
    clearButton: "Clear",
    sampleTextButton: "Sample Text",
    emptyState: "Enter text to see live statistics."
  },
  ko: {
    metadataTitle: "문자 수 세기",
    metadataDescription: "브라우저에서 문자, 단어, 줄, 바이트 수를 즉시 확인하세요.",
    title: "Character Counter",
    description: "텍스트를 입력하거나 붙여넣으면 문자 수, 단어 수, 줄 수, UTF-8 바이트 크기를 실시간으로 확인할 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 입력하거나 붙여넣으세요.",
      "입력 내용이 바뀔 때마다 통계가 자동으로 업데이트됩니다.",
      "빠르게 테스트하려면 샘플 텍스트를, 다시 시작하려면 지우기를 사용하세요."
    ],
    inputLabel: "텍스트 입력",
    placeholder: "여기에 텍스트를 입력하거나 붙여넣으세요...",
    totalCharactersLabel: "전체 문자 수",
    charactersWithoutSpacesLabel: "공백 제외 문자 수",
    wordCountLabel: "단어 수",
    lineCountLabel: "줄 수",
    byteCountLabel: "바이트 수 (UTF-8)",
    clearButton: "지우기",
    sampleTextButton: "샘플 텍스트",
    emptyState: "텍스트를 입력하면 실시간 통계를 확인할 수 있습니다."
  },
  ja: {
    metadataTitle: "文字カウンター",
    metadataDescription: "ブラウザ上で文字数・単語数・行数・バイト数をすぐに確認できます。",
    title: "Character Counter",
    description: "テキストを入力または貼り付けると、文字数、単語数、行数、UTF-8のバイト数をリアルタイムで表示します。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを入力または貼り付けます。",
      "編集するたびに統計が自動で更新されます。",
      "すぐ試すにはサンプルテキスト、リセットするにはクリアを使ってください。"
    ],
    inputLabel: "テキスト入力",
    placeholder: "ここにテキストを入力または貼り付けてください...",
    totalCharactersLabel: "総文字数",
    charactersWithoutSpacesLabel: "空白を除く文字数",
    wordCountLabel: "単語数",
    lineCountLabel: "行数",
    byteCountLabel: "バイト数 (UTF-8)",
    clearButton: "クリア",
    sampleTextButton: "サンプルテキスト",
    emptyState: "テキストを入力すると統計が表示されます。"
  },
  es: {
    metadataTitle: "Contador de caracteres",
    metadataDescription: "Cuenta caracteres, palabras, líneas y bytes al instante en tu navegador.",
    title: "Character Counter",
    description: "Escribe o pega texto para ver conteos en vivo de caracteres, palabras, líneas y tamaño en bytes UTF-8.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe o pega tu texto en el área de entrada.",
      "Las estadísticas se actualizan automáticamente mientras editas.",
      "Usa Texto de ejemplo para probar rápido o Limpiar para empezar de nuevo."
    ],
    inputLabel: "Entrada de texto",
    placeholder: "Escribe o pega tu texto aquí...",
    totalCharactersLabel: "Caracteres totales",
    charactersWithoutSpacesLabel: "Caracteres sin espacios",
    wordCountLabel: "Número de palabras",
    lineCountLabel: "Número de líneas",
    byteCountLabel: "Conteo de bytes (UTF-8)",
    clearButton: "Limpiar",
    sampleTextButton: "Texto de ejemplo",
    emptyState: "Ingresa texto para ver estadísticas en vivo."
  },
  fr: {
    metadataTitle: "Compteur de caractères",
    metadataDescription: "Comptez instantanément les caractères, mots, lignes et octets dans votre navigateur.",
    title: "Character Counter",
    description: "Saisissez ou collez du texte pour voir en direct le nombre de caractères, de mots, de lignes et la taille UTF-8 en octets.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez ou collez votre texte dans la zone de saisie.",
      "Les statistiques se mettent à jour automatiquement pendant la saisie.",
      "Utilisez Texte d'exemple pour tester rapidement ou Effacer pour recommencer."
    ],
    inputLabel: "Saisie du texte",
    placeholder: "Saisissez ou collez votre texte ici...",
    totalCharactersLabel: "Nombre total de caractères",
    charactersWithoutSpacesLabel: "Caractères sans espaces",
    wordCountLabel: "Nombre de mots",
    lineCountLabel: "Nombre de lignes",
    byteCountLabel: "Nombre d'octets (UTF-8)",
    clearButton: "Effacer",
    sampleTextButton: "Texte d'exemple",
    emptyState: "Saisissez du texte pour voir les statistiques en direct."
  },
  de: {
    metadataTitle: "Zeichenzähler",
    metadataDescription: "Zähle Zeichen, Wörter, Zeilen und Bytes sofort im Browser.",
    title: "Character Counter",
    description: "Gib Text ein oder füge ihn ein, um Zeichen, Wörter, Zeilen und die UTF-8-Bytegröße live zu sehen.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib deinen Text in das Eingabefeld ein oder füge ihn ein.",
      "Die Statistiken werden beim Bearbeiten automatisch aktualisiert.",
      "Nutze Beispieltext zum schnellen Testen oder Leeren für einen Neustart."
    ],
    inputLabel: "Texteingabe",
    placeholder: "Text hier eingeben oder einfügen...",
    totalCharactersLabel: "Gesamte Zeichen",
    charactersWithoutSpacesLabel: "Zeichen ohne Leerzeichen",
    wordCountLabel: "Wortanzahl",
    lineCountLabel: "Zeilenanzahl",
    byteCountLabel: "Byteanzahl (UTF-8)",
    clearButton: "Leeren",
    sampleTextButton: "Beispieltext",
    emptyState: "Gib Text ein, um Live-Statistiken zu sehen."
  }
};

export function getCharacterCounterMessages(locale: LocaleCode): CharacterCounterMessages {
  return characterCounterMessages[locale] ?? characterCounterMessages[defaultLocale]!;
}

export type { CharacterCounterMessages };
