import { defaultLocale, type LocaleCode } from "@/data/locales";

type HashGeneratorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  inputPlaceholder: string;
  sampleButton: string;
  clearButton: string;
  resultSectionTitle: string;
  emptyMessage: string;
  copyButton: string;
  copiedButton: string;
};

const hashGeneratorMessages: Partial<Record<LocaleCode, HashGeneratorMessages>> = {
  en: {
    metadataTitle: "Hash Generator",
    metadataDescription: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from text directly in your browser.",
    title: "Hash Generator",
    description: "Create common text hashes instantly. Everything runs client-side, so your text stays in your browser.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Type or paste text into the input box.",
      "Hashes update automatically while you type.",
      "Use Copy next to any hash, or try Sample Text and Clear."
    ],
    inputLabel: "Input text",
    inputPlaceholder: "Enter text to generate hashes...",
    sampleButton: "Sample Text",
    clearButton: "Clear",
    resultSectionTitle: "Hash results",
    emptyMessage: "Enter text to see MD5, SHA-1, SHA-256, and SHA-512 hashes.",
    copyButton: "Copy",
    copiedButton: "Copied!"
  },
  ko: {
    metadataTitle: "Hash Generator",
    metadataDescription: "브라우저에서 텍스트의 MD5, SHA-1, SHA-256, SHA-512 해시를 생성하세요.",
    title: "Hash Generator",
    description: "자주 사용하는 텍스트 해시를 즉시 생성할 수 있습니다. 모든 처리는 브라우저에서 실행됩니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 입력하거나 붙여넣으세요.",
      "입력하는 동안 해시 결과가 자동으로 갱신됩니다.",
      "각 해시 옆의 복사 버튼을 사용하거나 샘플 텍스트, 지우기 버튼을 활용하세요."
    ],
    inputLabel: "입력 텍스트",
    inputPlaceholder: "해시를 생성할 텍스트를 입력하세요...",
    sampleButton: "샘플 텍스트",
    clearButton: "지우기",
    resultSectionTitle: "해시 결과",
    emptyMessage: "텍스트를 입력하면 MD5, SHA-1, SHA-256, SHA-512 해시가 표시됩니다.",
    copyButton: "복사",
    copiedButton: "복사됨!"
  },
  ja: {
    metadataTitle: "Hash Generator",
    metadataDescription: "ブラウザ上でテキストからMD5、SHA-1、SHA-256、SHA-512ハッシュを生成します。",
    title: "Hash Generator",
    description: "よく使うテキストハッシュをすぐに作成できます。処理はすべてブラウザ内で完結します。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを入力または貼り付けます。",
      "入力中にハッシュ結果が自動で更新されます。",
      "各ハッシュのCopyを使うか、サンプルテキストとクリアを活用してください。"
    ],
    inputLabel: "入力テキスト",
    inputPlaceholder: "ハッシュを生成するテキストを入力してください...",
    sampleButton: "サンプルテキスト",
    clearButton: "クリア",
    resultSectionTitle: "ハッシュ結果",
    emptyMessage: "テキストを入力するとMD5、SHA-1、SHA-256、SHA-512が表示されます。",
    copyButton: "コピー",
    copiedButton: "コピーしました！"
  },
  es: {
    metadataTitle: "Hash Generator",
    metadataDescription: "Genera hashes MD5, SHA-1, SHA-256 y SHA-512 desde texto directamente en tu navegador.",
    title: "Hash Generator",
    description: "Crea hashes de texto comunes al instante. Todo se ejecuta del lado del cliente en tu navegador.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe o pega texto en el área de entrada.",
      "Los hashes se actualizan automáticamente mientras escribes.",
      "Usa Copy junto a cualquier hash, o prueba Texto de ejemplo y Limpiar."
    ],
    inputLabel: "Texto de entrada",
    inputPlaceholder: "Ingresa texto para generar hashes...",
    sampleButton: "Texto de ejemplo",
    clearButton: "Limpiar",
    resultSectionTitle: "Resultados de hash",
    emptyMessage: "Ingresa texto para ver hashes MD5, SHA-1, SHA-256 y SHA-512.",
    copyButton: "Copy",
    copiedButton: "¡Copiado!"
  },
  fr: {
    metadataTitle: "Hash Generator",
    metadataDescription: "Générez des hash MD5, SHA-1, SHA-256 et SHA-512 à partir d'un texte directement dans votre navigateur.",
    title: "Hash Generator",
    description: "Créez instantanément des hash de texte courants. Tout fonctionne côté client dans votre navigateur.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez ou collez du texte dans la zone d'entrée.",
      "Les hash se mettent à jour automatiquement pendant la saisie.",
      "Utilisez Copy à côté de chaque hash, ou Essayez un exemple et Effacer."
    ],
    inputLabel: "Texte d'entrée",
    inputPlaceholder: "Saisissez du texte pour générer des hash...",
    sampleButton: "Texte exemple",
    clearButton: "Effacer",
    resultSectionTitle: "Résultats de hash",
    emptyMessage: "Saisissez du texte pour voir les hash MD5, SHA-1, SHA-256 et SHA-512.",
    copyButton: "Copy",
    copiedButton: "Copié !"
  },
  de: {
    metadataTitle: "Hash Generator",
    metadataDescription: "Erzeuge MD5-, SHA-1-, SHA-256- und SHA-512-Hashes aus Text direkt im Browser.",
    title: "Hash Generator",
    description: "Erstelle gängige Text-Hashes sofort. Alles läuft clientseitig in deinem Browser.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib Text in das Eingabefeld ein oder füge ihn ein.",
      "Die Hashes werden beim Tippen automatisch aktualisiert.",
      "Nutze Copy neben jedem Hash oder verwende Beispieltext und Leeren."
    ],
    inputLabel: "Eingabetext",
    inputPlaceholder: "Text zum Erzeugen von Hashes eingeben...",
    sampleButton: "Beispieltext",
    clearButton: "Leeren",
    resultSectionTitle: "Hash-Ergebnisse",
    emptyMessage: "Gib Text ein, um MD5-, SHA-1-, SHA-256- und SHA-512-Hashes zu sehen.",
    copyButton: "Copy",
    copiedButton: "Kopiert!"
  }
};

export function getHashGeneratorMessages(locale: LocaleCode): HashGeneratorMessages {
  return hashGeneratorMessages[locale] ?? hashGeneratorMessages[defaultLocale]!;
}

export type { HashGeneratorMessages };
