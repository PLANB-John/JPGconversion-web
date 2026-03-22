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
    categoryDescriptions: Record<ToolCategory, string>;
  };
  footer: {
    copyright: string;
    note: string;
  };
  tool: {
    status: Record<ToolStatus, string>;
    categories: Record<ToolCategory, string>;
    action: {
      open: string;
      comingSoon: string;
    };
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
      featuredDescription: "Start with these polished tools first. Each card now reflects the live route and current tool status.",
      categoriesEyebrow: "Categories",
      categoriesTitle: "Browse by category",
      categoriesDescription: "Explore clear categories for visual work, marketing tasks, and everyday developer utilities.",
      categoryCardDescription: "Browse practical {category} tools with consistent descriptions and accurate status labels.",
      announcement: "Tool cards are kept in sync with real routes so you can see what is ready now and what is still on the roadmap."
    },
    tools: {
      eyebrow: "All Tools",
      title: "Explore tools by category",
      description: "Review every current tool in one place with clearer descriptions, consistent labels, and accurate availability.",
      categoryDescriptions: {
        "color-image": "Color pickers, palette helpers, image utilities, and quick visual workflow tools for everyday design tasks.",
        "web-marketing": "Link, preview, screenshot, and asset tools that help with social sharing, campaigns, and quick website checks.",
        developer: "Small browser-based utilities for formatting, encoding, timestamps, hashes, and other daily developer tasks."
      }
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
      },
      action: {
        open: "Open tool",
        comingSoon: "Coming soon"
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
      featuredDescription: "현재 바로 사용할 수 있는 대표 도구를 먼저 소개합니다. 각 카드는 실제 라우트 상태와 맞춰 관리됩니다.",
      categoriesEyebrow: "카테고리",
      categoriesTitle: "카테고리별 탐색",
      categoriesDescription: "비주얼 작업, 마케팅 업무, 개발 보조 도구를 깔끔한 카테고리로 나누어 보여줍니다.",
      categoryCardDescription: "일관된 설명과 정확한 상태 라벨로 {category} 도구를 살펴보세요.",
      announcement: "도구 카드는 실제 라우트와 맞춰 유지되어 지금 사용 가능한 항목과 준비 중인 항목을 쉽게 구분할 수 있습니다."
    },
    tools: {
      eyebrow: "전체 도구",
      title: "카테고리별 도구 둘러보기",
      description: "모든 현재 도구를 한곳에서 확인하고, 더 읽기 쉬운 설명과 정확한 상태를 함께 살펴보세요.",
      categoryDescriptions: {
        "color-image": "색상 선택, 팔레트 구성, 이미지 편집처럼 자주 쓰는 시각 작업용 도구를 모았습니다.",
        "web-marketing": "공유 미리보기, 링크 생성, 스크린샷, 이미지 수집 등 웹 운영과 마케팅 작업을 돕습니다.",
        developer: "포맷팅, 인코딩, 타임스탬프, 해시 등 개발 중 자주 쓰는 브라우저 기반 유틸리티입니다."
      }
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
      },
      action: {
        open: "도구 열기",
        comingSoon: "출시 예정"
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
      featuredDescription: "今すぐ使える代表的なツールを先に紹介します。各カードは実際のルート状態と一致しています。",
      categoriesEyebrow: "カテゴリ",
      categoriesTitle: "カテゴリから探す",
      categoriesDescription: "ビジュアル作業、マーケティング業務、開発補助をわかりやすいカテゴリで整理しています。",
      categoryCardDescription: "統一した説明と正確な状態ラベルで{category}ツールを確認できます。",
      announcement: "ツールカードは実際のルートと同期しているため、利用可能な項目と準備中の項目を区別しやすくなっています。"
    },
    tools: {
      eyebrow: "すべてのツール",
      title: "カテゴリ別にツールを確認",
      description: "現在のツールを一か所で確認し、読みやすい説明と正確な提供状況をまとめて把握できます。",
      categoryDescriptions: {
        "color-image": "カラーピッカー、配色作成、画像調整など、日常的なビジュアル作業を支えるツールです。",
        "web-marketing": "共有プレビュー、リンク作成、スクリーンショット、画像収集などWeb運用向けの機能をまとめています。",
        developer: "整形、エンコード、タイムスタンプ、ハッシュなど日々の開発作業で使いやすいユーティリティです。"
      }
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
      },
      action: {
        open: "ツールを開く",
        comingSoon: "近日公開"
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
      featuredDescription: "Empieza con herramientas ya listas para usar. Cada tarjeta refleja la ruta real y su estado actual.",
      categoriesEyebrow: "Categorías",
      categoriesTitle: "Explorar por categoría",
      categoriesDescription: "La colección separa con claridad el trabajo visual, las tareas de marketing y las utilidades de desarrollo.",
      categoryCardDescription: "Explora herramientas de {category} con descripciones consistentes y estados correctos.",
      announcement: "Las tarjetas se mantienen sincronizadas con las rutas reales para mostrar con claridad qué está listo hoy."
    },
    tools: {
      eyebrow: "Todas las herramientas",
      title: "Explora herramientas por categoría",
      description: "Revisa todas las herramientas actuales en un solo lugar con descripciones más claras y disponibilidad correcta.",
      categoryDescriptions: {
        "color-image": "Selectores de color, paletas, utilidades de imagen y ayudas visuales para tareas de diseño cotidianas.",
        "web-marketing": "Herramientas para enlaces, vistas previas, capturas y recursos web útiles para compartir y medir campañas.",
        developer: "Utilidades en el navegador para formato, codificación, timestamps, hashes y otras tareas diarias de desarrollo."
      }
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
      },
      action: {
        open: "Abrir herramienta",
        comingSoon: "Próximamente"
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
      featuredDescription: "Commencez par des outils déjà disponibles. Chaque carte reflète la vraie route et le bon statut.",
      categoriesEyebrow: "Catégories",
      categoriesTitle: "Parcourir par catégorie",
      categoriesDescription: "La collection distingue clairement le travail visuel, le marketing web et les utilitaires développeur.",
      categoryCardDescription: "Parcourez des outils {category} avec des descriptions cohérentes et des statuts exacts.",
      announcement: "Les cartes restent alignées sur les routes réelles afin de montrer clairement ce qui est prêt maintenant."
    },
    tools: {
      eyebrow: "Tous les outils",
      title: "Explorer les outils par catégorie",
      description: "Consultez tous les outils actuels au même endroit avec des descriptions plus homogènes et une disponibilité exacte.",
      categoryDescriptions: {
        "color-image": "Sélecteurs de couleur, palettes, utilitaires d'image et aides visuelles pour les tâches de design du quotidien.",
        "web-marketing": "Outils pour liens, aperçus, captures et ressources web utiles au partage et au suivi des campagnes.",
        developer: "Petits utilitaires navigateur pour le formatage, l'encodage, les timestamps, les hash et d'autres besoins quotidiens."
      }
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
      },
      action: {
        open: "Ouvrir l'outil",
        comingSoon: "Bientôt disponible"
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
      featuredDescription: "Starte mit bereits verfügbaren Tools. Jede Karte zeigt die echte Route und den passenden Status.",
      categoriesEyebrow: "Kategorien",
      categoriesTitle: "Nach Kategorie durchsuchen",
      categoriesDescription: "Die Sammlung trennt visuelle Aufgaben, Marketing-Arbeit und Entwicklerhilfen klar voneinander.",
      categoryCardDescription: "Entdecke praktische {category}-Tools mit einheitlichen Beschreibungen und korrekten Statusangaben.",
      announcement: "Die Tool-Karten bleiben mit den echten Routen synchron, damit du sofort siehst, was schon einsatzbereit ist."
    },
    tools: {
      eyebrow: "Alle Tools",
      title: "Tools nach Kategorie entdecken",
      description: "Sieh dir alle aktuellen Tools an einem Ort mit klareren Beschreibungen und korrekter Verfügbarkeit an.",
      categoryDescriptions: {
        "color-image": "Farbwähler, Paletten, Bildwerkzeuge und visuelle Helfer für alltägliche Designaufgaben.",
        "web-marketing": "Werkzeuge für Links, Vorschauen, Screenshots und Web-Assets rund um Teilen und Kampagnenarbeit.",
        developer: "Kleine Browser-Helfer für Formatierung, Kodierung, Zeitstempel, Hashes und andere tägliche Entwickleraufgaben."
      }
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
      },
      action: {
        open: "Tool öffnen",
        comingSoon: "Demnächst"
      }
    }
  }
};

export function getMessages(locale: LocaleCode) {
  return messages[locale] ?? messages[defaultLocale];
}
