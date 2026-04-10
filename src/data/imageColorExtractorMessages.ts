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
    errorLoadFailed: "Could not read this image. Please try another file.",
    supportTitle: "Use extracted colors more effectively",
    supportDescription: "This tool helps you sample colors quickly, then move into cleaner palette decisions with the related guides below.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need the main colors from a logo, photo, or screenshot fast.",
      "You want to approximate brand colors before final design tokens are ready.",
      "You are preparing a first color direction for a website or campaign."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Upload a clear image and click key color areas.",
      "Keep 3-5 useful colors and copy their HEX values.",
      "Test those colors in a small UI mockup before rollout."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Sampling from blurry or heavily compressed images.",
      "Keeping too many similar colors with no clear purpose.",
      "Skipping contrast checks before using extracted colors in UI."
    ],
    relatedGuidesTitle: "Related Image Color Extractor guides",
    relatedGuidesDescription: "Continue with short practical guides for faster sampling, cleaner palettes, and fewer color mistakes."
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
    errorLoadFailed: "이미지를 불러오지 못했습니다. 다른 파일을 시도해 주세요.",
    supportTitle: "추출 색상을 더 잘 활용하는 방법",
    supportDescription: "이 도구로 색상을 빠르게 추출한 뒤, 아래 가이드로 팔레트 정리까지 이어서 진행하세요.",
    whenToUseTitle: "이 도구를 쓰면 좋은 때",
    whenToUseItems: ["로고·사진·스크린샷에서 핵심 색상을 빠르게 찾고 싶을 때.", "디자인 토큰 확정 전 브랜드 색상 후보를 잡아야 할 때.", "웹사이트/캠페인용 첫 색상 방향을 만들 때."],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: ["선명한 이미지를 올리고 핵심 영역을 클릭합니다.", "쓸모 있는 3~5개 색상만 남겨 HEX를 복사합니다.", "간단한 UI 목업에서 먼저 테스트합니다."],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: ["흐리거나 압축이 심한 이미지에서 샘플링하는 것.", "비슷한 색을 너무 많이 보관하는 것.", "UI 적용 전 대비(contrast) 확인을 건너뛰는 것."],
    relatedGuidesTitle: "관련 Image Color Extractor 가이드",
    relatedGuidesDescription: "더 빠른 추출, 더 깔끔한 팔레트, 실수 방지를 위한 짧은 실무 가이드를 확인하세요."
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
    errorLoadFailed: "画像を読み込めませんでした。別のファイルをお試しください。",
    supportTitle: "抽出色を実務で活かす",
    supportDescription: "このツールで素早く抽出し、下のガイドで使いやすい配色へ整理しましょう。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: ["ロゴ・写真・スクリーンショットから主要色をすぐ取りたいとき。", "正式トークン前にブランド色の候補を作りたいとき。", "サイトやキャンペーンの初期配色を決めたいとき。"],
    quickStepsTitle: "クイックステップ",
    quickSteps: ["鮮明な画像をアップロードして主要エリアをクリック。", "使う3〜5色に絞ってHEXをコピー。", "小さなUIモックで確認してから適用。"],
    commonMistakesTitle: "よくある失敗",
    commonMistakes: ["ぼやけた画像や圧縮の強い画像から抽出する。", "似た色を多く残しすぎる。", "UI適用前にコントラスト確認をしない。"],
    relatedGuidesTitle: "関連Image Color Extractorガイド",
    relatedGuidesDescription: "抽出の効率化、配色整理、ミス防止に役立つ短い実践ガイドです。"
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
    errorLoadFailed: "No se pudo leer esta imagen. Prueba con otro archivo.",
    supportTitle: "Aprovecha mejor los colores extraídos",
    supportDescription: "Extrae colores aquí en segundos y usa las guías relacionadas para convertirlos en una paleta más útil.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: ["Necesitas colores principales de un logo, foto o captura rápidamente.", "Quieres aproximar colores de marca antes de definir tokens finales.", "Preparas una dirección inicial de color para web o campaña."],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: ["Sube una imagen clara y haz clic en áreas de color clave.", "Quédate con 3-5 colores útiles y copia sus HEX.", "Prueba esos colores en una maqueta UI pequeña."],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: ["Muestrear imágenes borrosas o muy comprimidas.", "Guardar demasiados colores parecidos sin función clara.", "No revisar contraste antes de usar colores en UI."],
    relatedGuidesTitle: "Guías relacionadas de Image Color Extractor",
    relatedGuidesDescription: "Sigue con guías breves para muestrear más rápido, limpiar paletas y evitar errores de color."
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
    errorLoadFailed: "Impossible de lire cette image. Essayez un autre fichier.",
    supportTitle: "Mieux exploiter les couleurs extraites",
    supportDescription: "Prélevez rapidement des couleurs ici, puis passez aux guides ci-dessous pour construire une palette plus propre.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: ["Vous devez trouver vite les couleurs principales d'un logo, d'une photo ou d'une capture.", "Vous voulez approximer des couleurs de marque avant les tokens finaux.", "Vous préparez une première direction colorimétrique pour un site ou une campagne."],
    quickStepsTitle: "Étapes rapides",
    quickSteps: ["Importez une image nette puis cliquez sur les zones clés.", "Gardez 3 à 5 couleurs utiles et copiez leurs HEX.", "Testez-les dans une petite maquette UI avant déploiement."],
    commonMistakesTitle: "Erreurs courantes",
    commonMistakes: ["Échantillonner une image floue ou trop compressée.", "Conserver trop de couleurs proches sans rôle clair.", "Oublier les vérifications de contraste avant usage UI."],
    relatedGuidesTitle: "Guides Image Color Extractor associés",
    relatedGuidesDescription: "Continuez avec des guides courts pour extraire plus vite, nettoyer vos palettes et éviter les erreurs."
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
    errorLoadFailed: "Dieses Bild konnte nicht gelesen werden. Bitte versuche eine andere Datei.",
    supportTitle: "Extrahierte Farben besser nutzen",
    supportDescription: "Extrahiere hier schnell Farben und nutze die Guides unten, um daraus eine sauberere Website-Palette zu machen.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: ["Du brauchst Hauptfarben aus Logo, Foto oder Screenshot in kurzer Zeit.", "Du möchtest Markenfarben grob ableiten, bevor finale Tokens feststehen.", "Du planst eine erste Farbrichtung für Website oder Kampagne."],
    quickStepsTitle: "Kurze Schritte",
    quickSteps: ["Lade ein klares Bild hoch und klicke wichtige Farbbereiche an.", "Behalte 3-5 brauchbare Farben und kopiere die HEX-Werte.", "Teste die Farben in einem kleinen UI-Mockup vor dem Rollout."],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: ["Aus unscharfen oder stark komprimierten Bildern sampeln.", "Zu viele ähnliche Farben ohne klare Rolle behalten.", "Kontrastprüfung vor UI-Einsatz überspringen."],
    relatedGuidesTitle: "Passende Image-Color-Extractor-Guides",
    relatedGuidesDescription: "Lies kurze Guides für schnelleres Sampling, sauberere Paletten und weniger Farbfehler."
  }
};

export function getImageColorExtractorMessages(locale: LocaleCode): ExtractorMessages {
  return extractorMessages[locale] ?? extractorMessages[defaultLocale]!;
}

export type { ExtractorMessages };
