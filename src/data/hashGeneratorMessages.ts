import { defaultLocale, type LocaleCode } from "@/data/locales";

type HashGeneratorMessages = {
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
    supportSectionTitle: "Hash workflow quick guide",
    supportSectionDescription: "Use this page to generate quick checksums, compare copied values, and jump to practical hash guides.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need a fast checksum to confirm whether text changed.",
      "You want to compare MD5, SHA-1, SHA-256, and SHA-512 outputs side by side.",
      "You are debugging API payload mismatches caused by hidden characters."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste the original text and copy the hash you need.",
      "Paste the second version of the text and generate the same algorithm again.",
      "Compare both hashes. Exact match means the input text matched exactly."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Comparing hashes from different algorithms.",
      "Ignoring trailing spaces or line-ending differences.",
      "Assuming visually similar text will always produce the same hash."
    ],
    relatedGuidesTitle: "Related Hash Generator guides",
    relatedGuidesDescription: "Read short guides on hash selection, mismatch debugging, and data change checks.",
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
    supportSectionTitle: "해시 작업 빠른 가이드",
    supportSectionDescription: "빠른 체크섬 생성, 값 비교, 관련 해시 가이드 이동까지 한 번에 진행하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "텍스트 변경 여부를 빠르게 확인하고 싶을 때",
      "MD5, SHA-1, SHA-256, SHA-512 결과를 나란히 비교할 때",
      "숨은 문자로 인한 payload 불일치를 디버깅할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "원본 텍스트를 붙여넣고 필요한 해시를 복사하세요.",
      "비교할 두 번째 텍스트를 붙여넣고 같은 알고리즘 해시를 다시 생성하세요.",
      "두 해시를 비교하세요. 완전히 같으면 입력 텍스트도 정확히 같습니다."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "서로 다른 알고리즘 해시를 비교하는 경우",
      "줄 끝 공백이나 줄바꿈 차이를 놓치는 경우",
      "겉보기 텍스트가 비슷하면 해시도 같을 거라 생각하는 경우"
    ],
    relatedGuidesTitle: "관련 Hash Generator 가이드",
    relatedGuidesDescription: "알고리즘 선택, 불일치 원인, 데이터 변경 확인을 다루는 짧은 가이드를 확인하세요.",
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
    supportSectionTitle: "ハッシュ作業クイックガイド",
    supportSectionDescription: "チェックサム生成、値比較、関連ガイドの確認をこのページで素早く進められます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "テキスト変更の有無をすぐ確認したいとき",
      "MD5・SHA-1・SHA-256・SHA-512を並べて見たいとき",
      "不可視文字による不一致を切り分けたいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "元データを貼り付け、必要なハッシュをコピーします。",
      "比較対象データを貼り付け、同じアルゴリズムで再生成します。",
      "値を比較します。完全一致なら入力も完全一致です。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "異なるアルゴリズム同士を比較すること",
      "末尾スペースや改行差分を見落とすこと",
      "見た目が同じなら同じハッシュになると思い込むこと"
    ],
    relatedGuidesTitle: "関連Hash Generatorガイド",
    relatedGuidesDescription: "アルゴリズム選択、差分原因、変更確認の実践ガイドを短く読めます。",
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
    supportSectionTitle: "Guía rápida de flujo hash",
    supportSectionDescription: "Genera checksums rápidos, compara valores y pasa a guías prácticas de hash.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Cuando necesitas confirmar si un texto cambió.",
      "Cuando quieres comparar MD5, SHA-1, SHA-256 y SHA-512.",
      "Cuando depuras diferencias de payload por caracteres ocultos."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega el texto original y copia el hash necesario.",
      "Pega la segunda versión y genera el mismo algoritmo otra vez.",
      "Compara ambos hashes. Si coinciden exactamente, el texto también."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Comparar hashes de algoritmos distintos.",
      "Ignorar espacios finales o saltos de línea diferentes.",
      "Asumir que texto visualmente parecido siempre da el mismo hash."
    ],
    relatedGuidesTitle: "Guías relacionadas de Hash Generator",
    relatedGuidesDescription: "Consulta guías breves sobre elección de hash, depuración y comparación de cambios.",
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
    supportSectionTitle: "Guide rapide du workflow hash",
    supportSectionDescription: "Générez des checksums, comparez des valeurs et accédez aux guides hash utiles.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Quand vous devez vérifier rapidement si un texte a changé.",
      "Quand vous voulez comparer MD5, SHA-1, SHA-256 et SHA-512.",
      "Quand vous déboguez des écarts causés par des caractères invisibles."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez le texte d'origine et copiez le hash voulu.",
      "Collez la seconde version et régénérez le même algorithme.",
      "Comparez les deux valeurs. Une égalité exacte confirme un contenu identique."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Comparer des hash issus d'algorithmes différents.",
      "Oublier les espaces finaux ou différences de fin de ligne.",
      "Supposer qu'un texte visuellement proche produit toujours le même hash."
    ],
    relatedGuidesTitle: "Guides associés Hash Generator",
    relatedGuidesDescription: "Lisez des guides courts sur le choix d'algorithme et le diagnostic d'écarts de hash.",
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
    supportSectionTitle: "Hash-Workflow Schnellguide",
    supportSectionDescription: "Erzeuge schnelle Prüfsummen, vergleiche Werte und springe zu passenden Hash-Guides.",
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Wenn du schnell prüfen willst, ob sich Text geändert hat.",
      "Wenn du MD5, SHA-1, SHA-256 und SHA-512 direkt vergleichen willst.",
      "Wenn du Payload-Abweichungen durch unsichtbare Zeichen debuggen musst."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "Originaltext einfügen und benötigten Hash kopieren.",
      "Zweite Textversion einfügen und denselben Algorithmus erneut erzeugen.",
      "Beide Hashes vergleichen. Exakte Übereinstimmung bedeutet identischer Input."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Hashes aus unterschiedlichen Algorithmen vergleichen.",
      "Trailing Spaces oder Zeilenendungs-Unterschiede übersehen.",
      "Annehmen, dass ähnlich aussehender Text immer denselben Hash liefert."
    ],
    relatedGuidesTitle: "Verwandte Hash-Generator-Guides",
    relatedGuidesDescription: "Lies kurze Guides zu Algorithmuswahl, Hash-Vergleich und Fehlersuche.",
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
