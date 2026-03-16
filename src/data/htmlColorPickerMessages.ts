import { defaultLocale, type LocaleCode } from "@/data/locales";

type HtmlColorPickerMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
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
