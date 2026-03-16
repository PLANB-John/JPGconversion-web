import { defaultLocale, type LocaleCode } from "@/data/locales";

type ImageCompressorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  uploadLabel: string;
  uploadButtonText: string;
  noFileSelectedText: string;
  qualityLabel: string;
  outputFormatLabel: string;
  outputFormatJpeg: string;
  outputFormatPng: string;
  outputFormatWebp: string;
  compressButton: string;
  downloadButton: string;
  originalPreviewTitle: string;
  compressedPreviewTitle: string;
  originalFileSizeLabel: string;
  compressedFileSizeLabel: string;
  reductionLabel: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  compressedEmptyTitle: string;
  compressedEmptyDescription: string;
  errorNoImage: string;
  errorInvalidFile: string;
  errorProcessing: string;
};

const imageCompressorMessages: Partial<Record<LocaleCode, ImageCompressorMessages>> = {
  en: {
    metadataTitle: "Image Compressor",
    metadataDescription: "Compress images in your browser, control quality, choose output format, and download smaller files instantly.",
    title: "Image Compressor",
    description: "Upload an image, lower the quality if needed, and download a compressed version without leaving your browser.",
    instructionsTitle: "How to use",
    instructions: [
      "Upload one image from your device.",
      "Set the quality level and output format.",
      "Click Compress Image and wait for the new preview.",
      "Check the size difference and download the compressed file."
    ],
    uploadLabel: "Upload image",
    uploadButtonText: "Choose file",
    noFileSelectedText: "No file selected",
    qualityLabel: "Quality",
    outputFormatLabel: "Output format",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "Compress Image",
    downloadButton: "Download Compressed Image",
    originalPreviewTitle: "Original preview",
    compressedPreviewTitle: "Compressed preview",
    originalFileSizeLabel: "Original file size",
    compressedFileSizeLabel: "Compressed file size",
    reductionLabel: "Size reduction",
    emptyStateTitle: "No image uploaded yet",
    emptyStateDescription: "Upload an image to see the original preview.",
    compressedEmptyTitle: "No compressed image yet",
    compressedEmptyDescription: "Set quality and format, then click Compress Image.",
    errorNoImage: "Please upload an image first.",
    errorInvalidFile: "Please choose a valid image file.",
    errorProcessing: "Something went wrong while compressing. Please try another image."
  },
  ko: {
    metadataTitle: "이미지 압축기",
    metadataDescription: "브라우저에서 이미지를 압축하고, 품질과 출력 형식을 선택한 뒤 바로 다운로드하세요.",
    title: "이미지 압축기",
    description: "이미지를 업로드하고 품질을 조정해 용량을 줄인 파일을 브라우저에서 바로 다운로드하세요.",
    instructionsTitle: "사용 방법",
    instructions: [
      "기기에서 이미지 1개를 업로드하세요.",
      "품질과 출력 형식을 설정하세요.",
      "이미지 압축 버튼을 눌러 새 미리보기를 확인하세요.",
      "용량 차이를 확인하고 압축된 파일을 다운로드하세요."
    ],
    uploadLabel: "이미지 업로드",
    uploadButtonText: "파일 선택",
    noFileSelectedText: "선택된 파일 없음",
    qualityLabel: "품질",
    outputFormatLabel: "출력 형식",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "이미지 압축",
    downloadButton: "압축된 이미지 다운로드",
    originalPreviewTitle: "원본 미리보기",
    compressedPreviewTitle: "압축 미리보기",
    originalFileSizeLabel: "원본 파일 크기",
    compressedFileSizeLabel: "압축된 파일 크기",
    reductionLabel: "용량 감소율",
    emptyStateTitle: "아직 업로드된 이미지가 없습니다",
    emptyStateDescription: "이미지를 업로드하면 원본 미리보기를 확인할 수 있습니다.",
    compressedEmptyTitle: "아직 압축된 이미지가 없습니다",
    compressedEmptyDescription: "품질과 형식을 설정한 뒤 이미지 압축을 눌러 주세요.",
    errorNoImage: "먼저 이미지를 업로드해 주세요.",
    errorInvalidFile: "올바른 이미지 파일을 선택해 주세요.",
    errorProcessing: "압축 중 문제가 발생했습니다. 다른 이미지로 다시 시도해 주세요."
  },
  ja: {
    metadataTitle: "画像圧縮ツール",
    metadataDescription: "ブラウザ上で画像を圧縮し、品質と出力形式を選んでダウンロードできます。",
    title: "画像圧縮ツール",
    description: "画像をアップロードし、品質を調整して軽量化した画像をブラウザで保存できます。",
    instructionsTitle: "使い方",
    instructions: [
      "デバイスから画像を1枚アップロードします。",
      "品質と出力形式を設定します。",
      "「画像を圧縮」をクリックして新しいプレビューを表示します。",
      "サイズの差を確認して圧縮画像をダウンロードします。"
    ],
    uploadLabel: "画像をアップロード",
    uploadButtonText: "ファイルを選択",
    noFileSelectedText: "ファイルが選択されていません",
    qualityLabel: "品質",
    outputFormatLabel: "出力形式",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "画像を圧縮",
    downloadButton: "圧縮画像をダウンロード",
    originalPreviewTitle: "元画像プレビュー",
    compressedPreviewTitle: "圧縮後プレビュー",
    originalFileSizeLabel: "元ファイルサイズ",
    compressedFileSizeLabel: "圧縮後ファイルサイズ",
    reductionLabel: "削減率",
    emptyStateTitle: "まだ画像がアップロードされていません",
    emptyStateDescription: "画像をアップロードすると元画像のプレビューが表示されます。",
    compressedEmptyTitle: "まだ圧縮画像がありません",
    compressedEmptyDescription: "品質と形式を設定して「画像を圧縮」を押してください。",
    errorNoImage: "先に画像をアップロードしてください。",
    errorInvalidFile: "有効な画像ファイルを選択してください。",
    errorProcessing: "圧縮中に問題が発生しました。別の画像でお試しください。"
  },
  es: {
    metadataTitle: "Compresor de Imágenes",
    metadataDescription: "Comprime imágenes en tu navegador, ajusta calidad y formato de salida, y descarga archivos más livianos.",
    title: "Compresor de Imágenes",
    description: "Sube una imagen, ajusta la calidad y descarga una versión comprimida directamente en el navegador.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Sube una imagen desde tu dispositivo.",
      "Configura la calidad y el formato de salida.",
      "Haz clic en Comprimir imagen y espera la nueva vista previa.",
      "Revisa la diferencia de tamaño y descarga el archivo comprimido."
    ],
    uploadLabel: "Subir imagen",
    uploadButtonText: "Seleccionar archivo",
    noFileSelectedText: "Ningún archivo seleccionado",
    qualityLabel: "Calidad",
    outputFormatLabel: "Formato de salida",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "Comprimir imagen",
    downloadButton: "Descargar imagen comprimida",
    originalPreviewTitle: "Vista previa original",
    compressedPreviewTitle: "Vista previa comprimida",
    originalFileSizeLabel: "Tamaño original",
    compressedFileSizeLabel: "Tamaño comprimido",
    reductionLabel: "Reducción",
    emptyStateTitle: "Aún no has subido una imagen",
    emptyStateDescription: "Sube una imagen para ver la vista previa original.",
    compressedEmptyTitle: "Aún no hay imagen comprimida",
    compressedEmptyDescription: "Configura calidad y formato, luego haz clic en Comprimir imagen.",
    errorNoImage: "Primero sube una imagen.",
    errorInvalidFile: "Elige un archivo de imagen válido.",
    errorProcessing: "Ocurrió un problema al comprimir. Prueba con otra imagen."
  },
  fr: {
    metadataTitle: "Compresseur d'images",
    metadataDescription: "Compressez des images dans votre navigateur, réglez la qualité et le format de sortie, puis téléchargez le résultat.",
    title: "Compresseur d'images",
    description: "Importez une image, ajustez la qualité, puis téléchargez une version compressée directement depuis le navigateur.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Importez une image depuis votre appareil.",
      "Réglez la qualité et le format de sortie.",
      "Cliquez sur Compresser l'image et attendez l'aperçu.",
      "Comparez les tailles puis téléchargez l'image compressée."
    ],
    uploadLabel: "Importer une image",
    uploadButtonText: "Choisir un fichier",
    noFileSelectedText: "Aucun fichier sélectionné",
    qualityLabel: "Qualité",
    outputFormatLabel: "Format de sortie",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "Compresser l'image",
    downloadButton: "Télécharger l'image compressée",
    originalPreviewTitle: "Aperçu original",
    compressedPreviewTitle: "Aperçu compressé",
    originalFileSizeLabel: "Taille d'origine",
    compressedFileSizeLabel: "Taille compressée",
    reductionLabel: "Réduction",
    emptyStateTitle: "Aucune image importée",
    emptyStateDescription: "Importez une image pour afficher l'aperçu original.",
    compressedEmptyTitle: "Aucune image compressée",
    compressedEmptyDescription: "Réglez la qualité et le format, puis cliquez sur Compresser l'image.",
    errorNoImage: "Veuillez d'abord importer une image.",
    errorInvalidFile: "Veuillez choisir un fichier image valide.",
    errorProcessing: "Une erreur est survenue pendant la compression. Essayez une autre image."
  },
  de: {
    metadataTitle: "Bildkomprimierer",
    metadataDescription: "Komprimiere Bilder direkt im Browser, passe Qualität und Ausgabeformat an und lade kleinere Dateien herunter.",
    title: "Bildkomprimierer",
    description: "Lade ein Bild hoch, passe die Qualität an und speichere eine komprimierte Version direkt im Browser.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Lade ein Bild von deinem Gerät hoch.",
      "Stelle Qualität und Ausgabeformat ein.",
      "Klicke auf Bild komprimieren und warte auf die neue Vorschau.",
      "Prüfe den Größenunterschied und lade die komprimierte Datei herunter."
    ],
    uploadLabel: "Bild hochladen",
    uploadButtonText: "Datei auswählen",
    noFileSelectedText: "Keine Datei ausgewählt",
    qualityLabel: "Qualität",
    outputFormatLabel: "Ausgabeformat",
    outputFormatJpeg: "JPEG",
    outputFormatPng: "PNG",
    outputFormatWebp: "WebP",
    compressButton: "Bild komprimieren",
    downloadButton: "Komprimiertes Bild herunterladen",
    originalPreviewTitle: "Originalvorschau",
    compressedPreviewTitle: "Komprimierte Vorschau",
    originalFileSizeLabel: "Original-Dateigröße",
    compressedFileSizeLabel: "Komprimierte Dateigröße",
    reductionLabel: "Reduzierung",
    emptyStateTitle: "Noch kein Bild hochgeladen",
    emptyStateDescription: "Lade ein Bild hoch, um die Originalvorschau zu sehen.",
    compressedEmptyTitle: "Noch kein komprimiertes Bild",
    compressedEmptyDescription: "Stelle Qualität und Format ein und klicke auf Bild komprimieren.",
    errorNoImage: "Bitte lade zuerst ein Bild hoch.",
    errorInvalidFile: "Bitte wähle eine gültige Bilddatei aus.",
    errorProcessing: "Beim Komprimieren ist ein Fehler aufgetreten. Bitte versuche ein anderes Bild."
  }
};

export function getImageCompressorMessages(locale: LocaleCode): ImageCompressorMessages {
  return imageCompressorMessages[locale] ?? imageCompressorMessages[defaultLocale]!;
}

export type { ImageCompressorMessages };
