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
    invalidHexMessage: "Please enter a valid HEX color like #4f46e5.",
    supportTitle: "Build cleaner color systems with CSS variables",
    supportDescription: "Use this tool to generate consistent :root color tokens, reduce repeated values, and make updates easier across your stylesheets.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You keep repeating the same color values in multiple CSS files.",
      "You want faster global color updates without search-and-replace mistakes.",
      "You need a simple starter token set for a small website or landing page."
    ],
    quickStepsTitle: "Quick usage steps",
    quickSteps: [
      "Add a clear prefix like brand or theme.",
      "Name each variable by role, then assign HEX values.",
      "Copy the generated :root block.",
      "Paste into your stylesheet and replace repeated hardcoded colors."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Naming variables by color appearance only, not by UI role.",
      "Using inconsistent prefixes across files.",
      "Mixing hardcoded values with variables for the same UI elements."
    ],
    relatedGuidesTitle: "Related CSS variable guides",
    relatedGuidesDescription: "Read quick practical guides to build a maintainable CSS variable workflow."
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
    invalidHexMessage: "#4f46e5처럼 올바른 HEX 색상을 입력해 주세요.",
    supportTitle: "CSS 변수로 색상 체계를 더 깔끔하게 관리하세요",
    supportDescription: "이 도구로 :root 색상 토큰을 빠르게 만들고, 반복 값을 줄여 스타일 수정과 유지보수를 쉽게 할 수 있습니다.",
    whenToUseTitle: "이 도구가 유용한 경우",
    whenToUseItems: ["같은 색상 값을 여러 CSS 파일에 반복해서 쓰고 있을 때.", "검색/치환 없이 전체 색상을 안전하게 바꾸고 싶을 때.", "작은 웹사이트용 기본 토큰 세트를 빠르게 만들고 싶을 때."],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: ["brand 또는 theme 같은 접두어를 정합니다.", "변수 이름을 역할 중심으로 쓰고 HEX 값을 넣습니다.", "생성된 :root 코드를 복사합니다.", "스타일시트에 붙여넣고 반복된 하드코딩 색상을 교체합니다."],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: ["색상 이름만 기준으로 변수명을 짓고 역할을 반영하지 않는 것.", "파일마다 접두어 규칙이 다른 것.", "같은 요소에 변수와 하드코딩 값을 섞어 쓰는 것."],
    relatedGuidesTitle: "관련 CSS 변수 가이드",
    relatedGuidesDescription: "유지보수하기 쉬운 CSS 변수 워크플로를 짧은 가이드로 확인해 보세요."
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
    invalidHexMessage: "#4f46e5 のような有効なHEXカラーを入力してください。",
    supportTitle: "CSS変数で配色管理をシンプルに",
    supportDescription: "このツールで :root のカラートークンを作成し、重複値を減らして更新と保守を楽にできます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: ["同じ色コードを複数のCSSで繰り返しているとき。", "検索置換ミスを減らして一括更新したいとき。", "小規模サイト向けのトークンをすぐ作りたいとき。"],
    quickStepsTitle: "クイック手順",
    quickSteps: ["brand や theme などの接頭語を決めます。", "役割ベースで変数名を付け、HEXを設定します。", "生成された :root ブロックをコピーします。", "スタイルシートに貼り付け、重複した固定値を置き換えます。"],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: ["色名だけで変数名を付けて役割を持たせないこと。", "ファイルごとに接頭語ルールが違うこと。", "同じUI要素に固定値と変数を混在させること。"],
    relatedGuidesTitle: "関連CSS変数ガイド",
    relatedGuidesDescription: "保守しやすいCSS変数運用を短い実践ガイドで確認できます。"
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
    invalidHexMessage: "Ingresa un color HEX válido, por ejemplo #4f46e5.",
    supportTitle: "Organiza mejor tus colores con variables CSS",
    supportDescription: "Esta herramienta genera tokens de color en :root para reducir valores repetidos y facilitar cambios globales en tu CSS.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: ["Repites los mismos colores en varios archivos CSS.", "Quieres cambiar colores globales sin errores de buscar y reemplazar.", "Necesitas un set inicial de tokens para un sitio pequeño."],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: ["Define un prefijo claro como brand o theme.", "Nombra variables por función y asigna valores HEX.", "Copia el bloque :root generado.", "Pégalo en tu CSS y reemplaza colores hardcodeados repetidos."],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: ["Nombrar variables solo por color y no por función UI.", "Usar prefijos distintos entre archivos.", "Mezclar hardcoded values y variables para los mismos elementos."],
    relatedGuidesTitle: "Guías relacionadas de variables CSS",
    relatedGuidesDescription: "Lee guías breves y prácticas para mantener mejor tus variables CSS."
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
    invalidHexMessage: "Veuillez saisir une couleur HEX valide comme #4f46e5.",
    supportTitle: "Structurez vos couleurs avec des variables CSS",
    supportDescription: "Générez rapidement des tokens :root pour éviter les valeurs répétées et simplifier les mises à jour globales.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: ["Vous répétez les mêmes couleurs dans plusieurs fichiers CSS.", "Vous voulez modifier des couleurs globales sans erreurs de remplacement.", "Vous avez besoin d'une base de tokens pour un petit site."],
    quickStepsTitle: "Étapes rapides",
    quickSteps: ["Choisissez un préfixe clair comme brand ou theme.", "Nommez les variables par rôle puis assignez des HEX.", "Copiez le bloc :root généré.", "Collez-le dans votre feuille CSS et remplacez les valeurs en dur répétées."],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: ["Nommer les variables uniquement par teinte et non par usage.", "Utiliser des préfixes incohérents entre fichiers.", "Mélanger valeurs en dur et variables pour les mêmes éléments."],
    relatedGuidesTitle: "Guides CSS variables associés",
    relatedGuidesDescription: "Consultez des guides courts pour mettre en place un workflow CSS variables maintenable."
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
    invalidHexMessage: "Bitte gib eine gültige HEX-Farbe wie #4f46e5 ein.",
    supportTitle: "Farbsysteme mit CSS-Variablen sauber aufbauen",
    supportDescription: "Erstelle :root-Farbtokens, reduziere Wiederholungen und vereinfache globale Farbänderungen in deinem Stylesheet.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: ["Du wiederholst dieselben Farbwerte in mehreren CSS-Dateien.", "Du willst globale Farbänderungen ohne fehleranfälliges Suchen/Ersetzen.", "Du brauchst ein schnelles Token-Grundset für eine kleine Website."],
    quickStepsTitle: "Kurze Schritte",
    quickSteps: ["Lege ein klares Präfix wie brand oder theme fest.", "Benenne Variablen nach Rolle und setze HEX-Werte.", "Kopiere den erzeugten :root-Block.", "Füge ihn ins Stylesheet ein und ersetze wiederholte Hardcoded-Farben."],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: ["Variablen nur nach Farbe statt nach UI-Rolle benennen.", "Unterschiedliche Präfixe in verschiedenen Dateien nutzen.", "Für dieselben Elemente Variablen und Hardcoded-Werte mischen."],
    relatedGuidesTitle: "Passende CSS-Variablen-Guides",
    relatedGuidesDescription: "Lies kurze praxisnahe Guides für einen wartbaren CSS-Variablen-Workflow."
  }
};

export function getCssVariableGeneratorMessages(locale: LocaleCode): CssVariableGeneratorMessages {
  return cssVariableGeneratorMessages[locale] ?? cssVariableGeneratorMessages[defaultLocale]!;
}

export type { CssVariableGeneratorMessages };
