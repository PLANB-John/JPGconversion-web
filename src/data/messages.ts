import { defaultLocale, type LocaleCode } from "@/data/locales";
import { type ToolCategory, type ToolStatus } from "@/data/tools";

type MessageShape = {
  metadata: {
    siteDescription: string;
    homeTitle: string;
    homeDescription: string;
    toolsTitle: string;
    toolsDescription: string;
  };
  nav: {
    brand: string;
    home: string;
    tools: string;
    languageLabel: string;
    languageAriaLabel: string;
    currentLanguagePrefix: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDescription: string;
    categoriesEyebrow: string;
    categoriesTitle: string;
    categoriesDescription: string;
    categoryCardDescription: string;
    announcement: string;
  };
  tools: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    note: string;
  };
  tool: {
    status: Record<ToolStatus, string>;
    categories: Record<ToolCategory, string>;
  };
};

const messages: Record<LocaleCode, MessageShape> = {
  en: {
    metadata: {
      siteDescription: "A growing collection of clean, practical web tools for creators, marketers, and developers.",
      homeTitle: "Home",
      homeDescription: "Discover modern online tools for color, image, marketing, and developer workflows.",
      toolsTitle: "Tools",
      toolsDescription: "Browse all available and upcoming tools grouped by category."
    },
    nav: {
      brand: "Global Tools Hub",
      home: "Home",
      tools: "Tools",
      languageLabel: "Language",
      languageAriaLabel: "Language selector",
      currentLanguagePrefix: "Current language"
    },
    home: {
      eyebrow: "Global Tools Website",
      title: "Simple tools for your everyday web workflow",
      description: "Explore a growing library of practical utilities for image editing, marketing tasks, and development helpers.",
      cta: "Explore All Tools",
      featuredEyebrow: "Featured",
      featuredTitle: "Featured tools",
      featuredDescription: "Start with these highlighted tools. We will keep adding more based on real user needs.",
      categoriesEyebrow: "Categories",
      categoriesTitle: "Browse by category",
      categoriesDescription: "Our tool collection is organized to stay clear now and scalable for future multilingual expansion.",
      categoryCardDescription: "Useful utilities in {category}.",
      announcement: "New tools are being added step by step. Check back often for updates."
    },
    tools: {
      eyebrow: "All Tools",
      title: "Explore tools by category",
      description: "A clear list of current and upcoming tools. Start with available tools, and track what is coming next."
    },
    footer: {
      copyright: "Global Tools Hub",
      note: "More practical web tools are coming step by step."
    },
    tool: {
      status: {
        Available: "Available",
        "Coming Soon": "Coming Soon"
      },
      categories: {
        "color-image": "Color & Image",
        "web-marketing": "Web & Marketing",
        developer: "Developer Tools"
      }
    }
  },
  ko: {
    metadata: {
      siteDescription: "크리에이터, 마케터, 개발자를 위한 실용적인 웹 도구 모음입니다.",
      homeTitle: "홈",
      homeDescription: "색상, 이미지, 마케팅, 개발 워크플로를 위한 온라인 도구를 만나보세요.",
      toolsTitle: "도구",
      toolsDescription: "카테고리별로 제공 예정 도구와 사용 가능한 도구를 확인하세요."
    },
    nav: {
      brand: "글로벌 툴 허브",
      home: "홈",
      tools: "도구",
      languageLabel: "언어",
      languageAriaLabel: "언어 선택기",
      currentLanguagePrefix: "현재 언어"
    },
    home: {
      eyebrow: "글로벌 도구 웹사이트",
      title: "매일의 웹 작업을 위한 간단한 도구",
      description: "이미지 편집, 마케팅 업무, 개발 작업에 유용한 도구를 계속 추가하고 있습니다.",
      cta: "전체 도구 보기",
      featuredEyebrow: "추천",
      featuredTitle: "추천 도구",
      featuredDescription: "많이 찾는 도구부터 먼저 확인해보세요. 실제 사용자 요구에 맞춰 계속 확장합니다.",
      categoriesEyebrow: "카테고리",
      categoriesTitle: "카테고리별 탐색",
      categoriesDescription: "현재는 단순하게, 앞으로는 다국어 확장에 맞게 구조를 준비했습니다.",
      categoryCardDescription: "{category} 관련 유틸리티를 확인해보세요.",
      announcement: "새로운 도구를 순차적으로 추가하고 있습니다. 자주 방문해 주세요."
    },
    tools: {
      eyebrow: "전체 도구",
      title: "카테고리별 도구 둘러보기",
      description: "현재 제공 중인 도구와 준비 중인 도구를 한눈에 확인할 수 있습니다."
    },
    footer: {
      copyright: "글로벌 툴 허브",
      note: "더 많은 실용적인 웹 도구가 곧 추가됩니다."
    },
    tool: {
      status: {
        Available: "사용 가능",
        "Coming Soon": "출시 예정"
      },
      categories: {
        "color-image": "색상 & 이미지",
        "web-marketing": "웹 & 마케팅",
        developer: "개발 도구"
      }
    }
  },
  ja: {
    metadata: {
      siteDescription: "クリエイター、マーケター、開発者のための実用的なWebツール集です。",
      homeTitle: "ホーム",
      homeDescription: "カラー、画像、マーケティング、開発ワークフロー向けのオンラインツールを見つけましょう。",
      toolsTitle: "ツール",
      toolsDescription: "カテゴリごとに利用可能なツールと公開予定ツールを確認できます。"
    },
    nav: {
      brand: "グローバルツールハブ",
      home: "ホーム",
      tools: "ツール",
      languageLabel: "言語",
      languageAriaLabel: "言語セレクター",
      currentLanguagePrefix: "現在の言語"
    },
    home: {
      eyebrow: "グローバルツールサイト",
      title: "毎日のWeb作業をシンプルにするツール",
      description: "画像編集、マーケティング作業、開発補助に役立つ実用ツールを順次追加しています。",
      cta: "すべてのツールを見る",
      featuredEyebrow: "注目",
      featuredTitle: "注目ツール",
      featuredDescription: "まずは人気の高いツールからお試しください。実際のニーズに合わせて拡張します。",
      categoriesEyebrow: "カテゴリ",
      categoriesTitle: "カテゴリから探す",
      categoriesDescription: "今はわかりやすく、今後の多言語展開にも対応しやすい構成です。",
      categoryCardDescription: "{category} に関する便利なユーティリティです。",
      announcement: "新しいツールを順次追加中です。ぜひ定期的にご確認ください。"
    },
    tools: {
      eyebrow: "すべてのツール",
      title: "カテゴリ別にツールを確認",
      description: "現在利用できるツールと今後公開予定のツールをわかりやすく一覧化しています。"
    },
    footer: {
      copyright: "グローバルツールハブ",
      note: "実用的なWebツールを今後も段階的に追加します。"
    },
    tool: {
      status: {
        Available: "利用可能",
        "Coming Soon": "近日公開"
      },
      categories: {
        "color-image": "カラー & 画像",
        "web-marketing": "Web & マーケティング",
        developer: "開発ツール"
      }
    }
  },
  es: {
    metadata: {
      siteDescription: "Una colección en crecimiento de herramientas web prácticas para creadores, marketing y desarrollo.",
      homeTitle: "Inicio",
      homeDescription: "Descubre herramientas online para flujos de color, imagen, marketing y desarrollo.",
      toolsTitle: "Herramientas",
      toolsDescription: "Explora herramientas disponibles y próximas por categoría."
    },
    nav: {
      brand: "Centro Global de Herramientas",
      home: "Inicio",
      tools: "Herramientas",
      languageLabel: "Idioma",
      languageAriaLabel: "Selector de idioma",
      currentLanguagePrefix: "Idioma actual"
    },
    home: {
      eyebrow: "Sitio global de herramientas",
      title: "Herramientas simples para tu flujo web diario",
      description: "Explora una biblioteca creciente de utilidades prácticas para edición de imágenes, marketing y desarrollo.",
      cta: "Ver todas las herramientas",
      featuredEyebrow: "Destacadas",
      featuredTitle: "Herramientas destacadas",
      featuredDescription: "Empieza con estas herramientas destacadas. Seguiremos agregando más según necesidades reales.",
      categoriesEyebrow: "Categorías",
      categoriesTitle: "Explorar por categoría",
      categoriesDescription: "Nuestra colección está organizada para ser clara hoy y escalable para un futuro multilingüe.",
      categoryCardDescription: "Utilidades útiles en {category}.",
      announcement: "Estamos agregando nuevas herramientas paso a paso. Vuelve pronto para ver novedades."
    },
    tools: {
      eyebrow: "Todas las herramientas",
      title: "Explora herramientas por categoría",
      description: "Lista clara de herramientas actuales y próximas. Empieza por las disponibles y sigue lo que viene."
    },
    footer: {
      copyright: "Centro Global de Herramientas",
      note: "Seguiremos publicando más herramientas web prácticas paso a paso."
    },
    tool: {
      status: {
        Available: "Disponible",
        "Coming Soon": "Próximamente"
      },
      categories: {
        "color-image": "Color e Imagen",
        "web-marketing": "Web y Marketing",
        developer: "Herramientas de Desarrollo"
      }
    }
  },
  fr: {
    metadata: {
      siteDescription: "Une collection évolutive d'outils web pratiques pour les créateurs, le marketing et le développement.",
      homeTitle: "Accueil",
      homeDescription: "Découvrez des outils en ligne pour la couleur, l'image, le marketing et le développement.",
      toolsTitle: "Outils",
      toolsDescription: "Parcourez les outils disponibles et à venir par catégorie."
    },
    nav: {
      brand: "Hub Global d'Outils",
      home: "Accueil",
      tools: "Outils",
      languageLabel: "Langue",
      languageAriaLabel: "Sélecteur de langue",
      currentLanguagePrefix: "Langue actuelle"
    },
    home: {
      eyebrow: "Site global d'outils",
      title: "Des outils simples pour votre workflow web quotidien",
      description: "Explorez une bibliothèque d'utilitaires pratiques pour l'image, le marketing et le développement.",
      cta: "Voir tous les outils",
      featuredEyebrow: "À la une",
      featuredTitle: "Outils mis en avant",
      featuredDescription: "Commencez avec ces outils populaires. Nous continuerons à enrichir la collection selon les besoins réels.",
      categoriesEyebrow: "Catégories",
      categoriesTitle: "Parcourir par catégorie",
      categoriesDescription: "La collection est structurée pour rester claire aujourd'hui et évolutive demain.",
      categoryCardDescription: "Des utilitaires utiles dans la catégorie {category}.",
      announcement: "De nouveaux outils sont ajoutés progressivement. Revenez régulièrement pour les nouveautés."
    },
    tools: {
      eyebrow: "Tous les outils",
      title: "Explorer les outils par catégorie",
      description: "Une liste claire des outils actuels et à venir pour suivre facilement les nouveautés."
    },
    footer: {
      copyright: "Hub Global d'Outils",
      note: "Davantage d'outils web pratiques arrivent progressivement."
    },
    tool: {
      status: {
        Available: "Disponible",
        "Coming Soon": "Bientôt disponible"
      },
      categories: {
        "color-image": "Couleur & Image",
        "web-marketing": "Web & Marketing",
        developer: "Outils Développeur"
      }
    }
  },
  de: {
    metadata: {
      siteDescription: "Eine wachsende Sammlung praktischer Web-Tools für Kreative, Marketing und Entwicklung.",
      homeTitle: "Startseite",
      homeDescription: "Entdecke Online-Tools für Farbe, Bild, Marketing und Entwickler-Workflows.",
      toolsTitle: "Tools",
      toolsDescription: "Durchsuche verfügbare und kommende Tools nach Kategorie."
    },
    nav: {
      brand: "Globales Tool Hub",
      home: "Start",
      tools: "Tools",
      languageLabel: "Sprache",
      languageAriaLabel: "Sprachauswahl",
      currentLanguagePrefix: "Aktuelle Sprache"
    },
    home: {
      eyebrow: "Globale Tool-Website",
      title: "Einfache Tools für deinen täglichen Web-Workflow",
      description: "Entdecke eine wachsende Sammlung praktischer Hilfen für Bildbearbeitung, Marketing und Entwicklung.",
      cta: "Alle Tools ansehen",
      featuredEyebrow: "Empfohlen",
      featuredTitle: "Empfohlene Tools",
      featuredDescription: "Starte mit diesen hervorgehobenen Tools. Wir erweitern sie basierend auf echten Anforderungen.",
      categoriesEyebrow: "Kategorien",
      categoriesTitle: "Nach Kategorie durchsuchen",
      categoriesDescription: "Die Sammlung ist heute klar strukturiert und für zukünftige Mehrsprachigkeit vorbereitet.",
      categoryCardDescription: "Nützliche Hilfen in der Kategorie {category}.",
      announcement: "Neue Tools werden Schritt für Schritt hinzugefügt. Schau regelmäßig vorbei."
    },
    tools: {
      eyebrow: "Alle Tools",
      title: "Tools nach Kategorie entdecken",
      description: "Eine klare Übersicht aktueller und geplanter Tools. Starte mit den verfügbaren Angeboten."
    },
    footer: {
      copyright: "Globales Tool Hub",
      note: "Weitere praktische Web-Tools folgen Schritt für Schritt."
    },
    tool: {
      status: {
        Available: "Verfügbar",
        "Coming Soon": "Demnächst"
      },
      categories: {
        "color-image": "Farbe & Bild",
        "web-marketing": "Web & Marketing",
        developer: "Entwickler-Tools"
      }
    }
  }
};

export function getMessages(locale: LocaleCode) {
  return messages[locale] ?? messages[defaultLocale];
}
