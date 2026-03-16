import { defaultLocale, type LocaleCode } from "@/data/locales";

type CssVariableGeneratorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  prefixLabel: string;
  variableNameLabel: string;
  colorLabel: string;
  addRowButton: string;
  generatedCssLabel: string;
  copyButton: string;
  copiedButton: string;
  previewLabel: string;
  invalidHexMessage: string;
};

const cssVariableGeneratorMessages: Partial<Record<LocaleCode, CssVariableGeneratorMessages>> = {
  en: {
    metadataTitle: "CSS Variable Generator",
    metadataDescription: "Create reusable CSS variables from your color set and copy clean :root code instantly.",
    title: "CSS Variable Generator",
    description: "Build a color token list, preview each variable, and copy ready-to-use CSS custom properties.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter a variable prefix such as brand, theme, or ui.",
      "Update each variable name and pick a color.",
      "Add more rows if you need extra variables.",
      "Copy the generated CSS and paste it into your stylesheet."
    ],
    prefixLabel: "Variable prefix",
    variableNameLabel: "Variable name",
    colorLabel: "Color (HEX)",
    addRowButton: "Add variable row",
    generatedCssLabel: "Generated CSS variables",
    copyButton: "Copy CSS",
    copiedButton: "Copied!",
    previewLabel: "Color preview",
    invalidHexMessage: "Please enter a valid HEX color like #4f46e5."
  },
  ko: {
    metadataTitle: "CSS 변수 생성기",
    metadataDescription: "색상 목록으로 재사용 가능한 CSS 변수를 만들고, 깔끔한 :root 코드를 바로 복사하세요.",
    title: "CSS 변수 생성기",
    description: "색상 토큰을 만들고 변수별 미리보기를 확인한 뒤, 바로 사용할 CSS 커스텀 속성을 복사하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "brand, theme, ui 같은 변수 접두어를 입력하세요.",
      "각 변수 이름과 색상을 수정하세요.",
      "필요하면 행을 추가해 변수를 더 만드세요.",
      "생성된 CSS를 복사해 스타일시트에 붙여넣으세요."
    ],
    prefixLabel: "변수 접두어",
    variableNameLabel: "변수 이름",
    colorLabel: "색상 (HEX)",
    addRowButton: "변수 행 추가",
    generatedCssLabel: "생성된 CSS 변수",
    copyButton: "CSS 복사",
    copiedButton: "복사됨!",
    previewLabel: "색상 미리보기",
    invalidHexMessage: "#4f46e5처럼 올바른 HEX 색상을 입력해 주세요."
  },
  ja: {
    metadataTitle: "CSS変数ジェネレーター",
    metadataDescription: "色セットから再利用可能なCSS変数を作成し、整った:rootコードをすぐコピーできます。",
    title: "CSS変数ジェネレーター",
    description: "カラートークンを作成し、変数を確認して、使えるCSSカスタムプロパティをコピーできます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "brand、theme、ui などの接頭語を入力します。",
      "各変数名と色を編集します。",
      "必要に応じて行を追加します。",
      "生成されたCSSをコピーしてスタイルシートに貼り付けます。"
    ],
    prefixLabel: "変数プレフィックス",
    variableNameLabel: "変数名",
    colorLabel: "カラー (HEX)",
    addRowButton: "変数行を追加",
    generatedCssLabel: "生成されたCSS変数",
    copyButton: "CSSをコピー",
    copiedButton: "コピーしました！",
    previewLabel: "カラープレビュー",
    invalidHexMessage: "#4f46e5 のような有効なHEXカラーを入力してください。"
  },
  es: {
    metadataTitle: "Generador de variables CSS",
    metadataDescription: "Crea variables CSS reutilizables desde tus colores y copia al instante un bloque :root limpio.",
    title: "Generador de variables CSS",
    description: "Crea una lista de tokens de color, revisa la vista previa y copia propiedades CSS personalizadas listas para usar.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Ingresa un prefijo de variable como brand, theme o ui.",
      "Edita cada nombre de variable y elige un color.",
      "Agrega más filas si necesitas más variables.",
      "Copia el CSS generado y pégalo en tu hoja de estilos."
    ],
    prefixLabel: "Prefijo de variable",
    variableNameLabel: "Nombre de variable",
    colorLabel: "Color (HEX)",
    addRowButton: "Agregar fila de variable",
    generatedCssLabel: "Variables CSS generadas",
    copyButton: "Copiar CSS",
    copiedButton: "¡Copiado!",
    previewLabel: "Vista previa de colores",
    invalidHexMessage: "Ingresa un color HEX válido, por ejemplo #4f46e5."
  },
  fr: {
    metadataTitle: "Générateur de variables CSS",
    metadataDescription: "Créez des variables CSS réutilisables à partir de vos couleurs et copiez un bloc :root propre instantanément.",
    title: "Générateur de variables CSS",
    description: "Construisez une liste de tokens de couleur, prévisualisez chaque variable et copiez des propriétés CSS prêtes à l'emploi.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez un préfixe comme brand, theme ou ui.",
      "Modifiez chaque nom de variable et choisissez une couleur.",
      "Ajoutez des lignes si vous avez besoin de plus de variables.",
      "Copiez le CSS généré et collez-le dans votre feuille de style."
    ],
    prefixLabel: "Préfixe de variable",
    variableNameLabel: "Nom de variable",
    colorLabel: "Couleur (HEX)",
    addRowButton: "Ajouter une ligne",
    generatedCssLabel: "Variables CSS générées",
    copyButton: "Copier le CSS",
    copiedButton: "Copié !",
    previewLabel: "Aperçu des couleurs",
    invalidHexMessage: "Veuillez saisir une couleur HEX valide comme #4f46e5."
  },
  de: {
    metadataTitle: "CSS-Variablen-Generator",
    metadataDescription: "Erstelle wiederverwendbare CSS-Variablen aus deinen Farben und kopiere sauberen :root-Code sofort.",
    title: "CSS-Variablen-Generator",
    description: "Erstelle eine Farbtoken-Liste, prüfe jede Variable in der Vorschau und kopiere fertige CSS-Custom-Properties.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib ein Präfix wie brand, theme oder ui ein.",
      "Bearbeite jeden Variablennamen und wähle eine Farbe.",
      "Füge bei Bedarf weitere Zeilen hinzu.",
      "Kopiere das generierte CSS in dein Stylesheet."
    ],
    prefixLabel: "Variablen-Präfix",
    variableNameLabel: "Variablenname",
    colorLabel: "Farbe (HEX)",
    addRowButton: "Variablenzeile hinzufügen",
    generatedCssLabel: "Generierte CSS-Variablen",
    copyButton: "CSS kopieren",
    copiedButton: "Kopiert!",
    previewLabel: "Farbvorschau",
    invalidHexMessage: "Bitte gib eine gültige HEX-Farbe wie #4f46e5 ein."
  }
};

export function getCssVariableGeneratorMessages(locale: LocaleCode): CssVariableGeneratorMessages {
  return cssVariableGeneratorMessages[locale] ?? cssVariableGeneratorMessages[defaultLocale]!;
}

export type { CssVariableGeneratorMessages };
