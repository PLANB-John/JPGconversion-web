import { defaultLocale, type LocaleCode } from "@/data/locales";

type WebsiteImageExtractorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  inputPlaceholder: string;
  extractButton: string;
  extractingButton: string;
  sampleButton: string;
  clearButton: string;
  invalidUrlMessage: string;
  fetchFailedMessage: string;
  noImagesFoundMessage: string;
  resultsTitle: string;
  resultsDescription: string;
  imageUrlLabel: string;
  copyLinkButton: string;
  copiedLinkButton: string;
  openImageButton: string;
  imageAlt: string;
  sourcePageLabel: string;
  imageCountLabel: string;
  readyStateMessage: string;
};

const websiteImageExtractorMessages: Partial<Record<LocaleCode, WebsiteImageExtractorMessages>> = {
  en: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "Extract image URLs from a webpage, including img tags and social preview images.",
    title: "Website Image Extractor",
    description: "Paste a webpage URL to collect image candidates such as page images, Open Graph images, and Twitter card images in one place.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste a full webpage URL into the field below.",
      "Click Extract images to fetch the page through this app and scan for image candidates.",
      "Preview the results, then copy a direct image link or open it in a new tab."
    ],
    inputLabel: "Website URL",
    inputPlaceholder: "https://example.com/article",
    extractButton: "Extract images",
    extractingButton: "Extracting...",
    sampleButton: "Sample URL",
    clearButton: "Clear",
    invalidUrlMessage: "Please enter a valid website URL starting with http:// or https://.",
    fetchFailedMessage: "We could not fetch that page right now. Please check the URL and try again.",
    noImagesFoundMessage: "No image candidates were found on that page.",
    resultsTitle: "Extracted images",
    resultsDescription: "We look for standard image sources including img tags, og:image, and twitter:image.",
    imageUrlLabel: "Image URL",
    copyLinkButton: "Copy link",
    copiedLinkButton: "Copied!",
    openImageButton: "Open image",
    imageAlt: "Extracted website image preview",
    sourcePageLabel: "Source page",
    imageCountLabel: "Images found",
    readyStateMessage: "Enter a webpage URL above to extract image links."
  },
  ko: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "웹페이지에서 img 태그와 소셜 미리보기 이미지를 포함한 이미지 URL을 추출합니다.",
    title: "Website Image Extractor",
    description: "웹페이지 URL을 붙여넣으면 페이지 이미지, Open Graph 이미지, Twitter 카드 이미지를 한곳에서 빠르게 모아볼 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "아래 입력칸에 전체 웹페이지 URL을 붙여넣으세요.",
      "이미지 추출 버튼을 눌러 앱 서버를 통해 페이지를 불러오고 이미지 후보를 찾으세요.",
      "결과를 미리 본 뒤 직접 이미지 링크를 복사하거나 새 탭에서 열 수 있습니다."
    ],
    inputLabel: "웹사이트 URL",
    inputPlaceholder: "https://example.com/article",
    extractButton: "이미지 추출",
    extractingButton: "추출 중...",
    sampleButton: "샘플 URL",
    clearButton: "지우기",
    invalidUrlMessage: "http:// 또는 https://로 시작하는 올바른 웹사이트 URL을 입력해 주세요.",
    fetchFailedMessage: "현재 해당 페이지를 불러올 수 없습니다. URL을 확인한 뒤 다시 시도해 주세요.",
    noImagesFoundMessage: "해당 페이지에서 이미지 후보를 찾지 못했습니다.",
    resultsTitle: "추출된 이미지",
    resultsDescription: "img 태그, og:image, twitter:image 같은 표준 이미지 소스를 확인합니다.",
    imageUrlLabel: "이미지 URL",
    copyLinkButton: "링크 복사",
    copiedLinkButton: "복사됨!",
    openImageButton: "이미지 열기",
    imageAlt: "추출된 웹사이트 이미지 미리보기",
    sourcePageLabel: "원본 페이지",
    imageCountLabel: "찾은 이미지 수",
    readyStateMessage: "위에 웹페이지 URL을 입력하면 이미지 링크를 추출할 수 있습니다."
  },
  ja: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "WebページからimgタグやSNSプレビュー画像を含む画像URLを抽出します。",
    title: "Website Image Extractor",
    description: "WebページURLを貼り付けると、ページ内画像、Open Graph画像、Twitterカード画像をまとめて確認できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "下の入力欄に完全なWebページURLを貼り付けます。",
      "画像を抽出を押して、このアプリ経由でページを取得し、画像候補を探します。",
      "結果を確認し、画像リンクをコピーするか新しいタブで開きます。"
    ],
    inputLabel: "WebサイトURL",
    inputPlaceholder: "https://example.com/article",
    extractButton: "画像を抽出",
    extractingButton: "抽出中...",
    sampleButton: "サンプルURL",
    clearButton: "クリア",
    invalidUrlMessage: "http:// または https:// で始まる有効なWebサイトURLを入力してください。",
    fetchFailedMessage: "現在そのページを取得できません。URLを確認してもう一度お試しください。",
    noImagesFoundMessage: "そのページでは画像候補が見つかりませんでした。",
    resultsTitle: "抽出された画像",
    resultsDescription: "imgタグ、og:image、twitter:image などの標準的な画像ソースを確認します。",
    imageUrlLabel: "画像URL",
    copyLinkButton: "リンクをコピー",
    copiedLinkButton: "コピーしました！",
    openImageButton: "画像を開く",
    imageAlt: "抽出されたWebサイト画像のプレビュー",
    sourcePageLabel: "元ページ",
    imageCountLabel: "見つかった画像数",
    readyStateMessage: "上にWebページURLを入力すると画像リンクを抽出できます。"
  },
  es: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "Extrae URLs de imágenes de una página web, incluidas las de img y las vistas previas sociales.",
    title: "Website Image Extractor",
    description: "Pega la URL de una página para reunir imágenes de la página, Open Graph y Twitter Card en un solo lugar.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega una URL completa de una página web en el campo de abajo.",
      "Haz clic en Extraer imágenes para cargar la página a través de esta app y buscar candidatos de imagen.",
      "Previsualiza los resultados y luego copia el enlace directo o abre la imagen en una nueva pestaña."
    ],
    inputLabel: "URL del sitio web",
    inputPlaceholder: "https://example.com/article",
    extractButton: "Extraer imágenes",
    extractingButton: "Extrayendo...",
    sampleButton: "URL de ejemplo",
    clearButton: "Limpiar",
    invalidUrlMessage: "Ingresa una URL válida que empiece por http:// o https://.",
    fetchFailedMessage: "No pudimos obtener esa página ahora mismo. Revisa la URL e inténtalo de nuevo.",
    noImagesFoundMessage: "No se encontraron imágenes en esa página.",
    resultsTitle: "Imágenes extraídas",
    resultsDescription: "Buscamos fuentes comunes de imágenes, incluidas img, og:image y twitter:image.",
    imageUrlLabel: "URL de la imagen",
    copyLinkButton: "Copiar enlace",
    copiedLinkButton: "¡Copiado!",
    openImageButton: "Abrir imagen",
    imageAlt: "Vista previa de imagen extraída del sitio web",
    sourcePageLabel: "Página de origen",
    imageCountLabel: "Imágenes encontradas",
    readyStateMessage: "Ingresa arriba la URL de una página para extraer enlaces de imágenes."
  },
  fr: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "Extrayez les URLs d'images d'une page web, y compris les balises img et les aperçus sociaux.",
    title: "Website Image Extractor",
    description: "Collez l'URL d'une page web pour rassembler les images de la page, les images Open Graph et Twitter Card au même endroit.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez une URL complète de page web dans le champ ci-dessous.",
      "Cliquez sur Extraire les images pour récupérer la page via cette application et rechercher les images possibles.",
      "Prévisualisez les résultats, puis copiez le lien direct ou ouvrez l'image dans un nouvel onglet."
    ],
    inputLabel: "URL du site web",
    inputPlaceholder: "https://example.com/article",
    extractButton: "Extraire les images",
    extractingButton: "Extraction...",
    sampleButton: "URL exemple",
    clearButton: "Effacer",
    invalidUrlMessage: "Veuillez saisir une URL valide commençant par http:// ou https://.",
    fetchFailedMessage: "Nous n'avons pas pu récupérer cette page pour le moment. Vérifiez l'URL puis réessayez.",
    noImagesFoundMessage: "Aucune image n'a été trouvée sur cette page.",
    resultsTitle: "Images extraites",
    resultsDescription: "Nous recherchons les sources d'images standard, notamment img, og:image et twitter:image.",
    imageUrlLabel: "URL de l'image",
    copyLinkButton: "Copier le lien",
    copiedLinkButton: "Copié !",
    openImageButton: "Ouvrir l'image",
    imageAlt: "Aperçu d'image extraite du site web",
    sourcePageLabel: "Page source",
    imageCountLabel: "Images trouvées",
    readyStateMessage: "Saisissez l'URL d'une page ci-dessus pour extraire les liens d'image."
  },
  de: {
    metadataTitle: "Website Image Extractor",
    metadataDescription: "Extrahiere Bild-URLs von einer Webseite, einschließlich img-Tags und Social-Preview-Bildern.",
    title: "Website Image Extractor",
    description: "Füge eine Webseiten-URL ein, um Seitenbilder, Open-Graph-Bilder und Twitter-Card-Bilder an einem Ort zu sammeln.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge unten eine vollständige Webseiten-URL ein.",
      "Klicke auf Bilder extrahieren, um die Seite über diese App abzurufen und nach Bildkandidaten zu suchen.",
      "Sieh dir die Ergebnisse an und kopiere dann den direkten Bildlink oder öffne das Bild in einem neuen Tab."
    ],
    inputLabel: "Webseiten-URL",
    inputPlaceholder: "https://example.com/article",
    extractButton: "Bilder extrahieren",
    extractingButton: "Wird extrahiert...",
    sampleButton: "Beispiel-URL",
    clearButton: "Leeren",
    invalidUrlMessage: "Bitte gib eine gültige Webseiten-URL ein, die mit http:// oder https:// beginnt.",
    fetchFailedMessage: "Diese Seite konnte gerade nicht geladen werden. Prüfe die URL und versuche es erneut.",
    noImagesFoundMessage: "Auf dieser Seite wurden keine Bildkandidaten gefunden.",
    resultsTitle: "Extrahierte Bilder",
    resultsDescription: "Wir suchen nach üblichen Bildquellen, darunter img, og:image und twitter:image.",
    imageUrlLabel: "Bild-URL",
    copyLinkButton: "Link kopieren",
    copiedLinkButton: "Kopiert!",
    openImageButton: "Bild öffnen",
    imageAlt: "Vorschau des extrahierten Webseitenbilds",
    sourcePageLabel: "Quellseite",
    imageCountLabel: "Gefundene Bilder",
    readyStateMessage: "Gib oben eine Webseiten-URL ein, um Bildlinks zu extrahieren."
  }
};

export function getWebsiteImageExtractorMessages(locale: LocaleCode): WebsiteImageExtractorMessages {
  return websiteImageExtractorMessages[locale] ?? websiteImageExtractorMessages[defaultLocale]!;
}

export type { WebsiteImageExtractorMessages };
