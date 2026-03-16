import { defaultLocale, type LocaleCode } from "@/data/locales";

type GradientGeneratorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  gradientTypeLabel: string;
  linearOption: string;
  radialOption: string;
  angleLabel: string;
  firstColorLabel: string;
  secondColorLabel: string;
  thirdColorLabel: string;
  addThirdColorButton: string;
  removeThirdColorButton: string;
  previewLabel: string;
  generatedCssLabel: string;
  copyButton: string;
  copiedButton: string;
  presetsLabel: string;
};

const gradientGeneratorMessages: Partial<Record<LocaleCode, GradientGeneratorMessages>> = {
  en: {
    metadataTitle: "Gradient Generator",
    metadataDescription: "Create linear or radial CSS gradients, preview instantly, and copy ready-to-use code.",
    title: "Gradient Generator",
    description: "Pick colors, adjust options, and generate CSS gradients instantly in your browser.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Choose at least two colors.",
      "Select linear or radial gradient type.",
      "If linear is selected, adjust the angle.",
      "Copy the generated CSS and paste it into your project."
    ],
    gradientTypeLabel: "Gradient type",
    linearOption: "Linear",
    radialOption: "Radial",
    angleLabel: "Angle",
    firstColorLabel: "Color stop 1",
    secondColorLabel: "Color stop 2",
    thirdColorLabel: "Color stop 3",
    addThirdColorButton: "Add third color",
    removeThirdColorButton: "Remove third color",
    previewLabel: "Live preview",
    generatedCssLabel: "Generated CSS",
    copyButton: "Copy CSS",
    copiedButton: "Copied!",
    presetsLabel: "Quick presets"
  },
  ko: {
    metadataTitle: "그라디언트 생성기",
    metadataDescription: "선형/원형 CSS 그라디언트를 만들고, 미리보기 후 코드를 바로 복사하세요.",
    title: "그라디언트 생성기",
    description: "색상을 고르고 옵션을 조정해 브라우저에서 바로 CSS 그라디언트를 만드세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "최소 두 가지 색상을 선택하세요.",
      "선형 또는 원형 그라디언트 유형을 선택하세요.",
      "선형을 선택했다면 각도를 조정하세요.",
      "생성된 CSS를 복사해 프로젝트에 붙여넣으세요."
    ],
    gradientTypeLabel: "그라디언트 유형",
    linearOption: "선형",
    radialOption: "원형",
    angleLabel: "각도",
    firstColorLabel: "색상 스톱 1",
    secondColorLabel: "색상 스톱 2",
    thirdColorLabel: "색상 스톱 3",
    addThirdColorButton: "세 번째 색상 추가",
    removeThirdColorButton: "세 번째 색상 제거",
    previewLabel: "실시간 미리보기",
    generatedCssLabel: "생성된 CSS",
    copyButton: "CSS 복사",
    copiedButton: "복사됨!",
    presetsLabel: "빠른 프리셋"
  },
  ja: {
    metadataTitle: "グラデーションジェネレーター",
    metadataDescription: "線形/放射状のCSSグラデーションを作成し、プレビューしてコードをコピーできます。",
    title: "グラデーションジェネレーター",
    description: "色とオプションを設定して、ブラウザでCSSグラデーションをすぐに作成できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "少なくとも2色を選択します。",
      "線形または放射状を選びます。",
      "線形の場合は角度を調整します。",
      "生成されたCSSをコピーしてプロジェクトに貼り付けます。"
    ],
    gradientTypeLabel: "グラデーションの種類",
    linearOption: "線形",
    radialOption: "放射状",
    angleLabel: "角度",
    firstColorLabel: "カラー1",
    secondColorLabel: "カラー2",
    thirdColorLabel: "カラー3",
    addThirdColorButton: "3つ目の色を追加",
    removeThirdColorButton: "3つ目の色を削除",
    previewLabel: "ライブプレビュー",
    generatedCssLabel: "生成されたCSS",
    copyButton: "CSSをコピー",
    copiedButton: "コピーしました！",
    presetsLabel: "プリセット"
  },
  es: {
    metadataTitle: "Generador de gradientes",
    metadataDescription: "Crea gradientes CSS lineales o radiales, previsualiza al instante y copia el código.",
    title: "Generador de gradientes",
    description: "Elige colores, ajusta opciones y genera gradientes CSS al instante en tu navegador.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Elige al menos dos colores.",
      "Selecciona el tipo de gradiente: lineal o radial.",
      "Si eliges lineal, ajusta el ángulo.",
      "Copia el CSS generado y pégalo en tu proyecto."
    ],
    gradientTypeLabel: "Tipo de gradiente",
    linearOption: "Lineal",
    radialOption: "Radial",
    angleLabel: "Ángulo",
    firstColorLabel: "Parada de color 1",
    secondColorLabel: "Parada de color 2",
    thirdColorLabel: "Parada de color 3",
    addThirdColorButton: "Agregar tercer color",
    removeThirdColorButton: "Quitar tercer color",
    previewLabel: "Vista previa en vivo",
    generatedCssLabel: "CSS generado",
    copyButton: "Copiar CSS",
    copiedButton: "¡Copiado!",
    presetsLabel: "Preajustes rápidos"
  },
  fr: {
    metadataTitle: "Générateur de dégradés",
    metadataDescription: "Créez des dégradés CSS linéaires ou radiaux, prévisualisez et copiez le code instantanément.",
    title: "Générateur de dégradés",
    description: "Choisissez vos couleurs, ajustez les options et générez un dégradé CSS directement dans le navigateur.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Choisissez au moins deux couleurs.",
      "Sélectionnez le type de dégradé : linéaire ou radial.",
      "Si linéaire est sélectionné, ajustez l'angle.",
      "Copiez le CSS généré et collez-le dans votre projet."
    ],
    gradientTypeLabel: "Type de dégradé",
    linearOption: "Linéaire",
    radialOption: "Radial",
    angleLabel: "Angle",
    firstColorLabel: "Couleur 1",
    secondColorLabel: "Couleur 2",
    thirdColorLabel: "Couleur 3",
    addThirdColorButton: "Ajouter une troisième couleur",
    removeThirdColorButton: "Supprimer la troisième couleur",
    previewLabel: "Aperçu en direct",
    generatedCssLabel: "CSS généré",
    copyButton: "Copier le CSS",
    copiedButton: "Copié !",
    presetsLabel: "Préréglages rapides"
  },
  de: {
    metadataTitle: "Verlaufsgenerator",
    metadataDescription: "Erstelle lineare oder radiale CSS-Verläufe, sieh eine Live-Vorschau und kopiere den Code.",
    title: "Verlaufsgenerator",
    description: "Wähle Farben, passe Optionen an und erzeuge CSS-Verläufe direkt im Browser.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Wähle mindestens zwei Farben aus.",
      "Wähle den Verlaufstyp: linear oder radial.",
      "Bei linear kannst du den Winkel einstellen.",
      "Kopiere den erzeugten CSS-Code in dein Projekt."
    ],
    gradientTypeLabel: "Verlaufstyp",
    linearOption: "Linear",
    radialOption: "Radial",
    angleLabel: "Winkel",
    firstColorLabel: "Farb-Stopp 1",
    secondColorLabel: "Farb-Stopp 2",
    thirdColorLabel: "Farb-Stopp 3",
    addThirdColorButton: "Dritte Farbe hinzufügen",
    removeThirdColorButton: "Dritte Farbe entfernen",
    previewLabel: "Live-Vorschau",
    generatedCssLabel: "Generiertes CSS",
    copyButton: "CSS kopieren",
    copiedButton: "Kopiert!",
    presetsLabel: "Schnelle Presets"
  }
};

export function getGradientGeneratorMessages(locale: LocaleCode): GradientGeneratorMessages {
  return gradientGeneratorMessages[locale] ?? gradientGeneratorMessages[defaultLocale]!;
}

export type { GradientGeneratorMessages };
