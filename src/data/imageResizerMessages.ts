import { defaultLocale, type LocaleCode } from "@/data/locales";

type ImageResizerMessages = {
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
  originalPreviewTitle: string;
  resizedPreviewTitle: string;
  originalDimensionsLabel: string;
  widthLabel: string;
  heightLabel: string;
  lockAspectRatioLabel: string;
  formatLabel: string;
  resizeButton: string;
  downloadButton: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  resizedEmptyTitle: string;
  resizedEmptyDescription: string;
  errorNoImage: string;
  errorInvalidDimensions: string;
  errorProcessing: string;
  jpegOption: string;
  pngOption: string;
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

const imageResizerMessages: Partial<Record<LocaleCode, ImageResizerMessages>> = {
  en: {
    metadataTitle: "Image Resizer",
    metadataDescription: "Resize images directly in your browser by setting custom width and height with optional aspect ratio lock.",
    title: "Image Resizer",
    description: "Upload an image, set your target size, and download a resized PNG or JPG in seconds.",
    instructionsTitle: "How to use",
    instructions: [
      "Upload an image file from your device.",
      "Enter your target width and height in pixels.",
      "Keep aspect ratio enabled if you want proportional resizing.",
      "Click Resize Image and download your final file."
    ],
    uploadLabel: "Upload image",
    uploadButtonText: "Choose file",
    noFileSelectedText: "No file selected",
    uploadHint: "Supports common image formats like PNG, JPG, JPEG, and WEBP.",
    originalPreviewTitle: "Original preview",
    resizedPreviewTitle: "Resized preview",
    originalDimensionsLabel: "Original size",
    widthLabel: "Width (px)",
    heightLabel: "Height (px)",
    lockAspectRatioLabel: "Lock aspect ratio",
    formatLabel: "Output format",
    resizeButton: "Resize Image",
    downloadButton: "Download resized image",
    emptyStateTitle: "No image uploaded yet",
    emptyStateDescription: "Upload an image to preview and resize it.",
    resizedEmptyTitle: "No resized image yet",
    resizedEmptyDescription: "Set your dimensions and click Resize Image.",
    errorNoImage: "Please upload an image first.",
    errorInvalidDimensions: "Please enter valid width and height values greater than 0.",
    errorProcessing: "Something went wrong while resizing the image. Please try another file.",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "Quick image resizing workflow",
    supportDescription: "Use this tool to set practical image dimensions fast, avoid stretched outputs, and match common web layout slots.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need exact dimensions before uploading to a website, blog, or CMS.",
      "You want to prepare one image in multiple sizes for social, thumbnails, and headers.",
      "You need a quick resize without opening desktop design software."
    ],
    quickStepsTitle: "Fast step-by-step",
    quickSteps: ["Upload your image.", "Enter width and height, and keep aspect ratio locked when needed.", "Choose PNG or JPG output.", "Resize, check the preview, and download."],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Turning off aspect ratio lock and unintentionally stretching the image.",
      "Using random dimensions instead of the real layout or platform size.",
      "Resizing first but skipping a quick quality check before publishing."
    ],
    relatedGuidesTitle: "Related Image Resizer guides",
    relatedGuidesDescription: "Read short guides for practical resize workflows, social media dimensions, and quality-safe resizing."
  },
  ko: {
    metadataTitle: "이미지 리사이저",
    metadataDescription: "가로/세로 크기를 직접 설정하고 비율 잠금 옵션으로 브라우저에서 이미지를 리사이즈하세요.",
    title: "이미지 리사이저",
    description: "이미지를 업로드하고 원하는 크기로 조정한 뒤 PNG 또는 JPG로 다운로드할 수 있습니다.",
    instructionsTitle: "사용 방법",
    instructions: [
      "기기에서 이미지 파일을 업로드하세요.",
      "원하는 가로/세로 픽셀 값을 입력하세요.",
      "비율을 유지하려면 비율 잠금을 켜세요.",
      "이미지 리사이즈 버튼을 누르고 결과 파일을 다운로드하세요."
    ],
    uploadLabel: "이미지 업로드",
    uploadButtonText: "파일 선택",
    noFileSelectedText: "선택된 파일 없음",
    uploadHint: "PNG, JPG, JPEG, WEBP 같은 일반 이미지 형식을 지원합니다.",
    originalPreviewTitle: "원본 미리보기",
    resizedPreviewTitle: "리사이즈 미리보기",
    originalDimensionsLabel: "원본 크기",
    widthLabel: "가로 (px)",
    heightLabel: "세로 (px)",
    lockAspectRatioLabel: "비율 잠금",
    formatLabel: "출력 형식",
    resizeButton: "이미지 리사이즈",
    downloadButton: "리사이즈 이미지 다운로드",
    emptyStateTitle: "아직 업로드된 이미지가 없습니다",
    emptyStateDescription: "미리보기와 리사이즈를 위해 이미지를 업로드해 주세요.",
    resizedEmptyTitle: "아직 리사이즈된 이미지가 없습니다",
    resizedEmptyDescription: "크기를 설정한 뒤 이미지 리사이즈를 눌러 주세요.",
    errorNoImage: "먼저 이미지를 업로드해 주세요.",
    errorInvalidDimensions: "0보다 큰 올바른 가로/세로 값을 입력해 주세요.",
    errorProcessing: "이미지 리사이즈 중 문제가 발생했습니다. 다른 파일로 다시 시도해 주세요.",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "빠른 이미지 리사이즈 워크플로",
    supportDescription: "웹 레이아웃에 맞는 크기를 빠르게 맞추고, 늘어짐 없는 결과로 업로드 준비를 할 때 활용하세요.",
    whenToUseTitle: "이 도구를 쓰면 좋은 때",
    whenToUseItems: [
      "웹사이트·블로그·CMS 업로드 전에 정확한 픽셀 크기가 필요할 때.",
      "소셜, 썸네일, 헤더용으로 한 이미지를 여러 크기로 만들 때.",
      "데스크톱 디자인 툴 없이 빠르게 리사이즈하고 싶을 때."
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: ["이미지를 업로드합니다.", "가로·세로를 입력하고 필요하면 비율 잠금을 유지합니다.", "PNG 또는 JPG를 선택합니다.", "리사이즈 후 미리보기를 확인하고 다운로드합니다."],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: ["비율 잠금을 끄고 이미지가 의도치 않게 늘어지는 것.", "플랫폼 규격 대신 임의 크기를 입력하는 것.", "리사이즈 후 최종 품질 확인 없이 바로 게시하는 것."],
    relatedGuidesTitle: "관련 이미지 리사이저 가이드",
    relatedGuidesDescription: "소셜 규격, 블로그 크기, 왜곡 없는 리사이즈를 위한 짧은 실무 가이드를 확인하세요."
  },
  ja: {
    metadataTitle: "画像リサイザー",
    metadataDescription: "幅と高さを指定し、アスペクト比ロック付きでブラウザ上で画像をリサイズできます。",
    title: "画像リサイザー",
    description: "画像をアップロードしてサイズを変更し、PNG または JPG でダウンロードできます。",
    instructionsTitle: "使い方",
    instructions: [
      "デバイスから画像ファイルをアップロードします。",
      "目標の幅と高さ（px）を入力します。",
      "比率を保つ場合はアスペクト比ロックを有効にします。",
      "「画像をリサイズ」を押して結果をダウンロードします。"
    ],
    uploadLabel: "画像をアップロード",
    uploadButtonText: "ファイルを選択",
    noFileSelectedText: "ファイルが選択されていません",
    uploadHint: "PNG、JPG、JPEG、WEBP など一般的な形式に対応しています。",
    originalPreviewTitle: "元画像プレビュー",
    resizedPreviewTitle: "リサイズ後プレビュー",
    originalDimensionsLabel: "元サイズ",
    widthLabel: "幅 (px)",
    heightLabel: "高さ (px)",
    lockAspectRatioLabel: "アスペクト比を固定",
    formatLabel: "出力形式",
    resizeButton: "画像をリサイズ",
    downloadButton: "リサイズ画像をダウンロード",
    emptyStateTitle: "まだ画像がアップロードされていません",
    emptyStateDescription: "画像をアップロードするとプレビューとリサイズができます。",
    resizedEmptyTitle: "まだリサイズ画像がありません",
    resizedEmptyDescription: "サイズを設定して「画像をリサイズ」を押してください。",
    errorNoImage: "先に画像をアップロードしてください。",
    errorInvalidDimensions: "0 より大きい有効な幅と高さを入力してください。",
    errorProcessing: "リサイズ中にエラーが発生しました。別の画像でお試しください。",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "画像リサイズのクイックワークフロー",
    supportDescription: "実用的な寸法をすばやく設定し、縦横比の崩れを防ぎながらWeb用画像を準備できます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "サイト・ブログ・CMSに合わせて正確なサイズが必要なとき。",
      "SNS用、サムネイル用、ヘッダー用に同じ画像を複数サイズで用意したいとき。",
      "デスクトップソフトを開かずに手早くリサイズしたいとき。"
    ],
    quickStepsTitle: "最短ステップ",
    quickSteps: ["画像をアップロード。", "幅と高さを入力し、必要なら比率ロックを維持。", "PNGまたはJPGを選択。", "リサイズしてプレビュー確認後に保存。"],
    commonMistakesTitle: "よくある失敗",
    commonMistakes: ["比率ロックを外して意図せず画像を引き伸ばす。", "実際の掲載枠ではなく適当なサイズを入力する。", "リサイズ後の見え方を確認せず公開する。"],
    relatedGuidesTitle: "関連Image Resizerガイド",
    relatedGuidesDescription: "SNSサイズ、ブログ画像寸法、劣化を防ぐリサイズ手順を短いガイドで確認できます。"
  },
  es: {
    metadataTitle: "Redimensionador de imágenes",
    metadataDescription: "Redimensiona imágenes en el navegador con ancho/alto personalizados y opción de mantener proporción.",
    title: "Redimensionador de imágenes",
    description: "Sube una imagen, ajusta el tamaño objetivo y descarga el resultado en PNG o JPG.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Sube un archivo de imagen desde tu dispositivo.",
      "Ingresa el ancho y alto objetivo en píxeles.",
      "Activa mantener proporción para redimensionar de forma proporcional.",
      "Haz clic en Redimensionar imagen y descarga el resultado."
    ],
    uploadLabel: "Subir imagen",
    uploadButtonText: "Seleccionar archivo",
    noFileSelectedText: "Ningún archivo seleccionado",
    uploadHint: "Admite formatos comunes como PNG, JPG, JPEG y WEBP.",
    originalPreviewTitle: "Vista previa original",
    resizedPreviewTitle: "Vista previa redimensionada",
    originalDimensionsLabel: "Tamaño original",
    widthLabel: "Ancho (px)",
    heightLabel: "Alto (px)",
    lockAspectRatioLabel: "Mantener proporción",
    formatLabel: "Formato de salida",
    resizeButton: "Redimensionar imagen",
    downloadButton: "Descargar imagen redimensionada",
    emptyStateTitle: "Aún no has subido una imagen",
    emptyStateDescription: "Sube una imagen para verla y redimensionarla.",
    resizedEmptyTitle: "Aún no hay imagen redimensionada",
    resizedEmptyDescription: "Define el tamaño y haz clic en Redimensionar imagen.",
    errorNoImage: "Primero sube una imagen.",
    errorInvalidDimensions: "Ingresa valores de ancho y alto válidos y mayores que 0.",
    errorProcessing: "Ocurrió un error al redimensionar la imagen. Prueba con otro archivo.",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "Flujo rápido de redimensionado",
    supportDescription: "Úsalo para definir dimensiones prácticas, evitar imágenes estiradas y preparar tamaños correctos para web.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Necesitas dimensiones exactas antes de subir a un sitio, blog o CMS.",
      "Quieres crear varias versiones para redes, miniaturas y encabezados.",
      "Buscas un redimensionado rápido sin abrir software de diseño."
    ],
    quickStepsTitle: "Paso a paso rápido",
    quickSteps: ["Sube tu imagen.", "Define ancho y alto y mantén la proporción cuando convenga.", "Elige salida PNG o JPG.", "Redimensiona, revisa vista previa y descarga."],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: ["Desactivar mantener proporción y estirar la imagen sin querer.", "Usar medidas aleatorias en lugar de tamaños reales del layout o plataforma.", "Redimensionar y publicar sin revisión visual final."],
    relatedGuidesTitle: "Guías relacionadas de Image Resizer",
    relatedGuidesDescription: "Lee guías cortas con flujos prácticos para redes sociales, blog y redimensionado sin deformaciones."
  },
  fr: {
    metadataTitle: "Redimensionneur d'images",
    metadataDescription: "Redimensionnez des images dans le navigateur avec largeur/hauteur personnalisées et verrouillage du ratio.",
    title: "Redimensionneur d'images",
    description: "Importez une image, définissez la taille cible, puis téléchargez-la en PNG ou JPG.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Importez un fichier image depuis votre appareil.",
      "Saisissez la largeur et la hauteur cibles en pixels.",
      "Activez le verrouillage du ratio pour garder les proportions.",
      "Cliquez sur Redimensionner l'image puis téléchargez le résultat."
    ],
    uploadLabel: "Importer une image",
    uploadButtonText: "Choisir un fichier",
    noFileSelectedText: "Aucun fichier sélectionné",
    uploadHint: "Prend en charge les formats courants comme PNG, JPG, JPEG et WEBP.",
    originalPreviewTitle: "Aperçu original",
    resizedPreviewTitle: "Aperçu redimensionné",
    originalDimensionsLabel: "Taille d'origine",
    widthLabel: "Largeur (px)",
    heightLabel: "Hauteur (px)",
    lockAspectRatioLabel: "Verrouiller le ratio",
    formatLabel: "Format de sortie",
    resizeButton: "Redimensionner l'image",
    downloadButton: "Télécharger l'image redimensionnée",
    emptyStateTitle: "Aucune image importée",
    emptyStateDescription: "Importez une image pour la prévisualiser et la redimensionner.",
    resizedEmptyTitle: "Aucune image redimensionnée",
    resizedEmptyDescription: "Définissez la taille puis cliquez sur Redimensionner l'image.",
    errorNoImage: "Veuillez d'abord importer une image.",
    errorInvalidDimensions: "Veuillez saisir une largeur et une hauteur valides, supérieures à 0.",
    errorProcessing: "Une erreur est survenue pendant le redimensionnement. Essayez un autre fichier.",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "Workflow rapide de redimensionnement",
    supportDescription: "Servez-vous de cet outil pour fixer des dimensions utiles, éviter les images étirées et préparer vos visuels web plus vite.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vous avez besoin de dimensions exactes avant upload sur site, blog ou CMS.",
      "Vous souhaitez décliner une image en plusieurs formats (social, miniature, bannière).",
      "Vous voulez redimensionner rapidement sans logiciel desktop."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: ["Importez l'image.", "Définissez largeur/hauteur et gardez le ratio si nécessaire.", "Choisissez PNG ou JPG.", "Redimensionnez, vérifiez l'aperçu puis téléchargez."],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: ["Désactiver le ratio et déformer l'image sans le vouloir.", "Utiliser des dimensions au hasard au lieu des tailles réelles de mise en page.", "Publier sans vérification visuelle après redimensionnement."],
    relatedGuidesTitle: "Guides Image Resizer associés",
    relatedGuidesDescription: "Consultez des guides courts sur les dimensions social media, les tailles de blog et le redimensionnement sans déformation."
  },
  de: {
    metadataTitle: "Bildgrößenänderer",
    metadataDescription: "Skaliere Bilder direkt im Browser mit eigener Breite/Höhe und optional gesperrtem Seitenverhältnis.",
    title: "Bildgrößenänderer",
    description: "Lade ein Bild hoch, stelle die Zielgröße ein und lade das Ergebnis als PNG oder JPG herunter.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Lade eine Bilddatei von deinem Gerät hoch.",
      "Gib die gewünschte Breite und Höhe in Pixeln ein.",
      "Aktiviere Seitenverhältnis sperren für proportionale Größenänderung.",
      "Klicke auf Bild skalieren und lade die Datei herunter."
    ],
    uploadLabel: "Bild hochladen",
    uploadButtonText: "Datei auswählen",
    noFileSelectedText: "Keine Datei ausgewählt",
    uploadHint: "Unterstützt gängige Formate wie PNG, JPG, JPEG und WEBP.",
    originalPreviewTitle: "Originalvorschau",
    resizedPreviewTitle: "Skalierte Vorschau",
    originalDimensionsLabel: "Originalgröße",
    widthLabel: "Breite (px)",
    heightLabel: "Höhe (px)",
    lockAspectRatioLabel: "Seitenverhältnis sperren",
    formatLabel: "Ausgabeformat",
    resizeButton: "Bild skalieren",
    downloadButton: "Skaliertes Bild herunterladen",
    emptyStateTitle: "Noch kein Bild hochgeladen",
    emptyStateDescription: "Lade ein Bild hoch, um es anzuzeigen und zu skalieren.",
    resizedEmptyTitle: "Noch kein skaliertes Bild",
    resizedEmptyDescription: "Lege die Größe fest und klicke auf Bild skalieren.",
    errorNoImage: "Bitte lade zuerst ein Bild hoch.",
    errorInvalidDimensions: "Bitte gib gültige Breiten- und Höhenwerte größer als 0 ein.",
    errorProcessing: "Beim Skalieren ist ein Fehler aufgetreten. Bitte versuche eine andere Datei.",
    jpegOption: "JPG / JPEG",
    pngOption: "PNG",
    supportTitle: "Schneller Resize-Workflow",
    supportDescription: "Nutze das Tool, um sinnvolle Bildmaße festzulegen, Verzerrungen zu vermeiden und Webbilder zügig vorzubereiten.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: [
      "Du brauchst exakte Maße vor dem Upload auf Website, Blog oder CMS.",
      "Du willst ein Bild in mehreren Größen für Social, Thumbnails und Header erstellen.",
      "Du möchtest schnell skalieren, ohne Desktop-Designsoftware zu öffnen."
    ],
    quickStepsTitle: "Schnelle Schrittfolge",
    quickSteps: ["Bild hochladen.", "Breite und Höhe eingeben, Seitenverhältnis bei Bedarf aktiv lassen.", "PNG oder JPG wählen.", "Skalieren, Vorschau prüfen und herunterladen."],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: ["Seitenverhältnis deaktivieren und das Bild ungewollt strecken.", "Zufällige Maße statt realer Plattform- oder Layoutgrößen verwenden.", "Nach dem Skalieren ohne Sichtprüfung direkt veröffentlichen."],
    relatedGuidesTitle: "Passende Image-Resizer-Guides",
    relatedGuidesDescription: "Lies kurze Guides zu Social-Media-Maßen, Blog-Bildgrößen und verzerrungsfreiem Skalieren."
  }
};

export function getImageResizerMessages(locale: LocaleCode): ImageResizerMessages {
  return imageResizerMessages[locale] ?? imageResizerMessages[defaultLocale]!;
}

export type { ImageResizerMessages };
