import type { LocaleCode } from "@/data/locales";
import type { ToolCategory } from "@/data/tools";

export type CategoryPageSlug = "color-image" | "web-marketing" | "developer-tools";

export const categorySlugToToolCategory: Record<CategoryPageSlug, ToolCategory> = {
  "color-image": "color-image",
  "web-marketing": "web-marketing",
  "developer-tools": "developer"
};

export const toolCategoryToCategorySlug: Record<ToolCategory, CategoryPageSlug> = {
  "color-image": "color-image",
  "web-marketing": "web-marketing",
  developer: "developer-tools"
};

type HomeSectionItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type CategoryUi = {
  metadataTitle: string;
  metadataDescription: string;
  introTitle: string;
  highlightsTitle: string;
  highlights: string[];
  toolsTitle: string;
  guidesTitle: string;
  guidesEmpty: string;
  relatedLinksTitle: string;
  categoryCta: string;
  allToolsLabel: string;
  allGuidesLabel: string;
  relatedCategoriesLabel: string;
};

type TrustUi = {
  informationLabel: string;
  aboutHighlightsTitle: string;
  aboutHighlights: string[];
  aboutQuickLinksTitle: string;
  contactSupportLabel: string;
  contactHelpTitle: string;
  contactHelpItems: string[];
  contactBeforeTitle: string;
  contactBeforeItems: string[];
  contactQuickLinksTitle: string;
};

type HomeUi = {
  secondaryCta: string;
  trustNote: string;
  whyEyebrow: string;
  whyTitle: string;
  whyDescription: string;
  whyItems: HomeSectionItem[];
  howEyebrow: string;
  howTitle: string;
  howDescription: string;
  howItems: HomeSectionItem[];
  guidesEyebrow: string;
  guidesTitle: string;
  guidesDescription: string;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqs: FaqItem[];
};

type ExperienceContent = {
  home: HomeUi;
  category: CategoryUi;
  trust: TrustUi;
};

const content: Record<LocaleCode, ExperienceContent> = {
  en: {
    home: {
      secondaryCta: "Browse guides",
      trustNote: "Built for simple browser tasks, clear navigation, and practical multilingual pages.",
      whyEyebrow: "Why use this site",
      whyTitle: "Useful tools without extra setup",
      whyDescription: "The goal is to help visitors finish common web tasks quickly with readable pages and lightweight tools.",
      whyItems: [
        { title: "Beginner-friendly", description: "Simple copy and focused layouts keep small tasks approachable." },
        { title: "Made for real workflows", description: "The collection supports image, web, marketing, and developer tasks that come up often." },
        { title: "Trust-oriented", description: "Guides and support pages help explain what the site offers and how to use it responsibly." }
      ],
      howEyebrow: "How this site helps",
      howTitle: "Find the right page faster",
      howDescription: "Visitors can move from overview to category, guide, and tool without hunting through the site.",
      howItems: [
        { title: "Browse by category", description: "Start with Color & Image, Web & Marketing, or Developer Tools." },
        { title: "Read a short guide", description: "Use guide pages when you want context before trying a tool." },
        { title: "Open a focused tool", description: "Each tool page stays centered on one practical task." }
      ],
      guidesEyebrow: "Guides",
      guidesTitle: "Learn the basics before you click",
      guidesDescription: "Short guides add context for image formats, marketing links, and developer workflows.",
      faqEyebrow: "FAQ",
      faqTitle: "Quick answers for first-time visitors",
      faqDescription: "A little guidance helps the site feel clearer and more trustworthy.",
      faqs: [
        { question: "Do I need an account?", answer: "No. The site focuses on simple browser-based tools and public support pages." },
        { question: "Can I explore by topic?", answer: "Yes. Category landing pages group related tools and guides by workflow." },
        { question: "Are there guides as well as tools?", answer: "Yes. Guides explain the basics and link directly to relevant tools." }
      ]
    },
    category: {
      metadataTitle: "Category tools and guides",
      metadataDescription: "Explore useful tools, guides, and internal links for this category.",
      introTitle: "Category overview",
      highlightsTitle: "Why this category is useful",
      highlights: ["Useful for quick browser tasks.", "Links tools and guides together.", "Designed to stay readable for beginners."],
      toolsTitle: "Tools in this category",
      guidesTitle: "Related guides",
      guidesEmpty: "More guides for this category can be added over time.",
      relatedLinksTitle: "Keep exploring",
      categoryCta: "Open category",
      allToolsLabel: "All tools",
      allGuidesLabel: "All guides",
      relatedCategoriesLabel: "Related categories"
    },
    trust: {
      informationLabel: "Information",
      aboutHighlightsTitle: "What visitors can expect",
      aboutHighlights: [
        "Practical browser tools for common tasks.",
        "Short guides that explain common workflows.",
        "A simple independent project focused on clarity."
      ],
      aboutQuickLinksTitle: "Useful next steps",
      contactSupportLabel: "Support",
      contactHelpTitle: "Common reasons to get in touch",
      contactHelpItems: ["Report a broken tool.", "Flag a translation issue.", "Suggest a useful improvement."],
      contactBeforeTitle: "Before you send a message",
      contactBeforeItems: ["Share the page URL or tool name.", "Describe what you expected to happen.", "Do not include sensitive information."],
      contactQuickLinksTitle: "Helpful pages first"
    }
  },
  ko: {
    home: {
      secondaryCta: "가이드 보기",
      trustNote: "간단한 브라우저 작업, 명확한 탐색, 실용적인 다국어 페이지를 목표로 구성했습니다.",
      whyEyebrow: "왜 이 사이트를 쓰나요",
      whyTitle: "추가 설정 없이 바로 쓰는 도구",
      whyDescription: "읽기 쉬운 페이지와 가벼운 도구로 자주 하는 웹 작업을 더 빨리 끝내도록 돕습니다.",
      whyItems: [
        { title: "초보자 친화적", description: "단순한 문구와 집중된 화면으로 작은 작업도 쉽게 처리할 수 있습니다." },
        { title: "실무에 맞춤", description: "이미지, 웹, 마케팅, 개발 작업처럼 자주 반복되는 흐름을 지원합니다." },
        { title: "신뢰를 돕는 구조", description: "가이드와 안내 페이지가 사이트 목적과 사용 방식을 설명합니다." }
      ],
      howEyebrow: "이 사이트가 돕는 방식",
      howTitle: "맞는 페이지를 더 빨리 찾기",
      howDescription: "홈페이지에서 카테고리, 가이드, 도구로 자연스럽게 이동할 수 있습니다.",
      howItems: [
        { title: "카테고리로 시작", description: "색상 & 이미지, 웹 & 마케팅, 개발 도구에서 시작하세요." },
        { title: "짧은 가이드 읽기", description: "도구를 쓰기 전에 배경 설명이 필요하면 가이드를 확인하세요." },
        { title: "집중된 도구 열기", description: "각 도구 페이지는 한 가지 실용 작업에 집중합니다." }
      ],
      guidesEyebrow: "가이드",
      guidesTitle: "클릭하기 전에 기본을 이해하세요",
      guidesDescription: "이미지 형식, 마케팅 링크, 개발 작업의 기본 맥락을 짧게 설명합니다.",
      faqEyebrow: "FAQ",
      faqTitle: "처음 방문한 사용자를 위한 짧은 답변",
      faqDescription: "간단한 안내만으로도 사이트가 더 분명하고 신뢰감 있게 느껴집니다.",
      faqs: [
        { question: "계정이 필요한가요?", answer: "아니요. 이 사이트는 브라우저 기반 도구와 공개 안내 페이지 중심입니다." },
        { question: "주제별로 탐색할 수 있나요?", answer: "네. 카테고리 페이지에서 관련 도구와 가이드를 함께 볼 수 있습니다." },
        { question: "도구 외에 가이드도 있나요?", answer: "네. 가이드는 기본 개념을 설명하고 관련 도구로 연결합니다." }
      ]
    },
    category: {
      metadataTitle: "카테고리 도구와 가이드",
      metadataDescription: "이 카테고리의 실용 도구, 가이드, 내부 링크를 확인하세요.",
      introTitle: "카테고리 소개",
      highlightsTitle: "이 카테고리가 유용한 이유",
      highlights: ["빠른 브라우저 작업에 적합합니다.", "도구와 가이드를 함께 연결합니다.", "초보자도 읽기 쉽게 구성했습니다."],
      toolsTitle: "이 카테고리의 도구",
      guidesTitle: "관련 가이드",
      guidesEmpty: "이 카테고리용 가이드는 앞으로 더 추가될 수 있습니다.",
      relatedLinksTitle: "계속 둘러보기",
      categoryCta: "카테고리 열기",
      allToolsLabel: "전체 도구",
      allGuidesLabel: "전체 가이드",
      relatedCategoriesLabel: "관련 카테고리"
    },
    trust: {
      informationLabel: "안내",
      aboutHighlightsTitle: "방문자가 기대할 수 있는 점",
      aboutHighlights: ["자주 쓰는 작업을 위한 브라우저 도구.", "짧고 실용적인 워크플로 가이드.", "명확함을 중시하는 단순한 독립 프로젝트."],
      aboutQuickLinksTitle: "다음에 보기 좋은 페이지",
      contactSupportLabel: "지원",
      contactHelpTitle: "문의하기 좋은 대표 사례",
      contactHelpItems: ["도구 오류 제보", "번역 문제 알림", "실용적인 개선 제안"],
      contactBeforeTitle: "문의 전에 확인하면 좋은 점",
      contactBeforeItems: ["페이지 URL이나 도구 이름을 알려 주세요.", "기대한 결과와 실제 상황을 간단히 적어 주세요.", "민감한 정보는 보내지 마세요."],
      contactQuickLinksTitle: "먼저 보면 좋은 페이지"
    }
  },
  ja: {
    home: {
      secondaryCta: "ガイドを見る",
      trustNote: "シンプルなブラウザ作業、わかりやすい導線、実用的な多言語ページを意識しています。",
      whyEyebrow: "このサイトを使う理由",
      whyTitle: "余計な設定なしで使えるツール",
      whyDescription: "読みやすいページと軽いツールで、よくあるWeb作業をすばやく進めやすくします。",
      whyItems: [
        { title: "初心者にもわかりやすい", description: "短い説明と整理された画面で小さな作業にも取り組みやすくしています。" },
        { title: "実務で使いやすい", description: "画像、Web、マーケティング、開発のよくある流れを支えます。" },
        { title: "信頼につながる構成", description: "ガイドや案内ページがサイトの目的と使い方を伝えます。" }
      ],
      howEyebrow: "このサイトの使い方",
      howTitle: "必要なページを見つけやすくする",
      howDescription: "ホームからカテゴリ、ガイド、ツールへ自然に移動できる構成です。",
      howItems: [
        { title: "カテゴリから始める", description: "カラー & 画像、Web & マーケティング、開発ツールから選べます。" },
        { title: "短いガイドを読む", description: "背景を知ってから使いたいときはガイドが役立ちます。" },
        { title: "目的のツールを開く", description: "各ツールページは一つの実用作業に集中しています。" }
      ],
      guidesEyebrow: "ガイド",
      guidesTitle: "使う前に基本を理解する",
      guidesDescription: "画像形式、マーケティングリンク、開発作業の基本的な背景を短く説明します。",
      faqEyebrow: "FAQ",
      faqTitle: "初めての訪問者向けの簡単な回答",
      faqDescription: "少し案内があるだけでも、サイトがよりわかりやすく安心感のあるものになります。",
      faqs: [
        { question: "アカウントは必要ですか。", answer: "不要です。ブラウザツールと公開案内ページを中心にしています。" },
        { question: "テーマ別に探せますか。", answer: "はい。カテゴリページで関連ツールとガイドをまとめて見られます。" },
        { question: "ツール以外にガイドもありますか。", answer: "あります。ガイドが基本を説明し、関連ツールへつなげます。" }
      ]
    },
    category: {
      metadataTitle: "カテゴリのツールとガイド",
      metadataDescription: "このカテゴリにある実用ツール、ガイド、内部リンクを確認できます。",
      introTitle: "カテゴリ概要",
      highlightsTitle: "このカテゴリが役立つ理由",
      highlights: ["素早いブラウザ作業に向いています。", "ツールとガイドをまとめて案内します。", "初心者にも読みやすい構成です。"],
      toolsTitle: "このカテゴリのツール",
      guidesTitle: "関連ガイド",
      guidesEmpty: "このカテゴリ向けのガイドは今後さらに追加できます。",
      relatedLinksTitle: "さらに見る",
      categoryCta: "カテゴリを開く",
      allToolsLabel: "すべてのツール",
      allGuidesLabel: "すべてのガイド",
      relatedCategoriesLabel: "関連カテゴリ"
    },
    trust: {
      informationLabel: "案内",
      aboutHighlightsTitle: "訪問者が期待できること",
      aboutHighlights: ["よくある作業に役立つブラウザツール。", "短く実用的なワークフローガイド。", "わかりやすさを大切にする小さな独立プロジェクト。"],
      aboutQuickLinksTitle: "次に見やすいページ",
      contactSupportLabel: "サポート",
      contactHelpTitle: "問い合わせしやすい内容",
      contactHelpItems: ["ツールの不具合報告", "翻訳の問題の連絡", "実用的な改善案の提案"],
      contactBeforeTitle: "送信前にあると助かる情報",
      contactBeforeItems: ["ページURLかツール名を添えてください。", "期待した結果と実際の状況を簡単に書いてください。", "機密情報は送らないでください。"],
      contactQuickLinksTitle: "先に見ておくと役立つページ"
    }
  },
  es: {
    home: {
      secondaryCta: "Ver guías",
      trustNote: "Pensado para tareas simples en el navegador, navegación clara y páginas prácticas en varios idiomas.",
      whyEyebrow: "Por qué usar este sitio",
      whyTitle: "Herramientas útiles sin configuración extra",
      whyDescription: "Ayuda a resolver tareas web comunes con páginas legibles y utilidades ligeras.",
      whyItems: [
        { title: "Amigable para principiantes", description: "Los textos simples y los diseños claros hacen más accesibles las tareas pequeñas." },
        { title: "Hecho para flujos reales", description: "La colección apoya tareas frecuentes de imagen, web, marketing y desarrollo." },
        { title: "Orientado a la confianza", description: "Las guías y páginas de soporte explican qué ofrece el sitio y cómo usarlo." }
      ],
      howEyebrow: "Cómo ayuda este sitio",
      howTitle: "Encontrar la página correcta más rápido",
      howDescription: "Se puede pasar de la vista general a la categoría, guía y herramienta sin perderse.",
      howItems: [
        { title: "Explora por categoría", description: "Empieza por Color e Imagen, Web y Marketing o Desarrollo." },
        { title: "Lee una guía corta", description: "Las guías añaden contexto antes de probar una herramienta." },
        { title: "Abre una herramienta concreta", description: "Cada herramienta se centra en una tarea práctica." }
      ],
      guidesEyebrow: "Guías",
      guidesTitle: "Aprende lo básico antes de usar",
      guidesDescription: "Las guías cortas explican formatos de imagen, enlaces de marketing y flujos de desarrollo.",
      faqEyebrow: "FAQ",
      faqTitle: "Respuestas rápidas para quien llega por primera vez",
      faqDescription: "Un poco de orientación hace que el sitio se sienta más claro y confiable.",
      faqs: [
        { question: "¿Necesito cuenta?", answer: "No. El sitio se centra en herramientas simples en el navegador y páginas públicas de ayuda." },
        { question: "¿Puedo explorar por tema?", answer: "Sí. Las páginas de categoría agrupan herramientas y guías relacionadas." },
        { question: "¿Hay guías además de herramientas?", answer: "Sí. Las guías explican lo básico y enlazan con herramientas relevantes." }
      ]
    },
    category: {
      metadataTitle: "Herramientas y guías por categoría",
      metadataDescription: "Explora herramientas útiles, guías y enlaces internos para esta categoría.",
      introTitle: "Resumen de la categoría",
      highlightsTitle: "Por qué esta categoría es útil",
      highlights: ["Sirve para tareas rápidas en el navegador.", "Une herramientas y guías.", "Está pensada para leerse con facilidad."],
      toolsTitle: "Herramientas de esta categoría",
      guidesTitle: "Guías relacionadas",
      guidesEmpty: "Con el tiempo se pueden añadir más guías para esta categoría.",
      relatedLinksTitle: "Seguir explorando",
      categoryCta: "Abrir categoría",
      allToolsLabel: "Todas las herramientas",
      allGuidesLabel: "Todas las guías",
      relatedCategoriesLabel: "Categorías relacionadas"
    },
    trust: {
      informationLabel: "Información",
      aboutHighlightsTitle: "Qué pueden esperar los visitantes",
      aboutHighlights: ["Herramientas prácticas para tareas comunes.", "Guías cortas sobre flujos frecuentes.", "Un proyecto independiente centrado en la claridad."],
      aboutQuickLinksTitle: "Siguientes pasos útiles",
      contactSupportLabel: "Soporte",
      contactHelpTitle: "Motivos comunes para escribir",
      contactHelpItems: ["Reportar una herramienta rota.", "Avisar de un problema de traducción.", "Sugerir una mejora útil."],
      contactBeforeTitle: "Antes de enviar un mensaje",
      contactBeforeItems: ["Comparte la URL o el nombre de la herramienta.", "Describe qué esperabas que ocurriera.", "No incluyas información sensible."],
      contactQuickLinksTitle: "Páginas útiles primero"
    }
  },
  fr: {
    home: {
      secondaryCta: "Voir les guides",
      trustNote: "Pensé pour des tâches simples dans le navigateur, une navigation claire et des pages pratiques en plusieurs langues.",
      whyEyebrow: "Pourquoi utiliser ce site",
      whyTitle: "Des outils utiles sans configuration inutile",
      whyDescription: "Le site aide à terminer des tâches web courantes avec des pages lisibles et des outils légers.",
      whyItems: [
        { title: "Accessible aux débutants", description: "Des textes simples et des mises en page claires rendent les petites tâches plus faciles." },
        { title: "Pensé pour de vrais workflows", description: "La collection aide sur des besoins fréquents en image, web, marketing et développement." },
        { title: "Orienté confiance", description: "Les guides et pages d'information expliquent ce que le site propose et comment l'utiliser." }
      ],
      howEyebrow: "Comment le site aide",
      howTitle: "Trouver la bonne page plus vite",
      howDescription: "On peut passer de la vue d'ensemble à la catégorie, au guide puis à l'outil sans se perdre.",
      howItems: [
        { title: "Parcourir par catégorie", description: "Commencez par Couleur & Image, Web & Marketing ou Développeur." },
        { title: "Lire un guide court", description: "Les guides donnent du contexte avant d'utiliser un outil." },
        { title: "Ouvrir un outil ciblé", description: "Chaque outil reste centré sur une tâche pratique." }
      ],
      guidesEyebrow: "Guides",
      guidesTitle: "Comprendre les bases avant d'utiliser",
      guidesDescription: "Les guides courts ajoutent du contexte sur les formats d'image, les liens marketing et les workflows développeur.",
      faqEyebrow: "FAQ",
      faqTitle: "Réponses rapides pour une première visite",
      faqDescription: "Quelques repères simples rendent le site plus clair et plus rassurant.",
      faqs: [
        { question: "Faut-il un compte ?", answer: "Non. Le site se concentre sur des outils simples dans le navigateur et des pages d'information publiques." },
        { question: "Puis-je explorer par thème ?", answer: "Oui. Les pages de catégorie regroupent les outils et guides liés." },
        { question: "Y a-t-il des guides en plus des outils ?", answer: "Oui. Les guides expliquent les bases et renvoient aux outils pertinents." }
      ]
    },
    category: {
      metadataTitle: "Outils et guides de catégorie",
      metadataDescription: "Explorez des outils utiles, des guides et des liens internes pour cette catégorie.",
      introTitle: "Vue d'ensemble de la catégorie",
      highlightsTitle: "Pourquoi cette catégorie est utile",
      highlights: ["Pratique pour des tâches rapides dans le navigateur.", "Relie outils et guides.", "Reste lisible pour les débutants."],
      toolsTitle: "Outils de cette catégorie",
      guidesTitle: "Guides associés",
      guidesEmpty: "D'autres guides pour cette catégorie pourront être ajoutés progressivement.",
      relatedLinksTitle: "Continuer l'exploration",
      categoryCta: "Ouvrir la catégorie",
      allToolsLabel: "Tous les outils",
      allGuidesLabel: "Tous les guides",
      relatedCategoriesLabel: "Catégories associées"
    },
    trust: {
      informationLabel: "Information",
      aboutHighlightsTitle: "Ce que les visiteurs peuvent attendre",
      aboutHighlights: ["Des outils pratiques pour des tâches courantes.", "Des guides courts sur des workflows fréquents.", "Un petit projet indépendant centré sur la clarté."],
      aboutQuickLinksTitle: "Étapes utiles ensuite",
      contactSupportLabel: "Support",
      contactHelpTitle: "Raisons fréquentes de contacter le site",
      contactHelpItems: ["Signaler un outil cassé.", "Remonter un problème de traduction.", "Suggérer une amélioration utile."],
      contactBeforeTitle: "Avant d'envoyer un message",
      contactBeforeItems: ["Partagez l'URL de la page ou le nom de l'outil.", "Expliquez brièvement ce que vous attendiez.", "N'envoyez pas d'information sensible."],
      contactQuickLinksTitle: "Pages utiles d'abord"
    }
  },
  de: {
    home: {
      secondaryCta: "Guides ansehen",
      trustNote: "Gedacht für einfache Browser-Aufgaben, klare Navigation und praktische Seiten in mehreren Sprachen.",
      whyEyebrow: "Warum diese Website nutzen",
      whyTitle: "Nützliche Tools ohne extra Einrichtung",
      whyDescription: "Die Seite hilft bei typischen Web-Aufgaben mit gut lesbaren Seiten und leichten Tools.",
      whyItems: [
        { title: "Einsteigerfreundlich", description: "Einfache Texte und klare Layouts machen kleine Aufgaben zugänglicher." },
        { title: "Für echte Workflows gemacht", description: "Die Sammlung unterstützt häufige Aufgaben rund um Bild, Web, Marketing und Entwicklung." },
        { title: "Vertrauensorientiert", description: "Guides und Hilfeseiten erklären, was die Website bietet und wie man sie nutzt." }
      ],
      howEyebrow: "So hilft die Website",
      howTitle: "Die richtige Seite schneller finden",
      howDescription: "Von der Übersicht geht es ohne Umwege zu Kategorie, Guide und Tool.",
      howItems: [
        { title: "Nach Kategorie starten", description: "Beginne mit Farbe & Bild, Web & Marketing oder Entwickler-Tools." },
        { title: "Einen kurzen Guide lesen", description: "Guides geben Kontext, bevor du ein Tool ausprobierst." },
        { title: "Ein fokussiertes Tool öffnen", description: "Jedes Tool konzentriert sich auf eine praktische Aufgabe." }
      ],
      guidesEyebrow: "Guides",
      guidesTitle: "Erst die Grundlagen verstehen",
      guidesDescription: "Kurze Guides geben Kontext zu Bildformaten, Marketing-Links und Entwickler-Workflows.",
      faqEyebrow: "FAQ",
      faqTitle: "Kurze Antworten für den ersten Besuch",
      faqDescription: "Etwas Orientierung macht die Website klarer und vertrauenswürdiger.",
      faqs: [
        { question: "Brauche ich ein Konto?", answer: "Nein. Die Website setzt auf einfache Browser-Tools und öffentliche Hilfeseiten." },
        { question: "Kann ich nach Thema stöbern?", answer: "Ja. Kategorie-Seiten bündeln passende Tools und Guides." },
        { question: "Gibt es Guides neben den Tools?", answer: "Ja. Guides erklären Grundlagen und verlinken zu relevanten Tools." }
      ]
    },
    category: {
      metadataTitle: "Kategorie-Tools und Guides",
      metadataDescription: "Entdecke nützliche Tools, Guides und interne Links für diese Kategorie.",
      introTitle: "Kategorieüberblick",
      highlightsTitle: "Warum diese Kategorie nützlich ist",
      highlights: ["Praktisch für schnelle Browser-Aufgaben.", "Verbindet Tools und Guides.", "Gut lesbar auch für Einsteiger."],
      toolsTitle: "Tools in dieser Kategorie",
      guidesTitle: "Passende Guides",
      guidesEmpty: "Mit der Zeit können weitere Guides für diese Kategorie ergänzt werden.",
      relatedLinksTitle: "Weiter entdecken",
      categoryCta: "Kategorie öffnen",
      allToolsLabel: "Alle Tools",
      allGuidesLabel: "Alle Guides",
      relatedCategoriesLabel: "Verwandte Kategorien"
    },
    trust: {
      informationLabel: "Information",
      aboutHighlightsTitle: "Was Besucher erwarten können",
      aboutHighlights: ["Praktische Tools für häufige Aufgaben.", "Kurze Guides zu typischen Workflows.", "Ein kleines unabhängiges Projekt mit Fokus auf Klarheit."],
      aboutQuickLinksTitle: "Sinnvolle nächste Schritte",
      contactSupportLabel: "Support",
      contactHelpTitle: "Häufige Gründe für eine Nachricht",
      contactHelpItems: ["Ein defektes Tool melden.", "Ein Übersetzungsproblem melden.", "Eine nützliche Verbesserung vorschlagen."],
      contactBeforeTitle: "Vor dem Schreiben",
      contactBeforeItems: ["Teile die Seiten-URL oder den Tool-Namen.", "Beschreibe kurz, was du erwartet hast.", "Sende keine sensiblen Informationen."],
      contactQuickLinksTitle: "Hilfreiche Seiten zuerst"
    }
  }
};

export function getSiteExperience(locale: LocaleCode) {
  return content[locale] ?? content.en;
}
