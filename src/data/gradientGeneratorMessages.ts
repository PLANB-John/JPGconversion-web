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
    presetsLabel: "Quick presets",
    supportTitle: "Use gradients with purpose",
    supportDescription: "This tool helps you build clean CSS gradients quickly, then validate readability before you ship.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: ["You need a fast background for a hero, card, or CTA block.", "You want to compare linear and radial options before coding.", "You need copy-ready CSS for implementation and QA."],
    quickStepsTitle: "Quick workflow",
    quickSteps: ["Pick two colors first.", "Choose linear or radial and adjust angle if needed.", "Preview with real text contrast in mind.", "Copy CSS and test in your actual layout."],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: ["Using too many saturated colors in one gradient.", "Adding gradients to every section on a page.", "Skipping readability checks across the full gradient area."],
    relatedGuidesTitle: "Related Gradient guides",
    relatedGuidesDescription: "Need deeper help? Read a short practical guide below."
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
    presetsLabel: "빠른 프리셋",
    supportTitle: "의도를 가진 그라디언트 사용",
    supportDescription: "이 도구로 CSS 그라디언트를 빠르게 만들고, 배포 전 가독성을 짧게 점검하세요.",
    whenToUseTitle: "이 도구가 유용한 경우",
    whenToUseItems: ["히어로/카드/CTA 배경을 빠르게 정해야 할 때.", "선형과 원형 중 어느 쪽이 맞는지 비교할 때.", "구현에 바로 붙일 CSS 코드가 필요할 때."],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: ["먼저 두 가지 색상을 고릅니다.", "선형/원형을 선택하고 필요하면 각도를 조정합니다.", "실제 텍스트 가독성을 떠올리며 미리봅니다.", "CSS를 복사해 실제 레이아웃에서 테스트합니다."],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: ["채도가 높은 색을 너무 많이 섞는 것.", "페이지 거의 모든 영역에 그라디언트를 쓰는 것.", "배경 전체 구간에서 텍스트 가독성을 확인하지 않는 것."],
    relatedGuidesTitle: "관련 Gradient 가이드",
    relatedGuidesDescription: "더 자세한 실무 팁이 필요하면 아래 짧은 가이드를 확인하세요."
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
    presetsLabel: "プリセット",
    supportTitle: "意図を持ってグラデーションを使う",
    supportDescription: "このツールでCSSグラデーションを素早く作成し、公開前に可読性を確認できます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: ["ヒーローやカード、CTA背景を短時間で決めたいとき。", "線形と放射状を比較して選びたいとき。", "実装にそのまま使えるCSSが必要なとき。"],
    quickStepsTitle: "クイック手順",
    quickSteps: ["まず2色を選びます。", "線形/放射状を選択し、必要なら角度を調整します。", "実際の文字可読性を意識してプレビューします。", "CSSをコピーして実レイアウトで確認します。"],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: ["彩度の高い色を多用しすぎる。", "ページのほぼ全セクションにグラデーションを使う。", "背景全体で文字の見やすさを確認しない。"],
    relatedGuidesTitle: "関連Gradientガイド",
    relatedGuidesDescription: "さらに深く知りたい場合は、以下の短い実践ガイドをどうぞ。"
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
    presetsLabel: "Preajustes rápidos",
    supportTitle: "Usa gradientes con intención",
    supportDescription: "Esta herramienta te ayuda a crear gradientes CSS rápidos y validar legibilidad antes de publicar.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: ["Necesitas un fondo rápido para hero, tarjeta o bloque CTA.", "Quieres comparar opciones lineales y radiales antes de implementar.", "Necesitas CSS listo para copiar en desarrollo y QA."],
    quickStepsTitle: "Flujo rápido",
    quickSteps: ["Empieza con dos colores.", "Elige lineal o radial y ajusta ángulo si hace falta.", "Previsualiza pensando en contraste de texto.", "Copia el CSS y pruébalo en tu layout real."],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: ["Usar demasiados colores muy saturados.", "Aplicar gradientes a todas las secciones.", "No revisar legibilidad en toda el área del gradiente."],
    relatedGuidesTitle: "Guías relacionadas de Gradient",
    relatedGuidesDescription: "¿Necesitas más contexto? Lee una guía breve y práctica."
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
    presetsLabel: "Préréglages rapides",
    supportTitle: "Utiliser les dégradés avec intention",
    supportDescription: "Cet outil aide à créer rapidement un dégradé CSS puis à vérifier la lisibilité avant publication.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: ["Vous avez besoin d'un fond rapide pour un hero, une carte ou un bloc CTA.", "Vous voulez comparer linéaire et radial avant intégration.", "Vous avez besoin d'un CSS prêt à copier pour l'implémentation."],
    quickStepsTitle: "Étapes rapides",
    quickSteps: ["Choisissez d'abord deux couleurs.", "Sélectionnez linéaire ou radial et ajustez l'angle si nécessaire.", "Prévisualisez avec la lisibilité du texte en tête.", "Copiez le CSS et testez-le dans votre layout réel."],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: ["Utiliser trop de couleurs très saturées.", "Mettre des dégradés sur toutes les sections.", "Oublier de vérifier la lisibilité sur toute la surface."],
    relatedGuidesTitle: "Guides Gradient associés",
    relatedGuidesDescription: "Besoin d'aller plus loin ? Ouvrez un guide court ci-dessous."
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
    presetsLabel: "Schnelle Presets",
    supportTitle: "Verläufe mit klarer Absicht nutzen",
    supportDescription: "Mit diesem Tool erstellst du schnell CSS-Verläufe und prüfst vor dem Release die Lesbarkeit.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: ["Du brauchst schnell einen Hintergrund für Hero, Karte oder CTA.", "Du willst lineare und radiale Varianten vor der Umsetzung vergleichen.", "Du brauchst sofort einsetzbares CSS für Entwicklung und QA."],
    quickStepsTitle: "Kurzer Ablauf",
    quickSteps: ["Starte mit zwei Farben.", "Wähle linear oder radial und passe bei Bedarf den Winkel an.", "Prüfe die Vorschau mit Fokus auf Textkontrast.", "Kopiere das CSS und teste es im echten Layout."],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: ["Zu viele stark gesättigte Farben in einem Verlauf.", "Verläufe in fast jedem Seitenbereich einsetzen.", "Lesbarkeit nicht über die gesamte Verlaufsfläche prüfen."],
    relatedGuidesTitle: "Passende Gradient-Guides",
    relatedGuidesDescription: "Mehr Praxiswissen? Lies einen kurzen Guide unten."
  }
};

export function getGradientGeneratorMessages(locale: LocaleCode): GradientGeneratorMessages {
  return gradientGeneratorMessages[locale] ?? gradientGeneratorMessages[defaultLocale]!;
}

export type { GradientGeneratorMessages };
