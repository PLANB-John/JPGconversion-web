import { defaultLocale, type LocaleCode } from "@/data/locales";

type HtmlColorPickerMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  supportSectionTitle: string;
  supportSectionDescription: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  quickStepsTitle: string;
  quickSteps: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  pickerLabel: string;
  manualHexLabel: string;
  previewLabel: string;
  selectedColorLabel: string;
  hexLabel: string;
  rgbLabel: string;
  hslLabel: string;
  copyButton: string;
  copiedButton: string;
  invalidHexError: string;
};

const htmlColorPickerMessages: Partial<Record<LocaleCode, HtmlColorPickerMessages>> = {
  en: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "Pick any color in your browser and instantly copy HEX, RGB, and HSL formats.",
    title: "HTML Color Picker",
    description: "Choose a color, preview it live, and copy HEX, RGB, or HSL values for your website or app.",
    supportSectionTitle: "HTML Color Picker quick guide",
    supportSectionDescription: "Use this tool to choose a color quickly, compare output formats, and jump into practical color workflow guides.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "When you need one exact color value for CSS or design tokens.",
      "When teammates share color values in different formats (HEX, RGB, HSL).",
      "When you want to test a quick UI color idea before editing design files."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Pick a base color with the visual picker or type a HEX code.",
      "Check the live preview to confirm it looks right.",
      "Copy HEX, RGB, or HSL based on where you will use the value."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Copying a value without checking if the format matches your workflow.",
      "Using almost identical colors that are hard to distinguish in UI states.",
      "Saving only one color value and forgetting hover or dark-background variants."
    ],
    relatedGuidesTitle: "Related HTML Color Picker guides",
    relatedGuidesDescription: "Read short practical guides to pick, compare, and validate website colors more confidently.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Pick a color with the color input.",
      "(Optional) Enter a HEX code manually.",
      "Copy HEX, RGB, or HSL with one click."
    ],
    pickerLabel: "Color picker",
    manualHexLabel: "Manual HEX input",
    previewLabel: "Live preview",
    selectedColorLabel: "Selected color",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "Copy",
    copiedButton: "Copied!",
    invalidHexError: "Please enter a valid 6-digit HEX color (example: #1F2937)."
  },
  ko: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "브라우저에서 색상을 선택하고 HEX, RGB, HSL 값을 바로 복사하세요.",
    title: "HTML Color Picker",
    description: "색상을 선택해 실시간으로 미리보고, HEX/RGB/HSL 값을 바로 복사할 수 있습니다.",
    supportSectionTitle: "HTML Color Picker 빠른 가이드",
    supportSectionDescription: "색상을 빠르게 고르고 포맷을 비교한 뒤, 실무 색상 가이드로 자연스럽게 이어갈 수 있습니다.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "CSS나 디자인 토큰에 넣을 정확한 색상 값을 빠르게 정해야 할 때",
      "팀에서 HEX, RGB, HSL 형식이 섞여 전달될 때",
      "디자인 파일을 열기 전에 UI 색상 아이디어를 먼저 확인하고 싶을 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "피커에서 기본 색상을 고르거나 HEX 값을 입력하세요.",
      "실시간 미리보기로 색감이 맞는지 확인하세요.",
      "사용 환경에 맞게 HEX, RGB, HSL 중 하나를 복사하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "작업 환경과 다른 포맷 값을 그대로 복사하는 실수",
      "UI 상태 구분이 어려운 비슷한 색상만 사용하는 실수",
      "기본 색상만 저장하고 hover/어두운 배경용 색상은 놓치는 실수"
    ],
    relatedGuidesTitle: "관련 HTML Color Picker 가이드",
    relatedGuidesDescription: "웹 색상을 더 정확하게 선택하고 검증하는 짧은 실무 가이드를 확인하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "컬러 피커에서 원하는 색상을 선택하세요.",
      "(선택) HEX 값을 직접 입력하세요.",
      "HEX, RGB, HSL 버튼으로 값을 복사하세요."
    ],
    pickerLabel: "컬러 피커",
    manualHexLabel: "HEX 직접 입력",
    previewLabel: "실시간 미리보기",
    selectedColorLabel: "선택한 색상",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "복사",
    copiedButton: "복사됨!",
    invalidHexError: "유효한 6자리 HEX 색상을 입력해 주세요. (예: #1F2937)"
  },
  ja: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "ブラウザ上で色を選択し、HEX / RGB / HSL をすぐにコピーできます。",
    title: "HTML Color Picker",
    description: "色を選んでライブプレビューし、HEX・RGB・HSL の値をワンクリックでコピーできます。",
    supportSectionTitle: "HTML Color Picker クイックガイド",
    supportSectionDescription: "色を素早く選び、形式を比較し、実践的な配色ガイドへ進める導入セクションです。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "CSSやデザイントークン用に正確な色コードが必要なとき",
      "チーム内でHEX・RGB・HSLが混在して共有されるとき",
      "デザインツールを開く前にUI配色を手早く試したいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "ピッカーで色を選ぶか、HEXを入力します。",
      "ライブプレビューで見え方を確認します。",
      "使う場面に合わせてHEX・RGB・HSLをコピーします。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "用途に合わない形式の値をそのまま使うこと",
      "UI状態の差が出ない近い色だけで構成すること",
      "通常色だけ保存してhoverや暗背景用を用意しないこと"
    ],
    relatedGuidesTitle: "関連 HTML Color Picker ガイド",
    relatedGuidesDescription: "Web配色をより確実に選び、比較し、検証するための短い実践ガイドです。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "カラーピッカーで色を選択します。",
      "（任意）HEX 値を手入力します。",
      "HEX・RGB・HSL をクリックしてコピーします。"
    ],
    pickerLabel: "カラーピッカー",
    manualHexLabel: "HEX 手入力",
    previewLabel: "ライブプレビュー",
    selectedColorLabel: "選択した色",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "コピー",
    copiedButton: "コピーしました！",
    invalidHexError: "有効な 6 桁の HEX カラーを入力してください（例: #1F2937）。"
  },
  es: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "Selecciona un color en tu navegador y copia al instante HEX, RGB y HSL.",
    title: "HTML Color Picker",
    description: "Elige un color, míralo en vivo y copia sus valores HEX, RGB o HSL en un clic.",
    supportSectionTitle: "Guía rápida de HTML Color Picker",
    supportSectionDescription: "Elige colores rápido, compara formatos y avanza a guías prácticas para tomar mejores decisiones de color.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Cuando necesitas un valor de color exacto para CSS o tokens.",
      "Cuando el equipo comparte colores en HEX, RGB y HSL mezclados.",
      "Cuando quieres probar una idea de color UI antes de abrir tu diseño."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Elige un color con el selector o escribe un HEX.",
      "Confirma el resultado en la vista previa en vivo.",
      "Copia HEX, RGB o HSL según el flujo donde lo usarás."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Copiar un valor sin validar si el formato es el correcto.",
      "Usar colores demasiado parecidos para estados de UI.",
      "Guardar solo el color base y olvidar variantes para hover o fondo oscuro."
    ],
    relatedGuidesTitle: "Guías relacionadas de HTML Color Picker",
    relatedGuidesDescription: "Consulta guías breves para elegir, comparar y validar colores web con más confianza.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Selecciona un color con el selector.",
      "(Opcional) Escribe un código HEX manualmente.",
      "Copia HEX, RGB o HSL con un clic."
    ],
    pickerLabel: "Selector de color",
    manualHexLabel: "Entrada HEX manual",
    previewLabel: "Vista previa en vivo",
    selectedColorLabel: "Color seleccionado",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "Copiar",
    copiedButton: "¡Copiado!",
    invalidHexError: "Ingresa un color HEX válido de 6 dígitos (ejemplo: #1F2937)."
  },
  fr: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "Choisissez une couleur dans votre navigateur et copiez immédiatement HEX, RGB et HSL.",
    title: "HTML Color Picker",
    description: "Choisissez une couleur, prévisualisez-la en direct et copiez HEX, RGB ou HSL en un clic.",
    supportSectionTitle: "Guide rapide HTML Color Picker",
    supportSectionDescription: "Choisissez rapidement une couleur, comparez les formats et poursuivez vers des guides pratiques de workflow couleur.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Quand vous avez besoin d'une valeur couleur précise pour CSS ou des tokens.",
      "Quand l'équipe échange des couleurs en HEX, RGB et HSL.",
      "Quand vous voulez tester vite une idée de couleur UI avant le design final."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Choisissez une couleur avec le sélecteur ou saisissez un HEX.",
      "Validez le rendu dans l'aperçu en direct.",
      "Copiez HEX, RGB ou HSL selon votre usage."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Copier une valeur sans vérifier le bon format.",
      "Utiliser des couleurs trop proches pour distinguer les états UI.",
      "Garder seulement la couleur de base et oublier hover/fond sombre."
    ],
    relatedGuidesTitle: "Guides liés HTML Color Picker",
    relatedGuidesDescription: "Lisez des guides courts pour mieux choisir, comparer et valider vos couleurs web.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Choisissez une couleur avec le sélecteur.",
      "(Optionnel) Saisissez un code HEX manuellement.",
      "Copiez HEX, RGB ou HSL en un clic."
    ],
    pickerLabel: "Sélecteur de couleur",
    manualHexLabel: "Saisie HEX manuelle",
    previewLabel: "Aperçu en direct",
    selectedColorLabel: "Couleur sélectionnée",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "Copier",
    copiedButton: "Copié !",
    invalidHexError: "Veuillez saisir une couleur HEX valide à 6 caractères (exemple : #1F2937)."
  },
  de: {
    metadataTitle: "HTML Color Picker",
    metadataDescription: "Wähle eine Farbe im Browser und kopiere HEX-, RGB- und HSL-Werte sofort.",
    title: "HTML Color Picker",
    description: "Wähle eine Farbe, sieh die Live-Vorschau und kopiere HEX-, RGB- oder HSL-Werte mit einem Klick.",
    supportSectionTitle: "HTML Color Picker Kurzanleitung",
    supportSectionDescription: "Wähle Farben schnell, vergleiche Formate und springe direkt zu praxisnahen Farb-Workflows.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: [
      "Wenn du einen exakten Farbwert für CSS oder Design-Tokens brauchst.",
      "Wenn im Team HEX-, RGB- und HSL-Werte gemischt verwendet werden.",
      "Wenn du eine UI-Farbidee schnell testen willst."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "Farbe im Picker auswählen oder HEX manuell eingeben.",
      "Mit der Live-Vorschau den Eindruck prüfen.",
      "HEX, RGB oder HSL passend zum Einsatz kopieren."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Werte kopieren, ohne das benötigte Format zu prüfen.",
      "Zu ähnliche Farben für unterschiedliche UI-Zustände nutzen.",
      "Nur die Basisfarbe speichern und Varianten vergessen."
    ],
    relatedGuidesTitle: "Passende HTML Color Picker Guides",
    relatedGuidesDescription: "Lies kurze Praxis-Guides, um Webfarben sicherer auszuwählen, zu vergleichen und zu prüfen.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Wähle eine Farbe mit dem Farbwähler.",
      "(Optional) Gib einen HEX-Wert manuell ein.",
      "Kopiere HEX, RGB oder HSL mit einem Klick."
    ],
    pickerLabel: "Farbwähler",
    manualHexLabel: "Manuelle HEX-Eingabe",
    previewLabel: "Live-Vorschau",
    selectedColorLabel: "Ausgewählte Farbe",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    hslLabel: "HSL",
    copyButton: "Kopieren",
    copiedButton: "Kopiert!",
    invalidHexError: "Bitte gib eine gültige 6-stellige HEX-Farbe ein (z. B. #1F2937)."
  }
};

export function getHtmlColorPickerMessages(locale: LocaleCode): HtmlColorPickerMessages {
  return htmlColorPickerMessages[locale] ?? htmlColorPickerMessages[defaultLocale]!;
}

export type { HtmlColorPickerMessages };
