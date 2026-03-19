import { defaultLocale, type LocaleCode } from "@/data/locales";

type YoutubeThumbnailExtractorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  inputPlaceholder: string;
  extractButton: string;
  sampleButton: string;
  clearButton: string;
  invalidUrlMessage: string;
  thumbnailSectionTitle: string;
  thumbnailSectionDescription: string;
  checkingThumbnailsMessage: string;
  noThumbnailsMessage: string;
  videoIdLabel: string;
  thumbnailLabels: {
    default: string;
    mqdefault: string;
    hqdefault: string;
    sddefault: string;
    maxresdefault: string;
  };
  copyLinkButton: string;
  copiedLinkButton: string;
  openImageButton: string;
  thumbnailAlt: string;
};

const youtubeThumbnailExtractorMessages: Partial<Record<LocaleCode, YoutubeThumbnailExtractorMessages>> = {
  en: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "Extract and open YouTube thumbnail images from common video URLs in your browser.",
    title: "YouTube Thumbnail Extractor",
    description: "Paste a YouTube link to preview and copy common thumbnail image sizes without using the YouTube API.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste a YouTube video URL into the field below.",
      "Click Extract thumbnails to detect the video ID and load available thumbnail sizes.",
      "Open any thumbnail in a new tab or copy its direct image link."
    ],
    inputLabel: "YouTube video URL",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "Extract thumbnails",
    sampleButton: "Sample URL",
    clearButton: "Clear",
    invalidUrlMessage: "Please enter a valid YouTube video URL.",
    thumbnailSectionTitle: "Available thumbnails",
    thumbnailSectionDescription: "We check common YouTube thumbnail sizes and show the images that are available for this video.",
    checkingThumbnailsMessage: "Checking available thumbnail sizes...",
    noThumbnailsMessage: "No thumbnail previews were found for this video yet. Try another YouTube URL.",
    videoIdLabel: "Video ID",
    thumbnailLabels: {
      default: "Default",
      mqdefault: "Medium Quality",
      hqdefault: "High Quality",
      sddefault: "Standard Definition",
      maxresdefault: "Maximum Resolution"
    },
    copyLinkButton: "Copy link",
    copiedLinkButton: "Copied!",
    openImageButton: "Open image",
    thumbnailAlt: "YouTube thumbnail preview"
  },
  ko: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "브라우저에서 일반적인 YouTube 동영상 URL로 썸네일 이미지를 추출하고 열 수 있습니다.",
    title: "YouTube Thumbnail Extractor",
    description: "YouTube 링크를 붙여넣으면 YouTube API 없이도 대표 썸네일 크기를 미리 보고 링크를 복사할 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "아래 입력칸에 YouTube 동영상 URL을 붙여넣으세요.",
      "썸네일 추출 버튼을 눌러 동영상 ID를 찾고 사용 가능한 썸네일 크기를 불러오세요.",
      "원하는 썸네일을 새 탭에서 열거나 직접 이미지 링크를 복사하세요."
    ],
    inputLabel: "YouTube 동영상 URL",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "썸네일 추출",
    sampleButton: "샘플 URL",
    clearButton: "지우기",
    invalidUrlMessage: "유효한 YouTube 동영상 URL을 입력해 주세요.",
    thumbnailSectionTitle: "사용 가능한 썸네일",
    thumbnailSectionDescription: "일반적인 YouTube 썸네일 크기를 확인하고 현재 동영상에서 사용할 수 있는 이미지만 보여줍니다.",
    checkingThumbnailsMessage: "사용 가능한 썸네일 크기를 확인하는 중입니다...",
    noThumbnailsMessage: "이 동영상에서 아직 불러올 수 있는 썸네일 미리보기가 없습니다. 다른 YouTube URL을 시도해 보세요.",
    videoIdLabel: "동영상 ID",
    thumbnailLabels: {
      default: "기본",
      mqdefault: "중간 화질",
      hqdefault: "고화질",
      sddefault: "표준 해상도",
      maxresdefault: "최대 해상도"
    },
    copyLinkButton: "링크 복사",
    copiedLinkButton: "복사됨!",
    openImageButton: "이미지 열기",
    thumbnailAlt: "YouTube 썸네일 미리보기"
  },
  ja: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "よくあるYouTube動画URLからサムネイル画像をブラウザで抽出して開けます。",
    title: "YouTube Thumbnail Extractor",
    description: "YouTubeリンクを貼り付けると、YouTube APIなしで代表的なサムネイルサイズを確認してリンクをコピーできます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "下の入力欄にYouTube動画URLを貼り付けます。",
      "Extract thumbnails を押して動画IDを検出し、利用可能なサムネイルサイズを読み込みます。",
      "必要なサムネイルを新しいタブで開くか、画像リンクをコピーします。"
    ],
    inputLabel: "YouTube動画URL",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "サムネイルを抽出",
    sampleButton: "サンプルURL",
    clearButton: "クリア",
    invalidUrlMessage: "有効なYouTube動画URLを入力してください。",
    thumbnailSectionTitle: "利用可能なサムネイル",
    thumbnailSectionDescription: "一般的なYouTubeサムネイルサイズを確認し、この動画で利用できる画像だけを表示します。",
    checkingThumbnailsMessage: "利用可能なサムネイルサイズを確認しています...",
    noThumbnailsMessage: "この動画では表示できるサムネイルが見つかりませんでした。別のYouTube URLをお試しください。",
    videoIdLabel: "動画ID",
    thumbnailLabels: {
      default: "デフォルト",
      mqdefault: "中画質",
      hqdefault: "高画質",
      sddefault: "標準画質",
      maxresdefault: "最大解像度"
    },
    copyLinkButton: "リンクをコピー",
    copiedLinkButton: "コピーしました！",
    openImageButton: "画像を開く",
    thumbnailAlt: "YouTubeサムネイルのプレビュー"
  },
  es: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "Extrae y abre miniaturas de YouTube desde URLs comunes directamente en tu navegador.",
    title: "YouTube Thumbnail Extractor",
    description: "Pega un enlace de YouTube para ver y copiar los tamaños de miniatura más comunes sin usar la API de YouTube.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega una URL de video de YouTube en el campo de abajo.",
      "Haz clic en Extraer miniaturas para detectar el ID del video y cargar los tamaños disponibles.",
      "Abre cualquier miniatura en una nueva pestaña o copia su enlace directo."
    ],
    inputLabel: "URL del video de YouTube",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "Extraer miniaturas",
    sampleButton: "URL de ejemplo",
    clearButton: "Limpiar",
    invalidUrlMessage: "Ingresa una URL válida de video de YouTube.",
    thumbnailSectionTitle: "Miniaturas disponibles",
    thumbnailSectionDescription: "Comprobamos los tamaños comunes de miniatura de YouTube y mostramos solo las imágenes disponibles para este video.",
    checkingThumbnailsMessage: "Comprobando tamaños de miniatura disponibles...",
    noThumbnailsMessage: "No se encontraron miniaturas disponibles para este video. Prueba con otra URL de YouTube.",
    videoIdLabel: "ID del video",
    thumbnailLabels: {
      default: "Predeterminada",
      mqdefault: "Calidad media",
      hqdefault: "Alta calidad",
      sddefault: "Definición estándar",
      maxresdefault: "Resolución máxima"
    },
    copyLinkButton: "Copiar enlace",
    copiedLinkButton: "¡Copiado!",
    openImageButton: "Abrir imagen",
    thumbnailAlt: "Vista previa de miniatura de YouTube"
  },
  fr: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "Extrayez et ouvrez des miniatures YouTube depuis les formats d'URL courants directement dans votre navigateur.",
    title: "YouTube Thumbnail Extractor",
    description: "Collez un lien YouTube pour prévisualiser et copier les tailles de miniatures les plus courantes sans utiliser l'API YouTube.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez une URL de vidéo YouTube dans le champ ci-dessous.",
      "Cliquez sur Extraire les miniatures pour détecter l'identifiant de la vidéo et charger les tailles disponibles.",
      "Ouvrez n'importe quelle miniature dans un nouvel onglet ou copiez son lien direct."
    ],
    inputLabel: "URL de la vidéo YouTube",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "Extraire les miniatures",
    sampleButton: "URL exemple",
    clearButton: "Effacer",
    invalidUrlMessage: "Veuillez saisir une URL de vidéo YouTube valide.",
    thumbnailSectionTitle: "Miniatures disponibles",
    thumbnailSectionDescription: "Nous vérifions les tailles de miniatures YouTube les plus courantes et n'affichons que celles qui existent pour cette vidéo.",
    checkingThumbnailsMessage: "Vérification des tailles de miniatures disponibles...",
    noThumbnailsMessage: "Aucune miniature disponible n'a été trouvée pour cette vidéo. Essayez une autre URL YouTube.",
    videoIdLabel: "ID de la vidéo",
    thumbnailLabels: {
      default: "Par défaut",
      mqdefault: "Qualité moyenne",
      hqdefault: "Haute qualité",
      sddefault: "Définition standard",
      maxresdefault: "Résolution maximale"
    },
    copyLinkButton: "Copier le lien",
    copiedLinkButton: "Copié !",
    openImageButton: "Ouvrir l'image",
    thumbnailAlt: "Aperçu de miniature YouTube"
  },
  de: {
    metadataTitle: "YouTube Thumbnail Extractor",
    metadataDescription: "Extrahiere und öffne YouTube-Thumbnails aus gängigen Video-URLs direkt im Browser.",
    title: "YouTube Thumbnail Extractor",
    description: "Füge einen YouTube-Link ein, um gängige Thumbnail-Größen ohne YouTube-API anzuzeigen und zu kopieren.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge unten eine YouTube-Video-URL ein.",
      "Klicke auf Thumbnails extrahieren, um die Video-ID zu erkennen und verfügbare Thumbnail-Größen zu laden.",
      "Öffne ein Thumbnail in einem neuen Tab oder kopiere den direkten Bildlink."
    ],
    inputLabel: "YouTube-Video-URL",
    inputPlaceholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extractButton: "Thumbnails extrahieren",
    sampleButton: "Beispiel-URL",
    clearButton: "Leeren",
    invalidUrlMessage: "Bitte gib eine gültige YouTube-Video-URL ein.",
    thumbnailSectionTitle: "Verfügbare Thumbnails",
    thumbnailSectionDescription: "Wir prüfen gängige YouTube-Thumbnail-Größen und zeigen nur die Bilder an, die für dieses Video verfügbar sind.",
    checkingThumbnailsMessage: "Verfügbare Thumbnail-Größen werden geprüft...",
    noThumbnailsMessage: "Für dieses Video wurden keine verfügbaren Thumbnail-Vorschauen gefunden. Versuche eine andere YouTube-URL.",
    videoIdLabel: "Video-ID",
    thumbnailLabels: {
      default: "Standard",
      mqdefault: "Mittlere Qualität",
      hqdefault: "Hohe Qualität",
      sddefault: "Standardauflösung",
      maxresdefault: "Maximale Auflösung"
    },
    copyLinkButton: "Link kopieren",
    copiedLinkButton: "Kopiert!",
    openImageButton: "Bild öffnen",
    thumbnailAlt: "YouTube-Thumbnail-Vorschau"
  }
};

export function getYoutubeThumbnailExtractorMessages(locale: LocaleCode): YoutubeThumbnailExtractorMessages {
  return youtubeThumbnailExtractorMessages[locale] ?? youtubeThumbnailExtractorMessages[defaultLocale]!;
}

export type { YoutubeThumbnailExtractorMessages };
