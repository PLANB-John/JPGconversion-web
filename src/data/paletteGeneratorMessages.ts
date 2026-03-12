import { defaultLocale, type LocaleCode } from "@/data/locales";

type PaletteGeneratorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  inputLabel: string;
  inputHint: string;
  generateButton: string;
  baseColorLabel: string;
  complementaryLabel: string;
  analogousLeftLabel: string;
  analogousRightLabel: string;
  lighterSectionTitle: string;
  darkerSectionTitle: string;
  paletteTitle: string;
  paletteDescription: string;
  hexLabel: string;
  copyHex: string;
  copied: string;
  errorInvalidHex: string;
  copyNotSupported: string;
};

const paletteMessages: Partial<Record<LocaleCode, PaletteGeneratorMessages>> = {
  en: {
    metadataTitle: "Palette Generator",
    metadataDescription: "Create color palettes from a base HEX color with lighter, darker, complementary, and analogous tones.",
    title: "Palette Generator",
    description: "Pick a base color and instantly generate a clean palette for UI, branding, or content graphics.",
    instructionsTitle: "How to use",
    instructions: [
      "Enter a HEX value (example: #4F46E5) or use the color picker.",
      "Click Generate Palette to create matching colors.",
      "Copy any HEX value from the palette cards."
    ],
    inputLabel: "Base HEX color",
    inputHint: "Use 6-digit HEX (for example #2563EB).",
    generateButton: "Generate Palette",
    baseColorLabel: "Base",
    complementaryLabel: "Complementary",
    analogousLeftLabel: "Analogous (-30°)",
    analogousRightLabel: "Analogous (+30°)",
    lighterSectionTitle: "Lighter variations",
    darkerSectionTitle: "Darker variations",
    paletteTitle: "Generated palette",
    paletteDescription: "Balanced colors based on your selected base color.",
    hexLabel: "HEX",
    copyHex: "Copy HEX",
    copied: "Copied!",
    errorInvalidHex: "Please enter a valid 6-digit HEX color (example: #1F2937).",
    copyNotSupported: "Clipboard is not available in this browser."
  },
  ko: {
    metadataTitle: "Palette Generator",
    metadataDescription: "기준 HEX 색상으로 밝은 색, 어두운 색, 보색, 유사색 팔레트를 생성하세요.",
    title: "Palette Generator",
    description: "기준 색상을 선택하면 UI, 브랜딩, 콘텐츠 디자인에 활용할 수 있는 팔레트를 바로 만들 수 있습니다.",
    instructionsTitle: "사용 방법",
    instructions: [
      "HEX 값을 입력하거나(예: #4F46E5) 컬러 피커를 사용하세요.",
      "팔레트 생성 버튼을 눌러 색상 조합을 만드세요.",
      "각 카드에서 HEX 값을 복사할 수 있습니다."
    ],
    inputLabel: "기준 HEX 색상",
    inputHint: "6자리 HEX 형식을 사용하세요. (예: #2563EB)",
    generateButton: "팔레트 생성",
    baseColorLabel: "기준 색상",
    complementaryLabel: "보색",
    analogousLeftLabel: "유사색 (-30°)",
    analogousRightLabel: "유사색 (+30°)",
    lighterSectionTitle: "밝은 변형",
    darkerSectionTitle: "어두운 변형",
    paletteTitle: "생성된 팔레트",
    paletteDescription: "선택한 기준 색상을 바탕으로 균형 있게 생성된 색상입니다.",
    hexLabel: "HEX",
    copyHex: "HEX 복사",
    copied: "복사됨!",
    errorInvalidHex: "올바른 6자리 HEX 색상을 입력해 주세요. (예: #1F2937)",
    copyNotSupported: "이 브라우저에서는 클립보드를 사용할 수 없습니다."
  },
  ja: {
    metadataTitle: "Palette Generator",
    metadataDescription: "ベースの HEX カラーから明るい色、暗い色、補色、類似色を生成します。",
    title: "Palette Generator",
    description: "ベースカラーを選ぶと、UI やブランディング向けのパレットをすぐに作成できます。",
    instructionsTitle: "使い方",
    instructions: [
      "HEX 値を入力するか（例: #4F46E5）、カラーピッカーを使います。",
      "「パレットを生成」を押して配色を生成します。",
      "各カードから HEX 値をコピーできます。"
    ],
    inputLabel: "ベース HEX カラー",
    inputHint: "6 桁の HEX を使用してください（例: #2563EB）。",
    generateButton: "パレットを生成",
    baseColorLabel: "ベース",
    complementaryLabel: "補色",
    analogousLeftLabel: "類似色 (-30°)",
    analogousRightLabel: "類似色 (+30°)",
    lighterSectionTitle: "明るいバリエーション",
    darkerSectionTitle: "暗いバリエーション",
    paletteTitle: "生成されたパレット",
    paletteDescription: "選択したベースカラーからバランス良く作成された色です。",
    hexLabel: "HEX",
    copyHex: "HEX をコピー",
    copied: "コピーしました！",
    errorInvalidHex: "有効な 6 桁 HEX カラーを入力してください（例: #1F2937）。",
    copyNotSupported: "このブラウザではクリップボードが利用できません。"
  },
  es: {
    metadataTitle: "Palette Generator",
    metadataDescription: "Genera paletas desde un color HEX base con tonos claros, oscuros, complementarios y análogos.",
    title: "Palette Generator",
    description: "Elige un color base y crea al instante una paleta limpia para UI, marca o contenido.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Ingresa un valor HEX (ejemplo: #4F46E5) o usa el selector de color.",
      "Haz clic en \"Generar paleta\" para crear colores combinados.",
      "Copia cualquier valor HEX desde las tarjetas."
    ],
    inputLabel: "Color HEX base",
    inputHint: "Usa HEX de 6 dígitos (por ejemplo #2563EB).",
    generateButton: "Generar paleta",
    baseColorLabel: "Base",
    complementaryLabel: "Complementario",
    analogousLeftLabel: "Análogo (-30°)",
    analogousRightLabel: "Análogo (+30°)",
    lighterSectionTitle: "Variaciones claras",
    darkerSectionTitle: "Variaciones oscuras",
    paletteTitle: "Paleta generada",
    paletteDescription: "Colores equilibrados según tu color base seleccionado.",
    hexLabel: "HEX",
    copyHex: "Copiar HEX",
    copied: "¡Copiado!",
    errorInvalidHex: "Ingresa un color HEX válido de 6 dígitos (ejemplo: #1F2937).",
    copyNotSupported: "El portapapeles no está disponible en este navegador."
  },
  fr: {
    metadataTitle: "Palette Generator",
    metadataDescription: "Créez des palettes depuis une couleur HEX de base avec des tons clairs, foncés, complémentaires et analogues.",
    title: "Palette Generator",
    description: "Choisissez une couleur de base et générez instantanément une palette propre pour l'UI, la marque ou le contenu.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Saisissez une valeur HEX (exemple : #4F46E5) ou utilisez le sélecteur de couleur.",
      "Cliquez sur « Générer la palette » pour créer des couleurs harmonisées.",
      "Copiez n'importe quelle valeur HEX depuis les cartes."
    ],
    inputLabel: "Couleur HEX de base",
    inputHint: "Utilisez un HEX à 6 caractères (par exemple #2563EB).",
    generateButton: "Générer la palette",
    baseColorLabel: "Base",
    complementaryLabel: "Complémentaire",
    analogousLeftLabel: "Analogue (-30°)",
    analogousRightLabel: "Analogue (+30°)",
    lighterSectionTitle: "Variations plus claires",
    darkerSectionTitle: "Variations plus foncées",
    paletteTitle: "Palette générée",
    paletteDescription: "Des couleurs équilibrées basées sur votre couleur de base.",
    hexLabel: "HEX",
    copyHex: "Copier HEX",
    copied: "Copié !",
    errorInvalidHex: "Veuillez saisir une couleur HEX valide à 6 caractères (exemple : #1F2937).",
    copyNotSupported: "Le presse-papiers n'est pas disponible dans ce navigateur."
  },
  de: {
    metadataTitle: "Palette Generator",
    metadataDescription: "Erzeuge Farbpaletten aus einer HEX-Basisfarbe mit helleren, dunkleren, komplementären und analogen Tönen.",
    title: "Palette Generator",
    description: "Wähle eine Basisfarbe und erstelle sofort eine klare Palette für UI, Branding oder Content.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Gib einen HEX-Wert ein (z. B. #4F46E5) oder nutze den Farbwähler.",
      "Klicke auf \"Palette generieren\", um passende Farben zu erstellen.",
      "Kopiere jeden HEX-Wert direkt aus den Karten."
    ],
    inputLabel: "Basis-HEX-Farbe",
    inputHint: "Nutze 6-stellige HEX-Werte (z. B. #2563EB).",
    generateButton: "Palette generieren",
    baseColorLabel: "Basis",
    complementaryLabel: "Komplementär",
    analogousLeftLabel: "Analog (-30°)",
    analogousRightLabel: "Analog (+30°)",
    lighterSectionTitle: "Hellere Varianten",
    darkerSectionTitle: "Dunklere Varianten",
    paletteTitle: "Generierte Palette",
    paletteDescription: "Ausgewogene Farben auf Basis deiner ausgewählten Farbe.",
    hexLabel: "HEX",
    copyHex: "HEX kopieren",
    copied: "Kopiert!",
    errorInvalidHex: "Bitte gib eine gültige 6-stellige HEX-Farbe ein (z. B. #1F2937).",
    copyNotSupported: "Die Zwischenablage ist in diesem Browser nicht verfügbar."
  }
};

export function getPaletteGeneratorMessages(locale: LocaleCode): PaletteGeneratorMessages {
  return paletteMessages[locale] ?? paletteMessages[defaultLocale]!;
}

export type { PaletteGeneratorMessages };
