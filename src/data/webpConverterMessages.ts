import { defaultLocale, type LocaleCode } from "@/data/locales";

type WebpConverterMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  uploadLabel: string;
  uploadButtonText: string;
  noFileSelectedText: string;
  uploadHint: string;
  qualityLabel: string;
  convertButton: string;
  downloadButton: string;
  originalPreviewTitle: string;
  convertedPreviewTitle: string;
  originalFileSizeLabel: string;
  convertedFileSizeLabel: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  convertedEmptyTitle: string;
  convertedEmptyDescription: string;
  errorNoImage: string;
  errorInvalidFile: string;
  errorProcessing: string;
};

const webpConverterMessages: Partial<Record<LocaleCode, WebpConverterMessages>> = {
  en: {
    metadataTitle: "WebP Converter",
    metadataDescription: "Convert PNG, JPG, and other image formats to WebP directly in your browser with a quality slider.",
    title: "WebP Converter",
    description: "Upload an image, adjust quality, and convert it to a lightweight WebP file in your browser.",
    instructionsTitle: "How to use",
    instructions: [
      "Upload one image file from your device.",
      "Adjust the quality slider to balance size and image quality.",
      "Click Convert to WebP and wait for the preview.",
      "Download the converted WebP file."
    ],
    uploadLabel: "Upload image",
    uploadButtonText: "Choose file",
    noFileSelectedText: "No file selected",
    uploadHint: "Supports common image formats like PNG, JPG, JPEG, GIF, and WEBP.",
    qualityLabel: "Quality",
    convertButton: "Convert to WebP",
    downloadButton: "Download WebP",
    originalPreviewTitle: "Original preview",
    convertedPreviewTitle: "Converted WebP preview",
    originalFileSizeLabel: "Original file size",
    convertedFileSizeLabel: "Converted file size",
    emptyStateTitle: "No image uploaded yet",
    emptyStateDescription: "Upload an image to preview and convert it.",
    convertedEmptyTitle: "No converted image yet",
    convertedEmptyDescription: "Adjust quality and click Convert to WebP.",
    errorNoImage: "Please upload an image first.",
    errorInvalidFile: "Please choose a valid image file.",
    errorProcessing: "Something went wrong while converting. Please try another file."
  },
  ko: {
    metadataTitle: "WebP 변환기",
    metadataDescription: "브라우저에서 품질 슬라이더로 PNG, JPG 등의 이미지를 WebP로 변환하세요.",
    title: "WebP 변환기",
    description: "이미지를 업로드하고 품질을 조정한 뒤 가벼운 WebP 파일로 변환하세요.",
    instructionsTitle: "사용 방법",
    instructions: [
      "기기에서 이미지 파일 1개를 업로드하세요.",
      "품질 슬라이더로 용량과 화질의 균형을 맞추세요.",
      "WebP로 변환 버튼을 눌러 미리보기를 확인하세요.",
      "변환된 WebP 파일을 다운로드하세요."
    ],
    uploadLabel: "이미지 업로드",
    uploadButtonText: "파일 선택",
    noFileSelectedText: "선택된 파일 없음",
    uploadHint: "PNG, JPG, JPEG, GIF, WEBP 등 일반 이미지 형식을 지원합니다.",
    qualityLabel: "품질",
    convertButton: "WebP로 변환",
    downloadButton: "WebP 다운로드",
    originalPreviewTitle: "원본 미리보기",
    convertedPreviewTitle: "변환된 WebP 미리보기",
    originalFileSizeLabel: "원본 파일 크기",
    convertedFileSizeLabel: "변환된 파일 크기",
    emptyStateTitle: "아직 업로드된 이미지가 없습니다",
    emptyStateDescription: "이미지를 업로드하면 미리보기와 변환을 할 수 있습니다.",
    convertedEmptyTitle: "아직 변환된 이미지가 없습니다",
    convertedEmptyDescription: "품질을 조정하고 WebP로 변환을 눌러 주세요.",
    errorNoImage: "먼저 이미지를 업로드해 주세요.",
    errorInvalidFile: "올바른 이미지 파일을 선택해 주세요.",
    errorProcessing: "변환 중 문제가 발생했습니다. 다른 파일로 다시 시도해 주세요."
  },
  ja: {
    metadataTitle: "WebPコンバーター",
    metadataDescription: "品質スライダーを使って、ブラウザ上でPNGやJPGなどをWebPに変換します。",
    title: "WebPコンバーター",
    description: "画像をアップロードし、品質を調整して軽量なWebPファイルに変換できます。",
    instructionsTitle: "使い方",
    instructions: [
      "デバイスから画像ファイルを1つアップロードします。",
      "品質スライダーで容量と画質のバランスを調整します。",
      "「WebPに変換」をクリックしてプレビューを確認します。",
      "変換後のWebPファイルをダウンロードします。"
    ],
    uploadLabel: "画像をアップロード",
    uploadButtonText: "ファイルを選択",
    noFileSelectedText: "ファイルが選択されていません",
    uploadHint: "PNG、JPG、JPEG、GIF、WEBP などの一般的な形式に対応しています。",
    qualityLabel: "品質",
    convertButton: "WebPに変換",
    downloadButton: "WebPをダウンロード",
    originalPreviewTitle: "元画像プレビュー",
    convertedPreviewTitle: "変換後WebPプレビュー",
    originalFileSizeLabel: "元ファイルサイズ",
    convertedFileSizeLabel: "変換後ファイルサイズ",
    emptyStateTitle: "まだ画像がアップロードされていません",
    emptyStateDescription: "画像をアップロードするとプレビューと変換ができます。",
    convertedEmptyTitle: "まだ変換画像がありません",
    convertedEmptyDescription: "品質を調整して「WebPに変換」を押してください。",
    errorNoImage: "先に画像をアップロードしてください。",
    errorInvalidFile: "有効な画像ファイルを選択してください。",
    errorProcessing: "変換中にエラーが発生しました。別のファイルでお試しください。"
  },
  es: {
    metadataTitle: "Convertidor WebP",
    metadataDescription: "Convierte PNG, JPG y otros formatos a WebP directamente en tu navegador con un control de calidad.",
    title: "Convertidor WebP",
    description: "Sube una imagen, ajusta la calidad y conviértela a WebP sin salir del navegador.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Sube un archivo de imagen desde tu dispositivo.",
      "Ajusta el control de calidad según el tamaño y la calidad que quieras.",
      "Haz clic en Convertir a WebP y espera la vista previa.",
      "Descarga el archivo WebP convertido."
    ],
    uploadLabel: "Subir imagen",
    uploadButtonText: "Seleccionar archivo",
    noFileSelectedText: "Ningún archivo seleccionado",
    uploadHint: "Admite formatos comunes como PNG, JPG, JPEG, GIF y WEBP.",
    qualityLabel: "Calidad",
    convertButton: "Convertir a WebP",
    downloadButton: "Descargar WebP",
    originalPreviewTitle: "Vista previa original",
    convertedPreviewTitle: "Vista previa WebP convertida",
    originalFileSizeLabel: "Tamaño original",
    convertedFileSizeLabel: "Tamaño convertido",
    emptyStateTitle: "Aún no has subido una imagen",
    emptyStateDescription: "Sube una imagen para verla y convertirla.",
    convertedEmptyTitle: "Aún no hay imagen convertida",
    convertedEmptyDescription: "Ajusta la calidad y haz clic en Convertir a WebP.",
    errorNoImage: "Primero sube una imagen.",
    errorInvalidFile: "Elige un archivo de imagen válido.",
    errorProcessing: "Ocurrió un error al convertir. Prueba con otro archivo."
  },
  fr: {
    metadataTitle: "Convertisseur WebP",
    metadataDescription: "Convertissez PNG, JPG et d'autres formats en WebP directement dans le navigateur avec un réglage de qualité.",
    title: "Convertisseur WebP",
    description: "Importez une image, ajustez la qualité, puis convertissez-la en WebP dans le navigateur.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Importez un fichier image depuis votre appareil.",
      "Ajustez le curseur de qualité selon le poids et le rendu souhaités.",
      "Cliquez sur Convertir en WebP et attendez l'aperçu.",
      "Téléchargez le fichier WebP converti."
    ],
    uploadLabel: "Importer une image",
    uploadButtonText: "Choisir un fichier",
    noFileSelectedText: "Aucun fichier sélectionné",
    uploadHint: "Prend en charge les formats courants comme PNG, JPG, JPEG, GIF et WEBP.",
    qualityLabel: "Qualité",
    convertButton: "Convertir en WebP",
    downloadButton: "Télécharger le WebP",
    originalPreviewTitle: "Aperçu original",
    convertedPreviewTitle: "Aperçu WebP converti",
    originalFileSizeLabel: "Taille d'origine",
    convertedFileSizeLabel: "Taille convertie",
    emptyStateTitle: "Aucune image importée",
    emptyStateDescription: "Importez une image pour la prévisualiser et la convertir.",
    convertedEmptyTitle: "Aucune image convertie",
    convertedEmptyDescription: "Ajustez la qualité puis cliquez sur Convertir en WebP.",
    errorNoImage: "Veuillez d'abord importer une image.",
    errorInvalidFile: "Veuillez choisir un fichier image valide.",
    errorProcessing: "Une erreur est survenue pendant la conversion. Essayez un autre fichier."
  },
  de: {
    metadataTitle: "WebP-Konverter",
    metadataDescription: "Konvertiere PNG, JPG und andere Formate direkt im Browser mit einem Qualitätsregler in WebP.",
    title: "WebP-Konverter",
    description: "Lade ein Bild hoch, passe die Qualität an und konvertiere es im Browser in eine WebP-Datei.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Lade eine Bilddatei von deinem Gerät hoch.",
      "Passe den Qualitätsregler für Dateigröße und Bildqualität an.",
      "Klicke auf In WebP konvertieren und warte auf die Vorschau.",
      "Lade die konvertierte WebP-Datei herunter."
    ],
    uploadLabel: "Bild hochladen",
    uploadButtonText: "Datei auswählen",
    noFileSelectedText: "Keine Datei ausgewählt",
    uploadHint: "Unterstützt gängige Bildformate wie PNG, JPG, JPEG, GIF und WEBP.",
    qualityLabel: "Qualität",
    convertButton: "In WebP konvertieren",
    downloadButton: "WebP herunterladen",
    originalPreviewTitle: "Originalvorschau",
    convertedPreviewTitle: "Konvertierte WebP-Vorschau",
    originalFileSizeLabel: "Original-Dateigröße",
    convertedFileSizeLabel: "Konvertierte Dateigröße",
    emptyStateTitle: "Noch kein Bild hochgeladen",
    emptyStateDescription: "Lade ein Bild hoch, um es anzusehen und zu konvertieren.",
    convertedEmptyTitle: "Noch kein konvertiertes Bild",
    convertedEmptyDescription: "Stelle die Qualität ein und klicke auf In WebP konvertieren.",
    errorNoImage: "Bitte lade zuerst ein Bild hoch.",
    errorInvalidFile: "Bitte wähle eine gültige Bilddatei aus.",
    errorProcessing: "Beim Konvertieren ist ein Fehler aufgetreten. Bitte versuche eine andere Datei."
  }
};

export function getWebpConverterMessages(locale: LocaleCode): WebpConverterMessages {
  return webpConverterMessages[locale] ?? webpConverterMessages[defaultLocale]!;
}

export type { WebpConverterMessages };
