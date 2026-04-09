import { defaultLocale, type LocaleCode } from "@/data/locales";

type ContrastCheckerMessages = {
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
    supportSectionTitle: "Contrast quick guide",
    supportSectionDescription: "Use this lightweight checker to validate text readability and move to focused contrast guides when you need deeper fixes.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "Before publishing new button, link, or body text colors.",
      "When a design review says text feels hard to read.",
      "When testing brand colors across light and dark UI surfaces."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Enter text (foreground) and background HEX colors.",
      "Check the ratio and WCAG AA/AAA results.",
      "Adjust colors and retest until key text passes."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Testing only headings and skipping small body text.",
      "Approving one state but not hover, focus, or disabled states.",
      "Relying on visual taste instead of measured contrast ratios."
    ],
    relatedGuidesTitle: "Related Contrast Checker guides",
    relatedGuidesDescription: "Read short practical guides for fixing low contrast and making accessible UI color decisions.",
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
    supportSectionTitle: "대비 점검 빠른 가이드",
    supportSectionDescription: "이 페이지에서 텍스트 가독성을 빠르게 확인하고, 필요하면 관련 가이드로 넘어가 상세 개선 방법을 확인하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "버튼, 링크, 본문 텍스트 색상을 배포하기 전",
      "디자인 리뷰에서 텍스트가 읽기 어렵다는 피드백이 있을 때",
      "브랜드 컬러를 밝은/어두운 배경에서 함께 테스트할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "텍스트(전경)와 배경 HEX 값을 입력하세요.",
      "대비 비율과 WCAG AA/AAA 결과를 확인하세요.",
      "핵심 텍스트가 통과할 때까지 색상을 조정하고 다시 테스트하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "제목만 확인하고 작은 본문 텍스트를 점검하지 않는 경우",
      "기본 상태만 확인하고 hover/focus/disabled를 놓치는 경우",
      "측정값 대신 감각만으로 대비를 판단하는 경우"
    ],
    relatedGuidesTitle: "관련 Contrast Checker 가이드",
    relatedGuidesDescription: "낮은 대비 수정과 접근 가능한 UI 색상 선택을 다루는 짧은 실무 가이드를 확인하세요.",
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
    supportSectionTitle: "コントラスト確認クイックガイド",
    supportSectionDescription: "このツールで可読性を素早く確認し、必要に応じて関連ガイドで改善手順を深掘りできます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "ボタン・リンク・本文テキストの色を公開前に確認したいとき",
      "レビューで『文字が読みにくい』と言われたとき",
      "ブランドカラーを明暗両方の背景で検証したいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "文字色（前景）と背景色のHEXを入力します。",
      "比率とWCAG AA/AAA結果を確認します。",
      "主要テキストが合格するまで色を調整して再確認します。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "見出しだけ確認して本文の小さな文字を見ないこと",
      "通常状態だけ確認してhover/focus/disabledを省くこと",
      "比率を見ずに見た目の印象だけで判断すること"
    ],
    relatedGuidesTitle: "関連Contrast Checkerガイド",
    relatedGuidesDescription: "低コントラスト修正とアクセシブルなUI配色を学べる短い実践ガイドです。",
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
    supportSectionTitle: "Guía rápida de contraste",
    supportSectionDescription: "Usa este verificador para validar legibilidad rápidamente y pasa a guías prácticas cuando necesites ajustar colores con más detalle.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Antes de publicar colores nuevos para botones, enlaces o texto.",
      "Cuando en revisión dicen que el texto se lee mal.",
      "Cuando pruebas colores de marca en fondos claros y oscuros."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Ingresa los HEX de texto (primer plano) y fondo.",
      "Revisa ratio y resultados WCAG AA/AAA.",
      "Ajusta colores y repite hasta que el texto clave apruebe."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Revisar solo títulos y no texto pequeño.",
      "Validar un solo estado y olvidar hover, focus o disabled.",
      "Decidir por gusto visual sin mirar el ratio."
    ],
    relatedGuidesTitle: "Guías relacionadas de Contrast Checker",
    relatedGuidesDescription: "Lee guías breves para corregir bajo contraste y mejorar decisiones de color accesible en UI.",
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
    supportSectionTitle: "Guide rapide du contraste",
    supportSectionDescription: "Vérifiez rapidement la lisibilité ici, puis ouvrez les guides liés pour corriger les problèmes de contraste dans des cas concrets.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Avant de publier de nouvelles couleurs de boutons, liens ou textes.",
      "Quand une revue signale un texte difficile à lire.",
      "Quand vous testez des couleurs de marque sur fonds clairs et foncés."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Saisissez les HEX du texte (premier plan) et du fond.",
      "Vérifiez le ratio et les résultats WCAG AA/AAA.",
      "Ajustez les couleurs puis retestez jusqu'à validation."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Tester uniquement les titres et ignorer le texte courant.",
      "Valider un seul état et oublier hover, focus et disabled.",
      "Se fier au ressenti visuel sans mesurer le ratio."
    ],
    relatedGuidesTitle: "Guides liés Contrast Checker",
    relatedGuidesDescription: "Consultez des guides courts pour corriger un faible contraste et mieux choisir les couleurs UI accessibles.",
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
    supportSectionTitle: "Kontrast-Kurzleitfaden",
    supportSectionDescription: "Prüfe hier schnell die Lesbarkeit und springe bei Bedarf in passende Leitfäden für konkrete Korrekturen.",
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Vor dem Veröffentlichen neuer Farben für Buttons, Links oder Fließtext.",
      "Wenn im Review Text als schwer lesbar auffällt.",
      "Wenn Brandfarben auf hellen und dunklen Flächen geprüft werden sollen."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "HEX-Werte für Text (Vordergrund) und Hintergrund eingeben.",
      "Kontrastverhältnis und WCAG AA/AAA prüfen.",
      "Farben anpassen und erneut testen, bis wichtige Texte bestehen."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Nur Überschriften prüfen und kleinen Fließtext auslassen.",
      "Nur den Standardzustand prüfen statt auch Hover/Focus/Disabled.",
      "Nach Gefühl entscheiden statt nach gemessenem Verhältnis."
    ],
    relatedGuidesTitle: "Verwandte Contrast-Checker-Guides",
    relatedGuidesDescription: "Lies kurze Praxis-Guides zu niedrigem Kontrast und barrierefreien UI-Farbentscheidungen.",
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
