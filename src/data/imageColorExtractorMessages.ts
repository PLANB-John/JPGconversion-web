import { defaultLocale, type LocaleCode } from "@/data/locales";

type ExtractorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  uploadLabel: string;
  chooseFile: string;
  noFileChosen: string;
  emptyState: string;
  imageAlt: string;
  selectedColorTitle: string;
  selectedColorHint: string;
  hexLabel: string;
  rgbLabel: string;
  copyHex: string;
  copyRgb: string;
  copied: string;
  copyNotSupported: string;
  recentColorsTitle: string;
  errorInvalidFile: string;
  errorLoadFailed: string;
};

const extractorMessages: Partial<Record<LocaleCode, ExtractorMessages>> = {
  en: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "Upload an image, click any pixel, and copy HEX or RGB values instantly in your browser.",
    title: "Image Color Extractor",
    description: "Upload an image, click anywhere, and instantly read the color under your cursor.",
    instructionsTitle: "How to use",
    instructions: [
      "Upload a JPG, PNG, WebP, or GIF file.",
      "Click on the image preview to sample a pixel.",
      "Copy HEX or RGB values with one click."
    ],
    uploadLabel: "Upload image",
    chooseFile: "Choose File",
    noFileChosen: "No file chosen",
    emptyState: "Upload an image to start extracting colors.",
    imageAlt: "Uploaded preview for color extraction",
    selectedColorTitle: "Selected Color",
    selectedColorHint: "Click on the image to pick a color.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "Copy HEX",
    copyRgb: "Copy RGB",
    copied: "Copied!",
    copyNotSupported: "Clipboard is not available in this browser.",
    recentColorsTitle: "Recent Colors",
    errorInvalidFile: "Please upload a valid image file.",
    errorLoadFailed: "Could not read this image. Please try another file."
  },
  ko: {
    metadataTitle: "이미지 색상 추출기",
    metadataDescription: "이미지를 업로드하고 픽셀을 클릭해 브라우저에서 HEX와 RGB 값을 바로 확인하세요.",
    title: "이미지 색상 추출기",
    description: "이미지를 업로드한 뒤 원하는 지점을 클릭하면 해당 색상을 즉시 확인할 수 있습니다.",
    instructionsTitle: "사용 방법",
    instructions: [
      "JPG, PNG, WebP, GIF 이미지를 업로드하세요.",
      "미리보기 이미지를 클릭해 픽셀 색상을 추출하세요.",
      "HEX 또는 RGB 값을 버튼으로 복사하세요."
    ],
    uploadLabel: "이미지 업로드",
    chooseFile: "파일 선택",
    noFileChosen: "선택된 파일 없음",
    emptyState: "색상을 추출하려면 이미지를 업로드하세요.",
    imageAlt: "색상 추출용 업로드 이미지 미리보기",
    selectedColorTitle: "선택한 색상",
    selectedColorHint: "이미지를 클릭해 색상을 선택하세요.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "HEX 복사",
    copyRgb: "RGB 복사",
    copied: "복사됨!",
    copyNotSupported: "이 브라우저에서는 클립보드를 사용할 수 없습니다.",
    recentColorsTitle: "최근 선택 색상",
    errorInvalidFile: "유효한 이미지 파일을 업로드해 주세요.",
    errorLoadFailed: "이미지를 불러오지 못했습니다. 다른 파일을 시도해 주세요."
  },
  ja: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "画像をアップロードしてピクセルをクリックし、ブラウザで HEX と RGB の値をすぐに取得できます。",
    title: "Image Color Extractor",
    description: "画像をアップロードして任意の場所をクリックすると、カーソル下の色をすぐに確認できます。",
    instructionsTitle: "使い方",
    instructions: [
      "JPG、PNG、WebP、GIF の画像をアップロードします。",
      "プレビュー画像をクリックしてピクセルの色を取得します。",
      "HEX または RGB の値をワンクリックでコピーします。"
    ],
    uploadLabel: "画像をアップロード",
    chooseFile: "ファイルを選択",
    noFileChosen: "ファイルが選択されていません",
    emptyState: "色を抽出するには画像をアップロードしてください。",
    imageAlt: "色抽出用にアップロードされた画像プレビュー",
    selectedColorTitle: "選択した色",
    selectedColorHint: "画像をクリックして色を選択してください。",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "HEX をコピー",
    copyRgb: "RGB をコピー",
    copied: "コピーしました！",
    copyNotSupported: "このブラウザではクリップボードが利用できません。",
    recentColorsTitle: "最近選択した色",
    errorInvalidFile: "有効な画像ファイルをアップロードしてください。",
    errorLoadFailed: "画像を読み込めませんでした。別のファイルをお試しください。"
  },
  es: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "Sube una imagen, haz clic en cualquier píxel y copia al instante valores HEX o RGB en tu navegador.",
    title: "Image Color Extractor",
    description: "Sube una imagen, haz clic en cualquier punto y obtén al instante el color bajo el cursor.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Sube un archivo JPG, PNG, WebP o GIF.",
      "Haz clic en la vista previa para muestrear un píxel.",
      "Copia valores HEX o RGB con un clic."
    ],
    uploadLabel: "Subir imagen",
    chooseFile: "Seleccionar archivo",
    noFileChosen: "Ningún archivo seleccionado",
    emptyState: "Sube una imagen para empezar a extraer colores.",
    imageAlt: "Vista previa cargada para extraer colores",
    selectedColorTitle: "Color seleccionado",
    selectedColorHint: "Haz clic en la imagen para elegir un color.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "Copiar HEX",
    copyRgb: "Copiar RGB",
    copied: "¡Copiado!",
    copyNotSupported: "El portapapeles no está disponible en este navegador.",
    recentColorsTitle: "Colores recientes",
    errorInvalidFile: "Sube un archivo de imagen válido.",
    errorLoadFailed: "No se pudo leer esta imagen. Prueba con otro archivo."
  },
  fr: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "Importez une image, cliquez sur un pixel et copiez instantanément les valeurs HEX ou RGB dans votre navigateur.",
    title: "Image Color Extractor",
    description: "Importez une image, cliquez n'importe où et lisez immédiatement la couleur sous votre curseur.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Importez un fichier JPG, PNG, WebP ou GIF.",
      "Cliquez sur l'aperçu de l'image pour échantillonner un pixel.",
      "Copiez les valeurs HEX ou RGB en un clic."
    ],
    uploadLabel: "Importer une image",
    chooseFile: "Choisir un fichier",
    noFileChosen: "Aucun fichier sélectionné",
    emptyState: "Importez une image pour commencer l'extraction des couleurs.",
    imageAlt: "Aperçu de l'image importée pour l'extraction des couleurs",
    selectedColorTitle: "Couleur sélectionnée",
    selectedColorHint: "Cliquez sur l'image pour choisir une couleur.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "Copier HEX",
    copyRgb: "Copier RGB",
    copied: "Copié !",
    copyNotSupported: "Le presse-papiers n'est pas disponible dans ce navigateur.",
    recentColorsTitle: "Couleurs récentes",
    errorInvalidFile: "Veuillez importer un fichier image valide.",
    errorLoadFailed: "Impossible de lire cette image. Essayez un autre fichier."
  },
  de: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "Lade ein Bild hoch, klicke auf ein Pixel und kopiere HEX- oder RGB-Werte sofort im Browser.",
    title: "Image Color Extractor",
    description: "Lade ein Bild hoch, klicke auf eine Stelle und lies sofort die Farbe unter dem Cursor aus.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Lade eine JPG-, PNG-, WebP- oder GIF-Datei hoch.",
      "Klicke auf die Bildvorschau, um ein Pixel zu wählen.",
      "Kopiere HEX- oder RGB-Werte mit einem Klick."
    ],
    uploadLabel: "Bild hochladen",
    chooseFile: "Datei auswählen",
    noFileChosen: "Keine Datei ausgewählt",
    emptyState: "Lade ein Bild hoch, um Farben zu extrahieren.",
    imageAlt: "Hochgeladene Vorschau für die Farbextraktion",
    selectedColorTitle: "Ausgewählte Farbe",
    selectedColorHint: "Klicke auf das Bild, um eine Farbe auszuwählen.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "HEX kopieren",
    copyRgb: "RGB kopieren",
    copied: "Kopiert!",
    copyNotSupported: "Die Zwischenablage ist in diesem Browser nicht verfügbar.",
    recentColorsTitle: "Zuletzt ausgewählte Farben",
    errorInvalidFile: "Bitte lade eine gültige Bilddatei hoch.",
    errorLoadFailed: "Dieses Bild konnte nicht gelesen werden. Bitte versuche eine andere Datei."
  }
};

export function getImageColorExtractorMessages(locale: LocaleCode): ExtractorMessages {
  return extractorMessages[locale] ?? extractorMessages[defaultLocale]!;
}

export type { ExtractorMessages };
