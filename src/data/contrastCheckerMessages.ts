import { defaultLocale, type LocaleCode } from "@/data/locales";

type ContrastCheckerMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  foregroundLabel: string;
  backgroundLabel: string;
  inputHint: string;
  swapButton: string;
  ratioLabel: string;
  wcagTitle: string;
  pass: string;
  fail: string;
  previewTitle: string;
  previewText: string;
  previewSubtext: string;
  levelAALarge: string;
  levelAANormal: string;
  levelAAALarge: string;
  levelAAANormal: string;
  errorInvalidHex: string;
};

const contrastCheckerMessages: Partial<Record<LocaleCode, ContrastCheckerMessages>> = {
  en: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "Check contrast ratio between foreground and background colors with WCAG AA/AAA pass results.",
    title: "Contrast Checker",
    description: "Compare text and background colors, view the contrast ratio, and confirm WCAG accessibility levels.",
    instructionsTitle: "How to use",
    instructions: [
      "Enter foreground and background HEX colors or choose colors using the pickers.",
      "Use the swap button to quickly switch text and background colors.",
      "Review the contrast ratio and WCAG pass/fail results below."
    ],
    foregroundLabel: "Foreground color",
    backgroundLabel: "Background color",
    inputHint: "Use 6-digit HEX values (for example #111827).",
    swapButton: "Swap colors",
    ratioLabel: "Contrast ratio",
    wcagTitle: "WCAG results",
    pass: "Pass",
    fail: "Fail",
    previewTitle: "Preview",
    previewText: "Accessible text preview",
    previewSubtext: "The quick brown fox jumps over the lazy dog.",
    levelAALarge: "AA Large (3:1)",
    levelAANormal: "AA Normal (4.5:1)",
    levelAAALarge: "AAA Large (4.5:1)",
    levelAAANormal: "AAA Normal (7:1)",
    errorInvalidHex: "Please enter a valid 6-digit HEX color (example: #1F2937)."
  },
  ko: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "전경색과 배경색의 대비 비율을 계산하고 WCAG AA/AAA 통과 여부를 확인하세요.",
    title: "Contrast Checker",
    description: "텍스트 색상과 배경 색상을 비교해 대비 비율과 WCAG 접근성 기준 충족 여부를 확인할 수 있습니다.",
    instructionsTitle: "사용 방법",
    instructions: [
      "전경색과 배경색 HEX 값을 입력하거나 컬러 피커로 선택하세요.",
      "색상 바꾸기 버튼으로 전경색/배경색을 빠르게 교체할 수 있습니다.",
      "아래에서 대비 비율과 WCAG 통과/실패 결과를 확인하세요."
    ],
    foregroundLabel: "전경색",
    backgroundLabel: "배경색",
    inputHint: "6자리 HEX 형식을 사용하세요. (예: #111827)",
    swapButton: "색상 바꾸기",
    ratioLabel: "대비 비율",
    wcagTitle: "WCAG 결과",
    pass: "통과",
    fail: "실패",
    previewTitle: "미리보기",
    previewText: "접근성 텍스트 미리보기",
    previewSubtext: "빠른 갈색 여우가 게으른 개를 뛰어넘습니다.",
    levelAALarge: "AA 큰 텍스트 (3:1)",
    levelAANormal: "AA 일반 텍스트 (4.5:1)",
    levelAAALarge: "AAA 큰 텍스트 (4.5:1)",
    levelAAANormal: "AAA 일반 텍스트 (7:1)",
    errorInvalidHex: "올바른 6자리 HEX 색상을 입력해 주세요. (예: #1F2937)"
  },
  ja: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "前景色と背景色のコントラスト比を計算し、WCAG AA/AAA の合否を確認できます。",
    title: "Contrast Checker",
    description: "文字色と背景色を比較し、コントラスト比と WCAG アクセシビリティ基準を確認します。",
    instructionsTitle: "使い方",
    instructions: [
      "前景色と背景色の HEX 値を入力するか、カラーピッカーで選択します。",
      "「色を入れ替え」で前景色と背景色をすばやく交換できます。",
      "下のコントラスト比と WCAG の合否結果を確認します。"
    ],
    foregroundLabel: "前景色",
    backgroundLabel: "背景色",
    inputHint: "6 桁の HEX を使用してください（例: #111827）。",
    swapButton: "色を入れ替え",
    ratioLabel: "コントラスト比",
    wcagTitle: "WCAG 結果",
    pass: "合格",
    fail: "不合格",
    previewTitle: "プレビュー",
    previewText: "アクセシブルなテキストプレビュー",
    previewSubtext: "素早い茶色のキツネがのんびりした犬を飛び越えます。",
    levelAALarge: "AA 大きい文字 (3:1)",
    levelAANormal: "AA 通常文字 (4.5:1)",
    levelAAALarge: "AAA 大きい文字 (4.5:1)",
    levelAAANormal: "AAA 通常文字 (7:1)",
    errorInvalidHex: "有効な 6 桁 HEX カラーを入力してください（例: #1F2937）。"
  },
  es: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "Calcula la relación de contraste entre colores y revisa si cumple WCAG AA/AAA.",
    title: "Contrast Checker",
    description: "Compara el color del texto y del fondo para validar contraste y niveles WCAG.",
    instructionsTitle: "Cómo usarlo",
    instructions: [
      "Ingresa colores HEX de primer plano y fondo o selecciónalos con los selectores.",
      "Usa el botón para intercambiar rápidamente los colores.",
      "Revisa la relación de contraste y los resultados WCAG más abajo."
    ],
    foregroundLabel: "Color de primer plano",
    backgroundLabel: "Color de fondo",
    inputHint: "Usa valores HEX de 6 dígitos (por ejemplo #111827).",
    swapButton: "Intercambiar colores",
    ratioLabel: "Relación de contraste",
    wcagTitle: "Resultados WCAG",
    pass: "Aprobado",
    fail: "No aprobado",
    previewTitle: "Vista previa",
    previewText: "Vista previa de texto accesible",
    previewSubtext: "El veloz murciélago hindú comía feliz cardillo y kiwi.",
    levelAALarge: "AA texto grande (3:1)",
    levelAANormal: "AA texto normal (4.5:1)",
    levelAAALarge: "AAA texto grande (4.5:1)",
    levelAAANormal: "AAA texto normal (7:1)",
    errorInvalidHex: "Ingresa un color HEX válido de 6 dígitos (ejemplo: #1F2937)."
  },
  fr: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "Calculez le ratio de contraste entre deux couleurs et vérifiez les niveaux WCAG AA/AAA.",
    title: "Contrast Checker",
    description: "Comparez la couleur du texte et du fond pour valider le contraste et l'accessibilité WCAG.",
    instructionsTitle: "Mode d'emploi",
    instructions: [
      "Saisissez les couleurs HEX du texte et du fond ou utilisez les sélecteurs.",
      "Utilisez le bouton d'échange pour inverser rapidement les couleurs.",
      "Consultez le ratio de contraste et les résultats WCAG ci-dessous."
    ],
    foregroundLabel: "Couleur du texte",
    backgroundLabel: "Couleur de fond",
    inputHint: "Utilisez des HEX à 6 caractères (par exemple #111827).",
    swapButton: "Inverser les couleurs",
    ratioLabel: "Ratio de contraste",
    wcagTitle: "Résultats WCAG",
    pass: "Réussi",
    fail: "Échec",
    previewTitle: "Aperçu",
    previewText: "Aperçu du texte accessible",
    previewSubtext: "Voyez ce jeu exquis près du wharf et mangez des kiwis.",
    levelAALarge: "AA grand texte (3:1)",
    levelAANormal: "AA texte normal (4.5:1)",
    levelAAALarge: "AAA grand texte (4.5:1)",
    levelAAANormal: "AAA texte normal (7:1)",
    errorInvalidHex: "Veuillez saisir une couleur HEX valide à 6 caractères (exemple : #1F2937)."
  },
  de: {
    metadataTitle: "Contrast Checker",
    metadataDescription: "Berechne das Kontrastverhältnis zwischen Vorder- und Hintergrundfarben inklusive WCAG AA/AAA-Ergebnis.",
    title: "Contrast Checker",
    description: "Vergleiche Text- und Hintergrundfarbe, um Kontrast und WCAG-Zugänglichkeit zu prüfen.",
    instructionsTitle: "So funktioniert's",
    instructions: [
      "Gib HEX-Werte für Vorder- und Hintergrund ein oder nutze die Farbwähler.",
      "Mit der Tauschen-Schaltfläche kannst du die Farben schnell wechseln.",
      "Prüfe unten das Kontrastverhältnis und die WCAG-Ergebnisse."
    ],
    foregroundLabel: "Vordergrundfarbe",
    backgroundLabel: "Hintergrundfarbe",
    inputHint: "Nutze 6-stellige HEX-Werte (z. B. #111827).",
    swapButton: "Farben tauschen",
    ratioLabel: "Kontrastverhältnis",
    wcagTitle: "WCAG-Ergebnisse",
    pass: "Bestanden",
    fail: "Nicht bestanden",
    previewTitle: "Vorschau",
    previewText: "Vorschau für barrierefreien Text",
    previewSubtext: "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.",
    levelAALarge: "AA großer Text (3:1)",
    levelAANormal: "AA normaler Text (4.5:1)",
    levelAAALarge: "AAA großer Text (4.5:1)",
    levelAAANormal: "AAA normaler Text (7:1)",
    errorInvalidHex: "Bitte gib eine gültige 6-stellige HEX-Farbe ein (z. B. #1F2937)."
  }
};

export function getContrastCheckerMessages(locale: LocaleCode): ContrastCheckerMessages {
  return contrastCheckerMessages[locale] ?? contrastCheckerMessages[defaultLocale]!;
}

export type { ContrastCheckerMessages };
