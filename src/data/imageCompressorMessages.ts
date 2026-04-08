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
  supportTitle: string;
  supportDescription: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  quickStepsTitle: string;
  quickSteps: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
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
    errorProcessing: "Something went wrong while compressing. Please try another image.",
    supportTitle: "Quick image compression workflow",
    supportDescription: "Use this tool to reduce image weight quickly, keep practical visual quality, and choose better settings before uploading to your site.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need a lighter image file before uploading to a website or CMS.",
      "You want to compare quality and size without opening desktop software.",
      "You are testing JPG, PNG, and WebP output for faster page loading."
    ],
    quickStepsTitle: "Fast step-by-step",
    quickSteps: ["Upload one image.", "Choose output format and quality.", "Compress and compare previews.", "Download the smallest version that still looks clear."],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: ["Compressing a very large image without resizing first.", "Choosing one quality value for every image type.", "Judging only file size and skipping a quick visual check."],
    relatedGuidesTitle: "Related Image Compressor guides",
    relatedGuidesDescription: "Read a short guide for practical compression rules, size targets, and workflow tips."
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
    errorProcessing: "압축 중 문제가 발생했습니다. 다른 이미지로 다시 시도해 주세요.",
    supportTitle: "빠른 이미지 압축 워크플로",
    supportDescription: "업로드 전 파일 크기를 빠르게 줄이고, 시각 품질을 유지하면서 웹에 맞는 설정을 찾을 때 활용하세요.",
    whenToUseTitle: "이 도구를 쓰면 좋은 때",
    whenToUseItems: ["웹사이트나 CMS에 올리기 전에 이미지 용량을 줄여야 할 때.", "데스크톱 프로그램 없이 품질과 용량을 비교하고 싶을 때.", "JPG, PNG, WebP 결과를 빠르게 시험하고 싶을 때."],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: ["이미지 1장을 업로드합니다.", "출력 형식과 품질을 선택합니다.", "압축 후 전후 미리보기를 비교합니다.", "선명도가 유지되는 가장 작은 파일을 다운로드합니다."],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: ["리사이즈 없이 매우 큰 이미지를 바로 압축하는 것.", "모든 이미지에 같은 품질값을 사용하는 것.", "용량만 보고 시각 확인을 생략하는 것."],
    relatedGuidesTitle: "관련 이미지 압축 가이드",
    relatedGuidesDescription: "압축 기준, 목표 용량, 실무 팁이 필요하면 아래 짧은 가이드를 확인하세요."
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
    errorProcessing: "圧縮中に問題が発生しました。別の画像でお試しください。",
    supportTitle: "画像圧縮のクイックワークフロー",
    supportDescription: "このツールで画像容量を手早く下げ、見た目を確認しながらWeb向けの設定を決められます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: ["サイトやCMSにアップロードする前に画像を軽くしたいとき。", "デスクトップソフトなしで容量と画質を比較したいとき。", "JPG・PNG・WebPの出力差を素早く確認したいとき。"],
    quickStepsTitle: "最短ステップ",
    quickSteps: ["画像を1枚アップロード。", "出力形式と品質を設定。", "圧縮してプレビュー比較。", "見た目を保てる最小サイズをダウンロード。"],
    commonMistakesTitle: "よくある失敗",
    commonMistakes: ["リサイズ前に巨大画像をそのまま圧縮する。", "すべての画像に同じ品質値を使う。", "容量だけ見て見た目確認をしない。"],
    relatedGuidesTitle: "関連画像圧縮ガイド",
    relatedGuidesDescription: "設定の考え方や実践手順は、以下の短いガイドで確認できます。"
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
    errorProcessing: "Ocurrió un problema al comprimir. Prueba con otra imagen.",
    supportTitle: "Flujo rápido de compresión de imágenes",
    supportDescription: "Úsalo para reducir peso antes de subir imágenes, comparar calidad y elegir ajustes prácticos para web.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: ["Necesitas un archivo más liviano para tu web o CMS.", "Quieres comparar tamaño y calidad sin software adicional.", "Estás probando salida JPG, PNG y WebP para mejorar carga."],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: ["Sube una imagen.", "Elige formato y calidad.", "Comprime y compara vistas previas.", "Descarga la versión más pequeña que aún se vea bien."],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: ["Comprimir imágenes enormes sin redimensionar primero.", "Usar la misma calidad para todos los tipos de imagen.", "Mirar solo el tamaño y no revisar claridad visual."],
    relatedGuidesTitle: "Guías relacionadas de compresión",
    relatedGuidesDescription: "Consulta guías breves con reglas prácticas, tamaños objetivo y buenas decisiones de calidad."
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
    errorProcessing: "Une erreur est survenue pendant la compression. Essayez une autre image.",
    supportTitle: "Workflow rapide de compression d'image",
    supportDescription: "Réduisez rapidement le poids des images avant upload, tout en gardant une qualité visuelle suffisante pour le web.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: ["Vous devez alléger une image avant publication sur site ou CMS.", "Vous voulez comparer poids et qualité sans logiciel lourd.", "Vous testez les formats JPG, PNG et WebP pour accélérer le chargement."],
    quickStepsTitle: "Étapes rapides",
    quickSteps: ["Importez une image.", "Choisissez format et qualité.", "Compressez puis comparez les aperçus.", "Téléchargez la version la plus légère qui reste nette."],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: ["Compresser une image géante sans redimensionnement préalable.", "Appliquer la même qualité à tous les types d'image.", "Se concentrer uniquement sur le poids sans vérifier le rendu."],
    relatedGuidesTitle: "Guides liés à la compression",
    relatedGuidesDescription: "Consultez des guides courts pour fixer de bons réglages de taille et de qualité."
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
    errorProcessing: "Beim Komprimieren ist ein Fehler aufgetreten. Bitte versuche ein anderes Bild.",
    supportTitle: "Schneller Bildkomprimierungs-Workflow",
    supportDescription: "Nutze das Tool, um Bilder vor dem Upload zu verkleinern, Qualität zu prüfen und passende Web-Einstellungen festzulegen.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: ["Du brauchst eine kleinere Bilddatei für Website oder CMS.", "Du willst Größe und Qualität ohne Desktop-Software vergleichen.", "Du testest JPG-, PNG- und WebP-Ausgabe für bessere Ladezeiten."],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: ["Ein Bild hochladen.", "Format und Qualität wählen.", "Komprimieren und Vorschau vergleichen.", "Die kleinste noch klare Version herunterladen."],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: ["Sehr große Bilder ohne vorheriges Skalieren komprimieren.", "Für alle Bildtypen denselben Qualitätswert nutzen.", "Nur Dateigröße beachten und Sichtprüfung überspringen."],
    relatedGuidesTitle: "Passende Bildkomprimierungs-Guides",
    relatedGuidesDescription: "Kurze Guides helfen bei Qualitätsregeln, Zielgrößen und praktischen Workflows."
  }
};

export function getImageCompressorMessages(locale: LocaleCode): ImageCompressorMessages {
  return imageCompressorMessages[locale] ?? imageCompressorMessages[defaultLocale]!;
}

export type { ImageCompressorMessages };
