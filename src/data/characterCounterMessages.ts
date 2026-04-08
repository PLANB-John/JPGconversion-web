import { defaultLocale, type LocaleCode } from "@/data/locales";

type CharacterCounterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  howToUseTitle: string;
  howToUseSteps: string[];
  mistakesTitle: string;
  mistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
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
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "Checking SEO title and meta description length before publishing.",
      "Tightening social captions so they stay easy to read.",
      "Comparing multiple headline drafts quickly."
    ],
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Type or paste your text into the input area.",
      "Watch the stats update automatically as you edit.",
      "Use Sample Text to test quickly, or Clear to start over."
    ],
    mistakesTitle: "Common mistakes",
    mistakes: [
      "Cutting text only to hit a number, even when clarity drops.",
      "Ignoring mobile preview and checking only in a document.",
      "Using one title pattern everywhere without topic-specific edits."
    ],
    relatedGuidesTitle: "Related Character Counter guides",
    relatedGuidesDescription: "Read a short guide for practical title, snippet, and caption length workflows.",
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
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: ["게시 전 SEO 제목/메타 설명 길이를 확인할 때", "SNS 캡션을 읽기 좋게 줄일 때", "여러 제목 시안을 빠르게 비교할 때"],
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 입력하거나 붙여넣으세요.",
      "입력 내용이 바뀔 때마다 통계가 자동으로 업데이트됩니다.",
      "빠르게 테스트하려면 샘플 텍스트를, 다시 시작하려면 지우기를 사용하세요."
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "의미가 모호해질 정도로 숫자만 맞추려는 편집",
      "문서에서만 확인하고 모바일 노출을 보지 않는 것",
      "주제별 조정 없이 같은 제목 패턴을 반복하는 것"
    ],
    relatedGuidesTitle: "관련 Character Counter 가이드",
    relatedGuidesDescription: "제목, 스니펫, 캡션 길이를 실무적으로 다루는 짧은 가이드를 확인하세요.",
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
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "公開前にSEOタイトルやメタ説明の長さを確認したいとき",
      "SNSキャプションを読みやすく短く調整したいとき",
      "見出し案を複数比較したいとき"
    ],
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを入力または貼り付けます。",
      "編集するたびに統計が自動で更新されます。",
      "すぐ試すにはサンプルテキスト、リセットするにはクリアを使ってください。"
    ],
    mistakesTitle: "よくあるミス",
    mistakes: [
      "文字数だけ合わせて意味が曖昧になるまで削ること",
      "文書上だけ確認してモバイル表示を見ないこと",
      "トピック調整なしで同じタイトル型を使い回すこと"
    ],
    relatedGuidesTitle: "関連Character Counterガイド",
    relatedGuidesDescription: "タイトル・スニペット・キャプションの長さ調整を実務的に学べる短いガイドです。",
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
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Antes de publicar títulos SEO y meta descripciones.",
      "Para acortar captions sociales sin perder claridad.",
      "Al comparar varias versiones de un titular."
    ],
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe o pega tu texto en el área de entrada.",
      "Las estadísticas se actualizan automáticamente mientras editas.",
      "Usa Texto de ejemplo para probar rápido o Limpiar para empezar de nuevo."
    ],
    mistakesTitle: "Errores comunes",
    mistakes: [
      "Recortar solo para cumplir un número y perder claridad.",
      "Revisar solo en un documento y no en vista móvil.",
      "Repetir la misma plantilla de título para todos los temas."
    ],
    relatedGuidesTitle: "Guías relacionadas de Character Counter",
    relatedGuidesDescription: "Consulta guías breves con flujos prácticos para títulos, snippets y captions.",
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
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vérifier la longueur des titres SEO et meta descriptions avant publication.",
      "Raccourcir des légendes sociales sans perdre le sens.",
      "Comparer rapidement plusieurs variantes de titre."
    ],
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez ou collez votre texte dans la zone de saisie.",
      "Les statistiques se mettent à jour automatiquement pendant la saisie.",
      "Utilisez Texte d'exemple pour tester rapidement ou Effacer pour recommencer."
    ],
    mistakesTitle: "Erreurs fréquentes",
    mistakes: [
      "Couper uniquement pour atteindre un chiffre au détriment de la clarté.",
      "Vérifier dans un doc mais pas dans un aperçu mobile.",
      "Réutiliser le même modèle de titre pour tous les sujets."
    ],
    relatedGuidesTitle: "Guides Character Counter associés",
    relatedGuidesDescription: "Lisez des guides courts pour mieux gérer longueur des titres, snippets et légendes.",
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
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Vor dem Veröffentlichen SEO-Titel und Meta-Descriptions prüfen.",
      "Social Captions kürzen, ohne unklar zu werden.",
      "Mehrere Headline-Varianten schnell vergleichen."
    ],
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib deinen Text in das Eingabefeld ein oder füge ihn ein.",
      "Die Statistiken werden beim Bearbeiten automatisch aktualisiert.",
      "Nutze Beispieltext zum schnellen Testen oder Leeren für einen Neustart."
    ],
    mistakesTitle: "Häufige Fehler",
    mistakes: [
      "Nur auf eine Zahl kürzen und dabei Klarheit verlieren.",
      "Nur im Dokument prüfen statt auch mobil zu kontrollieren.",
      "Dasselbe Titelmuster ohne Themenanpassung überall nutzen."
    ],
    relatedGuidesTitle: "Passende Character-Counter-Guides",
    relatedGuidesDescription: "Kurze Guides mit praktischen Workflows für Titel, Snippets und Captions.",
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
