import type { LocaleCode } from "@/data/locales";
import { getTool, type ToolCategory } from "@/data/tools";

export type GuideSlug =
  | "how-to-use-html-color-picker"
  | "image-color-extractor-guide"
  | "what-is-webp"
  | "how-to-build-utm-links"
  | "json-formatting-basics";

type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type GuideLocalizedContent = {
  title: string;
  description: string;
  intro: string;
  categoryLabel: string;
  useCasesTitle: string;
  useCases: string[];
  closingTitle: string;
  closingText: string;
  relatedToolLabel?: string;
  sections: GuideSection[];
};

export type GuideItem = {
  slug: GuideSlug;
  category: ToolCategory;
  relatedToolSlug?: string;
  publishedAt: string;
  updatedAt: string;
  content: GuideLocalizedContent;
};

type GuidesIndexMessages = {
  navLabel: string;
  footerLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  cardCategoryPrefix: string;
  cardAction: string;
  articleEyebrow: string;
  backToGuides: string;
  relatedToolsTitle: string;
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  metadataTitle: string;
  metadataDescription: string;
};

export const guidesIndexMessages: Record<LocaleCode, GuidesIndexMessages> = {
  en: {
    navLabel: "Guides",
    footerLabel: "Guides",
    eyebrow: "Guides",
    title: "Helpful guides for everyday web tasks",
    description: "Read short, practical articles that explain common image, marketing, and developer workflows with links to the matching tools.",
    cardCategoryPrefix: "Guide category",
    cardAction: "Read guide",
    articleEyebrow: "Guide",
    backToGuides: "Back to guides",
    relatedToolsTitle: "Related tools",
    relatedGuidesTitle: "More guides",
    relatedGuidesDescription: "Browse another short article to keep exploring practical workflows.",
    metadataTitle: "Guides for image, marketing, and developer workflows",
    metadataDescription: "Explore concise multilingual guides that explain practical workflows and connect readers to the right online tools."
  },
  ko: {
    navLabel: "가이드",
    footerLabel: "가이드",
    eyebrow: "가이드",
    title: "실무에 바로 쓰는 웹 작업 가이드",
    description: "이미지, 마케팅, 개발 작업을 짧고 실용적으로 설명하고 관련 도구로 자연스럽게 이어지는 글을 모았습니다.",
    cardCategoryPrefix: "가이드 카테고리",
    cardAction: "가이드 읽기",
    articleEyebrow: "가이드",
    backToGuides: "가이드 목록으로",
    relatedToolsTitle: "관련 도구",
    relatedGuidesTitle: "더 읽어볼 가이드",
    relatedGuidesDescription: "비슷한 작업 흐름을 다룬 다른 짧은 가이드도 함께 살펴보세요.",
    metadataTitle: "이미지, 마케팅, 개발 작업을 위한 가이드",
    metadataDescription: "실용적인 워크플로를 간단히 설명하고 적절한 온라인 도구로 연결하는 다국어 가이드를 확인하세요."
  },
  ja: {
    navLabel: "ガイド",
    footerLabel: "ガイド",
    eyebrow: "ガイド",
    title: "毎日のWeb作業に役立つガイド",
    description: "画像、マーケティング、開発の基本フローを短くわかりやすく紹介し、対応するツールへ案内します。",
    cardCategoryPrefix: "ガイドカテゴリ",
    cardAction: "ガイドを読む",
    articleEyebrow: "ガイド",
    backToGuides: "ガイド一覧へ戻る",
    relatedToolsTitle: "関連ツール",
    relatedGuidesTitle: "あわせて読みたいガイド",
    relatedGuidesDescription: "近い作業フローを扱う別の短い記事も確認できます。",
    metadataTitle: "画像・マーケティング・開発向けガイド",
    metadataDescription: "実用的なワークフローをやさしく説明し、最適なオンラインツールにつなげる多言語ガイドです。"
  },
  es: {
    navLabel: "Guías",
    footerLabel: "Guías",
    eyebrow: "Guías",
    title: "Guías útiles para tareas web del día a día",
    description: "Lee artículos breves y prácticos sobre flujos de trabajo de imagen, marketing y desarrollo, con enlaces a las herramientas adecuadas.",
    cardCategoryPrefix: "Categoría de guía",
    cardAction: "Leer guía",
    articleEyebrow: "Guía",
    backToGuides: "Volver a guías",
    relatedToolsTitle: "Herramientas relacionadas",
    relatedGuidesTitle: "Más guías",
    relatedGuidesDescription: "Sigue explorando con otra guía breve sobre un flujo de trabajo relacionado.",
    metadataTitle: "Guías sobre imagen, marketing y desarrollo",
    metadataDescription: "Explora guías multilingües concisas que explican flujos de trabajo prácticos y conectan con las herramientas online adecuadas."
  },
  fr: {
    navLabel: "Guides",
    footerLabel: "Guides",
    eyebrow: "Guides",
    title: "Guides utiles pour les tâches web du quotidien",
    description: "Consultez des articles courts et pratiques sur l'image, le marketing et le développement, avec des liens vers les bons outils.",
    cardCategoryPrefix: "Catégorie du guide",
    cardAction: "Lire le guide",
    articleEyebrow: "Guide",
    backToGuides: "Retour aux guides",
    relatedToolsTitle: "Outils associés",
    relatedGuidesTitle: "Autres guides",
    relatedGuidesDescription: "Parcourez un autre article court pour continuer à découvrir des workflows utiles.",
    metadataTitle: "Guides pour l'image, le marketing et le développement",
    metadataDescription: "Découvrez des guides multilingues concis qui expliquent des workflows pratiques et orientent vers les bons outils en ligne."
  },
  de: {
    navLabel: "Ratgeber",
    footerLabel: "Ratgeber",
    eyebrow: "Ratgeber",
    title: "Hilfreiche Ratgeber für tägliche Web-Aufgaben",
    description: "Lies kurze, praktische Artikel zu Bild-, Marketing- und Entwickler-Workflows mit Links zu den passenden Tools.",
    cardCategoryPrefix: "Ratgeber-Kategorie",
    cardAction: "Ratgeber lesen",
    articleEyebrow: "Ratgeber",
    backToGuides: "Zurück zu den Ratgebern",
    relatedToolsTitle: "Passende Tools",
    relatedGuidesTitle: "Weitere Ratgeber",
    relatedGuidesDescription: "Sieh dir einen weiteren kurzen Artikel zu einem ähnlichen Workflow an.",
    metadataTitle: "Ratgeber für Bild-, Marketing- und Entwickler-Workflows",
    metadataDescription: "Entdecke kurze mehrsprachige Ratgeber, die praktische Workflows erklären und zu den passenden Online-Tools führen."
  }
};

const guideDefinitions: Array<Omit<GuideItem, "content"> & { content: Record<LocaleCode, GuideLocalizedContent> }> = [
  {
    slug: "how-to-use-html-color-picker",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    content: {
      en: {
        title: "How to Use an HTML Color Picker",
        description: "Learn a simple workflow for choosing colors, comparing values, and copying the right format for web work.",
        intro: "An HTML color picker is one of the fastest ways to test ideas for buttons, backgrounds, links, and brand accents without opening heavy design software.",
        categoryLabel: "Color workflow",
        useCasesTitle: "Practical use cases",
        useCases: ["Testing button and background colors during a quick landing page update.", "Matching a HEX or RGB value that a teammate already shared.", "Checking several shades before creating a larger palette or design token set."],
        closingTitle: "Keep the workflow simple",
        closingText: "Start with one color, compare the values you need, and only then expand into larger palette decisions. That keeps quick UI tasks fast and consistent.",
        relatedToolLabel: "Try the HTML Color Picker",
        sections: [
          { heading: "Start with the format you need", paragraphs: ["Some projects ask for HEX, while others use RGB or HSL in CSS. Knowing the format you need before you start avoids unnecessary conversions.", "If you are updating a small UI element, a lightweight browser picker is usually enough to test and copy the value immediately."] },
          { heading: "Check live previews before copying", paragraphs: ["A good color picker lets you see the swatch update instantly. Use that preview to catch colors that look too bright, too dark, or too close to surrounding elements.", "Previewing first is especially helpful when you are making quick changes to buttons, highlights, or status labels."] },
          { heading: "Compare related values", paragraphs: ["Even if you only need one final value, comparing nearby shades helps you avoid small mistakes. A slightly lighter or darker option may improve readability or hierarchy.", "This is also a good moment to record both the base color and a hover-state color if your interface needs one."] },
          { heading: "Copy the value into your CSS or design notes", paragraphs: ["Once the color looks right, copy the exact value into your stylesheet, component file, or design checklist.", "Saving the final value in one place helps you stay consistent when you revisit the same UI later."] }
        ]
      },
      ko: {
        title: "HTML 색상 선택기 사용 방법",
        description: "웹 작업에서 색상을 고르고 값을 비교한 뒤 필요한 형식으로 복사하는 간단한 흐름을 소개합니다.",
        intro: "HTML 색상 선택기는 무거운 디자인 툴을 열지 않고도 버튼, 배경, 링크, 브랜드 포인트 색상을 빠르게 시험해 볼 수 있는 가장 쉬운 방법 중 하나입니다.",
        categoryLabel: "색상 워크플로",
        useCasesTitle: "실용적인 활용 예시",
        useCases: ["랜딩 페이지 수정 중 버튼과 배경 색상을 빠르게 비교할 때.", "팀원이 전달한 HEX 또는 RGB 값을 같은 색으로 다시 확인할 때.", "더 큰 팔레트를 만들기 전에 여러 톤을 가볍게 검토할 때."],
        closingTitle: "간단한 흐름을 유지하세요",
        closingText: "먼저 한 가지 색을 정하고 필요한 값 형식을 확인한 뒤에 더 넓은 팔레트로 확장하면, 빠른 UI 작업을 일관되게 진행할 수 있습니다.",
        relatedToolLabel: "HTML 색상 선택기 사용해 보기",
        sections: [
          { heading: "필요한 형식부터 확인하기", paragraphs: ["프로젝트에 따라 HEX가 필요할 수도 있고 CSS에서 RGB나 HSL을 더 자주 쓸 수도 있습니다. 시작 전에 필요한 형식을 알면 불필요한 변환을 줄일 수 있습니다.", "작은 UI 요소를 고칠 때는 가벼운 브라우저 색상 선택기만으로도 충분히 빠르게 값을 정리할 수 있습니다."] },
          { heading: "복사 전에 미리보기 보기", paragraphs: ["좋은 색상 선택기는 스와치가 즉시 바뀌는 미리보기를 제공합니다. 너무 밝거나 어둡거나 주변 요소와 비슷한 색인지 먼저 확인하세요.", "버튼, 강조 영역, 상태 라벨처럼 작은 요소를 수정할 때 특히 도움이 됩니다."] },
          { heading: "비슷한 값도 함께 비교하기", paragraphs: ["최종적으로 한 가지 색만 필요하더라도 근처의 밝기 차이를 비교하면 더 안정적인 선택을 할 수 있습니다.", "이 과정에서 기본 색과 hover 상태 색을 같이 정해 두면 다음 작업이 더 쉬워집니다."] },
          { heading: "CSS나 메모에 정확히 저장하기", paragraphs: ["색상이 마음에 들면 값을 스타일시트, 컴포넌트 파일, 혹은 간단한 디자인 메모에 바로 저장하세요.", "최종 값을 한 곳에 남겨 두면 나중에 같은 UI를 다시 수정할 때 일관성을 유지하기 쉽습니다."] }
        ]
      },
      ja: {
        title: "HTMLカラーピッカーの使い方",
        description: "Web作業で色を選び、値を比較し、必要な形式でコピーする基本フローを紹介します。",
        intro: "HTMLカラーピッカーは、重いデザインソフトを開かずにボタン、背景、リンク、ブランドカラーを素早く試せる便利な方法です。",
        categoryLabel: "カラー作業",
        useCasesTitle: "活用シーン",
        useCases: ["ランディングページ更新時にボタン色と背景色を素早く比較したいとき。", "チームから共有されたHEXやRGBの色を確認したいとき。", "大きな配色を作る前に近い色をいくつか見比べたいとき。"],
        closingTitle: "シンプルな流れで進める",
        closingText: "まず1色を決めて必要な値を確認し、その後に配色全体へ広げると、短いUI作業でも素早く整った判断ができます。",
        relatedToolLabel: "HTMLカラーピッカーを試す",
        sections: [
          { heading: "必要な形式を先に決める", paragraphs: ["プロジェクトによってHEXが必要な場合もあれば、CSSでRGBやHSLを使う場合もあります。最初に形式を決めると余計な変換を減らせます。", "小さなUI調整なら、軽いブラウザ用カラーピッカーで十分なことが多いです。"] },
          { heading: "コピー前にライブプレビューを見る", paragraphs: ["ライブプレビューがあると、明るすぎる色や暗すぎる色、周囲と近すぎる色に気づきやすくなります。", "ボタンや強調表示、ステータスラベルのような細かな要素に特に役立ちます。"] },
          { heading: "近い色も比較する", paragraphs: ["最終的に1色しか使わなくても、近い明度の色を比べると判断ミスを減らせます。", "この段階でベース色とホバー色を一緒に決めておくのもおすすめです。"] },
          { heading: "CSSやメモに正確に残す", paragraphs: ["色が決まったら、スタイルシートやコンポーネント、デザインメモに正確な値を残しましょう。", "1か所にまとめておくと、後で同じUIを調整するときに再利用しやすくなります。"] }
        ]
      },
      es: {
        title: "Cómo usar un selector de color HTML",
        description: "Aprende un flujo simple para elegir colores, comparar valores y copiar el formato correcto para trabajo web.",
        intro: "Un selector de color HTML es una de las formas más rápidas de probar ideas para botones, fondos, enlaces y acentos de marca sin abrir software pesado de diseño.",
        categoryLabel: "Flujo de color",
        useCasesTitle: "Casos de uso prácticos",
        useCases: ["Probar colores de botones y fondos durante una actualización rápida de una landing page.", "Revisar un valor HEX o RGB que ya compartió otra persona del equipo.", "Comparar varios tonos antes de crear una paleta o un conjunto de tokens más amplio."],
        closingTitle: "Mantén el flujo simple",
        closingText: "Empieza con un color, confirma los valores que necesitas y solo después amplía hacia una paleta mayor. Así las tareas rápidas de UI siguen siendo ágiles y consistentes.",
        relatedToolLabel: "Probar el selector de color HTML",
        sections: [
          { heading: "Empieza por el formato que necesitas", paragraphs: ["Algunos proyectos piden HEX, mientras que otros usan RGB o HSL en CSS. Saber qué formato necesitas desde el inicio evita conversiones innecesarias.", "Si solo vas a ajustar un elemento pequeño de la interfaz, un selector ligero en el navegador suele ser suficiente."] },
          { heading: "Revisa la vista previa antes de copiar", paragraphs: ["Una buena herramienta muestra el color al instante. Usa esa vista previa para detectar tonos demasiado brillantes, oscuros o parecidos a los elementos cercanos.", "Esto es muy útil al tocar botones, resaltados o etiquetas de estado."] },
          { heading: "Compara valores cercanos", paragraphs: ["Aunque solo necesites un valor final, comparar tonos cercanos ayuda a evitar errores pequeños. Una versión un poco más clara u oscura puede mejorar la jerarquía visual.", "También es buen momento para decidir el color base y uno para hover si lo necesitas."] },
          { heading: "Copia el valor en tu CSS o tus notas", paragraphs: ["Cuando el color ya funciona, cópialo en tu hoja de estilos, archivo de componente o notas de diseño.", "Guardar el valor final en un solo lugar ayuda a mantener la consistencia más adelante."] }
        ]
      },
      fr: {
        title: "Comment utiliser un sélecteur de couleur HTML",
        description: "Découvrez une méthode simple pour choisir des couleurs, comparer les valeurs et copier le bon format pour le web.",
        intro: "Un sélecteur de couleur HTML est l'un des moyens les plus rapides pour tester des idées de boutons, d'arrière-plans, de liens et d'accents de marque sans ouvrir un logiciel lourd.",
        categoryLabel: "Workflow couleur",
        useCasesTitle: "Cas d'usage pratiques",
        useCases: ["Tester rapidement des couleurs de boutons et d'arrière-plan sur une landing page.", "Retrouver une valeur HEX ou RGB déjà partagée par un collègue.", "Comparer plusieurs nuances avant de créer une palette plus complète."],
        closingTitle: "Gardez un workflow simple",
        closingText: "Commencez par une couleur, vérifiez les valeurs utiles, puis élargissez seulement ensuite à une palette plus large. Les petites tâches UI restent ainsi rapides et cohérentes.",
        relatedToolLabel: "Essayer le sélecteur de couleur HTML",
        sections: [
          { heading: "Commencer par le format utile", paragraphs: ["Certains projets demandent du HEX, d'autres utilisent plutôt RGB ou HSL en CSS. Connaître le format attendu dès le départ évite des conversions inutiles.", "Pour une petite mise à jour d'interface, un sélecteur léger dans le navigateur suffit souvent largement."] },
          { heading: "Vérifier l'aperçu avant de copier", paragraphs: ["Une bonne interface affiche l'échantillon en direct. Servez-vous-en pour repérer une couleur trop claire, trop sombre ou trop proche des éléments voisins.", "C'est particulièrement utile pour des boutons, des mises en avant ou des badges d'état."] },
          { heading: "Comparer des valeurs proches", paragraphs: ["Même si vous n'avez besoin que d'une seule couleur finale, comparer des nuances proches aide à éviter les petits écarts.", "Vous pouvez aussi en profiter pour noter une couleur de base et une couleur de survol."] },
          { heading: "Copier la valeur dans votre CSS ou vos notes", paragraphs: ["Quand la couleur est validée, copiez la valeur exacte dans votre feuille de style, votre composant ou vos notes de design.", "Centraliser la valeur finale facilite la cohérence lors d'une prochaine mise à jour."] }
        ]
      },
      de: {
        title: "So verwendest du einen HTML-Farbwähler",
        description: "Lerne einen einfachen Ablauf, um Farben auszuwählen, Werte zu vergleichen und das richtige Format für Web-Arbeit zu kopieren.",
        intro: "Ein HTML-Farbwähler ist eine der schnellsten Möglichkeiten, Ideen für Buttons, Hintergründe, Links und Markenakzente zu testen, ohne schwere Designsoftware zu öffnen.",
        categoryLabel: "Farb-Workflow",
        useCasesTitle: "Praktische Einsatzfälle",
        useCases: ["Button- und Hintergrundfarben bei einem schnellen Landingpage-Update testen.", "Einen bereits geteilten HEX- oder RGB-Wert aus dem Team nachprüfen.", "Mehrere Nuancen vergleichen, bevor daraus eine größere Palette entsteht."],
        closingTitle: "Halte den Ablauf einfach",
        closingText: "Starte mit einer Farbe, prüfe die benötigten Werte und erweitere erst dann auf eine größere Palette. So bleiben schnelle UI-Aufgaben flott und konsistent.",
        relatedToolLabel: "HTML-Farbwähler ausprobieren",
        sections: [
          { heading: "Mit dem benötigten Format beginnen", paragraphs: ["Manche Projekte brauchen HEX, andere arbeiten in CSS eher mit RGB oder HSL. Wenn du das gewünschte Format vorab kennst, sparst du dir unnötige Umwandlungen.", "Für kleine UI-Anpassungen reicht ein leichter Browser-Farbwähler oft völlig aus."] },
          { heading: "Vor dem Kopieren die Vorschau prüfen", paragraphs: ["Eine gute Vorschau zeigt die Farbe sofort an. So erkennst du schnell, ob ein Ton zu hell, zu dunkel oder zu nah an angrenzenden Elementen ist.", "Das ist besonders hilfreich bei Buttons, Hervorhebungen oder Statuslabels."] },
          { heading: "Ähnliche Werte vergleichen", paragraphs: ["Auch wenn du am Ende nur einen Wert brauchst, hilft der Vergleich benachbarter Nuancen gegen kleine Fehlentscheidungen.", "Dabei kannst du auch gleich eine Basisfarbe und eine Hover-Variante festhalten."] },
          { heading: "Den Wert in CSS oder Notizen sichern", paragraphs: ["Wenn die Farbe passt, übertrage den exakten Wert in dein Stylesheet, die Komponente oder deine Designnotizen.", "Ein zentral gespeicherter Endwert sorgt später für mehr Konsistenz."] }
        ]
      }
    }
  },
  {
    slug: "image-color-extractor-guide",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    content: {
      en: { title: "Image Color Extractor Guide", description: "Use image-based color picking to sample brand colors, references, and visual inspiration more accurately.", intro: "When a color already exists inside a photo, screenshot, or mockup, an image color extractor is the quickest way to sample the exact pixel instead of guessing by eye.", categoryLabel: "Image analysis", useCasesTitle: "Practical use cases", useCases: ["Matching a color from a screenshot before rebuilding a component.", "Sampling tones from product photos for social media graphics.", "Checking accent colors inside mood boards or inspiration images."], closingTitle: "Sample first, decide second", closingText: "By sampling real image pixels first, you make design choices based on evidence instead of rough visual guesses.", relatedToolLabel: "Open the Image Color Extractor", sections: [{ heading: "Upload a clear reference image", paragraphs: ["Use the cleanest version of the image you have. Compression artifacts, blur, or tiny screenshots can make color sampling less reliable.", "If possible, zoomed or higher-resolution references make it easier to click the exact area you want."] }, { heading: "Click the exact visual area", paragraphs: ["Choose the specific pixel area that matters most, such as a product highlight, a button in a screenshot, or a background tone.", "Small differences matter, especially if the image includes shadows, gradients, or reflections."] }, { heading: "Compare more than one sample", paragraphs: ["Photos often contain light and shadow variations, so one click may not represent the whole object. Sampling a few nearby points gives you a more dependable range.", "That range can then guide your final brand or interface choice."] }, { heading: "Save the values for later reuse", paragraphs: ["After you find the color, store the HEX or RGB value where your team can reuse it in components, design systems, or campaign notes.", "This turns a quick one-time extraction into something more repeatable."] }] },
      ko: { title: "이미지 색상 추출기 가이드", description: "이미지에서 브랜드 색상, 참고 색상, 시각적 아이디어를 더 정확하게 뽑아내는 방법을 소개합니다.", intro: "색상이 사진, 스크린샷, 목업 안에 이미 들어 있다면, 눈으로 추측하기보다 이미지 색상 추출기로 정확한 픽셀 값을 확인하는 편이 훨씬 빠릅니다.", categoryLabel: "이미지 분석", useCasesTitle: "실용적인 활용 예시", useCases: ["컴포넌트를 다시 만들기 전에 스크린샷의 색상을 맞출 때.", "제품 사진에서 소셜 이미지용 핵심 톤을 뽑을 때.", "무드보드나 참고 이미지 속 강조 색을 확인할 때."], closingTitle: "먼저 추출하고, 그다음 결정하세요", closingText: "실제 이미지 픽셀을 먼저 확인하면, 대략적인 감이 아니라 근거 있는 색상 선택을 할 수 있습니다.", relatedToolLabel: "이미지 색상 추출기 열기", sections: [{ heading: "선명한 참고 이미지를 준비하기", paragraphs: ["가능하면 가장 깨끗한 원본 이미지를 사용하세요. 압축 노이즈, 흐림, 작은 스크린샷은 색상 확인을 어렵게 만듭니다.", "확대된 이미지나 해상도가 높은 자료일수록 원하는 지점을 정확히 클릭하기 쉽습니다."] }, { heading: "정확한 위치를 클릭하기", paragraphs: ["제품 하이라이트, 스크린샷 속 버튼, 배경 톤처럼 실제로 중요한 영역을 선택하세요.", "그림자, 그라디언트, 반사가 섞여 있으면 작은 차이도 결과에 영향을 줍니다."] }, { heading: "한 번만 보지 말고 여러 지점을 비교하기", paragraphs: ["사진에는 밝고 어두운 부분이 섞여 있으므로 한 점만으로 전체 색을 판단하기 어려울 수 있습니다.", "가까운 여러 지점을 비교하면 더 안정적인 범위를 잡을 수 있습니다."] }, { heading: "나중에 재사용할 수 있도록 저장하기", paragraphs: ["마음에 드는 색을 찾으면 HEX나 RGB 값을 팀 문서, 컴포넌트, 디자인 시스템에 남겨 두세요.", "짧은 추출 작업이 나중에는 반복 가능한 기준이 됩니다."] }] },
      ja: { title: "画像カラー抽出ガイド", description: "ブランドカラーや参考色を画像からより正確に取得するための基本を紹介します。", intro: "色がすでに写真、スクリーンショット、モックアップの中にあるなら、目で推測するより画像カラー抽出ツールで正確なピクセルを取る方が早くて確実です。", categoryLabel: "画像分析", useCasesTitle: "活用シーン", useCases: ["コンポーネントを再現する前にスクリーンショットの色を合わせたいとき。", "商品写真からSNS用の色を拾いたいとき。", "ムードボードや参考画像のアクセント色を確認したいとき。"], closingTitle: "まず抽出してから判断する", closingText: "実際の画像ピクセルを確認してから色を決めることで、感覚だけに頼らない判断ができます。", relatedToolLabel: "画像カラー抽出を開く", sections: [{ heading: "できるだけ鮮明な画像を使う", paragraphs: ["できるだけ高品質な画像を使いましょう。圧縮ノイズやぼけ、小さすぎるスクリーンショットは色の取得を不安定にします。", "拡大しやすい画像や高解像度の素材なら、狙った場所をクリックしやすくなります。"] }, { heading: "必要な場所を正確にクリックする", paragraphs: ["商品ハイライト、スクリーンショット内のボタン、背景トーンなど、本当に見たい箇所を選びます。", "影、グラデーション、反射がある画像では小さな差も重要です。"] }, { heading: "複数のサンプルを比べる", paragraphs: ["写真には明るい部分と暗い部分があるため、1点だけでは全体を代表しないことがあります。", "近い位置を数か所サンプリングすると、より信頼しやすい範囲が見えてきます。"] }, { heading: "あとで使えるように保存する", paragraphs: ["色が決まったら、HEXやRGBの値をコンポーネントやデザインシステム、メモに残しておきましょう。", "その場限りの取得ではなく、再利用できる情報になります。"] }] },
      es: { title: "Guía del extractor de color de imágenes", description: "Usa la extracción de color desde imágenes para tomar colores de marca, referencias visuales e inspiración con más precisión.", intro: "Cuando el color ya existe dentro de una foto, captura o maqueta, un extractor de color de imágenes es la forma más rápida de obtener el píxel exacto en lugar de adivinarlo a ojo.", categoryLabel: "Análisis de imagen", useCasesTitle: "Casos de uso prácticos", useCases: ["Igualar un color desde una captura antes de reconstruir un componente.", "Tomar tonos de fotos de producto para piezas sociales.", "Revisar colores de acento en mood boards o imágenes de inspiración."], closingTitle: "Primero toma muestras, después decide", closingText: "Si primero tomas muestras reales de los píxeles, tus decisiones de diseño se basan en datos y no en estimaciones visuales.", relatedToolLabel: "Abrir el extractor de color de imágenes", sections: [{ heading: "Sube una referencia clara", paragraphs: ["Usa la versión más limpia de la imagen que tengas. La compresión, el desenfoque o las capturas muy pequeñas hacen menos fiable la muestra.", "Si puedes, una referencia ampliada o de mayor resolución facilita hacer clic justo donde quieres."] }, { heading: "Haz clic en el área visual exacta", paragraphs: ["Selecciona la zona específica que realmente importa, como un detalle de producto, un botón en una captura o un tono de fondo.", "Las diferencias pequeñas importan, sobre todo si hay sombras, degradados o reflejos."] }, { heading: "Compara más de una muestra", paragraphs: ["Las fotos suelen tener variaciones de luz y sombra, así que un solo clic puede no representar todo el objeto.", "Tomar varias muestras cercanas te da un rango más fiable para decidir."] }, { heading: "Guarda los valores para reutilizarlos", paragraphs: ["Cuando encuentres el color, guarda el valor HEX o RGB donde el equipo pueda reutilizarlo en componentes, sistemas de diseño o notas de campaña.", "Así conviertes una extracción rápida en algo repetible."] }] },
      fr: { title: "Guide de l'extracteur de couleur d'image", description: "Servez-vous d'une image pour récupérer plus précisément des couleurs de marque, de référence ou d'inspiration.", intro: "Quand une couleur existe déjà dans une photo, une capture ou une maquette, un extracteur de couleur d'image permet d'obtenir le pixel exact bien plus vite qu'une estimation visuelle.", categoryLabel: "Analyse d'image", useCasesTitle: "Cas d'usage pratiques", useCases: ["Retrouver une couleur dans une capture avant de recréer un composant.", "Prélever des tons dans des photos produit pour des visuels sociaux.", "Vérifier des couleurs d'accent dans des mood boards ou images d'inspiration."], closingTitle: "Prélevez d'abord, décidez ensuite", closingText: "En partant de vrais pixels, vous prenez des décisions de design plus fiables que de simples estimations visuelles.", relatedToolLabel: "Ouvrir l'extracteur de couleur d'image", sections: [{ heading: "Importer une image de référence nette", paragraphs: ["Utilisez la version la plus propre possible de l'image. La compression, le flou ou une petite capture réduisent la fiabilité de l'échantillon.", "Une référence plus grande ou plus détaillée aide à cliquer précisément sur la zone utile."] }, { heading: "Cliquer sur la zone exacte", paragraphs: ["Choisissez la partie visuelle qui compte vraiment, comme un produit, un bouton dans une capture ou un ton d'arrière-plan.", "Les petites différences comptent, surtout en présence d'ombres, de dégradés ou de reflets."] }, { heading: "Comparer plusieurs échantillons", paragraphs: ["Les photos contiennent souvent des variations de lumière et d'ombre, donc un seul clic ne représente pas toujours l'ensemble.", "Comparer quelques points voisins donne une plage plus fiable pour décider."] }, { heading: "Conserver les valeurs pour plus tard", paragraphs: ["Une fois la couleur trouvée, notez la valeur HEX ou RGB dans vos composants, votre design system ou vos notes.", "Ainsi, une extraction ponctuelle devient un repère réutilisable."] }] },
      de: { title: "Leitfaden zum Bild-Farbextraktor", description: "Nutze farbbasiertes Sampling aus Bildern, um Markenfarben, Referenzen und visuelle Inspiration präziser zu erfassen.", intro: "Wenn eine Farbe bereits in einem Foto, Screenshot oder Mockup vorhanden ist, ist ein Bild-Farbextraktor der schnellste Weg zum exakten Pixel statt zu einer groben Schätzung.", categoryLabel: "Bildanalyse", useCasesTitle: "Praktische Einsatzfälle", useCases: ["Eine Farbe aus einem Screenshot übernehmen, bevor du eine Komponente nachbaust.", "Töne aus Produktfotos für Social-Grafiken entnehmen.", "Akzentfarben in Moodboards oder Inspirationsbildern prüfen."], closingTitle: "Erst samplen, dann entscheiden", closingText: "Wenn du zuerst echte Bildpixel sammelst, basieren Designentscheidungen auf belastbaren Werten statt auf Schätzungen.", relatedToolLabel: "Bild-Farbextraktor öffnen", sections: [{ heading: "Eine klare Referenz hochladen", paragraphs: ["Nutze möglichst die sauberste Bildversion. Starke Kompression, Unschärfe oder sehr kleine Screenshots verschlechtern das Sampling.", "Vergrößerte oder höher aufgelöste Vorlagen helfen dir, die richtige Stelle genauer anzuklicken."] }, { heading: "Die genaue Stelle anklicken", paragraphs: ["Wähle die visuelle Zone, die wirklich zählt, zum Beispiel ein Produkthighlight, einen Button im Screenshot oder einen Hintergrundton.", "Kleine Unterschiede spielen besonders bei Schatten, Verläufen oder Spiegelungen eine Rolle."] }, { heading: "Mehr als eine Probe vergleichen", paragraphs: ["Fotos enthalten oft Licht- und Schattenunterschiede. Ein einzelner Klick steht daher nicht immer für das ganze Objekt.", "Mehrere nahe Punkte geben dir einen verlässlicheren Farbbereich."] }, { heading: "Werte für später sichern", paragraphs: ["Wenn du die Farbe gefunden hast, speichere den HEX- oder RGB-Wert so, dass dein Team ihn in Komponenten, Designsystemen oder Kampagnennotizen wiederverwenden kann.", "So wird aus einer schnellen Probe etwas Dauerhaftes."] }] }
    }
  },
  {
    slug: "what-is-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    content: {
      en: { title: "What Is WebP?", description: "Understand what the WebP image format is, why teams use it, and when it is a practical choice for the web.", intro: "WebP is an image format designed to reduce file size while keeping visual quality at a level that still works well for many websites and web apps.", categoryLabel: "Image format", useCasesTitle: "Practical use cases", useCases: ["Reducing image weight on landing pages or blog posts.", "Preparing lighter assets for product collections and help centers.", "Testing whether a JPG or PNG can be replaced with a smaller WebP version."], closingTitle: "Use WebP where it helps", closingText: "WebP is most useful when you want lighter images and faster pages without making your workflow overly complex.", relatedToolLabel: "Convert an image to WebP", sections: [{ heading: "Why WebP exists", paragraphs: ["Traditional formats like JPG and PNG are still common, but they can be heavier than necessary for many web cases.", "WebP was created to offer more efficient compression so pages can load faster and transfer less data."] }, { heading: "When WebP is a good fit", paragraphs: ["WebP works well for many site images, product photos, article visuals, and general web graphics.", "It is especially useful when you are optimizing performance and want smaller files without a major workflow change."] }, { heading: "Quality still needs review", paragraphs: ["Even with a modern format, you should still preview the output. Compression settings can affect sharpness, gradients, and fine detail.", "A quick before-and-after check helps confirm the file is smaller without looking noticeably worse."] }, { heading: "Keep originals when needed", paragraphs: ["If an image is important, store the original source file as well. That makes future edits and alternate exports easier.", "Think of WebP as a delivery format for the web, not always the only file you keep."] }] },
      ko: { title: "WebP란 무엇인가요?", description: "WebP 이미지 형식이 무엇인지, 왜 많이 쓰이는지, 웹에서 언제 실용적인지 간단히 설명합니다.", intro: "WebP는 파일 크기를 줄이면서도 웹사이트와 웹앱에서 충분히 쓸 만한 시각 품질을 유지하도록 설계된 이미지 형식입니다.", categoryLabel: "이미지 형식", useCasesTitle: "실용적인 활용 예시", useCases: ["랜딩 페이지나 블로그 글의 이미지 용량을 줄일 때.", "상품 목록이나 도움말 센터용 이미지를 더 가볍게 준비할 때.", "기존 JPG나 PNG를 더 작은 WebP로 바꿀 수 있는지 시험할 때."], closingTitle: "도움이 되는 곳에 WebP를 사용하세요", closingText: "WebP는 복잡한 작업을 늘리지 않으면서 더 가벼운 이미지와 빠른 페이지를 원하는 경우에 특히 유용합니다.", relatedToolLabel: "이미지를 WebP로 변환하기", sections: [{ heading: "WebP가 등장한 이유", paragraphs: ["JPG와 PNG는 여전히 널리 쓰이지만, 웹에서는 필요 이상으로 무거운 경우가 있습니다.", "WebP는 더 효율적인 압축을 통해 페이지 로딩 속도와 데이터 전송량을 개선하려고 만들어졌습니다."] }, { heading: "언제 잘 맞는가", paragraphs: ["WebP는 사이트 이미지, 상품 사진, 글 썸네일, 일반적인 웹 그래픽에 잘 어울립니다.", "성능 최적화를 진행하면서 큰 작업 흐름 변화 없이 파일을 줄이고 싶을 때 특히 좋습니다."] }, { heading: "품질 확인은 여전히 필요합니다", paragraphs: ["최신 포맷이라도 결과를 직접 미리보기로 확인해야 합니다. 압축 설정에 따라 선명도, 그라디언트, 세부 묘사가 달라질 수 있습니다.", "전후 이미지를 빠르게 비교하면 더 작아졌는지, 품질이 충분한지 판단하기 쉽습니다."] }, { heading: "원본도 함께 보관하기", paragraphs: ["중요한 이미지는 원본 파일도 같이 보관하세요. 그래야 나중에 다시 편집하거나 다른 형식으로 내보내기 쉽습니다.", "WebP는 웹 전달용 형식으로 생각하고, 항상 유일한 저장본으로만 쓰지는 않는 것이 좋습니다."] }] },
      ja: { title: "WebPとは？", description: "WebP画像形式の基本、使われる理由、Webで実用的な場面を簡潔に説明します。", intro: "WebPは、ファイルサイズを抑えつつ、多くのWebサイトやWebアプリで十分な画質を保てるよう設計された画像形式です。", categoryLabel: "画像形式", useCasesTitle: "活用シーン", useCases: ["ランディングページや記事の画像を軽くしたいとき。", "商品一覧やヘルプページ用の画像を軽量化したいとき。", "JPGやPNGをより小さいWebPへ置き換えられるか試したいとき。"], closingTitle: "役立つ場面でWebPを使う", closingText: "WebPは、複雑な運用を増やさずに画像を軽くし、ページ表示を速くしたいときに特に有効です。", relatedToolLabel: "画像をWebPに変換する", sections: [{ heading: "WebPが生まれた理由", paragraphs: ["JPGやPNGは今も一般的ですが、多くのWeb用途では少し重いことがあります。", "WebPはより効率的な圧縮で、ページ表示を速くしデータ転送量を減らすために作られました。"] }, { heading: "向いている場面", paragraphs: ["WebPはサイト画像、商品写真、記事ビジュアル、一般的なWebグラフィックに向いています。", "大きく運用を変えずにパフォーマンス改善を進めたいときに使いやすい形式です。"] }, { heading: "画質の確認は必要", paragraphs: ["新しい形式でも、出力結果は必ず確認しましょう。圧縮設定によってシャープさや細部、グラデーションの見え方が変わります。", "変換前後を見比べることで、軽量化と見た目のバランスを判断しやすくなります。"] }, { heading: "必要なら元データも残す", paragraphs: ["大切な画像は元ファイルも残しておくと安心です。あとで再編集したり別形式で書き出したりしやすくなります。", "WebPはWeb配信用の形式として考え、元データの代わりとは限らないと覚えておくと便利です。"] }] },
      es: { title: "¿Qué es WebP?", description: "Entiende qué es el formato de imagen WebP, por qué lo usan muchos equipos y cuándo es una opción práctica para la web.", intro: "WebP es un formato de imagen diseñado para reducir el tamaño de archivo mientras mantiene una calidad visual suficiente para muchos sitios y aplicaciones web.", categoryLabel: "Formato de imagen", useCasesTitle: "Casos de uso prácticos", useCases: ["Reducir el peso de imágenes en landing pages o artículos.", "Preparar activos más ligeros para catálogos y centros de ayuda.", "Probar si un JPG o PNG puede reemplazarse por una versión WebP más pequeña."], closingTitle: "Usa WebP cuando aporte valor", closingText: "WebP es más útil cuando quieres imágenes ligeras y páginas más rápidas sin complicar demasiado el flujo de trabajo.", relatedToolLabel: "Convertir una imagen a WebP", sections: [{ heading: "Por qué existe WebP", paragraphs: ["Formatos como JPG y PNG siguen siendo comunes, pero en muchos casos web pesan más de lo necesario.", "WebP se creó para ofrecer una compresión más eficiente y así cargar páginas más rápido y transferir menos datos."] }, { heading: "Cuándo conviene usarlo", paragraphs: ["WebP encaja bien en imágenes de sitio, fotos de producto, visuales de artículos y gráficos web generales.", "Es especialmente útil cuando estás optimizando rendimiento y quieres archivos más pequeños sin grandes cambios de proceso."] }, { heading: "La calidad todavía debe revisarse", paragraphs: ["Aunque sea un formato moderno, conviene revisar el resultado final. La compresión puede afectar nitidez, degradados y detalles finos.", "Una comparación rápida antes y después confirma si el archivo es más pequeño sin verse claramente peor."] }, { heading: "Guarda los originales si hace falta", paragraphs: ["Si una imagen es importante, conserva también el archivo original. Eso facilita futuras ediciones o exportaciones alternativas.", "Piensa en WebP como formato de entrega para la web, no siempre como el único archivo que debes guardar."] }] },
      fr: { title: "Qu'est-ce que WebP ?", description: "Comprenez ce qu'est le format d'image WebP, pourquoi il est utilisé et dans quels cas il est pratique pour le web.", intro: "WebP est un format d'image conçu pour réduire le poids des fichiers tout en conservant une qualité visuelle suffisante pour de nombreux sites et applications web.", categoryLabel: "Format d'image", useCasesTitle: "Cas d'usage pratiques", useCases: ["Alléger les images d'une landing page ou d'un article.", "Préparer des visuels plus légers pour un catalogue ou un centre d'aide.", "Tester si un JPG ou PNG peut être remplacé par un WebP plus petit."], closingTitle: "Utilisez WebP quand il aide vraiment", closingText: "WebP est surtout utile quand vous voulez des images plus légères et des pages plus rapides sans complexifier votre workflow.", relatedToolLabel: "Convertir une image en WebP", sections: [{ heading: "Pourquoi WebP existe", paragraphs: ["Les formats traditionnels comme JPG et PNG restent courants, mais ils peuvent être plus lourds que nécessaire sur le web.", "WebP a été conçu pour offrir une compression plus efficace et accélérer le chargement des pages."] }, { heading: "Quand c'est un bon choix", paragraphs: ["WebP fonctionne bien pour les images de site, les photos produit, les visuels d'article et les graphismes web généraux.", "C'est un bon choix quand vous cherchez à améliorer les performances sans revoir tout votre processus."] }, { heading: "La qualité doit toujours être vérifiée", paragraphs: ["Même avec un format moderne, il faut contrôler le rendu. Les réglages de compression peuvent affecter la netteté, les dégradés et les détails.", "Une comparaison rapide avant/après permet de valider l'équilibre entre poids et qualité."] }, { heading: "Conservez les originaux si besoin", paragraphs: ["Si une image est importante, gardez aussi le fichier source. Cela facilite les futures retouches et exports.", "Considérez WebP comme un format de diffusion web, pas forcément comme votre seule copie."] }] },
      de: { title: "Was ist WebP?", description: "Verstehe, was das Bildformat WebP ist, warum Teams es nutzen und wann es eine praktische Wahl fürs Web ist.", intro: "WebP ist ein Bildformat, das kleinere Dateigrößen ermöglichen soll und dabei für viele Websites und Web-Apps eine brauchbare Bildqualität beibehält.", categoryLabel: "Bildformat", useCasesTitle: "Praktische Einsatzfälle", useCases: ["Bildgewicht auf Landingpages oder in Blogartikeln reduzieren.", "Leichtere Assets für Produktlisten und Hilfe-Center vorbereiten.", "Testen, ob ein JPG oder PNG durch eine kleinere WebP-Version ersetzt werden kann."], closingTitle: "Setze WebP dort ein, wo es hilft", closingText: "WebP ist besonders nützlich, wenn du leichtere Bilder und schnellere Seiten willst, ohne den Workflow unnötig zu verkomplizieren.", relatedToolLabel: "Ein Bild in WebP umwandeln", sections: [{ heading: "Warum WebP entwickelt wurde", paragraphs: ["Klassische Formate wie JPG und PNG sind weiterhin verbreitet, können fürs Web aber oft schwerer sein als nötig.", "WebP wurde geschaffen, um effizienter zu komprimieren und Seiten schneller laden zu lassen."] }, { heading: "Wann WebP gut passt", paragraphs: ["WebP eignet sich gut für viele Website-Bilder, Produktfotos, Artikelgrafiken und allgemeine Web-Visuals.", "Es ist besonders hilfreich, wenn du Performance verbessern möchtest, ohne deinen Prozess stark umzubauen."] }, { heading: "Die Qualität muss trotzdem geprüft werden", paragraphs: ["Auch bei einem modernen Format solltest du das Ergebnis ansehen. Kompression kann Schärfe, Verläufe und feine Details beeinflussen.", "Ein schneller Vorher-Nachher-Vergleich zeigt, ob die Datei kleiner geworden ist, ohne sichtbar schlechter zu wirken."] }, { heading: "Originale bei Bedarf behalten", paragraphs: ["Wenn ein Bild wichtig ist, bewahre auch die Originaldatei auf. Das erleichtert spätere Bearbeitungen und alternative Exporte.", "Sieh WebP eher als Auslieferungsformat fürs Web und nicht immer als einzige Datei, die du speicherst."] }] }
    }
  },
  {
    slug: "how-to-build-utm-links",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    content: {
      en: { title: "How to Build UTM Links", description: "Create cleaner campaign URLs by understanding the basic UTM parameters and how to use them consistently.", intro: "UTM links help marketers and site owners understand where traffic comes from by adding simple tracking parameters to a URL.", categoryLabel: "Marketing tracking", useCasesTitle: "Practical use cases", useCases: ["Tracking newsletter clicks separately from social media traffic.", "Comparing two campaign placements that point to the same landing page.", "Keeping link naming more consistent across a small team."], closingTitle: "Consistency matters more than complexity", closingText: "The best UTM setup is usually a simple one that your team can repeat every time without confusion.", relatedToolLabel: "Build a UTM link", sections: [{ heading: "Know the core parameters", paragraphs: ["The most common UTM fields are source, medium, and campaign. These three already cover many everyday reporting needs.", "Some teams also use term or content for extra detail, but not every link needs every field."] }, { heading: "Use a naming pattern", paragraphs: ["Pick a consistent style for lowercase words, separators, and campaign names before you create many links.", "Consistency makes analytics cleaner and helps avoid reports filled with duplicate-looking labels."] }, { heading: "Keep URLs readable", paragraphs: ["UTM links can become long quickly, so avoid adding unnecessary words or overly detailed labels.", "A short and clear campaign name is usually easier to manage than a very descriptive one."] }, { heading: "Test the final link", paragraphs: ["Before sharing the URL, open it once to confirm it lands on the correct page and that the parameters are attached properly.", "This small check can prevent avoidable campaign mistakes."] }] },
      ko: { title: "UTM 링크 만드는 방법", description: "기본 UTM 파라미터를 이해하고 일관되게 사용해 더 깔끔한 캠페인 URL을 만드는 방법을 소개합니다.", intro: "UTM 링크는 URL에 간단한 추적 파라미터를 붙여 트래픽이 어디에서 왔는지 파악하는 데 도움을 줍니다.", categoryLabel: "마케팅 추적", useCasesTitle: "실용적인 활용 예시", useCases: ["뉴스레터 클릭과 소셜 유입을 따로 추적할 때.", "같은 랜딩 페이지로 가는 두 캠페인 위치를 비교할 때.", "작은 팀 안에서 링크 이름 규칙을 통일할 때."], closingTitle: "복잡함보다 일관성이 중요합니다", closingText: "좋은 UTM 설정은 대개 팀이 헷갈리지 않고 반복해서 사용할 수 있는 단순한 규칙입니다.", relatedToolLabel: "UTM 링크 만들기", sections: [{ heading: "핵심 파라미터 이해하기", paragraphs: ["가장 많이 쓰는 UTM 값은 source, medium, campaign입니다. 이 세 가지만으로도 많은 기본 분석이 가능합니다.", "일부 팀은 term이나 content도 쓰지만, 모든 링크에 모든 항목이 필요한 것은 아닙니다."] }, { heading: "이름 규칙 정하기", paragraphs: ["링크를 많이 만들기 전에 소문자 사용, 구분자, 캠페인 이름 규칙을 먼저 정해 두세요.", "이 규칙이 있어야 비슷하지만 다른 이름이 보고서에 뒤섞이는 일을 줄일 수 있습니다."] }, { heading: "URL은 읽기 쉽게 유지하기", paragraphs: ["UTM 링크는 금방 길어지므로 불필요한 단어나 지나치게 자세한 라벨을 넣지 않는 편이 좋습니다.", "짧고 명확한 캠페인 이름이 보통 더 관리하기 쉽습니다."] }, { heading: "최종 링크 테스트하기", paragraphs: ["공유 전에 한 번 직접 열어 올바른 페이지로 이동하는지, 파라미터가 잘 붙었는지 확인하세요.", "이 작은 확인만으로도 많은 캠페인 실수를 막을 수 있습니다."] }] },
      ja: { title: "UTMリンクの作り方", description: "基本的なUTMパラメータを理解し、URLを一貫して管理する方法を紹介します。", intro: "UTMリンクはURLに簡単な追跡パラメータを追加し、どこからトラフィックが来たのかを把握しやすくする仕組みです。", categoryLabel: "マーケティング計測", useCasesTitle: "活用シーン", useCases: ["ニュースレター流入とSNS流入を分けて確認したいとき。", "同じランディングページに向かう2つの施策を比較したいとき。", "小さなチームでリンク命名を揃えたいとき。"], closingTitle: "複雑さより一貫性が大切", closingText: "良いUTM運用は、毎回迷わず同じルールで作れるシンプルな運用であることが多いです。", relatedToolLabel: "UTMリンクを作成する", sections: [{ heading: "基本パラメータを知る", paragraphs: ["よく使われるUTM項目はsource、medium、campaignです。この3つだけでも多くの基本レポートに対応できます。", "termやcontentを使うこともありますが、すべてのリンクに必要とは限りません。"] }, { heading: "命名ルールを決める", paragraphs: ["多くのリンクを作る前に、小文字の使い方、区切り文字、キャンペーン名のルールを決めておきましょう。", "一貫したルールがあれば、分析画面で似た名前が乱立しにくくなります。"] }, { heading: "URLを読みやすく保つ", paragraphs: ["UTMリンクはすぐ長くなるため、不要な単語や細かすぎるラベルを足しすぎないようにします。", "短く明確なキャンペーン名の方が管理しやすいことが多いです。"] }, { heading: "完成したリンクを確認する", paragraphs: ["共有前に一度開いて、正しいページに移動するか、パラメータが正しく付いているかを確認しましょう。", "この小さな確認で防げるミスは少なくありません。"] }] },
      es: { title: "Cómo crear enlaces UTM", description: "Crea URLs de campaña más limpias entendiendo los parámetros UTM básicos y usándolos de forma consistente.", intro: "Los enlaces UTM ayudan a marketers y responsables de sitios a entender de dónde viene el tráfico añadiendo parámetros simples a una URL.", categoryLabel: "Seguimiento de marketing", useCasesTitle: "Casos de uso prácticos", useCases: ["Separar clics del newsletter frente al tráfico social.", "Comparar dos ubicaciones de campaña que apuntan a la misma landing page.", "Mantener nombres de enlaces más consistentes en un equipo pequeño."], closingTitle: "La consistencia importa más que la complejidad", closingText: "La mejor configuración UTM suele ser una estructura simple que el equipo pueda repetir sin dudas.", relatedToolLabel: "Crear un enlace UTM", sections: [{ heading: "Conoce los parámetros principales", paragraphs: ["Los campos UTM más habituales son source, medium y campaign. Con esos tres ya cubres muchas necesidades básicas de reporting.", "Algunos equipos añaden term o content para más detalle, pero no todos los enlaces necesitan todos los campos."] }, { heading: "Usa un patrón de nombres", paragraphs: ["Antes de crear muchos enlaces, define una forma consistente de usar minúsculas, separadores y nombres de campaña.", "La consistencia mejora la limpieza de los datos y evita etiquetas que parecen duplicadas."] }, { heading: "Mantén las URLs legibles", paragraphs: ["Los enlaces UTM pueden hacerse largos muy rápido, así que evita palabras innecesarias o etiquetas excesivamente detalladas.", "Un nombre de campaña corto y claro suele ser más fácil de gestionar."] }, { heading: "Prueba el enlace final", paragraphs: ["Antes de compartirlo, abre la URL una vez para confirmar que llega a la página correcta y que los parámetros están bien añadidos.", "Esa comprobación pequeña puede evitar errores de campaña fáciles de prevenir."] }] },
      fr: { title: "Comment créer des liens UTM", description: "Créez des URL de campagne plus propres en comprenant les paramètres UTM de base et en les utilisant de façon cohérente.", intro: "Les liens UTM aident les équipes marketing et les propriétaires de sites à comprendre l'origine du trafic en ajoutant quelques paramètres de suivi à une URL.", categoryLabel: "Suivi marketing", useCasesTitle: "Cas d'usage pratiques", useCases: ["Suivre séparément les clics de newsletter et le trafic social.", "Comparer deux emplacements de campagne qui pointent vers la même landing page.", "Uniformiser le nommage des liens dans une petite équipe."], closingTitle: "La cohérence compte plus que la complexité", closingText: "Le meilleur système UTM est souvent le plus simple à répéter sans hésitation par toute l'équipe.", relatedToolLabel: "Créer un lien UTM", sections: [{ heading: "Connaître les paramètres principaux", paragraphs: ["Les champs UTM les plus courants sont source, medium et campaign. À eux trois, ils couvrent déjà beaucoup de besoins de reporting.", "Certaines équipes ajoutent term ou content, mais chaque lien n'a pas besoin de tous les champs."] }, { heading: "Définir une règle de nommage", paragraphs: ["Avant de créer beaucoup de liens, choisissez une convention cohérente pour les minuscules, les séparateurs et les noms de campagne.", "Cette cohérence rend les rapports plus propres et évite des libellés presque identiques."] }, { heading: "Garder des URL lisibles", paragraphs: ["Les liens UTM peuvent vite devenir longs, alors évitez les mots inutiles ou les libellés trop détaillés.", "Un nom de campagne court et clair est souvent plus facile à gérer."] }, { heading: "Tester le lien final", paragraphs: ["Avant de partager l'URL, ouvrez-la une fois pour vérifier qu'elle pointe vers la bonne page et que les paramètres sont corrects.", "Cette petite vérification peut éviter des erreurs de campagne inutiles."] }] },
      de: { title: "So erstellst du UTM-Links", description: "Erzeuge sauberere Kampagnen-URLs, indem du die wichtigsten UTM-Parameter verstehst und konsistent verwendest.", intro: "UTM-Links helfen Marketing-Teams und Website-Betreibern dabei, die Herkunft von Traffic nachzuvollziehen, indem sie einfache Tracking-Parameter an eine URL anhängen.", categoryLabel: "Marketing-Tracking", useCasesTitle: "Praktische Einsatzfälle", useCases: ["Newsletter-Klicks getrennt von Social-Traffic messen.", "Zwei Kampagnen-Platzierungen vergleichen, die auf dieselbe Landingpage zeigen.", "Eine einheitlichere Link-Benennung in kleinen Teams schaffen."], closingTitle: "Konsistenz ist wichtiger als Komplexität", closingText: "Das beste UTM-Setup ist meist ein einfaches System, das dein Team jedes Mal gleich anwenden kann.", relatedToolLabel: "UTM-Link erstellen", sections: [{ heading: "Die Kernparameter kennen", paragraphs: ["Die häufigsten UTM-Felder sind source, medium und campaign. Diese drei decken schon viele alltägliche Reporting-Bedürfnisse ab.", "Manche Teams nutzen zusätzlich term oder content, aber nicht jeder Link braucht jedes Feld."] }, { heading: "Ein Benennungsschema nutzen", paragraphs: ["Bevor du viele Links erzeugst, lege fest, wie ihr Kleinbuchstaben, Trennzeichen und Kampagnennamen verwendet.", "Konsistenz sorgt für sauberere Analysen und vermeidet doppelte oder ähnlich wirkende Labels."] }, { heading: "URLs lesbar halten", paragraphs: ["UTM-Links werden schnell lang. Verzichte deshalb auf unnötige Wörter oder übertrieben detaillierte Bezeichnungen.", "Ein kurzer, klarer Kampagnenname ist meistens leichter zu verwalten."] }, { heading: "Den fertigen Link testen", paragraphs: ["Öffne die URL vor dem Teilen einmal, um zu prüfen, ob sie auf die richtige Seite führt und alle Parameter korrekt angehängt sind.", "Diese kleine Kontrolle verhindert vermeidbare Kampagnenfehler."] }] }
    }
  },
  {
    slug: "json-formatting-basics",
    category: "developer",
    relatedToolSlug: "json-formatter",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    content: {
      en: { title: "JSON Formatting Basics", description: "Learn why formatting JSON matters, how validation helps, and when minified output is useful.", intro: "JSON is easy to read when it is well formatted, but hard to debug when everything is collapsed into one line or contains small syntax mistakes.", categoryLabel: "Developer workflow", useCasesTitle: "Practical use cases", useCases: ["Cleaning API responses before sharing them in team chat or docs.", "Spotting a missing comma or bracket in a configuration file.", "Switching between readable and minified JSON during testing."], closingTitle: "Readable data saves time", closingText: "A small formatting step often makes debugging, reviewing, and sharing JSON much easier for everyone involved.", relatedToolLabel: "Open the JSON Formatter", sections: [{ heading: "Formatting improves readability", paragraphs: ["Indented JSON makes nested objects and arrays much easier to scan. That matters when you are checking keys, values, and overall structure.", "Even a small response becomes easier to discuss once it is properly arranged."] }, { heading: "Validation catches small mistakes", paragraphs: ["A missing comma, quote, or bracket can break the whole structure. Validation helps you find these issues before you move on.", "This is especially useful when pasting payloads into tools, docs, or configuration screens."] }, { heading: "Minified output still has a role", paragraphs: ["Readable formatting is best for editing, but minified JSON is useful when you need compact output for transport, embedding, or quick copying.", "Switching between the two views gives you flexibility without changing the actual data."] }, { heading: "Use consistent formatting in shared work", paragraphs: ["If multiple people touch the same JSON files or examples, consistent formatting reduces friction.", "It also makes diffs, reviews, and troubleshooting easier later."] }] },
      ko: { title: "JSON 포맷팅 기초", description: "왜 JSON 포맷팅이 중요한지, 검증이 어떻게 도움이 되는지, 압축된 출력이 언제 유용한지 설명합니다.", intro: "JSON은 잘 정리되어 있으면 읽기 쉽지만, 한 줄로 뭉쳐 있거나 작은 문법 오류가 있으면 디버깅이 훨씬 어려워집니다.", categoryLabel: "개발 워크플로", useCasesTitle: "실용적인 활용 예시", useCases: ["API 응답을 팀 채팅이나 문서에 공유하기 전에 정리할 때.", "설정 파일에서 빠진 쉼표나 괄호를 찾을 때.", "테스트 중 읽기 쉬운 JSON과 한 줄 JSON을 오갈 때."], closingTitle: "읽기 쉬운 데이터가 시간을 절약합니다", closingText: "짧은 포맷팅 한 번만으로도 JSON을 디버깅하고 검토하고 공유하는 일이 훨씬 쉬워질 수 있습니다.", relatedToolLabel: "JSON 포매터 열기", sections: [{ heading: "포맷팅은 가독성을 높입니다", paragraphs: ["들여쓰기된 JSON은 중첩 객체와 배열을 훨씬 쉽게 파악하게 해 줍니다. 키, 값, 전체 구조를 확인할 때 큰 차이가 납니다.", "작은 응답이라도 정리되어 있으면 팀과 논의하기 편해집니다."] }, { heading: "검증은 작은 실수를 잡아줍니다", paragraphs: ["쉼표, 따옴표, 괄호 하나만 빠져도 전체 구조가 깨질 수 있습니다. 검증은 이런 문제를 먼저 찾는 데 도움이 됩니다.", "툴, 문서, 설정 화면에 JSON을 붙여넣기 전에 특히 유용합니다."] }, { heading: "압축 출력도 쓰임새가 있습니다", paragraphs: ["읽기 좋은 형식은 편집에 좋지만, 압축된 JSON은 전송, 임베딩, 빠른 복사에 더 적합한 경우가 있습니다.", "두 보기 방식을 오가면 데이터 자체를 바꾸지 않고도 유연하게 작업할 수 있습니다."] }, { heading: "공유 작업에서는 형식을 맞추세요", paragraphs: ["여러 사람이 같은 JSON 파일이나 예시를 다루면 일관된 포맷이 마찰을 줄여 줍니다.", "나중에 diff, 리뷰, 문제 해결도 쉬워집니다."] }] },
      ja: { title: "JSON整形の基本", description: "JSON整形が重要な理由、バリデーションの役割、圧縮出力が便利な場面を紹介します。", intro: "JSONはきれいに整形されていると読みやすく、1行に詰まっていたり小さな構文ミスがあったりするとデバッグしにくくなります。", categoryLabel: "開発ワークフロー", useCasesTitle: "活用シーン", useCases: ["APIレスポンスをチーム共有前に読みやすく整えたいとき。", "設定ファイルのカンマや括弧抜けを見つけたいとき。", "テスト中に整形表示と圧縮表示を切り替えたいとき。"], closingTitle: "読みやすいデータは時間を節約する", closingText: "少し整形するだけで、JSONのデバッグ、確認、共有はずっと進めやすくなります。", relatedToolLabel: "JSON Formatterを開く", sections: [{ heading: "整形で読みやすくなる", paragraphs: ["インデントされたJSONは、ネストされたオブジェクトや配列をずっと見やすくします。キーや値、全体構造の確認がしやすくなります。", "小さなレスポンスでも、整形されているだけで話し合いやレビューがしやすくなります。"] }, { heading: "バリデーションで小さなミスを見つける", paragraphs: ["カンマ、引用符、括弧が1つ欠けるだけで全体が壊れることがあります。バリデーションはその前に問題へ気づく助けになります。", "ツールやドキュメント、設定画面へ貼り付ける前に特に便利です。"] }, { heading: "圧縮表示にも役割がある", paragraphs: ["読みやすい整形は編集向きですが、圧縮JSONは転送、埋め込み、素早いコピーに便利です。", "両方を切り替えられると、データ自体を変えずに状況に合わせた扱いができます。"] }, { heading: "共有作業では整形ルールを揃える", paragraphs: ["複数人が同じJSON例やファイルを扱うなら、整形ルールを揃えると作業の摩擦が減ります。", "差分確認やレビュー、後のトラブル対応もしやすくなります。"] }] },
      es: { title: "Conceptos básicos del formateo JSON", description: "Aprende por qué importa formatear JSON, cómo ayuda la validación y cuándo sirve la salida minificada.", intro: "JSON es fácil de leer cuando está bien formateado, pero difícil de depurar cuando todo está en una sola línea o contiene pequeños errores de sintaxis.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Casos de uso prácticos", useCases: ["Limpiar respuestas de API antes de compartirlas en chat o documentación.", "Detectar una coma o llave faltante en un archivo de configuración.", "Alternar entre JSON legible y minificado durante pruebas."], closingTitle: "Los datos legibles ahorran tiempo", closingText: "Un pequeño paso de formateo suele hacer mucho más fácil depurar, revisar y compartir JSON.", relatedToolLabel: "Abrir el formateador JSON", sections: [{ heading: "El formato mejora la lectura", paragraphs: ["Un JSON con sangría facilita revisar objetos y arrays anidados. Eso importa cuando estás comprobando claves, valores y estructura general.", "Incluso una respuesta pequeña se vuelve más fácil de comentar cuando está bien organizada."] }, { heading: "La validación detecta errores pequeños", paragraphs: ["Una coma, comilla o llave faltante puede romper toda la estructura. La validación ayuda a encontrar ese tipo de problema antes de seguir.", "Es especialmente útil al pegar payloads en herramientas, docs o pantallas de configuración."] }, { heading: "La salida minificada también sirve", paragraphs: ["El formato legible es mejor para editar, pero JSON minificado es útil cuando necesitas una salida compacta para transporte, incrustación o copia rápida.", "Cambiar entre ambas vistas te da flexibilidad sin modificar los datos."] }, { heading: "Usa formato consistente en trabajo compartido", paragraphs: ["Si varias personas tocan los mismos archivos o ejemplos JSON, un formato consistente reduce fricción.", "También facilita diffs, revisiones y resolución de problemas más adelante."] }] },
      fr: { title: "Les bases du formatage JSON", description: "Comprenez pourquoi le formatage JSON compte, comment la validation aide et quand la version minifiée est utile.", intro: "Le JSON est facile à lire lorsqu'il est bien formaté, mais difficile à déboguer quand tout est sur une seule ligne ou contient de petites erreurs de syntaxe.", categoryLabel: "Workflow développeur", useCasesTitle: "Cas d'usage pratiques", useCases: ["Nettoyer des réponses d'API avant de les partager dans un chat ou une documentation.", "Repérer une virgule ou une accolade manquante dans un fichier de configuration.", "Basculer entre un JSON lisible et minifié pendant des tests."], closingTitle: "Des données lisibles font gagner du temps", closingText: "Une simple étape de formatage facilite souvent le débogage, la relecture et le partage de JSON.", relatedToolLabel: "Ouvrir le formateur JSON", sections: [{ heading: "Le formatage améliore la lisibilité", paragraphs: ["Un JSON indenté rend les objets et tableaux imbriqués beaucoup plus faciles à parcourir. C'est utile pour vérifier les clés, les valeurs et la structure.", "Même une petite réponse devient plus simple à relire et à commenter une fois bien présentée."] }, { heading: "La validation repère les petites erreurs", paragraphs: ["Une virgule, un guillemet ou une accolade manquante peut casser toute la structure. La validation aide à repérer cela avant d'aller plus loin.", "C'est particulièrement utile avant de coller un payload dans un outil, une doc ou un écran de configuration."] }, { heading: "La version minifiée garde son intérêt", paragraphs: ["Le format lisible est idéal pour éditer, mais la version minifiée reste pratique pour le transport, l'intégration ou une copie rapide.", "Passer de l'un à l'autre apporte de la souplesse sans changer les données."] }, { heading: "Gardez une présentation cohérente", paragraphs: ["Si plusieurs personnes manipulent les mêmes fichiers ou exemples JSON, un format cohérent réduit les frictions.", "Cela aide aussi pour les diffs, les revues et le dépannage plus tard."] }] },
      de: { title: "Grundlagen der JSON-Formatierung", description: "Lerne, warum JSON-Formatierung wichtig ist, wie Validierung hilft und wann minifizierte Ausgabe nützlich ist.", intro: "JSON ist leicht lesbar, wenn es sauber formatiert ist, aber schwer zu debuggen, wenn alles in einer Zeile steht oder kleine Syntaxfehler enthält.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Praktische Einsatzfälle", useCases: ["API-Antworten bereinigen, bevor du sie im Team-Chat oder in Dokus teilst.", "Ein fehlendes Komma oder eine Klammer in einer Konfigurationsdatei finden.", "Beim Testen zwischen lesbarem und minifiziertem JSON wechseln."], closingTitle: "Lesbare Daten sparen Zeit", closingText: "Schon ein kleiner Formatierungsschritt macht JSON oft deutlich einfacher zu debuggen, zu prüfen und zu teilen.", relatedToolLabel: "JSON-Formatter öffnen", sections: [{ heading: "Formatierung verbessert die Lesbarkeit", paragraphs: ["Eingerücktes JSON macht verschachtelte Objekte und Arrays viel leichter erfassbar. Das hilft beim Prüfen von Schlüsseln, Werten und Struktur.", "Selbst kleine Antworten lassen sich so besser besprechen."] }, { heading: "Validierung findet kleine Fehler", paragraphs: ["Ein fehlendes Komma, Anführungszeichen oder eine Klammer kann die gesamte Struktur ungültig machen. Validierung hilft, das früh zu erkennen.", "Das ist besonders nützlich, bevor du Daten in Tools, Dokus oder Konfigurationsmasken einfügst."] }, { heading: "Auch minifizierte Ausgabe hat ihren Platz", paragraphs: ["Lesbares JSON ist ideal zum Bearbeiten, aber minifiziertes JSON eignet sich für kompakten Transport, Einbettung oder schnelles Kopieren.", "Zwischen beiden Ansichten zu wechseln gibt dir Flexibilität, ohne die Daten zu verändern."] }, { heading: "Im Team konsistent formatieren", paragraphs: ["Wenn mehrere Personen dieselben JSON-Dateien oder Beispiele bearbeiten, reduziert ein einheitliches Format Reibung.", "Auch Diffs, Reviews und spätere Fehlersuche werden einfacher."] }] }
    }
  }
];

export function getGuidesIndexMessages(locale: LocaleCode) {
  return guidesIndexMessages[locale];
}

export function getAllGuideSlugs(): GuideSlug[] {
  return guideDefinitions.map((guide) => guide.slug);
}

export function getGuides(locale: LocaleCode): GuideItem[] {
  return guideDefinitions.map((guide) => ({
    slug: guide.slug,
    category: guide.category,
    relatedToolSlug: guide.relatedToolSlug,
    publishedAt: guide.publishedAt,
    updatedAt: guide.updatedAt,
    content: guide.content[locale]
  }));
}

export function getGuide(locale: LocaleCode, slug: string): GuideItem | undefined {
  const match = guideDefinitions.find((guide) => guide.slug === slug);

  if (!match) {
    return undefined;
  }

  return {
    slug: match.slug,
    category: match.category,
    relatedToolSlug: match.relatedToolSlug,
    publishedAt: match.publishedAt,
    updatedAt: match.updatedAt,
    content: match.content[locale]
  };
}

export function getRelatedGuides(locale: LocaleCode, slug: string, limit = 2): GuideItem[] {
  const currentGuide = getGuide(locale, slug);

  if (!currentGuide) {
    return [];
  }

  return getGuides(locale)
    .filter((guide) => guide.slug !== slug && guide.category === currentGuide.category)
    .slice(0, limit);
}

export function getGuideRelatedTool(locale: LocaleCode, slug: string) {
  const guide = getGuide(locale, slug);

  if (!guide?.relatedToolSlug) {
    return undefined;
  }

  return getTool(locale, guide.relatedToolSlug);
}
