import type { LocaleCode } from "@/data/locales";
import { getTool, type ToolCategory } from "@/data/tools";

export type GuideSlug =
  | "how-to-use-html-color-picker"
  | "image-color-extractor-guide"
  | "what-is-webp"
  | "how-to-build-utm-links"
  | "json-formatting-basics"
  | "how-to-count-characters-for-seo"
  | "meta-title-length-guide"
  | "meta-description-length-for-ctr"
  | "utm-parameters-explained"
  | "common-utm-tagging-mistakes"
  | "when-to-use-base64-encoding"
  | "how-to-check-open-graph-metadata"
  | "how-to-extract-youtube-thumbnails"
  | "download-youtube-thumbnail-by-url"
  | "youtube-thumbnail-sizes-explained"
  | "check-youtube-thumbnail-quality"
  | "when-to-use-youtube-thumbnails-for-reference"
  | "website-screenshot-guide"
  | "full-page-website-screenshot"
  | "capture-website-previews-for-clients"
  | "website-screenshot-vs-screen-recording"
  | "website-screenshot-mistakes"
  | "capture-website-preview-before-sharing"
  | "use-website-screenshots-in-client-feedback"
  | "full-page-vs-cropped-website-screenshot"
  | "how-to-convert-timestamps-quickly"
  | "how-to-use-a-json-formatter-for-debugging"
  | "how-to-convert-images-to-webp"
  | "open-graph-image-size-guide"
  | "fix-missing-social-preview-images"
  | "png-vs-jpg-vs-webp"
  | "when-not-to-use-webp"
  | "compress-images-for-page-speed"
  | "best-image-file-size-for-websites"
  | "why-large-images-slow-down-websites"
  | "optimize-blog-images-before-uploading"
  | "image-compression-mistakes-that-hurt-quality"
  | "compress-images-without-making-them-look-bad"
  | "best-image-compression-settings-for-web"
  | "resize-image-before-compressing"
  | "resize-images-for-social-media-without-bad-cropping"
  | "best-image-dimensions-for-blog-headers-and-thumbnails"
  | "resize-image-without-stretching"
  | "json-parse-error-examples"
  | "validate-json-before-api-requests"
  | "reduce-image-size-without-losing-too-much-quality"
  | "best-webp-quality-settings"
  | "jpg-to-webp-vs-png-to-webp"
  | "common-webp-conversion-mistakes"
  | "why-webp-image-looks-blurry"
  | "lossy-vs-lossless-webp"
  | "minified-vs-pretty-json"
  | "why-json-breaks-after-copy-paste"
  | "read-json-errors-more-quickly"
  | "when-to-use-minified-vs-pretty-json"
  | "unix-timestamp-seconds-vs-milliseconds"
  | "convert-api-timestamps-to-readable-dates"
  | "why-your-timestamp-looks-wrong-in-javascript"
  | "debug-timezone-confusion-in-timestamps"
  | "api-dates-vs-unix-timestamps"
  | "spot-seconds-vs-milliseconds-bug"
  | "timestamp-looks-right-but-timezone-is-wrong"
  | "base64-vs-url-encoding"
  | "when-to-encode-url-and-when-not-to"
  | "fix-broken-links-caused-by-url-encoding"
  | "spaces-symbols-and-query-strings-url-encoding"
  | "what-does-xn-mean-in-domain"
  | "unicode-domains-vs-punycode"
  | "check-whether-domain-is-punycode"
  | "how-to-decode-base64-safely-for-debugging"
  | "common-base64-mistakes-in-web-workflows"
  | "when-plain-text-is-better-than-base64"
  | "why-base64-strings-get-so-long"
  | "tell-whether-string-is-base64"
  | "when-base64-makes-debugging-harder"
  | "md5-vs-sha256"
  | "compare-hashes-to-check-data-changes"
  | "why-two-hashes-are-different"
  | "track-social-campaigns-with-utm-links"
  | "track-email-clicks-with-utm-parameters"
  | "check-character-count-before-publishing"
  | "blog-title-length-for-readability"
  | "write-shorter-titles-without-being-vague"
  | "character-count-for-social-captions"
  | "shorten-blog-title-keep-main-keyword"
  | "why-open-graph-images-look-wrong"
  | "preview-shared-links-before-posting"
  | "why-link-preview-title-looks-wrong"
  | "update-open-graph-after-page-edits"
  | "why-link-preview-description-looks-wrong"
  | "test-open-graph-changes-before-sharing"
  | "common-open-graph-tag-mistakes"
  | "hex-vs-rgb-vs-hsl"
  | "match-website-colors-consistently"
  | "create-basic-website-color-palette"
  | "how-many-colors-in-brand-palette"
  | "choose-supporting-colors-around-brand-color"
  | "website-palette-mistakes"
  | "build-consistent-color-palette"
  | "use-css-variables-for-repeated-colors"
  | "css-variables-vs-hardcoded-values"
  | "organize-css-variables-for-small-website"
  | "choose-accent-colors-for-website"
  | "test-color-palette-before-using"
  | "copy-web-color-from-screen"
  | "common-color-picker-mistakes"
  | "pick-website-colors-more-confidently"
  | "when-to-use-hex-rgb-or-hsl"
  | "check-color-combination-before-using"
  | "extract-brand-colors-from-image"
  | "build-color-palette-from-photo"
  | "when-image-color-sampling-helps"
  | "mistakes-when-extracting-colors-from-images"
  | "find-main-colors-in-image-quickly"
  | "use-extracted-colors-in-website-palette"
  | "avoid-bad-color-picks-from-busy-images"
  | "name-utm-campaigns-consistently"
  | "utm-source-vs-medium-vs-campaign"
  | "use-utm-links-without-breaking-reporting"
  | "best-utm-naming-rules-for-small-teams"
  | "check-tagged-url-before-sharing"
  | "contrast-checker-guide"
  | "check-text-contrast-for-accessibility"
  | "low-contrast-text-hurts-readability"
  | "wcag-contrast-ratio-basics"
  | "accessibility-color-contrast-mistakes"
  | "fix-low-contrast-text-on-website"
  | "best-contrast-practices-for-ui-text"
  | "check-brand-colors-without-hurting-accessibility"
  | "gradient-generator-guide"
  | "create-simple-css-gradient-background"
  | "linear-vs-radial-gradient"
  | "when-gradients-improve-ui"
  | "common-gradient-mistakes-ui"
  | "use-gradients-without-busy-ui"
  | "best-places-to-use-gradients-on-website"
  | "test-gradient-before-using-in-production";

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
  relatedGuideSlugs?: GuideSlug[];
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



const whenToUseBase64EncodingEn: GuideLocalizedContent = {
  title: "When to Use Base64 Encoding",
  description: "Learn when Base64 encoding is useful, when it is unnecessary, and how to use it more carefully in common web and developer workflows.",
  intro: "Base64 encoding is often mentioned in web development, APIs, email systems, and debugging workflows, but it is not always the right solution. Many beginners see encoded strings in technical tools and assume Base64 is a form of encryption. It is not. It is simply a way to represent binary or special data in plain text form.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "When Base64 is useful",
  useCases: [
    "Embedding small files or assets into text-based formats.",
    "Transferring binary content through text-only systems.",
    "Inspecting raw values during debugging.",
    "Working with email attachments and MIME data.",
    "Handling tokens, credentials, or payload fragments that must stay text-safe.",
    "Moving data between tools where copy-paste reliability matters."
  ],
  closingTitle: "Keep it practical",
  closingText:
    "Base64 is most helpful when it solves a specific compatibility problem. It is less useful when it becomes a habit applied everywhere. If you treat it as a simple transport tool, it can save time. If you expect it to provide compression, security, or elegance by default, it will usually disappoint you.",
  relatedToolLabel: "Open the Base64 Encoder",
  sections: [
    {
      heading: "What Base64 encoding actually does",
      paragraphs: [
        "In practice, Base64 is useful when a system expects text-safe content but you need to transfer bytes, files, or structured data without corruption. It helps move data between tools that are not designed to handle raw binary safely.",
        "Base64 converts data into a limited set of ASCII characters so it can be transmitted or stored in environments that prefer text. This is useful because some systems treat raw binary data unpredictably, especially older protocols, logs, or copy-paste workflows.",
        "That also means Base64 usually increases the total size of the content. It improves compatibility, not efficiency. If your main goal is smaller payloads or better compression, Base64 is usually not the answer."
      ]
    },
    {
      heading: "Common examples",
      paragraphs: [
        "A developer may use Base64 when testing an API that accepts encoded file content, checking a token or payload fragment, embedding a very small image directly into HTML or CSS, copying structured data between systems without breaking characters, or reviewing a binary-to-text conversion during debugging.",
        "In these cases, Base64 is acting as a transport format, not a security layer. It is especially useful for short, practical tasks where convenience matters more than file size."
      ]
    },
    {
      heading: "When Base64 is not the best choice",
      paragraphs: [
        "Base64 should not be used automatically. It adds overhead, makes content harder to read, and can create larger payloads than necessary.",
        "It is often a poor choice when the system already supports file uploads directly, when the original binary format can be transmitted safely, when performance or payload size matters, when the encoded output becomes too large to manage comfortably, or when someone is using it as if it were encryption.",
        "A good rule is simple: if you only need compatibility with text-based systems, Base64 may help. If you need secrecy, compression, or long-term readability, look for a better approach."
      ]
    },
    {
      heading: "Base64 is not encryption",
      paragraphs: [
        "This is one of the most important points to understand. Base64 does not protect data from being read. Anyone can decode it easily with standard tools. If sensitive information needs protection, use real encryption methods instead.",
        "This misunderstanding appears often in internal tools, debugging workflows, and copied credentials. Encoding something does not make it secure."
      ]
    },
    {
      heading: "A practical workflow",
      paragraphs: [
        "A lightweight browser-based Base64 encoder is usually enough for quick checks.",
        "1. Start with the original text or data. Make sure you know what you are converting and why. Do not encode content just because another system happens to display Base64 somewhere.",
        "2. Encode only when the receiving system expects text-safe content. If the tool, API, or format already supports normal file transfer or raw text safely, extra encoding may not be necessary.",
        "3. Test the output. Check whether the encoded string works correctly in the destination system. Some workflows are sensitive to line breaks, prefixes, or copied whitespace.",
        "4. Decode when debugging. If a value becomes hard to understand, decode it immediately and inspect the original content. This often saves time during troubleshooting.",
        "5. Keep the process small and intentional. Use Base64 for practical compatibility, not as a default storage strategy for everything."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "A common mistake is assuming Base64 is secure. It is not.",
        "Another mistake is encoding large content without thinking about size growth. This can slow down requests, clutter logs, and make debugging harder.",
        "It is also easy to forget that some encoded data needs exact formatting. Accidental spaces, missing padding, or copy-paste errors can break the result.",
        "Finally, developers sometimes use Base64 because it feels convenient in the short term, even when the underlying system already supports a better binary workflow."
      ]
    }
  ]
};

const howToCheckOpenGraphMetadataEn: GuideLocalizedContent = {
  title: "How to Check Open Graph Metadata",
  description: "Learn how to check Open Graph metadata so links display better when shared on social platforms, messaging apps, and community sites.",
  intro: "Open Graph metadata helps control how a page appears when someone shares it on social platforms, messaging apps, and other preview-based services. A page may still work without these tags, but the shared result can look incomplete, confusing, or unappealing.",
  categoryLabel: "SOCIAL PREVIEW",
  useCasesTitle: "When this is most useful",
  useCases: [
    "Publishing a new guide or blog article.",
    "Launching a landing page.",
    "Sharing a page on social media.",
    "Sending links through chat or community channels.",
    "Updating a page title or preview image.",
    "Reviewing multilingual pages for consistency."
  ],
  closingTitle: "Keep the check lightweight",
  closingText:
    "You do not need to turn this into a complicated audit. A fast Open Graph check before publishing or sharing is usually enough to catch the most important issues. The goal is simple: make sure your page looks clear, trustworthy, and worth clicking when it appears outside your site.",
  relatedToolLabel: "Open the OG Preview",
  sections: [
    {
      heading: "What Open Graph metadata does",
      paragraphs: [
        "For many websites, shared previews are one of the first things users see. A weak title, missing image, or poor description can reduce clicks even when the page itself is useful. That is why checking Open Graph metadata is a practical part of publishing and SEO workflows.",
        "Open Graph metadata gives platforms extra information about a page. Instead of guessing how to build a preview, they can use the values you provide for the title, description, image, and page type.",
        "Some pages also include Twitter card metadata, but Open Graph is often the foundation for preview behavior across many platforms."
      ],
      bullets: ["og:title", "og:description", "og:image", "og:url", "og:type"]
    },
    {
      heading: "Why preview checks matter",
      paragraphs: [
        "A page can have strong content and still look weak when shared if the metadata is incomplete or inconsistent. This matters for blog posts, landing pages, documentation pages, product pages, and guides.",
        "A quick Open Graph check helps you verify that the correct title appears, confirm that the description is clear and useful, make sure the preview image loads correctly, catch stale metadata after page updates, and compare how a page may look before sharing it widely.",
        "This is especially useful when you are preparing a new article, campaign page, or multilingual page that may be shared across several channels."
      ]
    },
    {
      heading: "How to check Open Graph metadata",
      paragraphs: [
        "You do not need a complicated crawler to do this. A focused preview tool is often enough.",
        "1. Start with the exact page URL. Copy the full URL of the page you want to inspect. Make sure you test the canonical public version, not a temporary draft URL unless that is intentional.",
        "2. Load the page in an Open Graph preview tool. Paste the URL into the tool and let it fetch the metadata. This usually gives you both the raw tag values and a visual preview of how the shared card may appear.",
        "3. Review the title and description. Check whether the title is specific, readable, and aligned with the page content. Then review the description. It should help users understand what the page offers, not just repeat generic keywords.",
        "4. Confirm the image. A missing or broken image is one of the most common preview problems. Make sure the correct image is selected and that it is accessible publicly.",
        "5. Check for mismatched URLs or old values. Sometimes a page has been updated, but old metadata remains in the source or cache. If the displayed tags do not match the current page, the issue may be in the page template, metadata config, or cache refresh timing."
      ]
    },
    {
      heading: "Common problems to watch for",
      paragraphs: [
        "One common issue is using a generic homepage title on every page. This makes previews look repetitive and less useful.",
        "Another issue is missing images. Some platforms still create a preview without one, but the result is often weaker and less engaging.",
        "It is also common to find descriptions that are technically present but not helpful. A description should summarize the value of the page in natural language.",
        "On multilingual websites, pages may accidentally reuse metadata from another locale. This can make shared previews look inconsistent or confusing for users in different regions.",
        "Finally, developers sometimes forget that metadata must reflect the public URL structure. If the page uses the wrong canonical or Open Graph URL, shared links may look messy or duplicate."
      ]
    },
    {
      heading: "A practical publishing workflow",
      paragraphs: [
        "A simple workflow can prevent most problems."
      ],
      bullets: [
        "Write the page title and summary first.",
        "Prepare a clean preview image when needed.",
        "Publish the page.",
        "Run the public URL through an Open Graph preview tool.",
        "Correct mismatched metadata before actively sharing the page."
      ]
    }
  ]
};

const howToConvertTimestampsQuicklyEn: GuideLocalizedContent = {
  title: "How to Convert Timestamps Quickly",
  description: "Learn how to convert timestamps quickly so you can read raw time values, debug logs, and work more confidently with time-based data.",
  intro: "Timestamps appear everywhere in modern web work. You see them in logs, APIs, databases, analytics tools, exports, and debugging output. They are useful because they provide a consistent machine-readable format, but they are not always easy to interpret at a glance.",
  categoryLabel: "DEVELOPER WORKFLOW",
  useCasesTitle: "When this is most useful",
  useCases: [
    "Reviewing application logs.",
    "Checking API payloads.",
    "Debugging sign-in or payment events.",
    "Validating analytics exports.",
    "Comparing backend and frontend event timing.",
    "Translating technical data for reports or client communication."
  ],
  closingTitle: "Keep the process lightweight",
  closingText:
    "You do not need to overcomplicate time checks. A quick browser-based converter is usually enough for day-to-day tasks. The goal is to understand the value fast, reduce mistakes, and move on with confidence. When timestamps become readable, troubleshooting and collaboration both get easier.",
  relatedToolLabel: "Open the Timestamp Converter",
  sections: [
    {
      heading: "Why timestamp conversion matters",
      paragraphs: [
        "A quick timestamp conversion workflow helps turn raw numeric or formatted values into readable dates and times. This is especially useful when you need to troubleshoot an event, compare records, or understand when something actually happened.",
        "When a timestamp is shown as a large integer or technical date string, it can slow down your workflow. You may know the value is correct, but that does not mean it is immediately meaningful.",
        "A small conversion step can save time in both debugging and reporting."
      ],
      bullets: [
        "Read logs more easily.",
        "Inspect API responses.",
        "Compare event times across systems.",
        "Validate exported data.",
        "Troubleshoot timezone confusion.",
        "Explain technical time values to non-technical teammates."
      ]
    },
    {
      heading: "Common timestamp formats",
      paragraphs: [
        "Different systems use different timestamp formats. One of the most common problems is mixing seconds and milliseconds. A value may look valid, but convert incorrectly if the expected unit is wrong."
      ],
      bullets: ["Unix timestamps in seconds.", "Unix timestamps in milliseconds.", "ISO date strings.", "UTC-based log timestamps.", "Platform-specific datetime formats."]
    },
    {
      heading: "How to convert timestamps quickly",
      paragraphs: [
        "You do not need a large analytics platform or database console just to understand a timestamp. A focused browser-based converter is usually enough.",
        "1. Start with the raw value. Copy the timestamp exactly as it appears in your source. This may come from an API response, a log line, a dashboard export, or a developer tool.",
        "2. Identify the likely format. Before converting, check whether the value looks like seconds, milliseconds, an ISO string, or another readable datetime format. A 10-digit Unix timestamp often means seconds. A 13-digit value often means milliseconds. This quick check prevents obvious mistakes.",
        "3. Convert the value into a readable date. Use a timestamp converter to turn the raw value into a human-readable time. This helps you confirm whether the recorded event matches what you expected.",
        "4. Check timezone context. A converted timestamp is only fully useful if you know whether you are looking at UTC, local time, or another timezone context. Many misunderstandings come from comparing values across systems that display time differently.",
        "5. Compare and verify. If you are debugging an issue, compare the converted result with surrounding events. This helps confirm ordering, delays, or mismatches between systems."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "A very common mistake is confusing seconds with milliseconds. This can shift a date dramatically and make the output look broken.",
        "Another mistake is ignoring timezone differences. Two systems may store the same event correctly but display it differently depending on timezone settings.",
        "It is also easy to copy incomplete values or include extra spaces by accident when working from logs or spreadsheets. If a result looks strange, check the original input again before assuming the system is wrong.",
        "Finally, do not assume that every timestamp problem is a formatting problem. Sometimes the real issue is that the source data itself was recorded incorrectly upstream."
      ]
    },
    {
      heading: "A practical workflow for debugging",
      paragraphs: ["A simple process works well in most cases:"],
      bullets: [
        "Copy the raw timestamp from the source.",
        "Identify whether it is seconds or milliseconds.",
        "Convert it to a readable date.",
        "Verify the timezone.",
        "Compare it with nearby events or records."
      ]
    },
    {
      heading: "Why this matters beyond development",
      paragraphs: [
        "Timestamp conversion is not only for engineers. Marketers, analysts, support teams, and operations staff often need to understand technical event times too. A readable conversion makes it easier to align reports, incident notes, campaign activity, and support conversations.",
        "That is why a simple converter can be useful across many roles, not just inside developer workflows."
      ]
    }
  ]
};

const howToExtractYoutubeThumbnailsEn: GuideLocalizedContent = {
  title: "How to Extract YouTube Thumbnails",
  description: "Learn how to extract YouTube thumbnails quickly so you can review preview images, save references, and prepare content more efficiently.",
  intro: "A YouTube thumbnail is often the first visual users notice before they decide whether to click a video. Sometimes you need to inspect that image for research, design reference, campaign planning, or content review. A lightweight thumbnail extraction workflow helps you do that without using the YouTube API or digging through page source manually.",
  categoryLabel: "CONTENT WORKFLOW",
  useCasesTitle: "Why people extract YouTube thumbnails",
  useCases: [
    "Review the main preview image used by a video.",
    "Compare thumbnail styles across channels.",
    "Collect design references for your own content.",
    "Inspect image sizes before sharing internally.",
    "Save a direct image URL for documentation or research.",
    "Confirm whether a specific thumbnail size is available."
  ],
  closingTitle: "Keep the workflow simple",
  closingText:
    "You do not need a heavy video toolkit just to inspect a thumbnail. For most practical tasks, a simple thumbnail extractor is enough. Paste the URL, review the image options, and use the result for reference or internal workflow needs. The goal is speed and clarity, not complexity.",
  relatedToolLabel: "Open the YouTube Thumbnail Extractor",
  sections: [
    {
      heading: "What a thumbnail extractor does",
      paragraphs: [
        "A thumbnail extractor reads the public YouTube video URL, identifies the video ID, and checks which common thumbnail image versions are available for that video.",
        "Instead of guessing image paths or editing URLs by hand, you can paste the video link once and review the results in a cleaner way.",
        "This is especially helpful when you need to move quickly between several videos."
      ]
    },
    {
      heading: "How to extract a YouTube thumbnail",
      paragraphs: [
        "A simple workflow usually looks like this.",
        "1. Copy the full YouTube video URL. Start with the exact video URL you want to inspect. Standard watch URLs usually work well, and many tools can also support shortened or shared formats if the video ID can be detected correctly.",
        "2. Paste the link into the thumbnail extractor. Once the tool reads the video URL, it should detect the video ID and load the common thumbnail options that are publicly available.",
        "3. Review the available image sizes. Some videos provide several common thumbnail versions. Checking them side by side makes it easier to choose the most useful one for your workflow.",
        "4. Open or copy the image URL you need. If you are documenting the video, sharing references with a teammate, or collecting examples, copying the direct image link can save time.",
        "5. Use the image only in an appropriate context. Extracting a thumbnail for inspection or reference is not the same as owning the image. If you plan to reuse it publicly, make sure you understand the legal and copyright context."
      ]
    },
    {
      heading: "Common use cases",
      paragraphs: [
        "Thumbnail extraction is often useful when you are planning YouTube content and comparing styles, reviewing competitor thumbnails, building a presentation with visual references, checking which preview image a shared video uses, documenting a video page for research, or collecting assets for internal marketing discussions.",
        "Because thumbnails influence click behavior heavily, even a quick review can be informative."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "One common mistake is assuming every video exposes every thumbnail size. Availability can vary, so it is better to check the actual results rather than assume the highest resolution version always exists.",
        "Another mistake is pasting the wrong kind of URL. A malformed or incomplete video URL can prevent the extractor from finding the correct video ID.",
        "It is also easy to confuse thumbnail extraction with permission to reuse the image. A thumbnail may be publicly accessible, but that does not automatically grant usage rights.",
        "Finally, avoid turning a simple task into a complicated workflow. If your goal is just to inspect the image or copy the direct URL, a focused browser-based tool is usually enough."
      ]
    },
    {
      heading: "Why this matters for content work",
      paragraphs: [
        "For creators, marketers, and researchers, this is one of the simplest ways to review how a video is presented visually.",
        "Thumbnails shape first impressions. For creators and marketers, they are part of the content strategy, not just decoration. Reviewing them directly helps you understand positioning, style choices, contrast, text overlays, and visual patterns that may influence clicks.",
        "Even when you are not publishing on YouTube yourself, thumbnail checks can be useful for research, teaching, audits, or planning discussions."
      ]
    }
  ]
};



const whenToUseBase64EncodingKo: GuideLocalizedContent = {
  ...whenToUseBase64EncodingEn,
  title: "Base64 인코딩을 언제 써야 할까",
  description: "웹/개발 작업에서 Base64가 유용한 경우와 불필요한 경우를 구분하는 방법을 안내합니다.",
  intro: "Base64는 암호화가 아니라 데이터를 텍스트로 안전하게 전달하기 위한 인코딩 방식입니다. API 테스트, 로그 확인, 메일 데이터 점검처럼 텍스트 중심 환경에서 특히 유용합니다.",
  categoryLabel: "개발 워크플로",
  useCasesTitle: "Base64가 특히 유용한 경우",
  useCases: [
    "텍스트 기반 시스템에서 바이너리 데이터를 전달할 때",
    "API 요청/응답의 인코딩 값을 확인할 때",
    "디버깅 중 원본 값과 인코딩 값을 비교할 때",
    "MIME 첨부 데이터 구조를 확인할 때",
    "복붙 과정에서 문자 깨짐을 줄이고 싶을 때",
    "짧은 데이터 조각을 안전하게 이동할 때"
  ],
  closingTitle: "실무적으로 사용하세요",
  closingText: "Base64는 호환성 문제를 해결할 때 가장 빛납니다. 압축이나 보안을 기대하기보다, 필요한 순간에만 간단히 적용하는 습관이 효율적입니다.",
  relatedToolLabel: "Base64 인코더 열기",
  sections: [
    { heading: "Base64가 실제로 하는 일", paragraphs: ["Base64는 데이터를 텍스트 안전 문자 집합으로 바꿔서 전송/저장을 쉽게 만듭니다.", "즉, 목적은 호환성입니다. 파일 크기 절감이나 보안 강화가 목적은 아닙니다."] },
    { heading: "언제 쓰면 좋은가", paragraphs: ["텍스트 기반 시스템에서 바이너리 값을 전달할 때 특히 유용합니다.", "API 테스트, 로그 디버깅, 메일 데이터 확인처럼 짧은 실무 작업에서 효율이 높습니다."] },
    { heading: "자주 하는 실수", paragraphs: ["Base64를 암호화로 오해하면 보안 사고로 이어질 수 있습니다.", "큰 파일을 무분별하게 인코딩하면 크기 증가로 성능이 나빠질 수 있습니다."] },
    { heading: "빠른 실무 절차", paragraphs: ["원본 데이터 확인 → 필요한 경우에만 인코딩 → 대상 시스템에서 동작 검증 → 디버깅 시 즉시 디코딩 순서로 진행하세요.", "단순한 전송 도구로 쓰면 Base64는 매우 실용적입니다."] }
  ]
};
const whenToUseBase64EncodingJa: GuideLocalizedContent = { ...whenToUseBase64EncodingEn, title: "Base64エンコードを使うべき場面", description: "Base64が役立つケースと不要なケースを、Web開発の実務目線で整理します。", categoryLabel: "開発ワークフロー", useCasesTitle: "Base64が有効な場面", closingTitle: "実用的に使う", relatedToolLabel: "Base64エンコーダーを開く" };
const whenToUseBase64EncodingEs: GuideLocalizedContent = { ...whenToUseBase64EncodingEn, title: "Cuándo usar codificación Base64", description: "Aprende cuándo Base64 aporta valor y cuándo no es necesario en flujos web y de desarrollo.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Cuándo resulta útil", closingTitle: "Úsalo de forma práctica", relatedToolLabel: "Abrir codificador Base64" };
const whenToUseBase64EncodingFr: GuideLocalizedContent = { ...whenToUseBase64EncodingEn, title: "Quand utiliser l'encodage Base64", description: "Identifiez quand Base64 est utile et quand il est inutile dans les workflows web et dev.", categoryLabel: "Workflow développeur", useCasesTitle: "Quand Base64 est utile", closingTitle: "Restez pragmatique", relatedToolLabel: "Ouvrir l’encodeur Base64" };
const whenToUseBase64EncodingDe: GuideLocalizedContent = { ...whenToUseBase64EncodingEn, title: "Wann Base64-Encoding sinnvoll ist", description: "Erfahre, wann Base64 in Web- und Entwickler-Workflows hilft und wann nicht.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Wann Base64 hilfreich ist", closingTitle: "Praktisch bleiben", relatedToolLabel: "Base64-Encoder öffnen" };

const howToCheckOpenGraphMetadataKo: GuideLocalizedContent = {
  ...howToCheckOpenGraphMetadataEn,
  title: "Open Graph 메타데이터 확인 방법",
  description: "소셜/메신저 공유 시 링크 미리보기가 정확히 보이도록 Open Graph를 점검하는 방법입니다.",
  intro: "페이지를 공유했을 때 보이는 제목, 설명, 대표 이미지는 클릭률에 큰 영향을 줍니다. Open Graph 태그를 확인하면 미리보기 품질을 빠르게 개선할 수 있습니다.",
  categoryLabel: "소셜 미리보기",
  useCasesTitle: "이럴 때 특히 유용합니다",
  useCases: [
    "새 블로그 글이나 가이드를 발행할 때",
    "랜딩 페이지를 공유하기 전에 점검할 때",
    "대표 이미지나 제목을 교체한 뒤 결과를 확인할 때",
    "메신저/커뮤니티 공유 미리보기가 이상할 때",
    "다국어 페이지의 카드 일관성을 확인할 때",
    "캠페인 링크 클릭률을 높이고 싶을 때"
  ],
  closingTitle: "가볍게 점검하세요",
  closingText: "복잡한 감사를 할 필요는 없습니다. 배포 전 1분 점검만으로도 누락 태그, 잘린 제목, 잘못된 이미지 같은 핵심 문제를 대부분 잡을 수 있습니다.",
  relatedToolLabel: "OG 미리보기 열기",
  sections: [
    { heading: "Open Graph 메타데이터의 역할", paragraphs: ["공유 카드의 제목·설명·이미지는 사용자의 클릭 여부를 좌우합니다.", "OG 태그를 명확히 설정하면 플랫폼이 임의로 잘못 추측하는 일을 줄일 수 있습니다."] },
    { heading: "점검할 핵심 항목", paragraphs: ["og:title, og:description, og:image, og:type, og:url 값을 우선 확인하세요.", "이미지 크기/비율, 언어별 페이지의 값 일관성, 캐시 반영 상태도 함께 점검하면 좋습니다."] },
    { heading: "빠른 점검 루틴", paragraphs: ["배포 전 URL을 넣어 미리보기를 확인하고, 잘림·누락·오타를 바로 수정하세요.", "수정 후에는 다시 로드해 실제 공유 카드가 의도대로 보이는지 검증합니다."] }
  ]
};
const howToCheckOpenGraphMetadataJa: GuideLocalizedContent = { ...howToCheckOpenGraphMetadataEn, title: "Open Graphメタデータの確認方法", description: "SNSやメッセージアプリでリンクの見え方を整えるためのOG確認手順です。", categoryLabel: "ソーシャルプレビュー", useCasesTitle: "有効な場面", closingTitle: "軽く確認する習慣を", relatedToolLabel: "OGプレビューを開く" };
const howToCheckOpenGraphMetadataEs: GuideLocalizedContent = { ...howToCheckOpenGraphMetadataEn, title: "Cómo revisar metadatos Open Graph", description: "Comprueba Open Graph para que los enlaces se muestren mejor en redes y apps de mensajería.", categoryLabel: "Vista previa social", useCasesTitle: "Cuándo conviene", closingTitle: "Revisión rápida y útil", relatedToolLabel: "Abrir vista previa OG" };
const howToCheckOpenGraphMetadataFr: GuideLocalizedContent = { ...howToCheckOpenGraphMetadataEn, title: "Comment vérifier les métadonnées Open Graph", description: "Vérifiez Open Graph pour améliorer l’aperçu des liens sur les réseaux et messageries.", categoryLabel: "Aperçu social", useCasesTitle: "Quand c’est utile", closingTitle: "Un contrôle léger suffit", relatedToolLabel: "Ouvrir l’aperçu OG" };
const howToCheckOpenGraphMetadataDe: GuideLocalizedContent = { ...howToCheckOpenGraphMetadataEn, title: "So prüfst du Open-Graph-Metadaten", description: "Prüfe Open Graph, damit Link-Vorschauen in Social- und Messaging-Apps sauber dargestellt werden.", categoryLabel: "Social Preview", useCasesTitle: "Wann es besonders nützlich ist", closingTitle: "Prüfung schlank halten", relatedToolLabel: "OG-Vorschau öffnen" };

const howToExtractYoutubeThumbnailsKo: GuideLocalizedContent = {
  ...howToExtractYoutubeThumbnailsEn,
  title: "YouTube 썸네일 추출 방법",
  description: "유튜브 썸네일 이미지를 빠르게 확인하고 참고용으로 활용하는 방법을 안내합니다.",
  intro: "썸네일은 영상의 첫인상을 결정합니다. URL에서 대표 이미지를 바로 추출하면 경쟁 채널 분석, 자료 제작, 내부 리뷰를 훨씬 빠르게 진행할 수 있습니다.",
  categoryLabel: "콘텐츠 워크플로",
  useCasesTitle: "썸네일을 추출하는 이유",
  useCases: [
    "경쟁 영상 썸네일 스타일을 비교할 때",
    "제목/썸네일 조합을 분석할 때",
    "교육 자료나 제안서에 썸네일 예시를 넣을 때",
    "팀 내부 리뷰에 원본 썸네일 URL이 필요할 때",
    "영상 리서치 결과를 정리할 때",
    "썸네일 품질을 빠르게 확인할 때"
  ],
  closingTitle: "간단한 흐름으로 충분합니다",
  closingText: "영상 링크를 넣고 썸네일을 확인하는 작업만으로도 콘텐츠 분석 속도가 크게 올라갑니다. 필요한 해상도와 사용 목적을 먼저 정하면 더 효율적입니다.",
  relatedToolLabel: "유튜브 썸네일 추출기 열기",
  sections: [
    { heading: "썸네일 추출이 유용한 이유", paragraphs: ["썸네일은 제목보다 먼저 시선을 끌기 때문에 성과 분석에 중요한 단서가 됩니다.", "직접 이미지를 비교하면 색상, 텍스트 배치, 인물 클로즈업 같은 패턴을 빠르게 파악할 수 있습니다."] },
    { heading: "실무에서 쓰는 방법", paragraphs: ["영상 URL을 입력해 가능한 썸네일 크기를 확인한 뒤, 목적에 맞는 버전을 선택하세요.", "분석 문서나 내부 리뷰 자료에는 원본 URL과 함께 저장하면 재검토가 쉽습니다."] },
    { heading: "주의할 점", paragraphs: ["모든 영상이 모든 해상도 썸네일을 제공하는 것은 아닙니다.", "썸네일 접근 가능 여부와 별개로 저작권/사용 권한은 별도로 확인해야 합니다."] }
  ]
};
const howToExtractYoutubeThumbnailsJa: GuideLocalizedContent = { ...howToExtractYoutubeThumbnailsEn, title: "YouTubeサムネイルの抽出方法", description: "YouTubeのサムネイル画像を素早く確認・参照するための実用ガイドです。", categoryLabel: "コンテンツワークフロー", useCasesTitle: "抽出が役立つ場面", closingTitle: "シンプルに進める", relatedToolLabel: "YouTubeサムネ抽出を開く" };
const howToExtractYoutubeThumbnailsEs: GuideLocalizedContent = { ...howToExtractYoutubeThumbnailsEn, title: "Cómo extraer miniaturas de YouTube", description: "Extrae miniaturas de YouTube rápidamente para revisión, referencia y trabajo de contenido.", categoryLabel: "Flujo de contenido", useCasesTitle: "Por qué extraer miniaturas", closingTitle: "Mantén el proceso simple", relatedToolLabel: "Abrir extractor de miniaturas" };
const howToExtractYoutubeThumbnailsFr: GuideLocalizedContent = { ...howToExtractYoutubeThumbnailsEn, title: "Comment extraire des miniatures YouTube", description: "Récupérez rapidement des miniatures YouTube pour la veille, la référence et la préparation de contenu.", categoryLabel: "Workflow contenu", useCasesTitle: "Pourquoi extraire des miniatures", closingTitle: "Gardez un workflow simple", relatedToolLabel: "Ouvrir l’extracteur YouTube" };
const howToExtractYoutubeThumbnailsDe: GuideLocalizedContent = { ...howToExtractYoutubeThumbnailsEn, title: "So extrahierst du YouTube-Thumbnails", description: "Extrahiere YouTube-Thumbnails schnell für Analyse, Referenz und Content-Planung.", categoryLabel: "Content-Workflow", useCasesTitle: "Warum Thumbnails extrahieren", closingTitle: "Einfacher Ablauf reicht", relatedToolLabel: "Thumbnail-Extractor öffnen" };

const howToConvertTimestampsQuicklyKo: GuideLocalizedContent = {
  ...howToConvertTimestampsQuicklyEn,
  title: "타임스탬프를 빠르게 변환하는 방법",
  description: "로그와 API의 시간 값을 빠르게 읽을 수 있도록 타임스탬프 변환 흐름을 정리했습니다.",
  intro: "Unix timestamp는 시스템 간 교환에는 편하지만 사람에게는 바로 읽기 어렵습니다. 빠른 변환 습관을 만들면 장애 분석, 로그 추적, QA 확인 속도가 크게 좋아집니다.",
  categoryLabel: "개발 워크플로",
  useCasesTitle: "이럴 때 특히 유용합니다",
  useCases: [
    "로그 오류 발생 시각을 사람 기준 시간으로 볼 때",
    "API 응답의 시간 필드를 검증할 때",
    "타임존 차이로 생긴 버그를 확인할 때",
    "백엔드/프론트 시간 표시가 다른 원인을 찾을 때",
    "QA 재현 시간대를 정확히 맞출 때",
    "모니터링 알림 시간을 팀과 공유할 때"
  ],
  closingTitle: "가볍고 빠르게 확인하세요",
  closingText: "타임스탬프 변환은 복잡한 작업이 아닙니다. 입력값, 단위(초/밀리초), 타임존만 빠르게 점검해도 대부분의 시간 관련 이슈를 바로 파악할 수 있습니다.",
  relatedToolLabel: "타임스탬프 변환기 열기",
  sections: [
    { heading: "왜 빠른 변환이 중요한가", paragraphs: ["숫자 타임스탬프를 사람이 읽을 수 있는 날짜로 바꾸면 원인 분석 속도가 크게 빨라집니다.", "특히 장애 대응이나 API 검증에서는 몇 초 차이도 중요한 단서가 됩니다."] },
    { heading: "자주 확인할 포인트", paragraphs: ["입력 단위가 초인지 밀리초인지 먼저 구분하세요.", "UTC와 로컬 타임존을 모두 확인해 화면 표시 시간과 저장 시간이 맞는지 점검하세요."] },
    { heading: "간단한 작업 흐름", paragraphs: ["값을 붙여 넣고 변환 결과를 확인한 뒤, 필요한 경우 역변환으로 다시 검증하세요.", "로그, DB, API 응답을 같은 기준 시간대로 맞추면 디버깅이 훨씬 쉬워집니다."] }
  ]
};
const howToConvertTimestampsQuicklyJa: GuideLocalizedContent = { ...howToConvertTimestampsQuicklyEn, title: "タイムスタンプを素早く変換する方法", description: "ログやAPIの時刻値を素早く読み解くための実用的な変換フローを紹介します。", categoryLabel: "開発ワークフロー", useCasesTitle: "有効な場面", closingTitle: "軽く素早く確認", relatedToolLabel: "タイムスタンプ変換を開く" };
const howToConvertTimestampsQuicklyEs: GuideLocalizedContent = { ...howToConvertTimestampsQuicklyEn, title: "Cómo convertir timestamps rápidamente", description: "Convierte timestamps con rapidez para interpretar logs y datos temporales con más confianza.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Cuándo es más útil", closingTitle: "Proceso simple y rápido", relatedToolLabel: "Abrir convertidor de timestamp" };
const howToConvertTimestampsQuicklyFr: GuideLocalizedContent = { ...howToConvertTimestampsQuicklyEn, title: "Comment convertir des timestamps rapidement", description: "Convertissez rapidement les timestamps pour lire les logs et fiabiliser l’analyse temporelle.", categoryLabel: "Workflow développeur", useCasesTitle: "Quand c’est le plus utile", closingTitle: "Restez simple et rapide", relatedToolLabel: "Ouvrir le convertisseur" };
const howToConvertTimestampsQuicklyDe: GuideLocalizedContent = { ...howToConvertTimestampsQuicklyEn, title: "So wandelst du Timestamps schnell um", description: "Wandle Zeitstempel schnell um, um Logs und zeitbasierte Daten sicherer zu lesen.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Wann es am meisten hilft", closingTitle: "Schnell und schlank prüfen", relatedToolLabel: "Timestamp-Konverter öffnen" };
const howToUseAJsonFormatterForDebuggingEn: GuideLocalizedContent = {
  title: "How to Use a JSON Formatter for Debugging",
  description:
    "Learn how to use a JSON formatter for debugging so you can inspect payloads, spot mistakes faster, and keep structured data easier to read.",
  intro:
    "JSON appears everywhere in modern web work. You see it in API responses, configuration files, logs, payloads, and test data. It is useful because it is structured and portable, but raw JSON is not always easy to read when it is compressed, malformed, or deeply nested.",
  categoryLabel: "DEVELOPER WORKFLOW",
  useCasesTitle: "When a formatter is most useful",
  useCases: [
    "Inspecting API responses in development.",
    "Debugging request payloads.",
    "Validating copied JSON from a log or dashboard.",
    "Reviewing structured configuration data.",
    "Cleaning up test fixtures.",
    "Sharing readable examples with teammates."
  ],
  closingTitle: "Keep the workflow simple",
  closingText:
    "You do not need a large toolchain just to inspect JSON. In many cases, a fast browser-based formatter is enough to turn messy structured text into something readable and easier to debug. When the data is easier to read, the real problem is often easier to find.",
  relatedToolLabel: "Open the JSON Formatter",
  sections: [
    {
      heading: "Why JSON formatting matters",
      paragraphs: [
        "When JSON is minified or poorly pasted, it becomes harder to review. Even if the data itself is valid, debugging takes longer when keys, arrays, and nested objects are difficult to scan.",
        "A small formatting step often saves time when working with logs, requests, or exported data."
      ],
      bullets: [
        "read API responses more easily",
        "spot missing commas or brackets",
        "understand nested fields faster",
        "compare payloads during testing",
        "clean up copied data before sharing it",
        "reduce mistakes during debugging"
      ]
    },
    {
      heading: "How to use a JSON formatter for debugging",
      paragraphs: [
        "You do not need a heavy IDE workflow for every JSON check. A browser-based formatter is often enough for fast debugging.",
        "1. Paste the JSON exactly as it appears. Start with the raw text from the API response, request body, log entry, or configuration file. If the content is compressed into a single line, that is fine. The formatter should help make it readable.",
        "2. Run the formatter. Once formatted, objects, arrays, and nested values become easier to scan. This makes it much easier to see where fields begin, where structures end, and whether something looks unexpected.",
        "3. Look for structure problems. After formatting, check for common issues like missing commas, extra trailing characters, broken brackets or braces, incorrect nesting, and duplicated or misplaced keys. Many JSON bugs become obvious once the structure is readable.",
        "4. Compare expected and actual values. A formatter is also helpful when you need to compare two payloads. Once both are readable, differences in field names, null values, booleans, or array items become much easier to notice.",
        "5. Use minify only when needed. Readable JSON is best for debugging. Minified JSON is useful when you need compact output for transport or embedding, but not for inspection."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "One common mistake is assuming that formatted JSON is automatically valid JSON. A formatter can help you read the structure, but validation still matters if the source text is broken.",
        "Another mistake is pasting partial payloads without realizing they are incomplete. If the formatter fails, the issue may be missing opening or closing characters in the copied text.",
        "It is also easy to confuse JSON with JavaScript object syntax. Not every JavaScript object snippet is valid JSON. For example, JSON requires double quotes around keys and string values.",
        "Finally, avoid using minified output while actively debugging unless you truly need it. Readability is usually more helpful than compactness during troubleshooting."
      ]
    },
    {
      heading: "A practical debugging workflow",
      paragraphs: [
        "A simple workflow works well in most cases. Copy the raw JSON from the source, paste it into the formatter, review the structure, validate the content, compare important fields, and copy the cleaned output if needed for reporting or testing.",
        "This process is quick, repeatable, and useful across many developer tasks."
      ]
    },
    {
      heading: "Why this matters beyond development",
      paragraphs: [
        "JSON formatting is not only for engineers. Analysts, QA testers, technical support staff, and product teams also work with structured data. A readable JSON block makes it easier to explain issues, review values, and communicate clearly with others.",
        "That makes a JSON formatter useful in both technical debugging and cross-functional collaboration."
      ]
    }
  ]
};

const howToUseAJsonFormatterForDebuggingKo: GuideLocalizedContent = {
  ...howToUseAJsonFormatterForDebuggingEn,
  title: "디버깅에 JSON 포매터를 사용하는 방법",
  description: "JSON 포매터로 페이로드를 읽기 쉽게 정리하고 구조 오류를 더 빠르게 찾는 실무 방법을 소개합니다.",
  intro: "압축되거나 중첩된 JSON은 사람이 바로 읽기 어렵습니다. 포매터로 구조를 정리하면 누락 필드, 괄호 오류, 예상과 다른 값이 빠르게 드러납니다.",
  categoryLabel: "개발 워크플로",
  useCasesTitle: "포매터가 특히 유용한 상황",
  useCases: ["API 응답 검토", "요청 본문 디버깅", "로그에서 복사한 JSON 검증", "설정 파일 구조 확인", "테스트 데이터 정리", "팀 공유용 예시 작성"],
  closingTitle: "단순한 흐름이면 충분합니다",
  closingText: "원본 JSON을 붙여 넣고 정렬한 뒤 구조와 핵심 필드를 확인하세요. 이 작은 단계만으로 디버깅 시간이 크게 줄어듭니다.",
  relatedToolLabel: "JSON 포매터 열기",
  sections: [
    { heading: "포매팅이 필요한 이유", paragraphs: ["한 줄 JSON은 문법은 맞아도 검토 속도를 크게 떨어뜨립니다.", "정렬된 구조는 배열/객체 경계를 명확히 보여 줘서 오류 탐지를 쉽게 만듭니다."] },
    { heading: "실무 점검 순서", paragraphs: ["원본을 그대로 붙여 넣고 포맷을 실행하세요.", "그다음 누락 쉼표, 잘못된 중첩, 필드 오타, null/boolean 차이를 순서대로 확인하면 됩니다."] },
    { heading: "자주 하는 실수", paragraphs: ["포맷 결과가 보인다고 항상 유효 JSON인 것은 아닙니다.", "디버깅 중에는 minify보다 가독성을 우선해야 문제를 더 빨리 찾을 수 있습니다."] }
  ]
};


const howToConvertImagesToWebpEn: GuideLocalizedContent = {
  title: "How to Convert Images to WebP",
  description: "Learn how to convert images to WebP so you can reduce file size, improve page speed, and keep image workflows lightweight.",
  intro: "WebP is a modern image format designed to keep image files smaller while preserving useful visual quality. For many websites, this makes it a practical option when you want faster page loads without rebuilding your entire image workflow.",
  categoryLabel: "IMAGE FORMAT",
  useCasesTitle: "When this is most useful",
  useCases: [
    "Optimizing a blog post before publishing.",
    "Preparing article thumbnails.",
    "Improving page speed on image-heavy pages.",
    "Cleaning up website assets.",
    "Exporting screenshots for the web.",
    "Reducing file sizes for repeat content workflows."
  ],
  closingTitle: "Keep the workflow simple",
  closingText:
    "You do not need a full design suite every time you want a lighter web image. For many everyday publishing tasks, a browser-based WebP converter is enough to reduce file size and keep your workflow moving. The goal is simple: smaller images, cleaner delivery, and better practical performance.",
  relatedToolLabel: "Open the WebP Converter",
  sections: [
    {
      heading: "Why people convert images to WebP",
      paragraphs: [
        "Large image files can slow down a page, especially on mobile connections. Even when the design looks good, oversized images can make the site feel slower than it needs to be.",
        "For many practical web tasks, WebP is a simple optimization step with clear benefits."
      ],
      bullets: [
        "Reduce file size for common web images.",
        "Improve page speed.",
        "Make image-heavy pages lighter.",
        "Prepare assets for blogs, guides, and landing pages.",
        "Keep uploads easier to manage.",
        "Balance quality and performance more efficiently."
      ]
    },
    {
      heading: "What WebP is good for",
      paragraphs: [
        "It is most useful when your goal is web delivery, not archival storage or advanced editing."
      ],
      bullets: [
        "Blog images.",
        "Website illustrations.",
        "Interface screenshots.",
        "Article cover images.",
        "Marketing assets for the web.",
        "General-purpose images that need smaller delivery size."
      ]
    },
    {
      heading: "How to convert images to WebP",
      paragraphs: [
        "You do not need a complicated graphics workflow just to create lighter web images. A focused browser-based converter is often enough.",
        "1. Start with the source image. Choose the JPG or PNG image you want to optimize. For many everyday tasks, these are the most common starting formats.",
        "2. Upload the file into the converter. Once the image is loaded, the converter can prepare a WebP output without requiring a design tool or command-line step.",
        "3. Review the output for practical quality. The goal is not simply to make the file smaller. You should also check whether the converted image still looks acceptable for its purpose. A blog illustration and a product image may need different quality expectations.",
        "4. Download the converted file. After the conversion, save the WebP version and compare it with the original if needed.",
        "5. Use the WebP image in the right context. WebP is best used for web publishing workflows. If you still need an editable master file, keep the original as well."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "A common mistake is converting everything automatically without checking the result. Smaller files are useful, but not if important text, edges, or image clarity become noticeably worse.",
        "Another mistake is assuming WebP should replace every image in every workflow. It is excellent for web delivery, but it is not always the best master format for editing or long-term storage.",
        "It is also easy to forget that some images do not benefit equally. A simple illustration may compress very well, while another image may need a closer quality review.",
        "Finally, do not overcomplicate the process. If your goal is to prepare a lighter image for a webpage, a simple conversion workflow is usually enough."
      ]
    },
    {
      heading: "Why this matters for performance",
      paragraphs: [
        "Image optimization is one of the easiest ways to improve page weight. When images become lighter, pages often load faster, feel more responsive, and work better on slower networks.",
        "That is useful not only for users, but also for site quality in general. Performance improvements often come from small repeated actions, and image conversion is one of the most practical ones."
      ]
    }
  ]
};

const howToConvertImagesToWebpKo: GuideLocalizedContent = {
  ...howToConvertImagesToWebpEn,
  title: "이미지를 WebP로 변환하는 방법",
  description: "이미지를 WebP로 바꿔 파일 크기를 줄이고 페이지 로딩 성능을 개선하는 실용적인 흐름입니다.",
  intro: "WebP는 시각 품질을 유지하면서도 웹 전송 용량을 줄이기 쉬운 형식입니다. 블로그, 랜딩 페이지, 문서 썸네일 같은 실무에 특히 잘 맞습니다.",
  categoryLabel: "이미지 형식",
  useCasesTitle: "이럴 때 특히 유용합니다",
  useCases: ["게시 전 이미지 최적화", "콘텐츠 썸네일 경량화", "이미지 많은 페이지 속도 개선", "웹용 스크린샷 정리", "반복 업로드 자산 관리", "운영 비용 절감"],
  closingTitle: "단순하게 운영하세요",
  closingText: "복잡한 그래픽 툴 없이도 브라우저 기반 변환기로 충분한 경우가 많습니다. 핵심은 용량과 품질의 균형입니다.",
  relatedToolLabel: "WebP 변환기 열기",
  sections: [
    { heading: "왜 WebP로 변환하나", paragraphs: ["큰 이미지는 모바일 환경에서 체감 속도를 크게 떨어뜨립니다.", "WebP 변환은 가장 간단하게 체감 성능을 올릴 수 있는 최적화 단계 중 하나입니다."] },
    { heading: "변환할 때 확인할 점", paragraphs: ["용량만 보지 말고 텍스트 선명도, 경계선, 그라디언트 품질을 함께 확인하세요.", "콘텐츠 이미지와 상품 이미지는 허용 가능한 품질 기준이 다를 수 있습니다."] },
    { heading: "권장 작업 흐름", paragraphs: ["원본 선택 → 변환 → 전후 비교 → 웹에 반영 순서로 진행하세요.", "수정 가능 원본이 필요한 자산은 원본 파일도 함께 보관하는 것이 안전합니다."] }
  ]
};

const howToConvertImagesToWebpJa: GuideLocalizedContent = {
  ...howToConvertImagesToWebpEn,
  title: "画像をWebPに変換する方法",
  description: "画像をWebPに変換して、ファイルサイズを抑えながらページ表示を軽くする実践ガイドです。",
  intro: "WebPは、見た目を保ちながら配信用の容量を小さくしやすい画像形式です。記事画像やサムネイルなど日常的なWeb運用で効果を出しやすいのが特徴です。",
  categoryLabel: "画像フォーマット",
  useCasesTitle: "特に役立つ場面",
  useCases: ["公開前の画像最適化", "記事サムネイルの軽量化", "画像の多いページの高速化", "Web向けスクリーンショット整理", "繰り返し使う素材の管理", "表示速度の改善"],
  closingTitle: "シンプルな運用で十分",
  closingText: "複雑なデザインツールがなくても、ブラウザ変換だけで十分なケースは多くあります。重要なのは容量と見た目のバランスです。",
  relatedToolLabel: "WebP変換ツールを開く",
  sections: [
    { heading: "なぜWebPに変換するのか", paragraphs: ["重い画像は特にモバイルで体感速度を下げます。", "WebP変換は、手間を増やさずに表示速度を改善しやすい方法です。"] },
    { heading: "変換時のチェックポイント", paragraphs: ["容量だけでなく、文字の鮮明さや輪郭、グラデーションの見え方も確認しましょう。", "用途ごとに許容できる画質は異なるため、実際の掲載場所で確認するのが安全です。"] },
    { heading: "実務フロー", paragraphs: ["元画像を選択し、変換後に前後比較してから公開素材を差し替えます。", "再編集が必要な画像は、元ファイルを別途保管しておくと安心です。"] }
  ]
};

const metaTitleLengthGuideContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How Many Characters Should a Meta Title Be?",
    description: "Use a practical title-length workflow so your title tags stay clear, clickable, and less likely to be truncated in search results.",
    intro: "There is no perfect title length for every page, but a practical range helps. If a meta title is too long, search results may cut it off. If it is too short, you may miss useful context.",
    categoryLabel: "SEO Writing",
    useCasesTitle: "When this guide helps most",
    useCases: ["Writing titles for new blog posts.", "Refreshing old category pages.", "Improving low-CTR pages.", "Standardizing titles across a content team."],
    closingTitle: "Write for people first, then trim",
    closingText: "Start with a clear title, then tighten the wording with a quick character check. The best title is specific, readable, and focused on intent.",
    relatedToolLabel: "Open the Character Counter",
    sections: [
      { heading: "A practical target range", paragraphs: ["Many SEO teams aim for roughly 50 to 60 characters as a working range. This is not a strict rule, but it often helps titles display more cleanly.", "Treat the range as a checkpoint, not a hard limit. A slightly longer title can still perform if the wording is strong and front-loaded."] },
      { heading: "Put important words first", paragraphs: ["Search users scan quickly. Lead with your core topic, then add supporting context.", "If truncation happens, the most useful part of the title should still be visible."] },
      {
        heading: "Simple title editing checklist",
        paragraphs: ["Before publishing, run a fast quality pass."],
        bullets: ["Keep one clear topic per title.", "Remove filler phrases like “complete guide to”.", "Avoid repeating the same keyword unnaturally.", "Check final length in a character counter."]
      },
      { heading: "Common mistakes", paragraphs: ["A frequent mistake is chasing an exact character number while sacrificing readability. Another is writing vague titles that fit the length but do not explain value.", "It is also common to place brand names first on every page. For many pages, putting the topic first is more useful."] },
      { heading: "Quick workflow for teams", paragraphs: ["Draft 2–3 title options, check length, then choose the clearest one. Save your preferred pattern in an internal style note so future titles stay consistent.", "This keeps SEO writing practical and repeatable without slowing publishing."] }
    ]
  },
  ko: {
    title: "메타 타이틀은 몇 글자가 적당할까요?",
    description: "검색 결과에서 잘리지 않고 클릭을 유도하기 쉬운 메타 타이틀 길이 점검 방법을 소개합니다.",
    intro: "모든 페이지에 정답 길이가 있는 것은 아니지만, 실무에서 참고할 범위를 잡아두면 훨씬 편합니다. 너무 길면 잘리고, 너무 짧으면 정보가 부족해질 수 있습니다.",
    categoryLabel: "SEO 작성",
    useCasesTitle: "이럴 때 특히 유용합니다",
    useCases: ["새 블로그 글 제목 작성", "기존 카테고리 페이지 개선", "CTR이 낮은 페이지 점검", "팀 내 제목 작성 기준 통일"],
    closingTitle: "먼저 명확하게 쓰고, 그다음 다듬으세요",
    closingText: "핵심은 자연스럽고 명확한 제목입니다. 마지막에 글자 수를 점검해 불필요한 부분만 줄이면 됩니다.",
    relatedToolLabel: "문자 수 카운터 열기",
    sections: [
      { heading: "실무에서 자주 쓰는 길이 범위", paragraphs: ["보통 50~60자 전후를 실무 기준으로 많이 사용합니다.", "절대 규칙은 아니므로, 핵심 정보가 앞에 있다면 약간 길어도 괜찮습니다."] },
      { heading: "중요한 단어를 앞에 배치하기", paragraphs: ["사용자는 검색 결과를 빠르게 훑어봅니다. 핵심 주제를 먼저 쓰고 보조 설명을 뒤에 붙이세요.", "일부가 잘려도 핵심 의미가 남도록 구성하는 것이 좋습니다."] },
      { heading: "게시 전 체크리스트", paragraphs: ["간단한 최종 점검만으로 품질을 크게 높일 수 있습니다."], bullets: ["제목에 주제를 하나로 명확히 담기", "군더더기 표현 줄이기", "키워드 과반복 피하기", "문자 수 도구로 최종 길이 확인"] },
      { heading: "자주 하는 실수", paragraphs: ["정확한 글자 수만 맞추려다가 어색한 제목이 되는 경우가 많습니다.", "브랜드명을 항상 맨 앞에 넣어 핵심 주제가 뒤로 밀리는 것도 흔한 실수입니다."] },
      { heading: "팀 운영 팁", paragraphs: ["제목 초안을 2~3개 만든 뒤 길이와 명확성을 비교해 하나를 고르세요.", "선택 기준을 간단한 내부 가이드로 남겨두면 일관성을 유지하기 쉽습니다."] }
    ]
  },
  ja: {
    title: "メタタイトルは何文字が適切？",
    description: "検索結果で見切れにくく、内容が伝わりやすいタイトルタグの文字数チェック方法を解説します。",
    intro: "すべてのページに共通する正解はありませんが、目安を持つと実務が安定します。長すぎると省略され、短すぎると情報不足になりがちです。",
    categoryLabel: "SEOライティング",
    useCasesTitle: "役立つシーン",
    useCases: ["新しい記事タイトルの作成", "既存ページのCTR改善", "カテゴリページの見直し", "チーム内ルールの統一"],
    closingTitle: "まず伝わるタイトルを作る",
    closingText: "最初にわかりやすい文を作り、最後に文字数を調整する流れが実用的です。読みやすさを優先しましょう。",
    relatedToolLabel: "文字数カウンターを開く",
    sections: [
      { heading: "実務で使いやすい目安", paragraphs: ["一般的には50〜60文字前後が確認しやすい目安です。", "ただし固定ルールではありません。重要語を先頭に置けていれば少し長くても問題ない場合があります。"] },
      { heading: "重要な語句を先に置く", paragraphs: ["検索結果では先頭の情報が最も読まれます。テーマを最初に置いて、補足は後ろに回しましょう.", "省略されても要点が残る構成を意識すると安全です。"] },
      { heading: "公開前の簡易チェック", paragraphs: ["公開前に短い確認を行うだけで質が上がります。"], bullets: ["1タイトル1テーマにする", "不要な語句を削る", "不自然なキーワード反復を避ける", "文字数ツールで最終確認する"] },
      { heading: "よくある失敗", paragraphs: ["文字数だけを合わせて不自然なタイトルになるケースがよくあります。", "どのページでもブランド名を先頭に置いてしまい、主題が後ろに下がるのも典型的です。"] },
      { heading: "チーム向けワークフロー", paragraphs: ["タイトル案を2〜3個作成し、文字数と明確さで比較して選びます。", "判断基準を短い社内メモに残すと、更新時の品質を揃えやすくなります。"] }
    ]
  },
  es: {
    title: "¿Cuántos caracteres debe tener un meta title?",
    description: "Aprende una forma práctica de ajustar la longitud del title tag para que sea claro, útil y menos propenso a truncarse.",
    intro: "No existe una cifra perfecta para todos los casos, pero trabajar con un rango orientativo ayuda mucho. Si el título es muy largo, puede cortarse; si es demasiado corto, puede perder contexto.",
    categoryLabel: "Redacción SEO",
    useCasesTitle: "Cuándo te conviene",
    useCases: ["Crear títulos para artículos nuevos.", "Optimizar páginas con CTR bajo.", "Actualizar categorías antiguas.", "Mantener consistencia en equipos de contenido."],
    closingTitle: "Primero claridad, luego ajuste",
    closingText: "Escribe un título claro y después recórtalo con una revisión rápida de caracteres. La prioridad es que se entienda y responda a la intención de búsqueda.",
    relatedToolLabel: "Abrir contador de caracteres",
    sections: [
      { heading: "Rango recomendado en la práctica", paragraphs: ["Muchos equipos trabajan alrededor de 50 a 60 caracteres como referencia inicial.", "No es una regla rígida: lo importante es que las palabras clave principales aparezcan al inicio."] },
      { heading: "Pon lo importante al principio", paragraphs: ["Las personas escanean rápido los resultados. Empieza por el tema principal y deja el contexto adicional para el final.", "Así, incluso con truncamiento, el mensaje principal sigue visible."] },
      { heading: "Checklist rápida antes de publicar", paragraphs: ["Haz una revisión breve antes de cerrar el título."], bullets: ["Un solo enfoque por título.", "Quitar frases de relleno.", "Evitar repetir keywords de forma forzada.", "Verificar longitud en el contador."] },
      { heading: "Errores habituales", paragraphs: ["Un error común es perseguir un número exacto y terminar con un texto poco natural.", "Otro es poner siempre la marca al principio y esconder el tema principal."] },
      { heading: "Flujo simple para equipos", paragraphs: ["Crea 2 o 3 opciones de título, compáralas y elige la más clara.", "Guarda el criterio en una guía interna corta para mantener consistencia."] }
    ]
  },
  fr: {
    title: "Combien de caractères pour une balise title ?",
    description: "Apprenez à ajuster la longueur d'un title tag pour qu'il reste clair, utile et moins souvent tronqué dans les résultats de recherche.",
    intro: "Il n'existe pas une longueur parfaite pour toutes les pages, mais une plage de travail aide beaucoup. Trop long, le titre peut être coupé. Trop court, il peut manquer de contexte.",
    categoryLabel: "Rédaction SEO",
    useCasesTitle: "Quand ce guide est utile",
    useCases: ["Rédiger des titres pour de nouveaux articles.", "Améliorer des pages à faible CTR.", "Mettre à jour des pages catégories.", "Harmoniser la rédaction dans une équipe."],
    closingTitle: "Clarté d'abord, ajustement ensuite",
    closingText: "Rédigez d'abord un titre clair, puis affinez sa longueur avec un compteur. Un bon title est précis, lisible et orienté intention.",
    relatedToolLabel: "Ouvrir le compteur de caractères",
    sections: [
      { heading: "Une plage pratique à viser", paragraphs: ["Beaucoup d'équipes SEO visent environ 50 à 60 caractères comme repère.", "Ce n'est pas une règle stricte : l'essentiel est de placer l'information clé au début."] },
      { heading: "Mettre les mots importants en premier", paragraphs: ["Les utilisateurs balayent vite les résultats. Commencez par le sujet principal, puis ajoutez le contexte.", "Même en cas de troncature, l'idée principale reste visible."] },
      { heading: "Checklist avant publication", paragraphs: ["Une vérification rapide suffit souvent."], bullets: ["Un sujet clair par titre.", "Supprimer les formulations inutiles.", "Éviter la répétition forcée de mots-clés.", "Contrôler la longueur finale."] },
      { heading: "Erreurs fréquentes", paragraphs: ["Se focaliser sur un nombre exact et perdre la fluidité du texte est une erreur classique.", "Mettre la marque en premier sur toutes les pages peut aussi masquer le sujet principal."] },
      { heading: "Workflow d'équipe", paragraphs: ["Préparez 2 ou 3 variantes, comparez-les, puis choisissez la plus lisible.", "Documentez la logique dans une courte note interne pour garder une cohérence durable."] }
    ]
  },
  de: {
    title: "Wie viele Zeichen sollte ein Meta Title haben?",
    description: "Ein praktischer Leitfaden zur Title-Länge, damit Titel klar bleiben und in Suchergebnissen seltener abgeschnitten werden.",
    intro: "Es gibt keine perfekte Länge für jede Seite. Ein sinnvoller Rahmen hilft aber, bessere Titel zu schreiben. Zu lange Titel werden oft gekürzt, zu kurze liefern zu wenig Kontext.",
    categoryLabel: "SEO-Texte",
    useCasesTitle: "Wann dieser Guide hilft",
    useCases: ["Titel für neue Inhalte schreiben.", "Seiten mit niedriger CTR optimieren.", "Kategorie-Seiten überarbeiten.", "Teamweite Schreibregeln vereinheitlichen."],
    closingTitle: "Erst klar formulieren, dann kürzen",
    closingText: "Schreibe zuerst einen verständlichen Titel und optimiere danach die Länge. Wichtig ist, dass der Titel konkret und gut lesbar bleibt.",
    relatedToolLabel: "Zeichenzähler öffnen",
    sections: [
      { heading: "Praktischer Zielbereich", paragraphs: ["Viele SEO-Teams arbeiten mit etwa 50 bis 60 Zeichen als Richtwert.", "Das ist keine harte Grenze. Entscheidend ist, dass die wichtigsten Begriffe vorne stehen."] },
      { heading: "Wichtige Begriffe nach vorn", paragraphs: ["Nutzer scannen Suchergebnisse schnell. Stelle das Hauptthema an den Anfang und ergänze Details danach.", "So bleibt die Kernaussage sichtbar, auch wenn der Titel gekürzt wird."] },
      { heading: "Kurze Checkliste vor dem Veröffentlichen", paragraphs: ["Ein schneller Qualitätscheck reicht oft aus."], bullets: ["Ein klares Thema pro Titel.", "Füllwörter streichen.", "Keine unnatürliche Keyword-Wiederholung.", "Länge im Zeichenzähler prüfen."] },
      { heading: "Häufige Fehler", paragraphs: ["Ein typischer Fehler ist, nur eine exakte Zeichenzahl zu treffen und dafür Lesbarkeit zu verlieren.", "Ebenso problematisch: den Markennamen immer zuerst zu setzen und das Thema nach hinten zu schieben."] },
      { heading: "Einfacher Team-Workflow", paragraphs: ["Erstelle 2 bis 3 Varianten, vergleiche sie und wähle die klarste.", "Halte die Entscheidungskriterien kurz intern fest, damit neue Titel konsistent bleiben."] }
    ]
  }
};

const metaDescriptionLengthForCtrContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How Long Should a Meta Description Be for Better CTR?",
    description: "Learn a practical meta description length workflow that improves clarity, reduces truncation risk, and supports better click-through rates.",
    intro: "A meta description does not directly guarantee rankings, but it strongly influences whether users click. Good length helps, but relevance and clarity matter just as much.",
    categoryLabel: "SEO Writing",
    useCasesTitle: "Best times to use this",
    useCases: ["Writing new page snippets.", "Refreshing older SERP snippets.", "Improving low-CTR pages.", "Editing multilingual metadata."],
    closingTitle: "Treat length as a quality check",
    closingText: "Aim for concise, useful copy that matches search intent. Character count is a guardrail, not the goal.",
    relatedToolLabel: "Open the Character Counter",
    sections: [
      { heading: "Useful length range", paragraphs: ["A common working range is around 140 to 160 characters. This often fits well on many search result layouts.", "Still, there is no fixed guarantee because snippet display can vary by query and device."] },
      { heading: "Write value, not filler", paragraphs: ["A strong description quickly explains what the page offers and why it is worth clicking.", "Avoid vague lines that simply repeat the title without adding context."] },
      { heading: "Practical structure that works", paragraphs: ["For many pages, this pattern is effective: topic + benefit + clear expectation.", "Example: “Learn how to set practical meta title and description lengths so your snippets stay readable and click-friendly.”"] },
      { heading: "Quick CTR-focused checklist", paragraphs: ["Before publishing, confirm these points."], bullets: ["Mention the specific page topic.", "Add one practical outcome or benefit.", "Keep language natural and direct.", "Check the final character count."] },
      { heading: "Common pitfalls", paragraphs: ["Stuffing keywords can make snippets look spammy and lower trust.", "Copying one generic description across many pages also weakens relevance and click potential."] }
    ]
  },
  ko: {
    title: "CTR을 높이려면 메타 설명은 얼마나 길어야 할까요?",
    description: "메타 설명 길이를 실무적으로 점검해 잘림을 줄이고 클릭 유도를 개선하는 방법을 설명합니다.",
    intro: "메타 설명이 순위를 직접 보장하지는 않지만, 검색 결과에서 클릭 여부에는 큰 영향을 줍니다. 길이와 함께 명확성, 관련성이 중요합니다.",
    categoryLabel: "SEO 작성",
    useCasesTitle: "이럴 때 유용합니다",
    useCases: ["새 페이지 스니펫 작성", "기존 검색 스니펫 개선", "CTR 낮은 페이지 보완", "다국어 메타데이터 편집"],
    closingTitle: "길이는 기준선, 핵심은 내용",
    closingText: "문자 수는 가이드일 뿐입니다. 검색 의도에 맞는 명확한 설명을 먼저 작성하세요.",
    relatedToolLabel: "문자 수 카운터 열기",
    sections: [
      { heading: "실무 기준 길이", paragraphs: ["보통 140~160자 전후를 많이 사용합니다.", "다만 검색어와 기기에 따라 노출 길이는 달라질 수 있으니 절대 기준으로 보지는 마세요."] },
      { heading: "핵심 가치를 먼저 쓰기", paragraphs: ["좋은 설명은 이 페이지가 무엇을 해결해 주는지 빠르게 전달합니다.", "제목을 반복하는 문장만 쓰면 클릭 이유가 약해집니다."] },
      { heading: "작성 패턴", paragraphs: ["주제 + 이점 + 기대 결과 순서로 쓰면 초보자도 쉽게 정리할 수 있습니다.", "예: “메타 타이틀/설명 길이를 실무 기준으로 정리해 검색 스니펫 가독성과 클릭률을 개선하세요.”"] },
      { heading: "게시 전 체크리스트", paragraphs: ["마지막에 네 가지만 확인하세요."], bullets: ["페이지 주제가 명확한가", "사용자 이점이 보이는가", "문장이 자연스러운가", "문자 수가 과도하지 않은가"] },
      { heading: "피해야 할 실수", paragraphs: ["키워드만 나열하면 스팸처럼 보일 수 있습니다.", "여러 페이지에 같은 설명을 복사해 쓰는 것도 관련성을 떨어뜨립니다."] }
    ]
  },
  ja: {
    title: "CTRを上げるメタディスクリプションの適切な長さは？",
    description: "メタディスクリプションの文字数を実務的に調整し、見切れを減らしつつクリックされやすくする方法を紹介します。",
    intro: "メタディスクリプションは順位を直接決める要素ではありませんが、クリック率には大きく影響します。長さだけでなく、内容の明確さが重要です。",
    categoryLabel: "SEOライティング",
    useCasesTitle: "活用シーン",
    useCases: ["新規ページの説明文作成", "既存スニペットの改善", "CTRの低いページの見直し", "多言語メタ情報の調整"],
    closingTitle: "文字数は目安として使う",
    closingText: "まず検索意図に合う説明を作り、最後に文字数を整える流れが効果的です。",
    relatedToolLabel: "文字数カウンターを開く",
    sections: [
      { heading: "実務で使う長さの目安", paragraphs: ["多くの場合、140〜160文字前後が扱いやすい目安です。", "ただし表示は検索クエリや端末で変わるため、固定値としては扱わないでください。"] },
      { heading: "価値を先に伝える", paragraphs: ["良い説明文は、ページで得られる内容やメリットを短く示します。", "タイトルの言い換えだけではクリック理由になりにくいです。"] },
      { heading: "書きやすい構成", paragraphs: ["「主題 + 利点 + 期待結果」の順でまとめると整理しやすくなります。", "例: 「メタタイトルと説明文の適切な長さを学び、検索スニペットの読みやすさとCTRを改善します。」"] },
      { heading: "公開前チェック", paragraphs: ["最後に次を確認しましょう。"], bullets: ["ページ内容が明確か", "読者メリットが入っているか", "自然な日本語か", "文字数が過剰でないか"] },
      { heading: "よくある失敗", paragraphs: ["キーワードを詰め込みすぎると不自然に見えます。", "同じ説明文を複数ページへ使い回すと関連性が下がります。"] }
    ]
  },
  es: {
    title: "¿Cuánto debe medir una meta description para mejorar el CTR?",
    description: "Guía práctica para ajustar la longitud de la meta description y redactar snippets más claros y más clicables.",
    intro: "La meta description no garantiza posiciones, pero sí influye mucho en el clic. La longitud ayuda, aunque el mensaje y la relevancia pesan igual o más.",
    categoryLabel: "Redacción SEO",
    useCasesTitle: "Cuándo aplicarlo",
    useCases: ["Redactar snippets para páginas nuevas.", "Actualizar resultados antiguos.", "Mejorar páginas con CTR bajo.", "Revisar metadatos multilingües."],
    closingTitle: "Usa la longitud como control de calidad",
    closingText: "Primero escribe una propuesta útil para el usuario. Después ajusta caracteres para mantenerla clara y visible.",
    relatedToolLabel: "Abrir contador de caracteres",
    sections: [
      { heading: "Rango recomendado", paragraphs: ["Como punto de partida, suele funcionar alrededor de 140 a 160 caracteres.", "Aun así, el recorte puede variar según consulta y dispositivo."] },
      { heading: "Evita texto de relleno", paragraphs: ["Una buena descripción explica rápidamente qué ofrece la página.", "Si solo repites el título, el snippet aporta poco valor."] },
      { heading: "Estructura sencilla", paragraphs: ["Tema + beneficio + expectativa es una fórmula útil para principiantes.", "Ejemplo: “Aprende a definir longitudes prácticas para title y description y mejora la legibilidad de tus snippets.”"] },
      { heading: "Checklist antes de publicar", paragraphs: ["Haz una validación breve."], bullets: ["Tema claro", "Beneficio concreto", "Lenguaje natural", "Longitud revisada"] },
      { heading: "Errores comunes", paragraphs: ["Saturar con keywords reduce confianza.", "Usar la misma descripción en muchas URLs baja relevancia."] }
    ]
  },
  fr: {
    title: "Quelle longueur pour une meta description qui améliore le CTR ?",
    description: "Une méthode simple pour ajuster la longueur des meta descriptions et rédiger des snippets plus clairs et plus engageants.",
    intro: "La meta description n'assure pas à elle seule le classement, mais elle influence fortement le taux de clic. La longueur compte, tout comme la clarté du message.",
    categoryLabel: "Rédaction SEO",
    useCasesTitle: "Quand l'utiliser",
    useCases: ["Rédiger des snippets pour de nouvelles pages.", "Mettre à jour des résultats anciens.", "Améliorer des pages à faible CTR.", "Relire des métadonnées multilingues."],
    closingTitle: "La longueur sert de garde-fou",
    closingText: "Commencez par un texte utile pour l'utilisateur, puis ajustez le nombre de caractères pour garder une lecture fluide.",
    relatedToolLabel: "Ouvrir le compteur de caractères",
    sections: [
      { heading: "Plage utile en pratique", paragraphs: ["Un repère courant se situe autour de 140 à 160 caractères.", "L'affichage peut varier selon la requête et l'appareil, donc ce n'est pas une règle absolue."] },
      { heading: "Privilégier la valeur", paragraphs: ["Une bonne description dit rapidement ce que la page apporte.", "Évitez les formulations vagues ou la simple répétition du title."] },
      { heading: "Structure recommandée", paragraphs: ["Sujet + bénéfice + résultat attendu fonctionne bien dans la plupart des cas.", "Exemple : « Apprenez à définir des longueurs meta pratiques pour garder des extraits lisibles et plus cliquables. »"] },
      { heading: "Checklist rapide", paragraphs: ["Avant publication, vérifiez l'essentiel."], bullets: ["Sujet explicite", "Bénéfice concret", "Texte naturel", "Longueur contrôlée"] },
      { heading: "Pièges fréquents", paragraphs: ["Trop de mots-clés donne un rendu spammy.", "Réutiliser la même description sur de nombreuses pages affaiblit la pertinence."] }
    ]
  },
  de: {
    title: "Wie lang sollte eine Meta Description für bessere CTR sein?",
    description: "Praktischer Leitfaden zur Description-Länge, damit Snippets klarer wirken und eher geklickt werden.",
    intro: "Meta Descriptions bestimmen Rankings nicht direkt, beeinflussen aber stark, ob Nutzer klicken. Gute Länge hilft, doch Relevanz und Klarheit sind genauso wichtig.",
    categoryLabel: "SEO-Texte",
    useCasesTitle: "Wann das besonders hilft",
    useCases: ["Neue Seiten-Snippets schreiben.", "Ältere Suchergebnisse überarbeiten.", "Seiten mit niedriger CTR verbessern.", "Mehrsprachige Metadaten prüfen."],
    closingTitle: "Länge als Qualitätscheck nutzen",
    closingText: "Erst einen nützlichen Text schreiben, dann auf passende Zeichenlänge bringen. So bleibt das Snippet natürlich und klickstark.",
    relatedToolLabel: "Zeichenzähler öffnen",
    sections: [
      { heading: "Praktischer Bereich", paragraphs: ["Als Arbeitswert funktionieren oft etwa 140 bis 160 Zeichen.", "Die tatsächliche Darstellung kann je nach Suchanfrage und Gerät variieren."] },
      { heading: "Mehr Aussage, weniger Fülltext", paragraphs: ["Eine gute Description erklärt schnell den Nutzen der Seite.", "Bloß den Title zu wiederholen bringt selten zusätzliche Klickgründe."] },
      { heading: "Einfache Struktur", paragraphs: ["Thema + Nutzen + Erwartung ist ein robuster Aufbau.", "Beispiel: „Lerne praxisnahe Längen für Meta Title und Description, damit deine Snippets klarer und klickfreundlicher werden.“"] },
      { heading: "Kurze Prüfliste", paragraphs: ["Vor dem Veröffentlichen kurz prüfen."], bullets: ["Thema klar genannt", "Nutzen enthalten", "Natürlich formuliert", "Zeichenlänge geprüft"] },
      { heading: "Häufige Fehler", paragraphs: ["Keyword-Stuffing wirkt schnell unseriös.", "Die gleiche Description für viele Seiten zu verwenden, schwächt Relevanz und CTR."] }
    ]
  }
};

const utmParametersExplainedContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "UTM Parameters Explained for Beginners",
    description: "Understand what UTM parameters are, what each core field means, and how to start campaign tracking without messy analytics data.",
    intro: "UTM parameters are short tags added to a URL so analytics tools can identify traffic source, channel, and campaign context.",
    categoryLabel: "Campaign Tracking",
    useCasesTitle: "When beginners usually need this",
    useCases: ["Running social media campaigns.", "Sharing links in newsletters.", "Tracking partner referrals.", "Comparing paid channels."],
    closingTitle: "Start simple and stay consistent",
    closingText: "You do not need complex tagging to begin. A small naming convention and a reliable UTM builder are enough to create clean, useful reports.",
    relatedToolLabel: "Open the UTM Builder",
    sections: [
      { heading: "What UTM means", paragraphs: ["UTM stands for Urchin Tracking Module. In practice, it means adding query parameters to links so traffic attribution is clearer in analytics.", "Without UTMs, many campaign visits can be grouped into generic buckets, which makes performance analysis harder."] },
      { heading: "The five common UTM fields", paragraphs: ["Most workflows use these parameters:"], bullets: ["utm_source: where traffic comes from (newsletter, facebook, partner-site).", "utm_medium: channel type (email, social, cpc).", "utm_campaign: campaign name (spring-launch, april-sale).", "utm_term: optional keyword value, often for paid search.", "utm_content: optional variant label for A/B links or creatives."] },
      { heading: "Basic naming rules", paragraphs: ["Use lowercase, keep terms short, and pick one separator style such as hyphens.", "Inconsistent names like “Email”, “email”, and “e-mail” split your reporting into separate rows."] },
      { heading: "How to build and test a UTM link", paragraphs: ["Enter the destination URL, add source/medium/campaign, then generate the final link in a UTM builder.", "Open the link once before launch to verify that it resolves correctly and includes all expected parameters."] },
      { heading: "When to skip extra parameters", paragraphs: ["Not every link needs utm_term or utm_content. Add only what helps analysis decisions.", "Over-tagging creates noisy data and makes dashboards harder to read."] }
    ]
  },
  ko: {
    title: "초보자를 위한 UTM 파라미터 설명",
    description: "UTM이 무엇인지, 핵심 항목이 무엇을 의미하는지, 처음 캠페인 추적을 어떻게 시작하면 되는지 쉽게 정리했습니다.",
    intro: "UTM 파라미터는 URL 끝에 붙이는 짧은 태그로, 분석 도구에서 유입 출처와 채널, 캠페인을 구분할 수 있게 해 줍니다.",
    categoryLabel: "캠페인 추적",
    useCasesTitle: "이럴 때 필요합니다",
    useCases: ["SNS 캠페인 운영", "뉴스레터 링크 공유", "파트너 유입 추적", "유료 채널 성과 비교"],
    closingTitle: "작게 시작하고 일관성 유지",
    closingText: "복잡한 체계 없이도 시작할 수 있습니다. 간단한 네이밍 규칙과 UTM 빌더만으로도 충분히 깔끔한 데이터를 만들 수 있습니다.",
    relatedToolLabel: "UTM 빌더 열기",
    sections: [
      { heading: "UTM이란 무엇인가", paragraphs: ["UTM은 Urchin Tracking Module의 약자입니다. 실무에서는 URL 쿼리 파라미터를 붙여 유입 정보를 구분하는 방식으로 이해하면 됩니다.", "UTM이 없으면 캠페인 유입이 일반 트래픽으로 섞여 분석이 어려워질 수 있습니다."] },
      { heading: "핵심 5가지 파라미터", paragraphs: ["기본적으로 아래 항목을 가장 많이 사용합니다."], bullets: ["utm_source: 유입 출처", "utm_medium: 채널 유형", "utm_campaign: 캠페인 이름", "utm_term: (선택) 키워드", "utm_content: (선택) 소재/버전 구분"] },
      { heading: "네이밍 규칙 정하기", paragraphs: ["소문자 사용, 짧은 단어, 구분자는 하이픈처럼 하나로 통일하세요.", "같은 의미를 여러 표기법으로 쓰면 리포트가 분산됩니다."] },
      { heading: "UTM 링크 만드는 순서", paragraphs: ["목적 URL 입력 → source/medium/campaign 입력 → 링크 생성 순으로 진행하세요.", "배포 전에 링크를 한 번 열어 파라미터 누락이나 오타를 확인하는 것이 안전합니다."] },
      { heading: "불필요한 태그는 생략", paragraphs: ["모든 링크에 utm_term, utm_content가 필요한 것은 아닙니다.", "분석 의사결정에 필요한 항목만 넣어야 데이터가 깔끔합니다."] }
    ]
  },
  ja: {
    title: "初心者向け：UTMパラメータの基本",
    description: "UTMとは何か、主要パラメータの意味、実務での最初の使い方をわかりやすく解説します。",
    intro: "UTMパラメータはURLに追加するタグで、アクセス解析で流入元やキャンペーンを判別しやすくするために使います。",
    categoryLabel: "キャンペーン計測",
    useCasesTitle: "よく使う場面",
    useCases: ["SNS投稿の効果測定", "メール配信リンクの管理", "提携先流入の確認", "広告チャネル比較"],
    closingTitle: "最初はシンプルで十分",
    closingText: "複雑な設計は不要です。基本ルールを揃えてUTMビルダーを使えば、読みやすいレポートを作れます。",
    relatedToolLabel: "UTMビルダーを開く",
    sections: [
      { heading: "UTMとは", paragraphs: ["UTMはUrchin Tracking Moduleの略です。実務では、URLに識別タグを付けて流入を分解する仕組みとして使います。", "UTMがないと、キャンペーン流入が曖昧な分類にまとめられやすくなります。"] },
      { heading: "よく使う5項目", paragraphs: ["基本は次の5つです。"], bullets: ["utm_source: 流入元", "utm_medium: チャネル種別", "utm_campaign: キャンペーン名", "utm_term: 任意のキーワード", "utm_content: 任意のクリエイティブ区別"] },
      { heading: "命名ルールを統一する", paragraphs: ["小文字で統一し、語句は短く、区切り記号も一つに揃えましょう。", "表記ゆれがあるとレポートが分散して比較しづらくなります。"] },
      { heading: "UTMリンク作成の流れ", paragraphs: ["遷移先URLを入力し、source / medium / campaignを設定して生成します。", "公開前にリンクを1回開き、遷移先とパラメータを確認してください。"] },
      { heading: "追加パラメータは必要な時だけ", paragraphs: ["すべてのリンクにtermやcontentを付ける必要はありません。", "分析判断に使う情報だけを追加すると運用が軽くなります。"] }
    ]
  },
  es: {
    title: "Parámetros UTM explicados para principiantes",
    description: "Qué son los UTM, para qué sirve cada campo principal y cómo empezar a medir campañas sin ensuciar tus datos.",
    intro: "Los parámetros UTM son etiquetas que se añaden a una URL para identificar fuente, canal y campaña en analítica.",
    categoryLabel: "Medición de campañas",
    useCasesTitle: "Cuándo los vas a usar",
    useCases: ["Campañas en redes sociales.", "Enlaces en newsletters.", "Tráfico de afiliados o partners.", "Comparación entre canales de pago."],
    closingTitle: "Empieza simple y consistente",
    closingText: "No hace falta un sistema complejo al inicio. Con una convención básica y un UTM Builder ya puedes obtener reportes útiles.",
    relatedToolLabel: "Abrir UTM Builder",
    sections: [
      { heading: "Qué significa UTM", paragraphs: ["UTM significa Urchin Tracking Module. En práctica, son parámetros en la URL para mejorar la atribución del tráfico.", "Sin UTM, muchas visitas de campaña quedan agrupadas en categorías genéricas."] },
      { heading: "Cinco campos comunes", paragraphs: ["Los más usados son:"], bullets: ["utm_source: origen del tráfico.", "utm_medium: tipo de canal.", "utm_campaign: nombre de campaña.", "utm_term: keyword opcional.", "utm_content: variante opcional del anuncio o enlace."] },
      { heading: "Reglas de nombre", paragraphs: ["Usa minúsculas, nombres cortos y un separador único (por ejemplo, guion).", "Variantes como Email/email/e-mail fragmentan los informes."] },
      { heading: "Cómo crear y validar el enlace", paragraphs: ["Completa URL destino + source + medium + campaign en el constructor.", "Prueba el enlace antes de lanzarlo para comprobar destino y parámetros."] },
      { heading: "No etiquetes de más", paragraphs: ["No todos los enlaces requieren term y content.", "Si etiquetas demasiado, tus dashboards se vuelven ruidosos."] }
    ]
  },
  fr: {
    title: "Paramètres UTM expliqués pour débutants",
    description: "Comprenez les paramètres UTM, les champs essentiels et une méthode simple pour démarrer le tracking de campagne.",
    intro: "Les paramètres UTM sont des balises ajoutées à une URL pour identifier la source, le canal et la campagne dans les outils d'analyse.",
    categoryLabel: "Suivi de campagne",
    useCasesTitle: "Cas d'usage courants",
    useCases: ["Campagnes social media.", "Liens dans les newsletters.", "Suivi de partenaires.", "Comparaison de canaux payants."],
    closingTitle: "Simple au départ, cohérent ensuite",
    closingText: "Inutile de complexifier. Une convention de nommage claire et un générateur UTM suffisent pour des données exploitables.",
    relatedToolLabel: "Ouvrir le créateur UTM",
    sections: [
      { heading: "UTM, c'est quoi ?", paragraphs: ["UTM signifie Urchin Tracking Module. Concrètement, ce sont des paramètres d'URL pour mieux attribuer le trafic.", "Sans UTM, une partie du trafic campagne devient difficile à distinguer dans les rapports."] },
      { heading: "Les 5 paramètres principaux", paragraphs: ["Les plus utiles au quotidien sont :"], bullets: ["utm_source : origine du trafic.", "utm_medium : type de canal.", "utm_campaign : nom de campagne.", "utm_term : mot-clé optionnel.", "utm_content : variante optionnelle du lien/créatif."] },
      { heading: "Règles de nommage", paragraphs: ["Restez en minuscules, utilisez des noms courts, et un séparateur unique.", "Des variantes d'écriture créent des lignes séparées dans vos rapports."] },
      { heading: "Créer et tester un lien UTM", paragraphs: ["Saisissez l'URL finale puis source, medium et campaign dans l'outil.", "Ouvrez le lien avant diffusion pour vérifier destination et paramètres."] },
      { heading: "Ajouter seulement l'utile", paragraphs: ["term et content ne sont pas obligatoires partout.", "Trop de tags rend l'analyse plus complexe."] }
    ]
  },
  de: {
    title: "UTM-Parameter einfach erklärt (für Einsteiger)",
    description: "Was UTM-Parameter sind, was die wichtigsten Felder bedeuten und wie du Kampagnen-Tracking sauber startest.",
    intro: "UTM-Parameter sind URL-Tags, mit denen Analytics-Tools Quelle, Kanal und Kampagne besser zuordnen können.",
    categoryLabel: "Kampagnen-Tracking",
    useCasesTitle: "Typische Einsatzfälle",
    useCases: ["Social-Media-Kampagnen.", "Newsletter-Links.", "Partner-Traffic messen.", "Bezahlte Kanäle vergleichen."],
    closingTitle: "Einfach starten, konsistent bleiben",
    closingText: "Für den Start brauchst du kein komplexes Setup. Eine klare Benennung und ein UTM-Builder reichen für saubere Reports.",
    relatedToolLabel: "UTM-Builder öffnen",
    sections: [
      { heading: "Was bedeutet UTM?", paragraphs: ["UTM steht für Urchin Tracking Module. Praktisch sind es URL-Parameter für bessere Traffic-Attribution.", "Ohne UTM landen Kampagnenbesuche oft in unscharfen Standard-Kategorien."] },
      { heading: "Die fünf Standardfelder", paragraphs: ["Am häufigsten werden diese genutzt:"], bullets: ["utm_source: Herkunft des Traffics.", "utm_medium: Kanaltyp.", "utm_campaign: Kampagnenname.", "utm_term: optionales Keyword.", "utm_content: optionale Variantenkennung."] },
      { heading: "Benennung sauber halten", paragraphs: ["Nutze Kleinbuchstaben, kurze Begriffe und ein einheitliches Trennzeichen.", "Unterschiedliche Schreibweisen erzeugen getrennte Report-Zeilen."] },
      { heading: "Link bauen und prüfen", paragraphs: ["Ziel-URL eintragen, dann source/medium/campaign ergänzen und Link erzeugen.", "Vor dem Versand einmal öffnen und prüfen, ob alles korrekt ist."] },
      { heading: "Nicht übertaggen", paragraphs: ["term und content sind nicht immer nötig.", "Zu viele Parameter machen Dashboards unübersichtlich."] }
    ]
  }
};

const commonUtmTaggingMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Common UTM Tagging Mistakes and How to Avoid Them",
    description: "Avoid the UTM errors that cause messy reports: inconsistent naming, broken links, duplicate tagging, and missing governance.",
    intro: "UTM tracking is simple to start but easy to misuse. Small mistakes in naming or formatting can split your analytics data and make campaign reporting unreliable.",
    categoryLabel: "Campaign Tracking",
    useCasesTitle: "When this matters most",
    useCases: ["Managing many campaigns at once.", "Working with multiple marketers.", "Comparing channels month to month.", "Auditing old UTM links."],
    closingTitle: "Good tracking is mostly discipline",
    closingText: "The technical part is quick. The hard part is consistency. A shared naming guide and a simple review step prevent most UTM issues.",
    relatedToolLabel: "Open the UTM Builder",
    sections: [
      { heading: "Mistake 1: inconsistent naming", paragraphs: ["Using variations like facebook/Facebook/fb creates separate rows in reports.", "Pick one standard and apply it everywhere."] },
      { heading: "Mistake 2: tagging internal links", paragraphs: ["UTM parameters are meant for inbound campaign traffic. Adding them to internal navigation can overwrite session attribution.", "Use UTMs on external campaign links, not regular on-site links."] },
      { heading: "Mistake 3: unreadable campaign names", paragraphs: ["Long, vague campaign labels are hard to manage later.", "Use concise names that describe purpose and date or theme clearly."] },
      {
        heading: "Mistake 4: skipping validation",
        paragraphs: ["Many tracking errors are simple typos or broken URLs."],
        bullets: ["Open each generated link once.", "Confirm destination page and redirect behavior.", "Check required UTM fields are present.", "Store approved links in one shared place."]
      },
      { heading: "Mistake 5: no ownership", paragraphs: ["If everyone creates tags differently, data quality drops fast.", "Assign ownership of naming rules and review updates monthly."] }
    ]
  },
  ko: {
    title: "자주 발생하는 UTM 태깅 실수와 예방법",
    description: "UTM 네이밍 불일치, 잘못된 링크, 내부 링크 오태깅 등 실제로 자주 생기는 문제를 예방하는 방법을 정리했습니다.",
    intro: "UTM은 시작은 쉽지만 운영이 느슨하면 데이터가 빠르게 지저분해집니다. 작은 표기 차이만으로도 리포트가 분산될 수 있습니다.",
    categoryLabel: "캠페인 추적",
    useCasesTitle: "특히 중요한 상황",
    useCases: ["동시 캠페인이 많은 경우", "여러 담당자가 링크를 만드는 경우", "월별 채널 성과 비교", "기존 UTM 링크 점검"],
    closingTitle: "핵심은 도구보다 운영 규칙",
    closingText: "기술적으로는 간단하지만 일관성 유지가 가장 중요합니다. 네이밍 규칙과 검수 단계만 있어도 대부분의 실수를 막을 수 있습니다.",
    relatedToolLabel: "UTM 빌더 열기",
    sections: [
      { heading: "실수 1: 네이밍 불일치", paragraphs: ["facebook/Facebook/fb처럼 표기가 섞이면 리포트가 분리됩니다.", "표준 표기를 정하고 팀 전체가 동일하게 사용하세요."] },
      { heading: "실수 2: 내부 링크에 UTM 사용", paragraphs: ["UTM은 외부 유입 추적용입니다. 내부 링크에 붙이면 세션 출처가 덮어써질 수 있습니다.", "캠페인 유입 링크에만 사용하세요."] },
      { heading: "실수 3: 길고 모호한 캠페인명", paragraphs: ["나중에 분석할 때 의미를 해석하기 어렵습니다.", "짧고 목적이 분명한 이름을 사용하세요."] },
      { heading: "실수 4: 검증 생략", paragraphs: ["대부분의 오류는 오타나 잘못된 URL입니다."], bullets: ["생성 링크 한 번 열기", "도착 페이지/리다이렉트 확인", "필수 파라미터 누락 확인", "검증된 링크를 한곳에 저장"] },
      { heading: "실수 5: 담당자 부재", paragraphs: ["태깅 책임자가 없으면 규칙이 쉽게 무너집니다.", "월 1회 정도 규칙 점검 시간을 두면 품질 유지에 도움이 됩니다."] }
    ]
  },
  ja: {
    title: "よくあるUTMタグ設定ミスと防ぎ方",
    description: "命名のゆれ、内部リンクへの誤付与、未検証リンクなど、UTM運用で起きやすいミスを実務目線で整理します。",
    intro: "UTM計測は簡単に始められますが、運用ルールがないとデータ品質がすぐ下がります。小さな表記差でもレポートが分断されます。",
    categoryLabel: "キャンペーン計測",
    useCasesTitle: "重要になる場面",
    useCases: ["複数キャンペーンの同時運用", "複数担当者でのリンク作成", "月次チャネル比較", "過去UTMの監査"],
    closingTitle: "継続運用の設計が重要",
    closingText: "設定作業自体は短時間ですが、統一ルールと確認手順が成果を左右します。",
    relatedToolLabel: "UTMビルダーを開く",
    sections: [
      { heading: "ミス1: 命名ルールの不一致", paragraphs: ["facebook/Facebook/fb のような表記ゆれは別データとして集計されます。", "共通ルールを決めて全員で統一しましょう。"] },
      { heading: "ミス2: 内部リンクへのUTM付与", paragraphs: ["UTMは外部流入の計測用です。内部リンクに使うと流入元が上書きされる場合があります。", "外部配布リンクのみに限定してください。"] },
      { heading: "ミス3: 曖昧なキャンペーン名", paragraphs: ["長すぎる、または意味が曖昧な名前は後で比較しづらくなります。", "短く目的が分かる命名にします。"] },
      { heading: "ミス4: 公開前チェックなし", paragraphs: ["多くの問題はURLミスや入力漏れです。"], bullets: ["リンクを1回開く", "遷移先とリダイレクトを確認", "必須UTM項目を確認", "承認済みリンクを共有管理"] },
      { heading: "ミス5: 運用責任者がいない", paragraphs: ["誰でも自由に作成するとルールが崩れやすくなります。", "定期的に命名ルールを見直す担当を決めましょう。"] }
    ]
  },
  es: {
    title: "Errores comunes al etiquetar UTM y cómo evitarlos",
    description: "Evita fallos de etiquetado UTM que rompen tus reportes: nombres inconsistentes, links mal construidos y falta de control.",
    intro: "El tracking con UTM es fácil de iniciar, pero también fácil de desordenar. Errores pequeños pueden fragmentar tus datos y dificultar el análisis.",
    categoryLabel: "Medición de campañas",
    useCasesTitle: "Cuándo más importa",
    useCases: ["Muchas campañas en paralelo.", "Varios responsables de marketing.", "Comparativas mensuales por canal.", "Auditoría de enlaces antiguos."],
    closingTitle: "La consistencia es la clave",
    closingText: "La parte técnica toma minutos. Lo difícil es mantener criterios estables. Una guía común y revisión corta evita la mayoría de errores.",
    relatedToolLabel: "Abrir UTM Builder",
    sections: [
      { heading: "Error 1: nombres inconsistentes", paragraphs: ["facebook/Facebook/fb generan filas distintas en analítica.", "Define una convención única y aplícala siempre."] },
      { heading: "Error 2: usar UTM en enlaces internos", paragraphs: ["Los UTM son para tráfico de entrada. En enlaces internos pueden sobrescribir la atribución de sesión.", "Úsalos solo en enlaces externos de campaña."] },
      { heading: "Error 3: campañas poco legibles", paragraphs: ["Nombres largos o vagos dificultan el análisis posterior.", "Elige nombres cortos y descriptivos."] },
      { heading: "Error 4: no validar enlaces", paragraphs: ["Muchos problemas son simples typos."], bullets: ["Abrir cada enlace generado.", "Confirmar página de destino.", "Revisar parámetros obligatorios.", "Guardar enlaces aprobados en un lugar común."] },
      { heading: "Error 5: sin responsable de gobierno", paragraphs: ["Si cada persona etiqueta distinto, la calidad del dato cae.", "Asigna ownership y revisa convenciones de forma periódica."] }
    ]
  },
  fr: {
    title: "Erreurs fréquentes de marquage UTM et comment les éviter",
    description: "Évitez les erreurs UTM qui brouillent vos rapports : nommage incohérent, liens mal vérifiés et absence de gouvernance.",
    intro: "Le marquage UTM est simple au départ, mais des écarts minimes suffisent à dégrader la qualité des données.",
    categoryLabel: "Suivi de campagne",
    useCasesTitle: "Quand c'est critique",
    useCases: ["Multiples campagnes en parallèle.", "Plusieurs personnes qui créent des liens.", "Comparaison mensuelle des canaux.", "Audit des anciens liens UTM."],
    closingTitle: "La discipline fait la différence",
    closingText: "L'outil est rapide, la cohérence est le vrai enjeu. Une convention partagée et une vérification courte couvrent l'essentiel.",
    relatedToolLabel: "Ouvrir le créateur UTM",
    sections: [
      { heading: "Erreur 1 : nommage incohérent", paragraphs: ["facebook/Facebook/fb séparent artificiellement vos résultats.", "Fixez une convention unique et appliquez-la partout."] },
      { heading: "Erreur 2 : UTM sur des liens internes", paragraphs: ["Les UTM servent au trafic entrant. En interne, ils peuvent écraser l'attribution de session.", "Réservez-les aux liens externes de campagne."] },
      { heading: "Erreur 3 : campagnes illisibles", paragraphs: ["Des noms trop longs ou vagues compliquent les analyses futures.", "Préférez des noms courts et explicites."] },
      { heading: "Erreur 4 : absence de validation", paragraphs: ["Beaucoup d'erreurs viennent d'URL cassées ou de fautes de frappe."], bullets: ["Tester chaque lien.", "Vérifier la destination.", "Contrôler les paramètres obligatoires.", "Centraliser les liens validés."] },
      { heading: "Erreur 5 : pas de responsable", paragraphs: ["Sans pilotage, chacun applique ses propres règles.", "Attribuez un référent pour maintenir la cohérence."] }
    ]
  },
  de: {
    title: "Häufige UTM-Tagging-Fehler und wie du sie vermeidest",
    description: "Die typischen UTM-Fehler im Alltag vermeiden: uneinheitliche Namen, falsche Linknutzung und fehlende Qualitätskontrolle.",
    intro: "UTM-Tracking ist schnell eingerichtet, aber leicht falsch genutzt. Schon kleine Abweichungen können Reports unbrauchbar machen.",
    categoryLabel: "Kampagnen-Tracking",
    useCasesTitle: "Wann es besonders wichtig ist",
    useCases: ["Viele Kampagnen gleichzeitig.", "Mehrere Teammitglieder erstellen Links.", "Monatliche Kanalvergleiche.", "Bestehende UTM-Links prüfen."],
    closingTitle: "Gute Daten brauchen klare Regeln",
    closingText: "Der technische Teil ist kurz. Entscheidend sind einheitliche Namensregeln und ein fester Prüfschritt.",
    relatedToolLabel: "UTM-Builder öffnen",
    sections: [
      { heading: "Fehler 1: uneinheitliche Benennung", paragraphs: ["facebook/Facebook/fb erzeugen getrennte Zeilen im Report.", "Lege eine Schreibweise fest und nutze sie überall."] },
      { heading: "Fehler 2: interne Links taggen", paragraphs: ["UTMs sind für eingehenden Kampagnen-Traffic gedacht. Bei internen Links kann die Attribution überschrieben werden.", "Setze UTMs nur bei externen Kampagnenlinks ein."] },
      { heading: "Fehler 3: unklare Kampagnennamen", paragraphs: ["Zu lange oder vage Namen sind später schwer auszuwerten.", "Nutze kurze, eindeutig beschreibende Bezeichnungen."] },
      { heading: "Fehler 4: fehlende Prüfung", paragraphs: ["Viele Probleme sind einfache Tippfehler."], bullets: ["Jeden Link einmal öffnen.", "Zielseite und Redirect prüfen.", "Pflichtparameter kontrollieren.", "Freigegebene Links zentral speichern."] },
      { heading: "Fehler 5: kein Ownership", paragraphs: ["Ohne Zuständigkeit driftet die Tagging-Qualität schnell auseinander.", "Bestimme Verantwortliche und prüfe Standards regelmäßig."] }
    ]
  }
};



const openGraphImageSizeGuideContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Recommended Open Graph Image Size for Social Sharing",
    description: "Use practical OG image dimensions so shared links show a clean preview on social apps and messaging platforms.",
    intro: "If your shared links look cropped, blurry, or inconsistent, the image size is often the cause. A clear Open Graph image standard helps every new page look better when shared.",
    categoryLabel: "Social preview",
    useCasesTitle: "When this guide helps",
    useCases: ["Launching blog posts and landing pages.", "Updating a site-wide social preview template.", "Fixing inconsistent previews across teams.", "Preparing multilingual page assets."],
    closingTitle: "Use one reliable baseline",
    closingText: "Pick one recommended size, reuse it consistently, and test before publishing. That simple workflow prevents most preview-image issues.",
    relatedToolLabel: "Open Open Graph Checker",
    sections: [
      { heading: "Start with a safe default size", paragraphs: ["For most websites, 1200×630 pixels is the most reliable Open Graph image size. It fits the common 1.91:1 ratio used by major social platforms.", "You can publish larger images with the same ratio, but this baseline is usually enough for sharp previews and predictable rendering."] },
      { heading: "Keep the composition center-safe", paragraphs: ["Some apps crop previews slightly differently. Keep logos, faces, and key text near the center area so they are not cut off.", "Avoid placing important text too close to the edges, especially on the top and bottom."] },
      { heading: "Practical export checklist", paragraphs: ["Before upload, run a quick quality pass."], bullets: ["Use 1200×630 as your primary export.", "Use JPG for photos, PNG when sharp text or flat graphics matter.", "Keep file size reasonable so bots can fetch it quickly.", "Use an absolute HTTPS URL in og:image.", "Make sure the image is publicly accessible (no login needed)."] },
      { heading: "Match your metadata and image", paragraphs: ["A strong preview is not just the image. Keep og:title, og:description, and the visual message aligned.", "When title and image conflict, users trust the preview less and click less often."] },
      { heading: "Test after publishing", paragraphs: ["After updating metadata, run the page URL through an Open Graph checker to confirm the fetched image and text.", "If old data still appears, request recrawl or clear caches in the platform debugger."] }
    ]
  },
  ko: {
    title: "소셜 공유용 권장 Open Graph 이미지 크기",
    description: "공유 링크 미리보기가 안정적으로 보이도록 실무에서 쓰기 좋은 OG 이미지 크기 기준을 정리합니다.",
    intro: "공유했을 때 이미지가 잘리거나 흐리게 보인다면 크기 비율이 원인인 경우가 많습니다. OG 이미지 기준을 하나로 정하면 대부분의 문제를 미리 막을 수 있습니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "이럴 때 유용합니다",
    useCases: ["새 글/랜딩 페이지 발행", "팀 공통 썸네일 템플릿 정리", "채널별 미리보기 불일치 해결", "다국어 페이지 자산 준비"],
    closingTitle: "기준 하나로 통일하세요",
    closingText: "권장 크기를 하나 정하고 반복 적용한 뒤 게시 전에 미리보기 점검만 해도 공유 품질이 크게 좋아집니다.",
    relatedToolLabel: "Open Graph 검사기 열기",
    sections: [
      { heading: "안전한 기본값부터 사용", paragraphs: ["대부분의 사이트에서는 1200×630px(1.91:1)이 가장 안정적입니다.", "같은 비율로 더 크게 만들 수도 있지만, 기본 운영에는 이 크기면 충분한 경우가 많습니다."] },
      { heading: "중앙 중심으로 배치", paragraphs: ["플랫폼마다 미세한 크롭 차이가 있어 가장 중요한 요소는 중앙 근처에 두는 것이 안전합니다.", "특히 상하 가장자리에는 핵심 문구를 붙이지 마세요."] },
      { heading: "내보내기 체크리스트", paragraphs: ["업로드 전에 아래 항목만 빠르게 확인하세요."], bullets: ["기본 1200×630으로 제작", "사진은 JPG, 선명한 텍스트/도형은 PNG 검토", "파일 용량을 과도하게 키우지 않기", "og:image에 절대 HTTPS URL 사용", "로그인 없이 접근 가능한 공개 이미지 사용"] },
      { heading: "메타데이터와 메시지 일치", paragraphs: ["이미지만 좋다고 충분하지 않습니다. 제목/설명과 이미지 메시지가 같은 방향이어야 합니다.", "불일치하면 신뢰도가 떨어져 클릭률에도 불리합니다."] },
      { heading: "게시 후 즉시 테스트", paragraphs: ["URL을 OG 미리보기 도구로 확인해 실제로 어떤 이미지가 읽히는지 점검하세요.", "기존 캐시가 남아 있으면 디버거에서 재수집을 요청하세요."] }
    ]
  },
  ja: {
    title: "ソーシャル共有向けOpen Graph画像の推奨サイズ",
    description: "共有リンクの見え方を安定させるために、実務で使いやすいOG画像サイズの基準を紹介します。",
    intro: "共有時に画像が切れる・ぼやける場合、原因はサイズや比率であることが多いです。最初に基準を決めると運用が安定します。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "役立つ場面",
    useCases: ["記事やLP公開前の最終確認", "チーム共通テンプレート作成", "プレビュー表示の不一致修正", "多言語ページ用画像の準備"],
    closingTitle: "基準を固定して再利用する",
    closingText: "推奨サイズを1つ決め、毎回同じ手順で確認するだけで、共有プレビューのトラブルは大きく減らせます。",
    relatedToolLabel: "Open Graphチェッカーを開く",
    sections: [
      { heading: "まずは安全な標準サイズ", paragraphs: ["一般的には1200×630px（1.91:1）が最も使いやすい標準です。", "同じ比率で大きくすることも可能ですが、通常運用ではこのサイズで十分です。"] },
      { heading: "重要要素は中央寄せ", paragraphs: ["アプリごとにトリミングが少し異なるため、ロゴや文字は中央付近に配置しましょう。", "端に重要テキストを置くと欠けるリスクが上がります。"] },
      { heading: "書き出し時チェック", paragraphs: ["公開前に次を確認します。"], bullets: ["1200×630で書き出す", "写真はJPG、文字中心デザインはPNGも検討", "ファイルを重くしすぎない", "og:imageはHTTPSの絶対URLにする", "画像が公開アクセス可能か確認する"] },
      { heading: "タイトルと画像の整合", paragraphs: ["画像だけでなく、og:titleとog:descriptionとの一貫性も重要です。", "内容がずれるとプレビューの信頼感が下がります。"] },
      { heading: "公開後にプレビュー検証", paragraphs: ["OGチェッカーでURLを読み込み、実際の取得画像を確認してください。", "古いキャッシュが残る場合は再クロールを依頼します。"] }
    ]
  },
  es: {
    title: "Tamaño recomendado de imagen Open Graph para compartir",
    description: "Usa dimensiones OG prácticas para que tus enlaces se vean claros al compartir en redes y apps de mensajería.",
    intro: "Si una vista previa sale cortada o borrosa, normalmente el problema está en el tamaño de la imagen. Definir un estándar OG evita muchos errores.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Cuándo conviene",
    useCases: ["Publicar artículos o landing pages.", "Unificar plantillas de preview en el equipo.", "Corregir previews inconsistentes.", "Preparar recursos para páginas multilingües."],
    closingTitle: "Define una base y repítela",
    closingText: "Con una dimensión base, metadatos coherentes y una prueba rápida antes de publicar, la mayoría de problemas desaparece.",
    relatedToolLabel: "Abrir verificador Open Graph",
    sections: [
      { heading: "Empieza con un tamaño seguro", paragraphs: ["Para la mayoría de sitios, 1200×630 px es la opción más confiable (relación 1.91:1).", "Puedes usar tamaños mayores con la misma proporción, pero este estándar suele bastar."] },
      { heading: "Diseña pensando en recortes", paragraphs: ["Algunas plataformas recortan distinto. Mantén logo y texto importante cerca del centro.", "Evita ubicar contenido clave pegado a los bordes."] },
      { heading: "Checklist rápida de exportación", paragraphs: ["Antes de subir la imagen, revisa:"], bullets: ["Exportar en 1200×630.", "JPG para fotos, PNG para texto/gráficos nítidos.", "Peso de archivo razonable.", "Usar URL absoluta HTTPS en og:image.", "Confirmar acceso público sin login."] },
      { heading: "Alinea imagen y metadatos", paragraphs: ["El preview funciona mejor cuando imagen, título y descripción cuentan el mismo mensaje.", "Si se contradicen, baja la confianza y el clic."] },
      { heading: "Prueba después de publicar", paragraphs: ["Valida la URL en el checker para ver qué está leyendo el bot realmente.", "Si aparece una versión antigua, fuerza recrawl o limpia caché."] }
    ]
  },
  fr: {
    title: "Taille recommandée d'image Open Graph pour le partage",
    description: "Utilisez des dimensions OG fiables pour obtenir des aperçus clairs lors du partage sur réseaux sociaux et messageries.",
    intro: "Quand un aperçu est flou ou recadré, le format de l'image est souvent en cause. Une règle simple de dimension OG évite ces problèmes.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Quand ce guide aide le plus",
    useCases: ["Publication d'articles et pages de campagne.", "Standardisation d'un template social.", "Correction d'aperçus incohérents.", "Préparation d'assets multilingues."],
    closingTitle: "Fixez une base unique",
    closingText: "Adoptez une dimension de référence, gardez des métadonnées cohérentes et vérifiez avant publication pour éviter la majorité des erreurs.",
    relatedToolLabel: "Ouvrir le vérificateur Open Graph",
    sections: [
      { heading: "Utiliser une dimension de référence", paragraphs: ["Dans la plupart des cas, 1200×630 px (ratio 1,91:1) est la valeur la plus sûre.", "Vous pouvez exporter plus grand avec le même ratio, mais cette base suffit généralement."] },
      { heading: "Protéger la zone centrale", paragraphs: ["Chaque plateforme recadre légèrement différemment. Placez logo et texte important au centre.", "Évitez les informations critiques collées aux bords."] },
      { heading: "Checklist d'export", paragraphs: ["Avant publication, vérifiez :"], bullets: ["Image en 1200×630.", "JPG pour photo, PNG pour texte/graphismes nets.", "Poids de fichier raisonnable.", "URL HTTPS absolue dans og:image.", "Image accessible publiquement."] },
      { heading: "Aligner visuel et balises", paragraphs: ["L'image doit raconter la même chose que le titre et la description OG.", "Une incohérence réduit la confiance au clic."] },
      { heading: "Tester après mise en ligne", paragraphs: ["Passez l'URL dans un checker OG pour voir l'aperçu réel.", "Si l'ancienne image reste affichée, demandez un nouveau crawl."] }
    ]
  },
  de: {
    title: "Empfohlene Open-Graph-Bildgröße für Social Sharing",
    description: "Nutze praxistaugliche OG-Bildmaße, damit geteilte Links in sozialen Netzwerken sauber dargestellt werden.",
    intro: "Wenn Link-Vorschauen abgeschnitten oder unscharf wirken, liegt es oft an Größe und Seitenverhältnis des Bildes. Ein fester OG-Standard schafft Konsistenz.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Wann das besonders hilft",
    useCases: ["Neue Artikel oder Landingpages veröffentlichen.", "Teamweite Preview-Vorlage festlegen.", "Unklare Vorschauen beheben.", "Assets für mehrsprachige Seiten vorbereiten."],
    closingTitle: "Eine verlässliche Basis reicht",
    closingText: "Lege ein Standardmaß fest, nutze es konsequent und teste vor dem Teilen. Damit vermeidest du die meisten OG-Bildprobleme.",
    relatedToolLabel: "Open-Graph-Prüfer öffnen",
    sections: [
      { heading: "Mit einem sicheren Standard starten", paragraphs: ["Für die meisten Websites ist 1200×630 px (1,91:1) der zuverlässigste Standard.", "Größere Varianten mit gleichem Verhältnis sind möglich, aber meist nicht nötig."] },
      { heading: "Wichtige Inhalte mittig platzieren", paragraphs: ["Plattformen schneiden Vorschauen leicht unterschiedlich zu. Lege Logo und Kernaussage in die Mitte.", "Wichtiger Text sollte nicht zu nah am Rand stehen."] },
      { heading: "Praktische Export-Checkliste", paragraphs: ["Vor dem Upload kurz prüfen:"], bullets: ["Primär in 1200×630 exportieren.", "JPG für Fotos, PNG für scharfe Textgrafiken.", "Dateigröße sinnvoll halten.", "In og:image eine absolute HTTPS-URL nutzen.", "Bild muss öffentlich erreichbar sein."] },
      { heading: "Metadaten und Bild abstimmen", paragraphs: ["Eine gute Vorschau braucht konsistente Botschaften in Bild, Titel und Beschreibung.", "Widersprüche wirken unklar und senken die Klickwahrscheinlichkeit."] },
      { heading: "Nach Veröffentlichung testen", paragraphs: ["URL im OG-Checker prüfen und geladene Vorschau kontrollieren.", "Bei altem Cache einen erneuten Crawl anstoßen."] }
    ]
  }
};

const fixMissingSocialPreviewImagesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Fix Missing Preview Images on Shared Links",
    description: "Troubleshoot missing social preview images with a clear step-by-step Open Graph workflow.",
    intro: "When a shared link shows no image, the issue is usually metadata, image access, or cache behavior. A short debugging sequence can solve most cases quickly.",
    categoryLabel: "Social preview",
    useCasesTitle: "Common situations",
    useCases: ["A new page shows only text in previews.", "Old image keeps showing after an update.", "Preview works in one app but fails in another.", "Team needs a repeatable QA checklist."],
    closingTitle: "Debug in order, not by guesswork",
    closingText: "Check tags, image URL, and cache in sequence. This prevents random fixes and saves publishing time.",
    relatedToolLabel: "Open Open Graph Checker",
    sections: [
      { heading: "Check required OG tags first", paragraphs: ["Confirm your page outputs og:title, og:description, and og:image in the HTML head.", "Missing or malformed og:image is the most common cause of blank previews."] },
      { heading: "Verify the image URL is usable by crawlers", paragraphs: ["The og:image value should be an absolute HTTPS URL, not a relative path.", "Open the image URL in an incognito window to ensure it is public and not blocked by auth, hotlink protection, or robots rules."] },
      { heading: "Validate image format and size", paragraphs: ["Some previews fail because the image is too small, too large, or in an unusual format.", "Use a standard size like 1200×630 and common formats such as JPG or PNG for safer compatibility."] },
      { heading: "Handle cache and recrawl", paragraphs: ["Social platforms cache previews. Even after fixing tags, old results can remain.", "Use platform debugger tools or your OG checker to trigger a fresh scrape."] },
      { heading: "Quick troubleshooting checklist", paragraphs: ["Run this short list before publishing."], bullets: ["og:image exists in page source.", "Image URL is absolute, HTTPS, and public.", "Image is not blocked by headers or robots settings.", "Dimensions are social-preview friendly.", "Preview re-scrape has been requested."] }
    ]
  },
  ko: {
    title: "공유 링크에서 미리보기 이미지가 안 나올 때 해결 방법",
    description: "OG 메타데이터, 이미지 접근성, 캐시를 순서대로 점검해 미리보기 이미지 누락 문제를 빠르게 해결하세요.",
    intro: "공유 링크에 이미지가 보이지 않는 문제는 대부분 태그 누락, URL 접근 제한, 캐시 이슈로 설명됩니다. 점검 순서만 지켜도 빠르게 해결할 수 있습니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "자주 발생하는 상황",
    useCases: ["새 페이지 공유 시 이미지 없음", "이미지 교체 후 예전 썸네일 고정", "플랫폼별 표시 결과 불일치", "팀 공통 QA 체크리스트 필요"],
    closingTitle: "추측보다 순서 점검",
    closingText: "태그 → 이미지 URL → 캐시 순서로 확인하면 불필요한 재작업을 줄일 수 있습니다.",
    relatedToolLabel: "Open Graph 검사기 열기",
    sections: [
      { heading: "필수 OG 태그 먼저 확인", paragraphs: ["페이지 head에 og:title, og:description, og:image가 있는지 확인하세요.", "특히 og:image 누락/오타가 가장 흔한 원인입니다."] },
      { heading: "크롤러가 이미지에 접근 가능한지 확인", paragraphs: ["og:image는 상대경로가 아닌 절대 HTTPS URL이어야 합니다.", "시크릿 창에서 URL을 직접 열어 로그인 없이 접근 가능한지 확인하세요."] },
      { heading: "포맷과 크기 점검", paragraphs: ["너무 작은 이미지, 비표준 형식은 미리보기 실패를 유발할 수 있습니다.", "1200×630 JPG/PNG 같은 안전한 조합을 권장합니다."] },
      { heading: "캐시 재수집 처리", paragraphs: ["소셜 플랫폼은 미리보기를 캐시합니다. 수정 후에도 이전 결과가 남을 수 있습니다.", "디버거/체커로 재수집을 요청해 최신 데이터를 반영하세요."] },
      { heading: "게시 전 체크리스트", paragraphs: ["아래 항목을 최종 확인하세요."], bullets: ["소스에 og:image 존재", "절대 HTTPS 공개 URL 사용", "헤더/robots로 차단되지 않음", "크기 비율이 미리보기 친화적", "재수집 요청 완료"] }
    ]
  },
  ja: {
    title: "共有リンクでプレビュー画像が出ないときの直し方",
    description: "OGタグ、画像URL、キャッシュを順番に確認して、プレビュー画像が表示されない問題を解決します。",
    intro: "リンク共有時に画像が出ない原因は、タグ不足・画像アクセス不可・キャッシュのいずれかであることが多いです。短い手順で切り分けできます。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "よくあるケース",
    useCases: ["新規ページで画像が出ない", "画像更新後も古いサムネイルが残る", "アプリごとに表示が違う", "公開前の確認手順を統一したい"],
    closingTitle: "順番に確認するのが最短",
    closingText: "タグ、画像URL、キャッシュの順に確認すれば、場当たり対応を減らせます。",
    relatedToolLabel: "Open Graphチェッカーを開く",
    sections: [
      { heading: "まず必須OGタグを確認", paragraphs: ["head内にog:title、og:description、og:imageがあるか確認します。", "特にog:imageの欠落や記述ミスは最も多い原因です。"] },
      { heading: "クローラーが画像URLへ到達できるか", paragraphs: ["og:imageは相対パスではなくHTTPSの絶対URLを使います。", "シークレットウィンドウで画像URLを開き、認証不要で見えるか確認してください。"] },
      { heading: "画像サイズと形式を見直す", paragraphs: ["小さすぎる画像や特殊形式は失敗の原因になります。", "1200×630のJPG/PNGを基本にすると互換性が高いです。"] },
      { heading: "キャッシュを更新する", paragraphs: ["SNSはプレビューをキャッシュします。修正後もしばらく古い表示が残ることがあります。", "デバッガーやチェッカーで再クロールを実行してください。"] },
      { heading: "公開前の最終チェック", paragraphs: ["以下を満たせば多くの問題を防げます。"], bullets: ["ページソースにog:imageがある", "画像URLがHTTPS絶対パスで公開アクセス可能", "robotsやヘッダーでブロックしていない", "画像サイズが適切", "再取得を実行済み"] }
    ]
  },
  es: {
    title: "Cómo arreglar imágenes de vista previa faltantes en enlaces compartidos",
    description: "Soluciona previews sin imagen revisando etiquetas Open Graph, acceso del archivo y caché en un orden claro.",
    intro: "Si un enlace compartido aparece sin imagen, casi siempre se debe a metadatos OG, URL no accesible o caché antigua. Un flujo corto de diagnóstico suele bastar.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Casos habituales",
    useCases: ["Nueva página sin imagen en preview.", "Sigue saliendo la imagen antigua.", "Funciona en una red pero falla en otra.", "Necesitas checklist para el equipo."],
    closingTitle: "Diagnostica por pasos",
    closingText: "Revisar etiquetas, URL y caché en orden evita pruebas aleatorias y acelera la publicación.",
    relatedToolLabel: "Abrir verificador Open Graph",
    sections: [
      { heading: "Revisa primero las etiquetas OG", paragraphs: ["Confirma en el head que existen og:title, og:description y og:image.", "La ausencia o error en og:image es la causa más frecuente."] },
      { heading: "Comprueba que el bot puede abrir la imagen", paragraphs: ["og:image debe ser una URL absoluta con HTTPS.", "Abre la URL en incógnito para validar acceso público sin login."] },
      { heading: "Valida tamaño y formato", paragraphs: ["Un archivo demasiado pequeño o formato raro puede romper el preview.", "Usa combinaciones seguras: 1200×630 en JPG o PNG."] },
      { heading: "Gestiona caché y recrawl", paragraphs: ["Las plataformas guardan caché de previews. Puede tardar en reflejar cambios.", "Solicita nuevo scrape con depurador o checker."] },
      { heading: "Checklist rápida", paragraphs: ["Antes de compartir, valida:"], bullets: ["Existe og:image en el HTML.", "URL absoluta HTTPS y pública.", "Sin bloqueos por robots o cabeceras.", "Dimensión adecuada para social.", "Recrawl solicitado."] }
    ]
  },
  fr: {
    title: "Comment corriger les images d'aperçu manquantes sur les liens partagés",
    description: "Résolvez rapidement les aperçus sans image en vérifiant tags Open Graph, accessibilité de l'image et cache.",
    intro: "Quand un lien partagé n'affiche pas d'image, la cause vient souvent des balises OG, d'une URL non accessible, ou d'un cache ancien. Un diagnostic court suffit dans la plupart des cas.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Cas fréquents",
    useCases: ["Nouvelle page sans image d'aperçu.", "Ancienne image toujours affichée.", "Résultat différent selon la plateforme.", "Besoin d'une checklist équipe."],
    closingTitle: "Vérifier dans le bon ordre",
    closingText: "Tags, URL image, puis cache : cette séquence évite les corrections au hasard.",
    relatedToolLabel: "Ouvrir le vérificateur Open Graph",
    sections: [
      { heading: "Contrôler les balises OG essentielles", paragraphs: ["Vérifiez la présence de og:title, og:description et og:image dans le head.", "Une balise og:image manquante ou invalide est la panne la plus courante."] },
      { heading: "Vérifier l'accès crawler à l'image", paragraphs: ["La valeur og:image doit être une URL absolue HTTPS.", "Testez l'URL en navigation privée pour confirmer l'accès public."] },
      { heading: "Valider format et dimensions", paragraphs: ["Une image trop petite ou un format atypique peut casser l'aperçu.", "Un format 1200×630 en JPG/PNG est généralement fiable."] },
      { heading: "Forcer la mise à jour du cache", paragraphs: ["Les réseaux sociaux mettent les aperçus en cache, donc les modifications peuvent tarder à apparaître.", "Demandez un nouveau crawl via debugger/checker."] },
      { heading: "Checklist avant partage", paragraphs: ["Contrôlez ces points :"], bullets: ["og:image présent dans le HTML.", "URL HTTPS absolue et publique.", "Pas de blocage robots/headers.", "Dimensions compatibles social.", "Recrawl demandé."] }
    ]
  },
  de: {
    title: "Fehlende Vorschau-Bilder bei geteilten Links beheben",
    description: "Behebe fehlende Link-Vorschaubilder mit einem klaren Open-Graph-Check zu Tags, Bildzugriff und Cache.",
    intro: "Wenn geteilte Links ohne Bild erscheinen, liegt es meist an OG-Metadaten, einem nicht erreichbaren Bild oder veraltetem Cache. Mit einem festen Ablauf findest du die Ursache schnell.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Typische Situationen",
    useCases: ["Neue Seite zeigt keine Bildvorschau.", "Altes Bild bleibt trotz Update sichtbar.", "Je Plattform anderes Ergebnis.", "Team braucht reproduzierbare QA-Schritte."],
    closingTitle: "Systematisch statt zufällig testen",
    closingText: "Prüfe zuerst Tags, dann Bild-URL, dann Cache. So sparst du Zeit und vermeidest Trial-and-Error.",
    relatedToolLabel: "Open-Graph-Prüfer öffnen",
    sections: [
      { heading: "Zuerst die Pflicht-Tags prüfen", paragraphs: ["Im head sollten og:title, og:description und og:image vorhanden sein.", "Fehlende oder falsche og:image-Angaben sind die häufigste Ursache."] },
      { heading: "Bild-URL für Crawler verifizieren", paragraphs: ["og:image muss eine absolute HTTPS-URL sein.", "Öffne die Bild-URL im Inkognito-Modus und prüfe öffentlichen Zugriff ohne Login."] },
      { heading: "Format und Größe kontrollieren", paragraphs: ["Zu kleine Bilder oder ungewöhnliche Formate führen oft zu fehlender Vorschau.", "1200×630 in JPG oder PNG ist ein verlässlicher Ausgangspunkt."] },
      { heading: "Cache aktualisieren", paragraphs: ["Plattformen cachen Vorschauen. Deshalb kann nach Änderungen noch alter Stand erscheinen.", "Per Debugger/Checker einen neuen Scrape anstoßen."] },
      { heading: "Schnelle Checkliste", paragraphs: ["Vor dem Teilen kurz abhaken:"], bullets: ["og:image im HTML vorhanden.", "Absolute HTTPS-URL und öffentlich erreichbar.", "Keine Blockade via Robots/Header.", "Bildmaße social-tauglich.", "Neuabruf angefordert."] }
    ]
  }
};

const whyLinkPreviewTitleLooksWrongContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Why Your Link Preview Title Looks Wrong",
    description: "Fix mismatched, outdated, or cut-off social preview titles with a quick Open Graph workflow.",
    intro: "If the title shown in a link preview does not match your page, the issue is usually tag priority, cache delay, or duplicate metadata. A short check sequence helps you fix this fast.",
    categoryLabel: "Social preview",
    useCasesTitle: "When this guide helps",
    useCases: ["New pages show the wrong headline.", "Old title still appears after edits.", "Different apps show different titles.", "You need a repeatable QA checklist for publishing."],
    closingTitle: "Check source, then cache",
    closingText: "Validate the actual tags in page source first, then force recrawl where needed. That avoids guesswork and speeds up fixes.",
    relatedToolLabel: "Open OG Preview",
    sections: [
      { heading: "Know which tag usually wins", paragraphs: ["Most platforms prefer og:title first, then may fall back to twitter:title or the HTML title tag.", "If you update only one tag, previews can still show older or unexpected text."] },
      { heading: "Inspect the fetched metadata directly", paragraphs: ["Run the page URL in OG Preview and compare og:title, twitter:title, and title values side by side.", "This quickly reveals conflicts, missing values, and fallback behavior."] },
      { heading: "Watch for title rewriting mistakes", paragraphs: ["Common issues include generic template titles, duplicated brand names, and titles that are too long for preview cards."], bullets: ["Keep key meaning in the first part of the title.", "Avoid keyword stuffing or repeated separators.", "Make social title and page intent match exactly."] },
      { heading: "Handle cache after fixing tags", paragraphs: ["Social crawlers cache metadata. Even correct tags may not appear immediately.", "Use the platform debugger or re-scrape tools after deployment to refresh previews."] },
      { heading: "Final pre-share check", paragraphs: ["Before distribution, test the final URL once more and confirm title, description, and image alignment."] }
    ]
  },
  ko: {
    title: "링크 미리보기 제목이 이상하게 보이는 이유",
    description: "소셜 미리보기 제목이 다르거나 오래된 경우를 OG 태그 우선순위와 캐시 기준으로 빠르게 점검합니다.",
    intro: "링크 미리보기 제목 오류는 보통 태그 우선순위 충돌, 캐시 지연, 중복 메타데이터 때문에 발생합니다. 순서대로 확인하면 빠르게 해결할 수 있습니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "이럴 때 유용합니다",
    useCases: ["새 페이지 제목이 다르게 노출될 때", "수정 후에도 이전 제목이 남을 때", "앱마다 제목이 다르게 보일 때", "게시 전 점검 절차를 만들고 싶을 때"],
    closingTitle: "소스 확인 후 캐시 갱신",
    closingText: "페이지 소스의 실제 태그 값을 먼저 확인하고, 이후 재수집을 요청하면 대부분의 문제를 줄일 수 있습니다.",
    relatedToolLabel: "OG Preview 열기",
    sections: [
      { heading: "어떤 태그가 우선되는지 이해", paragraphs: ["대부분 플랫폼은 og:title을 우선하고, 없으면 twitter:title 또는 title로 대체합니다.", "한 태그만 수정하면 예상과 다른 제목이 계속 나올 수 있습니다."] },
      { heading: "실제로 읽힌 메타데이터를 확인", paragraphs: ["OG Preview에서 og:title, twitter:title, title 값을 나란히 비교하세요.", "누락, 충돌, fallback 원인을 빠르게 찾을 수 있습니다."] },
      { heading: "제목 작성 실수 점검", paragraphs: ["템플릿 문구 과다, 브랜드명 중복, 너무 긴 제목은 미리보기 품질을 떨어뜨립니다."], bullets: ["핵심 의미를 제목 앞부분에 배치", "중복 구분자/키워드 반복 줄이기", "페이지 의도와 소셜 제목 일치"] },
      { heading: "태그 수정 후 캐시 처리", paragraphs: ["태그를 고쳐도 캐시 때문에 이전 값이 남을 수 있습니다.", "배포 후 디버거나 재수집 도구로 갱신을 요청하세요."] },
      { heading: "공유 전 최종 확인", paragraphs: ["최종 URL을 다시 테스트해 제목·설명·이미지가 서로 맞는지 확인하세요."] }
    ]
  },
  ja: {
    title: "リンクプレビューのタイトルが正しく表示されない理由",
    description: "リンクプレビューのタイトルずれを、OGタグ優先順位とキャッシュの観点で実務的に修正します。",
    intro: "プレビュータイトルの不一致は、タグの競合やキャッシュが原因で起きることが多いです。短い確認手順で原因を切り分けできます。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "役立つ場面",
    useCases: ["新規ページで想定外のタイトルが出る", "編集後も古いタイトルが残る", "SNSごとに表示が違う", "公開前チェックを標準化したい"],
    closingTitle: "まずタグ値、次にキャッシュ",
    closingText: "ページソースの実値を確認してから再クロールを行うと、無駄な手戻りを減らせます。",
    relatedToolLabel: "OG Previewを開く",
    sections: [
      { heading: "優先されるタグを理解する", paragraphs: ["多くのプラットフォームは og:title を優先し、なければ twitter:title や title にフォールバックします.", "一部のタグだけ更新すると表示差分が残りやすくなります。"] },
      { heading: "取得された値を直接確認する", paragraphs: ["OG Previewで og:title / twitter:title / title を並べて確認します。", "欠落や競合がすぐ見つかります。"] },
      { heading: "タイトル設計のよくあるミス", paragraphs: ["テンプレート過多、ブランド名重複、長すぎる見出しはプレビュー品質を下げます。"], bullets: ["重要語を前半に置く", "区切り記号やキーワード重複を減らす", "ページ内容とタイトルを一致させる"] },
      { heading: "修正後はキャッシュ更新", paragraphs: ["タグ修正後もしばらく旧タイトルが表示される場合があります。", "デバッガーや再取得で更新を反映してください。"] },
      { heading: "共有前の最終確認", paragraphs: ["配布前に最終URLを再テストし、タイトル・説明・画像の整合を確認します。"] }
    ]
  },
  es: {
    title: "Por qué el título de tu vista previa de enlace se ve mal",
    description: "Corrige títulos de preview incorrectos o desactualizados revisando prioridad de etiquetas OG y caché.",
    intro: "Cuando el título de la vista previa no coincide con tu página, normalmente hay conflicto entre etiquetas o caché antigua. Este flujo corto te ayuda a resolverlo rápido.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Cuándo ayuda esta guía",
    useCases: ["Una página nueva muestra un título equivocado.", "Sigue saliendo el título anterior tras editar.", "Cada app muestra un título distinto.", "Quieres una revisión repetible antes de publicar."],
    closingTitle: "Primero etiquetas, luego caché",
    closingText: "Verifica los valores reales en el HTML y después solicita recrawl. Así evitas ajustes al azar.",
    relatedToolLabel: "Abrir OG Preview",
    sections: [
      { heading: "Entiende qué etiqueta gana", paragraphs: ["La mayoría de plataformas priorizan og:title y luego usan twitter:title o title como respaldo.", "Si solo cambias una etiqueta, el preview puede seguir mal."] },
      { heading: "Inspecciona metadatos reales", paragraphs: ["Comprueba en OG Preview los valores de og:title, twitter:title y title.", "Verás rápido conflictos y faltantes."] },
      { heading: "Evita errores comunes de copy", paragraphs: ["Plantillas genéricas, marca duplicada y títulos muy largos reducen calidad."], bullets: ["Pon la idea principal al inicio.", "Evita repetir separadores o keywords.", "Alinea título social con intención de la página."] },
      { heading: "Refresca caché tras corregir", paragraphs: ["Aunque el código esté bien, el crawler puede mantener datos viejos.", "Usa herramientas de depuración para forzar nueva lectura."] },
      { heading: "Revisión final antes de compartir", paragraphs: ["Haz una última prueba de URL y confirma coherencia entre título, descripción e imagen."] }
    ]
  },
  fr: {
    title: "Pourquoi le titre de votre aperçu de lien est incorrect",
    description: "Corrigez les titres d'aperçu erronés en vérifiant priorité OG, balises en conflit et cache social.",
    intro: "Un titre d'aperçu incohérent vient souvent d'une collision de balises ou d'un cache non rafraîchi. Ce workflow court permet de corriger rapidement.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Quand ce guide est utile",
    useCases: ["Nouvelle page avec mauvais titre en aperçu.", "Ancien titre toujours affiché après modification.", "Différences entre plateformes.", "Besoin d'un contrôle qualité réutilisable."],
    closingTitle: "Vérifier les balises puis le cache",
    closingText: "Commencez par les valeurs réellement lues, puis forcez un nouveau crawl si nécessaire.",
    relatedToolLabel: "Ouvrir OG Preview",
    sections: [
      { heading: "Comprendre la priorité des tags", paragraphs: ["La plupart des plateformes lisent d'abord og:title, puis twitter:title ou title en secours.", "Mettre à jour une seule balise peut laisser un aperçu incohérent."] },
      { heading: "Contrôler les valeurs extraites", paragraphs: ["Comparez og:title, twitter:title et title dans OG Preview.", "Vous repérez vite les conflits ou absences."] },
      { heading: "Corriger les erreurs de formulation", paragraphs: ["Titres génériques, marque répétée ou longueur excessive nuisent à la lisibilité."], bullets: ["Placez l'idée clé au début.", "Évitez répétitions et séparateurs inutiles.", "Alignez le titre social avec le contenu réel."] },
      { heading: "Rafraîchir le cache après correction", paragraphs: ["Un cache ancien peut continuer à afficher l'ancienne version.", "Lancez un nouveau scrape via les outils de debug."] },
      { heading: "Validation finale avant partage", paragraphs: ["Refaites un test complet de l'URL avant diffusion."] }
    ]
  },
  de: {
    title: "Warum der Titel deiner Link-Vorschau falsch aussieht",
    description: "Behebe falsche oder alte Vorschau-Titel mit einem kurzen OG-Check zu Tag-Priorität und Cache.",
    intro: "Wenn der Vorschau-Titel nicht zur Seite passt, sind oft konkurrierende Tags oder veralteter Cache die Ursache. Mit einem klaren Ablauf findest du den Fehler schnell.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Wann dieser Guide hilft",
    useCases: ["Neue Seite zeigt falschen Titel.", "Alter Titel bleibt nach Änderungen sichtbar.", "Unterschiedliche Darstellung je Plattform.", "Team braucht reproduzierbaren QA-Ablauf."],
    closingTitle: "Erst Tags, dann Cache",
    closingText: "Prüfe zuerst die tatsächlich ausgelesenen Werte und löse danach bei Bedarf einen Neuabruf aus.",
    relatedToolLabel: "OG Preview öffnen",
    sections: [
      { heading: "Tag-Priorität verstehen", paragraphs: ["Meist wird og:title bevorzugt, danach twitter:title oder title.", "Wenn nur ein Tag aktualisiert wird, bleibt die Vorschau oft inkonsistent."] },
      { heading: "Ausgelesene Metadaten prüfen", paragraphs: ["Vergleiche in OG Preview og:title, twitter:title und title direkt.", "So erkennst du Konflikte oder fehlende Werte sofort."] },
      { heading: "Typische Copy-Fehler vermeiden", paragraphs: ["Generische Titel, doppelte Markennennung und zu lange Headlines schwächen die Vorschau."], bullets: ["Kernaussage früh platzieren.", "Wiederholte Keywords/Separatoren reduzieren.", "Titel mit Seiteninhalt abgleichen."] },
      { heading: "Nach Korrekturen Cache erneuern", paragraphs: ["Trotz korrekter Tags kann zunächst alter Inhalt angezeigt werden.", "Über Debug-Tools einen neuen Crawl anstoßen."] },
      { heading: "Finaler Check vor dem Teilen", paragraphs: ["URL erneut testen und Titel, Beschreibung sowie Bild auf Konsistenz prüfen."] }
    ]
  }
};

const updateOpenGraphAfterPageEditsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Update Open Graph Metadata After Page Edits",
    description: "Use a simple post-edit checklist so title, description, and image previews stay in sync after page updates.",
    intro: "When you edit a live page, social previews often lag behind. This guide gives you a practical sequence to update OG tags and confirm that platforms fetch the latest version.",
    categoryLabel: "Social preview",
    useCasesTitle: "Best times to use it",
    useCases: ["You changed a headline or article angle.", "You replaced the hero image.", "You updated campaign landing page messaging.", "A previously shared link needs refreshed previews."],
    closingTitle: "Treat OG updates as a release step",
    closingText: "A 2-minute metadata check after edits helps prevent outdated previews and mixed messaging.",
    relatedToolLabel: "Open OG Preview",
    sections: [
      { heading: "Update the right tags together", paragraphs: ["When content changes, revise og:title, og:description, and og:image as one set.", "Partial updates create mixed previews that confuse readers."] },
      { heading: "Verify rendered source, not just CMS fields", paragraphs: ["Always check the final page output to ensure metadata was actually published.", "Template overrides and caching layers can keep old values active."] },
      { heading: "Recheck image accessibility", paragraphs: ["If a new image was uploaded, confirm the og:image URL is public HTTPS and loads without login.", "Broken image delivery is a frequent post-edit issue."] },
      { heading: "Request recrawl where needed", paragraphs: ["After deployment, trigger recrawl in platform debuggers when previews remain stale.", "Then retest in OG Preview to confirm fetched values."] },
      { heading: "Keep a lightweight publish checklist", paragraphs: ["A short team checklist reduces misses."], bullets: ["Edit OG title/description/image together.", "Validate output HTML values.", "Confirm image URL accessibility.", "Run preview test before sharing."] }
    ]
  },
  ko: {
    title: "페이지 수정 후 Open Graph 메타데이터 업데이트 방법",
    description: "페이지 편집 뒤 OG 제목·설명·이미지를 함께 점검해 미리보기 불일치를 줄이는 실무 체크리스트입니다.",
    intro: "라이브 페이지를 수정하면 소셜 미리보기가 늦게 반영되는 경우가 많습니다. 이 가이드는 수정 후 점검 순서를 간단히 정리합니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "이럴 때 사용하세요",
    useCases: ["헤드라인/메시지를 수정했을 때", "대표 이미지를 교체했을 때", "캠페인 랜딩 문구를 변경했을 때", "이미 공유된 링크를 최신 상태로 맞출 때"],
    closingTitle: "OG 업데이트를 배포 단계로 포함",
    closingText: "수정 후 2분 점검만 추가해도 오래된 미리보기 노출을 크게 줄일 수 있습니다.",
    relatedToolLabel: "OG Preview 열기",
    sections: [
      { heading: "관련 태그를 한 번에 수정", paragraphs: ["콘텐츠가 바뀌면 og:title, og:description, og:image를 함께 업데이트하세요.", "일부만 바꾸면 메시지가 섞인 미리보기가 생깁니다."] },
      { heading: "CMS 입력값이 아닌 최종 소스 확인", paragraphs: ["실제 렌더링된 HTML에서 값이 반영됐는지 확인해야 합니다.", "템플릿/캐시 계층 때문에 이전 값이 남을 수 있습니다."] },
      { heading: "새 이미지 접근성 재확인", paragraphs: ["새 og:image URL이 HTTPS 절대경로이며 로그인 없이 열리는지 확인하세요.", "이미지 접근 제한은 수정 후 자주 발생하는 문제입니다."] },
      { heading: "필요 시 재수집 요청", paragraphs: ["배포 후에도 미리보기가 오래된 경우 플랫폼 디버거에서 재수집을 요청하세요.", "이후 OG Preview로 다시 확인합니다."] },
      { heading: "짧은 게시 체크리스트 유지", paragraphs: ["팀 공통 체크리스트 예시:"], bullets: ["제목·설명·이미지 동시 수정", "HTML 출력값 확인", "이미지 URL 공개 접근 확인", "공유 전 미리보기 테스트"] }
    ]
  },
  ja: {
    title: "ページ編集後にOpen Graphを更新する方法",
    description: "ページ更新後にOGタイトル・説明・画像をそろえて見直し、古いプレビュー表示を防ぎます。",
    intro: "公開中ページを編集すると、プレビュー表示が古いまま残ることがあります。更新後の確認手順を短く整理しました。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "使うタイミング",
    useCases: ["見出しや訴求を変更したとき", "メイン画像を差し替えたとき", "LP文言を更新したとき", "既存共有リンクを最新化したいとき"],
    closingTitle: "OG更新を公開フローに含める",
    closingText: "編集後に短い確認を入れるだけで、古いプレビューの表示ミスを減らせます。",
    relatedToolLabel: "OG Previewを開く",
    sections: [
      { heading: "関連タグをセットで更新", paragraphs: ["内容変更時は og:title / og:description / og:image をまとめて更新します。", "一部だけ変更すると表示メッセージが不整合になります。"] },
      { heading: "CMS入力ではなく最終HTMLを確認", paragraphs: ["公開後の実際のソースで値が反映されているか確認してください。", "テンプレートやキャッシュで旧値が残る場合があります。"] },
      { heading: "画像URLの公開可否を再確認", paragraphs: ["新しい og:image は HTTPS の絶対URLで、認証なしで開ける必要があります。", "画像アクセス不可は更新後によく起きる問題です。"] },
      { heading: "必要に応じて再クロール", paragraphs: ["反映が遅い場合はプラットフォームのデバッガーで再取得を実行します。", "その後 OG Preview で再確認します。"] },
      { heading: "公開チェックを簡略化", paragraphs: ["チームで次を確認:"], bullets: ["タイトル・説明・画像を同時更新", "最終HTMLを確認", "画像URLの公開アクセス確認", "共有前プレビュー確認"] }
    ]
  },
  es: {
    title: "Cómo actualizar Open Graph después de editar una página",
    description: "Aplica un checklist corto tras cada edición para mantener alineados título, descripción e imagen de vista previa.",
    intro: "Al editar una página publicada, las vistas previas sociales pueden quedar desactualizadas. Este flujo te ayuda a actualizar OG y validar la versión correcta.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Cuándo usarlo",
    useCases: ["Cambiaste titular o enfoque del contenido.", "Reemplazaste la imagen principal.", "Actualizaste una landing de campaña.", "Necesitas refrescar enlaces ya compartidos."],
    closingTitle: "Incluye OG en tu proceso de publicación",
    closingText: "Un chequeo breve después de editar evita mensajes mixtos y previews viejas.",
    relatedToolLabel: "Abrir OG Preview",
    sections: [
      { heading: "Actualiza las etiquetas en conjunto", paragraphs: ["Si cambia el contenido, ajusta og:title, og:description y og:image al mismo tiempo.", "Cambios parciales generan previews inconsistentes."] },
      { heading: "Valida HTML renderizado", paragraphs: ["No basta revisar el CMS: confirma el resultado final en la página publicada.", "Capas de plantilla o caché pueden mantener datos antiguos."] },
      { heading: "Revisa acceso de la nueva imagen", paragraphs: ["Comprueba que la nueva URL de og:image sea HTTPS absoluta y pública.", "La inaccesibilidad de imagen es común tras ediciones."] },
      { heading: "Solicita recrawl si hace falta", paragraphs: ["Si ves datos viejos, fuerza nueva lectura en debuggers de plataforma.", "Luego verifica otra vez con OG Preview."] },
      { heading: "Checklist rápida del equipo", paragraphs: ["Incluye estos puntos:"], bullets: ["Editar título/descr./imagen juntos.", "Comprobar valores en HTML.", "Validar URL de imagen pública.", "Probar preview antes de compartir."] }
    ]
  },
  fr: {
    title: "Mettre à jour Open Graph après modification d'une page",
    description: "Suivez une checklist courte après chaque édition pour garder titre, description et image OG cohérents.",
    intro: "Après une modification de page, les aperçus sociaux peuvent rester anciens. Ce guide vous aide à republier des métadonnées OG cohérentes.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Quand l'utiliser",
    useCases: ["Changement de titre ou d'angle éditorial.", "Remplacement de l'image principale.", "Mise à jour d'une landing campagne.", "Rafraîchissement d'un lien déjà partagé."],
    closingTitle: "Intégrez OG à votre routine de publication",
    closingText: "Deux minutes de contrôle après édition évitent la majorité des aperçus obsolètes.",
    relatedToolLabel: "Ouvrir OG Preview",
    sections: [
      { heading: "Mettre à jour les balises ensemble", paragraphs: ["Quand la page change, ajustez og:title, og:description et og:image en bloc.", "Les mises à jour partielles créent des aperçus incohérents."] },
      { heading: "Vérifier la sortie HTML finale", paragraphs: ["Contrôlez les balises sur la page rendue, pas seulement dans le CMS.", "Template et cache peuvent conserver d'anciennes valeurs."] },
      { heading: "Confirmer l'accès à la nouvelle image", paragraphs: ["L'URL og:image doit être absolue, HTTPS et accessible sans authentification.", "C'est un point de casse fréquent après modification."] },
      { heading: "Forcer un nouveau crawl si nécessaire", paragraphs: ["Si l'aperçu reste ancien, lancez un re-scrape via les outils de debug.", "Revalidez ensuite dans OG Preview."] },
      { heading: "Checklist de publication", paragraphs: ["Points minimum :"], bullets: ["Mettre à jour titre/description/image ensemble.", "Contrôler les valeurs dans le HTML.", "Tester l'accès public de l'image.", "Vérifier l'aperçu avant diffusion."] }
    ]
  },
  de: {
    title: "Open Graph nach Seiten-Änderungen aktualisieren",
    description: "Nutze eine kurze Checkliste nach Edits, damit OG-Titel, Beschreibung und Bild weiterhin zusammenpassen.",
    intro: "Nach Änderungen an Live-Seiten bleiben Vorschauen oft veraltet. Mit diesem Ablauf aktualisierst du OG-Daten zuverlässig.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Wann das sinnvoll ist",
    useCases: ["Headline oder Inhaltsschwerpunkt geändert.", "Hero-Bild ausgetauscht.", "Kampagnen-Landingpage überarbeitet.", "Bereits geteilten Link aktualisieren."],
    closingTitle: "OG als festen Release-Schritt behandeln",
    closingText: "Ein kurzer Metadaten-Check nach Edits verhindert viele veraltete Vorschauen.",
    relatedToolLabel: "OG Preview öffnen",
    sections: [
      { heading: "Relevante Tags gemeinsam aktualisieren", paragraphs: ["Bei Inhaltsänderungen og:title, og:description und og:image zusammen anpassen.", "Teilupdates führen oft zu widersprüchlichen Vorschauen."] },
      { heading: "Gerenderten HTML-Output prüfen", paragraphs: ["Nicht nur CMS-Felder prüfen, sondern die veröffentlichte Seite.", "Template-Logik oder Cache kann alte Werte ausspielen."] },
      { heading: "Bild-URL erneut validieren", paragraphs: ["Neue og:image-URL muss absolut, HTTPS und öffentlich erreichbar sein.", "Bildzugriff ist nach Updates eine häufige Fehlerquelle."] },
      { heading: "Bei Bedarf Neuabruf anstoßen", paragraphs: ["Bleibt der alte Stand sichtbar, in Debug-Tools Re-Crawl auslösen.", "Danach erneut mit OG Preview prüfen."] },
      { heading: "Leichte Publish-Checkliste", paragraphs: ["Empfohlene Mindestpunkte:"], bullets: ["Titel/Beschreibung/Bild gemeinsam aktualisieren.", "HTML-Werte kontrollieren.", "Öffentlichen Bildzugriff prüfen.", "Vorschau vor Teilen testen."] }
    ]
  }
};

const whyLinkPreviewDescriptionLooksWrongContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Why Your Link Preview Description Looks Wrong",
    description: "Fix link preview descriptions that look outdated, truncated, or unrelated to your current page content.",
    intro: "A wrong description usually means one of three things: competing tags, old cached data, or description text that is too vague for social cards. This guide gives you a quick practical fix path.",
    categoryLabel: "Social preview",
    useCasesTitle: "Common situations",
    useCases: ["Preview text does not match updated page copy.", "Only some platforms show the right description.", "Snippet looks too generic to earn clicks.", "You need faster QA before campaign launch."],
    closingTitle: "Write clearly, then verify",
    closingText: "A concise description plus one metadata test before sharing prevents most preview-description issues.",
    relatedToolLabel: "Open OG Preview",
    sections: [
      { heading: "Check which description tag is being used", paragraphs: ["Platforms often prefer og:description, then twitter:description, then the standard meta description.", "If these differ, preview text may look random or inconsistent."] },
      { heading: "Compare extracted values quickly", paragraphs: ["Use OG Preview to inspect all description-related tags at once.", "You can immediately see whether the wrong text is in the source or coming from cache."] },
      { heading: "Keep the description practical and specific", paragraphs: ["Descriptions perform better when they explain what users get, not just broad keywords."], bullets: ["Start with the page outcome or benefit.", "Remove filler phrases and repeated terms.", "Keep the first sentence meaningful on its own."] },
      { heading: "Avoid stale snippet issues", paragraphs: ["After edits, some platforms still show older descriptions for a while.", "Trigger recrawl and retest if the source is correct but preview is outdated."] },
      { heading: "Use a pre-share quality pass", paragraphs: ["Before posting, confirm title, description, and image tell the same story."] }
    ]
  },
  ko: {
    title: "링크 미리보기 설명이 이상하게 보이는 이유",
    description: "링크 미리보기 설명이 오래됐거나 잘못 보일 때 태그 우선순위와 캐시를 기준으로 빠르게 수정합니다.",
    intro: "설명 문구 오류는 대개 태그 충돌, 캐시 지연, 모호한 문장 때문에 발생합니다. 이 가이드는 실무에서 바로 쓰는 점검 순서를 제공합니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "자주 발생하는 상황",
    useCases: ["수정한 본문과 미리보기 설명이 다를 때", "플랫폼별로 설명 노출이 다를 때", "설명이 너무 일반적이라 클릭이 약할 때", "캠페인 전 빠른 QA가 필요할 때"],
    closingTitle: "명확하게 쓰고 테스트하세요",
    closingText: "짧고 구체적인 설명 + 공유 전 1회 점검만으로 대부분의 문제를 예방할 수 있습니다.",
    relatedToolLabel: "OG Preview 열기",
    sections: [
      { heading: "어떤 설명 태그가 사용되는지 확인", paragraphs: ["보통 og:description이 우선이고, 없으면 twitter:description 또는 meta description으로 대체됩니다.", "태그 값이 다르면 미리보기 설명이 불안정해집니다."] },
      { heading: "추출된 값을 한 번에 비교", paragraphs: ["OG Preview에서 설명 관련 태그를 동시에 확인하세요.", "소스 문제인지 캐시 문제인지 빠르게 구분할 수 있습니다."] },
      { heading: "설명 문구를 실무형으로 정리", paragraphs: ["설명은 키워드 나열보다 사용자가 얻는 결과를 먼저 전달해야 합니다."], bullets: ["첫 문장에 핵심 효익 배치", "불필요한 수식어 제거", "반복 표현 최소화"] },
      { heading: "오래된 스니펫 처리", paragraphs: ["수정 후에도 일부 플랫폼은 이전 설명을 유지할 수 있습니다.", "소스가 맞다면 재수집을 요청하고 다시 확인하세요."] },
      { heading: "공유 전 품질 점검", paragraphs: ["제목·설명·이미지 메시지가 같은 방향인지 마지막으로 확인하세요."] }
    ]
  },
  ja: {
    title: "リンクプレビューの説明文が正しくない理由",
    description: "古い・不一致・曖昧なプレビュー説明文を、OGタグ確認とキャッシュ更新で改善します。",
    intro: "説明文の不一致は、タグ競合・キャッシュ残り・文面の曖昧さが主な原因です。実務で使える短い修正フローを紹介します。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "よくある場面",
    useCases: ["更新した内容と説明文が合わない", "サービスごとに説明が違う", "説明が抽象的でクリックされにくい", "公開前確認を短時間で済ませたい"],
    closingTitle: "明確に書いて検証する",
    closingText: "短く具体的な説明文を用意し、共有前に1回確認するだけで多くの問題を防げます。",
    relatedToolLabel: "OG Previewを開く",
    sections: [
      { heading: "どの説明タグが使われるか確認", paragraphs: ["一般的に og:description が優先され、次に twitter:description や meta description が使われます。", "値がそろっていないと表示が不安定になります。"] },
      { heading: "抽出値をまとめて比較", paragraphs: ["OG Previewで説明系タグを同時に確認します。", "ソース誤りかキャッシュ遅延かをすぐ切り分けできます。"] },
      { heading: "説明文は具体的に書く", paragraphs: ["キーワード羅列より、ページで得られる結果を伝える説明が有効です。"], bullets: ["冒頭に価値を置く", "冗長な語句を削る", "1文目だけでも意味が通るようにする"] },
      { heading: "古いキャッシュに対応", paragraphs: ["修正後もしばらく旧説明が残る場合があります。", "必要に応じて再クロールを依頼してください。"] },
      { heading: "共有前の最終確認", paragraphs: ["タイトル・説明・画像の整合を最終チェックします。"] }
    ]
  },
  es: {
    title: "Por qué la descripción de tu vista previa de enlace se ve mal",
    description: "Arregla descripciones de preview desactualizadas o incorrectas revisando etiquetas OG y caché social.",
    intro: "Si la descripción no coincide con tu página, suele deberse a etiquetas en conflicto, caché antigua o texto demasiado genérico. Esta guía te da un flujo rápido para corregirlo.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Situaciones comunes",
    useCases: ["El texto no refleja cambios recientes.", "Solo algunas plataformas muestran bien la descripción.", "El snippet es poco claro para el usuario.", "Necesitas QA rápida antes de compartir."],
    closingTitle: "Redacta claro y valida",
    closingText: "Una descripción concreta y una prueba previa evitan la mayoría de fallos.",
    relatedToolLabel: "Abrir OG Preview",
    sections: [
      { heading: "Revisa qué etiqueta de descripción manda", paragraphs: ["Normalmente se usa og:description y luego twitter:description o meta description.", "Si no coinciden, la vista previa puede variar."] },
      { heading: "Compara valores extraídos", paragraphs: ["Con OG Preview puedes revisar todas las etiquetas de descripción juntas.", "Así detectas si el problema está en código o en caché."] },
      { heading: "Haz la descripción específica", paragraphs: ["Funciona mejor cuando explica el resultado que obtiene el usuario."], bullets: ["Empieza con beneficio o resultado.", "Elimina frases de relleno.", "Haz que la primera frase tenga sentido por sí sola."] },
      { heading: "Gestiona caché antigua", paragraphs: ["Tras editar, algunas plataformas siguen mostrando texto viejo.", "Solicita recrawl y vuelve a probar."] },
      { heading: "Chequeo final antes de publicar", paragraphs: ["Confirma coherencia entre título, descripción e imagen."] }
    ]
  },
  fr: {
    title: "Pourquoi la description de votre aperçu de lien est incorrecte",
    description: "Corrigez une description d'aperçu obsolète ou incohérente en vérifiant tags OG et cache social.",
    intro: "Une mauvaise description vient souvent de balises concurrentes, de cache ancien ou d'un texte trop vague. Ce guide propose un chemin de correction rapide.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Cas fréquents",
    useCases: ["Le texte ne reflète pas vos dernières modifications.", "Certaines plateformes affichent une autre description.", "Le snippet est trop générique.", "Vous voulez une QA rapide avant diffusion."],
    closingTitle: "Rédiger clairement puis vérifier",
    closingText: "Une description concise + un test de métadonnées avant partage couvrent l'essentiel.",
    relatedToolLabel: "Ouvrir OG Preview",
    sections: [
      { heading: "Identifier la balise réellement utilisée", paragraphs: ["Souvent og:description est prioritaire, sinon twitter:description ou meta description.", "Des valeurs différentes provoquent des aperçus incohérents."] },
      { heading: "Comparer les valeurs extraites", paragraphs: ["OG Preview affiche rapidement toutes les descriptions disponibles.", "Vous distinguez immédiatement erreur de source et problème de cache."] },
      { heading: "Rendre la description plus utile", paragraphs: ["Une bonne description explique la valeur de la page, pas seulement des mots-clés."], bullets: ["Commencer par le bénéfice utilisateur.", "Supprimer les formulations vagues.", "Soigner la première phrase."] },
      { heading: "Traiter le cache ancien", paragraphs: ["Après modification, l'ancienne description peut rester visible temporairement.", "Lancez un nouveau crawl puis retestez."] },
      { heading: "Validation avant partage", paragraphs: ["Vérifiez l'alignement titre/description/image avant publication."] }
    ]
  },
  de: {
    title: "Warum die Beschreibung deiner Link-Vorschau falsch aussieht",
    description: "Korrigiere veraltete oder unpassende Vorschau-Beschreibungen durch OG-Tag-Check und Cache-Refresh.",
    intro: "Falsche Beschreibungen entstehen meist durch Tag-Konflikte, alten Cache oder zu allgemeine Texte. Dieser Guide zeigt einen schnellen Praxisablauf.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Typische Situationen",
    useCases: ["Beschreibung passt nicht zu aktuellen Seiteninhalten.", "Je Plattform unterschiedliche Texte.", "Snippet ist zu allgemein und schwach.", "Schneller QA-Check vor Kampagnenstart."],
    closingTitle: "Klar formulieren, dann prüfen",
    closingText: "Mit klarer Beschreibung und kurzem Vorschau-Test vermeidest du die meisten Fehler.",
    relatedToolLabel: "OG Preview öffnen",
    sections: [
      { heading: "Prüfen, welche Description greift", paragraphs: ["Häufig wird og:description genutzt, sonst twitter:description oder meta description.", "Unterschiedliche Werte führen zu inkonsistenten Vorschauen."] },
      { heading: "Extrahierte Werte vergleichen", paragraphs: ["In OG Preview siehst du alle Description-Felder direkt nebeneinander.", "So erkennst du Quelltext- vs. Cache-Probleme sofort."] },
      { heading: "Beschreibung konkret halten", paragraphs: ["Statt Keyword-Listen sollte die Beschreibung den Nutzen der Seite klar nennen."], bullets: ["Mit Ergebnis/Nutzen starten.", "Füllwörter streichen.", "Ersten Satz eigenständig verständlich machen."] },
      { heading: "Alten Cache aktualisieren", paragraphs: ["Nach Änderungen kann weiterhin alter Text angezeigt werden.", "Neuabruf anstoßen und erneut testen."] },
      { heading: "Finaler Pre-Share-Check", paragraphs: ["Titel, Beschreibung und Bild vor dem Teilen auf Konsistenz prüfen."] }
    ]
  }
};

const testOpenGraphChangesBeforeSharingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Test Open Graph Changes Before Sharing a Link",
    description: "Use a short pre-share validation workflow so social previews are correct before links go live.",
    intro: "Publishing first and fixing previews later wastes campaign momentum. A quick OG testing routine helps you catch metadata problems before anyone sees a broken card.",
    categoryLabel: "Social preview",
    useCasesTitle: "When this matters most",
    useCases: ["Launching campaign pages on a deadline.", "Handing pages from dev to marketing.", "Updating metadata right before distribution.", "Checking multilingual versions of a page."],
    closingTitle: "Test once, share confidently",
    closingText: "A short pre-share check is faster than post-share damage control.",
    relatedToolLabel: "Open OG Preview",
    sections: [
      { heading: "Start with the final production URL", paragraphs: ["Always test the exact URL you plan to share, including locale path and final slug.", "Draft or staging URLs often hide production issues."] },
      { heading: "Validate core social fields", paragraphs: ["Confirm og:title, og:description, and og:image first, then review Twitter fallbacks.", "Make sure no field is empty, duplicated, or unrelated to the current page."] },
      { heading: "Run a visual card sanity check", paragraphs: ["The preview should look clear at a glance."], bullets: ["Readable title with no awkward cut-off.", "Description that matches page intent.", "Image not cropped in a confusing way.", "URL and brand context look trustworthy."] },
      { heading: "Repeat test after deployment changes", paragraphs: ["If you edit metadata again, rerun the test. Small last-minute edits often break consistency.", "Do not assume previous checks still apply."] },
      { heading: "Keep a lightweight sharing checklist", paragraphs: ["A simple team checklist helps avoid rushed mistakes right before launch."] }
    ]
  },
  ko: {
    title: "링크 공유 전에 Open Graph 변경사항 테스트하는 방법",
    description: "공유 전 짧은 OG 점검 루틴으로 제목·설명·이미지 오류를 미리 잡는 방법을 안내합니다.",
    intro: "먼저 공유하고 나중에 고치는 방식은 캠페인 효율을 떨어뜨립니다. 공유 직전 1회 테스트만으로 대부분의 메타데이터 문제를 예방할 수 있습니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "특히 중요한 상황",
    useCases: ["런칭 일정이 촉박한 캠페인 페이지", "개발에서 마케팅으로 전달된 페이지", "배포 직전 메타데이터 수정", "다국어 페이지별 최종 점검"],
    closingTitle: "한 번 테스트하고 안심 공유",
    closingText: "사전 점검 1~2분이 사후 수정보다 훨씬 효율적입니다.",
    relatedToolLabel: "OG Preview 열기",
    sections: [
      { heading: "최종 운영 URL부터 테스트", paragraphs: ["실제로 공유할 URL(로케일 경로 포함)을 그대로 테스트하세요.", "스테이징 주소만 확인하면 운영 환경 문제를 놓치기 쉽습니다."] },
      { heading: "핵심 필드 우선 확인", paragraphs: ["og:title, og:description, og:image를 먼저 보고 Twitter fallback을 확인하세요.", "빈 값, 중복, 페이지와 불일치한 문구를 점검합니다."] },
      { heading: "카드 형태 빠른 시각 점검", paragraphs: ["한눈에 이해되는 카드인지 확인하세요."], bullets: ["제목이 어색하게 잘리지 않는지", "설명이 페이지 의도와 맞는지", "이미지가 과하게 잘리지 않는지", "URL/브랜드 맥락이 신뢰감 있는지"] },
      { heading: "수정 후 재테스트", paragraphs: ["메타데이터를 다시 고쳤다면 반드시 재검증하세요.", "이전 테스트 결과를 그대로 믿지 마세요."] },
      { heading: "공유 체크리스트 유지", paragraphs: ["팀용 간단 체크리스트가 런칭 직전 실수를 줄여줍니다."] }
    ]
  },
  ja: {
    title: "リンク共有前にOpen Graph変更をテストする方法",
    description: "共有前の短い検証フローで、タイトル・説明・画像のOG不具合を先に見つけます。",
    intro: "先に共有してから修正すると機会損失が大きくなります。共有前の短いOGチェックでプレビュー崩れを防ぎましょう。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "特に有効な場面",
    useCases: ["公開期限が近いキャンペーンページ", "開発から運用への引き渡し時", "配信直前にメタデータを更新した時", "多言語ページを一括確認したい時"],
    closingTitle: "事前テストで安心して共有",
    closingText: "共有前の1回確認は、共有後の修正対応よりはるかに効率的です。",
    relatedToolLabel: "OG Previewを開く",
    sections: [
      { heading: "本番で使う最終URLを検証", paragraphs: ["実際に配布するURL（ロケール付き）をそのままテストします。", "ステージングだけでは本番特有の問題を見逃します。"] },
      { heading: "主要フィールドを優先確認", paragraphs: ["og:title・og:description・og:image を先に確認し、次にTwitter系のフォールバックを見る。", "空欄、重複、内容不一致をチェックします。"] },
      { heading: "カードの見た目を短時間で確認", paragraphs: ["視認性を簡単にチェックします。"], bullets: ["タイトルが不自然に切れていない", "説明がページ内容に合っている", "画像トリミングが不自然でない", "URLとブランド表示が信頼できる"] },
      { heading: "再編集後は再テスト", paragraphs: ["メタデータを再編集したら、必ず再検証します。", "前回の結果を流用しないことが重要です。"] },
      { heading: "共有前チェックを定着", paragraphs: ["軽いチームチェックリストで直前ミスを減らせます。"] }
    ]
  },
  es: {
    title: "Cómo probar cambios de Open Graph antes de compartir un enlace",
    description: "Sigue un flujo corto de validación previa para asegurar previews correctas antes de publicar enlaces.",
    intro: "Compartir primero y corregir después consume tiempo y alcance. Una rutina OG rápida te ayuda a detectar errores antes de la publicación.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Cuándo importa más",
    useCases: ["Lanzamientos con poco margen.", "Entrega de páginas entre equipos.", "Cambios de metadatos de última hora.", "Revisión de versiones multilingües."],
    closingTitle: "Prueba una vez y comparte con confianza",
    closingText: "La validación previa es más rápida que corregir después de difundir.",
    relatedToolLabel: "Abrir OG Preview",
    sections: [
      { heading: "Empieza con la URL final", paragraphs: ["Prueba exactamente la URL que vas a compartir, incluyendo locale y slug final.", "URLs de staging no reemplazan una prueba real."] },
      { heading: "Valida campos sociales clave", paragraphs: ["Comprueba og:title, og:description y og:image, luego revisa fallback de Twitter.", "Evita campos vacíos o desconectados del contenido actual."] },
      { heading: "Haz una revisión visual rápida", paragraphs: ["La tarjeta debe entenderse al instante."], bullets: ["Título legible sin corte raro.", "Descripción coherente con la página.", "Imagen sin recorte confuso.", "URL y marca con contexto claro."] },
      { heading: "Repite tras cambios de última hora", paragraphs: ["Si vuelves a editar metadatos, repite la prueba completa.", "No asumas que el test anterior sigue válido."] },
      { heading: "Usa checklist ligera de publicación", paragraphs: ["Una checklist corta reduce errores antes del lanzamiento."] }
    ]
  },
  fr: {
    title: "Comment tester les changements Open Graph avant de partager un lien",
    description: "Validez rapidement vos balises OG avant diffusion pour éviter des aperçus sociaux erronés.",
    intro: "Partager d'abord puis corriger fait perdre du temps et de la portée. Une vérification OG rapide permet d'éviter ces erreurs.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Quand c'est le plus utile",
    useCases: ["Lancement de campagne avec deadline.", "Passage d'une page entre équipes.", "Modification de balises juste avant diffusion.", "Validation de versions multilingues."],
    closingTitle: "Tester une fois, partager sereinement",
    closingText: "Une vérification courte avant partage évite la majorité des corrections urgentes.",
    relatedToolLabel: "Ouvrir OG Preview",
    sections: [
      { heading: "Tester l'URL finale de production", paragraphs: ["Utilisez exactement l'URL qui sera partagée, locale comprise.", "Les tests en staging ne suffisent pas toujours."] },
      { heading: "Contrôler les champs clés", paragraphs: ["Vérifiez d'abord og:title, og:description et og:image, puis les fallback Twitter.", "Évitez valeurs vides, doublons ou hors sujet."] },
      { heading: "Faire un contrôle visuel rapide", paragraphs: ["L'aperçu doit être compréhensible immédiatement."], bullets: ["Titre lisible sans coupure gênante.", "Description alignée avec la page.", "Image non recadrée de façon confuse.", "URL et marque crédibles."] },
      { heading: "Retester après chaque modification", paragraphs: ["Si vous modifiez encore les balises, refaites le test.", "Ne supposez pas que l'ancien contrôle reste valide."] },
      { heading: "Conserver une checklist simple", paragraphs: ["Une mini-checklist équipe réduit les erreurs de dernière minute."] }
    ]
  },
  de: {
    title: "Open-Graph-Änderungen vor dem Teilen testen",
    description: "Prüfe OG-Metadaten vor dem Teilen mit einem kurzen Ablauf, damit Vorschauen von Anfang an korrekt sind.",
    intro: "Erst teilen und später korrigieren kostet Reichweite. Mit einem schnellen OG-Check findest du Probleme vor dem Go-live.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Wann das besonders wichtig ist",
    useCases: ["Kampagnen-Launch unter Zeitdruck.", "Übergabe von Seiten zwischen Teams.", "Letzte Metadaten-Änderungen vor Verteilung.", "Prüfung mehrsprachiger Seitenversionen."],
    closingTitle: "Einmal testen, sicher teilen",
    closingText: "Ein kurzer Vorab-Check spart aufwendige Nacharbeit nach dem Teilen.",
    relatedToolLabel: "OG Preview öffnen",
    sections: [
      { heading: "Mit der finalen Live-URL starten", paragraphs: ["Teste exakt die URL, die geteilt werden soll – inklusive Locale-Pfad.", "Staging-Tests ersetzen den Live-Check nicht."] },
      { heading: "Kernfelder validieren", paragraphs: ["Prüfe zuerst og:title, og:description und og:image, danach Twitter-Fallbacks.", "Achte auf leere, doppelte oder unpassende Werte."] },
      { heading: "Visuellen Schnellcheck durchführen", paragraphs: ["Die Vorschau sollte sofort verständlich sein."], bullets: ["Titel gut lesbar ohne harte Kürzung.", "Beschreibung passt zum Seitenziel.", "Bildzuschnitt wirkt nicht irritierend.", "URL und Marke erscheinen vertrauenswürdig."] },
      { heading: "Nach Änderungen erneut testen", paragraphs: ["Bei erneuten Tag-Änderungen den gesamten Check wiederholen.", "Nicht davon ausgehen, dass ein alter Test weiter gilt."] },
      { heading: "Leichte Share-Checkliste nutzen", paragraphs: ["Eine kurze Team-Checkliste verhindert Hektikfehler vor dem Launch."] }
    ]
  }
};

const commonOpenGraphTagMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Common Open Graph Tag Mistakes on Website Pages",
    description: "Avoid the most frequent Open Graph implementation mistakes that cause broken or weak social previews.",
    intro: "Many OG problems are not complex bugs. They are simple implementation mistakes repeated across templates and pages. Fixing these basics improves preview reliability immediately.",
    categoryLabel: "Social preview",
    useCasesTitle: "Where this guide is useful",
    useCases: ["Auditing existing page templates.", "QA before major content releases.", "Training new team members on metadata basics.", "Improving consistency across multilingual pages."],
    closingTitle: "Small fixes create reliable previews",
    closingText: "When OG tags are complete, consistent, and testable, social sharing gets easier for every new page.",
    relatedToolLabel: "Open OG Preview",
    sections: [
      { heading: "Mistake 1: Missing or incomplete core tags", paragraphs: ["Some pages include og:title but skip og:description or og:image.", "Treat these fields as a required set, not optional extras."] },
      { heading: "Mistake 2: Relative or blocked image URLs", paragraphs: ["og:image should use a full HTTPS URL that crawlers can access.", "Login-protected or blocked assets often produce blank previews."] },
      { heading: "Mistake 3: Duplicate or conflicting metadata", paragraphs: ["Multiple versions of the same tag can make crawler behavior unpredictable.", "Keep one clear value per field whenever possible."] },
      { heading: "Mistake 4: Metadata not aligned with page content", paragraphs: ["A mismatch between page headline, OG title, and image lowers trust and click quality.", "Update metadata whenever the page angle changes."] },
      { heading: "Quick audit checklist", paragraphs: ["Use this list during review."], bullets: ["Core OG fields exist on every important page.", "Image URL is absolute, HTTPS, and public.", "No duplicate conflicting tag values.", "Preview tested before sharing."] }
    ]
  },
  ko: {
    title: "웹페이지에서 자주 발생하는 Open Graph 태그 실수",
    description: "소셜 미리보기를 망치는 대표적인 Open Graph 구현 실수를 실무 관점에서 정리합니다.",
    intro: "OG 문제의 상당수는 복잡한 버그가 아니라 기본 설정 실수입니다. 템플릿 수준에서 바로잡으면 미리보기 품질이 빠르게 안정됩니다.",
    categoryLabel: "소셜 미리보기",
    useCasesTitle: "유용한 활용 상황",
    useCases: ["기존 페이지 템플릿 점검", "대량 발행 전 QA", "신규 팀원 온보딩", "다국어 페이지 메타데이터 일관성 개선"],
    closingTitle: "작은 수정이 큰 안정성을 만듭니다",
    closingText: "OG 태그를 완전하고 일관되게 관리하면 새 페이지 공유 품질도 함께 좋아집니다.",
    relatedToolLabel: "OG Preview 열기",
    sections: [
      { heading: "실수 1: 핵심 태그 누락", paragraphs: ["og:title만 있고 og:description 또는 og:image가 빠진 경우가 많습니다.", "핵심 태그는 세트로 관리하세요."] },
      { heading: "실수 2: 상대경로/차단된 이미지 URL", paragraphs: ["og:image는 크롤러가 접근 가능한 HTTPS 절대 URL이어야 합니다.", "로그인 필요 또는 차단된 파일은 빈 미리보기를 유발합니다."] },
      { heading: "실수 3: 중복·충돌 메타데이터", paragraphs: ["같은 태그가 여러 값으로 출력되면 플랫폼별 결과가 달라질 수 있습니다.", "필드별 단일 명확한 값을 유지하세요."] },
      { heading: "실수 4: 페이지 내용과 메타데이터 불일치", paragraphs: ["본문/제목/이미지 메시지가 다르면 신뢰와 클릭 품질이 떨어집니다.", "페이지 방향이 바뀌면 OG도 함께 수정해야 합니다."] },
      { heading: "빠른 점검 체크리스트", paragraphs: ["검수 시 아래를 확인하세요."], bullets: ["핵심 OG 필드 존재", "이미지 URL 공개 HTTPS 절대경로", "중복 충돌 태그 없음", "공유 전 미리보기 테스트"] }
    ]
  },
  ja: {
    title: "WebページでよくあるOpen Graphタグのミス",
    description: "ソーシャルプレビュー崩れにつながる代表的なOG実装ミスと改善ポイントを整理します。",
    intro: "OGの問題は複雑な不具合より、基本設定の不足で起きることが多いです。テンプレート段階で直すと全体の品質が安定します。",
    categoryLabel: "ソーシャルプレビュー",
    useCasesTitle: "役立つ場面",
    useCases: ["既存テンプレート監査", "大量公開前のQA", "新メンバー向け運用ルール共有", "多言語ページ整備"],
    closingTitle: "基本をそろえるだけで改善",
    closingText: "OGタグを揃えて検証する習慣が、安定した共有プレビューにつながります。",
    relatedToolLabel: "OG Previewを開く",
    sections: [
      { heading: "ミス1: コアタグ不足", paragraphs: ["og:titleだけあり、og:descriptionやog:imageが欠けるケースが多いです。", "コアタグはセットで管理しましょう。"] },
      { heading: "ミス2: 相対URLや非公開画像", paragraphs: ["og:imageはHTTPSの絶対URLで公開アクセス可能である必要があります。", "認証必須画像はプレビュー取得に失敗します。"] },
      { heading: "ミス3: 重複・競合タグ", paragraphs: ["同じタグが複数あると取得結果が不安定になります。", "各フィールドは1つの明確な値に整理します。"] },
      { heading: "ミス4: ページ内容との不一致", paragraphs: ["ページ見出し、OGタイトル、画像の内容がずれると信頼性が下がります。", "ページ更新時はOGも同時に見直しましょう。"] },
      { heading: "簡易監査チェック", paragraphs: ["確認ポイント:"], bullets: ["主要OGタグが揃っている", "画像URLが絶対HTTPSで公開", "重複競合タグがない", "共有前にプレビュー確認"] }
    ]
  },
  es: {
    title: "Errores comunes de etiquetas Open Graph en páginas web",
    description: "Evita fallos típicos de implementación OG que generan vistas previas rotas o poco claras.",
    intro: "Muchos problemas OG no son bugs complejos, sino errores básicos repetidos en plantillas. Corregirlos mejora la consistencia de inmediato.",
    categoryLabel: "Vista previa social",
    useCasesTitle: "Dónde resulta útil",
    useCases: ["Auditoría de plantillas existentes.", "QA antes de lanzamientos.", "Formación de nuevos miembros.", "Consistencia en páginas multilingües."],
    closingTitle: "Pequeños ajustes, previews más estables",
    closingText: "Con etiquetas OG completas y coherentes, compartir enlaces se vuelve más predecible.",
    relatedToolLabel: "Abrir OG Preview",
    sections: [
      { heading: "Error 1: faltan etiquetas clave", paragraphs: ["Algunas páginas solo tienen og:title y omiten og:description u og:image.", "Trata estas etiquetas como un conjunto obligatorio."] },
      { heading: "Error 2: URL de imagen relativa o bloqueada", paragraphs: ["og:image debe ser URL completa HTTPS accesible para bots.", "Imágenes privadas o bloqueadas causan previews vacías."] },
      { heading: "Error 3: metadatos duplicados o en conflicto", paragraphs: ["Varias versiones del mismo tag vuelven impredecible la lectura.", "Mantén un único valor claro por campo."] },
      { heading: "Error 4: OG no alineado con la página", paragraphs: ["Si título, descripción e imagen cuentan cosas distintas, baja la confianza del usuario.", "Actualiza OG cuando cambie el enfoque de la página."] },
      { heading: "Checklist rápida", paragraphs: ["Revisa:"], bullets: ["Campos OG clave presentes.", "Imagen con URL absoluta HTTPS pública.", "Sin tags duplicados conflictivos.", "Preview probada antes de compartir."] }
    ]
  },
  fr: {
    title: "Erreurs courantes de balises Open Graph sur les pages web",
    description: "Évitez les erreurs OG les plus fréquentes qui cassent ou affaiblissent les aperçus sociaux.",
    intro: "La plupart des problèmes OG viennent d'erreurs simples répétées dans les templates. Corriger ces bases améliore immédiatement la fiabilité des aperçus.",
    categoryLabel: "Aperçu social",
    useCasesTitle: "Quand ce guide aide",
    useCases: ["Audit des templates existants.", "QA avant publication importante.", "Formation des nouveaux membres.", "Harmonisation multilingue."],
    closingTitle: "Des bases solides suffisent souvent",
    closingText: "Des balises complètes, cohérentes et testées rendent le partage social beaucoup plus fiable.",
    relatedToolLabel: "Ouvrir OG Preview",
    sections: [
      { heading: "Erreur 1 : balises clés manquantes", paragraphs: ["Certaines pages ont og:title mais pas og:description ou og:image.", "Considérez ces champs comme un minimum obligatoire."] },
      { heading: "Erreur 2 : image relative ou inaccessible", paragraphs: ["og:image doit être une URL HTTPS absolue accessible aux crawlers.", "Les images protégées provoquent des aperçus vides."] },
      { heading: "Erreur 3 : balises en double ou en conflit", paragraphs: ["Plusieurs valeurs pour un même tag rendent le résultat instable.", "Conservez une valeur claire par champ."] },
      { heading: "Erreur 4 : décalage avec le contenu de page", paragraphs: ["Quand titre, description et image ne racontent pas la même chose, la confiance baisse.", "Mettez à jour OG dès qu'un angle éditorial change."] },
      { heading: "Checklist d'audit rapide", paragraphs: ["Vérifiez :"], bullets: ["Présence des champs OG essentiels.", "Image HTTPS absolue et publique.", "Absence de conflits de tags.", "Test de preview avant partage."] }
    ]
  },
  de: {
    title: "Häufige Open-Graph-Tag-Fehler auf Webseiten",
    description: "Vermeide typische OG-Implementierungsfehler, die zu kaputten oder schwachen Social-Vorschauen führen.",
    intro: "Viele OG-Probleme sind keine komplexen Bugs, sondern einfache Grundlagenfehler in Templates. Wer diese beseitigt, verbessert Vorschauen sofort.",
    categoryLabel: "Social Preview",
    useCasesTitle: "Wo dieser Guide hilft",
    useCases: ["Vorhandene Templates auditieren.", "QA vor großen Releases.", "Neue Teammitglieder einarbeiten.", "Mehrsprachige Seiten vereinheitlichen."],
    closingTitle: "Kleine Korrekturen, stabile Vorschauen",
    closingText: "Vollständige und konsistente OG-Tags machen Link-Preview-Ergebnisse deutlich verlässlicher.",
    relatedToolLabel: "OG Preview öffnen",
    sections: [
      { heading: "Fehler 1: Kern-Tags fehlen", paragraphs: ["Häufig ist nur og:title gesetzt, aber og:description oder og:image fehlen.", "Behandle diese Tags als Pflichtpaket."] },
      { heading: "Fehler 2: Relative oder gesperrte Bild-URL", paragraphs: ["og:image sollte eine vollständige HTTPS-URL sein, die Crawler abrufen können.", "Geschützte Assets führen oft zu leeren Vorschauen."] },
      { heading: "Fehler 3: Doppelte oder widersprüchliche Tags", paragraphs: ["Mehrere Werte für denselben Tag machen das Verhalten unvorhersehbar.", "Pro Feld möglichst nur einen klaren Wert ausgeben."] },
      { heading: "Fehler 4: Metadaten passen nicht zur Seite", paragraphs: ["Wenn Titel, Beschreibung und Bild unterschiedliche Botschaften senden, sinken Vertrauen und Klickqualität.", "Bei Inhaltsänderungen OG-Daten mit aktualisieren."] },
      { heading: "Schnelle Audit-Checkliste", paragraphs: ["Kurz prüfen:"], bullets: ["Kern-OG-Felder vorhanden.", "Bild als absolute öffentliche HTTPS-URL.", "Keine konfliktreichen Duplikate.", "Preview vor dem Teilen getestet."] }
    ]
  }
};

const pngVsJpgVsWebpContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "PNG vs JPG vs WebP: Which Format Should You Use?",
    description: "Choose the right image format for web tasks by comparing PNG, JPG, and WebP with practical rules.",
    intro: "There is no single best image format for every task. The right choice depends on image type, quality needs, and delivery speed.",
    categoryLabel: "Image format",
    useCasesTitle: "When this comparison is useful",
    useCases: ["Preparing blog and landing page images.", "Exporting UI screenshots and graphics.", "Reducing website image weight.", "Setting team-wide image rules."],
    closingTitle: "Pick format by use case",
    closingText: "Use the format that matches the asset's purpose, not habit. A simple decision rule keeps your workflow fast and consistent.",
    relatedToolLabel: "Open the WebP Converter",
    sections: [
      { heading: "Quick strengths of each format", paragraphs: ["JPG is strong for photos, PNG is strong for crisp graphics and transparency, and WebP often offers smaller files for web delivery.", "Each format solves a different problem, so comparing by use case works better than chasing one universal option."] },
      { heading: "When to use JPG", paragraphs: ["Use JPG for photographic content where small file size matters and slight compression is acceptable.", "It is common for blog photos, article hero images, and product shots where transparency is not needed."] },
      { heading: "When to use PNG", paragraphs: ["Use PNG for screenshots, UI elements, logos, and assets needing transparent backgrounds.", "PNG keeps edges and text crisp, but files can become large compared with JPG or WebP."] },
      { heading: "When to use WebP", paragraphs: ["WebP is often a practical default for web publishing because it can deliver good quality at lower file size.", "It supports both lossy and lossless compression, and transparency, making it flexible for mixed assets."] },
      { heading: "Simple decision checklist", paragraphs: ["Use this quick rule before exporting."], bullets: ["Photo-heavy image: start with JPG or WebP.", "Text, UI, logo, transparency: start with PNG or lossless WebP.", "Need best browser-delivery efficiency: test WebP first.", "Need edit-friendly master file: keep original source separately."] }
    ]
  },
  ko: {
    title: "PNG vs JPG vs WebP: 어떤 포맷을 써야 할까?",
    description: "이미지 종류와 용도에 따라 PNG, JPG, WebP 중 어떤 형식을 선택하면 좋은지 실무 기준으로 정리합니다.",
    intro: "모든 상황에서 항상 정답인 이미지 포맷은 없습니다. 콘텐츠 성격, 품질 요구, 전송 효율을 함께 보고 결정해야 합니다.",
    categoryLabel: "이미지 형식",
    useCasesTitle: "이 비교가 필요한 상황",
    useCases: ["블로그/랜딩 이미지 준비", "UI 스크린샷 및 그래픽 내보내기", "웹 페이지 용량 최적화", "팀 공통 이미지 기준 수립"],
    closingTitle: "용도 기준으로 선택하세요",
    closingText: "습관이 아니라 자산 목적에 맞춰 형식을 고르면 품질과 성능을 함께 잡을 수 있습니다.",
    relatedToolLabel: "WebP 변환기 열기",
    sections: [
      { heading: "형식별 핵심 강점", paragraphs: ["JPG는 사진, PNG는 선명한 그래픽/투명 배경, WebP는 웹 전송 효율에 강점이 있습니다.", "한 가지 포맷만 고집하기보다 자산별로 고르는 방식이 더 실용적입니다."] },
      { heading: "JPG를 쓰면 좋은 경우", paragraphs: ["사진 위주의 콘텐츠에서 용량을 줄이고 싶을 때 적합합니다.", "블로그 본문 사진, 상품 이미지, 히어로 이미지에 자주 사용됩니다."] },
      { heading: "PNG를 쓰면 좋은 경우", paragraphs: ["스크린샷, 로고, UI 요소처럼 선명한 경계와 투명 배경이 필요할 때 좋습니다.", "다만 파일이 커질 수 있으니 전송 성능은 함께 점검하세요."] },
      { heading: "WebP를 쓰면 좋은 경우", paragraphs: ["웹 게시용에서는 WebP가 품질 대비 용량 효율이 좋아 기본 선택지로 많이 쓰입니다.", "손실/무손실과 투명도를 모두 지원해 활용 범위가 넓습니다."] },
      { heading: "빠른 결정 체크리스트", paragraphs: ["내보내기 전 아래 기준을 적용하세요."], bullets: ["사진 중심: JPG 또는 WebP부터", "텍스트/로고/투명도 필요: PNG 또는 무손실 WebP", "웹 전송 최적화 우선: WebP 먼저 테스트", "수정용 마스터 파일은 별도 보관"] }
    ]
  },
  ja: {
    title: "PNG・JPG・WebPの違い：どの形式を使うべき？",
    description: "用途別にPNG、JPG、WebPを比較し、Web運用で迷わないための実践ルールを紹介します。",
    intro: "画像形式に万能な正解はありません。画像の種類、品質要件、表示速度の優先度で最適解は変わります。",
    categoryLabel: "画像フォーマット",
    useCasesTitle: "この比較が役立つ場面",
    useCases: ["記事・LP画像の準備", "UIスクリーンショットの書き出し", "ページ容量の削減", "チーム運用ルールの作成"],
    closingTitle: "用途に合わせて選ぶ",
    closingText: "習慣で固定せず、素材の目的で選ぶと品質と速度を両立しやすくなります。",
    relatedToolLabel: "WebP Converterを開く",
    sections: [
      { heading: "形式ごとの得意分野", paragraphs: ["JPGは写真、PNGは文字や透過を含む画像、WebPはWeb配信効率に強みがあります。", "1つに統一するより、用途ごとに使い分ける方が実務的です。"] },
      { heading: "JPGを選ぶ場面", paragraphs: ["写真中心の画像でファイルサイズを抑えたいときに向いています。", "ブログ写真やヒーロー画像などで使いやすい形式です。"] },
      { heading: "PNGを選ぶ場面", paragraphs: ["UI部品、ロゴ、スクリーンショット、透過背景が必要な素材に適しています。", "ただしファイルが大きくなりやすいので配信コストは要確認です。"] },
      { heading: "WebPを選ぶ場面", paragraphs: ["Web公開では、品質を保ちながら軽量化しやすいWebPが有力です。", "透過対応に加え、非可逆・可逆の両方を選べる柔軟さがあります。"] },
      { heading: "簡易判断チェック", paragraphs: ["迷ったら次の基準で判断します。"], bullets: ["写真中心: JPGまたはWebP", "文字・ロゴ・透過あり: PNGまたは可逆WebP", "配信効率優先: まずWebPを検証", "再編集用の元データは別保存"] }
    ]
  },
  es: {
    title: "PNG vs JPG vs WebP: ¿Qué formato deberías usar?",
    description: "Elige el mejor formato de imagen para web comparando PNG, JPG y WebP con criterios prácticos.",
    intro: "No existe un formato perfecto para todo. La mejor opción depende del tipo de imagen, la calidad necesaria y el rendimiento que buscas.",
    categoryLabel: "Formato de imagen",
    useCasesTitle: "Cuándo sirve esta comparación",
    useCases: ["Preparar imágenes para blog y landing.", "Exportar capturas y gráficos UI.", "Reducir peso de páginas.", "Definir reglas de formato en equipo."],
    closingTitle: "Elige según el uso",
    closingText: "Usar el formato según el objetivo del recurso te da mejor equilibrio entre calidad y velocidad.",
    relatedToolLabel: "Abrir WebP Converter",
    sections: [
      { heading: "Fortalezas rápidas", paragraphs: ["JPG destaca en fotos, PNG en gráficos nítidos y transparencia, y WebP en eficiencia para web.", "Comparar por caso de uso es más útil que imponer un formato único."] },
      { heading: "Cuándo usar JPG", paragraphs: ["Ideal para fotos donde un tamaño menor importa y una compresión moderada es aceptable.", "Común en imágenes de artículos, banners y producto sin transparencia."] },
      { heading: "Cuándo usar PNG", paragraphs: ["Úsalo para logos, capturas, elementos de interfaz y fondos transparentes.", "Mantiene nitidez en bordes y texto, aunque puede generar archivos más pesados."] },
      { heading: "Cuándo usar WebP", paragraphs: ["WebP suele ser una buena base para publicar en web por su relación calidad/peso.", "Soporta compresión con y sin pérdida, además de transparencia."] },
      { heading: "Checklist de decisión", paragraphs: ["Antes de exportar, revisa:"], bullets: ["Imagen fotográfica: empezar con JPG o WebP.", "Texto/UI/logo/transparencia: PNG o WebP sin pérdida.", "Prioridad en rendimiento web: probar WebP primero.", "Guardar archivo maestro editable por separado."] }
    ]
  },
  fr: {
    title: "PNG vs JPG vs WebP : quel format utiliser ?",
    description: "Comparez PNG, JPG et WebP avec des règles simples pour choisir le bon format d'image pour le web.",
    intro: "Il n'existe pas de format unique parfait. Le bon choix dépend du type d'image, du niveau de qualité attendu et du besoin de performance.",
    categoryLabel: "Format d'image",
    useCasesTitle: "Quand ce comparatif est utile",
    useCases: ["Préparer des visuels d'articles et landing pages.", "Exporter captures UI et graphismes.", "Alléger les pages web.", "Définir des standards d'équipe."],
    closingTitle: "Choisissez selon l'objectif",
    closingText: "En sélectionnant le format selon l'usage réel de l'image, vous obtenez un meilleur compromis qualité/performance.",
    relatedToolLabel: "Ouvrir WebP Converter",
    sections: [
      { heading: "Forces de chaque format", paragraphs: ["JPG convient aux photos, PNG aux graphismes nets et à la transparence, WebP à l'optimisation web.", "Comparer par cas d'usage est plus efficace qu'imposer un format unique."] },
      { heading: "Quand utiliser JPG", paragraphs: ["Pertinent pour les photos quand vous souhaitez réduire le poids avec une légère compression.", "Très courant pour illustrations d'article et visuels marketing sans transparence."] },
      { heading: "Quand utiliser PNG", paragraphs: ["Adapté aux logos, captures d'écran, éléments UI et fonds transparents.", "Le rendu des textes et contours est net, mais le poids peut être plus élevé."] },
      { heading: "Quand utiliser WebP", paragraphs: ["WebP est souvent un bon choix par défaut pour la diffusion web grâce à son efficacité.", "Il gère la compression avec ou sans perte et la transparence."] },
      { heading: "Checklist rapide", paragraphs: ["Avant export, vérifiez :"], bullets: ["Photo : JPG ou WebP.", "Texte/UI/logo/transparence : PNG ou WebP sans perte.", "Performance web prioritaire : tester WebP d'abord.", "Conserver un master éditable séparé."] }
    ]
  },
  de: {
    title: "PNG vs. JPG vs. WebP: Welches Format solltest du nutzen?",
    description: "Vergleiche PNG, JPG und WebP mit praktischen Regeln, um das passende Bildformat für den Webeinsatz zu wählen.",
    intro: "Es gibt kein einzelnes Bildformat, das immer am besten ist. Die richtige Wahl hängt von Bildtyp, Qualitätsanspruch und Performance-Ziel ab.",
    categoryLabel: "Bildformat",
    useCasesTitle: "Wann dieser Vergleich hilft",
    useCases: ["Bilder für Blog und Landingpages vorbereiten.", "UI-Screenshots und Grafiken exportieren.", "Seitengröße reduzieren.", "Teamweite Formatregeln festlegen."],
    closingTitle: "Nach Einsatzfall entscheiden",
    closingText: "Wenn du das Format am Zweck ausrichtest, bekommst du meist den besten Mix aus Qualität und Ladezeit.",
    relatedToolLabel: "WebP Converter öffnen",
    sections: [
      { heading: "Kurzüberblick der Stärken", paragraphs: ["JPG eignet sich für Fotos, PNG für scharfe Grafiken mit Transparenz, WebP für effiziente Web-Auslieferung.", "Ein formatbezogener Einsatz ist in der Praxis besser als ein Ein-Format-Ansatz."] },
      { heading: "Wann JPG sinnvoll ist", paragraphs: ["Für fotolastige Motive mit Fokus auf kleinere Dateigrößen.", "Typisch bei Artikelbildern, Hero-Motiven und Produktfotos ohne Transparenz."] },
      { heading: "Wann PNG sinnvoll ist", paragraphs: ["Für Logos, UI-Elemente, Screenshots und transparente Hintergründe.", "Kanten und Text bleiben klar, allerdings oft mit höherer Dateigröße."] },
      { heading: "Wann WebP sinnvoll ist", paragraphs: ["Für viele Web-Workflows ist WebP ein effizienter Standard mit guter Qualitäts-/Größen-Balance.", "WebP unterstützt verlustbehaftete und verlustfreie Kompression plus Transparenz."] },
      { heading: "Einfache Entscheidungs-Checkliste", paragraphs: ["Vor dem Export kurz prüfen:"], bullets: ["Foto-lastig: JPG oder WebP.", "Text/UI/Logo/Transparenz: PNG oder verlustfreies WebP.", "Maximale Web-Effizienz: zuerst WebP testen.", "Editierbares Master separat speichern."] }
    ]
  }
};

const whenNotToUseWebpContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "When WebP Is Not the Best Image Format",
    description: "Learn when WebP is not ideal and how to choose better alternatives for editing, archival, and specialized workflows.",
    intro: "WebP is excellent for many web-delivery tasks, but it is not always the right answer. Knowing where it falls short helps you avoid quality and workflow problems.",
    categoryLabel: "Image format",
    useCasesTitle: "When this guide is useful",
    useCases: ["Building an image workflow for teams.", "Choosing master formats for design work.", "Handling print or archival assets.", "Balancing compatibility requirements."],
    closingTitle: "Use WebP intentionally",
    closingText: "WebP is a great delivery format, but not always the best source format. Keep original masters and choose by context.",
    relatedToolLabel: "Open the WebP Converter",
    sections: [
      { heading: "WebP is for delivery, not every stage", paragraphs: ["WebP shines when your goal is smaller files on the web.", "It is less ideal as the only working master if you need heavy re-editing, long-term archiving, or special production pipelines."] },
      { heading: "Cases where another format is better", paragraphs: ["Some workflows are better served by PNG, JPG, or source design files."], bullets: ["You need layered editing and repeated exports.", "You need predictable print workflows.", "You must preserve original camera/photo data.", "A partner system has strict legacy format requirements.", "You are storing a long-term master library."] },
      { heading: "Quality and artifact considerations", paragraphs: ["Repeated lossy conversion can degrade image quality over time.", "If you re-export assets many times, keep a high-quality original and generate WebP only for final web delivery."] },
      { heading: "Compatibility and operational constraints", paragraphs: ["Modern browsers support WebP well, but internal tools, CMS plugins, and legacy systems may still behave inconsistently.", "Always test your full pipeline, not just the browser display."] },
      { heading: "Practical hybrid workflow", paragraphs: ["Keep source files in an edit-friendly format, then export WebP for production pages.", "This gives you smaller delivery files without sacrificing future editing flexibility."] }
    ]
  },
  ko: {
    title: "WebP가 항상 최선이 아닌 경우",
    description: "WebP의 한계를 이해하고 편집·보관·호환성 상황에서 더 나은 형식을 선택하는 방법을 소개합니다.",
    intro: "WebP는 웹 배포에는 매우 유용하지만, 모든 단계의 원본 형식으로 쓰기에는 한계가 있습니다. 어떤 상황에서 다른 형식이 더 나은지 알아두면 운영이 쉬워집니다.",
    categoryLabel: "이미지 형식",
    useCasesTitle: "이 가이드가 필요한 상황",
    useCases: ["팀 이미지 운영 체계 설계", "원본/배포 포맷 분리", "출력·보관용 자산 관리", "레거시 시스템 호환성 점검"],
    closingTitle: "WebP는 목적형으로 사용",
    closingText: "WebP는 배포용으로 훌륭하지만 항상 원본용은 아닙니다. 수정 가능한 원본을 별도로 유지하세요.",
    relatedToolLabel: "WebP 변환기 열기",
    sections: [
      { heading: "WebP의 강점과 한계", paragraphs: ["강점은 웹 전송 효율입니다.", "반복 편집, 장기 보관, 특수 제작 파이프라인에서는 다른 형식이 더 적합할 수 있습니다."] },
      { heading: "다른 형식이 유리한 경우", paragraphs: ["다음 상황에서는 PNG/JPG/원본 파일을 우선 검토하세요."], bullets: ["레이어 편집과 반복 수정이 많을 때", "인쇄 워크플로가 필요할 때", "원본 촬영 데이터 보존이 중요할 때", "협력 시스템이 레거시 형식만 지원할 때", "장기 보관용 마스터 라이브러리를 운영할 때"] },
      { heading: "품질 저하 누적 주의", paragraphs: ["손실 압축 파일을 반복 변환하면 품질 저하가 누적됩니다.", "고품질 원본을 유지하고 최종 배포 단계에서만 WebP를 생성하세요."] },
      { heading: "호환성은 전체 파이프라인으로 확인", paragraphs: ["브라우저 지원은 좋아졌지만 CMS 플러그인, 내부 툴, 일부 시스템은 예외가 있을 수 있습니다.", "브라우저 미리보기만 보지 말고 실제 운영 경로 전체를 점검하세요."] },
      { heading: "실무형 하이브리드 방식", paragraphs: ["원본은 편집 친화적 형식으로 관리하고, 게시용으로만 WebP를 내보내세요.", "이 방식이 품질과 성능을 가장 안정적으로 균형 맞춥니다."] }
    ]
  },
  ja: {
    title: "WebPが最適ではないケース",
    description: "WebPの弱点を理解し、編集・保管・互換性の観点でより適した形式を選ぶ方法を解説します。",
    intro: "WebPはWeb配信に強い形式ですが、すべての工程で最適とは限りません。向かない場面を知ると運用トラブルを減らせます。",
    categoryLabel: "画像フォーマット",
    useCasesTitle: "役立つシーン",
    useCases: ["チームの画像運用設計", "マスター形式の選定", "印刷・アーカイブ素材の管理", "互換性要件の確認"],
    closingTitle: "WebPは配信用として使う",
    closingText: "WebPは最終配信には有効ですが、編集元まで一本化する必要はありません。元データを別管理しましょう。",
    relatedToolLabel: "WebP Converterを開く",
    sections: [
      { heading: "WebPは万能ではない", paragraphs: ["WebPの主な利点は配信効率です。", "一方で再編集や長期保管などでは別形式の方が扱いやすい場合があります。"] },
      { heading: "別形式を選ぶべき例", paragraphs: ["次の条件ではPNG/JPG/元ファイルが適しています。"], bullets: ["レイヤー編集を繰り返す", "印刷前提の制作フロー", "撮影元データを厳密に保持したい", "連携先が旧形式のみ対応", "長期保管用マスターを維持する"] },
      { heading: "再圧縮による品質劣化", paragraphs: ["非可逆変換を繰り返すと劣化が蓄積します。", "高品質な元画像を保持し、配信用にのみWebPを生成する運用が安全です。"] },
      { heading: "互換性は実運用で確認", paragraphs: ["ブラウザ対応は広い一方、CMSや社内ツールでは例外が残ることがあります。", "表示確認だけでなく公開パイプライン全体をテストしてください。"] },
      { heading: "現実的なハイブリッド運用", paragraphs: ["編集用マスターは別形式で管理し、公開用だけWebPへ変換します。", "将来の再編集と配信性能の両方を確保できます。"] }
    ]
  },
  es: {
    title: "Cuándo WebP no es el mejor formato de imagen",
    description: "Descubre cuándo WebP no conviene y qué alternativas usar para edición, archivo y compatibilidad.",
    intro: "WebP funciona muy bien para entregar imágenes en la web, pero no siempre es ideal como formato único de trabajo. Elegir bien evita pérdidas de calidad y bloqueos de flujo.",
    categoryLabel: "Formato de imagen",
    useCasesTitle: "Cuándo ayuda esta guía",
    useCases: ["Diseñar un flujo de imágenes en equipo.", "Definir formato maestro editable.", "Gestionar recursos para impresión o archivo.", "Resolver requisitos de compatibilidad."],
    closingTitle: "Usa WebP con intención",
    closingText: "WebP es excelente para entrega final, pero no siempre para archivo maestro. Conserva originales de alta calidad.",
    relatedToolLabel: "Abrir WebP Converter",
    sections: [
      { heading: "WebP sirve para entrega, no para todo", paragraphs: ["Su gran ventaja es reducir peso en publicación web.", "Puede quedarse corto como único formato si necesitas edición continua o conservación a largo plazo."] },
      { heading: "Casos donde otro formato rinde mejor", paragraphs: ["Estas situaciones suelen requerir PNG, JPG o archivo fuente."], bullets: ["Edición por capas y cambios frecuentes.", "Flujo orientado a impresión.", "Conservación de datos originales de cámara.", "Sistemas heredados con formatos restringidos.", "Biblioteca maestra para archivo prolongado."] },
      { heading: "Riesgo de degradación por recomprimir", paragraphs: ["Convertir en pérdida varias veces puede degradar la imagen acumulativamente.", "Mantén un original de calidad y genera WebP solo al final del flujo."] },
      { heading: "Compatibilidad real del proceso", paragraphs: ["Aunque el navegador moderno lo soporta bien, plugins CMS o sistemas internos pueden fallar.", "Prueba todo el pipeline, no solo la vista final."] },
      { heading: "Flujo híbrido recomendado", paragraphs: ["Guarda el master en formato editable y exporta WebP para producción.", "Así conservas flexibilidad y rendimiento."] }
    ]
  },
  fr: {
    title: "Quand WebP n'est pas le meilleur format d'image",
    description: "Comprenez les limites de WebP et choisissez de meilleures alternatives selon vos besoins d'édition, d'archivage et de compatibilité.",
    intro: "WebP est très performant pour la diffusion web, mais ce n'est pas toujours le meilleur format de travail principal. Identifier ses limites évite des problèmes de qualité et de process.",
    categoryLabel: "Format d'image",
    useCasesTitle: "Quand ce guide est utile",
    useCases: ["Définir un workflow image d'équipe.", "Choisir un format master éditable.", "Gérer des assets d'impression ou d'archive.", "Répondre à des contraintes de compatibilité."],
    closingTitle: "Utiliser WebP au bon moment",
    closingText: "WebP est excellent pour la diffusion finale, pas forcément pour le master. Conservez un original éditable.",
    relatedToolLabel: "Ouvrir WebP Converter",
    sections: [
      { heading: "WebP est un format de diffusion", paragraphs: ["Son principal avantage est la réduction de poids pour le web.", "Comme format unique de travail, il peut être limité pour la retouche continue ou l'archivage long terme."] },
      { heading: "Quand un autre format est préférable", paragraphs: ["Dans ces cas, PNG, JPG ou fichier source sont souvent plus adaptés."], bullets: ["Retouches fréquentes avec couches.", "Workflow orienté impression.", "Conservation stricte des données d'origine.", "Intégration avec systèmes legacy.", "Bibliothèque master d'archivage."] },
      { heading: "Attention à la perte cumulative", paragraphs: ["Des conversions avec perte répétées peuvent dégrader progressivement le rendu.", "Gardez un original haute qualité et générez WebP uniquement pour la mise en ligne."] },
      { heading: "Vérifier toute la chaîne", paragraphs: ["Le support navigateur est bon, mais des outils internes ou plugins CMS peuvent poser problème.", "Testez l'ensemble du pipeline avant standardisation."] },
      { heading: "Workflow hybride recommandé", paragraphs: ["Conservez le master dans un format éditable puis exportez WebP pour la production.", "Vous combinez ainsi flexibilité d'édition et performance de livraison."] }
    ]
  },
  de: {
    title: "Wann WebP nicht das beste Bildformat ist",
    description: "Erfahre, wann WebP ungeeignet ist und welche Alternativen sich für Bearbeitung, Archivierung und Kompatibilität besser eignen.",
    intro: "WebP ist stark für die Web-Auslieferung, aber nicht automatisch die beste Wahl für jeden Schritt im Bildprozess. Wer die Grenzen kennt, vermeidet spätere Probleme.",
    categoryLabel: "Bildformat",
    useCasesTitle: "Wann dieser Guide hilft",
    useCases: ["Bild-Workflows im Team aufsetzen.", "Master-Format für Bearbeitung festlegen.", "Print- und Archiv-Assets verwalten.", "Kompatibilitätsanforderungen erfüllen."],
    closingTitle: "WebP bewusst einsetzen",
    closingText: "WebP eignet sich hervorragend für die Auslieferung, aber nicht immer als einziges Ausgangsformat. Bewahre editierbare Originale auf.",
    relatedToolLabel: "WebP Converter öffnen",
    sections: [
      { heading: "WebP ist stark bei Auslieferung", paragraphs: ["Der größte Vorteil ist die kleinere Dateigröße im Web.", "Als alleiniges Arbeitsformat ist WebP bei intensiver Bearbeitung oder Langzeitarchivierung oft unpraktisch."] },
      { heading: "Wann andere Formate besser sind", paragraphs: ["In diesen Fällen sind PNG, JPG oder Quelldateien oft die bessere Wahl."], bullets: ["Häufige Nachbearbeitung mit Ebenen.", "Print-orientierte Produktion.", "Originaldaten aus Kamera/Fotografie erhalten.", "Legacy-Systeme mit festen Formatvorgaben.", "Langfristige Master-Archivierung."] },
      { heading: "Qualitätsverlust durch Mehrfachkonvertierung", paragraphs: ["Wiederholte verlustbehaftete Konvertierung kann Qualität schrittweise abbauen.", "Halte ein hochwertiges Original vor und erzeuge WebP nur für den finalen Web-Einsatz."] },
      { heading: "Kompatibilität ganzheitlich prüfen", paragraphs: ["Browser unterstützen WebP meist gut, aber CMS-Plugins oder interne Tools können Ausnahmen haben.", "Teste daher den gesamten Workflow statt nur die Frontend-Ansicht."] },
      { heading: "Praktischer Hybrid-Ansatz", paragraphs: ["Master-Datei editierbar behalten und für Produktion in WebP exportieren.", "So bleiben Bearbeitbarkeit und Performance gleichzeitig erhalten."] }
    ]
  }
};


const compressImagesForPageSpeedContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Compress Images for Faster Page Speed",
    description: "Learn a practical workflow to compress website images, reduce page weight, and keep quality clear on desktop and mobile.",
    intro: "Heavy images are one of the most common reasons pages feel slow. The good news is you do not need a complex workflow to fix this. With a simple compression routine, you can reduce file size, keep images sharp enough for real users, and improve load speed across your site.",
    categoryLabel: "Image optimization",
    useCasesTitle: "When this guide helps",
    useCases: ["Speeding up blog posts with many screenshots.", "Reducing bounce rate on image-heavy landing pages.", "Preparing e-commerce product photos for faster mobile loading.", "Improving Core Web Vitals before a release."],
    closingTitle: "Compress with purpose",
    closingText: "Compression works best when you choose quality based on the page goal, not on guesswork. Keep an original file, export a smaller web version, and quickly test the page after upload.",
    relatedToolLabel: "Open Image Compressor",
    sections: [
      { heading: "Start with the largest files first", paragraphs: ["Open your image folder and sort files by size. Large hero images and full-width blog visuals usually create the biggest delay.", "Compressing a few oversized files can often deliver a faster result than trying to optimize every image at once."] },
      { heading: "Choose the right format before compressing", paragraphs: ["Compression works better when the base format matches the content.", "Use JPG for photos, PNG for graphics that need clean edges or transparency, and WebP when your workflow supports it for better size-to-quality balance."] },
      { heading: "Use a quality range instead of one fixed setting", paragraphs: ["Do not treat compression like an all-or-nothing switch. Test a small range such as 80, 70, and 60 quality, then compare readability.", "For most website images, medium compression is enough to cut file size without obvious visual damage."], bullets: ["Check text readability inside screenshots.", "Zoom in once to confirm faces and edges stay natural.", "Prefer slightly smaller files for mobile-first pages."] },
      { heading: "Resize dimensions for real layout width", paragraphs: ["A 3000px-wide image is often unnecessary if the page displays it at 900px. Resize first, then compress.", "Serving images close to their actual display size can remove more weight than compression alone."] },
      { heading: "Run a quick page-speed check after upload", paragraphs: ["After replacing images, test one or two important pages. Confirm visual quality and loading behavior on mobile.", "If quality drops too much, step back to a slightly higher setting. If speed is still weak, look for another oversized image and repeat."] }
    ]
  },
  ko: {
    title: "페이지 속도를 높이기 위한 이미지 압축 방법",
    description: "웹사이트 이미지를 가볍게 줄이면서도 품질을 유지하는 실무형 압축 흐름을 소개합니다.",
    intro: "이미지 용량이 크면 페이지가 느려지는 경우가 많습니다. 복잡한 도구 없이도 기본 압축 루틴만 있으면 파일 크기를 줄이고 모바일 체감 속도를 개선할 수 있습니다.",
    categoryLabel: "이미지 최적화",
    useCasesTitle: "이 가이드가 유용한 상황",
    useCases: ["스크린샷이 많은 블로그 글을 빠르게 만들 때", "이미지가 많은 랜딩 페이지 이탈률을 줄이고 싶을 때", "모바일 상품 이미지를 최적화할 때", "배포 전 Core Web Vitals를 점검할 때"],
    closingTitle: "목적에 맞게 압축하세요",
    closingText: "압축은 숫자 맞추기가 아니라 페이지 목적에 맞는 품질을 정하는 작업입니다. 원본은 보관하고 웹용 파일을 따로 만들어 테스트하세요.",
    relatedToolLabel: "Image Compressor 열기",
    sections: [
      { heading: "먼저 큰 파일부터 정리", paragraphs: ["폴더에서 파일 크기순으로 정렬해 가장 무거운 이미지를 먼저 찾으세요.", "히어로 이미지 몇 장만 줄여도 체감 속도가 크게 좋아지는 경우가 많습니다."] },
      { heading: "형식을 먼저 맞추기", paragraphs: ["압축 전에 이미지 형식이 콘텐츠에 맞는지 확인하세요.", "사진은 JPG, 투명 그래픽은 PNG, 지원 환경이 된다면 WebP를 고려하면 효율이 좋습니다."] },
      { heading: "고정값 대신 범위 테스트", paragraphs: ["한 가지 품질 값만 쓰지 말고 80, 70, 60처럼 짧게 비교해 보세요.", "대부분의 웹 이미지에서는 중간 압축만으로도 용량을 크게 줄일 수 있습니다."], bullets: ["스크린샷 안 텍스트가 읽히는지 확인", "얼굴·경계선이 뭉개지지 않는지 확대 확인", "모바일 중심 페이지는 조금 더 작은 파일 우선"] },
      { heading: "실제 표시 크기로 리사이즈", paragraphs: ["페이지에서 900px로 보이는 이미지를 3000px 그대로 올리면 낭비가 큽니다.", "표시 크기에 맞춰 줄인 뒤 압축하면 용량을 더 크게 절감할 수 있습니다."] },
      { heading: "업로드 후 빠른 속도 점검", paragraphs: ["이미지를 교체한 뒤 핵심 페이지를 모바일 기준으로 확인하세요.", "품질이 너무 떨어지면 압축 강도를 조금 낮추고, 속도가 부족하면 큰 파일을 하나 더 최적화하세요."] }
    ]
  },
  ja: {
    title: "ページ表示を速くする画像圧縮のやり方",
    description: "Web用画像の容量を抑えつつ見た目を保つ、実践的な圧縮フローを紹介します。",
    intro: "画像が重いと、ページ全体の表示が遅くなります。難しい設定がなくても、基本的な圧縮手順だけで容量を減らし、体感速度を改善できます。",
    categoryLabel: "画像最適化",
    useCasesTitle: "役立つ場面",
    useCases: ["画像の多いブログ記事を軽くしたいとき", "ランディングページの表示速度を改善したいとき", "EC商品画像をモバイル向けに最適化するとき", "公開前にCore Web Vitalsを整えるとき"],
    closingTitle: "目的に合わせて圧縮する",
    closingText: "圧縮は数字合わせではなく、ページ目的に合う画質を選ぶ作業です。元画像を残し、配信用ファイルを作って確認しましょう。",
    relatedToolLabel: "Image Compressorを開く",
    sections: [
      { heading: "まず大きい画像から対応", paragraphs: ["ファイルサイズ順に並べて、最も重い画像から処理します。", "ヒーロー画像など数枚を最適化するだけでも体感速度が改善しやすいです。"] },
      { heading: "圧縮前に形式を確認", paragraphs: ["画像内容に合う形式を選ぶと圧縮効果が高まります。", "写真はJPG、透過が必要な図はPNG、対応環境があればWebPを検討してください。"] },
      { heading: "固定値ではなく範囲で比較", paragraphs: ["品質を1つに決め打ちせず、80・70・60などを比較しましょう。", "多くのWeb画像は中程度の圧縮で十分に軽くできます。"], bullets: ["スクリーンショット内の文字が読めるか", "顔や輪郭が不自然に崩れていないか", "モバイル中心ページでは軽さを優先"] },
      { heading: "実際の表示幅に合わせてリサイズ", paragraphs: ["表示幅が900pxなら、3000px画像をそのまま使う必要はありません。", "先にサイズを合わせてから圧縮すると、さらに容量を減らせます。"] },
      { heading: "差し替え後に速度を確認", paragraphs: ["画像を更新したら主要ページをモバイルで確認します。", "画質が落ちすぎたら設定を少し戻し、まだ重ければ別の大きな画像を追加で最適化します。"] }
    ]
  },
  es: {
    title: "Cómo comprimir imágenes para mejorar la velocidad de página",
    description: "Aprende un flujo práctico para reducir el peso de imágenes web sin perder calidad visual importante.",
    intro: "Las imágenes pesadas son una causa común de páginas lentas. Con una rutina simple de compresión puedes bajar tamaño, mantener buena calidad y mejorar la carga en móvil y escritorio.",
    categoryLabel: "Optimización de imagen",
    useCasesTitle: "Cuándo ayuda esta guía",
    useCases: ["Acelerar artículos con muchas capturas", "Reducir peso en landing pages con varias imágenes", "Optimizar fotos de producto para móvil", "Mejorar métricas de rendimiento antes de publicar"],
    closingTitle: "Comprime con criterio",
    closingText: "La mejor compresión depende del objetivo de la página. Conserva el original, exporta versión web y valida el resultado en una prueba rápida.",
    relatedToolLabel: "Abrir Image Compressor",
    sections: [
      { heading: "Empieza por los archivos más pesados", paragraphs: ["Ordena tus imágenes por tamaño y localiza las más grandes.", "Optimizar unas pocas imágenes clave suele dar mejoras inmediatas."] },
      { heading: "Elige formato correcto antes de comprimir", paragraphs: ["La compresión funciona mejor si el formato base es adecuado.", "Usa JPG para fotos, PNG para gráficos con transparencia y WebP cuando tu flujo lo permita."] },
      { heading: "Prueba un rango de calidad", paragraphs: ["No uses un único valor fijo. Compara, por ejemplo, calidad 80, 70 y 60.", "En muchos casos, compresión media reduce mucho el tamaño sin dañar la lectura."], bullets: ["Verifica textos en capturas.", "Amplía una vez para revisar bordes y rostros.", "En páginas mobile-first, prioriza archivos algo más livianos."] },
      { heading: "Ajusta dimensiones al ancho real", paragraphs: ["Si la imagen se muestra a 900px, no hace falta subirla a 3000px.", "Redimensionar antes de comprimir recorta mucho peso adicional."] },
      { heading: "Haz una revisión rápida después", paragraphs: ["Tras reemplazar imágenes, prueba las páginas clave en móvil.", "Si se ve demasiado comprimida, sube un poco la calidad; si sigue lenta, optimiza otra imagen grande."] }
    ]
  },
  fr: {
    title: "Comment compresser des images pour accélérer la vitesse de page",
    description: "Suivez une méthode simple pour réduire le poids des images web tout en conservant une qualité visuelle suffisante.",
    intro: "Des images trop lourdes ralentissent souvent un site. Une routine de compression simple suffit pour réduire la taille des fichiers et améliorer le chargement.",
    categoryLabel: "Optimisation d'image",
    useCasesTitle: "Quand ce guide est utile",
    useCases: ["Alléger un article avec beaucoup de visuels", "Améliorer une landing page riche en images", "Optimiser des photos produit pour mobile", "Préparer de meilleures métriques de performance"],
    closingTitle: "Compresser avec intention",
    closingText: "La bonne compression dépend de l'objectif de la page. Gardez l'original, exportez une version web, puis vérifiez le rendu.",
    relatedToolLabel: "Ouvrir Image Compressor",
    sections: [
      { heading: "Traiter d'abord les fichiers les plus lourds", paragraphs: ["Classez vos images par taille pour identifier les plus volumineuses.", "Optimiser quelques visuels clés peut déjà améliorer nettement la vitesse."] },
      { heading: "Choisir le bon format avant compression", paragraphs: ["Le format de départ influence le résultat.", "JPG convient aux photos, PNG aux graphiques avec transparence, et WebP offre souvent un bon compromis poids/qualité."] },
      { heading: "Tester une plage de qualité", paragraphs: ["Évitez un réglage unique. Comparez par exemple 80, 70 et 60.", "Une compression moyenne suffit souvent pour gagner du poids sans perte visible majeure."], bullets: ["Vérifiez la lisibilité du texte dans les captures.", "Zoomez rapidement pour contrôler contours et visages.", "Pour le mobile, privilégiez des fichiers un peu plus légers."] },
      { heading: "Redimensionner selon la largeur réelle", paragraphs: ["Inutile d'envoyer une image de 3000px si elle s'affiche à 900px.", "Réduire les dimensions avant compression supprime encore plus de poids."] },
      { heading: "Contrôler rapidement après mise en ligne", paragraphs: ["Testez une ou deux pages importantes après remplacement.", "Si la qualité chute trop, remontez légèrement le niveau; si c'est encore lent, optimisez une autre image lourde."] }
    ]
  },
  de: {
    title: "So komprimierst du Bilder für schnellere Seiten",
    description: "Eine praktische Anleitung, um Bildgrößen für Websites zu reduzieren und trotzdem gute Qualität zu behalten.",
    intro: "Zu große Bilder sind ein häufiger Grund für langsame Seiten. Mit einem einfachen Kompressionsablauf kannst du Dateigrößen deutlich senken und die Ladezeit verbessern.",
    categoryLabel: "Bildoptimierung",
    useCasesTitle: "Wann der Guide hilft",
    useCases: ["Blogbeiträge mit vielen Screenshots beschleunigen", "Bildlastige Landingpages leichter machen", "Produktfotos für Mobile optimieren", "Performance-Werte vor dem Release verbessern"],
    closingTitle: "Bewusst komprimieren",
    closingText: "Die beste Kompression richtet sich nach dem Seitenziel. Original behalten, Web-Version exportieren und kurz testen.",
    relatedToolLabel: "Image Compressor öffnen",
    sections: [
      { heading: "Zuerst die größten Dateien optimieren", paragraphs: ["Sortiere Bilder nach Dateigröße und beginne mit den größten Dateien.", "Schon wenige optimierte Hero-Bilder können die Seite spürbar beschleunigen."] },
      { heading: "Vorher das passende Format wählen", paragraphs: ["Kompression funktioniert besser mit dem richtigen Ausgangsformat.", "JPG für Fotos, PNG für Grafiken mit Transparenz, WebP bei unterstütztem Workflow."] },
      { heading: "Mit Qualitätsbereichen arbeiten", paragraphs: ["Nutze nicht nur einen festen Wert. Vergleiche z. B. 80, 70 und 60.", "Mittlere Kompression reduziert oft stark, ohne deutlich sichtbare Verluste."], bullets: ["Text in Screenshots auf Lesbarkeit prüfen.", "Einmal hineinzoomen und Kanten/Gesichter kontrollieren.", "Bei Mobile-first Seiten eher kleinere Dateien bevorzugen."] },
      { heading: "Auf reale Anzeigegröße verkleinern", paragraphs: ["Wird ein Bild nur mit 900px angezeigt, sind 3000px meist unnötig.", "Erst verkleinern, dann komprimieren spart zusätzlich Gewicht."] },
      { heading: "Nach dem Austausch kurz testen", paragraphs: ["Prüfe wichtige Seiten nach dem Upload auf dem Smartphone.", "Bei zu starkem Qualitätsverlust etwas höher gehen; bei weiter langsamer Seite die nächste große Datei optimieren."] }
    ]
  }
};

const bestImageFileSizeForWebsitesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Best Image File Size for Websites and Blogs",
    description: "Understand practical image size targets for hero images, blog visuals, and thumbnails so pages stay sharp and fast.",
    intro: "There is no single perfect image file size for every website. A better approach is to set realistic size targets based on where each image appears, then export consistently.",
    categoryLabel: "Image optimization",
    useCasesTitle: "What this helps you decide",
    useCases: ["Choosing upload guidelines for blog editors.", "Setting image standards for a marketing team.", "Reducing oversized hero images.", "Balancing quality and speed on mobile."],
    closingTitle: "Aim for consistency, not perfection",
    closingText: "If your team uses clear size ranges and checks visual quality once before publish, your pages will stay faster with less rework.",
    relatedToolLabel: "Open Image Compressor",
    sections: [
      { heading: "Use target ranges by image type", paragraphs: ["Different placements need different file budgets.", "Hero images can be larger, while inline blog images and thumbnails should stay lighter."], bullets: ["Hero image: often around 150–400 KB after optimization.", "Inline blog image: often around 80–200 KB.", "Small thumbnails/icons: often below 60 KB."] },
      { heading: "Dimensions matter as much as KB", paragraphs: ["A huge pixel size usually creates a large file even with compression.", "Match export width to the layout. Most blog images do not need ultra-high dimensions."] },
      { heading: "Choose format by content goal", paragraphs: ["For file size control, format choice is critical.", "Use JPG for photo-heavy content, PNG for graphics needing transparency, and WebP when supported to reduce size further."] },
      { heading: "Set a simple publishing checklist", paragraphs: ["Small process rules prevent random uploads.", "Before publishing, confirm image dimensions, file size range, and visual clarity on mobile."] },
      { heading: "Review real pages, not only files", paragraphs: ["A file may look fine alone but still slow a page when many images load together.", "Check important URLs in page-speed tools and adjust the heaviest assets first."] }
    ]
  },
  ko: { title: "웹사이트와 블로그에 적절한 이미지 파일 크기", description: "히어로, 본문, 썸네일별로 현실적인 이미지 용량 기준을 정하는 방법을 설명합니다.", intro: "모든 웹사이트에 맞는 단일 정답 용량은 없습니다. 이미지 위치별 기준 범위를 정하고 일관되게 적용하는 것이 더 효과적입니다.", categoryLabel: "이미지 최적화", useCasesTitle: "이 가이드로 결정할 수 있는 것", useCases: ["블로그 업로드 기준 수립", "마케팅 팀 이미지 표준 정리", "과도하게 큰 히어로 이미지 축소", "모바일 품질과 속도 균형"], closingTitle: "완벽보다 일관성이 중요", closingText: "팀이 크기 기준을 공유하고 게시 전 한 번만 품질을 확인해도 페이지 속도와 운영 효율이 좋아집니다.", relatedToolLabel: "Image Compressor 열기", sections: [
      { heading: "이미지 유형별 목표 범위 설정", paragraphs: ["배치 위치에 따라 허용 용량이 달라야 합니다.", "히어로 이미지는 상대적으로 커도 되지만 본문·썸네일은 더 가볍게 관리하세요."], bullets: ["히어로 이미지: 최적화 후 약 150–400KB", "본문 이미지: 약 80–200KB", "작은 썸네일/아이콘: 60KB 이하 권장"] },
      { heading: "KB만큼 픽셀 크기도 중요", paragraphs: ["해상도가 과도하면 압축해도 용량이 커집니다.", "레이아웃에 맞는 표시 폭으로 내보내는 습관을 들이세요."] },
      { heading: "콘텐츠 목적에 맞는 형식 선택", paragraphs: ["파일 크기 관리에서 포맷 선택은 핵심입니다.", "사진은 JPG, 투명 그래픽은 PNG, 가능하면 WebP를 사용해 용량을 더 줄일 수 있습니다."] },
      { heading: "간단한 게시 체크리스트 운영", paragraphs: ["짧은 규칙만 있어도 무작위 업로드를 줄일 수 있습니다.", "게시 전 이미지 크기·용량·모바일 가독성을 확인하세요."] },
      { heading: "파일 단독이 아닌 실제 페이지 확인", paragraphs: ["파일 하나는 작아 보여도 여러 장이 모이면 페이지가 느려질 수 있습니다.", "핵심 URL에서 가장 무거운 자산부터 조정하세요."] }
    ] },
  ja: { title: "Webサイトとブログに最適な画像ファイルサイズ", description: "ヒーロー画像・本文画像・サムネイルごとの実用的な容量目安を紹介します。", intro: "すべてに通用する単一の正解サイズはありません。表示場所ごとに目安を決めて、同じルールで運用するのが現実的です。", categoryLabel: "画像最適化", useCasesTitle: "このガイドで決められること", useCases: ["ブログ投稿のアップロード基準作成", "チームの画像運用ルール統一", "重いヒーロー画像の見直し", "モバイルでの品質と速度の両立"], closingTitle: "完璧より一貫性", closingText: "サイズ目安を共有し、公開前に一度だけ確認するだけでも、速度と運用効率は大きく改善します。", relatedToolLabel: "Image Compressorを開く", sections: [
      { heading: "用途別に容量目標を決める", paragraphs: ["配置場所で許容サイズは変わります。", "ヒーロー画像はやや大きくても、本文画像やサムネイルは軽く保つのが基本です。"], bullets: ["ヒーロー画像: 最適化後 150〜400KB 目安", "本文画像: 80〜200KB 目安", "小さなサムネイル/アイコン: 60KB未満を目安"] },
      { heading: "KBだけでなくピクセル幅も調整", paragraphs: ["解像度が大きすぎると、圧縮しても重くなります。", "実際の表示幅に合わせて書き出すことが重要です。"] },
      { heading: "内容に合う形式を選ぶ", paragraphs: ["容量管理では形式選びが重要です。", "写真はJPG、透過が必要ならPNG、対応していればWebPを活用します。"] },
      { heading: "公開前チェックを簡単に固定化", paragraphs: ["短いチェック手順があれば、重い画像の混入を防げます。", "公開前にサイズ・容量・モバイル表示を確認しましょう。"] },
      { heading: "ファイル単体ではなくページ全体で確認", paragraphs: ["単体で軽く見えても、複数枚でページは重くなります。", "重要ページで計測し、重い画像から順に改善します。"] }
    ] },
  es: { title: "Mejor tamaño de archivo de imagen para sitios web y blogs", description: "Define objetivos de peso realistas por tipo de imagen para mantener buena calidad y mejor velocidad.", intro: "No existe un único tamaño perfecto para todas las imágenes. Lo más útil es fijar rangos por ubicación y aplicarlos de forma consistente.", categoryLabel: "Optimización de imagen", useCasesTitle: "Qué puedes resolver con esta guía", useCases: ["Definir reglas de subida para blog", "Establecer estándares de equipo", "Reducir hero images demasiado pesadas", "Mejorar experiencia móvil"], closingTitle: "Busca consistencia", closingText: "Con rangos claros y una revisión breve antes de publicar, tu sitio será más rápido y fácil de mantener.", relatedToolLabel: "Abrir Image Compressor", sections: [
      { heading: "Usa rangos según tipo de imagen", paragraphs: ["Cada ubicación necesita un presupuesto distinto.", "Las imágenes hero pueden pesar más; las de artículo y miniaturas deben ser más livianas."], bullets: ["Hero: aprox. 150–400 KB", "Imagen en artículo: aprox. 80–200 KB", "Miniaturas/iconos: normalmente menos de 60 KB"] },
      { heading: "Las dimensiones importan", paragraphs: ["Muchos píxeles generan archivos grandes aunque comprimas.", "Exporta al ancho real de uso en la página."] },
      { heading: "Formato según objetivo", paragraphs: ["La elección de formato impacta directamente en el peso.", "JPG para fotos, PNG para transparencias, WebP para mejor equilibrio cuando sea compatible."] },
      { heading: "Crea un checklist simple", paragraphs: ["Un proceso corto evita cargas aleatorias.", "Antes de publicar, revisa dimensiones, peso y claridad en móvil."] },
      { heading: "Evalúa páginas reales", paragraphs: ["Un archivo puede verse bien solo, pero ralentizar cuando se cargan varios.", "Analiza URLs clave y optimiza primero los assets más pesados."] }
    ] },
  fr: { title: "Taille idéale des images pour sites web et blogs", description: "Définissez des objectifs de poids d'image selon les usages pour garder un site rapide et lisible.", intro: "Il n'existe pas de taille unique parfaite. Le plus efficace est d'utiliser des fourchettes selon le type d'image et de les appliquer partout.", categoryLabel: "Optimisation d'image", useCasesTitle: "Ce que ce guide permet", useCases: ["Créer des règles d'upload pour le blog", "Standardiser les visuels d'équipe", "Réduire des hero images trop lourdes", "Améliorer la vitesse sur mobile"], closingTitle: "Visez la régularité", closingText: "Avec des fourchettes claires et une vérification rapide avant publication, vos pages restent plus légères et plus stables.", relatedToolLabel: "Ouvrir Image Compressor", sections: [
      { heading: "Définir des fourchettes par type", paragraphs: ["Chaque emplacement a un budget de poids différent.", "Les hero images peuvent être plus lourdes, mais les images d'article et miniatures doivent rester légères."], bullets: ["Hero image : souvent 150–400 Ko", "Image d'article : souvent 80–200 Ko", "Miniature/icône : souvent moins de 60 Ko"] },
      { heading: "La dimension compte autant que le poids", paragraphs: ["Une résolution trop grande alourdit le fichier même après compression.", "Exportez selon la largeur réellement affichée."] },
      { heading: "Choisir le format selon le besoin", paragraphs: ["Le format influence fortement le poids final.", "JPG pour les photos, PNG pour la transparence, WebP si compatible pour réduire davantage."] },
      { heading: "Mettre en place une checklist courte", paragraphs: ["Un petit process évite les uploads incohérents.", "Avant publication, vérifiez dimensions, poids et lisibilité sur mobile."] },
      { heading: "Tester les pages réelles", paragraphs: ["Un fichier peut sembler correct seul, mais ralentir une page avec plusieurs visuels.", "Mesurez les URLs importantes et optimisez d'abord les plus gros assets."] }
    ] },
  de: { title: "Beste Bilddateigröße für Websites und Blogs", description: "Praktische Größenziele für Hero-Bilder, Bloggrafiken und Thumbnails, damit Seiten schnell bleiben.", intro: "Eine einzige perfekte Dateigröße gibt es nicht. Sinnvoller sind klare Zielbereiche pro Bildtyp und ein konsistenter Workflow.", categoryLabel: "Bildoptimierung", useCasesTitle: "Was du damit festlegst", useCases: ["Upload-Regeln für Blogteams", "Bildstandards im Marketing", "Zu große Hero-Bilder reduzieren", "Mobile-Performance verbessern"], closingTitle: "Konsequent statt perfekt", closingText: "Mit klaren Größenbereichen und einem kurzen Check vor dem Veröffentlichen bleiben Seiten schneller und der Aufwand sinkt.", relatedToolLabel: "Image Compressor öffnen", sections: [
      { heading: "Zielbereiche nach Bildtyp nutzen", paragraphs: ["Je nach Platzierung gelten unterschiedliche Budgets.", "Hero-Bilder dürfen etwas größer sein, Inline-Bilder und Thumbnails sollten deutlich leichter bleiben."], bullets: ["Hero-Bild: oft etwa 150–400 KB", "Inline-Blogbild: oft etwa 80–200 KB", "Kleine Thumbnails/Icons: meist unter 60 KB"] },
      { heading: "Pixelmaße sind genauso wichtig", paragraphs: ["Zu große Abmessungen erzeugen auch bei Kompression unnötig große Dateien.", "Exportiere Bilder passend zur tatsächlichen Darstellungsbreite."] },
      { heading: "Format nach Inhalt wählen", paragraphs: ["Die Formatwahl beeinflusst die Dateigröße stark.", "JPG für Fotos, PNG für Transparenz, WebP bei Unterstützung für bessere Effizienz."] },
      { heading: "Kurze Publishing-Checkliste festlegen", paragraphs: ["Einfache Regeln verhindern zufällige, zu schwere Uploads.", "Vor dem Veröffentlichen Größe, Dateigewicht und mobile Lesbarkeit prüfen."] },
      { heading: "Echte Seiten statt Einzeldateien prüfen", paragraphs: ["Eine einzelne Datei kann okay sein, die Seite aber mit vielen Bildern trotzdem verlangsamen.", "Miss wichtige URLs und optimiere zuerst die größten Assets."] }
    ] }
};

const jsonParseErrorExamplesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "JSON Parse Error Examples and How to Read Them",
    description: "Learn common JSON parse errors, what the messages usually mean, and how to fix invalid JSON quickly.",
    intro: "JSON parse errors can look intimidating at first, especially when an API returns a long message. In most cases, the issue is a small syntax problem. If you learn to read the error structure, you can find and fix mistakes much faster.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "When this guide is useful",
    useCases: ["Debugging API request payloads.", "Fixing JSON files in config workflows.", "Reviewing webhook test data.", "Helping beginners understand syntax errors."],
    closingTitle: "Read errors from left to right",
    closingText: "Most parse errors become easy once you identify the location and expected token. Keep your JSON formatted and validate early to avoid repeated debugging.",
    relatedToolLabel: "Open JSON Formatter",
    sections: [
      { heading: "How parse error messages are usually structured", paragraphs: ["Many messages include three clues: what failed, where it failed, and what the parser expected.", "Even if wording differs by tool, line and column information usually points near the real problem."] },
      { heading: "Example 1: Missing comma between fields", paragraphs: ["A common error appears when two key-value pairs are placed without a comma.", "The parser may say something like 'expected , or }' near a specific position. Check the previous line, not only the exact column."] },
      { heading: "Example 2: Single quotes instead of double quotes", paragraphs: ["Valid JSON requires double quotes around keys and string values.", "If you copied data from JavaScript-like code, replace single quotes with double quotes before sending to an API."] },
      { heading: "Example 3: Trailing comma at the end", paragraphs: ["Many parsers reject a comma after the last item in an object or array.", "Remove the last comma and format again."], bullets: ["Bad: {\"name\":\"Ana\",}", "Good: {\"name\":\"Ana\"}", "Bad: [1,2,3,]", "Good: [1,2,3]"] },
      { heading: "A repeatable debugging workflow", paragraphs: ["Paste the payload into a JSON formatter, then auto-format it.", "If formatting fails, read the first reported error, fix only that issue, and run validation again. Solving errors one by one is faster than guessing multiple edits at once."] }
    ]
  },
  ko: { title: "JSON 파싱 오류 예시와 읽는 방법", description: "자주 발생하는 JSON 오류 메시지를 읽고 빠르게 수정하는 방법을 설명합니다.", intro: "JSON 오류 메시지는 처음 보면 어렵게 느껴지지만 대부분은 작은 문법 실수입니다. 메시지 구조를 읽는 법만 익히면 수정 속도가 크게 빨라집니다.", categoryLabel: "개발 워크플로", useCasesTitle: "이 가이드가 유용한 상황", useCases: ["API 요청 본문 디버깅", "설정 파일 JSON 오류 수정", "웹훅 테스트 데이터 점검", "초보자 문법 오류 교육"], closingTitle: "오류를 순서대로 읽기", closingText: "오류 위치와 기대한 토큰을 먼저 확인하면 대부분 빠르게 해결됩니다. 먼저 포맷하고 일찍 검증하세요.", relatedToolLabel: "JSON Formatter 열기", sections: [
      { heading: "파싱 오류 메시지의 기본 구조", paragraphs: ["대부분 오류는 무엇이 잘못됐는지, 어디서 발생했는지, 무엇을 기대했는지를 알려줍니다.", "도구마다 표현은 달라도 line/column 정보는 원인 근처를 가리킵니다."] },
      { heading: "예시 1: 필드 사이 쉼표 누락", paragraphs: ["객체 항목 사이에 쉼표를 빼먹으면 자주 발생합니다.", "메시지에 ', 또는 } 예상'처럼 나오면 해당 줄 바로 위아래를 함께 확인하세요."] },
      { heading: "예시 2: 작은따옴표 사용", paragraphs: ["JSON 키와 문자열 값은 반드시 큰따옴표를 써야 합니다.", "JavaScript 객체를 복사해 왔다면 작은따옴표를 큰따옴표로 바꾸세요."] },
      { heading: "예시 3: 마지막 trailing comma", paragraphs: ["객체나 배열 마지막의 쉼표를 허용하지 않는 파서가 많습니다.", "마지막 쉼표를 지우고 다시 검증하세요."], bullets: ["오류: {\"name\":\"Ana\",}", "정상: {\"name\":\"Ana\"}", "오류: [1,2,3,]", "정상: [1,2,3]"] },
      { heading: "반복 가능한 디버깅 루틴", paragraphs: ["JSON Formatter에 붙여넣고 자동 정렬을 먼저 실행하세요.", "첫 번째 오류 하나만 고치고 다시 검증하면, 추측 수정보다 훨씬 빠르게 해결됩니다."] }
    ] },
  ja: { title: "JSONパースエラーの例と読み解き方", description: "よくあるJSONエラーの意味を理解し、無効なJSONを素早く修正する方法を解説します。", intro: "JSONのパースエラーは難しく見えますが、原因は小さな構文ミスであることがほとんどです。メッセージの読み方を覚えるだけで修正が速くなります。", categoryLabel: "開発ワークフロー", useCasesTitle: "役立つ場面", useCases: ["APIリクエスト本文のデバッグ", "設定ファイルのJSON修正", "Webhookテストデータ確認", "初心者向けエラー説明"], closingTitle: "エラーは順番に読む", closingText: "位置情報と期待トークンを先に確認すれば、多くのエラーはすぐ直せます。整形と早期検証を習慣化しましょう。", relatedToolLabel: "JSON Formatterを開く", sections: [
      { heading: "パースエラーの基本構造", paragraphs: ["多くのメッセージは『何が失敗したか』『どこで失敗したか』『何を期待したか』を含みます。", "表現はツールで異なっても、行番号と列番号は原因付近を示します。"] },
      { heading: "例1: フィールド間のカンマ不足", paragraphs: ["オブジェクトの項目間でカンマを忘れるとよく発生します。", "'expected , or }' のような表示が出たら、その位置の前後を確認してください。"] },
      { heading: "例2: シングルクォートの使用", paragraphs: ["JSONではキーと文字列はダブルクォート必須です。", "JavaScript風データをコピーした場合は、シングルクォートを修正します。"] },
      { heading: "例3: 末尾カンマ", paragraphs: ["オブジェクトや配列の最後のカンマを許可しないパーサーは多いです。", "最後のカンマを削除して再検証します。"], bullets: ["NG: {\"name\":\"Ana\",}", "OK: {\"name\":\"Ana\"}", "NG: [1,2,3,]", "OK: [1,2,3]"] },
      { heading: "再現しやすいデバッグ手順", paragraphs: ["JSON Formatterに貼り付けて自動整形を実行します。", "最初のエラーだけを修正して再検証すると、まとめて推測修正するより効率的です。"] }
    ] },
  es: { title: "Ejemplos de errores JSON Parse y cómo leerlos", description: "Aprende a interpretar errores comunes de JSON y corregirlos rápido antes de enviar datos a una API.", intro: "Los errores de parseo JSON parecen complejos al inicio, pero casi siempre son fallos pequeños de sintaxis. Si sabes leer el mensaje, encontrarás el problema más rápido.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Cuándo te sirve", useCases: ["Depurar payloads de API", "Corregir archivos JSON de configuración", "Revisar datos de prueba de webhooks", "Enseñar errores de sintaxis a principiantes"], closingTitle: "Lee el error paso a paso", closingText: "Identificar ubicación y token esperado suele resolver el problema en minutos. Formatea y valida temprano para evitar retrabajo.", relatedToolLabel: "Abrir JSON Formatter", sections: [
      { heading: "Estructura típica del mensaje", paragraphs: ["Muchos mensajes indican qué falló, dónde falló y qué esperaba el parser.", "Aunque cambie el texto, la línea y columna suelen señalar la zona del error real."] },
      { heading: "Ejemplo 1: Falta una coma", paragraphs: ["Ocurre cuando dos campos van seguidos sin coma.", "Si ves 'expected , or }', revisa también la línea anterior, no solo la columna exacta."] },
      { heading: "Ejemplo 2: Comillas simples", paragraphs: ["JSON válido exige comillas dobles en claves y strings.", "Si copiaste desde un objeto estilo JavaScript, corrige las comillas antes de enviar."] },
      { heading: "Ejemplo 3: Coma final", paragraphs: ["Muchos parsers no aceptan coma después del último elemento.", "Quita la coma final y valida otra vez."], bullets: ["Incorrecto: {\"name\":\"Ana\",}", "Correcto: {\"name\":\"Ana\"}", "Incorrecto: [1,2,3,]", "Correcto: [1,2,3]"] },
      { heading: "Flujo de depuración repetible", paragraphs: ["Pega el payload en un JSON Formatter y ejecuta autoformato.", "Corrige solo el primer error reportado y vuelve a validar. Es más rápido que editar varias cosas a la vez."] }
    ] },
  fr: { title: "Exemples d'erreurs JSON Parse et comment les lire", description: "Comprenez les erreurs JSON courantes et apprenez à les corriger rapidement avant vos requêtes API.", intro: "Les erreurs de parsing JSON peuvent sembler compliquées, mais la cause est souvent une petite faute de syntaxe. Savoir lire le message fait gagner beaucoup de temps.", categoryLabel: "Workflow développeur", useCasesTitle: "Quand ce guide aide", useCases: ["Déboguer des payloads API", "Corriger des fichiers JSON de configuration", "Vérifier des données de test webhook", "Former des débutants aux erreurs de syntaxe"], closingTitle: "Lire l'erreur dans l'ordre", closingText: "Repérez d'abord la position et le token attendu. Avec un formatage et une validation rapide, la plupart des erreurs se corrigent facilement.", relatedToolLabel: "Ouvrir JSON Formatter", sections: [
      { heading: "Structure habituelle d'un message", paragraphs: ["La plupart des messages indiquent ce qui a échoué, où, et ce qui était attendu.", "Même si la formulation varie, ligne et colonne pointent généralement vers la bonne zone."] },
      { heading: "Exemple 1 : virgule manquante", paragraphs: ["Très fréquent entre deux champs d'objet.", "Si vous voyez 'expected , or }', vérifiez aussi la ligne précédente."] },
      { heading: "Exemple 2 : guillemets simples", paragraphs: ["En JSON valide, clés et chaînes doivent être entre guillemets doubles.", "Les données copiées depuis du pseudo-JS nécessitent souvent cette correction."] },
      { heading: "Exemple 3 : virgule finale", paragraphs: ["Beaucoup de parseurs refusent une virgule après le dernier élément.", "Retirez-la puis validez à nouveau."], bullets: ["Incorrect : {\"name\":\"Ana\",}", "Correct : {\"name\":\"Ana\"}", "Incorrect : [1,2,3,]", "Correct : [1,2,3]"] },
      { heading: "Routine de débogage simple", paragraphs: ["Collez le payload dans un JSON Formatter puis lancez le formatage automatique.", "Corrigez d'abord la première erreur seulement, puis relancez la validation."] }
    ] },
  de: { title: "JSON-Parse-Fehler: Beispiele und richtig lesen", description: "Häufige JSON-Fehler verstehen und Schritt für Schritt beheben, bevor Requests an APIs gehen.", intro: "JSON-Parse-Fehler wirken oft kompliziert, sind aber meist kleine Syntaxprobleme. Wenn du Fehlermeldungen richtig liest, findest du die Ursache deutlich schneller.", categoryLabel: "Developer-Workflow", useCasesTitle: "Wann dieser Guide hilft", useCases: ["API-Payloads debuggen", "JSON-Konfigurationsdateien reparieren", "Webhook-Testdaten prüfen", "Einsteiger in Syntaxfehler einführen"], closingTitle: "Meldungen strukturiert lesen", closingText: "Position und erwartetes Token zuerst prüfen. Mit frühem Formatieren und Validieren lassen sich die meisten Fehler schnell lösen.", relatedToolLabel: "JSON Formatter öffnen", sections: [
      { heading: "Typischer Aufbau der Fehlermeldung", paragraphs: ["Viele Meldungen enthalten: was fehlgeschlagen ist, wo es passiert ist und was erwartet wurde.", "Auch bei anderer Formulierung zeigen Zeile und Spalte meist auf die richtige Stelle."] },
      { heading: "Beispiel 1: Komma zwischen Feldern fehlt", paragraphs: ["Das passiert häufig bei zwei Key-Value-Paaren ohne Trennkomma.", "Bei Hinweisen wie 'expected , or }' immer auch die vorherige Zeile prüfen."] },
      { heading: "Beispiel 2: Einfache statt doppelte Anführungszeichen", paragraphs: ["Gültiges JSON braucht doppelte Anführungszeichen für Keys und Strings.", "Bei kopierten JavaScript-Objekten erst die Quotes korrigieren."] },
      { heading: "Beispiel 3: Nachgestelltes Komma", paragraphs: ["Viele Parser erlauben kein Komma nach dem letzten Element.", "Letztes Komma entfernen und erneut validieren."], bullets: ["Falsch: {\"name\":\"Ana\",}", "Richtig: {\"name\":\"Ana\"}", "Falsch: [1,2,3,]", "Richtig: [1,2,3]"] },
      { heading: "Wiederholbarer Debug-Workflow", paragraphs: ["Payload in den JSON Formatter einfügen und automatisch formatieren.", "Nur den ersten gemeldeten Fehler beheben und danach erneut prüfen."] }
    ] }
};

const validateJsonBeforeApiRequestsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Validate JSON Before Sending API Requests",
    description: "Use a simple preflight checklist to validate JSON payloads and avoid avoidable API request failures.",
    intro: "Many API errors are caused by invalid JSON, not by the API itself. A quick validation step before sending requests can save debugging time, reduce failed calls, and make integrations more reliable.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "Where this is useful",
    useCases: ["Testing new endpoints in staging.", "Sending webhook payloads.", "Building no-code and low-code API automations.", "Reviewing JSON before production releases."],
    closingTitle: "Validate before you ship",
    closingText: "A 30-second JSON check prevents many avoidable API errors. Add this step to your normal workflow and your requests will fail less often for simple syntax reasons.",
    relatedToolLabel: "Open JSON Formatter",
    sections: [
      { heading: "Why validation should happen before every request", paragraphs: ["If JSON is malformed, the server cannot parse the payload correctly. You might see vague 400 errors that hide a tiny formatting mistake.", "Validation catches these issues earlier so you can focus on business logic instead of syntax cleanup."] },
      { heading: "Preflight checklist before clicking send", paragraphs: ["Use the same short checklist each time."], bullets: ["Keys and string values use double quotes.", "No trailing commas in objects or arrays.", "Brackets and braces are balanced.", "Data types match API expectations (number, string, boolean, null).", "Required fields are present and not empty."] },
      { heading: "Format JSON to spot structure problems", paragraphs: ["Auto-formatting makes nested objects easier to read.", "When indentation looks broken, the problem is usually near that section. Fix the structure first, then validate again."] },
      { heading: "Validate sample payloads with real edge cases", paragraphs: ["Do not test with only one perfect example.", "Also validate payloads with optional fields missing, empty arrays, and special characters. This reveals schema assumptions before production."] },
      { heading: "Log failed requests with context", paragraphs: ["If a request still fails, log the exact payload and response message in a safe environment.", "Comparing valid and failed payloads side by side helps isolate the issue quickly."] }
    ]
  },
  ko: { title: "API 요청 전 JSON 검증하는 방법", description: "요청 전 짧은 검증 루틴으로 JSON 오류를 줄이고 API 실패를 예방하는 방법을 안내합니다.", intro: "많은 API 실패는 서버 문제가 아니라 잘못된 JSON 형식에서 시작됩니다. 전송 전에 짧게 검증하면 디버깅 시간을 줄이고 성공률을 높일 수 있습니다.", categoryLabel: "개발 워크플로", useCasesTitle: "이 가이드가 유용한 곳", useCases: ["스테이징에서 새 엔드포인트 테스트", "웹훅 페이로드 전송", "노코드/로우코드 자동화", "배포 전 요청 데이터 점검"], closingTitle: "전송 전에 검증", closingText: "30초 JSON 확인만으로도 불필요한 400 오류를 크게 줄일 수 있습니다. 요청 루틴에 고정해 두세요.", relatedToolLabel: "JSON Formatter 열기", sections: [
      { heading: "매 요청 전에 검증해야 하는 이유", paragraphs: ["JSON 문법이 틀리면 서버는 페이로드를 제대로 파싱하지 못합니다.", "사전에 검증하면 문법 문제가 아닌 실제 로직 문제에 집중할 수 있습니다."] },
      { heading: "전송 전 체크리스트", paragraphs: ["매번 같은 짧은 항목을 확인하세요."], bullets: ["키/문자열 값은 큰따옴표 사용", "객체·배열 끝 쉼표 제거", "중괄호/대괄호 짝 확인", "데이터 타입이 API 요구사항과 일치", "필수 필드 누락 여부 확인"] },
      { heading: "포맷팅으로 구조 오류 찾기", paragraphs: ["자동 정렬을 하면 중첩 구조가 쉽게 보입니다.", "들여쓰기가 이상한 구간 근처에서 문법 오류가 자주 발견됩니다."] },
      { heading: "현실적인 샘플로 검증", paragraphs: ["정상 예시 하나만으로 끝내지 마세요.", "선택 필드 누락, 빈 배열, 특수문자 케이스도 함께 점검하면 운영 오류를 줄일 수 있습니다."] },
      { heading: "실패 요청은 문맥과 함께 기록", paragraphs: ["여전히 실패하면 안전한 환경에서 페이로드와 응답 메시지를 함께 기록하세요.", "정상/실패 요청을 나란히 비교하면 원인을 빠르게 찾을 수 있습니다."] }
    ] },
  ja: { title: "APIリクエスト送信前にJSONを検証する方法", description: "送信前の簡単なチェックでJSONエラーを減らし、API失敗を防ぐ実践手順を紹介します。", intro: "APIエラーの多くはサーバー側ではなく、無効なJSONが原因です。送信前に検証するだけでデバッグ時間を大きく減らせます。", categoryLabel: "開発ワークフロー", useCasesTitle: "役立つ場面", useCases: ["ステージングで新規エンドポイント検証", "Webhook payload送信", "ノーコード連携の品質確認", "本番前のJSONレビュー"], closingTitle: "送信前検証を標準化", closingText: "30秒のJSON確認で多くの400エラーを防げます。日常フローに組み込みましょう。", relatedToolLabel: "JSON Formatterを開く", sections: [
      { heading: "なぜ毎回検証するべきか", paragraphs: ["JSONが不正だとサーバーは正しく解釈できません。", "先に検証すれば、構文ではなく業務ロジックの問題に集中できます。"] },
      { heading: "送信前チェックリスト", paragraphs: ["毎回同じ短い項目で確認します。"], bullets: ["キーと文字列はダブルクォート", "末尾カンマがない", "括弧の対応が取れている", "型がAPI仕様と一致", "必須フィールドが欠けていない"] },
      { heading: "整形して構造を見える化", paragraphs: ["自動整形でネスト構造の崩れを見つけやすくなります。", "インデントが不自然な箇所の近くを優先的に確認しましょう。"] },
      { heading: "現実的なテストデータで確認", paragraphs: ["理想ケース1つだけで終わらせないでください。", "任意項目欠落、空配列、特殊文字なども検証しておくと本番事故を減らせます。"] },
      { heading: "失敗リクエストを記録する", paragraphs: ["失敗時は安全な環境でpayloadとレスポンスを記録します。", "成功ケースと比較すると原因を特定しやすくなります。"] }
    ] },
  es: { title: "Cómo validar JSON antes de enviar solicitudes API", description: "Aplica una revisión rápida de JSON antes de cada request para evitar errores evitables en APIs.", intro: "Muchos fallos de API provienen de JSON inválido, no del endpoint. Validar antes de enviar ahorra tiempo de depuración y mejora la confiabilidad.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Dónde ayuda", useCases: ["Pruebas de endpoints nuevos", "Envío de payloads de webhook", "Automatizaciones no-code", "Revisión previa a producción"], closingTitle: "Valida antes de enviar", closingText: "Un chequeo de 30 segundos evita muchos errores 400 por sintaxis. Hazlo parte de tu rutina.", relatedToolLabel: "Abrir JSON Formatter", sections: [
      { heading: "Por qué validar cada vez", paragraphs: ["Si el JSON está mal formado, el servidor no podrá parsearlo bien.", "Validar antes evita perder tiempo en errores de formato fáciles de corregir."] },
      { heading: "Checklist previo al envío", paragraphs: ["Usa siempre la misma lista corta."], bullets: ["Claves y strings con comillas dobles", "Sin comas finales", "Corchetes y llaves balanceados", "Tipos de datos correctos", "Campos obligatorios presentes"] },
      { heading: "Formatea para detectar estructura", paragraphs: ["El autoformato hace más visible la estructura anidada.", "Si la indentación se rompe, el error suele estar cerca."] },
      { heading: "Valida casos reales", paragraphs: ["No pruebes solo un caso ideal.", "Incluye campos opcionales vacíos, arreglos vacíos y caracteres especiales para detectar problemas temprano."] },
      { heading: "Registra fallos con contexto", paragraphs: ["Si aún falla, guarda payload y respuesta en un entorno seguro.", "Comparar request válida y fallida acelera el diagnóstico."] }
    ] },
  fr: { title: "Comment valider du JSON avant d'envoyer des requêtes API", description: "Adoptez une vérification JSON rapide avant l'envoi pour éviter des erreurs API faciles à prévenir.", intro: "Beaucoup d'erreurs API viennent d'un JSON invalide, pas de l'API elle-même. Une validation avant envoi réduit fortement le temps de débogage.", categoryLabel: "Workflow développeur", useCasesTitle: "Cas utiles", useCases: ["Tester de nouveaux endpoints", "Envoyer des payloads webhook", "Automatisations low-code/no-code", "Relecture avant mise en production"], closingTitle: "Valider avant d'envoyer", closingText: "Un contrôle de 30 secondes évite de nombreuses erreurs 400 liées à la syntaxe. Intégrez-le à votre routine.", relatedToolLabel: "Ouvrir JSON Formatter", sections: [
      { heading: "Pourquoi valider avant chaque requête", paragraphs: ["Si le JSON est mal formé, le serveur ne peut pas l'interpréter correctement.", "Valider en amont évite des erreurs simples qui coûtent du temps."] },
      { heading: "Checklist avant envoi", paragraphs: ["Utilisez toujours la même courte liste."], bullets: ["Clés et chaînes entre guillemets doubles", "Pas de virgule finale", "Accolades et crochets équilibrés", "Types conformes à l'API", "Champs obligatoires présents"] },
      { heading: "Formater pour voir la structure", paragraphs: ["Le formatage automatique clarifie les objets imbriqués.", "Une indentation cassée signale souvent la zone à corriger."] },
      { heading: "Tester des cas réalistes", paragraphs: ["N'utilisez pas uniquement un exemple parfait.", "Validez aussi des cas avec champs optionnels absents, tableaux vides ou caractères spéciaux."] },
      { heading: "Journaliser les échecs avec contexte", paragraphs: ["En cas d'échec, conservez payload et réponse dans un environnement sûr.", "Comparer une requête valide et une requête échouée accélère l'analyse."] }
    ] },
  de: { title: "JSON vor API-Requests validieren: So geht's", description: "Mit einer kurzen Vorabprüfung JSON-Fehler vermeiden und API-Requests stabiler machen.", intro: "Viele API-Fehler entstehen durch ungültiges JSON statt durch das API-System selbst. Eine schnelle Validierung vor dem Senden spart Debug-Zeit.", categoryLabel: "Developer-Workflow", useCasesTitle: "Wann das hilft", useCases: ["Neue Endpoints testen", "Webhook-Payloads senden", "No-Code-Automationen prüfen", "Vor Produktions-Release validieren"], closingTitle: "Vor dem Senden prüfen", closingText: "Ein 30-Sekunden-Check verhindert viele 400-Fehler durch Syntax. Mach ihn zum festen Teil deines Ablaufs.", relatedToolLabel: "JSON Formatter öffnen", sections: [
      { heading: "Warum vor jedem Request validieren", paragraphs: ["Fehlerhaftes JSON kann vom Server nicht korrekt geparst werden.", "Frühe Validierung verhindert vermeidbare Formatfehler."] },
      { heading: "Preflight-Checkliste", paragraphs: ["Nutze immer dieselbe kurze Liste."], bullets: ["Keys und Strings mit doppelten Anführungszeichen", "Keine nachgestellten Kommata", "Klammern korrekt geschlossen", "Datentypen laut API-Schema", "Pflichtfelder vorhanden"] },
      { heading: "Mit Formatierung Strukturfehler erkennen", paragraphs: ["Auto-Formatierung macht verschachtelte Strukturen lesbar.", "Bei kaputter Einrückung liegt der Fehler meist in diesem Bereich."] },
      { heading: "Mit realistischen Fällen testen", paragraphs: ["Nicht nur den perfekten Beispiel-Payload prüfen.", "Teste auch fehlende optionale Felder, leere Arrays und Sonderzeichen."] },
      { heading: "Fehlgeschlagene Requests mit Kontext loggen", paragraphs: ["Bei Fehlern Payload und Antwort in sicherer Umgebung protokollieren.", "Der Vergleich mit einem funktionierenden Request zeigt die Ursache oft schnell."] }
    ] }
};


const reduceImageSizeWithoutLosingTooMuchQualityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Reduce Website Image Size Without Losing Too Much Quality",
    description: "Use a simple workflow to shrink website images while keeping them clear enough for real users.",
    intro: "Large images slow down pages, but over-compressing makes them blurry. The goal is balance: smaller files with quality that still looks good on phones and desktops.",
    categoryLabel: "Image optimization",
    useCasesTitle: "When this helps",
    useCases: ["Optimizing blog post images.", "Improving Core Web Vitals for landing pages.", "Preparing product photos for ecommerce.", "Speeding up image-heavy pages without a redesign."],
    closingTitle: "Optimize with intent",
    closingText: "You do not need perfect compression settings. Use a repeatable process, check real page context, and prioritize fast pages with acceptable visual quality.",
    relatedToolLabel: "Open WebP Converter",
    sections: [
      { heading: "Start with the right dimensions", paragraphs: ["Before changing format, resize images to the maximum display size used on your site.", "If a card image renders at 800px wide, uploading a 3000px file wastes bandwidth and makes every optimization harder."] },
      { heading: "Choose practical format defaults", paragraphs: ["Use WebP for most website photos and mixed graphics.", "Keep PNG mainly for cases that need sharp transparency or exact pixel edges. Test edge cases instead of assuming one format always wins."], bullets: ["Photos: start with WebP quality around medium-high.", "Logos/UI assets: compare PNG vs WebP visually.", "Hero images: check quality on mobile first."] },
      { heading: "Compress in small steps", paragraphs: ["Lower quality gradually and compare versions side by side.", "A 5 to 10 point reduction often saves significant size with minor visual change, while aggressive jumps can quickly destroy detail."] },
      { heading: "Check quality where users see it", paragraphs: ["Do not judge files only in image editors at 200% zoom.", "Preview images inside the actual page layout and on a phone. If text overlays, faces, or product details still look clear, the optimization is usually good enough."] },
      { heading: "Build a repeatable team checklist", paragraphs: ["Create a short standard process so every new image follows similar quality and size expectations."], bullets: ["Resize first.", "Convert to WebP and compare.", "Keep the smallest acceptable version.", "Spot-check key images on mobile and desktop."] }
    ]
  },
  ko: {
    title: "품질을 크게 해치지 않고 웹사이트 이미지 용량 줄이는 방법",
    description: "실무에서 바로 쓰는 간단한 절차로 이미지 용량을 줄이고 체감 품질은 유지하세요.",
    intro: "이미지가 크면 페이지가 느려지고, 너무 압축하면 흐려집니다. 핵심은 균형입니다. 파일은 작게, 화면 품질은 충분히 유지하는 것이 목표입니다.",
    categoryLabel: "이미지 최적화",
    useCasesTitle: "이럴 때 유용해요",
    useCases: ["블로그 이미지 업로드 전", "랜딩 페이지 속도 개선", "쇼핑몰 상품 이미지 정리", "이미지가 많은 페이지 성능 개선"],
    closingTitle: "일관된 기준으로 최적화",
    closingText: "완벽한 수치보다 반복 가능한 워크플로가 더 중요합니다. 실제 화면에서 확인하며 속도와 품질의 균형을 맞추세요.",
    relatedToolLabel: "WebP Converter 열기",
    sections: [
      { heading: "먼저 표시 크기에 맞게 리사이즈", paragraphs: ["포맷 변경 전에 실제 표시 크기로 먼저 줄이세요.", "예: 카드 이미지가 800px로 보이는데 3000px 원본을 쓰면 불필요한 용량이 남습니다."] },
      { heading: "포맷을 목적에 맞게 선택", paragraphs: ["대부분 사진은 WebP가 좋은 출발점입니다.", "투명도나 픽셀 정확도가 중요한 경우에만 PNG를 우선 검토하세요."], bullets: ["사진: WebP 중간~높은 품질부터 시작", "로고/UI: PNG와 WebP를 실제 화면 비교", "히어로 이미지: 모바일에서 먼저 확인"] },
      { heading: "압축은 한 번에 크게 하지 않기", paragraphs: ["품질 값을 조금씩 낮추며 비교하면 실패를 줄일 수 있습니다.", "작은 조정만으로도 용량 절감 효과가 큰 경우가 많습니다."] },
      { heading: "실제 페이지에서 품질 확인", paragraphs: ["확대 화면만 보고 판단하지 마세요.", "페이지에 배치한 상태와 모바일에서 함께 확인해야 체감 품질을 정확히 볼 수 있습니다."] },
      { heading: "체크리스트로 표준화", paragraphs: ["팀에서 같은 순서로 작업하면 결과 품질이 안정됩니다."], bullets: ["리사이즈", "WebP 변환", "최소 허용 품질 선택", "모바일/데스크톱 점검"] }
    ]
  },
  ja: {
    title: "画質を大きく落とさずにWeb画像サイズを減らす方法",
    description: "実務向けの手順で、読み込み速度を上げながら見た目の品質を保つ方法を解説します。",
    intro: "画像が重いとページは遅くなり、圧縮しすぎると見た目が悪くなります。重要なのは、サイズと品質のバランスです。",
    categoryLabel: "画像最適化",
    useCasesTitle: "役立つ場面",
    useCases: ["ブログ画像の公開前チェック", "LPの表示速度改善", "EC商品画像の最適化", "画像の多いページの軽量化"],
    closingTitle: "再現できる手順を作る",
    closingText: "完璧な数値より、毎回同じ流れで確認することが重要です。実ページで見て判断しましょう。",
    relatedToolLabel: "WebP Converterを開く",
    sections: [
      { heading: "最初に表示サイズへリサイズ", paragraphs: ["形式変換の前に、実際に表示される最大サイズへ縮小します。", "表示幅より大きすぎる元画像は無駄な通信量になります。"] },
      { heading: "形式は用途で選ぶ", paragraphs: ["写真系はWebPを基本にすると効率的です。", "透明背景やエッジ重視の素材はPNGも比較してください。"], bullets: ["写真: WebP中〜高品質から開始", "ロゴ/UI: PNGとWebPを見比べる", "ヒーロー画像: モバイルで先に確認"] },
      { heading: "圧縮は段階的に", paragraphs: ["品質を一気に下げず、少しずつ調整して比較します。", "小さな調整で十分な削減が得られることが多いです。"] },
      { heading: "実際のページで見え方を確認", paragraphs: ["画像編集ソフトの拡大表示だけで判断しないでください。", "ページ内配置とスマホ表示で確認すると失敗が減ります。"] },
      { heading: "チェックリスト化する", paragraphs: ["作業を標準化すると担当者が変わっても品質を保てます。"], bullets: ["リサイズ", "WebP変換", "最小許容品質を選択", "モバイル/PCで確認"] }
    ]
  },
  es: {
    title: "Cómo reducir el tamaño de imágenes web sin perder demasiada calidad",
    description: "Sigue un proceso simple para bajar peso de imágenes y mantener una calidad visual aceptable.",
    intro: "Las imágenes pesadas ralentizan la web, pero comprimir demasiado las vuelve borrosas. La clave es equilibrio: menos KB con buena apariencia real.",
    categoryLabel: "Optimización de imagen",
    useCasesTitle: "Cuándo ayuda",
    useCases: ["Optimizar imágenes de blog", "Mejorar velocidad en landing pages", "Preparar fotos de ecommerce", "Reducir peso en páginas con muchas imágenes"],
    closingTitle: "Optimiza con criterio",
    closingText: "No necesitas números perfectos. Usa un flujo repetible, revisa en contexto real y prioriza velocidad con calidad suficiente.",
    relatedToolLabel: "Abrir WebP Converter",
    sections: [
      { heading: "Empieza por el tamaño correcto", paragraphs: ["Antes del formato, ajusta dimensiones al tamaño real de visualización.", "Subir una imagen mucho más grande de lo necesario añade peso sin valor."] },
      { heading: "Elige formato según uso", paragraphs: ["WebP suele funcionar mejor para fotos y contenido mixto.", "PNG sigue siendo útil cuando necesitas transparencia precisa o bordes muy nítidos."], bullets: ["Fotos: prueba WebP con calidad media-alta", "Logos/UI: compara PNG y WebP", "Hero images: valida primero en móvil"] },
      { heading: "Comprime por etapas", paragraphs: ["Reduce calidad poco a poco y compara versiones.", "Ajustes pequeños suelen ahorrar bastante sin degradar tanto la imagen."] },
      { heading: "Valida dentro de la página", paragraphs: ["No evalúes solo con zoom extremo en un editor.", "Mira la imagen en el layout real y en móvil para decidir si la calidad es suficiente."] },
      { heading: "Define una checklist", paragraphs: ["Un proceso estándar evita resultados inconsistentes."], bullets: ["Redimensionar", "Convertir a WebP", "Elegir versión más ligera aceptable", "Revisar en móvil y desktop"] }
    ]
  },
  fr: {
    title: "Comment réduire le poids des images web sans trop perdre en qualité",
    description: "Appliquez une méthode simple pour alléger vos images tout en gardant un rendu propre.",
    intro: "Des images lourdes ralentissent les pages. Une compression trop forte dégrade le rendu. L'objectif est donc un bon équilibre entre taille et qualité.",
    categoryLabel: "Optimisation d'image",
    useCasesTitle: "Quand l'utiliser",
    useCases: ["Optimiser des images d'article", "Accélérer une landing page", "Préparer des visuels e-commerce", "Alléger des pages très visuelles"],
    closingTitle: "Optimiser de façon pragmatique",
    closingText: "Pas besoin de réglages parfaits. Utilisez un processus répétable, vérifiez en contexte réel, puis publiez la version la plus légère acceptable.",
    relatedToolLabel: "Ouvrir WebP Converter",
    sections: [
      { heading: "Redimensionner avant tout", paragraphs: ["Avant la conversion, adaptez l'image à sa taille d'affichage réelle.", "Une image beaucoup trop grande consomme du poids inutilement."] },
      { heading: "Choisir le bon format", paragraphs: ["WebP est un bon choix par défaut pour les photos web.", "PNG reste pertinent pour certaines transparences ou visuels très nets."], bullets: ["Photos : WebP qualité moyenne/élevée", "Logos/UI : comparer PNG vs WebP", "Hero : contrôler sur mobile"] },
      { heading: "Compresser progressivement", paragraphs: ["Baissez la qualité par petits paliers et comparez.", "De petits ajustements suffisent souvent pour gagner beaucoup de poids."] },
      { heading: "Vérifier dans la vraie page", paragraphs: ["N'évaluez pas seulement en zoom dans un éditeur.", "Contrôlez le rendu dans la page réelle, surtout sur mobile."] },
      { heading: "Standardiser la routine", paragraphs: ["Une checklist simple aide toute l'équipe à garder un niveau constant."], bullets: ["Redimensionner", "Convertir en WebP", "Choisir la version acceptable la plus légère", "Vérifier mobile/desktop"] }
    ]
  },
  de: {
    title: "So reduzierst du Bildgröße im Web ohne zu viel Qualitätsverlust",
    description: "Mit einem einfachen Ablauf Bilder verkleinern und trotzdem eine saubere Darstellung behalten.",
    intro: "Große Bilder machen Seiten langsam, zu starke Kompression macht sie unscharf. Ziel ist ein praktischer Mittelweg zwischen Dateigröße und Qualität.",
    categoryLabel: "Bildoptimierung",
    useCasesTitle: "Wann das hilft",
    useCases: ["Blogbilder optimieren", "Landingpages beschleunigen", "Produktbilder vorbereiten", "Bildlastige Seiten verkleinern"],
    closingTitle: "Mit System optimieren",
    closingText: "Du brauchst keine perfekten Werte. Nutze einen wiederholbaren Workflow und prüfe die Qualität im echten Seitenkontext.",
    relatedToolLabel: "WebP Converter öffnen",
    sections: [
      { heading: "Erst auf Anzeigegröße skalieren", paragraphs: ["Vor der Formatwahl die Bildmaße auf die echte Anzeigegröße anpassen.", "Zu große Originale verursachen unnötigen Datenverkehr."] },
      { heading: "Format sinnvoll auswählen", paragraphs: ["Für Fotos ist WebP meist der beste Startpunkt.", "PNG bleibt sinnvoll bei Transparenz oder sehr scharfen Kanten."], bullets: ["Fotos: WebP mit mittlerer bis hoher Qualität testen", "Logos/UI: PNG und WebP vergleichen", "Hero-Bilder zuerst mobil prüfen"] },
      { heading: "In kleinen Schritten komprimieren", paragraphs: ["Qualität schrittweise reduzieren und Versionen vergleichen.", "Schon kleine Anpassungen sparen oft viel Dateigröße."] },
      { heading: "Im echten Layout prüfen", paragraphs: ["Nicht nur in 200%-Zoomansicht beurteilen.", "Besser im finalen Seitenlayout und auf dem Smartphone kontrollieren."] },
      { heading: "Checklist als Standard", paragraphs: ["Ein kurzer Standardprozess sorgt für konsistente Ergebnisse."], bullets: ["Skalieren", "In WebP konvertieren", "Kleinste akzeptable Version wählen", "Mobil und Desktop prüfen"] }
    ]
  }
};

const minifiedVsPrettyJsonContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Minified vs Pretty JSON: When to Use Each",
    description: "Understand when compact JSON is better and when formatted JSON saves debugging time.",
    intro: "JSON can be sent as a single compact line or as indented readable text. Both are valid. Choosing the right format for each workflow avoids mistakes and wasted time.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "Common scenarios",
    useCases: ["Reviewing API payloads during debugging.", "Shipping production responses efficiently.", "Saving logs and snapshots.", "Sharing JSON examples in docs and tickets."],
    closingTitle: "Use both formats deliberately",
    closingText: "Pretty JSON is for humans. Minified JSON is for transfer efficiency. Switching between both at the right moment is the practical approach.",
    relatedToolLabel: "Open JSON Formatter",
    sections: [
      { heading: "What minified JSON is good for", paragraphs: ["Minified JSON removes extra spaces and line breaks, which slightly reduces payload size.", "This is useful for production transfers, especially at high volume, where every byte and parsing step matters."] },
      { heading: "What pretty JSON is good for", paragraphs: ["Pretty JSON adds indentation and line breaks so nested data is easier to scan.", "It is better for debugging, code reviews, documentation, and hand-editing sample payloads."] },
      { heading: "Quick decision checklist", paragraphs: ["Use this quick rule before choosing a format."], bullets: ["Debugging or reviewing data: pretty JSON.", "Sending/storing production payloads: minified JSON.", "Documentation examples: pretty JSON.", "Bandwidth-sensitive systems: minified JSON."] },
      { heading: "Avoid common workflow mistakes", paragraphs: ["Do not hand-edit large minified payloads. Format first, then edit.", "Also avoid storing only pretty JSON when transfer size is important. Keep a formatting step in your pipeline."] },
      { heading: "A practical team pattern", paragraphs: ["Many teams keep JSON pretty in local development and repositories, then minify at build or delivery time.", "This keeps collaboration readable without giving up production efficiency."] }
    ]
  },
  ko: { title: "Minified vs Pretty JSON: 언제 무엇을 써야 할까", description: "압축 JSON과 보기 좋은 JSON을 상황에 맞게 쓰는 기준을 정리합니다.", intro: "JSON은 한 줄(minified) 또는 들여쓰기(pretty) 형태로 사용할 수 있습니다. 둘 다 유효하며 목적이 다릅니다.", categoryLabel: "개발 워크플로", useCasesTitle: "자주 쓰는 상황", useCases: ["API 디버깅", "운영 응답 최적화", "로그 저장", "문서/티켓 공유"], closingTitle: "목적에 따라 전환", closingText: "사람이 읽을 때는 pretty, 전송 효율이 중요할 때는 minified를 쓰면 됩니다.", relatedToolLabel: "JSON Formatter 열기", sections: [{ heading: "Minified JSON이 유리한 경우", paragraphs: ["공백과 줄바꿈을 제거해 크기를 줄입니다.", "운영 환경 전송량이 많을수록 효과가 있습니다."] }, { heading: "Pretty JSON이 유리한 경우", paragraphs: ["들여쓰기로 구조를 쉽게 파악할 수 있습니다.", "디버깅, 리뷰, 문서화에 적합합니다."] }, { heading: "빠른 선택 기준", paragraphs: ["아래 기준으로 바로 결정하세요."], bullets: ["디버깅/검토: pretty", "운영 전송/저장: minified", "문서 예시: pretty", "대역폭 민감: minified"] }, { heading: "자주 하는 실수", paragraphs: ["minified를 직접 수정하면 오류가 늘어납니다.", "반대로 운영에서도 pretty만 쓰면 불필요한 용량이 늘 수 있습니다."] }, { heading: "실무 패턴", paragraphs: ["개발 단계는 pretty, 배포 단계에서 minify하는 방식이 가장 실용적입니다."] }] },
  ja: { title: "Minified JSON と Pretty JSON の使い分け", description: "圧縮JSONと整形JSONを場面別に使い分ける実践ガイドです。", intro: "JSONは1行のminified形式と、読みやすいpretty形式の両方が使えます。どちらも正しく、用途が異なります。", categoryLabel: "開発ワークフロー", useCasesTitle: "よくある場面", useCases: ["APIデバッグ", "本番レスポンス最適化", "ログ保存", "ドキュメント共有"], closingTitle: "目的で切り替える", closingText: "人が読むならpretty、転送効率ならminified。これを基本にすると迷いません。", relatedToolLabel: "JSON Formatterを開く", sections: [{ heading: "minifiedが向いている場面", paragraphs: ["空白や改行を除去してデータ量を抑えます。", "大量転送の本番環境で有効です。"] }, { heading: "prettyが向いている場面", paragraphs: ["ネスト構造を目で追いやすくなります。", "デバッグ、レビュー、手動編集に最適です。"] }, { heading: "判断チェック", paragraphs: ["次の基準で選択します。"], bullets: ["調査・確認: pretty", "本番転送: minified", "資料用サンプル: pretty", "容量重視: minified"] }, { heading: "避けたいミス", paragraphs: ["minifiedを直接編集するとミスが増えます。", "逆に常にprettyのままだと無駄なサイズ増加につながります。"] }, { heading: "実務での運用", paragraphs: ["開発中はpretty、本番配信前にminifyする流れが扱いやすいです。"] }] },
  es: { title: "JSON minificado vs JSON legible: cuándo usar cada uno", description: "Elige entre JSON compacto y JSON formateado según el contexto de trabajo.", intro: "Ambos formatos son válidos. El JSON minificado prioriza tamaño; el pretty JSON prioriza lectura humana.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Escenarios comunes", useCases: ["Depuración de APIs", "Respuestas en producción", "Logs", "Documentación técnica"], closingTitle: "Usa ambos con intención", closingText: "Pretty para personas, minificado para transferencia eficiente.", relatedToolLabel: "Abrir JSON Formatter", sections: [{ heading: "Cuándo conviene minificar", paragraphs: ["Quita espacios y saltos de línea para reducir tamaño.", "Es útil en producción y sistemas sensibles a ancho de banda."] }, { heading: "Cuándo conviene formato legible", paragraphs: ["La indentación facilita entender estructuras anidadas.", "Ideal para depurar, revisar y editar ejemplos."] }, { heading: "Regla rápida", paragraphs: ["Decide con esta guía."], bullets: ["Debug/revisión: pretty", "Producción/transporte: minificado", "Ejemplos en docs: pretty", "Ahorro de bytes: minificado"] }, { heading: "Errores frecuentes", paragraphs: ["No edites payloads minificados a mano.", "Tampoco guardes solo formato legible si el tamaño importa en producción."] }, { heading: "Patrón recomendado", paragraphs: ["Mantén pretty en desarrollo y minifica antes de enviar o publicar."] }] },
  fr: { title: "JSON minifié vs JSON lisible : quand utiliser chaque format", description: "Choisissez le bon format JSON selon votre objectif : lisibilité ou efficacité de transfert.", intro: "Le JSON minifié et le JSON formaté sont tous deux valides. Le choix dépend surtout du contexte de travail.", categoryLabel: "Workflow développeur", useCasesTitle: "Cas fréquents", useCases: ["Débogage API", "Réponses en production", "Stockage de logs", "Exemples de documentation"], closingTitle: "Alternez selon le besoin", closingText: "Lisible pour l'humain, minifié pour le transport : gardez cette règle simple.", relatedToolLabel: "Ouvrir JSON Formatter", sections: [{ heading: "Quand minifier", paragraphs: ["Le format minifié retire espaces et retours ligne pour réduire la taille.", "C'est utile en production, surtout à grand volume."] }, { heading: "Quand formater", paragraphs: ["Le formatage rend les structures imbriquées plus faciles à lire.", "Idéal pour debug, revue et édition manuelle."] }, { heading: "Checklist rapide", paragraphs: ["Utilisez ce repère simple."], bullets: ["Analyse/debug : formaté", "Transfert production : minifié", "Exemples docs : formaté", "Contrainte de bande passante : minifié"] }, { heading: "Erreurs à éviter", paragraphs: ["Évitez de modifier du minifié à la main.", "Évitez aussi de garder uniquement du JSON formaté quand la taille compte."] }, { heading: "Routine d'équipe", paragraphs: ["Conservez du JSON lisible en dev, puis minifiez à l'étape de livraison."] }] },
  de: { title: "Minified vs Pretty JSON: Wann welches Format sinnvoll ist", description: "Praktische Entscheidungshilfe für kompaktes JSON und lesbares JSON im Alltag.", intro: "Beide JSON-Formate sind gültig. Minified spart Bytes, Pretty verbessert Lesbarkeit.", categoryLabel: "Developer-Workflow", useCasesTitle: "Typische Fälle", useCases: ["API-Debugging", "Produktivantworten", "Logs", "Dokumentation"], closingTitle: "Bewusst wechseln", closingText: "Für Menschen: Pretty. Für effiziente Übertragung: Minified.", relatedToolLabel: "JSON Formatter öffnen", sections: [{ heading: "Wann Minified sinnvoll ist", paragraphs: ["Leerzeichen und Zeilenumbrüche entfallen, dadurch sinkt die Größe.", "Besonders nützlich bei produktiven Datenströmen."] }, { heading: "Wann Pretty sinnvoll ist", paragraphs: ["Einrückung macht verschachtelte Strukturen besser lesbar.", "Hilfreich für Debugging, Reviews und manuelle Bearbeitung."] }, { heading: "Schnelle Entscheidung", paragraphs: ["Nutze diese einfache Regel."], bullets: ["Debug/Review: Pretty", "Produktive Übertragung: Minified", "Dokubeispiele: Pretty", "Byte-Effizienz: Minified"] }, { heading: "Häufige Fehler", paragraphs: ["Große minified Payloads nicht direkt per Hand ändern.", "Und nicht alles im Pretty-Format ausliefern, wenn Größe wichtig ist."] }, { heading: "Team-Workflow", paragraphs: ["In Entwicklung lesbar speichern, vor Auslieferung minifizieren."] }] }
};

const trackSocialCampaignsWithUtmLinksContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Track Social Media Campaigns with UTM Links", description: "Create clean UTM links for social campaigns so traffic appears clearly in analytics reports.", intro: "Social traffic often lands in one generic bucket unless links are tagged consistently. UTM parameters make campaign results measurable by source, medium, and content.", categoryLabel: "Campaign tracking", useCasesTitle: "Useful for", useCases: ["Instagram and Facebook promotions.", "Organic social posting calendars.", "Paid social ad variants.", "Reporting by channel and creative."], closingTitle: "Tag once, report faster", closingText: "Consistent UTM naming saves hours in monthly reporting and reduces guesswork about what actually worked.", relatedToolLabel: "Open UTM Builder", sections: [{ heading: "Use a clear naming convention", paragraphs: ["Define source, medium, and campaign naming before publishing links.", "Consistency matters more than perfect wording because analytics groups exact text values."] }, { heading: "Recommended social UTM pattern", paragraphs: ["A simple pattern works well for most teams."], bullets: ["utm_source: platform name (instagram, linkedin)", "utm_medium: social or paid_social", "utm_campaign: campaign goal + month", "utm_content: creative variant or post ID"] }, { heading: "Tag every destination URL", paragraphs: ["Add UTM parameters to each post link, not just one version per campaign.", "This helps compare different creatives, captions, and CTA placements."] }, { heading: "Avoid common social tracking errors", paragraphs: ["Do not mix capitalizations like Instagram and instagram.", "Avoid spaces and vague campaign names such as spring-sale-final-final."] }, { heading: "Review in analytics weekly", paragraphs: ["Check incoming campaign names every week and clean naming drift early.", "Small corrections now prevent broken reports later."] }] },
  ko: { title: "UTM 링크로 소셜 미디어 캠페인 추적하는 방법", description: "소셜 유입을 정확히 구분할 수 있도록 UTM 링크를 체계적으로 만드는 방법입니다.", intro: "소셜 유입은 태깅이 없으면 하나로 뭉쳐 보이기 쉽습니다. UTM을 쓰면 채널·캠페인·콘텐츠별 성과를 명확히 볼 수 있습니다.", categoryLabel: "캠페인 추적", useCasesTitle: "활용 상황", useCases: ["인스타/페이스북 홍보", "유기적 소셜 운영", "유료 소셜 광고 비교", "채널별 리포트 작성"], closingTitle: "태깅 표준이 리포트를 쉽게", closingText: "일관된 UTM 규칙만 지켜도 월간 리포트 작성 시간이 크게 줄어듭니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "먼저 네이밍 규칙 정하기", paragraphs: ["게시 전에 source, medium, campaign 표기 규칙을 팀에서 합의하세요.", "정확한 표기 통일이 분석 품질을 좌우합니다."] }, { heading: "추천 UTM 패턴", paragraphs: ["대부분 아래 구조로 충분합니다."], bullets: ["utm_source: instagram, linkedin 등", "utm_medium: social 또는 paid_social", "utm_campaign: 목적+월", "utm_content: 소재 버전/게시물 ID"] }, { heading: "모든 링크에 태그 적용", paragraphs: ["캠페인 대표 링크만이 아니라 게시물별 링크에 붙이세요.", "소재/문구/CTA별 비교가 쉬워집니다."] }, { heading: "자주 하는 실수", paragraphs: ["대소문자를 섞어 쓰면 데이터가 분리됩니다.", "모호한 이름이나 공백 사용을 피하세요."] }, { heading: "주간 점검", paragraphs: ["분석 도구에서 태그 유입을 주 1회 확인해 표기 흔들림을 초기에 수정하세요."] }] },
  ja: { title: "UTMリンクでSNSキャンペーンを追跡する方法", description: "SNS流入を正確に計測するためのUTM設計と運用の基本を解説します。", intro: "UTMがないSNSリンクは分析上でひとまとめになりやすく、施策評価が難しくなります。UTMで流入を明確に分解しましょう。", categoryLabel: "キャンペーン計測", useCasesTitle: "役立つ場面", useCases: ["Instagram/Facebook施策", "オーガニック投稿運用", "有料SNS広告比較", "月次レポート作成"], closingTitle: "命名ルールが成果測定を楽にする", closingText: "UTM命名を統一すると、あとからの集計や比較が大幅に楽になります。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "先に命名ルールを決める", paragraphs: ["source・medium・campaignの書き方を先に決めて共有します。", "表記ゆれを防ぐことが最重要です。"] }, { heading: "SNS向けの基本パターン", paragraphs: ["次の形が実務で使いやすいです。"], bullets: ["utm_source: instagram / linkedin", "utm_medium: social / paid_social", "utm_campaign: 目的+月", "utm_content: クリエイティブ差分"] }, { heading: "投稿ごとにリンクを分ける", paragraphs: ["キャンペーン単位だけでなく投稿単位でUTMを付与します。", "訴求文や画像差分の比較が可能になります。"] }, { heading: "避けたいミス", paragraphs: ["大文字小文字混在は別データとして扱われます。", "曖昧なcampaign名や空白入り文字列は避けましょう。"] }, { heading: "毎週チェックする", paragraphs: ["分析画面で流入名を定期確認し、崩れた命名を早めに修正します。"] }] },
  es: { title: "Cómo rastrear campañas en redes sociales con enlaces UTM", description: "Etiqueta enlaces sociales correctamente para medir resultados por canal y creatividad.", intro: "Sin UTM, gran parte del tráfico social se mezcla en reportes generales. Con parámetros UTM puedes separar resultados por origen y campaña.", categoryLabel: "Seguimiento de campañas", useCasesTitle: "Útil para", useCases: ["Promos en Instagram/Facebook", "Calendarios de contenido orgánico", "Anuncios paid social", "Reportes por canal"], closingTitle: "Etiqueta una vez, reporta mejor", closingText: "Una convención consistente de UTM simplifica análisis y evita reportes confusos.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Define convención de nombres", paragraphs: ["Alinea equipo en source, medium y campaign antes de publicar.", "La consistencia es más importante que usar nombres complejos."] }, { heading: "Patrón recomendado", paragraphs: ["Usa una estructura simple."], bullets: ["utm_source: plataforma", "utm_medium: social o paid_social", "utm_campaign: objetivo+mes", "utm_content: versión de creatividad"] }, { heading: "Etiqueta cada enlace", paragraphs: ["No uses un solo enlace para todo.", "Etiqueta por publicación para comparar rendimiento real."] }, { heading: "Errores comunes", paragraphs: ["No mezcles mayúsculas/minúsculas sin criterio.", "Evita nombres ambiguos o con espacios."] }, { heading: "Revisión semanal", paragraphs: ["Controla nombres en analytics cada semana para corregir desviaciones temprano."] }] },
  fr: { title: "Comment suivre les campagnes social media avec des liens UTM", description: "Créez des liens UTM cohérents pour analyser clairement vos performances social media.", intro: "Sans UTM, le trafic social est souvent difficile à segmenter. Avec une structure propre, vous mesurez source, campagne et créatif plus facilement.", categoryLabel: "Suivi de campagne", useCasesTitle: "Cas d'usage", useCases: ["Campagnes Instagram/Facebook", "Posts organiques", "Ads paid social", "Reporting par canal"], closingTitle: "Bien taguer = mieux analyser", closingText: "Une nomenclature UTM stable réduit les ambiguïtés et accélère le reporting.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Définir une nomenclature commune", paragraphs: ["Fixez les règles source/medium/campaign avant publication.", "La cohérence des libellés est la base d'un bon reporting."] }, { heading: "Modèle simple conseillé", paragraphs: ["Ce format suffit dans la plupart des cas."], bullets: ["utm_source : plateforme", "utm_medium : social ou paid_social", "utm_campaign : objectif+mois", "utm_content : variante créative"] }, { heading: "Taguer chaque URL", paragraphs: ["Ajoutez des UTM à chaque post, pas seulement un lien global.", "Vous pourrez comparer message, visuel et CTA."] }, { heading: "Erreurs fréquentes", paragraphs: ["Évitez les variations de casse inutiles.", "Évitez aussi les noms flous ou trop longs."] }, { heading: "Contrôle hebdomadaire", paragraphs: ["Vérifiez les tags dans l'outil analytics chaque semaine pour corriger rapidement."] }] },
  de: { title: "So trackst du Social-Media-Kampagnen mit UTM-Links", description: "Mit sauber getaggten UTM-Links Social-Traffic klar nach Kanal und Kampagne auswerten.", intro: "Ohne UTM landet Social-Traffic oft in unscharfen Berichten. Mit konsistenten Parametern wird Performance pro Quelle sichtbar.", categoryLabel: "Kampagnen-Tracking", useCasesTitle: "Sinnvoll für", useCases: ["Instagram/Facebook-Aktionen", "Organische Posts", "Paid-Social-Varianten", "Reporting nach Kanal"], closingTitle: "Sauberes Tagging spart Analysezeit", closingText: "Einheitliche UTM-Namen machen Monatsreports deutlich schneller und verlässlicher.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "Namenskonvention festlegen", paragraphs: ["Vor Start Regeln für source, medium und campaign definieren.", "Konsistenz ist wichtiger als kreative Benennungen."] }, { heading: "Empfohlenes UTM-Muster", paragraphs: ["Diese Struktur funktioniert in den meisten Teams."], bullets: ["utm_source: Plattform", "utm_medium: social oder paid_social", "utm_campaign: Ziel+Monat", "utm_content: Creative-Variante"] }, { heading: "Jeden Link taggen", paragraphs: ["Nicht nur einen Kampagnenlink nutzen.", "Besser pro Post taggen, um Varianten auszuwerten."] }, { heading: "Häufige Fehler", paragraphs: ["Keine unnötigen Groß/Kleinschreibungs-Mixe.", "Keine unklaren oder chaotischen Kampagnennamen."] }, { heading: "Wöchentlich prüfen", paragraphs: ["UTM-Werte regelmäßig im Analytics-Tool kontrollieren und früh korrigieren."] }] }
};

const trackEmailClicksWithUtmParametersContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Track Email Campaign Clicks with UTM Parameters", description: "Measure email click performance accurately with consistent UTM tagging for newsletters and campaigns.", intro: "Email clicks are easy to misreport when links are untagged or tagged inconsistently. A simple UTM structure lets you compare sends, segments, and CTAs with confidence.", categoryLabel: "Email analytics", useCasesTitle: "Useful for", useCases: ["Newsletter performance tracking.", "Lifecycle email experiments.", "A/B tests on email CTAs.", "Comparing weekly campaign sends."], closingTitle: "Clean tags create clean reports", closingText: "When every email link follows the same UTM rules, attribution and campaign analysis become much easier.", relatedToolLabel: "Open UTM Builder", sections: [{ heading: "Set a standard for email UTMs", paragraphs: ["Use one shared naming guide across the team.", "This avoids split data caused by small differences like newsletter vs Newsletter."] }, { heading: "Recommended email parameter structure", paragraphs: ["Keep values short and readable."], bullets: ["utm_source: newsletter or brand name", "utm_medium: email", "utm_campaign: campaign name + date", "utm_content: button-text or placement"] }, { heading: "Tag all links, not only the main CTA", paragraphs: ["Header links, inline text links, and footer CTAs can perform differently.", "Tracking each one helps improve email layout and copy decisions."] }, { heading: "Keep campaign names human-readable", paragraphs: ["Future you should understand tags without opening old docs.", "Use consistent separators and avoid random abbreviations."] }, { heading: "Validate before send", paragraphs: ["Click every tagged URL in a staging draft to verify parameters.", "Fixing broken tags before launch saves reporting cleanup later."] }] },
  ko: { title: "UTM 파라미터로 이메일 캠페인 클릭 추적하는 방법", description: "뉴스레터와 캠페인 링크를 일관되게 태깅해 이메일 성과를 정확히 측정하세요.", intro: "이메일 링크가 태깅되지 않거나 표기가 섞이면 성과 분석이 왜곡됩니다. 간단한 UTM 규칙만 있어도 발송별 비교가 쉬워집니다.", categoryLabel: "이메일 분석", useCasesTitle: "활용 상황", useCases: ["뉴스레터 성과 추적", "라이프사이클 메일 실험", "CTA A/B 테스트", "주간 발송 비교"], closingTitle: "태깅이 곧 리포트 품질", closingText: "모든 이메일 링크에 같은 규칙을 적용하면 어트리뷰션 정합성이 높아집니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "이메일 UTM 표준 만들기", paragraphs: ["팀 공용 네이밍 규칙을 먼저 정하세요.", "newsletter/Newsletter 같은 표기 차이도 데이터 분리를 만듭니다."] }, { heading: "추천 파라미터 구조", paragraphs: ["짧고 읽기 쉬운 값이 좋습니다."], bullets: ["utm_source: newsletter 또는 브랜드명", "utm_medium: email", "utm_campaign: 캠페인명+날짜", "utm_content: 버튼명/위치"] }, { heading: "메인 CTA 외 링크도 태깅", paragraphs: ["헤더, 본문, 푸터 링크 성과가 다를 수 있습니다.", "각 링크를 구분하면 이메일 구조 개선에 도움이 됩니다."] }, { heading: "캠페인명은 사람이 읽게", paragraphs: ["나중에 봐도 의미가 보이는 이름을 쓰세요.", "무작위 약어와 불규칙 구분자는 피하세요."] }, { heading: "발송 전 검증", paragraphs: ["테스트 메일에서 모든 URL을 클릭해 파라미터를 확인하세요.", "사전 점검이 사후 리포트 정리를 줄여줍니다."] }] },
  ja: { title: "UTMパラメータでメールキャンペーンクリックを追跡する方法", description: "ニュースレターやメール施策のクリック計測を正確にするUTM運用の基本。", intro: "メールリンクのUTMが不統一だと、レポートが分散して比較しづらくなります。簡単な命名ルールで改善できます。", categoryLabel: "メール分析", useCasesTitle: "役立つ場面", useCases: ["ニュースレター効果測定", "ステップメール改善", "CTA A/Bテスト", "定期配信比較"], closingTitle: "タグ統一で分析が安定", closingText: "メール内リンクを同じ規則で管理すると、後工程の集計が大幅に楽になります。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "メールUTMの共通ルールを作る", paragraphs: ["チームでsource/medium/campaignの書き方を統一します。", "表記ゆれは別データになるため注意が必要です。"] }, { heading: "推奨パラメータ構成", paragraphs: ["短く、意味が分かる値にします。"], bullets: ["utm_source: newsletter など", "utm_medium: email", "utm_campaign: 施策名+日付", "utm_content: ボタン名/配置"] }, { heading: "主要CTA以外も計測", paragraphs: ["本文リンクやフッターもクリック差が出ます。", "リンクごとにUTMを分けると改善ポイントが明確になります。"] }, { heading: "後で読める命名にする", paragraphs: ["半年後に見ても意味が分かる名前を付けましょう。", "略語の乱立や不規則な区切りは避けます。"] }, { heading: "配信前に動作確認", paragraphs: ["テスト配信で全URLをクリックし、UTM付与を確認します。", "配信後の修正コストを減らせます。"] }] },
  es: { title: "Cómo rastrear clics de campañas de email con parámetros UTM", description: "Mide mejor el rendimiento de newsletters y emails usando etiquetas UTM consistentes.", intro: "Los clics de email se reportan mal cuando cada enlace usa etiquetas distintas o no usa ninguna. Una convención simple mejora la atribución.", categoryLabel: "Analítica de email", useCasesTitle: "Útil para", useCases: ["Newsletters", "Flujos automatizados", "Pruebas A/B de CTA", "Comparar envíos semanales"], closingTitle: "Etiquetas limpias, reportes claros", closingText: "Si todos los enlaces siguen la misma estructura UTM, el análisis posterior es mucho más rápido.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Define estándar de etiquetado", paragraphs: ["Usa una guía compartida para todo el equipo.", "Pequeñas diferencias de escritura fragmentan datos."] }, { heading: "Estructura recomendada", paragraphs: ["Mantén valores cortos y claros."], bullets: ["utm_source: newsletter o marca", "utm_medium: email", "utm_campaign: nombre + fecha", "utm_content: botón o ubicación"] }, { heading: "Etiqueta todos los enlaces", paragraphs: ["No solo el botón principal.", "Header, cuerpo y footer pueden rendir diferente."] }, { heading: "Nombres legibles", paragraphs: ["Usa etiquetas que sigan siendo comprensibles meses después.", "Evita abreviaturas aleatorias."] }, { heading: "Valida antes de enviar", paragraphs: ["Prueba cada URL en borrador para confirmar parámetros.", "Corregir antes de envío evita limpieza de datos posterior."] }] },
  fr: { title: "Comment suivre les clics email avec des paramètres UTM", description: "Mesurez précisément vos campagnes email grâce à une structure UTM cohérente.", intro: "Des liens email non tagués ou mal tagués compliquent l'attribution. Une convention UTM simple rend les performances comparables.", categoryLabel: "Analyse email", useCasesTitle: "Cas utiles", useCases: ["Newsletters", "Scénarios lifecycle", "Tests A/B CTA", "Comparaison des envois"], closingTitle: "Des tags propres pour des rapports fiables", closingText: "Avec un format UTM stable sur tous les liens, l'analyse devient beaucoup plus claire.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Définir une norme UTM email", paragraphs: ["Centralisez une convention commune d'écriture.", "Les différences de casse créent des lignes séparées dans les rapports."] }, { heading: "Structure conseillée", paragraphs: ["Gardez des valeurs courtes et explicites."], bullets: ["utm_source : newsletter ou marque", "utm_medium : email", "utm_campaign : nom + date", "utm_content : bouton ou emplacement"] }, { heading: "Taguer tous les liens", paragraphs: ["Pas seulement le CTA principal.", "Les liens en-tête, contenu et footer peuvent performer différemment."] }, { heading: "Noms lisibles dans le temps", paragraphs: ["Choisissez des libellés compréhensibles plusieurs mois plus tard.", "Évitez les abréviations obscures."] }, { heading: "Valider avant envoi", paragraphs: ["Testez chaque URL dans un brouillon avant lancement.", "Vous éviterez beaucoup de nettoyage de données après campagne."] }] },
  de: { title: "So trackst du E-Mail-Klicks mit UTM-Parametern", description: "Newsletter- und Kampagnenklicks sauber messen mit konsistentem UTM-Tagging.", intro: "Ohne klare UTM-Regeln sind E-Mail-Auswertungen oft ungenau. Eine einfache Struktur verbessert Attribution und Vergleichbarkeit.", categoryLabel: "E-Mail-Analyse", useCasesTitle: "Sinnvoll für", useCases: ["Newsletter-Auswertung", "Lifecycle-Strecken", "CTA-A/B-Tests", "Vergleich von Versandterminen"], closingTitle: "Saubere Tags, saubere Reports", closingText: "Wenn alle Mail-Links gleich getaggt sind, werden Reports verlässlicher und schneller erstellbar.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "UTM-Standard für E-Mails festlegen", paragraphs: ["Lege ein gemeinsames Benennungsschema im Team fest.", "Schon kleine Schreibvarianten teilen Daten unnötig auf."] }, { heading: "Empfohlene Struktur", paragraphs: ["Kurz und eindeutig benennen."], bullets: ["utm_source: newsletter oder Marke", "utm_medium: email", "utm_campaign: Name + Datum", "utm_content: Button/Position"] }, { heading: "Alle Links taggen", paragraphs: ["Nicht nur den Haupt-CTA.", "Header-, Text- und Footer-Links liefern oft unterschiedliche Ergebnisse."] }, { heading: "Lesbare Kampagnennamen", paragraphs: ["Namen so wählen, dass sie später sofort verständlich sind.", "Chaotische Abkürzungen vermeiden."] }, { heading: "Vor Versand prüfen", paragraphs: ["Alle URLs im Testversand klicken und Parameter kontrollieren.", "Frühe Prüfung spart spätere Datenkorrektur."] }] }
};

const checkCharacterCountBeforePublishingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Check Character Count Before Publishing a Blog Post", description: "Use a quick pre-publish character check to avoid awkward titles, long snippets, and social preview issues.", intro: "Great blog content can still underperform if the title, description, or section headings are too long. A short character-count review before publishing helps keep copy readable everywhere.", categoryLabel: "Content workflow", useCasesTitle: "Useful before publishing", useCases: ["Final QA for blog drafts.", "Checking title and meta description length.", "Improving social share snippets.", "Standardizing editorial reviews."], closingTitle: "Small check, big consistency", closingText: "Character count checks take less than a minute and prevent many formatting problems after publication.", relatedToolLabel: "Open Character Counter", sections: [{ heading: "What to check before you publish", paragraphs: ["Review key text elements that appear in search results, social previews, and page templates.", "This includes title, meta description, H1, and important CTA lines."] }, { heading: "Build a simple pre-publish checklist", paragraphs: ["Use one checklist for every article."], bullets: ["Title is clear and not overloaded.", "Meta description is concise and specific.", "Section headings are scannable.", "CTA text is short and action-focused."] }, { heading: "Balance clarity and length", paragraphs: ["Do not shorten copy until it becomes vague.", "Cut repeated words first, then tighten filler phrases while preserving meaning."] }, { heading: "Check snippets in context", paragraphs: ["A line that looks fine in a doc may wrap awkwardly on mobile.", "Preview final text in your CMS or browser before publishing."] }, { heading: "Keep a record of winning patterns", paragraphs: ["Save examples of titles and descriptions that performed well.", "This gives writers practical templates that are already length-safe."] }] },
  ko: { title: "블로그 게시 전 문자 수 확인하는 방법", description: "게시 전 1분 점검으로 제목/설명 길이 문제를 줄이는 실무 체크 가이드입니다.", intro: "본문이 좋아도 제목과 설명이 너무 길면 검색·공유 노출에서 손해를 볼 수 있습니다. 게시 전 문자 수 확인만으로 많은 문제를 예방할 수 있습니다.", categoryLabel: "콘텐츠 워크플로", useCasesTitle: "게시 전 점검", useCases: ["초안 최종 QA", "메타 제목/설명 길이 확인", "SNS 공유 문구 점검", "편집팀 검수 표준화"], closingTitle: "짧은 점검으로 품질 유지", closingText: "문자 수 확인은 1분이면 충분하며 게시 후 수정 비용을 줄여줍니다.", relatedToolLabel: "Character Counter 열기", sections: [{ heading: "게시 전 확인할 텍스트", paragraphs: ["검색과 공유 미리보기에 노출되는 핵심 문구를 우선 확인하세요.", "제목, 메타 설명, 주요 헤딩, CTA 문구가 대상입니다."] }, { heading: "체크리스트 만들기", paragraphs: ["모든 글에 같은 기준을 적용하세요."], bullets: ["제목이 길고 복잡하지 않은가", "메타 설명이 간결한가", "헤딩이 한눈에 읽히는가", "CTA 문구가 짧고 명확한가"] }, { heading: "길이와 명확성 균형", paragraphs: ["짧게 줄이되 의미를 잃지 않아야 합니다.", "중복 단어와 군더더기 표현부터 제거하세요."] }, { heading: "실제 화면에서 확인", paragraphs: ["문서에서 괜찮아 보여도 모바일에서는 줄바꿈이 어색할 수 있습니다.", "CMS/브라우저 미리보기로 최종 확인하세요."] }, { heading: "잘 된 사례 저장", paragraphs: ["성과가 좋았던 제목 패턴을 모아두면 다음 작성이 빨라집니다."] }] },
  ja: { title: "ブログ公開前に文字数を確認する方法", description: "公開直前の文字数チェックでタイトルや説明文の崩れを防ぐ実践ガイド。", intro: "記事内容が良くても、タイトルや説明文が長すぎると検索やSNSで見づらくなります。公開前の短い確認で防げます。", categoryLabel: "コンテンツ運用", useCasesTitle: "公開前に有効", useCases: ["最終QA", "タイトル/メタ説明の確認", "SNS共有文の調整", "編集フロー標準化"], closingTitle: "1分チェックで品質維持", closingText: "文字数確認を習慣化すると、公開後の手戻りを減らせます。", relatedToolLabel: "Character Counterを開く", sections: [{ heading: "公開前に確認する項目", paragraphs: ["検索結果と共有プレビューに出る文を優先して確認します。", "タイトル、メタ説明、主要見出し、CTA文が対象です。"] }, { heading: "簡単チェックリスト", paragraphs: ["毎回同じ基準で確認しましょう。"], bullets: ["タイトルが長すぎない", "メタ説明が具体的で簡潔", "見出しが読みやすい", "CTAが短く明確"] }, { heading: "短さより分かりやすさ", paragraphs: ["短くして意味が曖昧になるのは避けます。", "重複語や不要表現を先に削ると効果的です。"] }, { heading: "実表示で確認", paragraphs: ["ドキュメント上で問題なくても、モバイルで崩れることがあります。", "CMSやブラウザで最終表示を確認してください。"] }, { heading: "良い例を蓄積", paragraphs: ["反応が良いタイトル例を保存して、次回作成の基準にします。"] }] },
  es: { title: "Cómo revisar el recuento de caracteres antes de publicar un blog", description: "Haz una revisión rápida de longitud antes de publicar para evitar títulos y snippets incómodos.", intro: "Un buen artículo puede rendir peor si el título o la descripción son demasiado largos. Una comprobación breve evita muchos problemas de presentación.", categoryLabel: "Flujo de contenidos", useCasesTitle: "Antes de publicar", useCases: ["QA final", "Revisión de título y meta", "Snippets para redes", "Estandarizar edición"], closingTitle: "Chequeo corto, resultado consistente", closingText: "Revisar caracteres toma menos de un minuto y reduce correcciones posteriores.", relatedToolLabel: "Abrir Character Counter", sections: [{ heading: "Qué revisar", paragraphs: ["Prioriza textos que aparecen en buscadores y vistas previas sociales.", "Incluye título, meta descripción, H1 y CTA clave."] }, { heading: "Checklist simple", paragraphs: ["Usa la misma lista siempre."], bullets: ["Título claro", "Meta descripción concreta", "Subtítulos escaneables", "CTA breve"] }, { heading: "Equilibrio entre claridad y longitud", paragraphs: ["No recortes hasta volver el texto ambiguo.", "Elimina primero repeticiones y relleno."] }, { heading: "Verifica en contexto", paragraphs: ["En móvil, algunas frases se parten mal.", "Revisa en vista previa real antes de publicar."] }, { heading: "Guarda patrones que funcionen", paragraphs: ["Conserva ejemplos efectivos para acelerar futuras publicaciones."] }] },
  fr: { title: "Comment vérifier le nombre de caractères avant de publier un article", description: "Effectuez un contrôle rapide avant publication pour éviter titres trop longs et extraits peu lisibles.", intro: "Même un bon article peut perdre en performance si son titre ou sa description dépasse une longueur confortable. Un check rapide suffit souvent.", categoryLabel: "Workflow éditorial", useCasesTitle: "Utile avant publication", useCases: ["QA finale", "Vérification titre/meta", "Préviews sociales", "Standard éditorial"], closingTitle: "Petit contrôle, gros bénéfice", closingText: "Compter les caractères prend moins d'une minute et évite des retouches après mise en ligne.", relatedToolLabel: "Ouvrir le compteur de caractères", sections: [{ heading: "Éléments à vérifier", paragraphs: ["Priorisez les textes visibles dans Google et les aperçus sociaux.", "Titre, meta description, H1 et CTA principaux sont prioritaires."] }, { heading: "Checklist simple", paragraphs: ["Appliquez la même routine pour chaque article."], bullets: ["Titre clair", "Meta concise", "Sous-titres lisibles", "CTA court"] }, { heading: "Rester clair en raccourcissant", paragraphs: ["Ne raccourcissez pas au point de perdre le sens.", "Supprimez d'abord les répétitions et formulations vagues."] }, { heading: "Valider en contexte réel", paragraphs: ["Une phrase peut sembler correcte dans un document mais mal s'afficher sur mobile.", "Faites une prévisualisation finale dans le CMS."] }, { heading: "Conserver les bons exemples", paragraphs: ["Archivez les formulations performantes pour guider les prochains articles."] }] },
  de: { title: "So prüfst du die Zeichenanzahl vor der Blog-Veröffentlichung", description: "Mit einem kurzen Pre-Publish-Check zu klareren Titeln, Snippets und stabileren Layouts.", intro: "Guter Content kann trotzdem schwächer performen, wenn Titel oder Beschreibung zu lang sind. Ein schneller Zeichencheck vor Veröffentlichung hilft sofort.", categoryLabel: "Content-Workflow", useCasesTitle: "Vor dem Publish", useCases: ["Finales QA", "Titel/Meta-Länge prüfen", "Social-Snippets verbessern", "Redaktionsstandard sichern"], closingTitle: "Kurzer Check, bessere Konsistenz", closingText: "Die Prüfung dauert weniger als eine Minute und verhindert viele Korrekturen nach dem Livegang.", relatedToolLabel: "Character Counter öffnen", sections: [{ heading: "Was du prüfen solltest", paragraphs: ["Konzentriere dich auf Texte, die in Suche und Social-Preview erscheinen.", "Dazu zählen Titel, Meta-Description, H1 und wichtige CTA-Zeilen."] }, { heading: "Einfache Checkliste", paragraphs: ["Nutze dieselbe Liste für jeden Beitrag."], bullets: ["Titel klar und nicht überladen", "Meta-Description präzise", "Zwischenüberschriften gut scanbar", "CTA kurz und deutlich"] }, { heading: "Klarheit vor Kürze", paragraphs: ["Nicht so stark kürzen, dass Bedeutung verloren geht.", "Zuerst Wiederholungen und Füllwörter streichen."] }, { heading: "Im echten Layout prüfen", paragraphs: ["Was im Dokument gut aussieht, kann mobil unsauber umbrechen.", "Vor Publish in echter Vorschau kontrollieren."] }, { heading: "Erfolgreiche Muster speichern", paragraphs: ["Gute Titel/Description-Beispiele dokumentieren und wiederverwenden."] }] }
};

const blogTitleLengthForReadabilityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How Long Should a Blog Title Be for Better Readability?", description: "Find a practical blog title length that stays readable in feeds, search results, and social previews.", intro: "There is no single perfect title length, but very short titles can be vague and very long ones can feel heavy. A readability-first approach gives better results than chasing one exact number.", categoryLabel: "Content writing", useCasesTitle: "Where this helps", useCases: ["Writing new blog post headlines.", "Refreshing old articles.", "Improving click-through from list pages.", "Training contributors on title quality."], closingTitle: "Aim for clarity first", closingText: "Readable titles usually perform better because users instantly understand the topic. Use character count as a support tool, not a strict rule.", relatedToolLabel: "Open Character Counter", sections: [{ heading: "Why title length affects readability", paragraphs: ["Readers scan quickly in search and social feeds.", "If a title is too long, key meaning may be buried or cut off before users decide to click."] }, { heading: "Practical length guidance", paragraphs: ["Use a moderate length that states topic and value clearly."], bullets: ["Avoid one-word vague titles.", "Lead with the main topic early.", "Remove filler phrases.", "Keep optional details near the end."] }, { heading: "Write for humans before algorithms", paragraphs: ["A natural title that answers user intent is stronger than a keyword-stuffed line.", "Use plain language your audience would actually search for and understand."] }, { heading: "Quick rewrite method", paragraphs: ["Draft one long version first, then trim.", "Cut repeated adjectives, move the core subject forward, and test two alternatives in a character counter."] }, { heading: "Review on mobile and desktop", paragraphs: ["Check how your title wraps in both contexts.", "If the first half already communicates the value, truncation becomes less risky."] }] },
  ko: { title: "가독성을 높이는 블로그 제목 길이는 얼마나 적당할까?", description: "검색·피드·공유 화면에서 읽기 좋은 제목 길이를 실무 기준으로 정리합니다.", intro: "제목 길이에 절대 정답은 없지만, 너무 짧으면 모호하고 너무 길면 읽기 피로가 커집니다. 핵심은 가독성 중심 작성입니다.", categoryLabel: "콘텐츠 작성", useCasesTitle: "도움이 되는 상황", useCases: ["신규 글 제목 작성", "기존 글 리프레시", "목록 페이지 클릭률 개선", "필진 가이드 제작"], closingTitle: "숫자보다 명확성 우선", closingText: "문자 수는 보조 지표입니다. 사용자가 한 번에 이해할 수 있는 제목이 가장 좋습니다.", relatedToolLabel: "Character Counter 열기", sections: [{ heading: "왜 제목 길이가 중요한가", paragraphs: ["사용자는 검색 결과와 피드에서 빠르게 훑어봅니다.", "길이가 과하면 핵심이 뒤로 밀리거나 잘려 보일 수 있습니다."] }, { heading: "실무 길이 가이드", paragraphs: ["중간 길이로 주제와 이점을 먼저 제시하세요."], bullets: ["너무 짧은 추상 제목 피하기", "핵심 키워드를 앞부분에", "군더더기 표현 제거", "부가 설명은 뒤쪽에"] }, { heading: "알고리즘보다 사람 중심", paragraphs: ["키워드 나열보다 자연스러운 문장이 읽히기 쉽습니다.", "사용자가 실제로 검색할 표현을 쓰세요."] }, { heading: "빠른 리라이트 방법", paragraphs: ["길게 먼저 쓰고 줄이는 방식이 효율적입니다.", "형용사 반복을 줄이고 핵심 주제를 앞으로 당기세요."] }, { heading: "모바일/데스크톱 동시 확인", paragraphs: ["두 환경에서 줄바꿈을 확인하면 잘림 리스크를 줄일 수 있습니다."] }] },
  ja: { title: "読みやすいブログタイトルの長さはどれくらい？", description: "検索・SNS・一覧で読みやすいタイトル長を実務的に調整する方法。", intro: "タイトルの最適文字数に絶対解はありません。短すぎると曖昧、長すぎると読みにくくなります。", categoryLabel: "ライティング", useCasesTitle: "役立つ場面", useCases: ["新規記事タイトル作成", "既存記事の改善", "一覧CTR改善", "執筆ガイド作成"], closingTitle: "数値より伝わりやすさ", closingText: "文字数は補助指標です。読者が一目で理解できるタイトルを優先しましょう。", relatedToolLabel: "Character Counterを開く", sections: [{ heading: "タイトル長が読みやすさに与える影響", paragraphs: ["読者は検索結果やSNSで素早く判断します。", "長すぎると重要な語が後ろに埋もれやすくなります。"] }, { heading: "実務向けの調整ポイント", paragraphs: ["中程度の長さで主題と価値を先に示します。"], bullets: ["抽象的すぎる短文を避ける", "主題語を前半に置く", "不要語を削る", "補足情報は後半へ"] }, { heading: "人間が読める文章を優先", paragraphs: ["キーワード詰め込みより自然な表現が強いです。", "ユーザーの検索意図に合う言葉を選びましょう。"] }, { heading: "書き直しのコツ", paragraphs: ["まず長めに書いてから削ると整理しやすいです。", "重複表現を削り、要点を先頭に寄せます。"] }, { heading: "モバイル確認", paragraphs: ["PCだけでなくスマホ表示でも改行や省略を確認します。"] }] },
  es: { title: "¿Qué longitud debe tener un título de blog para mejorar la legibilidad?", description: "Ajusta la longitud del título para que se lea bien en buscadores, feeds y redes sociales.", intro: "No existe un número perfecto único. Títulos demasiado cortos pueden ser vagos, y demasiado largos, difíciles de escanear.", categoryLabel: "Redacción", useCasesTitle: "Útil para", useCases: ["Crear nuevos titulares", "Actualizar artículos antiguos", "Mejorar CTR", "Guiar autores"], closingTitle: "Primero claridad", closingText: "El contador de caracteres ayuda, pero la prioridad es que el lector entienda el valor del artículo rápidamente.", relatedToolLabel: "Abrir Character Counter", sections: [{ heading: "Por qué importa la longitud", paragraphs: ["En resultados de búsqueda y redes, las personas escanean rápido.", "Si el título es muy largo, el mensaje clave puede perderse o cortarse."] }, { heading: "Guía práctica", paragraphs: ["Usa una longitud media con tema y beneficio claros."], bullets: ["Evita títulos vagos", "Pon el tema principal al inicio", "Recorta relleno", "Detalles secundarios al final"] }, { heading: "Escribe para personas", paragraphs: ["Un título natural suele funcionar mejor que uno sobrecargado de keywords.", "Usa lenguaje claro y cercano a la intención de búsqueda."] }, { heading: "Método rápido de edición", paragraphs: ["Escribe una versión larga y luego recorta.", "Elimina adjetivos repetidos y adelanta la idea central."] }, { heading: "Revisión en móvil", paragraphs: ["Comprueba cómo se ve en móvil y desktop antes de publicar."] }] },
  fr: { title: "Quelle longueur pour un titre de blog plus lisible ?", description: "Ajustez la longueur des titres pour une meilleure lisibilité dans les résultats et les flux sociaux.", intro: "Il n'existe pas de longueur parfaite universelle. Trop court peut être flou, trop long peut fatiguer la lecture.", categoryLabel: "Rédaction", useCasesTitle: "Utile pour", useCases: ["Nouveaux articles", "Mise à jour d'anciens contenus", "Améliorer le CTR", "Former les rédacteurs"], closingTitle: "La clarté avant le chiffre", closingText: "Le compteur est un appui. Le vrai objectif est un titre immédiatement compréhensible.", relatedToolLabel: "Ouvrir le compteur de caractères", sections: [{ heading: "Pourquoi la longueur joue sur la lisibilité", paragraphs: ["En recherche et sur les réseaux, les lecteurs balayent vite les titres.", "Un titre trop long peut cacher l'information clé."] }, { heading: "Repères pratiques", paragraphs: ["Préférez une longueur modérée avec sujet clair dès le début."], bullets: ["Éviter les titres trop vagues", "Placer le sujet principal tôt", "Supprimer les mots inutiles", "Garder les détails à la fin"] }, { heading: "Écrire d'abord pour les humains", paragraphs: ["Un titre naturel est souvent plus efficace qu'une phrase sur-optimisée.", "Utilisez le vocabulaire de votre audience."] }, { heading: "Méthode de réécriture", paragraphs: ["Rédigez une version longue puis raccourcissez.", "Retirez les répétitions et remontez l'idée centrale."] }, { heading: "Vérifier mobile + desktop", paragraphs: ["Contrôlez la coupure visuelle sur les deux formats."] }] },
  de: { title: "Wie lang sollte ein Blogtitel für bessere Lesbarkeit sein?", description: "Finde eine gut lesbare Titellänge für Suchergebnisse, Feeds und Social Preview.", intro: "Es gibt keine perfekte Einheitslänge. Zu kurze Titel sind oft unklar, zu lange wirken schwer lesbar.", categoryLabel: "Content Writing", useCasesTitle: "Hilfreich bei", useCases: ["Neue Headlines schreiben", "Alte Beiträge überarbeiten", "CTR verbessern", "Autor:innen schulen"], closingTitle: "Klarheit zuerst", closingText: "Zeichenzahl ist nur ein Werkzeug. Entscheidend ist, dass der Titel sofort verständlich ist.", relatedToolLabel: "Character Counter öffnen", sections: [{ heading: "Warum Länge wichtig ist", paragraphs: ["Nutzer scannen Suchergebnisse und Feeds sehr schnell.", "Zu lange Titel verstecken die Kernbotschaft oder werden abgeschnitten."] }, { heading: "Praktische Leitlinien", paragraphs: ["Mittlere Länge mit klarem Thema funktioniert meist am besten."], bullets: ["Keine zu vagen Kurztitel", "Hauptthema an den Anfang", "Füllwörter streichen", "Details eher ans Ende"] }, { heading: "Für Menschen schreiben", paragraphs: ["Natürliche Sprache schlägt Keyword-Stuffing.", "Formuliere so, wie deine Zielgruppe sucht und liest."] }, { heading: "Schnelle Überarbeitung", paragraphs: ["Erst lang formulieren, dann kürzen.", "Doppelte Adjektive entfernen und Kern nach vorne ziehen."] }, { heading: "Mobil und Desktop testen", paragraphs: ["Prüfe Umbruch und Kürzung in beiden Ansichten."] }] }
};

const whyOpenGraphImagesLookWrongContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "Why Open Graph Images Look Wrong on Social Media", description: "Identify the most common Open Graph image issues and fix previews that look cropped, outdated, or missing.", intro: "Social previews can look broken even when your page works perfectly in a browser. Most problems come from image size, metadata mismatch, or caching behavior on social platforms.", categoryLabel: "Social preview", useCasesTitle: "Useful when", useCases: ["Your shared image is cropped badly.", "An old thumbnail keeps showing.", "Different platforms show different previews.", "A link shows no image at all."], closingTitle: "Fix the root cause, not just the symptom", closingText: "Most OG issues are predictable. If you standardize image specs and metadata checks, your previews become far more reliable.", relatedToolLabel: "Open OG Preview",
    sections: [{ heading: "Use a predictable OG image spec", paragraphs: ["Create one standard image size for share previews and use it consistently.", "Non-standard dimensions often cause unexpected crops on different platforms."] }, { heading: "Confirm OG tags point to the right URL", paragraphs: ["Check og:image, og:title, and og:description in the live HTML source.", "Make sure og:image is an absolute URL that returns status 200 and is publicly accessible."] }, { heading: "Watch for cache delays", paragraphs: ["Platforms cache preview data and may keep old images for hours or longer.", "After updating metadata, use each platform's debug or re-scrape tool when available."], bullets: ["Update image URL when replacing files.", "Avoid reusing one filename for many versions.", "Re-check after cache refresh."] }, { heading: "Validate file quality and format", paragraphs: ["Very small files, unusual formats, or blocked image hosts can fail silently.", "Use commonly supported formats and verify the image loads without authentication."] }, { heading: "Test before posting at scale", paragraphs: ["Preview links in an OG tool before launching campaigns.", "Early validation prevents broken previews across multiple channels."] }] },
  ko: { title: "오픈 그래프 이미지가 소셜에서 이상하게 보이는 이유", description: "잘림, 누락, 구버전 노출 같은 OG 이미지 문제를 빠르게 찾고 고치는 방법입니다.", intro: "웹페이지는 정상인데 소셜 미리보기만 깨지는 경우가 많습니다. 대부분 이미지 크기, 메타데이터, 캐시 문제로 설명됩니다.", categoryLabel: "소셜 미리보기", useCasesTitle: "이럴 때 필요", useCases: ["이미지가 심하게 잘림", "예전 썸네일이 계속 노출", "플랫폼별 결과가 다름", "이미지가 아예 안 보임"], closingTitle: "증상보다 원인 해결", closingText: "이미지 규격과 메타 점검 절차를 표준화하면 OG 문제를 크게 줄일 수 있습니다.", relatedToolLabel: "OG Preview 열기", sections: [{ heading: "OG 이미지 규격 통일", paragraphs: ["공유용 이미지 크기를 하나로 정해 일관되게 사용하세요.", "비표준 비율은 플랫폼별 잘림을 유발하기 쉽습니다."] }, { heading: "OG 태그 URL 확인", paragraphs: ["og:image, og:title, og:description이 라이브 HTML에 올바른지 확인하세요.", "og:image는 절대 URL이며 200 응답과 공개 접근이 가능해야 합니다."] }, { heading: "캐시 지연 고려", paragraphs: ["소셜 플랫폼은 미리보기 데이터를 캐시합니다.", "메타 수정 후 디버거/재수집 도구를 사용하세요."], bullets: ["이미지 교체 시 URL도 갱신", "같은 파일명 재사용 최소화", "캐시 갱신 후 재확인"] }, { heading: "파일 형식/품질 점검", paragraphs: ["너무 작은 이미지나 비표준 형식은 실패할 수 있습니다.", "인증 없이 접근 가능한 일반 형식을 사용하세요."] }, { heading: "게시 전 사전 테스트", paragraphs: ["캠페인 전 OG 미리보기 도구로 링크를 확인하세요.", "사전 점검이 대량 공유 사고를 줄입니다."] }] },
  ja: { title: "SNSでOpen Graph画像が崩れる理由", description: "切り抜き・未表示・古い画像表示など、OG画像の典型トラブルを解決します。", intro: "ページは正常でもSNSプレビューだけ崩れることがあります。多くは画像サイズ、メタタグ、キャッシュが原因です。", categoryLabel: "ソーシャルプレビュー", useCasesTitle: "こんなときに有効", useCases: ["画像が大きく切れる", "古いサムネイルが出続ける", "SNSごとに表示が違う", "画像が表示されない"], closingTitle: "原因を標準化で潰す", closingText: "画像仕様とタグ確認手順を統一すれば、OGトラブルは大幅に減らせます。", relatedToolLabel: "OG Previewを開く", sections: [{ heading: "OG画像サイズを固定する", paragraphs: ["共有用画像のサイズを標準化して使い回します。", "比率が不安定だとSNSごとのトリミング差が出やすくなります。"] }, { heading: "OGタグの参照先を確認", paragraphs: ["og:image / og:title / og:description を本番HTMLで確認します。", "og:image は絶対URLで、200応答かつ公開アクセス可能である必要があります。"] }, { heading: "キャッシュ更新を考慮", paragraphs: ["SNS側はプレビューをキャッシュします。", "更新後は再スクレイプ系ツールを使って反映を確認しましょう。"], bullets: ["画像差し替え時はURLも更新", "同一ファイル名の使い回しを避ける", "再取得後に再確認"] }, { heading: "ファイル形式と配信確認", paragraphs: ["小さすぎる画像や特殊形式は失敗しやすいです。", "認証不要で読み込める一般的な形式を使います。"] }, { heading: "投稿前に必ず検証", paragraphs: ["公開前にOGプレビューで表示確認する習慣を付けましょう。"] }] },
  es: { title: "Por qué las imágenes Open Graph se ven mal en redes sociales", description: "Detecta y corrige problemas comunes de imágenes OG: recorte, caché vieja o ausencia de preview.", intro: "Aunque tu página funcione bien, la vista previa social puede fallar por tamaño de imagen, metadatos incorrectos o caché.", categoryLabel: "Vista previa social", useCasesTitle: "Útil cuando", useCases: ["La imagen se recorta mal", "Aparece una miniatura antigua", "Cada red muestra algo distinto", "No aparece imagen"], closingTitle: "Corrige la causa raíz", closingText: "Con un estándar de imagen y revisión de etiquetas, los previews sociales se vuelven mucho más estables.", relatedToolLabel: "Abrir OG Preview", sections: [{ heading: "Estandariza tamaño OG", paragraphs: ["Usa una especificación fija para imágenes de compartir.", "Dimensiones raras producen recortes distintos según plataforma."] }, { heading: "Verifica etiquetas OG", paragraphs: ["Confirma og:image, og:title y og:description en HTML publicado.", "og:image debe ser URL absoluta, pública y con respuesta 200."] }, { heading: "Considera caché de plataformas", paragraphs: ["Las redes guardan caché del preview durante un tiempo.", "Tras cambios, fuerza re-scrape cuando la plataforma lo permita."], bullets: ["Cambia también la URL al reemplazar imagen", "Evita reutilizar el mismo nombre de archivo", "Vuelve a comprobar tras refrescar caché"] }, { heading: "Formato y acceso del archivo", paragraphs: ["Formatos poco comunes o hosts bloqueados pueden fallar sin aviso.", "Usa formatos compatibles y acceso público sin login."] }, { heading: "Prueba antes de publicar", paragraphs: ["Valida links en una herramienta OG antes de campañas o anuncios."] }] },
  fr: { title: "Pourquoi les images Open Graph s'affichent mal sur les réseaux", description: "Identifiez les causes courantes d'aperçus OG incorrects et corrigez-les rapidement.", intro: "Une page peut fonctionner parfaitement, mais son aperçu social rester incorrect. Taille d'image, métadonnées et cache sont les causes les plus fréquentes.", categoryLabel: "Aperçu social", useCasesTitle: "Utile quand", useCases: ["Image recadrée bizarrement", "Ancienne miniature persistante", "Rendu différent selon réseau", "Pas d'image affichée"], closingTitle: "Traiter la cause, pas seulement l'effet", closingText: "En standardisant images et contrôles OG, vous évitez la plupart des soucis de preview.", relatedToolLabel: "Ouvrir OG Preview", sections: [{ heading: "Standardiser le format OG", paragraphs: ["Définissez une taille OG de référence et utilisez-la partout.", "Les dimensions atypiques provoquent des recadrages imprévisibles."] }, { heading: "Contrôler les balises OG", paragraphs: ["Vérifiez og:image, og:title et og:description sur la page en ligne.", "og:image doit être une URL absolue, publique, avec réponse 200."] }, { heading: "Gérer le cache social", paragraphs: ["Les plateformes conservent les aperçus en cache.", "Après mise à jour, relancez un debug/re-scrape si possible."], bullets: ["Mettre à jour l'URL lors d'un remplacement d'image", "Éviter de réutiliser toujours le même nom de fichier", "Revalider après rafraîchissement"] }, { heading: "Vérifier format et accessibilité", paragraphs: ["Formats exotiques ou images protégées peuvent empêcher l'affichage.", "Privilégiez des formats standards accessibles sans authentification."] }, { heading: "Tester avant diffusion", paragraphs: ["Prévisualisez les liens OG avant publication à grande échelle."] }] },
  de: { title: "Warum Open-Graph-Bilder in Social Media falsch aussehen", description: "Typische OG-Bildprobleme erkennen und beheben: falscher Zuschnitt, alte Vorschau oder fehlendes Bild.", intro: "Auch wenn die Seite selbst funktioniert, kann die Social-Vorschau fehlerhaft sein. Häufige Ursachen sind Bildgröße, Metadaten oder Plattform-Cache.", categoryLabel: "Social Preview", useCasesTitle: "Hilfreich wenn", useCases: ["Bild wird falsch zugeschnitten", "Altes Thumbnail bleibt sichtbar", "Plattformen zeigen unterschiedliche Vorschauen", "Gar kein Bild erscheint"], closingTitle: "Ursachen systematisch beheben", closingText: "Mit festen Bildstandards und OG-Checks werden Vorschauen deutlich zuverlässiger.", relatedToolLabel: "OG Preview öffnen", sections: [{ heading: "OG-Bildstandard festlegen", paragraphs: ["Nutze eine einheitliche Bildgröße für Shares.", "Ungewöhnliche Seitenverhältnisse führen oft zu unerwartetem Zuschnitt."] }, { heading: "OG-Tags prüfen", paragraphs: ["Kontrolliere og:image, og:title und og:description im Live-HTML.", "og:image sollte absolut, öffentlich erreichbar und per 200 verfügbar sein."] }, { heading: "Cache-Effekte beachten", paragraphs: ["Social-Plattformen cachen Vorschauen häufig länger.", "Nach Änderungen ggf. Debug/Re-Scrape ausführen."], bullets: ["Bei Bildwechsel auch URL ändern", "Nicht immer denselben Dateinamen recyceln", "Nach Refresh erneut prüfen"] }, { heading: "Dateiformat und Zugriff testen", paragraphs: ["Sehr kleine Dateien, exotische Formate oder geschützte Hosts können fehlschlagen.", "Verwende gängige Formate ohne Login-Pflicht."] }, { heading: "Vor Kampagnen testen", paragraphs: ["Links vor dem Posting in einem OG-Preview-Tool prüfen."] }] }
};

const previewSharedLinksBeforePostingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Preview Shared Links Before Posting", description: "Check social link previews before publishing so your title, description, and image look correct everywhere.", intro: "A broken preview can reduce trust and clicks even when the destination page is fine. Previewing links before posting helps catch metadata and image issues early.", categoryLabel: "Publishing workflow", useCasesTitle: "Useful for", useCases: ["Launching blog posts on social media.", "Scheduling newsletter or community links.", "Publishing campaign landing pages.", "Quality checks for multilingual content."], closingTitle: "Preview first, publish confidently", closingText: "One quick preview step prevents many avoidable mistakes and keeps shared links professional.", relatedToolLabel: "Open OG Preview", sections: [{ heading: "Check the three core elements", paragraphs: ["Every shared preview depends on title, description, and image.", "If one element is missing or weak, click-through often drops."] }, { heading: "Use a pre-post checklist", paragraphs: ["Run this checklist before sharing any important link."], bullets: ["Title matches the page intent.", "Description is clear and concise.", "Image is relevant and not cropped awkwardly.", "Final URL points to the correct locale/page."] }, { heading: "Test on multiple platforms", paragraphs: ["Different networks may render previews differently.", "Validate at least one major social platform and one messaging app when possible."] }, { heading: "Handle cache and update timing", paragraphs: ["If previews look outdated, platforms may be using cached metadata.", "Re-scrape tools or URL changes can help force refresh."] }, { heading: "Add preview checks to publishing SOP", paragraphs: ["Make link preview validation a standard editorial step.", "This keeps quality consistent across teams and channels."] }] },
  ko: { title: "게시 전에 공유 링크 미리보기 확인하는 방법", description: "링크 공유 전 제목·설명·이미지를 점검해 클릭 손실을 줄이세요.", intro: "목적지 페이지가 정상이어도 미리보기가 깨지면 신뢰와 클릭률이 떨어집니다. 게시 전 미리보기 확인이 가장 빠른 예방책입니다.", categoryLabel: "게시 워크플로", useCasesTitle: "활용 상황", useCases: ["블로그 SNS 배포", "뉴스레터 링크 점검", "캠페인 랜딩 공개", "다국어 페이지 QA"], closingTitle: "먼저 확인하고 게시", closingText: "짧은 미리보기 점검만으로도 많은 실수를 사전에 막을 수 있습니다.", relatedToolLabel: "OG Preview 열기", sections: [{ heading: "핵심 3요소 확인", paragraphs: ["미리보기 품질은 제목, 설명, 이미지로 결정됩니다.", "하나라도 약하면 클릭률이 떨어질 수 있습니다."] }, { heading: "게시 전 체크리스트", paragraphs: ["중요 링크는 아래 항목을 확인하세요."], bullets: ["제목이 페이지 의도와 일치", "설명이 간결하고 명확", "이미지가 잘리지 않고 관련성 있음", "최종 URL이 올바른 로케일/페이지를 가리킴"] }, { heading: "여러 플랫폼에서 테스트", paragraphs: ["플랫폼마다 렌더링 방식이 다를 수 있습니다.", "가능하면 주요 SNS와 메신저에서 모두 확인하세요."] }, { heading: "캐시 반영 지연 대응", paragraphs: ["구버전이 보이면 캐시 영향일 수 있습니다.", "재수집 도구나 URL 갱신으로 반영을 유도하세요."] }, { heading: "운영 프로세스에 포함", paragraphs: ["미리보기 점검을 발행 SOP에 넣으면 팀 전체 품질이 안정됩니다."] }] },
  ja: { title: "投稿前に共有リンクをプレビューする方法", description: "投稿前にタイトル・説明・画像を確認し、見栄えの悪い共有リンクを防ぎます。", intro: "リンク先が正常でも、共有プレビューが崩れるとクリック率が下がります。投稿前の確認で多くの問題を防げます。", categoryLabel: "公開フロー", useCasesTitle: "役立つ場面", useCases: ["ブログ記事のSNS投稿", "ニュースレター配信", "キャンペーンページ公開", "多言語ページの最終確認"], closingTitle: "先に確認して安心して投稿", closingText: "短いプレビュー確認を習慣化するだけで、共有品質は大きく改善します。", relatedToolLabel: "OG Previewを開く", sections: [{ heading: "まず3要素を確認", paragraphs: ["共有表示はタイトル・説明・画像の3要素が中心です。", "どれかが弱いとクリックにつながりにくくなります。"] }, { heading: "投稿前チェックリスト", paragraphs: ["重要リンクは必ず以下を確認します。"], bullets: ["タイトルがページ内容と一致", "説明が簡潔で分かりやすい", "画像が不自然に切れていない", "URLが正しいページ/言語を指している"] }, { heading: "複数サービスで確認", paragraphs: ["SNSごとに見え方が異なる場合があります。", "主要SNSとメッセージアプリで確認できると安心です."] }, { heading: "キャッシュ遅延への対応", paragraphs: ["更新後に古い表示が残る場合はキャッシュが原因です。", "再取得ツールやURL変更で更新を促せます。"] }, { heading: "運用フローに組み込む", paragraphs: ["プレビュー確認を公開手順に固定すると、品質のばらつきを防げます。"] }] },
  es: { title: "Cómo previsualizar enlaces compartidos antes de publicar", description: "Verifica previews antes de publicar para asegurar buen título, descripción e imagen en redes.", intro: "Un preview roto reduce clics aunque la página esté correcta. Revisarlo antes de publicar evita errores visibles.", categoryLabel: "Flujo de publicación", useCasesTitle: "Útil para", useCases: ["Publicar posts en redes", "Enviar newsletters", "Lanzar landing pages", "QA en sitios multilingües"], closingTitle: "Primero previsualiza", closingText: "Un paso rápido de preview mejora consistencia y evita retrabajo.", relatedToolLabel: "Abrir OG Preview", sections: [{ heading: "Revisa los 3 elementos clave", paragraphs: ["Título, descripción e imagen definen la calidad del preview.", "Si uno falla, suele bajar el CTR."] }, { heading: "Checklist antes de publicar", paragraphs: ["Usa esta lista para enlaces importantes."], bullets: ["Título alineado con la página", "Descripción clara", "Imagen relevante y sin recorte extraño", "URL final correcta"] }, { heading: "Prueba en varias plataformas", paragraphs: ["Cada red renderiza distinto.", "Valida al menos una red principal y una app de mensajería."] }, { heading: "Gestiona caché", paragraphs: ["Si ves previews antiguos, probablemente hay caché.", "Usa re-scrape o actualiza URL cuando sea necesario."] }, { heading: "Inclúyelo en el SOP", paragraphs: ["Añadir esta validación al proceso editorial evita fallos repetidos."] }] },
  fr: { title: "Comment prévisualiser un lien avant de le publier", description: "Vérifiez l'aperçu social avant publication pour garantir un rendu correct du titre, du texte et de l'image.", intro: "Un aperçu cassé peut réduire les clics même si la page est bonne. Une vérification rapide avant publication évite cela.", categoryLabel: "Workflow de publication", useCasesTitle: "Utile pour", useCases: ["Publier des articles sur les réseaux", "Préparer des newsletters", "Lancer des landing pages", "QA multilingue"], closingTitle: "Prévisualiser puis publier", closingText: "Ce contrôle prend peu de temps et améliore nettement la qualité des partages.", relatedToolLabel: "Ouvrir OG Preview", sections: [{ heading: "Vérifier les 3 éléments clés", paragraphs: ["Titre, description et image déterminent l'aperçu.", "Si un élément est faible, le taux de clic peut baisser."] }, { heading: "Checklist avant publication", paragraphs: ["Appliquez cette routine pour chaque lien important."], bullets: ["Titre aligné avec la page", "Description claire", "Image pertinente et bien cadrée", "URL finale correcte"] }, { heading: "Tester sur plusieurs plateformes", paragraphs: ["Le rendu peut varier selon les réseaux.", "Testez au moins un réseau majeur et une messagerie."] }, { heading: "Gérer les effets de cache", paragraphs: ["Un ancien aperçu peut persister à cause du cache.", "Relancez un re-scrape ou modifiez l'URL si besoin."] }, { heading: "Intégrer dans le process", paragraphs: ["Faites de cette vérification une étape standard du workflow éditorial."] }] },
  de: { title: "So prüfst du geteilte Links vor dem Posten", description: "Link-Previews vor Veröffentlichung testen, damit Titel, Beschreibung und Bild überall korrekt erscheinen.", intro: "Eine fehlerhafte Vorschau kostet Vertrauen und Klicks, obwohl die Zielseite funktioniert. Ein kurzer Vorab-Check verhindert das.", categoryLabel: "Publishing-Workflow", useCasesTitle: "Hilfreich für", useCases: ["Social-Posts", "Newsletter-Links", "Landingpage-Launches", "Mehrsprachige QA"], closingTitle: "Erst prüfen, dann posten", closingText: "Ein schneller Preview-Check spart spätere Korrekturen und hält die Qualität konsistent.", relatedToolLabel: "OG Preview öffnen", sections: [{ heading: "Die 3 Kernelemente prüfen", paragraphs: ["Titel, Beschreibung und Bild bestimmen die Vorschauqualität.", "Fehlt eines davon, sinkt oft die Klickrate."] }, { heading: "Pre-Post-Checkliste", paragraphs: ["Für wichtige Links immer diese Punkte prüfen."], bullets: ["Titel passt zur Seite", "Beschreibung ist klar", "Bild ist relevant und sauber zugeschnitten", "URL zeigt auf die richtige Seite/Locale"] }, { heading: "Plattformübergreifend testen", paragraphs: ["Darstellung variiert je nach Netzwerk.", "Mindestens ein Social-Netzwerk plus Messenger testen."] }, { heading: "Cache berücksichtigen", paragraphs: ["Veraltete Vorschau deutet oft auf Plattform-Cache hin.", "Per Re-Scrape oder URL-Update aktualisieren."] }, { heading: "In SOP aufnehmen", paragraphs: ["Preview-Prüfung als festen Schritt im Publishing-Prozess verankern."] }] }
};

const whyLargeImagesSlowDownWebsitesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Why Large Images Slow Down Your Website",
    description: "Learn why oversized images hurt load speed and how to fix them with a simple compression workflow.",
    intro: "If a page feels slow, large image files are often the biggest reason. You can usually fix this quickly by resizing and compressing only the heaviest images first.",
    categoryLabel: "Image optimization",
    useCasesTitle: "When this helps",
    useCases: ["Improving mobile load speed.", "Reducing bounce on image-heavy pages.", "Fixing slow blog hero sections.", "Preparing a faster product page."],
    closingTitle: "Speed starts with image weight",
    closingText: "You do not need perfect settings. Use a repeatable image routine and remove obvious file-size waste first.",
    relatedToolLabel: "Open Image Compressor",
    sections: [
      { heading: "Large files block fast rendering", paragraphs: ["Browsers must download image bytes before a page looks complete.", "When one hero image is huge, the first screen feels delayed for every visitor."] },
      { heading: "Mobile users feel the problem first", paragraphs: ["Phones often run on slower networks and limited data plans.", "Oversized images can make a normal page feel broken on mobile even if desktop seems fine."] },
      { heading: "Resize before compressing", paragraphs: ["Do not upload a 3000px image if your layout shows 900px.", "Reducing dimensions first often saves more weight than quality tweaks alone."], bullets: ["Match real display width.", "Compress the resized file.", "Replace only the biggest offenders first."] },
      { heading: "Check speed after each batch", paragraphs: ["Optimize a few images, then test the page quickly.", "Small iterative changes are easier to validate than a full site-wide image rewrite."] },
      { heading: "Build a lightweight publishing rule", paragraphs: ["Use a simple checklist for every new upload: right dimensions, right format, reasonable quality.", "This prevents slow pages from returning later."] }
    ]
  },
  ko: { title: "큰 이미지가 웹사이트를 느리게 만드는 이유", description: "과도한 이미지 용량이 로딩 속도를 떨어뜨리는 원인과 실용적인 해결 방법을 정리합니다.", intro: "페이지가 느리다면 가장 먼저 큰 이미지를 점검하세요. 무거운 파일 몇 개만 정리해도 체감 속도가 크게 개선됩니다.", categoryLabel: "이미지 최적화", useCasesTitle: "이럴 때 유용해요", useCases: ["모바일 로딩 개선", "이미지 많은 페이지 이탈 감소", "블로그 히어로 이미지 최적화", "상품 페이지 속도 개선"], closingTitle: "속도는 이미지 용량에서 시작", closingText: "완벽한 수치보다 반복 가능한 업로드 기준이 중요합니다.", relatedToolLabel: "Image Compressor 열기", sections: [{ heading: "큰 파일은 첫 화면 표시를 늦춥니다", paragraphs: ["이미지는 내려받아야 화면에 표시됩니다.", "히어로 이미지가 크면 첫 화면 체감 속도가 바로 느려집니다."] }, { heading: "모바일에서 문제 체감이 더 큽니다", paragraphs: ["모바일 네트워크에서는 큰 파일 영향이 더 큽니다.", "데스크톱에서 괜찮아 보여도 모바일에서는 느릴 수 있습니다."] }, { heading: "압축 전에 리사이즈", paragraphs: ["표시 폭보다 훨씬 큰 이미지는 낭비입니다.", "먼저 크기를 맞춘 뒤 압축하세요."], bullets: ["표시 크기에 맞추기", "리사이즈 후 압축", "큰 파일부터 우선 처리"] }, { heading: "배치별로 속도 확인", paragraphs: ["몇 장씩 바꾼 뒤 페이지를 확인하면 품질 관리가 쉽습니다.", "한 번에 전체 변경보다 안전합니다."] }, { heading: "게시 기준을 간단히 고정", paragraphs: ["업로드 전 크기·포맷·품질 체크를 습관화하면 재발을 막을 수 있습니다."] }] },
  ja: { title: "大きな画像がWebサイトを遅くする理由", description: "画像サイズが表示速度に与える影響と、すぐ実践できる改善手順を解説します。", intro: "ページが重いときは、まず画像容量を疑うのが近道です。大きい画像を優先的に最適化するだけで改善しやすくなります。", categoryLabel: "画像最適化", useCasesTitle: "役立つ場面", useCases: ["モバイル表示を速くしたい", "画像の多いページを軽くしたい", "ブログのヒーロー画像を調整したい", "商品ページを改善したい"], closingTitle: "速度改善は画像の軽量化から", closingText: "完璧な設定より、継続できる画像ルールを作ることが重要です。", relatedToolLabel: "Image Compressorを開く", sections: [{ heading: "大きい画像は初期表示を遅らせる", paragraphs: ["画像は表示前にダウンロードが必要です。", "特にヒーロー画像が重いと、最初の体感速度が下がります。"] }, { heading: "モバイルで影響が大きい", paragraphs: ["通信条件が弱い環境では差がさらに出ます。", "PCでは問題なく見えてもスマホでは遅く感じることがあります。"] }, { heading: "圧縮前にリサイズ", paragraphs: ["表示幅より極端に大きい画像は無駄です。", "先にサイズを合わせてから圧縮してください。"], bullets: ["表示サイズに合わせる", "リサイズ後に圧縮", "重い画像から優先対応"] }, { heading: "少しずつ改善して確認", paragraphs: ["数枚ずつ差し替えて確認すると失敗を減らせます.", "一気に全体変更するより安全です。"] }, { heading: "公開ルールを固定する", paragraphs: ["サイズ・形式・品質を毎回確認する運用にすると再発防止になります。"] }] },
  es: { title: "Por qué las imágenes grandes ralentizan tu sitio web", description: "Entiende cómo el peso de imagen afecta la velocidad y cómo corregirlo con pasos simples.", intro: "Si tu web se siente lenta, las imágenes grandes suelen ser la causa principal. Optimiza primero los archivos más pesados.", categoryLabel: "Optimización de imagen", useCasesTitle: "Cuándo ayuda", useCases: ["Mejorar carga en móvil", "Reducir rebote en páginas visuales", "Acelerar cabeceras de blog", "Optimizar páginas de producto"], closingTitle: "La velocidad empieza por el peso", closingText: "Con un proceso simple y repetible puedes evitar gran parte del problema.", relatedToolLabel: "Abrir Image Compressor", sections: [{ heading: "Archivos grandes retrasan el render", paragraphs: ["El navegador necesita descargar la imagen antes de mostrarla.", "Una sola imagen hero pesada puede afectar toda la primera vista."] }, { heading: "En móvil se nota más", paragraphs: ["Las redes móviles suelen ser más limitadas.", "Una página aceptable en desktop puede ser lenta en teléfono."] }, { heading: "Redimensiona antes de comprimir", paragraphs: ["No subas 3000px si se verá a 900px.", "Ajustar dimensiones primero suele ahorrar más peso."], bullets: ["Usa ancho real de diseño", "Comprime después", "Empieza por imágenes más pesadas"] }, { heading: "Valida por lotes pequeños", paragraphs: ["Optimiza algunas imágenes y revisa resultados.", "Iterar en bloques reduce riesgos de calidad."] }, { heading: "Define regla de publicación", paragraphs: ["Tamaño, formato y calidad deben revisarse antes de cada upload."] }] },
  fr: { title: "Pourquoi les images trop lourdes ralentissent votre site", description: "Comprenez l'impact des images volumineuses sur la vitesse et corrigez-le avec une méthode simple.", intro: "Si votre page est lente, le poids des images est souvent la cause principale. Commencez par les fichiers les plus lourds.", categoryLabel: "Optimisation d'image", useCasesTitle: "Quand c'est utile", useCases: ["Accélérer le mobile", "Réduire le rebond", "Alléger les articles de blog", "Optimiser les pages produit"], closingTitle: "La vitesse dépend du poids image", closingText: "Un processus simple et régulier suffit souvent à éviter ces lenteurs.", relatedToolLabel: "Ouvrir Image Compressor", sections: [{ heading: "Les gros fichiers retardent l'affichage", paragraphs: ["Le navigateur doit télécharger l'image avant de l'afficher.", "Une image hero trop lourde ralentit toute la première impression."] }, { heading: "Le mobile souffre davantage", paragraphs: ["Le réseau mobile est souvent plus contraint.", "Une page correcte sur desktop peut rester lente sur smartphone."] }, { heading: "Redimensionner avant compresser", paragraphs: ["Inutile d'envoyer 3000px pour un affichage à 900px.", "Adapter les dimensions d'abord réduit déjà beaucoup le poids."], bullets: ["Respecter la largeur réelle", "Compresser ensuite", "Traiter les plus gros fichiers en priorité"] }, { heading: "Vérifier par petites séries", paragraphs: ["Optimisez quelques images puis testez.", "Des itérations courtes limitent les erreurs de qualité."] }, { heading: "Formaliser une règle d'upload", paragraphs: ["Contrôlez taille, format et qualité à chaque publication."] }] },
  de: { title: "Warum große Bilder deine Website verlangsamen", description: "So wirken übergroße Bilddateien auf Ladezeit und so behebst du es mit einem einfachen Ablauf.", intro: "Wenn Seiten langsam laden, sind große Bilder oft der Hauptgrund. Optimiere zuerst die größten Dateien.", categoryLabel: "Bildoptimierung", useCasesTitle: "Wann das hilft", useCases: ["Mobile Ladezeit verbessern", "Absprungrate senken", "Blog-Header beschleunigen", "Produktseiten optimieren"], closingTitle: "Tempo beginnt bei Bildgröße", closingText: "Mit klaren Upload-Regeln lassen sich viele Performance-Probleme vermeiden.", relatedToolLabel: "Image Compressor öffnen", sections: [{ heading: "Große Dateien verzögern den Aufbau", paragraphs: ["Bilder müssen erst geladen werden, bevor sie sichtbar sind.", "Ein zu großes Hero-Bild kann die komplette erste Ansicht ausbremsen."] }, { heading: "Mobil ist der Effekt stärker", paragraphs: ["Mobile Netzwerke sind oft langsamer.", "Desktop wirkt okay, Smartphone bleibt trotzdem träge."] }, { heading: "Vor Kompression skalieren", paragraphs: ["Keine 3000px hochladen, wenn 900px angezeigt werden.", "Erst verkleinern spart häufig mehr als reine Qualitätsänderung."], bullets: ["Auf reale Breite anpassen", "Danach komprimieren", "Mit größten Dateien starten"] }, { heading: "In kleinen Batches prüfen", paragraphs: ["Ein paar Bilder optimieren, dann Seite testen.", "So bleibt die Qualität besser kontrollierbar."] }, { heading: "Upload-Standard festlegen", paragraphs: ["Größe, Format und Qualität vor jedem Upload kurz prüfen."] }] }
};

const optimizeBlogImagesBeforeUploadingEn: GuideLocalizedContent = {
  title: "How to Optimize Blog Images Before Uploading",
  description: "A practical pre-upload checklist to keep blog images clear while reducing page weight.",
  intro: "Publishing directly from camera or design exports usually creates oversized blog images. A short pre-upload process saves bandwidth and keeps posts fast.",
  categoryLabel: "Image optimization",
  useCasesTitle: "Use this when",
  useCases: ["Publishing tutorials with screenshots.", "Preparing long-form blog posts.", "Improving mobile readability.", "Updating older slow articles."],
  closingTitle: "Optimize once, publish faster",
  closingText: "A 2-minute image check before uploading prevents most blog image performance issues.",
  relatedToolLabel: "Open Image Compressor",
  sections: [
    { heading: "Set a target width per content block", paragraphs: ["Define a default width for hero images and inline images.", "This avoids random image sizes across posts and reduces file waste."] },
    { heading: "Pick format by content type", paragraphs: ["Use JPG/WebP for photos and PNG for diagrams needing crisp edges or transparency.", "Avoid using one format for everything just out of habit."] },
    { heading: "Compress with readability in mind", paragraphs: ["Blog screenshots must keep text readable after compression.", "Test a small quality range and keep the lightest acceptable version."], bullets: ["Check text labels at normal zoom.", "Review mobile view once.", "Avoid aggressive compression on charts."] },
    { heading: "Rename and organize files before upload", paragraphs: ["Use clear file names so your media library stays maintainable.", "Consistent naming also helps when replacing old files later."] },
    { heading: "Preview the post before publishing", paragraphs: ["Open the draft on desktop and mobile to confirm quality and loading.", "If an image still looks heavy, optimize that file again before publishing."] }
  ]
};

const optimizeBlogImagesBeforeUploadingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: optimizeBlogImagesBeforeUploadingEn,
  ko: { ...optimizeBlogImagesBeforeUploadingEn, title: "업로드 전에 블로그 이미지를 최적화하는 방법", description: "블로그 게시 전 이미지 용량과 품질을 빠르게 점검하는 실무 체크리스트입니다.", intro: "원본 이미지를 그대로 올리면 블로그가 쉽게 느려집니다. 업로드 전에 짧게 정리하면 속도와 품질을 함께 지킬 수 있습니다." },
  ja: { ...optimizeBlogImagesBeforeUploadingEn, title: "アップロード前にブログ画像を最適化する方法", description: "ブログ画像を軽くしつつ見やすさを保つ、公開前チェック手順です。", intro: "元画像をそのまま投稿すると記事が重くなりがちです。公開前の短い最適化で読みやすさと速度を両立できます。" },
  es: { ...optimizeBlogImagesBeforeUploadingEn, title: "Cómo optimizar imágenes de blog antes de subirlas", description: "Checklist práctico para reducir peso sin perder claridad en tus artículos.", intro: "Subir imágenes sin ajustar suele ralentizar el blog. Un proceso corto antes de publicar mejora velocidad y experiencia." },
  fr: { ...optimizeBlogImagesBeforeUploadingEn, title: "Comment optimiser les images de blog avant publication", description: "Checklist simple pour alléger vos images de blog sans perdre la lisibilité.", intro: "Publier des images brutes alourdit vite un article. Une préparation rapide avant upload améliore nettement la vitesse." },
  de: { ...optimizeBlogImagesBeforeUploadingEn, title: "So optimierst du Blogbilder vor dem Upload", description: "Praktische Checkliste, um Blogbilder kleiner zu machen und trotzdem gut lesbar zu halten.", intro: "Unbearbeitete Originalbilder verlangsamen Blogseiten schnell. Ein kurzer Vorab-Workflow verbessert Tempo und Lesbarkeit." }
};

const imageCompressionMistakesThatHurtQualityEn: GuideLocalizedContent = {
  title: "Image Compression Mistakes That Hurt Quality",
  description: "Avoid common compression errors that make website images blurry, noisy, or unreadable.",
  intro: "Image compression should reduce size, not destroy clarity. Most quality issues come from a few avoidable workflow mistakes.",
  categoryLabel: "Image optimization",
  useCasesTitle: "Common situations",
  useCases: ["Blurry blog screenshots.", "Noisy product photos.", "Over-compressed hero images.", "Inconsistent image quality across pages."],
  closingTitle: "Small fixes make a big difference",
  closingText: "Set simple compression rules and compare output in real page context before publishing.",
  relatedToolLabel: "Open Image Compressor",
  sections: [
    { heading: "Mistake 1: compressing without resizing first", paragraphs: ["Large dimensions plus strong compression can still look bad and stay heavy.", "Resize to real display width before adjusting quality."] },
    { heading: "Mistake 2: using one quality value for every image", paragraphs: ["A universal setting rarely works across photos, screenshots, and graphics.", "Test by content type instead of forcing one number."] },
    { heading: "Mistake 3: checking only at extreme zoom", paragraphs: ["Zoomed inspection can hide how files look in actual layout.", "Always review images where users actually see them."], bullets: ["Check mobile first.", "Review text in screenshots.", "Confirm skin tones and edges look natural."] },
    { heading: "Mistake 4: repeated re-export cycles", paragraphs: ["Saving the same lossy image many times can stack quality loss.", "Keep a high-quality source and export web versions from it."] },
    { heading: "Mistake 5: ignoring format fit", paragraphs: ["Wrong format choice can force aggressive compression.", "Use formats based on content needs, not habit."] }
  ]
};

const imageCompressionMistakesThatHurtQualityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: imageCompressionMistakesThatHurtQualityEn,
  ko: { ...imageCompressionMistakesThatHurtQualityEn, title: "화질을 망치는 이미지 압축 실수", description: "이미지가 흐려지거나 깨져 보이게 만드는 대표 압축 실수를 정리합니다.", intro: "압축의 목적은 용량 절감이지 화질 파괴가 아닙니다. 대부분의 문제는 간단한 실수에서 시작됩니다." },
  ja: { ...imageCompressionMistakesThatHurtQualityEn, title: "画質を落とす画像圧縮の失敗例", description: "画像をぼやけさせる圧縮ミスと、避けるための基本ルールを解説します。", intro: "圧縮は軽量化のための手段です。見た目が悪くなる場合はワークフローの見直しで改善できます。" },
  es: { ...imageCompressionMistakesThatHurtQualityEn, title: "Errores de compresión de imagen que dañan la calidad", description: "Evita errores comunes que vuelven tus imágenes borrosas o poco legibles.", intro: "Comprimir no debería arruinar la imagen. La mayoría de problemas vienen de pasos mal aplicados." },
  fr: { ...imageCompressionMistakesThatHurtQualityEn, title: "Erreurs de compression qui dégradent la qualité d'image", description: "Évitez les erreurs fréquentes qui rendent les images floues ou trop dégradées.", intro: "La compression doit alléger, pas détériorer. Quelques mauvaises pratiques expliquent la plupart des défauts visuels." },
  de: { ...imageCompressionMistakesThatHurtQualityEn, title: "Kompressionsfehler, die Bildqualität verschlechtern", description: "Diese häufigen Fehler machen Webbilder unscharf oder unlesbar – und so vermeidest du sie.", intro: "Kompression soll Dateigröße senken, nicht Bildqualität zerstören. Die meisten Probleme sind leicht vermeidbar." }
};

const compressImagesWithoutMakingThemLookBadEn: GuideLocalizedContent = {
  title: "How to Compress Images Without Making Them Look Bad",
  description: "Use a simple workflow to reduce file size while keeping images clear for real website visitors.",
  intro: "Compression should make pages faster, not make images look broken. The best approach is to resize first, test a small quality range, and compare files in the same layout where users will see them.",
  categoryLabel: "Image optimization",
  useCasesTitle: "When this guide helps",
  useCases: ["You need lighter images but still want a clean professional look.", "Your screenshots become blurry after compression.", "You want a repeatable quality check before upload.", "You need practical settings for mixed image types."],
  closingTitle: "Aim for clear enough, not perfect",
  closingText: "A practical quality target beats guesswork. Keep source files safe, export a web version, and publish the smallest version that still looks clear in context.",
  relatedToolLabel: "Open Image Compressor",
  sections: [
    { heading: "Resize before you compress", paragraphs: ["If the page shows an image at 1000px width, uploading a 3000px file wastes bandwidth.", "Set dimensions close to real display size first, then compress for better results with fewer artifacts."] },
    { heading: "Choose format by image type", paragraphs: ["Use JPG for photos, PNG for graphics that need clean edges or transparency, and WebP when you want a strong size-to-quality balance.", "Using the wrong format forces heavier compression and hurts quality faster."] },
    { heading: "Test a small quality range", paragraphs: ["Instead of guessing one value, compare nearby settings such as 80, 70, and 60.", "Small drops often save a lot of size while staying visually acceptable."], bullets: ["Check screenshot text readability.", "Look at faces and edges at normal zoom.", "Prefer slightly smaller files on mobile-first pages."] },
    { heading: "Review in real page context", paragraphs: ["Do not judge only from editor previews at extreme zoom.", "Open your draft page on desktop and mobile to confirm the image still supports the content."] },
    { heading: "Keep one clean source file", paragraphs: ["Repeatedly compressing the same lossy file can stack artifacts.", "Store one high-quality original and export fresh compressed versions for upload."] }
  ]
};

const compressImagesWithoutMakingThemLookBadContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: compressImagesWithoutMakingThemLookBadEn,
  ko: { ...compressImagesWithoutMakingThemLookBadEn, title: "이미지를 망치지 않고 압축하는 방법", description: "파일 용량은 줄이고 시각 품질은 유지하는 실무형 이미지 압축 방법입니다.", intro: "압축의 목적은 속도 개선이지 화질 저하가 아닙니다. 리사이즈 후 품질 범위를 비교하면 초보자도 안정적으로 결과를 맞출 수 있습니다." },
  ja: { ...compressImagesWithoutMakingThemLookBadEn, title: "見た目を崩さずに画像を圧縮する方法", description: "容量を減らしながら、Webで十分きれいに見える品質を保つ実践手順です。", intro: "圧縮はページ速度を上げるための作業です。リサイズ→品質比較→実ページ確認の順で進めると失敗を減らせます。" },
  es: { ...compressImagesWithoutMakingThemLookBadEn, title: "Cómo comprimir imágenes sin que se vean mal", description: "Reduce peso de archivo manteniendo una calidad visual clara para web.", intro: "Comprimir no debe arruinar tus imágenes. Con redimensionado previo y una comparación rápida de calidad puedes lograr buen equilibrio." },
  fr: { ...compressImagesWithoutMakingThemLookBadEn, title: "Comment compresser des images sans les dégrader visuellement", description: "Réduisez le poids des fichiers tout en gardant un rendu propre pour le web.", intro: "La compression doit accélérer vos pages, pas casser le rendu. Redimensionnez d'abord, testez quelques niveaux de qualité, puis validez dans la vraie mise en page." },
  de: { ...compressImagesWithoutMakingThemLookBadEn, title: "Bilder komprimieren, ohne dass sie schlecht aussehen", description: "Dateigröße reduzieren und trotzdem eine klare, webtaugliche Bildqualität behalten.", intro: "Komprimierung soll Seiten schneller machen, nicht Bilder ruinieren. Mit Resize, Qualitätsvergleich und kurzer Layout-Prüfung gelingt der richtige Kompromiss." }
};

const bestImageCompressionSettingsForWebEn: GuideLocalizedContent = {
  title: "Best Image Compression Settings for Blog and Website Uploads",
  description: "Set practical compression defaults for website uploads so images stay clear while pages load faster.",
  intro: "Many teams waste time guessing image settings for every upload. A simple baseline by image type helps you ship faster and keep quality consistent across blog posts, landing pages, and product pages.",
  categoryLabel: "Image optimization",
  useCasesTitle: "Use this when",
  useCases: ["You want a default quality starting point for uploads.", "Your blog images are inconsistent from post to post.", "You need lightweight files for mobile visitors.", "You are documenting a team image workflow."],
  closingTitle: "Start with defaults, then adjust",
  closingText: "Good defaults reduce decision fatigue. Begin with a practical range, then raise or lower quality only when a specific image needs it.",
  relatedToolLabel: "Open Image Compressor",
  sections: [
    { heading: "Set baseline quality by image type", paragraphs: ["Photos usually work well with medium compression, while screenshots may need slightly higher quality to keep text readable.", "Create one baseline for photos and one for text-heavy images so uploads stay consistent."] },
    { heading: "Use dimension limits before quality tuning", paragraphs: ["File size drops faster when dimensions match layout width.", "For many websites, right-sizing dimensions saves more bytes than aggressive quality reduction."] },
    { heading: "Recommended practical starting points", paragraphs: ["Use these as starting values, then adjust based on visual checks."], bullets: ["Blog photos: JPG/WebP around medium-high quality.", "Screenshots with text: keep quality a bit higher.", "Small UI graphics: compare PNG and WebP before choosing.", "Hero images: test on mobile first."] },
    { heading: "Check file size targets per placement", paragraphs: ["Different placements can handle different weight limits.", "Set rough targets for thumbnails, inline images, and hero visuals so uploads stay predictable."] },
    { heading: "Build a simple upload checklist", paragraphs: ["A repeatable checklist keeps quality and performance aligned across teammates."], bullets: ["Resize to real display width.", "Apply baseline compression setting.", "Review quickly on desktop and mobile.", "Publish the smallest clear version."] }
  ]
};

const bestImageCompressionSettingsForWebContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: bestImageCompressionSettingsForWebEn,
  ko: { ...bestImageCompressionSettingsForWebEn, title: "블로그와 웹 업로드를 위한 이미지 압축 최적 설정", description: "웹 업로드용 이미지 압축 기본값을 정해 품질과 속도를 함께 관리하는 방법입니다.", intro: "매번 감으로 설정하면 결과가 들쑥날쑥해집니다. 이미지 유형별 기본값을 정하면 게시 속도와 품질 일관성을 동시에 확보할 수 있습니다." },
  ja: { ...bestImageCompressionSettingsForWebEn, title: "ブログ・Webアップロード向け画像圧縮の最適設定", description: "Web掲載用画像で使いやすい圧縮設定の基準をまとめた実践ガイドです。", intro: "毎回設定を悩むより、画像タイプごとの基準を決める方が効率的です。品質のばらつきも減らせます。" },
  es: { ...bestImageCompressionSettingsForWebEn, title: "Mejores ajustes de compresión de imágenes para web y blog", description: "Define valores base de compresión para subir imágenes claras y livianas.", intro: "Si ajustas cada imagen desde cero, pierdes tiempo y consistencia. Con reglas simples por tipo de imagen puedes publicar más rápido." },
  fr: { ...bestImageCompressionSettingsForWebEn, title: "Meilleurs réglages de compression pour images de blog et site web", description: "Définissez des réglages pratiques pour garder des images nettes et légères lors des uploads.", intro: "Sans réglages de base, la qualité varie trop d'un article à l'autre. Des valeurs par type d'image rendent le workflow plus fiable." },
  de: { ...bestImageCompressionSettingsForWebEn, title: "Beste Bildkomprimierungs-Einstellungen für Blog- und Website-Uploads", description: "Praktische Standardwerte für Uploads, damit Bilder klar bleiben und Seiten schneller laden.", intro: "Wer bei jedem Upload neu rät, verliert Zeit. Mit Basiswerten pro Bildtyp werden Qualität und Performance deutlich konsistenter." }
};

const resizeImageBeforeCompressingEn: GuideLocalizedContent = {
  title: "When to Resize an Image Before Compressing It",
  description: "Learn when resizing first gives better image quality and smaller files than compression alone.",
  intro: "Compression is important, but many file-size problems start with oversized dimensions. Resizing to match real layout width often removes more weight and protects visual quality at the same time.",
  categoryLabel: "Image optimization",
  useCasesTitle: "When this guide helps",
  useCases: ["You upload high-resolution originals to relatively small layouts.", "Compressed files still feel too heavy.", "Images look soft after strong compression.", "You need a repeatable pre-upload workflow."],
  closingTitle: "Resize first in most web workflows",
  closingText: "If display size is much smaller than source size, resize first. Then apply moderate compression and validate the result in real page context.",
  relatedToolLabel: "Open Image Compressor",
  sections: [
    { heading: "Why dimensions matter more than many teams expect", paragraphs: ["A 3200px image shown at 900px carries unnecessary pixel data.", "That extra data increases transfer size and often forces harsher compression settings later."] },
    { heading: "Clear signs you should resize first", paragraphs: ["Use resizing first when source dimensions are much larger than layout width or when quality drops quickly under compression."], bullets: ["Hero image rendered far smaller than source.", "Blog inline image looks tiny in layout but file is large.", "Text in screenshots becomes blurry at lower quality settings."] },
    { heading: "Simple resize-then-compress workflow", paragraphs: ["Set width close to maximum display width, then run compression with moderate settings.", "This sequence usually preserves detail better than aggressive compression on oversized files."] },
    { heading: "How to decide target dimensions", paragraphs: ["Check your page layout and pick practical widths for each image slot.", "Keep a few standard sizes for thumbnails, inline visuals, and hero images to reduce guesswork."] },
    { heading: "Final quality check before upload", paragraphs: ["Preview the resized and compressed image in the actual page draft.", "If details still look clear on mobile and desktop, your workflow is ready to reuse."] }
  ]
};

const resizeImageBeforeCompressingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: resizeImageBeforeCompressingEn,
  ko: { ...resizeImageBeforeCompressingEn, title: "압축 전에 이미지를 먼저 리사이즈해야 하는 경우", description: "압축만 할 때보다 리사이즈를 먼저 해야 더 좋은 품질과 작은 용량을 얻는 상황을 설명합니다.", intro: "용량 문제의 시작은 압축이 아니라 과한 해상도인 경우가 많습니다. 표시 크기에 맞춰 줄인 뒤 압축하면 결과가 훨씬 안정적입니다." },
  ja: { ...resizeImageBeforeCompressingEn, title: "圧縮前に画像をリサイズすべきタイミング", description: "圧縮だけでなく先にリサイズした方が良いケースをわかりやすく解説します。", intro: "容量の原因は圧縮不足より、サイズ過剰であることが少なくありません。表示幅に合わせてから圧縮する方が品質を守りやすいです。" },
  es: { ...resizeImageBeforeCompressingEn, title: "Cuándo redimensionar una imagen antes de comprimirla", description: "Identifica cuándo conviene redimensionar primero para lograr mejor calidad y menor peso.", intro: "Muchos archivos pesados no necesitan más compresión, sino menos dimensiones. Ajustar tamaño al layout suele dar mejores resultados." },
  fr: { ...resizeImageBeforeCompressingEn, title: "Quand redimensionner une image avant de la compresser", description: "Comprenez quand le redimensionnement préalable donne un meilleur rendu et un poids plus faible.", intro: "Les problèmes de poids viennent souvent d'images trop grandes pour l'affichage réel. Redimensionner d'abord améliore souvent le résultat final." },
  de: { ...resizeImageBeforeCompressingEn, title: "Wann du ein Bild vor der Komprimierung skalieren solltest", description: "Erkenne, wann Skalieren vor dem Komprimieren bessere Qualität und kleinere Dateien bringt.", intro: "Dateigröße-Probleme entstehen oft durch übergroße Abmessungen. Erst auf reale Anzeigegröße skalieren, dann moderat komprimieren, liefert meist das beste Ergebnis." }
};

const resizeImagesForSocialMediaWithoutBadCroppingEn: GuideLocalizedContent = {
  title: "How to Resize Images for Social Media Without Cropping Them Wrong",
  description: "Resize social images with fewer framing mistakes so important text and faces stay visible on every platform.",
  intro: "A social image can look perfect in one preview and broken in another. The safest workflow is to resize from a clear focal point, leave edge-safe space, and export each platform size intentionally.",
  categoryLabel: "Image resizing",
  useCasesTitle: "Use this when",
  useCases: [
    "Creating one campaign image for multiple social channels.",
    "Avoiding cut-off faces, logos, or CTA text in previews.",
    "Preparing feed and link preview images quickly.",
    "Building a repeatable social publishing checklist."
  ],
  closingTitle: "Design once, resize with safe margins",
  closingText: "Start from a flexible source image, keep key content centered, and export per-platform sizes to avoid last-minute cropping surprises.",
  relatedToolLabel: "Open Image Resizer",
  sections: [
    {
      heading: "Start from a master image with extra edge space",
      paragraphs: [
        "If text or logos sit too close to the border, auto-cropping can cut them off.",
        "Keep important elements away from edges before you make size variants."
      ]
    },
    {
      heading: "Use target dimensions by placement, not one-size-for-all",
      paragraphs: [
        "Feed posts, stories, and link previews often use different aspect ratios.",
        "Resize separately for each placement instead of forcing one export everywhere."
      ],
      bullets: [
        "Square or vertical for feed variants.",
        "Wide format for Open Graph/link previews.",
        "Story format for full-screen social placements."
      ]
    },
    {
      heading: "Keep the focal point visible after resizing",
      paragraphs: [
        "Check faces, product shots, and CTA text first.",
        "If content feels too tight, reduce text size or increase safe margins before final export."
      ]
    },
    {
      heading: "Do a quick cross-platform preview check",
      paragraphs: [
        "Before posting, preview how the image appears in at least one feed and one link preview context.",
        "A 30-second check prevents most cropping mistakes."
      ]
    },
    {
      heading: "Save platform-ready versions clearly",
      paragraphs: [
        "Use consistent file naming so you always upload the correct version.",
        "Simple labels like -feed, -story, and -og reduce mix-ups under publishing pressure."
      ]
    }
  ]
};

const resizeImagesForSocialMediaWithoutBadCroppingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: resizeImagesForSocialMediaWithoutBadCroppingEn,
  ko: { ...resizeImagesForSocialMediaWithoutBadCroppingEn, title: "소셜 미디어 이미지, 잘못된 크롭 없이 리사이즈하는 방법", description: "얼굴·텍스트가 잘리지 않도록 소셜 이미지 크기를 안전하게 맞추는 실전 가이드입니다.", intro: "한 플랫폼에서는 괜찮아 보여도 다른 미리보기에서는 잘리는 경우가 많습니다. 핵심 요소를 중심에 두고 플랫폼별 크기로 따로 내보내면 실수를 크게 줄일 수 있습니다." },
  ja: { ...resizeImagesForSocialMediaWithoutBadCroppingEn, title: "SNS画像を不自然にトリミングせずにリサイズする方法", description: "顔やテキストを切らずにSNS用画像を安全に調整する実践ガイドです。", intro: "あるSNSでは問題なく見えても、別のプレビューで欠けることがあります。重要要素を中央寄せにし、用途別サイズで書き出すのが安全です。" },
  es: { ...resizeImagesForSocialMediaWithoutBadCroppingEn, title: "Cómo redimensionar imágenes para redes sociales sin recortarlas mal", description: "Ajusta imágenes para redes sin cortar texto, caras o elementos clave.", intro: "Una imagen puede verse bien en una plataforma y mal recortada en otra. Trabaja con márgenes de seguridad y exporta tamaños por canal." },
  fr: { ...resizeImagesForSocialMediaWithoutBadCroppingEn, title: "Comment redimensionner des images pour les réseaux sociaux sans mauvais recadrage", description: "Évitez de couper visages et textes importants en adaptant correctement vos formats sociaux.", intro: "Une image peut sembler correcte sur une plateforme et mal cadrée ailleurs. Gardez les éléments clés au centre et exportez par format." },
  de: { ...resizeImagesForSocialMediaWithoutBadCroppingEn, title: "So skalierst du Social-Media-Bilder ohne falsches Zuschneiden", description: "Passe Social-Bilder so an, dass Gesichter, Logos und Text nicht abgeschnitten werden.", intro: "Ein Bild kann auf einer Plattform gut aussehen und auf einer anderen falsch gecroppt werden. Mit Safe-Zonen und formatbezogenen Exporten vermeidest du das." }
};

const bestImageDimensionsForBlogHeadersAndThumbnailsEn: GuideLocalizedContent = {
  title: "Best Image Dimensions for Blog Headers and Thumbnails",
  description: "Pick practical blog header and thumbnail dimensions so posts look consistent and load faster across devices.",
  intro: "Inconsistent image sizing makes blogs look messy and can slow pages down. A small set of standard dimensions for headers and thumbnails keeps publishing faster and cleaner.",
  categoryLabel: "Image resizing",
  useCasesTitle: "Use this when",
  useCases: ["Setting image size rules for a blog template.", "Preparing featured images for new posts.", "Cleaning up inconsistent thumbnail layouts.", "Improving mobile readability and page speed."],
  closingTitle: "Set standards and reuse them",
  closingText: "Define a few reliable sizes, apply them consistently, and your blog visuals will look cleaner with less editing time.",
  relatedToolLabel: "Open Image Resizer",
  sections: [
    {
      heading: "Set one default size for blog headers",
      paragraphs: [
        "Choose a clear header width that matches your content area.",
        "Using one repeatable header size keeps page rhythm and reduces manual tweaking."
      ]
    },
    {
      heading: "Use smaller, consistent thumbnail ratios",
      paragraphs: [
        "Thumbnails should stay visually aligned in cards and sidebars.",
        "Pick one ratio and keep it across category pages and home feeds."
      ],
      bullets: ["Use one shared thumbnail aspect ratio.", "Keep text overlays short and centered.", "Avoid mixing portrait and landscape thumbnails in one grid."]
    },
    {
      heading: "Resize for display width, then optimize file weight",
      paragraphs: [
        "Large source files do not improve quality if the rendered slot is smaller.",
        "Resize first, then compress for faster loading and clearer workflow decisions."
      ]
    },
    {
      heading: "Check desktop and mobile crop behavior",
      paragraphs: [
        "Header and thumbnail framing can shift on small screens.",
        "Always preview your selected dimensions in both layouts before publishing."
      ]
    },
    {
      heading: "Keep a mini size guide for your team",
      paragraphs: [
        "A simple shared document avoids repeated guessing.",
        "Include approved widths, ratios, and file naming rules for faster uploads."
      ]
    }
  ]
};

const bestImageDimensionsForBlogHeadersAndThumbnailsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: bestImageDimensionsForBlogHeadersAndThumbnailsEn,
  ko: { ...bestImageDimensionsForBlogHeadersAndThumbnailsEn, title: "블로그 헤더와 썸네일에 가장 좋은 이미지 크기", description: "헤더와 썸네일 크기를 표준화해 블로그를 더 깔끔하고 빠르게 운영하는 방법입니다.", intro: "이미지 크기가 들쑥날쑥하면 블로그 완성도가 떨어지고 로딩도 느려집니다. 헤더/썸네일 기본 규격을 정하면 게시 속도와 품질이 함께 좋아집니다." },
  ja: { ...bestImageDimensionsForBlogHeadersAndThumbnailsEn, title: "ブログのヘッダー画像とサムネイルに最適なサイズ", description: "ヘッダーとサムネイルの寸法を揃えて、見た目と表示速度を両立する実践ガイドです。", intro: "画像サイズがバラバラだと記事一覧が乱れて見えます。標準サイズを決めると更新作業が速くなり品質も安定します。" },
  es: { ...bestImageDimensionsForBlogHeadersAndThumbnailsEn, title: "Mejores dimensiones de imagen para encabezados y miniaturas de blog", description: "Define tamaños consistentes para encabezados y miniaturas y mejora apariencia y velocidad.", intro: "Cuando cada imagen tiene medidas distintas, el blog se ve desordenado. Con tamaños base claros publicas más rápido y con mejor consistencia visual." },
  fr: { ...bestImageDimensionsForBlogHeadersAndThumbnailsEn, title: "Meilleures dimensions d'image pour les en-têtes et miniatures de blog", description: "Choisissez des dimensions cohérentes pour des articles plus propres et plus rapides à charger.", intro: "Des tailles d'image incohérentes donnent un rendu brouillon. Des formats standards simplifient la publication et améliorent la lisibilité." },
  de: { ...bestImageDimensionsForBlogHeadersAndThumbnailsEn, title: "Beste Bildmaße für Blog-Header und Thumbnails", description: "Lege klare Größen für Header und Thumbnails fest, damit dein Blog einheitlich und schneller wirkt.", intro: "Uneinheitliche Bildgrößen lassen Blogs unruhig wirken. Mit festen Standardmaßen veröffentlichst du schneller und mit konsistenter Qualität." }
};

const resizeImageWithoutStretchingEn: GuideLocalizedContent = {
  title: "How to Resize an Image Without Stretching It",
  description: "Keep image proportions correct while resizing so photos, screenshots, and graphics stay natural and readable.",
  intro: "Stretched images usually come from changing width and height independently without preserving aspect ratio. A simple ratio-first workflow prevents distortion and saves rework.",
  categoryLabel: "Image resizing",
  useCasesTitle: "Use this when",
  useCases: ["Your resized images look squashed or widened.", "Screenshot text becomes oddly stretched after editing.", "You need clean visuals for blog or product pages.", "You want a repeatable beginner-friendly resizing process."],
  closingTitle: "Protect aspect ratio first",
  closingText: "If you keep proportions locked and resize to real display width, most stretching problems disappear immediately.",
  relatedToolLabel: "Open Image Resizer",
  sections: [
    {
      heading: "Understand what causes stretching",
      paragraphs: [
        "Every image has a native width-to-height ratio.",
        "When you force both dimensions to unrelated numbers, the picture distorts."
      ]
    },
    {
      heading: "Keep aspect ratio lock enabled by default",
      paragraphs: [
        "Set either width or height first and let the other value auto-adjust.",
        "This preserves natural shape for people, products, UI screenshots, and logos."
      ]
    },
    {
      heading: "Resize to real layout targets",
      paragraphs: [
        "Pick dimensions based on where the image will actually appear.",
        "Matching layout width reduces guesswork and prevents unnecessary edits."
      ],
      bullets: ["Check the image slot width in your page builder.", "Use one standard width per placement type.", "Export a second size only when layout truly differs."]
    },
    {
      heading: "Use crop only when composition needs it",
      paragraphs: [
        "Cropping can improve framing, but it should be intentional.",
        "Do not use random cropping as a fix for stretched outputs."
      ]
    },
    {
      heading: "Do a final visual check before upload",
      paragraphs: [
        "Preview at normal zoom on desktop and mobile.",
        "If circles, faces, or text look natural, your resize settings are safe to reuse."
      ]
    }
  ]
};

const resizeImageWithoutStretchingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: resizeImageWithoutStretchingEn,
  ko: { ...resizeImageWithoutStretchingEn, title: "이미지를 늘어짐 없이 리사이즈하는 방법", description: "가로세로 비율을 유지해 사진·스크린샷을 자연스럽게 리사이즈하는 실무 가이드입니다.", intro: "이미지가 찌그러지는 가장 큰 이유는 비율을 유지하지 않고 가로·세로를 따로 바꾸기 때문입니다. 비율 우선 방식만 지켜도 대부분의 왜곡을 막을 수 있습니다." },
  ja: { ...resizeImageWithoutStretchingEn, title: "画像を引き伸ばさずにリサイズする方法", description: "縦横比を崩さずに、写真やスクリーンショットを自然にリサイズする方法を解説します。", intro: "画像の伸びは、縦横比を無視して幅と高さを個別に変更すると起こります。比率固定を基本にすると失敗を防げます。" },
  es: { ...resizeImageWithoutStretchingEn, title: "Cómo redimensionar una imagen sin estirarla", description: "Mantén la proporción correcta al cambiar tamaño para evitar deformaciones.", intro: "Las imágenes estiradas suelen venir de cambiar ancho y alto sin respetar la proporción. Un flujo simple con proporción bloqueada evita ese problema." },
  fr: { ...resizeImageWithoutStretchingEn, title: "Comment redimensionner une image sans l'étirer", description: "Conservez les bonnes proportions lors du redimensionnement pour éviter toute déformation.", intro: "Les images étirées viennent souvent d'une largeur et d'une hauteur modifiées séparément. Garder le ratio verrouillé évite ce défaut." },
  de: { ...resizeImageWithoutStretchingEn, title: "So änderst du die Bildgröße ohne Verzerrung", description: "Halte das Seitenverhältnis korrekt, damit Fotos und Screenshots natürlich aussehen.", intro: "Verzerrte Bilder entstehen meist, wenn Breite und Höhe unabhängig gesetzt werden. Mit festem Seitenverhältnis vermeidest du das zuverlässig." }
};

const unixTimestampSecondsVsMillisecondsEn: GuideLocalizedContent = {
  title: "Unix Timestamp in Seconds vs Milliseconds Explained",
  description: "Understand the difference between second and millisecond timestamps so date conversions stop breaking.",
  intro: "Many timestamp bugs come from mixing seconds and milliseconds. Once you know how to spot the scale, conversion becomes quick and reliable.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Useful when",
  useCases: ["Debugging API date fields.", "Fixing JavaScript date parsing.", "Reading logs from mixed systems.", "Validating webhook payloads."],
  closingTitle: "Always check timestamp scale first",
  closingText: "Before converting any timestamp, identify whether it is 10 digits (seconds) or 13 digits (milliseconds).",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "The key difference in one line", paragraphs: ["Seconds-based Unix timestamps are usually 10 digits.", "Milliseconds-based timestamps are usually 13 digits."] },
    { heading: "Why the mismatch happens", paragraphs: ["Backend systems may store seconds while frontend tools expect milliseconds.", "Copying values between systems without checking units creates wrong dates."] },
    { heading: "Quick detection workflow", paragraphs: ["Start by checking digit length, then convert using the correct unit."], bullets: ["10 digits: treat as seconds.", "13 digits: treat as milliseconds.", "If unsure, test both and validate expected year/timezone."] },
    { heading: "Common JavaScript pitfall", paragraphs: ["JavaScript Date APIs usually expect milliseconds.", "Passing a seconds value directly often shows a date near 1970."] },
    { heading: "Team best practice", paragraphs: ["Document timestamp units in API schemas and internal docs.", "Clear unit labels prevent repeated debugging across teams."] }
  ]
};

const whyJsonBreaksAfterCopyPasteEn: GuideLocalizedContent = {
  title: "Why JSON Breaks After Copy and Paste",
  description: "Learn the most common copy-paste JSON break points and fix them quickly before they block your API or app workflow.",
  intro: "Copy and paste is often where valid JSON becomes invalid JSON. Hidden characters, smart quotes, and tiny punctuation mistakes can silently break payloads.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "When this guide helps",
  useCases: ["Debugging API payloads copied from docs or chat.", "Cleaning JSON from spreadsheets or notes.", "Validating config snippets before commit."],
  closingTitle: "Treat paste as a validation step",
  closingText: "Every paste can introduce syntax problems. A quick format-and-validate pass prevents bigger debugging loops later.",
  relatedToolLabel: "Open JSON Formatter",
  sections: [
    { heading: "Smart quotes are not JSON quotes", paragraphs: ["JSON only accepts straight double quotes. Many editors and messaging apps replace them with curly quotes.", "If keys or values use curly quotes, parsing fails immediately."] },
    { heading: "Invisible characters can break parsing", paragraphs: ["Copied text can include non-printing characters like non-breaking spaces.", "The text may look normal, but the parser can still reject it."], bullets: ["Paste once in plain text mode when possible.", "Format immediately to expose suspicious lines.", "Remove extra characters around braces and brackets."] },
    { heading: "Comma and bracket drift after manual edits", paragraphs: ["After pasting, one quick line edit can remove a comma or bracket.", "Formatting tools make structure problems visible faster than scanning a one-line payload."] },
    { heading: "JavaScript object syntax is not always JSON", paragraphs: ["Copied snippets may include single quotes, comments, or trailing commas.", "Those patterns can work in JavaScript objects but fail in strict JSON validators."] },
    { heading: "Use a short cleanup routine", paragraphs: ["Paste, run Format, check validation status, then copy the corrected result.", "This routine is faster than debugging failed requests later."] }
  ]
};

const whyJsonBreaksAfterCopyPasteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whyJsonBreaksAfterCopyPasteEn,
  ko: whyJsonBreaksAfterCopyPasteEn,
  ja: whyJsonBreaksAfterCopyPasteEn,
  es: whyJsonBreaksAfterCopyPasteEn,
  fr: whyJsonBreaksAfterCopyPasteEn,
  de: whyJsonBreaksAfterCopyPasteEn
};

const readJsonErrorsMoreQuicklyEn: GuideLocalizedContent = {
  title: "How to Read JSON Errors More Quickly",
  description: "Use a simple process to locate JSON parse errors faster and fix the right line first.",
  intro: "JSON error messages often look short and vague. With a repeatable reading order, you can move from error text to exact fix much faster.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "When this is useful",
  useCases: ["Fixing broken request bodies under deadline.", "Debugging long nested JSON payloads.", "Reviewing teammate payload errors quickly."],
  closingTitle: "Read errors in sequence, not by guess",
  closingText: "Start with line position, confirm structure, then fix one issue at a time to avoid chasing secondary errors.",
  relatedToolLabel: "Open JSON Formatter",
  sections: [
    { heading: "Start with line and column first", paragraphs: ["Most parsers return a line and column reference. Use that as your starting point.", "The actual mistake is often one token earlier, such as a missing comma."] },
    { heading: "Format before deep inspection", paragraphs: ["If JSON is minified, format it first so nesting and punctuation are visible.", "A structured view makes unmatched braces, brackets, and quotes easier to spot."] },
    { heading: "Classify the error type quickly", paragraphs: ["Many JSON errors fall into repeated patterns."], bullets: ["Unexpected token: often bad quote, comma, or stray character.", "Unexpected end: usually missing closing brace or bracket.", "Unexpected string/value: often a missing comma between fields."] },
    { heading: "Fix one error, then re-validate", paragraphs: ["Do not edit multiple suspicious lines at once.", "Resolve the first parser error and validate again to reveal the next blocker."] },
    { heading: "Keep a small personal checklist", paragraphs: ["A short checklist reduces repeat mistakes and speeds up review.", "Over time, parse patterns become much easier to recognize."] }
  ]
};

const readJsonErrorsMoreQuicklyContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: readJsonErrorsMoreQuicklyEn,
  ko: readJsonErrorsMoreQuicklyEn,
  ja: readJsonErrorsMoreQuicklyEn,
  es: readJsonErrorsMoreQuicklyEn,
  fr: readJsonErrorsMoreQuicklyEn,
  de: readJsonErrorsMoreQuicklyEn
};

const whenToUseMinifiedVsPrettyJsonEn: GuideLocalizedContent = {
  title: "When to Use Minified JSON vs Pretty JSON",
  description: "Choose the right JSON format for debugging, storage, and API workflows without overthinking.",
  intro: "Minified and pretty JSON are both useful, but for different moments. Picking the right one saves time in both debugging and delivery.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "What this helps with",
  useCases: ["Deciding what to send in API requests.", "Choosing readable output for code reviews.", "Keeping logs compact without losing traceability."],
  closingTitle: "Use both on purpose",
  closingText: "Pretty JSON helps humans. Minified JSON helps transport and storage. Switching intentionally between both formats keeps workflows fast.",
  relatedToolLabel: "Open JSON Formatter",
  sections: [
    { heading: "Pretty JSON is for reading and debugging", paragraphs: ["Indentation and line breaks make nested structures easier to scan.", "Use pretty output when reviewing payload shape, key names, and missing fields."] },
    { heading: "Minified JSON is for compact transfer", paragraphs: ["Minified JSON removes spaces and line breaks to reduce payload size.", "This is practical for network transfer, log limits, and embedded contexts."] },
    { heading: "Do not debug complex payloads in minified view", paragraphs: ["One-line JSON hides structure and slows error detection.", "Format first when investigating parse or mapping issues."] },
    { heading: "Pick one format per workflow step", paragraphs: ["Use pretty format during build and QA, then minify for final transport when needed."], bullets: ["Draft and debug: pretty JSON", "Pre-send validation: pretty JSON", "Final send or compact storage: minified JSON"] },
    { heading: "Keep conversion reversible", paragraphs: ["A formatter lets you switch between both views quickly without manual edits.", "That reduces accidental syntax mistakes and keeps payloads reliable."] }
  ]
};

const whenToUseMinifiedVsPrettyJsonContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenToUseMinifiedVsPrettyJsonEn,
  ko: whenToUseMinifiedVsPrettyJsonEn,
  ja: whenToUseMinifiedVsPrettyJsonEn,
  es: whenToUseMinifiedVsPrettyJsonEn,
  fr: whenToUseMinifiedVsPrettyJsonEn,
  de: whenToUseMinifiedVsPrettyJsonEn
};

const unixTimestampSecondsVsMillisecondsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: unixTimestampSecondsVsMillisecondsEn,
  ko: { ...unixTimestampSecondsVsMillisecondsEn, title: "유닉스 타임스탬프 초 vs 밀리초 쉽게 이해하기", description: "초 단위와 밀리초 단위를 구분해 날짜 변환 오류를 줄이는 방법입니다.", intro: "타임스탬프 오류의 대부분은 단위 혼동에서 시작됩니다. 자릿수만 확인해도 빠르게 해결할 수 있습니다." },
  ja: { ...unixTimestampSecondsVsMillisecondsEn, title: "Unixタイムスタンプの秒とミリ秒の違い", description: "秒・ミリ秒の見分け方を理解して日付変換ミスを防ぎます。", intro: "多くのタイムスタンプ不具合は単位の取り違えが原因です。桁数チェックで素早く判別できます。" },
  es: { ...unixTimestampSecondsVsMillisecondsEn, title: "Unix timestamp en segundos vs milisegundos", description: "Aprende a distinguir unidades para evitar fechas incorrectas al convertir timestamps.", intro: "Muchos errores de fecha vienen de mezclar segundos y milisegundos. Detectar la escala soluciona casi todo." },
  fr: { ...unixTimestampSecondsVsMillisecondsEn, title: "Unix timestamp en secondes vs millisecondes", description: "Distinguez correctement les unités pour éviter les mauvaises conversions de date.", intro: "La plupart des bugs de timestamp viennent d'une confusion d'unité. La longueur du nombre donne déjà la réponse." },
  de: { ...unixTimestampSecondsVsMillisecondsEn, title: "Unix-Timestamp in Sekunden vs Millisekunden erklärt", description: "So erkennst du die richtige Einheit und vermeidest fehlerhafte Datumswerte.", intro: "Viele Zeitstempel-Fehler entstehen durch Einheitenmix. Ein schneller Blick auf die Stellenzahl reicht oft aus." }
};

const convertApiTimestampsToReadableDatesEn: GuideLocalizedContent = {
  title: "How to Convert API Timestamps to Readable Dates",
  description: "A beginner-friendly workflow for turning raw API timestamps into human-readable date values.",
  intro: "API responses often return timestamps instead of readable dates. Converting them correctly helps debugging, reporting, and UI rendering.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "When to use this",
  useCases: ["Inspecting API responses.", "Building dashboards.", "Formatting logs.", "Showing dates in admin tools."],
  closingTitle: "Convert with context",
  closingText: "Always convert with the correct unit and timezone, then validate one known sample value.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "Start by confirming timestamp unit", paragraphs: ["Check if the value is in seconds or milliseconds before conversion.", "Using the wrong unit creates meaningless dates."] },
    { heading: "Apply timezone intentionally", paragraphs: ["Readable output depends on timezone choice.", "Decide whether you need UTC, server time, or user-local time."] },
    { heading: "Use one sample value to validate", paragraphs: ["Pick one timestamp with a known real-world time and compare conversion output.", "This catches unit and timezone issues quickly."], bullets: ["Confirm expected year.", "Check hour offset.", "Verify daylight saving periods if relevant."] },
    { heading: "Standardize display format", paragraphs: ["Use one consistent date format in your UI and logs.", "Consistency reduces confusion across teams and locales."] }
  ]
};

const convertApiTimestampsToReadableDatesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: convertApiTimestampsToReadableDatesEn,
  ko: { ...convertApiTimestampsToReadableDatesEn, title: "API 타임스탬프를 읽기 쉬운 날짜로 변환하는 방법", description: "원시 타임스탬프를 사람이 읽는 날짜 형식으로 안정적으로 변환하는 절차입니다.", intro: "API 응답은 종종 타임스탬프만 제공합니다. 단위와 시간대를 맞춰 변환하면 디버깅과 화면 표시가 쉬워집니다." },
  ja: { ...convertApiTimestampsToReadableDatesEn, title: "APIのタイムスタンプを読みやすい日付に変換する方法", description: "生のtimestampを実用的な日付表示へ変換する基本手順を紹介します。", intro: "APIレスポンスはtimestamp形式のことが多く、表示前の変換が必要です。単位とタイムゾーン確認が最優先です。" },
  es: { ...convertApiTimestampsToReadableDatesEn, title: "Cómo convertir timestamps de API a fechas legibles", description: "Flujo simple para convertir valores timestamp en fechas fáciles de leer.", intro: "Muchas APIs devuelven timestamps crudos. Convertirlos bien mejora depuración y visualización en interfaz." },
  fr: { ...convertApiTimestampsToReadableDatesEn, title: "Comment convertir des timestamps API en dates lisibles", description: "Méthode simple pour transformer des timestamps bruts en dates compréhensibles.", intro: "Les APIs renvoient souvent des timestamps. Une conversion correcte facilite le debug et l'affichage côté interface." },
  de: { ...convertApiTimestampsToReadableDatesEn, title: "API-Timestamps in lesbare Datumswerte umwandeln", description: "Praktischer Ablauf, um rohe Zeitstempel korrekt als Datum darzustellen.", intro: "APIs liefern häufig rohe Timestamps. Mit richtiger Einheit und Zeitzone werden daraus verlässliche Datumsanzeigen." }
};

const whyYourTimestampLooksWrongInJavascriptEn: GuideLocalizedContent = {
  title: "Why Your Timestamp Looks Wrong in JavaScript",
  description: "Fix common JavaScript timestamp mistakes caused by unit mismatch and timezone assumptions.",
  intro: "If JavaScript shows the wrong date, the problem is usually not Date itself. It is often a seconds-vs-milliseconds mismatch or a timezone misunderstanding.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Typical problems",
  useCases: ["Date near 1970 appears unexpectedly.", "Correct day but wrong hour.", "Different time in frontend vs backend.", "Broken date formatting in UI."],
  closingTitle: "Debug unit first, timezone second",
  closingText: "Most JavaScript timestamp bugs are solved by checking units and then checking timezone conversion.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "JavaScript Date expects milliseconds", paragraphs: ["new Date(value) expects milliseconds in most timestamp workflows.", "Passing seconds directly creates incorrect output."] },
    { heading: "Local time vs UTC confusion", paragraphs: ["Some methods show local timezone by default.", "Use UTC-aware formatting when you need environment-independent results."] },
    { heading: "Debug checklist", paragraphs: ["Follow this order to isolate the issue quickly."], bullets: ["Confirm unit length.", "Convert to UTC and local for comparison.", "Check source API timezone assumptions."] },
    { heading: "Avoid hidden string parsing issues", paragraphs: ["Different date string formats can parse inconsistently.", "Prefer numeric timestamps or ISO-8601 strings for predictable behavior."] }
  ]
};

const whyYourTimestampLooksWrongInJavascriptContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whyYourTimestampLooksWrongInJavascriptEn,
  ko: { ...whyYourTimestampLooksWrongInJavascriptEn, title: "JavaScript에서 타임스탬프가 이상하게 보이는 이유", description: "초/밀리초 혼동과 시간대 설정 문제로 생기는 JS 날짜 오류를 정리합니다.", intro: "JavaScript Date가 틀린 것이 아니라 입력 단위나 시간대 해석이 잘못된 경우가 대부분입니다." },
  ja: { ...whyYourTimestampLooksWrongInJavascriptEn, title: "JavaScriptでタイムスタンプ表示がずれる理由", description: "秒・ミリ秒の混同やタイムゾーン設定による日付ずれを解消します。", intro: "Dateオブジェクト自体より、入力単位や表示方法の違いが原因になるケースが多いです。" },
  es: { ...whyYourTimestampLooksWrongInJavascriptEn, title: "Por qué tu timestamp se ve mal en JavaScript", description: "Corrige errores comunes de fecha en JS por unidad o zona horaria.", intro: "Cuando la fecha se ve mal en JavaScript, casi siempre hay confusión entre segundos/milisegundos o UTC/local." },
  fr: { ...whyYourTimestampLooksWrongInJavascriptEn, title: "Pourquoi votre timestamp est incorrect en JavaScript", description: "Résolvez les erreurs de date JS liées aux unités et aux fuseaux horaires.", intro: "En JavaScript, les mauvaises dates viennent souvent d'une confusion secondes/millisecondes ou UTC/local." },
  de: { ...whyYourTimestampLooksWrongInJavascriptEn, title: "Warum dein Timestamp in JavaScript falsch aussieht", description: "Häufige JS-Datumsfehler durch Einheiten- und Zeitzonenprobleme schnell beheben.", intro: "Wenn Datumsausgaben in JS falsch sind, liegt es meist an Sekunden/Millisekunden oder UTC/Lokalzeit." }
};

const debugTimezoneConfusionInTimestampsEn: GuideLocalizedContent = {
  title: "How to Debug Timezone Confusion in Timestamps",
  description: "Learn a simple process to find timezone mismatches across APIs, databases, and frontend displays.",
  intro: "Timezone confusion happens when systems store one timezone and display another. A structured debug approach helps you find where the shift starts.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Common scenarios",
  useCases: ["API returns UTC but UI shows local time.", "Database values look shifted.", "Scheduled events fire at wrong hour.", "Reports differ by region."],
  closingTitle: "Trace each conversion step",
  closingText: "Write down source timezone, transport format, and display timezone for each layer to remove guesswork.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "Find the source of truth", paragraphs: ["Identify where the original time is created and in what timezone.", "Without this anchor, downstream debugging becomes guesswork."] },
    { heading: "Track conversions across layers", paragraphs: ["Check backend serialization, API transport, and frontend rendering separately.", "A single implicit conversion can shift output by hours."] },
    { heading: "Use fixed test values", paragraphs: ["Test with known timestamps and compare expected vs actual at each step."], bullets: ["Use UTC examples.", "Include DST boundary dates.", "Test from multiple client timezones."] },
    { heading: "Log timezone metadata", paragraphs: ["When possible, log timezone context alongside timestamp values.", "This makes future incident debugging much faster."] }
  ]
};

const debugTimezoneConfusionInTimestampsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: debugTimezoneConfusionInTimestampsEn,
  ko: { ...debugTimezoneConfusionInTimestampsEn, title: "타임스탬프 시간대 혼동 디버깅 방법", description: "API·DB·프론트엔드 사이에서 발생하는 시간대 불일치를 단계별로 찾는 방법입니다.", intro: "시간대 문제는 저장과 표시 기준이 다를 때 발생합니다. 변환 지점을 순서대로 추적하면 빠르게 원인을 찾을 수 있습니다." },
  ja: { ...debugTimezoneConfusionInTimestampsEn, title: "タイムスタンプのタイムゾーン混乱をデバッグする方法", description: "API・DB・フロント間で起きる時刻ずれを段階的に特定する手順です。", intro: "保存時刻と表示時刻の基準が混ざると、タイムゾーン問題が起きます。各変換点を追跡するのが近道です。" },
  es: { ...debugTimezoneConfusionInTimestampsEn, title: "Cómo depurar confusión de zonas horarias en timestamps", description: "Proceso práctico para detectar desajustes de zona horaria en todo el flujo.", intro: "Los errores de zona horaria aparecen cuando cada capa interpreta el tiempo distinto. Trazar cada conversión evita suposiciones." },
  fr: { ...debugTimezoneConfusionInTimestampsEn, title: "Comment déboguer les confusions de fuseau horaire dans les timestamps", description: "Méthode structurée pour repérer les décalages de fuseau entre systèmes.", intro: "Les décalages viennent souvent d'une conversion implicite. Suivre chaque étape du flux permet de localiser l'erreur." },
  de: { ...debugTimezoneConfusionInTimestampsEn, title: "Zeitzonen-Verwirrung bei Timestamps debuggen", description: "Schritt-für-Schritt-Prozess, um Zeitzonenverschiebungen zwischen Systemen zu finden.", intro: "Zeitzonenfehler entstehen oft zwischen Speicherung, API-Transport und Darstellung. Jede Umwandlung einzeln prüfen." }
};

const apiDatesVsUnixTimestampsEn: GuideLocalizedContent = {
  title: "Why API Dates and Unix Timestamps Don’t Always Match",
  description: "Learn a fast workflow to explain why API date strings and Unix timestamps can represent different moments.",
  intro: "An API can return a readable date field and a Unix timestamp field that look related but still disagree. Most mismatches come from timezone conversion rules, rounding, or different source fields.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Use this guide when",
  useCases: ["Two date fields in one API response disagree.", "Backend logs and dashboard time labels do not align.", "You need to explain a time mismatch to teammates quickly.", "A timestamp seems correct but the rendered date looks shifted."],
  closingTitle: "Compare source, unit, and timezone together",
  closingText: "Treat each date field as separate data until you confirm origin, unit, and timezone assumptions.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "Understand that fields may have different origins", paragraphs: ["APIs often include both an event timestamp and a display-ready date.", "Those values can be generated at different pipeline steps and are not always exact mirrors."] },
    { heading: "Check whether the Unix value is seconds or milliseconds", paragraphs: ["Unit mismatch is still the fastest way to create a fake disagreement.", "Confirm digit length before comparing with readable date output."] },
    { heading: "Verify timezone handling on both fields", paragraphs: ["A date string may include offset information while a Unix timestamp is timezone-neutral.", "If one field was formatted in local server time, differences can appear immediately."], bullets: ["Look for Z, +09:00, -05:00 style suffixes.", "Confirm whether backend formatting uses UTC or local timezone.", "Test conversion in UTC and local views."] },
    { heading: "Watch for rounding and truncation behavior", paragraphs: ["Some APIs round to seconds while others preserve milliseconds.", "Small truncation differences can become visible in sorted tables and incident timelines."] },
    { heading: "Use one known sample to validate assumptions", paragraphs: ["Pick a record with a known real event time and compare every field from storage to UI.", "This quickly shows whether mismatch comes from API generation or frontend rendering."] }
  ]
};

const apiDatesVsUnixTimestampsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: apiDatesVsUnixTimestampsEn,
  ko: { ...apiDatesVsUnixTimestampsEn, title: "API 날짜와 유닉스 타임스탬프가 항상 일치하지 않는 이유", description: "API 날짜 문자열과 Unix timestamp가 어긋나는 원인을 빠르게 확인하는 실무 가이드입니다.", intro: "한 API 응답 안의 날짜 문자열과 timestamp가 비슷해 보여도 실제로는 다를 수 있습니다. 보통 시간대 처리, 반올림, 필드 생성 시점 차이가 원인입니다." },
  ja: { ...apiDatesVsUnixTimestampsEn, title: "APIの日付とUnixタイムスタンプが一致しない理由", description: "APIの日付文字列とUnix timestampの不一致を素早く切り分ける実践ガイドです。", intro: "同じレスポンス内でも日付文字列とtimestampが一致しないことがあります。多くはタイムゾーン処理や丸め、生成元フィールドの違いが原因です。" },
  es: { ...apiDatesVsUnixTimestampsEn, title: "Por qué las fechas de API y los timestamps Unix no siempre coinciden", description: "Flujo rápido para detectar por qué una fecha de API y un timestamp Unix difieren.", intro: "Una API puede devolver una fecha legible y un timestamp Unix que parecen equivalentes pero no lo son. Suele deberse a zona horaria, redondeo o campos de origen distintos." },
  fr: { ...apiDatesVsUnixTimestampsEn, title: "Pourquoi les dates API et les timestamps Unix ne correspondent pas toujours", description: "Méthode rapide pour expliquer les écarts entre date API lisible et timestamp Unix.", intro: "Une API peut renvoyer une date lisible et un timestamp Unix qui semblent liés mais diffèrent. Les causes sont souvent le fuseau, l'arrondi ou la source du champ." },
  de: { ...apiDatesVsUnixTimestampsEn, title: "Warum API-Daten und Unix-Timestamps nicht immer übereinstimmen", description: "Praktischer Ablauf, um Abweichungen zwischen API-Datum und Unix-Timestamp schnell zu erklären.", intro: "Eine API kann ein lesbares Datum und einen Unix-Timestamp liefern, die ähnlich wirken, aber nicht gleich sind. Häufige Ursachen sind Zeitzonenlogik, Rundung oder unterschiedliche Quellfelder." }
};

const spotSecondsVsMillisecondsBugEn: GuideLocalizedContent = {
  title: "How to Spot a Seconds vs Milliseconds Timestamp Bug Quickly",
  description: "Use a short checklist to identify seconds-vs-milliseconds bugs before they spread through logs and UI output.",
  intro: "Timestamp bugs are often obvious once you know what to inspect first. A two-minute unit check can prevent long debugging loops.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Great for",
  useCases: ["Dates unexpectedly near 1970.", "Future dates far beyond expected range.", "APIs and frontend showing different event times.", "Reviewing suspicious timestamps in incident logs."],
  closingTitle: "Digit length check saves time",
  closingText: "Start with digit length, then confirm one known value in UTC and local time.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "Start with the visual digit test", paragraphs: ["Most seconds timestamps are 10 digits and milliseconds are 13 digits.", "This quick check solves many issues before deeper debugging."] },
    { heading: "Use one expected real-world timestamp", paragraphs: ["Convert one value where you already know the event time.", "If result year or hour is absurd, unit is likely wrong."] },
    { heading: "Check both conversion directions", paragraphs: ["Convert timestamp to date and date back to timestamp.", "Round-trip checks expose hidden assumptions in parsing logic."], bullets: ["Run test in UTC view.", "Run same value in local view.", "Compare with backend log output."] },
    { heading: "Inspect JavaScript and backend defaults", paragraphs: ["JavaScript Date constructors often expect milliseconds.", "Many backend stores and APIs use seconds by default, so integration points need explicit conversion."] },
    { heading: "Add a guardrail for future payloads", paragraphs: ["Document expected unit in schema and enforce it with validation checks.", "A small validator can stop repeated bugs across services."] }
  ]
};

const spotSecondsVsMillisecondsBugContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: spotSecondsVsMillisecondsBugEn,
  ko: { ...spotSecondsVsMillisecondsBugEn, title: "초 vs 밀리초 타임스탬프 버그를 빠르게 찾는 방법", description: "seconds/milliseconds 혼동 버그를 짧은 체크리스트로 빠르게 찾는 방법입니다.", intro: "타임스탬프 버그는 먼저 볼 포인트만 알면 금방 찾을 수 있습니다. 2분 단위 점검으로 긴 디버깅을 줄일 수 있습니다." },
  ja: { ...spotSecondsVsMillisecondsBugEn, title: "秒とミリ秒のタイムスタンプ不具合を素早く見つける方法", description: "seconds/milliseconds混在バグを短い手順で切り分けるガイドです。", intro: "タイムスタンプ不具合は最初の確認順が大切です。短い単位チェックだけで長い調査を避けられます。" },
  es: { ...spotSecondsVsMillisecondsBugEn, title: "Cómo detectar rápido un bug de segundos vs milisegundos", description: "Checklist breve para identificar errores de unidad en timestamps.", intro: "Muchos bugs de timestamp se detectan en minutos si revisas primero la unidad. Así evitas ciclos largos de depuración." },
  fr: { ...spotSecondsVsMillisecondsBugEn, title: "Comment repérer vite un bug secondes vs millisecondes", description: "Checklist courte pour identifier rapidement une erreur d'unité timestamp.", intro: "Les bugs de timestamp se détectent souvent très vite avec le bon ordre de vérification. Un contrôle d'unité évite de longues investigations." },
  de: { ...spotSecondsVsMillisecondsBugEn, title: "Sekunden-vs-Millisekunden-Bug schnell erkennen", description: "Kurze Checkliste, um Einheitenfehler bei Timestamps zügig zu finden.", intro: "Viele Timestamp-Bugs lassen sich in Minuten finden, wenn du zuerst die Einheit prüfst. So sparst du lange Debug-Schleifen." }
};

const timestampLooksRightButTimezoneIsWrongEn: GuideLocalizedContent = {
  title: "When a Timestamp Looks Right but the Timezone Is Wrong",
  description: "Learn how a correct numeric timestamp can still produce wrong business time when timezone context is missing.",
  intro: "A timestamp value can be technically valid while the displayed hour is still wrong for users. The issue is usually timezone interpretation, not the raw number.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Common situations",
  useCases: ["Event time is off by a fixed number of hours.", "Server logs look correct but UI schedule is wrong.", "Support tickets mention wrong local appointment time.", "DST transitions cause one-hour surprises."],
  closingTitle: "A valid timestamp still needs timezone context",
  closingText: "Confirm where the time was created, how it was transported, and how it is finally rendered.",
  relatedToolLabel: "Open Timestamp Converter",
  sections: [
    { heading: "Know what a Unix timestamp does and does not include", paragraphs: ["Unix timestamps represent elapsed time from epoch and do not contain timezone labels.", "Timezone is applied later when formatting for humans."] },
    { heading: "Map each layer in the time pipeline", paragraphs: ["List storage timezone, API serialization format, and frontend display timezone.", "Many bugs come from one implicit local conversion in the middle."] },
    { heading: "Compare UTC output with user-local output", paragraphs: ["Seeing both views side by side reveals where the shift appears.", "If UTC matches expected event but local output does not, formatting rules need review."], bullets: ["Check locale formatting settings.", "Verify timezone passed to formatter utilities.", "Test with users in another region."] },
    { heading: "Watch daylight saving boundaries", paragraphs: ["DST changes can create repeated or missing local hours.", "Run test timestamps around transition dates to catch hidden edge cases."] },
    { heading: "Write timezone rules in product docs", paragraphs: ["State whether each feature shows UTC, account timezone, or viewer-local time.", "Clear display rules reduce support confusion and repeat bug reports."] }
  ]
};

const timestampLooksRightButTimezoneIsWrongContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: timestampLooksRightButTimezoneIsWrongEn,
  ko: { ...timestampLooksRightButTimezoneIsWrongEn, title: "타임스탬프는 맞는데 시간대가 틀릴 때", description: "숫자 timestamp가 맞아도 표시 시간이 틀리는 원인을 시간대 관점에서 점검하는 가이드입니다.", intro: "타임스탬프 값 자체는 유효해도 사용자에게 보이는 시간은 틀릴 수 있습니다. 보통 원인은 숫자가 아니라 시간대 해석입니다." },
  ja: { ...timestampLooksRightButTimezoneIsWrongEn, title: "タイムスタンプは正しいのにタイムゾーンが間違っているとき", description: "値は正しいのに表示時刻がずれる原因をタイムゾーン視点で確認するガイドです。", intro: "timestamp値が正しくても、ユーザー表示時刻が間違うことがあります。多くは数値ではなくタイムゾーン解釈の問題です。" },
  es: { ...timestampLooksRightButTimezoneIsWrongEn, title: "Cuando el timestamp parece correcto pero la zona horaria está mal", description: "Cómo detectar casos donde el número es válido pero la hora mostrada no coincide.", intro: "Un timestamp puede ser técnicamente correcto y aun así mostrar una hora incorrecta para el usuario. El problema suele ser de interpretación de zona horaria." },
  fr: { ...timestampLooksRightButTimezoneIsWrongEn, title: "Quand un timestamp semble correct mais que le fuseau est faux", description: "Repérez les cas où la valeur est valide mais l'heure métier affichée est erronée.", intro: "Un timestamp peut être juste, mais l'heure affichée rester fausse pour l'utilisateur. La cause vient souvent de l'interprétation du fuseau." },
  de: { ...timestampLooksRightButTimezoneIsWrongEn, title: "Wenn der Timestamp richtig aussieht, aber die Zeitzone falsch ist", description: "So erkennst du Fälle, in denen der Wert stimmt, aber die angezeigte Uhrzeit falsch ist.", intro: "Ein Timestamp kann technisch korrekt sein und trotzdem eine falsche Uhrzeit anzeigen. Meist liegt das an der Zeitzonen-Interpretation, nicht an der Zahl selbst." }
};

const base64VsUrlEncodingEn: GuideLocalizedContent = {
  title: "Base64 vs URL Encoding: What’s the Difference?",
  description: "Understand when to use Base64 and when URL encoding is the correct choice in web workflows.",
  intro: "Base64 and URL encoding solve different problems. Mixing them up causes broken links, invalid payloads, and confusing debug sessions.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Useful for",
  useCases: ["Building query strings.", "Transferring binary data in text channels.", "Debugging API parameters.", "Encoding values in redirects."],
  closingTitle: "Choose encoding by purpose",
  closingText: "URL encoding protects URL characters. Base64 converts data representation. Use the right one for the job.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "URL encoding keeps URLs valid", paragraphs: ["URL encoding escapes reserved characters in URLs.", "Use it for query params, path segments, and redirect values."] },
    { heading: "Base64 changes data into text-safe blocks", paragraphs: ["Base64 is useful for transporting binary or structured values as text.", "It is not a replacement for URL encoding in links."] },
    { heading: "Common confusion patterns", paragraphs: ["Developers often Base64 a value and still need URL encoding if it goes into a URL.", "Treat these as separate steps when needed."], bullets: ["URL params: URL encode.", "Binary payloads in text fields: Base64.", "Sensitive data: use encryption, not Base64."] },
    { heading: "Debugging rule of thumb", paragraphs: ["If a URL breaks, inspect URL encoding first.", "If unreadable blob data appears, decode Base64 to inspect original content."] }
  ]
};

const base64VsUrlEncodingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: base64VsUrlEncodingEn,
  ko: { ...base64VsUrlEncodingEn, title: "Base64와 URL 인코딩의 차이", description: "웹 워크플로에서 Base64와 URL 인코딩을 언제 써야 하는지 구분합니다.", intro: "두 인코딩은 목적이 다릅니다. 혼용하면 링크 오류나 디버깅 혼란이 쉽게 발생합니다." },
  ja: { ...base64VsUrlEncodingEn, title: "Base64とURLエンコードの違い", description: "用途の異なる2つのエンコードを正しく使い分けるためのガイドです。", intro: "Base64とURLエンコードは解決する問題が異なります。混同するとリンクやAPI処理で不具合が出ます。" },
  es: { ...base64VsUrlEncodingEn, title: "Base64 vs URL encoding: ¿cuál es la diferencia?", description: "Diferencia clave entre ambos métodos y cuándo usar cada uno.", intro: "Base64 y URL encoding no son intercambiables. Elegir mal rompe URLs y payloads." },
  fr: { ...base64VsUrlEncodingEn, title: "Base64 vs encodage URL : quelle différence ?", description: "Comprendre quand utiliser Base64 et quand utiliser l'encodage URL.", intro: "Ces deux encodages répondent à des besoins différents. Les confondre crée des erreurs évitables." },
  de: { ...base64VsUrlEncodingEn, title: "Base64 vs URL-Encoding: Was ist der Unterschied?", description: "Wann Base64 sinnvoll ist und wann URL-Encoding die richtige Wahl ist.", intro: "Beide Verfahren lösen unterschiedliche Aufgaben. Falsche Nutzung führt schnell zu kaputten Links oder fehlerhaften Payloads." }
};

const whenToEncodeUrlAndWhenNotToContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "When to Encode a URL and When Not To",
    description: "A practical guide to decide when URL encoding is required and when extra encoding causes problems.",
    intro: "URL encoding keeps links valid, but encoding at the wrong time can break redirects, tracking, and API calls. This guide helps you make the right call quickly.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "Best for",
    useCases: ["Building links with query parameters.", "Passing URLs between tools.", "Debugging tracking links.", "Avoiding double-encoding bugs."],
    closingTitle: "Encode only the parts that need it",
    closingText: "Encode dynamic values, not entire URLs by default. Clear rules prevent broken links and reporting issues.",
    relatedToolLabel: "Open URL Encode / Decode",
    sections: [
      { heading: "Encode query parameter values", paragraphs: ["Values like search terms, names, or campaign labels often contain spaces and symbols.", "Encode these values before adding them to a URL so the final link stays valid."] },
      { heading: "Do not blindly encode full URLs", paragraphs: ["If a URL is already valid, encoding the whole string can produce unreadable and broken results.", "Encode only the dynamic pieces that may contain reserved characters."] },
      { heading: "Watch for double encoding", paragraphs: ["Double encoding turns % into %25 and breaks values unexpectedly.", "If you see many %25 sequences, decode once and inspect the source step."], bullets: ["Encode once per value.", "Avoid re-encoding already encoded output.", "Document where encoding happens in your flow."] },
      { heading: "Handle paths, queries, and redirects separately", paragraphs: ["Path segments, query values, and nested redirect URLs each need different handling.", "Treat each layer deliberately instead of using one blanket encode action."] },
      { heading: "Quick team rule", paragraphs: ["Define one place in your workflow where encoding happens.", "This keeps links predictable across marketing, product, and engineering teams."] }
    ]
  },
  ko: { title: "URL을 인코딩해야 할 때와 하지 말아야 할 때", description: "URL 인코딩이 필요한 상황과 오히려 문제를 만드는 상황을 실무 기준으로 정리한 가이드입니다.", intro: "URL 인코딩은 링크를 안전하게 만들지만, 잘못된 시점에 적용하면 리디렉션·추적·API 호출이 깨질 수 있습니다. 빠르게 판단하는 기준을 정리했습니다.", categoryLabel: "개발 워크플로", useCasesTitle: "도움이 되는 상황", useCases: ["쿼리 파라미터가 있는 링크 작성", "툴 간 URL 전달", "트래킹 링크 디버깅", "이중 인코딩 버그 예방"], closingTitle: "필요한 부분만 인코딩하세요", closingText: "기본적으로 전체 URL이 아니라 동적 값만 인코딩하세요. 기준이 명확하면 링크 오류와 리포팅 문제를 줄일 수 있습니다.", relatedToolLabel: "URL Encode / Decode 열기", sections: [{ heading: "쿼리 파라미터 값은 인코딩", paragraphs: ["검색어, 이름, 캠페인 값처럼 공백/기호가 포함된 값은 인코딩이 필요합니다.", "값을 먼저 인코딩한 뒤 URL에 붙이면 링크가 안정적으로 동작합니다."] }, { heading: "전체 URL을 무조건 인코딩하지 않기", paragraphs: ["이미 유효한 URL 전체를 인코딩하면 읽기 어렵고 깨진 결과가 나올 수 있습니다.", "예약 문자가 들어갈 수 있는 동적 부분만 인코딩하세요."] }, { heading: "이중 인코딩 주의", paragraphs: ["이중 인코딩이 생기면 %가 %25로 변해 값이 깨집니다.", "결과에 %25가 많다면 한 번 디코딩해 원본 단계를 점검하세요."], bullets: ["값당 한 번만 인코딩", "이미 인코딩된 출력 재인코딩 금지", "워크플로에서 인코딩 지점 문서화"] }, { heading: "경로·쿼리·리디렉션을 분리 처리", paragraphs: ["경로 세그먼트, 쿼리 값, 중첩 리디렉션 URL은 처리 방식이 다릅니다.", "한 번에 전체 처리하지 말고 레이어별로 다루세요."] }, { heading: "팀 공통 규칙 만들기", paragraphs: ["워크플로에서 인코딩 수행 지점을 한 곳으로 고정하세요.", "마케팅·프로덕트·개발 간 링크 품질을 일정하게 유지할 수 있습니다."] }] },
  ja: { title: "URLをエンコードすべき時、しない時", description: "URLエンコードが必要な場面と、逆に問題を生む場面を実務向けに整理します。", intro: "URLエンコードはリンクを安全にしますが、タイミングを間違えるとリダイレクトや計測、API連携が壊れます。判断基準を短くまとめました。", categoryLabel: "開発ワークフロー", useCasesTitle: "役立つ場面", useCases: ["クエリ付きリンク作成", "ツール間でURLを受け渡す時", "計測リンクのデバッグ", "二重エンコード防止"], closingTitle: "必要な部分だけをエンコード", closingText: "基本はURL全体ではなく動的な値をエンコードします。ルールを決めるとリンク不具合を減らせます。", relatedToolLabel: "URL Encode / Decode を開く", sections: [{ heading: "クエリ値はエンコードする", paragraphs: ["検索語やキャンペーン名など、空白や記号を含む値はエンコードが必要です。", "値を先にエンコードしてからURLに入れると安全です。"] }, { heading: "URL全体を機械的にエンコードしない", paragraphs: ["すでに有効なURL全体を再エンコードすると、読みにくく壊れたリンクになります。", "予約文字を含む可能性がある動的部分だけを対象にします。"] }, { heading: "二重エンコードを見抜く", paragraphs: ["二重エンコードでは % が %25 になり、値が崩れます。", "出力に %25 が多い場合は一度デコードして発生箇所を確認します。"], bullets: ["値ごとに1回だけエンコード", "既にエンコード済みの再エンコードを避ける", "どこでエンコードするかを運用に明記"] }, { heading: "パス・クエリ・リダイレクトを分ける", paragraphs: ["パスセグメント、クエリ値、入れ子URLは扱いが異なります。", "一括処理ではなくレイヤーごとに処理します。"] }, { heading: "チームで共通ルールを作る", paragraphs: ["ワークフロー内でエンコード実行箇所を固定します。", "チーム間でリンク品質が安定します。"] }] },
  es: { title: "Cuándo codificar una URL y cuándo no", description: "Guía práctica para decidir cuándo la codificación URL es necesaria y cuándo genera errores.", intro: "La codificación URL mantiene enlaces válidos, pero aplicarla en el momento incorrecto puede romper redirecciones, tracking y APIs. Aquí tienes reglas rápidas.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Útil para", useCases: ["Crear enlaces con parámetros.", "Pasar URLs entre herramientas.", "Depurar enlaces de seguimiento.", "Evitar doble codificación."], closingTitle: "Codifica solo lo necesario", closingText: "Codifica valores dinámicos, no la URL completa por defecto. Reglas claras evitan enlaces rotos y datos sucios.", relatedToolLabel: "Abrir URL Encode / Decode", sections: [{ heading: "Codifica valores de query", paragraphs: ["Los valores con espacios o símbolos deben codificarse antes de insertarlos.", "Así mantienes el enlace final válido y estable."] }, { heading: "No codifiques la URL completa a ciegas", paragraphs: ["Si la URL ya es válida, codificar todo el string puede romperla.", "Codifica solo partes dinámicas con caracteres reservados."] }, { heading: "Detecta doble codificación", paragraphs: ["La doble codificación convierte % en %25 y distorsiona valores.", "Si ves muchos %25, decodifica una vez y revisa el paso origen."], bullets: ["Una codificación por valor.", "No recodificar salidas ya codificadas.", "Documentar dónde se codifica en el flujo."] }, { heading: "Separa paths, query y redirects", paragraphs: ["Segmentos de path, valores de query y URLs anidadas requieren tratamiento distinto.", "Evita un único paso global de codificación."] }, { heading: "Define una regla de equipo", paragraphs: ["Fija un punto único donde ocurre la codificación.", "Así tendrás enlaces consistentes entre equipos."] }] },
  fr: { title: "Quand encoder une URL et quand ne pas le faire", description: "Guide pratique pour savoir quand l'encodage URL est nécessaire et quand il crée des erreurs.", intro: "L'encodage URL sécurise les liens, mais au mauvais moment il peut casser redirections, tracking et appels API. Voici un cadre simple.", categoryLabel: "Workflow développeur", useCasesTitle: "Utile pour", useCases: ["Créer des liens avec paramètres.", "Transmettre des URL entre outils.", "Déboguer des liens trackés.", "Éviter le double encodage."], closingTitle: "Encoder uniquement ce qui doit l'être", closingText: "Encodez les valeurs dynamiques, pas l'URL entière par défaut. Des règles claires évitent les liens cassés.", relatedToolLabel: "Ouvrir URL Encode / Decode", sections: [{ heading: "Encoder les valeurs de query", paragraphs: ["Les valeurs avec espaces ou symboles doivent être encodées avant insertion.", "Le lien final reste ainsi valide."] }, { heading: "Ne pas encoder l'URL complète automatiquement", paragraphs: ["Si l'URL est déjà valide, encoder toute la chaîne peut la rendre inutilisable.", "Ciblez seulement les parties dynamiques à risque."] }, { heading: "Repérer le double encodage", paragraphs: ["Le double encodage transforme % en %25 et casse les valeurs.", "Si vous voyez beaucoup de %25, décodez une fois et vérifiez la source."], bullets: ["Un encodage par valeur.", "Ne pas réencoder une sortie déjà encodée.", "Documenter l'étape d'encodage dans le workflow."] }, { heading: "Traiter path, query et redirects séparément", paragraphs: ["Segments de path, paramètres et URL imbriquées ne se traitent pas pareil.", "Évitez un encodage global unique."] }, { heading: "Créer une règle d'équipe", paragraphs: ["Définissez un point unique d'encodage dans le processus.", "Vous obtiendrez des liens cohérents entre équipes."] }] },
  de: { title: "Wann man eine URL codieren sollte – und wann nicht", description: "Praktischer Leitfaden, wann URL-Encoding nötig ist und wann es Probleme erzeugt.", intro: "URL-Encoding hält Links gültig, kann aber bei falscher Anwendung Redirects, Tracking und API-Aufrufe beschädigen. Diese Regeln helfen schnell weiter.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Hilfreich bei", useCases: ["Links mit Query-Parametern erstellen.", "URLs zwischen Tools übergeben.", "Tracking-Links debuggen.", "Double-Encoding vermeiden."], closingTitle: "Nur die nötigen Teile codieren", closingText: "Standardmäßig dynamische Werte codieren, nicht die komplette URL. So bleiben Links und Reports stabil.", relatedToolLabel: "URL Encode / Decode öffnen", sections: [{ heading: "Query-Werte codieren", paragraphs: ["Werte mit Leerzeichen oder Symbolen sollten vor dem Einfügen codiert werden.", "So bleibt der finale Link technisch korrekt."] }, { heading: "Keine komplette URL blind codieren", paragraphs: ["Ist eine URL bereits gültig, kann Vollcodierung sie unlesbar oder kaputt machen.", "Codier nur dynamische Teile mit reservierten Zeichen."] }, { heading: "Double-Encoding erkennen", paragraphs: ["Beim Double-Encoding wird % zu %25 und Werte brechen.", "Viele %25-Sequenzen sind ein starkes Warnsignal."], bullets: ["Pro Wert nur einmal codieren.", "Bereits codierte Ausgabe nicht erneut codieren.", "Codierpunkt im Workflow dokumentieren."] }, { heading: "Pfad, Query und Redirect getrennt behandeln", paragraphs: ["Pfadsegmente, Query-Werte und verschachtelte URLs brauchen unterschiedliche Behandlung.", "Keinen pauschalen Encode-Schritt für alles nutzen."] }, { heading: "Teamregel definieren", paragraphs: ["Legt eine feste Stelle im Prozess für Encoding fest.", "So bleiben Links teamübergreifend konsistent."] }] }
};

const fixBrokenLinksCausedByUrlEncodingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Fix Broken Links Caused by URL Encoding",
    description: "Troubleshoot and repair links that fail because encoded characters were handled incorrectly.",
    intro: "A broken link often comes from encoding errors: double encoding, missing encoding, or malformed query strings. Use this workflow to isolate and fix the issue fast.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "Useful for",
    useCases: ["Fixing campaign links before launch.", "Debugging redirect chains.", "Repairing URLs copied across tools.", "Resolving 404 or bad-request link issues."],
    closingTitle: "Fix the source, not only the symptom",
    closingText: "Once you identify the broken encoding step, update that workflow so the same link format stays stable.",
    relatedToolLabel: "Open URL Encode / Decode",
    sections: [
      { heading: "Confirm where the link breaks", paragraphs: ["Open the exact shared URL and note whether it fails at load, redirect, or final destination.", "Different failure points suggest different encoding mistakes."] },
      { heading: "Inspect suspicious characters", paragraphs: ["Look for spaces, #, &, ?, =, %, and non-Latin characters in dynamic values.", "These usually need correct encoding inside query strings."] },
      { heading: "Check for double encoding patterns", paragraphs: ["If encoded text includes %25 repeatedly, something may have been encoded twice.", "Decode once and compare with your expected original value."], bullets: ["%20 is normal for spaces.", "%2520 often indicates double encoding.", "Do not decode blindly multiple times."] },
      { heading: "Rebuild the URL in small steps", paragraphs: ["Start with the base URL, then add one parameter at a time.", "Encode each dynamic value as you add it and test after every step."] },
      { heading: "Lock in a reusable fix", paragraphs: ["After repairing the link, document the final format and encoding point.", "This prevents recurring errors when teammates create new links."] }
    ]
  },
  ko: { title: "URL 인코딩 때문에 깨진 링크 고치는 방법", description: "잘못된 인코딩 처리로 실패하는 링크를 빠르게 진단하고 복구하는 실무 절차입니다.", intro: "깨진 링크의 원인은 이중 인코딩, 누락 인코딩, 잘못된 쿼리 문자열인 경우가 많습니다. 아래 흐름으로 원인을 빠르게 분리하세요.", categoryLabel: "개발 워크플로", useCasesTitle: "도움이 되는 상황", useCases: ["캠페인 배포 전 링크 수정", "리디렉션 체인 디버깅", "툴 간 복사 과정에서 깨진 URL 복구", "404/잘못된 요청 링크 이슈 해결"], closingTitle: "증상만이 아니라 원인 지점을 고치세요", closingText: "문제가 생긴 인코딩 단계를 찾았다면 해당 워크플로 자체를 수정해 같은 오류를 반복하지 않도록 하세요.", relatedToolLabel: "URL Encode / Decode 열기", sections: [{ heading: "어디서 깨지는지 먼저 확인", paragraphs: ["공유된 실제 URL을 열어 로딩/리디렉션/최종 도착 중 어디에서 실패하는지 확인하세요.", "실패 지점에 따라 인코딩 문제 유형이 달라집니다."] }, { heading: "문제 가능 문자를 점검", paragraphs: ["동적 값에 공백, #, &, ?, =, %, 비라틴 문자가 있는지 확인하세요.", "이 값들은 쿼리 문자열에서 정확한 인코딩이 필요합니다."] }, { heading: "이중 인코딩 패턴 확인", paragraphs: ["%25가 반복되면 같은 값이 두 번 인코딩됐을 가능성이 큽니다.", "한 번 디코딩해 원래 기대 값과 비교하세요."], bullets: ["공백의 %20은 정상", "%2520은 이중 인코딩 의심", "무작정 여러 번 디코딩 금지"] }, { heading: "URL을 단계적으로 재구성", paragraphs: ["기본 URL부터 시작해 파라미터를 하나씩 추가하세요.", "동적 값 인코딩 후 매 단계 테스트하면 원인 구간을 빨리 찾을 수 있습니다."] }, { heading: "재사용 가능한 수정안 고정", paragraphs: ["수정 완료 후 최종 URL 형식과 인코딩 지점을 문서화하세요.", "팀이 새 링크를 만들 때 같은 문제가 반복되는 것을 막을 수 있습니다."] }] },
  ja: { title: "URLエンコードが原因の壊れたリンクを直す方法", description: "エンコード処理ミスで失敗するリンクを、短時間で切り分けて修正する手順です。", intro: "壊れたリンクは二重エンコード・未エンコード・クエリ構文崩れが原因になりがちです。以下の流れで原因を特定します。", categoryLabel: "開発ワークフロー", useCasesTitle: "役立つ場面", useCases: ["公開前のキャンペーンリンク修正", "リダイレクトチェーンの調査", "ツール間コピーで崩れたURLの修復", "404やbad requestの解消"], closingTitle: "症状ではなく発生源を直す", closingText: "不具合の発生箇所を特定したら、その工程自体を修正して再発を防ぎましょう。", relatedToolLabel: "URL Encode / Decode を開く", sections: [{ heading: "どこで壊れるかを確認", paragraphs: ["共有された実URLを開き、読み込み・リダイレクト・最終遷移のどこで失敗するか確認します。", "失敗地点ごとに疑うべきエンコードミスが変わります。"] }, { heading: "問題になりやすい文字を確認", paragraphs: ["動的値に空白、#、&、?、=、%、非ASCII文字が含まれていないか確認します。", "これらはクエリ内で適切なエンコードが必要です。"] }, { heading: "二重エンコードの兆候を確認", paragraphs: ["%25 が多い場合、同じ値を二重にエンコードした可能性があります。", "一度だけデコードして想定値と比較します。"], bullets: ["空白の %20 は通常", "%2520 は二重エンコード疑い", "むやみに複数回デコードしない"] }, { heading: "URLを段階的に再構築", paragraphs: ["ベースURLから始め、パラメータを1つずつ追加します。", "各ステップでテストすると原因箇所をすぐ特定できます。"] }, { heading: "再利用できる修正を残す", paragraphs: ["修正後は最終フォーマットとエンコード位置を記録します。", "以後のリンク作成で同じミスを防げます。"] }] },
  es: { title: "Cómo arreglar enlaces rotos por codificación URL", description: "Diagnostica y corrige enlaces que fallan por una codificación URL incorrecta.", intro: "Muchos enlaces rotos vienen de doble codificación, falta de codificación o queries mal formadas. Este flujo te ayuda a aislar el error rápido.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Útil para", useCases: ["Corregir enlaces de campaña antes de publicar.", "Depurar redirecciones.", "Reparar URLs copiadas entre herramientas.", "Resolver errores 404 o bad request."], closingTitle: "Corrige la causa raíz", closingText: "Cuando detectes el paso que rompe la codificación, ajusta ese proceso para evitar repetición.", relatedToolLabel: "Abrir URL Encode / Decode", sections: [{ heading: "Confirma dónde falla el enlace", paragraphs: ["Abre la URL exacta y observa si falla en carga, redirección o destino final.", "Cada punto sugiere un tipo distinto de error."] }, { heading: "Revisa caracteres sensibles", paragraphs: ["Busca espacios, #, &, ?, =, %, y caracteres no latinos en valores dinámicos.", "Suelen requerir codificación correcta dentro de query strings."] }, { heading: "Busca señales de doble codificación", paragraphs: ["Si aparece %25 repetido, puede haber doble codificación.", "Decodifica una vez y compáralo con el valor esperado."], bullets: ["%20 para espacios es normal.", "%2520 suele indicar doble codificación.", "No decodifiques muchas veces sin control."] }, { heading: "Reconstruye la URL por pasos", paragraphs: ["Empieza con la URL base y añade parámetros uno por uno.", "Codifica cada valor dinámico y prueba en cada paso."] }, { heading: "Documenta la corrección final", paragraphs: ["Guarda el formato final y el punto exacto de codificación.", "Así evitas que el error vuelva en futuras campañas."] }] },
  fr: { title: "Comment corriger des liens cassés à cause de l'encodage URL", description: "Diagnostiquez et réparez les liens qui échouent à cause d'un encodage URL incorrect.", intro: "Les liens cassés viennent souvent d'un double encodage, d'un encodage manquant ou d'une query mal formée. Ce workflow aide à corriger vite.", categoryLabel: "Workflow développeur", useCasesTitle: "Utile pour", useCases: ["Corriger des liens de campagne avant diffusion.", "Déboguer des chaînes de redirection.", "Réparer des URL copiées entre outils.", "Résoudre des erreurs 404 ou bad request."], closingTitle: "Corriger la cause racine", closingText: "Une fois l'étape fautive identifiée, ajustez le workflow pour stabiliser les liens.", relatedToolLabel: "Ouvrir URL Encode / Decode", sections: [{ heading: "Identifier l'étape de rupture", paragraphs: ["Ouvrez l'URL exacte et notez si l'échec arrive au chargement, en redirection, ou à l'arrivée.", "Le point d'échec oriente le diagnostic."] }, { heading: "Inspecter les caractères sensibles", paragraphs: ["Repérez espaces, #, &, ?, =, %, et caractères non latins dans les valeurs dynamiques.", "Ces éléments nécessitent souvent un encodage correct en query string."] }, { heading: "Vérifier le double encodage", paragraphs: ["Des séquences %25 répétées indiquent souvent un double encodage.", "Décodez une fois puis comparez à la valeur attendue."], bullets: ["%20 pour les espaces est normal.", "%2520 signale souvent un double encodage.", "Évitez les décodages multiples sans contrôle."] }, { heading: "Reconstruire l'URL étape par étape", paragraphs: ["Partez de l'URL de base puis ajoutez les paramètres un par un.", "Encodez chaque valeur dynamique et testez à chaque ajout."] }, { heading: "Formaliser la solution", paragraphs: ["Documentez le format validé et l'étape d'encodage officielle.", "Vous éviterez les mêmes erreurs dans les prochains liens."] }] },
  de: { title: "Kaputte Links durch URL-Encoding beheben", description: "So findest und reparierst du Links, die durch fehlerhaftes URL-Encoding nicht funktionieren.", intro: "Kaputte Links entstehen oft durch Double-Encoding, fehlendes Encoding oder fehlerhafte Query-Strings. Dieser Ablauf hilft bei schneller Fehlerbehebung.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Hilfreich bei", useCases: ["Kampagnenlinks vor Veröffentlichung reparieren.", "Redirect-Ketten debuggen.", "Zwischen Tools kopierte URLs korrigieren.", "404- oder Bad-Request-Linkfehler beheben."], closingTitle: "Ursache statt Symptom beheben", closingText: "Wenn die fehlerhafte Encoding-Stelle klar ist, passe den Workflow dort an, damit der Fehler nicht wiederkommt.", relatedToolLabel: "URL Encode / Decode öffnen", sections: [{ heading: "Bruchstelle im Link ermitteln", paragraphs: ["Öffne genau die geteilte URL und prüfe, ob der Fehler beim Laden, Redirect oder Ziel auftritt.", "Je nach Stelle unterscheidet sich die wahrscheinliche Ursache."] }, { heading: "Kritische Zeichen prüfen", paragraphs: ["Achte in dynamischen Werten auf Leerzeichen, #, &, ?, =, %, sowie Sonderzeichen.", "Diese müssen in Query-Parametern korrekt codiert sein."] }, { heading: "Auf Double-Encoding prüfen", paragraphs: ["Viele %25-Sequenzen deuten auf doppelte Codierung hin.", "Einmal decodieren und mit dem erwarteten Ausgangswert vergleichen."], bullets: ["%20 für Leerzeichen ist normal.", "%2520 deutet oft auf Double-Encoding.", "Nicht unkontrolliert mehrfach decodieren."] }, { heading: "URL schrittweise neu aufbauen", paragraphs: ["Starte mit der Basis-URL und füge Parameter einzeln hinzu.", "Codier jeden dynamischen Wert und teste nach jedem Schritt."] }, { heading: "Fix dokumentieren", paragraphs: ["Halte endgültiges URL-Format und offiziellen Encoding-Punkt fest.", "So vermeidest du Wiederholungsfehler im Team."] }] }
};

const spacesSymbolsAndQueryStringsUrlEncodingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Spaces, Symbols, and Query Strings: A Simple URL Encoding Guide",
    description: "Learn how spaces and symbols should be encoded in query strings with a beginner-friendly workflow.",
    intro: "Most URL encoding mistakes happen in query strings. Once you know what to encode and where, link building becomes predictable and much less error-prone.",
    categoryLabel: "Developer workflow",
    useCasesTitle: "Helpful for",
    useCases: ["Building search URLs.", "Adding UTM parameters.", "Passing names and labels safely.", "Troubleshooting malformed links."],
    closingTitle: "Small character fixes, big link stability",
    closingText: "Correctly encoding spaces and symbols prevents silent URL failures and keeps analytics clean.",
    relatedToolLabel: "Open URL Encode / Decode",
    sections: [
      { heading: "Why query strings break easily", paragraphs: ["Query strings combine many key=value pairs, so one unescaped symbol can change how the URL is parsed.", "That is why dynamic values should be encoded before assembly."] },
      { heading: "How spaces should be handled", paragraphs: ["Spaces are commonly encoded as %20 in URL components.", "Do not leave raw spaces in links that users or systems must open reliably."] },
      { heading: "Symbols that usually need encoding", paragraphs: ["Characters like &, #, %, +, /, and ? can alter URL meaning inside values.", "Encode them when they are part of the value, not URL structure."], bullets: ["Use plain separators only for URL syntax.", "Encode symbols inside user-provided values.", "Retest after adding each new parameter."] },
      { heading: "Assemble query strings safely", paragraphs: ["Start with a clean base URL.", "Append each parameter using encoded values so existing parameters stay intact."] },
      { heading: "Quick validation checklist", paragraphs: ["Open the final link in a browser and confirm destination plus parameter integrity.", "If a value looks wrong, decode it once to verify the original text."] }
    ]
  },
  ko: { title: "공백, 기호, 쿼리 문자열: 쉬운 URL 인코딩 가이드", description: "초보자도 바로 적용할 수 있게 쿼리 문자열에서 공백·기호를 인코딩하는 방법을 정리했습니다.", intro: "URL 인코딩 실수는 대부분 쿼리 문자열에서 발생합니다. 무엇을 어디서 인코딩할지 알면 링크 작업이 훨씬 안정적입니다.", categoryLabel: "개발 워크플로", useCasesTitle: "도움이 되는 작업", useCases: ["검색 URL 만들기", "UTM 파라미터 추가", "이름/라벨 값 안전하게 전달", "깨진 링크 원인 점검"], closingTitle: "작은 문자 처리로 링크 안정성 확보", closingText: "공백과 기호를 정확히 인코딩하면 조용히 발생하는 링크 오류와 분석 데이터 오염을 줄일 수 있습니다.", relatedToolLabel: "URL Encode / Decode 열기", sections: [{ heading: "쿼리 문자열이 쉽게 깨지는 이유", paragraphs: ["쿼리 문자열은 key=value가 여러 개 결합되므로, 이스케이프되지 않은 기호 하나가 해석을 바꿀 수 있습니다.", "그래서 동적 값은 조합 전에 먼저 인코딩해야 합니다."] }, { heading: "공백 처리 기본", paragraphs: ["URL 구성 요소에서는 공백을 보통 %20으로 인코딩합니다.", "사용자/시스템이 여는 링크에는 원시 공백을 남기지 마세요."] }, { heading: "인코딩이 자주 필요한 기호", paragraphs: ["&, #, %, +, /, ? 같은 문자는 값 내부에서 URL 의미를 바꿀 수 있습니다.", "URL 구조 문자가 아닌 값 데이터라면 인코딩하세요."], bullets: ["URL 문법 구분자는 그대로 사용", "사용자 입력 값의 기호는 인코딩", "파라미터 추가 후 매번 테스트"] }, { heading: "안전하게 쿼리 문자열 조합하기", paragraphs: ["깨끗한 기본 URL부터 시작하세요.", "각 파라미터 값을 인코딩해 추가하면 기존 파라미터를 덜 망가뜨립니다."] }, { heading: "빠른 검증 체크리스트", paragraphs: ["최종 링크를 열어 도착 페이지와 파라미터 무결성을 확인하세요.", "값이 이상하면 한 번 디코딩해 원문을 비교하세요."] }] },
  ja: { title: "スペース・記号・クエリ文字列：やさしいURLエンコードガイド", description: "クエリ文字列でのスペースや記号の扱いを、初心者向けにわかりやすく説明します。", intro: "URLエンコードのミスはクエリ文字列で起こりやすいです。どこをエンコードするかが分かれば、リンク作成は安定します。", categoryLabel: "開発ワークフロー", useCasesTitle: "役立つ場面", useCases: ["検索URLの作成", "UTMパラメータ追加", "名前やラベルの安全な受け渡し", "壊れたリンクの調査"], closingTitle: "文字処理を整えるとリンクは安定する", closingText: "スペースと記号を正しくエンコードすると、見えにくいリンク不具合や計測の乱れを防げます。", relatedToolLabel: "URL Encode / Decode を開く", sections: [{ heading: "なぜクエリ文字列は壊れやすいか", paragraphs: ["クエリ文字列は key=value を連結するため、未エスケープ記号1つで解釈が変わります。", "そのため動的値は組み立て前にエンコードします。"] }, { heading: "スペースの扱い", paragraphs: ["URL要素ではスペースは通常 %20 で表現します。", "共有リンクに生スペースを残さないようにしましょう。"] }, { heading: "エンコードが必要になりやすい記号", paragraphs: ["&, #, %, +, /, ? は値の中でURL意味を変える可能性があります。", "URL構文ではなく値データとして使うならエンコードします。"], bullets: ["区切り記号はURL構文としてのみ使う", "入力値内の記号はエンコードする", "パラメータ追加ごとにテストする"] }, { heading: "安全なクエリ組み立て", paragraphs: ["まずベースURLを確定します。", "値を個別にエンコードしながらパラメータを追加します。"] }, { heading: "最終チェック", paragraphs: ["完成リンクを開いて遷移先とパラメータを確認します。", "値が不自然なら一度デコードして元テキストを確認します。"] }] },
  es: { title: "Espacios, símbolos y query strings: guía simple de codificación URL", description: "Aprende a codificar espacios y símbolos en query strings con un flujo claro para principiantes.", intro: "La mayoría de errores de codificación URL ocurren en query strings. Si sabes qué codificar y dónde, crear enlaces es más estable.", categoryLabel: "Flujo de desarrollo", useCasesTitle: "Útil para", useCases: ["Construir URLs de búsqueda.", "Añadir parámetros UTM.", "Enviar nombres y etiquetas de forma segura.", "Depurar enlaces mal formados."], closingTitle: "Pequeños ajustes de caracteres, enlaces más sólidos", closingText: "Codificar correctamente espacios y símbolos evita fallos silenciosos y mejora la calidad del tracking.", relatedToolLabel: "Abrir URL Encode / Decode", sections: [{ heading: "Por qué se rompen los query strings", paragraphs: ["Un solo símbolo sin escapar puede cambiar cómo se interpreta toda la URL.", "Por eso los valores dinámicos deben codificarse antes de construir la query."] }, { heading: "Cómo tratar los espacios", paragraphs: ["En componentes URL, los espacios se representan normalmente como %20.", "Evita dejar espacios sin codificar en enlaces compartidos."] }, { heading: "Símbolos que suelen requerir codificación", paragraphs: ["&, #, %, +, / y ? pueden cambiar el significado dentro de un valor.", "Codifícalos cuando formen parte del dato, no de la estructura URL."], bullets: ["Usa separadores solo para sintaxis URL.", "Codifica símbolos en valores introducidos por usuarios.", "Prueba el enlace después de cada nuevo parámetro."] }, { heading: "Construye la query de forma segura", paragraphs: ["Empieza con una URL base limpia.", "Añade parámetros con valores codificados para no romper los existentes."] }, { heading: "Checklist rápida de validación", paragraphs: ["Abre el enlace final y verifica destino y parámetros.", "Si algo no cuadra, decodifica una vez para revisar el valor original."] }] },
  fr: { title: "Espaces, symboles et query strings : guide simple d'encodage URL", description: "Apprenez à encoder espaces et symboles dans les query strings avec une méthode claire pour débutants.", intro: "La plupart des erreurs d'encodage URL arrivent dans les query strings. Avec de bonnes bases, la création de liens devient plus fiable.", categoryLabel: "Workflow développeur", useCasesTitle: "Utile pour", useCases: ["Construire des URL de recherche.", "Ajouter des paramètres UTM.", "Transmettre noms et libellés en sécurité.", "Déboguer des liens mal formés."], closingTitle: "Petites corrections, grande stabilité", closingText: "Un encodage correct des espaces et symboles évite les échecs silencieux et garde un tracking propre.", relatedToolLabel: "Ouvrir URL Encode / Decode", sections: [{ heading: "Pourquoi les query strings cassent vite", paragraphs: ["Un symbole non échappé peut modifier l'interprétation complète d'une URL.", "Les valeurs dynamiques doivent donc être encodées avant assemblage."] }, { heading: "Gérer les espaces", paragraphs: ["Dans les composants URL, les espaces sont généralement encodés en %20.", "Évitez les espaces bruts dans les liens partagés."] }, { heading: "Symboles à encoder le plus souvent", paragraphs: ["&, #, %, +, / et ? peuvent changer le sens d'une valeur.", "Encodez-les quand ils appartiennent à la donnée, pas à la structure URL."], bullets: ["Utiliser les séparateurs uniquement pour la syntaxe URL.", "Encoder les symboles des valeurs utilisateur.", "Retester après chaque paramètre ajouté."] }, { heading: "Assembler une query en sécurité", paragraphs: ["Partez d'une URL de base propre.", "Ajoutez les paramètres avec des valeurs encodées pour préserver l'existant."] }, { heading: "Checklist de vérification rapide", paragraphs: ["Ouvrez le lien final et vérifiez destination + paramètres.", "Si une valeur paraît incorrecte, décodez une fois pour comparer l'original."] }] },
  de: { title: "Leerzeichen, Symbole und Query-Strings: einfacher URL-Encoding-Guide", description: "So codierst du Leerzeichen und Symbole in Query-Strings mit einem klaren Ablauf für Einsteiger.", intro: "Die meisten URL-Encoding-Fehler passieren in Query-Strings. Wenn klar ist, was wo codiert werden muss, werden Links deutlich stabiler.", categoryLabel: "Entwickler-Workflow", useCasesTitle: "Hilfreich für", useCases: ["Such-URLs bauen.", "UTM-Parameter hinzufügen.", "Namen und Labels sicher übergeben.", "Fehlerhafte Links debuggen."], closingTitle: "Kleine Zeichenkorrekturen, große Stabilität", closingText: "Richtig codierte Leerzeichen und Symbole verhindern stille Linkfehler und halten Tracking-Daten sauber.", relatedToolLabel: "URL Encode / Decode öffnen", sections: [{ heading: "Warum Query-Strings schnell kaputtgehen", paragraphs: ["Ein nicht maskiertes Symbol kann die gesamte URL-Auswertung verändern.", "Dynamische Werte deshalb vor dem Zusammenbau codieren."] }, { heading: "Leerzeichen richtig behandeln", paragraphs: ["In URL-Komponenten werden Leerzeichen meist als %20 codiert.", "Keine rohen Leerzeichen in geteilten Links lassen."] }, { heading: "Symbole mit häufigem Encoding-Bedarf", paragraphs: ["&, #, %, +, / und ? können innerhalb von Werten die URL-Bedeutung ändern.", "Codier sie, wenn sie Teil des Werts und nicht der URL-Struktur sind."], bullets: ["Trennzeichen nur für URL-Syntax verwenden.", "Symbole in Nutzereingaben codieren.", "Nach jedem neuen Parameter erneut testen."] }, { heading: "Query sicher zusammensetzen", paragraphs: ["Mit einer sauberen Basis-URL starten.", "Parameter mit codierten Werten ergänzen, damit nichts bricht."] }, { heading: "Schnellcheck zum Schluss", paragraphs: ["Finalen Link öffnen und Ziel + Parameter prüfen.", "Bei falschen Werten einmal decodieren und Original vergleichen."] }] }
};

const howToDecodeBase64SafelyForDebuggingEn: GuideLocalizedContent = {
  title: "How to Decode Base64 Safely for Debugging",
  description: "A safe, practical approach to decode Base64 strings without exposing sensitive data.",
  intro: "Base64 decoding is useful in debugging, but decoded data can include tokens, credentials, or personal information. Handle it carefully.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Common use cases",
  useCases: ["Inspecting JWT parts.", "Reading API payload fragments.", "Debugging encoded logs.", "Checking webhook content."],
  closingTitle: "Decode carefully, not casually",
  closingText: "Use secure environments, mask sensitive output, and avoid sharing raw decoded values in public channels.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Use a trusted environment", paragraphs: ["Decode only in secure tools and trusted browsers.", "Avoid pasting sensitive values into unknown online services."] },
    { heading: "Inspect only what you need", paragraphs: ["Decode enough to verify structure or field values.", "Do not copy full decoded secrets into tickets or chat."] },
    { heading: "Watch for malformed input", paragraphs: ["Some strings include URL-safe variants, prefixes, or missing padding.", "Normalize input before assuming data is corrupt."], bullets: ["Trim whitespace.", "Check URL-safe characters.", "Handle missing '=' padding if needed."] },
    { heading: "Sanitize before sharing", paragraphs: ["If you need help from teammates, redact keys and personal data first.", "Share minimal context to solve the issue safely."] }
  ]
};



const whatDoesXnMeanInDomainEn: GuideLocalizedContent = {
  title: "What Does xn-- Mean in a Domain Name?",
  description: "Understand what the xn-- prefix means and how to safely read, check, and use Punycode domains in daily web work.",
  intro: "If you see a domain label starting with xn--, you are looking at a Punycode form of a Unicode domain. It is normal behavior for international domain names, not automatically a security issue.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Helpful for",
  useCases: ["Reviewing domain strings in logs.", "Checking redirect targets.", "Validating user-submitted domains.", "Explaining IDN behavior to non-technical teammates."],
  closingTitle: "Treat xn-- as a format signal",
  closingText: "The xn-- prefix usually means a Unicode label was encoded for DNS compatibility. Decode and verify before making decisions.",
  relatedToolLabel: "Open Punycode Converter",
  sections: [
    { heading: "What xn-- actually indicates", paragraphs: ["xn-- is a prefix used in IDNA to mark an encoded label.", "It helps DNS handle non-ASCII characters while preserving the original domain meaning."] },
    { heading: "Where you usually see it", paragraphs: ["You may find xn-- labels in browser bars, certificates, server logs, and API payloads.", "Tools often convert human-readable Unicode domains into this ASCII-safe form automatically."] },
    { heading: "How to read an xn-- domain safely", paragraphs: ["Do not guess the original script by sight alone.", "Decode the label first, then review the Unicode result in context."], bullets: ["Check each label separately.", "Confirm expected language/script.", "Compare with the known official domain."] },
    { heading: "Common confusion to avoid", paragraphs: ["xn-- does not mean the domain is fake by default.", "But visual lookalikes can exist, so verification is still important for security-sensitive workflows."] },
    { heading: "Quick workflow", paragraphs: ["Paste the domain into a Punycode converter.", "Decode to Unicode, validate spelling and ownership, then use the normalized form in your process."] }
  ]
};

const whatDoesXnMeanInDomainContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whatDoesXnMeanInDomainEn,
  ko: { ...whatDoesXnMeanInDomainEn, title: "도메인에서 xn-- 는 무슨 뜻일까?", description: "xn-- 접두사의 의미와 Punycode 도메인을 실무에서 안전하게 확인하는 방법을 설명합니다.", intro: "xn-- 로 시작하는 라벨은 보통 유니코드 도메인을 DNS용 ASCII 형태(Punycode)로 바꾼 값입니다. 그 자체로 이상 징후는 아닙니다." },
  ja: { ...whatDoesXnMeanInDomainEn, title: "ドメイン名の xn-- は何を意味する？", description: "xn-- プレフィックスの意味と、Punycodeドメインを実務で確認する手順を解説します。", intro: "xn-- で始まるラベルは、UnicodeドメインをDNS互換のASCII形式にしたPunycodeです。単体で危険という意味ではありません。" },
  es: { ...whatDoesXnMeanInDomainEn, title: "¿Qué significa xn-- en un nombre de dominio?", description: "Aprende qué indica el prefijo xn-- y cómo revisar dominios Punycode de forma práctica.", intro: "Si un dominio empieza con xn--, normalmente es la versión Punycode de un dominio Unicode. No significa automáticamente que sea malicioso." },
  fr: { ...whatDoesXnMeanInDomainEn, title: "Que signifie xn-- dans un nom de domaine ?", description: "Comprenez le préfixe xn-- et comment vérifier des domaines Punycode dans un workflow réel.", intro: "Un label qui commence par xn-- est en général une forme Punycode d’un domaine Unicode. Ce n’est pas, à lui seul, un signal d’attaque." },
  de: { ...whatDoesXnMeanInDomainEn, title: "Was bedeutet xn-- in einem Domainnamen?", description: "Verstehe die Bedeutung von xn-- und wie du Punycode-Domains im Alltag sicher prüfst.", intro: "Beginnt ein Domain-Label mit xn--, ist es meist die Punycode-Form einer Unicode-Domain. Das ist zunächst normales IDN-Verhalten." }
};

const unicodeDomainsVsPunycodeEn: GuideLocalizedContent = {
  title: "Unicode Domains vs Punycode: What’s the Difference?",
  description: "Learn the practical difference between human-readable Unicode domains and their ASCII Punycode representation.",
  intro: "Unicode domains are for people to read, while Punycode is for ASCII-only DNS compatibility. They represent the same destination when encoded and decoded correctly.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Useful for",
  useCases: ["Comparing domain formats in support tickets.", "Documenting international domain workflows.", "Building validation logic for domain inputs.", "Explaining IDN behavior to clients."],
  closingTitle: "Think display form vs transport form",
  closingText: "Unicode is the readable display form. Punycode is the transport-compatible ASCII form. Keep both in your workflow where appropriate.",
  relatedToolLabel: "Open Punycode Converter",
  sections: [
    { heading: "Unicode domains are user-friendly", paragraphs: ["Unicode lets users read domains in their own language and script.", "This improves clarity for local audiences and multilingual brands."] },
    { heading: "Punycode is DNS-compatible encoding", paragraphs: ["DNS labels are ASCII-oriented, so Unicode labels are encoded as Punycode.", "That is why a readable label can appear as xn--... in technical contexts."] },
    { heading: "Both can point to the same site", paragraphs: ["Unicode and Punycode are two representations of one domain identity when mapped correctly.", "In workflows, conversion should be deterministic and reversible."], bullets: ["Display to users: Unicode.", "Store/transmit in strict systems: often ASCII/Punycode.", "Always verify round-trip conversion."] },
    { heading: "Where mistakes usually happen", paragraphs: ["Teams sometimes compare Unicode and Punycode strings as if they were unrelated values.", "Another mistake is partial conversion of only some labels in a multi-label domain."] },
    { heading: "Practical handling rule", paragraphs: ["Choose one canonical storage format and document conversion boundaries.", "This prevents mismatches across product, analytics, and security checks."] }
  ]
};

const unicodeDomainsVsPunycodeContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: unicodeDomainsVsPunycodeEn,
  ko: { ...unicodeDomainsVsPunycodeEn, title: "유니코드 도메인 vs Punycode: 무엇이 다를까?", description: "사람이 읽는 유니코드 도메인과 ASCII Punycode 표현의 차이를 실무 중심으로 정리합니다.", intro: "유니코드는 가독성을 위한 표현이고, Punycode는 DNS 호환을 위한 ASCII 표현입니다. 올바르게 변환하면 같은 도메인을 가리킵니다." },
  ja: { ...unicodeDomainsVsPunycodeEn, title: "UnicodeドメインとPunycodeの違いとは？", description: "人が読むUnicodeドメインとASCIIのPunycode表現の違いを実務向けに解説します。", intro: "Unicodeは表示向け、PunycodeはDNS互換向けです。正しく変換されれば同じドメインを指します。" },
  es: { ...unicodeDomainsVsPunycodeEn, title: "Dominios Unicode vs Punycode: ¿cuál es la diferencia?", description: "Diferencia práctica entre dominios Unicode legibles y su representación ASCII Punycode.", intro: "Unicode es para lectura humana; Punycode, para compatibilidad ASCII/DNS. Bien convertidos, representan el mismo dominio." },
  fr: { ...unicodeDomainsVsPunycodeEn, title: "Domaines Unicode vs Punycode : quelle différence ?", description: "Différence pratique entre un domaine Unicode lisible et sa forme ASCII Punycode.", intro: "Unicode sert à l’affichage humain, Punycode à la compatibilité DNS en ASCII. Correctement convertis, ils représentent le même domaine." },
  de: { ...unicodeDomainsVsPunycodeEn, title: "Unicode-Domains vs Punycode: Was ist der Unterschied?", description: "Praktischer Unterschied zwischen lesbaren Unicode-Domains und ihrer ASCII-Punycode-Darstellung.", intro: "Unicode ist für Lesbarkeit, Punycode für DNS-Kompatibilität in ASCII. Korrekt umgewandelt zeigen beide auf dieselbe Domain." }
};

const checkWhetherDomainIsPunycodeEn: GuideLocalizedContent = {
  title: "How to Check Whether a Strange-Looking Domain Is Punycode",
  description: "A quick workflow to verify whether an unusual domain string is valid Punycode or something else.",
  intro: "Not every odd-looking domain is Punycode. A few simple checks help you classify it correctly before blocking, trusting, or reporting it.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Helpful for",
  useCases: ["Security triage of suspicious links.", "Support tickets about unreadable domains.", "QA checks on redirect destinations.", "Reviewing logs with mixed domain formats."],
  closingTitle: "Verify format before action",
  closingText: "Check structure first, decode second, then validate ownership and intent. This avoids overreacting to harmless IDN encoding.",
  relatedToolLabel: "Open Punycode Converter",
  sections: [
    { heading: "Start with the xn-- prefix check", paragraphs: ["Punycode labels usually start with xn--.", "If no label has this prefix, the domain may still be ASCII, Unicode, or another token format."] },
    { heading: "Validate label structure", paragraphs: ["Each label should follow normal domain constraints such as no empty segments and no leading/trailing hyphens.", "Invalid structure often means the string is malformed, not valid Punycode."] },
    { heading: "Decode in a trusted tool", paragraphs: ["Decode the candidate label and inspect the Unicode output.", "If decoding fails cleanly, it is likely not valid Punycode."], bullets: ["Normalize full-width dots first.", "Test the full domain, not one fragment.", "Keep the original raw value for audit trail."] },
    { heading: "Compare against expected destination", paragraphs: ["After decoding, compare the result with known legitimate domains.", "For sensitive actions, confirm certificate info or official registrar records."] },
    { heading: "Document the outcome clearly", paragraphs: ["Record whether the domain was valid Punycode, malformed input, or unrelated encoding.", "Clear notes reduce repeated investigation across teams."] }
  ]
};

const checkWhetherDomainIsPunycodeContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: checkWhetherDomainIsPunycodeEn,
  ko: { ...checkWhetherDomainIsPunycodeEn, title: "이상하게 보이는 도메인이 Punycode인지 확인하는 방법", description: "낯선 도메인 문자열이 실제 Punycode인지 빠르게 판별하는 실무 절차입니다.", intro: "이상해 보인다고 모두 Punycode는 아닙니다. 차단·신뢰·신고 전에 형식을 먼저 확인하면 오판을 줄일 수 있습니다." },
  ja: { ...checkWhetherDomainIsPunycodeEn, title: "見慣れないドメインがPunycodeか確認する方法", description: "不自然なドメイン文字列が有効なPunycodeかを素早く見分ける手順です。", intro: "見た目が怪しい文字列でも、必ずしもPunycodeとは限りません。判断前に基本チェックを行いましょう。" },
  es: { ...checkWhetherDomainIsPunycodeEn, title: "Cómo comprobar si un dominio extraño es Punycode", description: "Flujo rápido para verificar si un dominio raro es Punycode válido o no.", intro: "No todo dominio extraño es Punycode. Con comprobaciones simples puedes clasificarlo antes de bloquear o confiar." },
  fr: { ...checkWhetherDomainIsPunycodeEn, title: "Comment vérifier si un domaine étrange est du Punycode", description: "Méthode rapide pour confirmer si une chaîne de domaine inhabituelle est un Punycode valide.", intro: "Un domaine qui paraît suspect n’est pas forcément du Punycode. Vérifiez d’abord le format avant d’agir." },
  de: { ...checkWhetherDomainIsPunycodeEn, title: "So prüfst du, ob eine auffällige Domain Punycode ist", description: "Schneller Workflow, um ungewöhnliche Domain-Strings als gültiges Punycode einzuordnen.", intro: "Nicht jede seltsam wirkende Domain ist Punycode. Mit kurzen Checks triffst du bessere Entscheidungen vor Block/Trust." }
};
const howToDecodeBase64SafelyForDebuggingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: howToDecodeBase64SafelyForDebuggingEn,
  ko: { ...howToDecodeBase64SafelyForDebuggingEn, title: "디버깅을 위한 안전한 Base64 디코딩 방법", description: "민감 정보 노출 없이 Base64를 확인하는 안전한 디버깅 절차입니다.", intro: "디코딩 결과에는 토큰이나 개인 정보가 포함될 수 있습니다. 안전한 환경에서 최소한만 확인하세요." },
  ja: { ...howToDecodeBase64SafelyForDebuggingEn, title: "デバッグ時にBase64を安全にデコードする方法", description: "機密情報を守りながらBase64内容を確認する実践手順です。", intro: "デコード結果には機密データが含まれる可能性があります。扱う場所と共有方法に注意しましょう。" },
  es: { ...howToDecodeBase64SafelyForDebuggingEn, title: "Cómo decodificar Base64 de forma segura para depurar", description: "Buenas prácticas para inspeccionar Base64 sin exponer datos sensibles.", intro: "Al decodificar puedes revelar credenciales o datos personales. Hazlo siempre en un entorno confiable." },
  fr: { ...howToDecodeBase64SafelyForDebuggingEn, title: "Comment décoder Base64 en toute sécurité pour le debug", description: "Méthode pratique pour décoder Base64 sans exposer d'informations sensibles.", intro: "Le contenu décodé peut contenir des secrets. Travaillez dans un environnement sûr et partagez uniquement le nécessaire." },
  de: { ...howToDecodeBase64SafelyForDebuggingEn, title: "Base64 sicher für Debugging decodieren", description: "So analysierst du Base64-Inhalte ohne sensible Daten unnötig offenzulegen.", intro: "Decodierte Inhalte können Tokens oder personenbezogene Daten enthalten. Deshalb immer mit Sicherheitsfokus arbeiten." }
};

const commonBase64MistakesInWebWorkflowsEn: GuideLocalizedContent = {
  title: "Common Base64 Mistakes in Web Workflows",
  description: "Avoid the most frequent Base64 mistakes that break integrations and slow debugging.",
  intro: "Base64 is simple, but workflow mistakes are common: wrong assumptions about security, encoding the wrong layer, and malformed strings.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Typical mistakes appear in",
  useCases: ["API requests.", "Auth token handling.", "Data URLs.", "Webhook payload troubleshooting."],
  closingTitle: "Keep Base64 usage intentional",
  closingText: "Use Base64 only where compatibility requires it, and validate decode/encode behavior in tests.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Mistake: treating Base64 as encryption", paragraphs: ["Base64 is reversible encoding, not data protection.", "Never rely on it for confidentiality."] },
    { heading: "Mistake: encoding data unnecessarily", paragraphs: ["Many APIs already accept raw JSON or multipart uploads.", "Extra encoding adds complexity and size overhead."] },
    { heading: "Mistake: ignoring format variants", paragraphs: ["Standard and URL-safe Base64 are different.", "Using the wrong variant can break signatures or parsing."], bullets: ["Match API spec exactly.", "Verify padding rules.", "Document expected variant."] },
    { heading: "Mistake: weak debugging hygiene", paragraphs: ["Copying raw decoded values into logs or chats can leak sensitive data.", "Mask or truncate sensitive fields before sharing."] }
  ]
};

const commonBase64MistakesInWebWorkflowsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: commonBase64MistakesInWebWorkflowsEn,
  ko: { ...commonBase64MistakesInWebWorkflowsEn, title: "웹 워크플로에서 자주 하는 Base64 실수", description: "연동 실패를 부르는 Base64 실수와 예방 방법을 정리합니다.", intro: "Base64 자체는 단순하지만, 적용 방식이 잘못되면 API 오류와 디버깅 비용이 크게 늘어납니다." },
  ja: { ...commonBase64MistakesInWebWorkflowsEn, title: "WebワークフローでよくあるBase64の失敗", description: "連携不具合につながる典型的なBase64ミスを防ぐためのガイドです。", intro: "Base64は便利ですが、使い方を誤ると不具合の原因になります。よくある失敗を先に押さえましょう。" },
  es: { ...commonBase64MistakesInWebWorkflowsEn, title: "Errores comunes de Base64 en flujos web", description: "Evita fallos típicos de Base64 que rompen integraciones y debugging.", intro: "Base64 parece simple, pero su uso incorrecto provoca errores evitables en APIs y logs." },
  fr: { ...commonBase64MistakesInWebWorkflowsEn, title: "Erreurs Base64 fréquentes dans les workflows web", description: "Évitez les erreurs courantes Base64 qui cassent les intégrations.", intro: "Base64 est simple, mais son mauvais usage crée des bugs récurrents et coûteux à diagnostiquer." },
  de: { ...commonBase64MistakesInWebWorkflowsEn, title: "Häufige Base64-Fehler in Web-Workflows", description: "So vermeidest du typische Base64-Fehler, die Integrationen stören.", intro: "Base64 ist leicht zu nutzen, aber falsche Annahmen führen schnell zu Debugging-Problemen." }
};

const whenPlainTextIsBetterThanBase64En: GuideLocalizedContent = {
  title: "When Plain Text Is Better Than Base64",
  description: "Know when plain text is the cleaner option and Base64 only adds noise and overhead.",
  intro: "Base64 is useful in specific compatibility cases, but many workflows are better with plain text. Simpler data is easier to read, test, and maintain.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Choose plain text for",
  useCases: ["Readable config values.", "Simple API parameters.", "Logs and debugging output.", "Team documentation examples."],
  closingTitle: "Prefer simplicity by default",
  closingText: "If plain text works safely, keep it plain. Add Base64 only when a system truly requires encoded transport.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Plain text improves readability", paragraphs: ["Humans can quickly inspect and verify plain values.", "Encoded strings hide meaning and slow collaboration."] },
    { heading: "Encoding adds payload size", paragraphs: ["Base64 increases data size compared with original content.", "Avoid this overhead when there is no compatibility benefit."] },
    { heading: "Debugging is faster with direct values", paragraphs: ["Plain text reduces decode steps in incident response.", "Teams can spot typos and mismatches faster."], bullets: ["Use plain text in internal docs.", "Keep logs readable.", "Reserve Base64 for strict transport needs."] },
    { heading: "Use Base64 only when required", paragraphs: ["Examples include binary transfer through text-only channels or strict API contracts.", "Outside those cases, plain text is usually the better engineering choice."] }
  ]
};

const whenPlainTextIsBetterThanBase64Content: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenPlainTextIsBetterThanBase64En,
  ko: { ...whenPlainTextIsBetterThanBase64En, title: "Base64보다 평문이 더 나은 경우", description: "불필요한 인코딩을 줄이고 더 읽기 쉬운 워크플로를 만드는 기준입니다.", intro: "호환성 요구가 없다면 평문이 더 단순하고 유지보수하기 쉽습니다." },
  ja: { ...whenPlainTextIsBetterThanBase64En, title: "Base64よりプレーンテキストが適している場面", description: "不要なエンコードを避け、読みやすい運用を保つ判断基準を紹介します。", intro: "互換性要件がないなら、プレーンテキストの方が分かりやすく保守しやすいです。" },
  es: { ...whenPlainTextIsBetterThanBase64En, title: "Cuándo el texto plano es mejor que Base64", description: "Identifica casos donde Base64 solo añade complejidad innecesaria.", intro: "Si no existe una necesidad real de compatibilidad, texto plano suele ser más simple y útil." },
  fr: { ...whenPlainTextIsBetterThanBase64En, title: "Quand le texte brut vaut mieux que Base64", description: "Repérez les cas où Base64 ajoute surtout de la complexité inutile.", intro: "Sans contrainte technique, le texte brut reste plus lisible et plus simple à maintenir." },
  de: { ...whenPlainTextIsBetterThanBase64En, title: "Wann Klartext besser ist als Base64", description: "Erkenne Situationen, in denen Base64 nur unnötige Komplexität erzeugt.", intro: "Ohne echte Kompatibilitätsanforderung ist Klartext oft die bessere Wahl." }
};


const whyBase64StringsGetSoLongEn: GuideLocalizedContent = {
  title: "Why Base64 Strings Get So Long",
  description: "Understand why Base64 output grows quickly and what that means for performance, storage, and debugging.",
  intro: "Base64 often feels convenient until the encoded value becomes much longer than expected. Knowing why this happens helps you choose cleaner data flows.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Useful for",
  useCases: ["API payload planning.", "Debugging oversized JSON fields.", "Evaluating data URLs in frontend code.", "Reducing avoidable transfer overhead."],
  closingTitle: "Treat size growth as a planning signal",
  closingText: "If Base64 length starts hurting readability or performance, switch to plain text or file transport where possible.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Base64 converts bytes into a limited character set", paragraphs: ["Base64 uses text-safe characters so binary data can move through text-only channels.", "That compatibility benefit comes with extra characters in the output."] },
    { heading: "Why output is roughly one-third larger", paragraphs: ["The encoding packs every 3 bytes into 4 Base64 characters.", "That 3-to-4 ratio is the core reason strings grow noticeably."] },
    { heading: "Where size growth becomes a real problem", paragraphs: ["Long Base64 values can bloat request bodies, logs, and database fields.", "They also make manual reviews slower during incidents."], bullets: ["Large JSON payloads are harder to diff.", "Long logs hide important signal.", "Frontend state becomes heavier than needed."] },
    { heading: "Data URLs can expand quickly in HTML and CSS", paragraphs: ["Inlining images as Base64 data URLs can simplify delivery for tiny assets.", "For larger files, it often increases bundle size and hurts caching behavior."] },
    { heading: "Practical size-control checklist", paragraphs: ["Use Base64 only when transport constraints require it.", "When possible, store files as files and keep references lightweight."], bullets: ["Prefer direct file upload endpoints.", "Avoid encoding content twice.", "Measure payload size before and after encoding."] }
  ]
};

const whyBase64StringsGetSoLongContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whyBase64StringsGetSoLongEn,
  ko: { ...whyBase64StringsGetSoLongEn, title: "왜 Base64 문자열은 그렇게 길어질까", description: "Base64 길이가 커지는 이유와 성능·저장·디버깅에 미치는 영향을 실무적으로 설명합니다.", intro: "편리해 보이던 Base64가 예상보다 길어지면 전송과 디버깅 비용이 빠르게 늘어납니다. 원리를 알면 더 나은 선택을 할 수 있습니다." },
  ja: { ...whyBase64StringsGetSoLongEn, title: "なぜBase64文字列は長くなるのか", description: "Base64が長くなる理由と、性能・保存・デバッグへの影響を実務目線で解説します。", intro: "便利なはずのBase64でも、長さが増えると運用コストが上がります。理由を理解すれば判断が速くなります。" },
  es: { ...whyBase64StringsGetSoLongEn, title: "Por qué las cadenas Base64 se vuelven tan largas", description: "Entiende por qué Base64 crece tanto y cómo afecta rendimiento, almacenamiento y depuración.", intro: "Base64 es útil, pero su longitud puede crecer más de lo esperado. Conocer la causa te ayuda a diseñar flujos más limpios." },
  fr: { ...whyBase64StringsGetSoLongEn, title: "Pourquoi les chaînes Base64 deviennent si longues", description: "Comprenez pourquoi Base64 grossit rapidement et l’impact sur performance, stockage et debug.", intro: "Base64 est pratique, mais la taille augmente vite. Comprendre ce point aide à choisir de meilleurs flux de données." },
  de: { ...whyBase64StringsGetSoLongEn, title: "Warum Base64-Strings so lang werden", description: "Verstehe, warum Base64-Ausgaben wachsen und was das für Performance, Speicher und Debugging bedeutet.", intro: "Base64 ist praktisch, kann aber schnell unnötig lang werden. Mit dem Hintergrund triffst du bessere Architekturentscheidungen." }
};

const tellWhetherStringIsBase64En: GuideLocalizedContent = {
  title: "How to Tell Whether a String Is Base64 or Something Else",
  description: "Use simple checks to identify whether a value is likely Base64 before decoding or passing it to downstream systems.",
  intro: "Not every random-looking string is Base64. Quick validation steps help you avoid false assumptions and wasted debugging time.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Helpful for",
  useCases: ["Inspecting API responses.", "Debugging webhook payloads.", "Reviewing logs with opaque values.", "Triaging encoding-related support tickets."],
  closingTitle: "Validate first, decode second",
  closingText: "A short validation routine prevents incorrect decoding attempts and keeps debugging focused.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Look for a Base64 character pattern", paragraphs: ["Standard Base64 usually contains letters, numbers, +, /, and optional = padding.", "URL-safe Base64 may use - and _ instead of + and /." ] },
    { heading: "Check length and padding clues", paragraphs: ["Many Base64 strings have lengths that align with 4-character groups.", "Missing or unusual padding can indicate URL-safe or truncated values."] },
    { heading: "Try a safe decode and re-encode test", paragraphs: ["Decode in a trusted environment, then encode the result again.", "If round-trip output matches expected normalization, the value is likely valid Base64."], bullets: ["Trim whitespace before testing.", "Do not assume JSON means Base64.", "Stop if decoding throws UTF-8 errors."] },
    { heading: "Distinguish Base64 from hashes and IDs", paragraphs: ["Hex hashes, UUIDs, and compressed tokens can look similar at first glance.", "Check format rules before deciding the field must be Base64."] },
    { heading: "Add validation at system boundaries", paragraphs: ["If your app accepts encoded input, validate format before processing.", "Clear validation errors are better than silent decode failures."] }
  ]
};

const tellWhetherStringIsBase64Content: Record<LocaleCode, GuideLocalizedContent> = {
  en: tellWhetherStringIsBase64En,
  ko: { ...tellWhetherStringIsBase64En, title: "문자열이 Base64인지 다른 형식인지 구분하는 방법", description: "디코딩 전에 값이 Base64인지 빠르게 판별하는 실전 점검법입니다.", intro: "무작위처럼 보이는 값이 모두 Base64는 아닙니다. 먼저 확인하면 디버깅 시간을 크게 줄일 수 있습니다." },
  ja: { ...tellWhetherStringIsBase64En, title: "文字列がBase64かどうかを見分ける方法", description: "デコード前に値がBase64かを判断するための実用チェック手順です。", intro: "見慣れない文字列が必ずしもBase64とは限りません。先に見分けると調査が速くなります。" },
  es: { ...tellWhetherStringIsBase64En, title: "Cómo saber si una cadena es Base64 o otra cosa", description: "Comprobaciones rápidas para identificar si un valor probablemente es Base64 antes de decodificar.", intro: "No toda cadena extraña es Base64. Validar primero evita suposiciones y depuración innecesaria." },
  fr: { ...tellWhetherStringIsBase64En, title: "Comment savoir si une chaîne est en Base64 ou autre chose", description: "Vérifications simples pour reconnaître un Base64 probable avant de décoder.", intro: "Toute chaîne opaque n’est pas forcément du Base64. Vérifier rapidement évite des fausses pistes." },
  de: { ...tellWhetherStringIsBase64En, title: "So erkennst du, ob ein String Base64 ist oder etwas anderes", description: "Praktische Prüfungen, um Werte vor dem Decodieren als Base64 einzuordnen.", intro: "Nicht jeder kryptisch wirkende Wert ist Base64. Ein kurzer Check spart Zeit beim Debugging." }
};

const whenBase64MakesDebuggingHarderEn: GuideLocalizedContent = {
  title: "When Base64 Makes Debugging Harder Instead of Easier",
  description: "Learn when Base64 slows troubleshooting and how to keep debug workflows readable and safe.",
  intro: "Base64 can help transport data, but it can also hide useful context during incident response. Use it deliberately to avoid extra debugging friction.",
  categoryLabel: "Developer workflow",
  useCasesTitle: "Useful for",
  useCases: ["API incident triage.", "Log design decisions.", "Team debugging workflows.", "Improving support handoff quality."],
  closingTitle: "Optimize for readable debugging paths",
  closingText: "If encoded data blocks fast diagnosis, adjust logging and transport choices toward clearer intermediate outputs.",
  relatedToolLabel: "Open Base64 Encode/Decode",
  sections: [
    { heading: "Encoded blobs hide meaning in logs", paragraphs: ["Long encoded values make it hard to spot field-level problems quickly.", "Teams lose time decoding before they can even inspect the issue."] },
    { heading: "Extra transform steps increase failure points", paragraphs: ["Each encode/decode layer adds chances for variant or padding mismatches.", "Debug sessions become longer when the true source error is upstream."] },
    { heading: "Collaboration gets slower across teams", paragraphs: ["Support, QA, and product teammates may not decode values during triage.", "Readable intermediate values improve cross-functional issue handoff."], bullets: ["Share redacted plain examples in tickets.", "Log both summary metadata and safe previews.", "Document expected encoding stage clearly."] },
    { heading: "Security and debugging must be balanced", paragraphs: ["Do not log full decoded secrets just to make debugging easier.", "Prefer masked fields plus targeted local decode when deeper analysis is required."] },
    { heading: "A practical rule for everyday workflows", paragraphs: ["Keep payloads plain where possible, encode only at boundaries that require it.", "This keeps internal debugging fast while preserving compatibility."] }
  ]
};

const whenBase64MakesDebuggingHarderContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenBase64MakesDebuggingHarderEn,
  ko: { ...whenBase64MakesDebuggingHarderEn, title: "Base64가 디버깅을 더 어렵게 만드는 경우", description: "Base64가 문제 해결을 늦추는 상황과 가독성 높은 디버깅 흐름을 만드는 방법입니다.", intro: "전송에는 유용하지만, Base64는 장애 대응에서 중요한 맥락을 숨길 수 있습니다. 필요한 지점에서만 사용하세요." },
  ja: { ...whenBase64MakesDebuggingHarderEn, title: "Base64がデバッグを難しくする場面", description: "Base64で調査が遅くなる典型パターンと、読みやすいデバッグ運用の作り方を解説します。", intro: "Base64は転送に便利ですが、障害対応では情報を見えにくくすることがあります。使いどころを絞ることが重要です。" },
  es: { ...whenBase64MakesDebuggingHarderEn, title: "Cuándo Base64 complica la depuración en lugar de ayudar", description: "Detecta cuándo Base64 frena el diagnóstico y cómo mantener un flujo de depuración más claro.", intro: "Base64 sirve para transportar datos, pero en incidencias puede ocultar contexto clave. Úsalo solo donde aporte valor real." },
  fr: { ...whenBase64MakesDebuggingHarderEn, title: "Quand Base64 complique le débogage au lieu de l’aider", description: "Identifiez les cas où Base64 ralentit l’analyse et gardez des workflows de debug plus lisibles.", intro: "Base64 facilite parfois le transport, mais peut masquer les signaux utiles en incident. Mieux vaut l’utiliser avec intention." },
  de: { ...whenBase64MakesDebuggingHarderEn, title: "Wann Base64 das Debugging eher erschwert", description: "Erkenne Situationen, in denen Base64 die Fehlersuche verlangsamt, und halte Debug-Workflows lesbar.", intro: "Für den Transport ist Base64 nützlich, bei Incidents kann es aber wichtige Hinweise verstecken. Deshalb gezielt einsetzen." }
};

const downloadYoutubeThumbnailByUrlEn: GuideLocalizedContent = {
  title: "How to Download a YouTube Thumbnail by URL",
  description: "A quick workflow to fetch and save YouTube thumbnail images from a video URL.",
  intro: "If you need a thumbnail for review, inspiration, or content planning, you can extract it directly from a YouTube video URL in a few seconds.",
  categoryLabel: "YouTube workflow",
  useCasesTitle: "When this helps",
  useCases: ["Collecting visual references for content ideas.", "Preparing social drafts with preview images.", "Comparing thumbnail styles across channels."],
  closingTitle: "Use the URL, then save the best size",
  closingText: "Paste the video link, check available sizes, and download the one that matches your use case.",
  relatedToolLabel: "Open YouTube Thumbnail Extractor",
  sections: [
    { heading: "Copy a clean video URL", paragraphs: ["Use a full YouTube link from the address bar or share menu.", "Remove extra tracking parameters when possible so parsing stays simple."] },
    { heading: "Paste and extract thumbnails", paragraphs: ["Drop the URL into the extractor to generate available thumbnail images.", "Most videos provide multiple size options, so preview before downloading."] },
    { heading: "Choose the right file for your task", paragraphs: ["Use larger images for mockups and quality checks.", "For quick notes or internal docs, a smaller version may be enough."], bullets: ["Compare dimensions before saving.", "Check text readability at actual display size.", "Keep filenames organized by channel or campaign."] },
    { heading: "Respect usage rights", paragraphs: ["Use thumbnails as references unless you have permission to republish.", "When in doubt, create your own variation instead of copying directly."] }
  ]
};

const downloadYoutubeThumbnailByUrlContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: downloadYoutubeThumbnailByUrlEn,
  ko: { ...downloadYoutubeThumbnailByUrlEn, title: "URL로 YouTube 썸네일 다운로드하는 방법", description: "영상 URL만으로 YouTube 썸네일 이미지를 빠르게 저장하는 방법입니다.", intro: "기획 참고나 비교용으로 썸네일이 필요할 때, 영상 URL만 붙여 넣어 바로 추출할 수 있습니다." },
  ja: { ...downloadYoutubeThumbnailByUrlEn, title: "URLからYouTubeサムネイルを保存する方法", description: "動画URLからYouTubeサムネイル画像をすばやく取得する手順です。", intro: "企画や比較用にサムネイルが必要なときは、動画URLを使えばすぐに抽出できます。" },
  es: { ...downloadYoutubeThumbnailByUrlEn, title: "Cómo descargar una miniatura de YouTube por URL", description: "Flujo rápido para obtener y guardar miniaturas de YouTube desde una URL.", intro: "Si necesitas una miniatura para referencia o planificación, puedes extraerla en segundos con el enlace del video." },
  fr: { ...downloadYoutubeThumbnailByUrlEn, title: "Comment télécharger une miniature YouTube via URL", description: "Méthode rapide pour récupérer et enregistrer une miniature YouTube depuis une URL.", intro: "Pour une référence visuelle ou une préparation éditoriale, collez simplement l'URL de la vidéo." },
  de: { ...downloadYoutubeThumbnailByUrlEn, title: "YouTube-Thumbnail per URL herunterladen", description: "Schneller Ablauf, um Vorschaubilder aus einer YouTube-URL zu speichern.", intro: "Für Recherchen oder Content-Planung kannst du Thumbnails direkt aus der Video-URL extrahieren." }
};

const youtubeThumbnailSizesExplainedEn: GuideLocalizedContent = {
  title: "What Thumbnail Sizes Are Available on YouTube?",
  description: "Understand common YouTube thumbnail size variants and when each one is useful.",
  intro: "YouTube thumbnails are available in several sizes. Choosing the right version helps you avoid blurry comparisons and layout mistakes.",
  categoryLabel: "YouTube workflow",
  useCasesTitle: "Useful for",
  useCases: ["Checking image sharpness before analysis.", "Preparing visual audits for a channel.", "Selecting the best reference size for slides."],
  closingTitle: "Always compare size before reuse",
  closingText: "Use the largest available image for quality checks, then scale down only if needed.",
  relatedToolLabel: "Open YouTube Thumbnail Extractor",
  sections: [
    { heading: "Why multiple sizes exist", paragraphs: ["YouTube serves different thumbnail sizes for different surfaces.", "That is why one image can look sharp on desktop but soft in another context."] },
    { heading: "Common sizes you will see", paragraphs: ["Most extractors show default, medium, high, and max-resolution variants.", "Not every video has every size, especially older uploads."], bullets: ["Default: fast preview.", "Medium/High: general review.", "Max resolution: best for detail checks."] },
    { heading: "How to pick the right one", paragraphs: ["If you are inspecting typography or small details, start with the largest option.", "If you only need a quick visual reference in notes, a medium size is often fine."] },
    { heading: "Quality check tips", paragraphs: ["Zoom to inspect edges and text clarity before using a thumbnail as inspiration.", "If quality is weak at source, do not expect perfect results after resizing."] }
  ]
};

const youtubeThumbnailSizesExplainedContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: youtubeThumbnailSizesExplainedEn,
  ko: { ...youtubeThumbnailSizesExplainedEn, title: "YouTube 썸네일 크기 종류 정리", description: "YouTube 썸네일 크기별 특징과 상황별 선택 기준을 설명합니다.", intro: "썸네일은 여러 크기로 제공됩니다. 목적에 맞는 크기를 고르면 흐릿한 비교를 줄일 수 있습니다." },
  ja: { ...youtubeThumbnailSizesExplainedEn, title: "YouTubeサムネイルのサイズを解説", description: "YouTubeで取得できる主なサムネイルサイズと使い分けを紹介します。", intro: "サムネイルには複数サイズがあります。用途に合うサイズを選ぶと確認精度が上がります。" },
  es: { ...youtubeThumbnailSizesExplainedEn, title: "¿Qué tamaños de miniatura ofrece YouTube?", description: "Guía práctica de tamaños de miniatura de YouTube y su uso recomendado.", intro: "YouTube ofrece miniaturas en distintos tamaños. Elegir bien evita comparaciones borrosas." },
  fr: { ...youtubeThumbnailSizesExplainedEn, title: "Quelles tailles de miniature sont disponibles sur YouTube ?", description: "Comprenez les formats de miniatures YouTube et leur usage pratique.", intro: "Les miniatures YouTube existent en plusieurs tailles. Le bon choix évite les analyses floues." },
  de: { ...youtubeThumbnailSizesExplainedEn, title: "Welche Thumbnail-Größen gibt es bei YouTube?", description: "Überblick über gängige YouTube-Thumbnail-Größen und ihren praktischen Einsatz.", intro: "YouTube stellt Thumbnails in mehreren Größen bereit. Die richtige Wahl verhindert unscharfe Vergleiche." }
};

const checkYoutubeThumbnailQualityEn: GuideLocalizedContent = {
  title: "How to Check YouTube Thumbnail Quality Before Reusing It",
  description: "A practical checklist for reviewing thumbnail clarity and suitability before reuse.",
  intro: "Before you reuse a thumbnail for references, inspect its quality first. Small compression artifacts can become very visible in presentations or mockups.",
  categoryLabel: "YouTube workflow",
  useCasesTitle: "Quick quality checks for",
  useCases: ["Decks and reports.", "Creative benchmark boards.", "Team feedback sessions."],
  closingTitle: "Check quality before you commit",
  closingText: "A 30-second review avoids blurry visuals and saves rework later.",
  relatedToolLabel: "Open YouTube Thumbnail Extractor",
  sections: [
    { heading: "Start with the largest available image", paragraphs: ["Always inspect the highest resolution first.", "If the largest version looks weak, smaller versions will not improve quality."] },
    { heading: "Inspect text and edge sharpness", paragraphs: ["Zoom in and verify that text edges are readable, not smeared.", "Look at faces, logos, and high-contrast lines for compression noise."] },
    { heading: "Check real usage size", paragraphs: ["A thumbnail can look acceptable when tiny but fail at slide or article size.", "Preview it at the size you plan to use before finalizing."], bullets: ["Test at 100% zoom.", "Check on both light and dark backgrounds.", "Avoid aggressive upscaling."] },
    { heading: "Document source and intent", paragraphs: ["Save where the image came from and why it was used.", "This keeps team communication clear when references are reviewed later."] }
  ]
};

const checkYoutubeThumbnailQualityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: checkYoutubeThumbnailQualityEn,
  ko: { ...checkYoutubeThumbnailQualityEn, title: "재사용 전 YouTube 썸네일 품질 확인 방법", description: "썸네일 재사용 전에 선명도와 적합성을 점검하는 실전 체크리스트입니다.", intro: "참고용으로 썸네일을 쓸 때는 먼저 품질을 확인하세요. 작은 압축 흔적도 실제 작업에서 크게 보일 수 있습니다." },
  ja: { ...checkYoutubeThumbnailQualityEn, title: "再利用前にYouTubeサムネイル品質を確認する方法", description: "サムネイルを使う前に画質を見極める実践チェックリストです。", intro: "参照用途でも、先に品質確認をしておくと後戻りを減らせます。" },
  es: { ...checkYoutubeThumbnailQualityEn, title: "Cómo revisar la calidad de una miniatura de YouTube antes de reutilizarla", description: "Checklist práctico para validar nitidez y uso antes de reutilizar miniaturas.", intro: "Antes de reutilizar una miniatura como referencia, revisa su calidad para evitar resultados borrosos." },
  fr: { ...checkYoutubeThumbnailQualityEn, title: "Comment vérifier la qualité d'une miniature YouTube avant réutilisation", description: "Checklist pratique pour valider netteté et pertinence avant réutilisation.", intro: "Avant toute réutilisation, vérifiez la qualité de la miniature pour éviter un rendu flou." },
  de: { ...checkYoutubeThumbnailQualityEn, title: "So prüfst du die Qualität eines YouTube-Thumbnails vor der Nutzung", description: "Praktische Checkliste für Schärfe und Eignung vor der Wiederverwendung.", intro: "Bevor du ein Thumbnail als Referenz nutzt, solltest du die Qualität kurz prüfen." }
};

const whenToUseYoutubeThumbnailsForReferenceEn: GuideLocalizedContent = {
  title: "When to Use YouTube Thumbnails for Reference Only",
  description: "Learn when YouTube thumbnails are good inspiration material and when they should not be reused directly.",
  intro: "YouTube thumbnails are useful for analysis, trend research, and moodboards. But that does not automatically mean they are safe to republish.",
  categoryLabel: "YouTube workflow",
  useCasesTitle: "Best used for",
  useCases: ["Style benchmarking.", "Competitor research.", "Creative direction discussions."],
  closingTitle: "Reference first, recreate second",
  closingText: "Use thumbnails to learn patterns, then build original assets for publishing.",
  relatedToolLabel: "Open YouTube Thumbnail Extractor",
  sections: [
    { heading: "Use thumbnails as visual research", paragraphs: ["Collect examples to compare color, framing, and text hierarchy.", "This helps teams discuss what works without copying exact designs."] },
    { heading: "Know the copyright boundary", paragraphs: ["Most third-party thumbnails should be treated as protected creative assets.", "If publication rights are unclear, avoid direct reuse."] },
    { heading: "Turn references into original work", paragraphs: ["Extract practical patterns instead of duplicating layouts.", "Build your own version with original text, imagery, and branding."], bullets: ["Analyze composition.", "Note contrast and typography choices.", "Create fresh final artwork."] },
    { heading: "Keep source notes", paragraphs: ["Track where references came from for internal review.", "Good documentation reduces confusion in content approval steps."] }
  ]
};

const whenToUseYoutubeThumbnailsForReferenceContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenToUseYoutubeThumbnailsForReferenceEn,
  ko: { ...whenToUseYoutubeThumbnailsForReferenceEn, title: "YouTube 썸네일을 참고용으로만 써야 할 때", description: "썸네일을 영감 자료로 활용할 때와 직접 재사용을 피해야 할 때를 정리합니다.", intro: "썸네일은 트렌드 분석과 무드보드에 유용하지만, 그대로 재게시 가능한 것은 아닙니다." },
  ja: { ...whenToUseYoutubeThumbnailsForReferenceEn, title: "YouTubeサムネイルを参考用途に留めるべき場面", description: "参考には使えても、そのまま再利用すべきでないケースを整理します。", intro: "サムネイルは分析素材として便利ですが、再公開の可否とは別問題です。" },
  es: { ...whenToUseYoutubeThumbnailsForReferenceEn, title: "Cuándo usar miniaturas de YouTube solo como referencia", description: "Cuándo sirven para inspiración y cuándo no conviene reutilizarlas directamente.", intro: "Las miniaturas de YouTube son útiles para analizar estilos, pero eso no implica permiso de republicación." },
  fr: { ...whenToUseYoutubeThumbnailsForReferenceEn, title: "Quand utiliser les miniatures YouTube uniquement comme référence", description: "Savoir quand s'en inspirer et quand éviter la réutilisation directe.", intro: "Les miniatures sont utiles pour l'analyse, mais pas forcément réutilisables telles quelles." },
  de: { ...whenToUseYoutubeThumbnailsForReferenceEn, title: "Wann YouTube-Thumbnails nur als Referenz dienen sollten", description: "Wann Thumbnails als Inspiration sinnvoll sind und wann direkte Nutzung problematisch ist.", intro: "Thumbnails eignen sich gut zur Analyse, aber nicht automatisch zur direkten Weiterverwendung." }
};

const hexVsRgbVsHslEn: GuideLocalizedContent = {
  title: "HEX vs RGB vs HSL: Which Color Format Should You Use?",
  description: "Pick the most practical color format for CSS, design systems, and quick UI updates.",
  intro: "HEX, RGB, and HSL describe the same colors in different ways. The best format depends on your workflow, not on which one is \"more correct.\"",
  categoryLabel: "Color workflow",
  useCasesTitle: "Common decisions",
  useCases: ["Writing CSS quickly.", "Sharing colors with teammates.", "Adjusting lightness or saturation."],
  closingTitle: "Use the format that speeds your work",
  closingText: "Keep a preferred format for consistency, but convert when a task needs better control.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    { heading: "HEX is compact and familiar", paragraphs: ["HEX values are short and common in frontend workflows.", "They are easy to copy, but not always intuitive for manual tweaking."] },
    { heading: "RGB is explicit for screen channels", paragraphs: ["RGB shows red, green, and blue channel values directly.", "It is useful when teams discuss channel-level adjustments."] },
    { heading: "HSL is practical for tuning", paragraphs: ["HSL makes hue, saturation, and lightness easier to reason about.", "It is often the fastest format for creating variants like hover or muted states."], bullets: ["Use HEX for quick copy-paste.", "Use RGB for channel clarity.", "Use HSL for controlled adjustments."] },
    { heading: "Choose one default, not one forever", paragraphs: ["Set a team default format to reduce inconsistency.", "Switch formats when debugging or design tasks require it."] }
  ]
};

const hexVsRgbVsHslContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: hexVsRgbVsHslEn,
  ko: { ...hexVsRgbVsHslEn, title: "HEX vs RGB vs HSL: 어떤 색상 형식을 써야 할까?", description: "CSS와 디자인 작업에서 상황별로 적절한 색상 형식을 고르는 방법입니다.", intro: "세 형식은 같은 색을 다르게 표현합니다. 중요한 것은 작업 속도와 관리 편의성입니다." },
  ja: { ...hexVsRgbVsHslEn, title: "HEX・RGB・HSLの違いと使い分け", description: "CSSやデザイン作業で実用的な色形式を選ぶためのガイドです。", intro: "3つの形式は同じ色を別の見方で表します。用途で選ぶのが最適です。" },
  es: { ...hexVsRgbVsHslEn, title: "HEX vs RGB vs HSL: ¿qué formato de color usar?", description: "Cómo elegir el formato de color más práctico para CSS y diseño.", intro: "HEX, RGB y HSL representan el mismo color de formas distintas. Elige según el flujo de trabajo." },
  fr: { ...hexVsRgbVsHslEn, title: "HEX vs RGB vs HSL : quel format de couleur choisir ?", description: "Choisissez le format le plus pratique pour CSS et workflows design.", intro: "HEX, RGB et HSL décrivent la même couleur différemment. Le bon choix dépend de votre usage." },
  de: { ...hexVsRgbVsHslEn, title: "HEX vs RGB vs HSL: Welches Farbformat passt?", description: "Das passende Farbformat für CSS, Designsysteme und schnelle UI-Anpassungen.", intro: "Alle drei Formate beschreiben dieselbe Farbe. Entscheidend ist, welches Format deinen Workflow unterstützt." }
};

const matchWebsiteColorsConsistentlyEn: GuideLocalizedContent = {
  title: "How to Match Website Colors More Consistently",
  description: "A simple process to keep color choices aligned across pages and components.",
  intro: "Inconsistent color usage makes interfaces feel unpolished. A small color-matching routine helps teams ship cleaner UI updates.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Useful for",
  useCases: ["Landing page updates.", "Component library cleanup.", "Marketing page QA."],
  closingTitle: "Consistency beats perfect guessing",
  closingText: "Capture values once, reuse them everywhere, and keep notes for future edits.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    { heading: "Start from trusted source colors", paragraphs: ["Use existing brand tokens or production styles as your baseline.", "Avoid selecting colors by eye when an exact value already exists."] },
    { heading: "Sample and compare before replacing", paragraphs: ["Pick the current color and compare it against your target value.", "Small numeric differences can look very different on actual components."] },
    { heading: "Store a small approved set", paragraphs: ["Keep a shortlist of primary, secondary, and neutral values.", "This reduces accidental color drift across pages."], bullets: ["Record HEX and RGB/HSL equivalents.", "Name colors by role, not by appearance.", "Share updates with designers and developers."] },
    { heading: "Recheck in context", paragraphs: ["Validate colors in real UI states like hover, disabled, and dark backgrounds.", "A color that looks right in isolation can fail in context."] }
  ]
};

const matchWebsiteColorsConsistentlyContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: matchWebsiteColorsConsistentlyEn,
  ko: { ...matchWebsiteColorsConsistentlyEn, title: "웹사이트 색상을 더 일관되게 맞추는 방법", description: "페이지와 컴포넌트 전반에서 색상 일관성을 유지하는 간단한 절차입니다.", intro: "색상 사용이 흔들리면 UI 완성도가 떨어집니다. 짧은 점검 루틴만으로도 품질을 높일 수 있습니다." },
  ja: { ...matchWebsiteColorsConsistentlyEn, title: "Webサイトの色を一貫して合わせる方法", description: "ページやコンポーネント間で色を揃えるためのシンプルな手順です。", intro: "色のばらつきはUIの品質を下げます。小さな運用ルールで改善できます。" },
  es: { ...matchWebsiteColorsConsistentlyEn, title: "Cómo igualar colores web de forma más consistente", description: "Proceso simple para mantener coherencia de color en todo el sitio.", intro: "La inconsistencia de color hace que la interfaz se vea poco cuidada. Un flujo corto de revisión ayuda mucho." },
  fr: { ...matchWebsiteColorsConsistentlyEn, title: "Comment harmoniser les couleurs d'un site avec plus de constance", description: "Méthode simple pour garder des couleurs cohérentes entre pages et composants.", intro: "Des couleurs incohérentes donnent une impression brouillonne. Une routine légère suffit souvent à corriger cela." },
  de: { ...matchWebsiteColorsConsistentlyEn, title: "Website-Farben konsistenter abstimmen", description: "Ein einfacher Prozess für stimmige Farben über Seiten und Komponenten hinweg.", intro: "Uneinheitliche Farben wirken schnell unfertig. Mit einem kleinen Prüfablauf bleibt das UI konsistent." }
};


const createBasicWebsiteColorPaletteEn: GuideLocalizedContent = {
  title: "How to Create a Basic Website Color Palette",
  description: "Build a small website palette you can apply quickly across buttons, backgrounds, and text.",
  intro: "Most websites do not need a complex color system on day one. A compact palette helps you move faster while keeping screens consistent.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Good fit for",
  useCases: ["Launching a new landing page.", "Refreshing a small business site.", "Creating a first design system draft."],
  closingTitle: "Start simple, then expand",
  closingText: "A small stable palette is easier to maintain than a large set of untested colors.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Choose one reliable base color", paragraphs: ["Start from your brand color or the main tone used in your hero section.", "This color anchors buttons, links, and key highlights."] },
    { heading: "Add two neutral colors", paragraphs: ["Use one light neutral for surfaces and one dark neutral for text.", "Neutrals keep layouts readable and reduce visual noise."] },
    { heading: "Add one accent color", paragraphs: ["Pick one accent for actions, badges, or small highlights.", "Too many accents quickly make the page feel unstructured."], bullets: ["Primary color for key UI elements.", "Light neutral for backgrounds.", "Dark neutral for text.", "One accent for emphasis."] },
    { heading: "Test on a real page", paragraphs: ["Apply the palette to one page before rolling it out broadly.", "If contrast or hierarchy feels weak, adjust now before scaling."] }
  ]
};

const createBasicWebsiteColorPaletteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: createBasicWebsiteColorPaletteEn,
  ko: { ...createBasicWebsiteColorPaletteEn, title: "기본 웹사이트 컬러 팔레트를 만드는 방법", description: "버튼, 배경, 텍스트에 바로 적용할 수 있는 작은 팔레트를 만드는 실무 가이드입니다.", intro: "처음부터 복잡한 색상 체계가 필요하지는 않습니다. 작은 팔레트가 속도와 일관성을 함께 잡아줍니다." },
  ja: { ...createBasicWebsiteColorPaletteEn, title: "基本的なWebサイト配色を作る方法", description: "ボタン・背景・文字にすぐ使える小さなパレットを作る手順です。", intro: "最初から複雑な配色は不要です。小さなパレットの方が運用しやすくなります。" },
  es: { ...createBasicWebsiteColorPaletteEn, title: "Cómo crear una paleta de color básica para un sitio web", description: "Crea una paleta pequeña y práctica para botones, fondos y texto.", intro: "No necesitas un sistema complejo al inicio. Una paleta corta te ayuda a avanzar con consistencia." },
  fr: { ...createBasicWebsiteColorPaletteEn, title: "Comment créer une palette de couleurs de base pour un site", description: "Construisez une palette courte à appliquer vite sur boutons, fonds et texte.", intro: "Inutile de démarrer avec un système complexe. Une petite palette rend le workflow plus fluide." },
  de: { ...createBasicWebsiteColorPaletteEn, title: "So erstellst du eine einfache Website-Farbpalette", description: "Eine kleine, sofort nutzbare Palette für Buttons, Hintergründe und Text.", intro: "Für den Start brauchst du kein komplexes Farbsystem. Eine kompakte Palette sorgt schneller für Konsistenz." }
};

const howManyColorsInBrandPaletteEn: GuideLocalizedContent = {
  title: "How Many Colors Should a Brand Palette Have?",
  description: "Use a practical range for brand palettes so teams can design quickly without creating visual chaos.",
  intro: "Too few colors can limit flexibility, and too many colors can confuse users. A practical range gives you structure and room to grow.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Helpful for",
  useCases: ["New brand setup.", "Website redesign planning.", "Design system cleanup."],
  closingTitle: "Pick a usable range",
  closingText: "Most teams work well with a small core set plus optional utility colors.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Use a core set first", paragraphs: ["Start with 3 to 5 core colors: primary, secondary, and neutrals.", "This is enough for most interfaces and marketing pages."] },
    { heading: "Separate core and utility colors", paragraphs: ["Keep status colors like success, warning, and error outside the core brand set.", "This keeps brand identity clear while supporting UI feedback states."] },
    { heading: "Avoid adding colors too early", paragraphs: ["Add new colors only when a real use case appears.", "If a color has no clear role, leave it out."], bullets: ["Core brand colors: usually 3-5.", "Utility status colors: usually 2-4.", "Accents: 1-2 max for most websites."] },
    { heading: "Document each color role", paragraphs: ["Label colors by function, not just by shade names.", "Role-based naming improves consistency in handoff and code."] }
  ]
};

const howManyColorsInBrandPaletteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: howManyColorsInBrandPaletteEn,
  ko: { ...howManyColorsInBrandPaletteEn, title: "브랜드 팔레트에는 색상이 몇 개가 적당할까?", description: "너무 적거나 많은 팔레트를 피하고 실무에 맞는 범위를 정하는 방법입니다.", intro: "색상이 너무 적으면 확장성이 떨어지고, 너무 많으면 일관성이 무너집니다." },
  ja: { ...howManyColorsInBrandPaletteEn, title: "ブランド配色は何色が適切？", description: "多すぎず少なすぎない実用的な色数の決め方を紹介します。", intro: "色数のバランスは運用のしやすさに直結します。" },
  es: { ...howManyColorsInBrandPaletteEn, title: "¿Cuántos colores debe tener una paleta de marca?", description: "Define una cantidad práctica para diseñar con orden y sin ruido visual.", intro: "Muy pocos colores limitan, demasiados desordenan. El equilibrio importa." },
  fr: { ...howManyColorsInBrandPaletteEn, title: "Combien de couleurs dans une palette de marque ?", description: "Choisissez une plage pratique pour garder cohérence et flexibilité.", intro: "Trop peu de couleurs limitent, trop de couleurs brouillent l'interface." },
  de: { ...howManyColorsInBrandPaletteEn, title: "Wie viele Farben braucht eine Markenpalette?", description: "Finde eine praktikable Farbanzahl für konsistentes Design ohne Unruhe.", intro: "Zu wenige Farben begrenzen dich, zu viele machen das UI unübersichtlich." }
};

const chooseSupportingColorsAroundBrandColorEn: GuideLocalizedContent = {
  title: "How to Choose Supporting Colors Around a Brand Color",
  description: "Build secondary and neutral colors around your main brand tone without losing visual focus.",
  intro: "A strong brand color works better when surrounding colors support it instead of competing with it.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Useful for",
  useCases: ["Designing marketing pages.", "Building UI tokens.", "Improving brand consistency across teams."],
  closingTitle: "Support the main color, don't fight it",
  closingText: "Secondary colors should make your brand tone clearer, not louder.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Start with one brand anchor", paragraphs: ["Lock your primary brand color first.", "Treat it as the reference point for all nearby choices."] },
    { heading: "Pick quieter supporting colors", paragraphs: ["Use softer saturation for secondary colors so the brand tone stays dominant.", "Neutrals should handle structure and readability."] },
    { heading: "Assign clear roles", paragraphs: ["Decide which colors are for backgrounds, borders, and highlights.", "Role clarity prevents random color usage."], bullets: ["Secondary color for supporting UI blocks.", "Neutral ramp for surfaces and text.", "One accent for occasional emphasis."] },
    { heading: "Check combinations in context", paragraphs: ["Preview button, card, and text combinations before finalizing.", "Adjust supporting colors if they overpower calls to action."] }
  ]
};

const chooseSupportingColorsAroundBrandColorContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: chooseSupportingColorsAroundBrandColorEn,
  ko: { ...chooseSupportingColorsAroundBrandColorEn, title: "브랜드 컬러를 중심으로 보조 색상을 고르는 방법", description: "메인 브랜드 톤을 해치지 않으면서 보조/중립 색을 구성하는 방법입니다.", intro: "좋은 보조 색상은 브랜드 색을 더 돋보이게 해야 합니다." },
  ja: { ...chooseSupportingColorsAroundBrandColorEn, title: "ブランドカラーの周辺色を選ぶ方法", description: "主役カラーを活かしながら補助色とニュートラルを作る手順です。", intro: "補助色は主役を目立たせるために使います。" },
  es: { ...chooseSupportingColorsAroundBrandColorEn, title: "Cómo elegir colores de apoyo alrededor del color de marca", description: "Crea colores secundarios y neutros sin quitar protagonismo al color principal.", intro: "Los colores de apoyo deben reforzar la marca, no competir con ella." },
  fr: { ...chooseSupportingColorsAroundBrandColorEn, title: "Comment choisir des couleurs d'appui autour d'une couleur de marque", description: "Construisez des secondaires et neutres sans affaiblir la couleur principale.", intro: "Les couleurs d'appui doivent soutenir la couleur de marque, pas la concurrencer." },
  de: { ...chooseSupportingColorsAroundBrandColorEn, title: "So wählst du unterstützende Farben rund um eine Markenfarbe", description: "Sekundär- und Neutralfarben aufbauen, ohne die Hauptfarbe zu verdrängen.", intro: "Unterstützende Farben sollen die Markenfarbe stärken, nicht mit ihr konkurrieren." }
};

const websitePaletteMistakesEn: GuideLocalizedContent = {
  title: "Website Palette Mistakes That Make Designs Feel Inconsistent",
  description: "Avoid common palette mistakes that make pages look fragmented and harder to maintain.",
  intro: "Even good individual colors can fail when palette rules are missing. A few common mistakes create most of the inconsistency issues teams face.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Common during",
  useCases: ["Fast redesigns.", "Campaign page launches.", "Design-to-code handoff."],
  closingTitle: "Set simple rules early",
  closingText: "Clear color roles and light QA checks prevent most palette-related rework.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Mistake: too many accents", paragraphs: ["Multiple bright accents compete for attention and weaken hierarchy.", "Choose one main accent and use it consistently."] },
    { heading: "Mistake: weak neutral system", paragraphs: ["Without stable neutrals, spacing and typography feel noisy.", "Define neutral shades for text, borders, and surfaces."] },
    { heading: "Mistake: no state planning", paragraphs: ["Colors may look fine in default state but fail in hover, active, or disabled states.", "Plan interaction states before shipping."], bullets: ["Test button states.", "Test links on light and dark backgrounds.", "Check form states and alerts."] },
    { heading: "Mistake: skipping contrast checks", paragraphs: ["Palette decisions without contrast validation hurt readability.", "Verify text/background pairs before final rollout."] }
  ]
};

const websitePaletteMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: websitePaletteMistakesEn,
  ko: { ...websitePaletteMistakesEn, title: "웹사이트 팔레트에서 자주 하는 실수", description: "페이지를 산만하게 만드는 대표적인 팔레트 실수를 줄이는 방법입니다.", intro: "개별 색상이 좋아도 운영 규칙이 없으면 전체 UI는 쉽게 흔들립니다." },
  ja: { ...websitePaletteMistakesEn, title: "サイト配色でよくある失敗", description: "デザインの一貫性を崩す典型的なミスを防ぐためのガイドです。", intro: "色自体が良くても運用ルールがないと全体は崩れます。" },
  es: { ...websitePaletteMistakesEn, title: "Errores de paleta en sitios web que rompen la coherencia", description: "Evita errores comunes que hacen que el diseño se vea fragmentado.", intro: "Buenos colores sueltos no bastan si no hay reglas claras de uso." },
  fr: { ...websitePaletteMistakesEn, title: "Erreurs de palette web qui nuisent à la cohérence", description: "Évitez les erreurs fréquentes qui rendent les pages visuellement incohérentes.", intro: "De bonnes couleurs isolées ne suffisent pas sans règles d'usage." },
  de: { ...websitePaletteMistakesEn, title: "Häufige Website-Palettenfehler", description: "Vermeide typische Fehler, die Designs uneinheitlich wirken lassen.", intro: "Gute Einzelfarben reichen nicht, wenn klare Regeln für ihre Nutzung fehlen." }
};

const buildConsistentColorPaletteEn: GuideLocalizedContent = {
  title: "How to Build a Color Palette That Feels Consistent",
  description: "Create a practical palette structure so your website keeps the same visual tone across pages.",
  intro: "Consistency does not come from picking perfect colors once. It comes from assigning clear roles and reusing them the same way.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Useful when",
  useCases: ["Starting a new website design.", "Cleaning up mixed UI colors.", "Documenting design tokens for handoff."],
  closingTitle: "Consistency is a process",
  closingText: "Define roles, test in context, and keep your palette small enough to apply reliably.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Start with role-based color groups", paragraphs: ["Split your palette into primary, neutral, accent, and utility groups.", "Role-based grouping is easier to maintain than random shade collections."] },
    { heading: "Build from one stable base color", paragraphs: ["Pick a base color that reflects your brand tone.", "Generate lighter and darker variations for states and section backgrounds."] },
    { heading: "Limit your active palette", paragraphs: ["Too many active colors create inconsistency across components.", "Keep the working set small and intentional."], bullets: ["1 primary brand color.", "2-3 neutral shades for structure.", "1 accent color for emphasis.", "Optional utility colors for status messages."] },
    { heading: "Test repeated UI patterns", paragraphs: ["Apply colors to buttons, cards, forms, and navigation.", "If the same pattern looks different across pages, tighten your palette rules."] },
    { heading: "Document usage notes", paragraphs: ["Add short notes such as 'accent only for CTA and links'.", "These notes reduce guesswork when multiple people edit the site."] }
  ]
};

const buildConsistentColorPaletteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: buildConsistentColorPaletteEn,
  ko: { ...buildConsistentColorPaletteEn, title: "일관된 느낌의 컬러 팔레트를 만드는 방법", description: "웹사이트 전반에서 톤을 안정적으로 유지하는 팔레트 구성 방법입니다.", intro: "일관성은 좋은 색 하나보다 역할 분리와 반복 사용에서 나옵니다." },
  ja: { ...buildConsistentColorPaletteEn, title: "一貫性のあるカラーパレットを作る方法", description: "サイト全体のトーンを揃える実用的な配色設計手順です。", intro: "一貫性は色選びより運用ルールで作られます。" },
  es: { ...buildConsistentColorPaletteEn, title: "Cómo crear una paleta de color con sensación consistente", description: "Estructura una paleta práctica para mantener coherencia entre páginas.", intro: "La consistencia viene de roles claros y uso repetible, no de elegir un color perfecto una vez." },
  fr: { ...buildConsistentColorPaletteEn, title: "Comment créer une palette de couleurs vraiment cohérente", description: "Construisez une palette simple à appliquer de façon stable sur tout le site.", intro: "La cohérence vient des rôles de couleur et de leur réutilisation, pas d'un choix isolé." },
  de: { ...buildConsistentColorPaletteEn, title: "So baust du eine konsistente Farbpalette auf", description: "Eine praktische Palettenstruktur für gleichbleibende Website-Gestaltung.", intro: "Konsistenz entsteht durch klare Rollen und wiederholbare Anwendung." }
};

const useCssVariablesForRepeatedColorsEn: GuideLocalizedContent = {
  title: "How to Use CSS Variables for Repeated Colors",
  description: "Replace repeated color values with CSS variables so updates become faster and cleaner.",
  intro: "If the same HEX values appear across many selectors, CSS variables can turn scattered edits into one centralized update.",
  categoryLabel: "CSS variable workflow",
  useCasesTitle: "Best used for",
  useCases: ["Small websites with repeated button and text colors.", "Landing pages with frequent visual updates.", "Teams that want cleaner handoff between design and code."],
  closingTitle: "Start with repeats, then expand",
  closingText: "Move your most repeated colors first, then gradually map the rest of your UI into reusable variables.",
  relatedToolLabel: "Open CSS Variable Generator",
  sections: [
    { heading: "Find repeated values first", paragraphs: ["Scan your CSS for colors that show up again and again.", "Repeated values are the fastest wins for variable conversion."] },
    { heading: "Name variables by role, not shade", paragraphs: ["Use names like --brand-primary or --text-muted.", "Role-based names stay useful even when the actual color changes later."] },
    { heading: "Define variables in :root", paragraphs: ["Store global colors in one :root block so every page can reuse them.", "This keeps color updates centralized and predictable."], bullets: ["Keep a consistent prefix.", "Group text, background, and action colors.", "Avoid duplicate variable names with slightly different values."] },
    { heading: "Replace hardcoded values in key components", paragraphs: ["Start with buttons, links, headings, and common surfaces.", "After replacements, test hover and active states to catch missed values."] },
    { heading: "Document your starter token set", paragraphs: ["Add a short comment or style guide note for each variable role.", "Clear notes help future edits stay consistent across files."] }
  ]
};

const useCssVariablesForRepeatedColorsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: useCssVariablesForRepeatedColorsEn,
  ko: { ...useCssVariablesForRepeatedColorsEn, title: "반복되는 색상에 CSS 변수를 사용하는 방법", description: "반복 색상 값을 CSS 변수로 바꿔 수정 속도와 유지보수성을 높이는 방법입니다.", intro: "같은 HEX 값이 여러 선택자에 반복된다면 CSS 변수로 한 번에 관리할 수 있습니다." },
  ja: { ...useCssVariablesForRepeatedColorsEn, title: "繰り返し使う色にCSS変数を使う方法", description: "重複する色指定をCSS変数に置き換えて更新を簡単にする実践ガイドです。", intro: "同じHEXが複数箇所にあるなら、CSS変数で一元管理すると効率的です。" },
  es: { ...useCssVariablesForRepeatedColorsEn, title: "Cómo usar variables CSS para colores repetidos", description: "Sustituye colores repetidos por variables CSS para mantener y actualizar más rápido.", intro: "Si el mismo HEX aparece muchas veces, las variables CSS te ayudan a centralizar cambios." },
  fr: { ...useCssVariablesForRepeatedColorsEn, title: "Comment utiliser des variables CSS pour les couleurs répétées", description: "Remplacez les couleurs répétées par des variables CSS pour des mises à jour plus simples.", intro: "Quand la même valeur HEX revient partout, les variables CSS évitent les modifications dispersées." },
  de: { ...useCssVariablesForRepeatedColorsEn, title: "So nutzt du CSS-Variablen für wiederkehrende Farben", description: "Ersetze wiederholte Farbwerte durch CSS-Variablen für schnellere und sauberere Updates.", intro: "Wenn dieselben HEX-Werte oft auftauchen, helfen CSS-Variablen bei zentralen Änderungen." }
};

const cssVariablesVsHardcodedValuesEn: GuideLocalizedContent = {
  title: "CSS Variables vs Hardcoded Values: What’s Easier to Maintain?",
  description: "Compare CSS variables and hardcoded values to choose the most maintainable approach for your site.",
  intro: "Hardcoded values can feel quick at first, but they often create expensive cleanup later. CSS variables usually win when your UI keeps growing.",
  categoryLabel: "CSS variable workflow",
  useCasesTitle: "Helpful for",
  useCases: ["Refactoring old stylesheets.", "Planning a small design system.", "Reducing repetitive color changes before launch."],
  closingTitle: "Optimize for future edits",
  closingText: "If a style may change again, variable-based naming is usually the safer long-term choice.",
  relatedToolLabel: "Open CSS Variable Generator",
  sections: [
    { heading: "Hardcoded values are fast, but scattered", paragraphs: ["Direct HEX values are easy for one-off styling.", "As files grow, finding every occurrence becomes slower and riskier."] },
    { heading: "Variables improve global updates", paragraphs: ["Changing one token can update many components at once.", "This is especially useful for rebranding and seasonal updates."] },
    { heading: "Debugging often gets easier with roles", paragraphs: ["Names like --button-primary or --surface-muted reveal intent immediately.", "Intent-based names help teammates understand why a color exists."], bullets: ["Hardcoded: quick for experiments.", "Variables: better for repeated UI patterns.", "Hybrid: acceptable for prototypes, not final systems."] },
    { heading: "Use a practical migration path", paragraphs: ["You do not need to rewrite everything in one pass.", "Start with repeated colors, then convert low-risk sections over time."] },
    { heading: "Keep a short naming rule", paragraphs: ["A lightweight naming pattern prevents token chaos.", "Consistent naming is the key difference between a helpful system and a confusing one."] }
  ]
};

const cssVariablesVsHardcodedValuesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: cssVariablesVsHardcodedValuesEn,
  ko: { ...cssVariablesVsHardcodedValuesEn, title: "CSS 변수 vs 하드코딩 값: 무엇이 더 유지보수하기 쉬울까?", description: "CSS 변수와 하드코딩 색상 값의 유지보수 차이를 실무 관점에서 비교합니다.", intro: "초기에는 하드코딩이 빨라 보여도, 화면이 늘어나면 정리 비용이 크게 증가합니다." },
  ja: { ...cssVariablesVsHardcodedValuesEn, title: "CSS変数とハードコード値の比較：保守しやすいのは？", description: "CSS変数と固定値の違いを比較し、保守性を重視した選び方を解説します。", intro: "固定値は最初は速くても、規模が広がると修正コストが上がりやすくなります。" },
  es: { ...cssVariablesVsHardcodedValuesEn, title: "Variables CSS vs valores hardcodeados: ¿qué es más fácil de mantener?", description: "Compara variables CSS y valores fijos para elegir un enfoque más mantenible.", intro: "Los valores hardcodeados parecen rápidos al inicio, pero suelen generar más retrabajo con el tiempo." },
  fr: { ...cssVariablesVsHardcodedValuesEn, title: "Variables CSS vs valeurs en dur : qu'est-ce qui est plus facile à maintenir ?", description: "Comparez variables CSS et valeurs en dur pour choisir une approche plus maintenable.", intro: "Les valeurs en dur sont rapides au départ, mais elles compliquent souvent les mises à jour futures." },
  de: { ...cssVariablesVsHardcodedValuesEn, title: "CSS-Variablen vs. harte Werte: Was ist leichter wartbar?", description: "Vergleiche CSS-Variablen mit hardcodierten Werten für bessere Wartbarkeit.", intro: "Hardcodierte Werte wirken anfangs schnell, erzeugen bei Wachstum aber oft mehr Nacharbeit." }
};

const organizeCssVariablesForSmallWebsiteEn: GuideLocalizedContent = {
  title: "How to Organize CSS Variables for a Small Website",
  description: "Set up a simple CSS variable structure for small websites without overengineering.",
  intro: "Even a small site benefits from a basic variable structure. A few clear groups can prevent style drift and future cleanup.",
  categoryLabel: "CSS variable workflow",
  useCasesTitle: "Useful for",
  useCases: ["New small business websites.", "Landing page bundles with shared components.", "Freelance projects with recurring style updates."],
  closingTitle: "Keep structure small and clear",
  closingText: "You do not need enterprise-scale tokens—just enough structure to keep changes predictable.",
  relatedToolLabel: "Open CSS Variable Generator",
  sections: [
    { heading: "Create one root file for tokens", paragraphs: ["Store core variables in one place, usually in a global stylesheet.", "This becomes the source of truth for repeated design values."] },
    { heading: "Group tokens by UI role", paragraphs: ["Use small groups like text, background, border, and action.", "Role groups are easier to scan than long unstructured lists."] },
    { heading: "Use a consistent naming pattern", paragraphs: ["Pick one convention and keep it everywhere.", "For example, --site-text-primary and --site-bg-surface."], bullets: ["Prefix by project or theme.", "Add role first, state second.", "Avoid abbreviations teammates may misread."] },
    { heading: "Separate core and optional tokens", paragraphs: ["Keep the main set short, then add optional tokens only when needed.", "This prevents token bloat on small projects."] },
    { heading: "Review variables during each UI update", paragraphs: ["When adding new components, check if an existing token already fits.", "Only create a new variable when a real repeated role appears."] }
  ]
};

const organizeCssVariablesForSmallWebsiteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: organizeCssVariablesForSmallWebsiteEn,
  ko: { ...organizeCssVariablesForSmallWebsiteEn, title: "작은 웹사이트를 위한 CSS 변수 정리 방법", description: "과하지 않게, 작은 사이트에 맞는 CSS 변수 구조를 만드는 실용 가이드입니다.", intro: "작은 사이트도 기본 변수 구조가 있으면 스타일 흔들림과 재작업을 줄일 수 있습니다." },
  ja: { ...organizeCssVariablesForSmallWebsiteEn, title: "小規模サイト向けCSS変数の整理方法", description: "過剰設計を避けながら、使いやすいCSS変数構成を作る方法です。", intro: "小さなサイトでも基本構成があると配色のぶれや後修正を減らせます。" },
  es: { ...organizeCssVariablesForSmallWebsiteEn, title: "Cómo organizar variables CSS para un sitio web pequeño", description: "Define una estructura simple de variables CSS para sitios pequeños sin complicarte de más.", intro: "Incluso un sitio pequeño mejora con una estructura básica de variables y roles claros." },
  fr: { ...organizeCssVariablesForSmallWebsiteEn, title: "Comment organiser les variables CSS pour un petit site web", description: "Mettez en place une structure CSS simple pour petit site, sans sur-ingénierie.", intro: "Même un petit site gagne en clarté avec quelques groupes de variables bien définis." },
  de: { ...organizeCssVariablesForSmallWebsiteEn, title: "CSS-Variablen für eine kleine Website sinnvoll organisieren", description: "Eine einfache, praxisnahe Struktur für CSS-Variablen auf kleinen Websites.", intro: "Auch kleine Websites profitieren von einer klaren Variablenstruktur ohne Overengineering." }
};

const chooseAccentColorsForWebsiteEn: GuideLocalizedContent = {
  title: "Best Ways to Choose Accent Colors for a Website",
  description: "Choose accent colors that add focus without making your interface noisy or confusing.",
  intro: "Accent colors guide attention. Used well, they improve hierarchy. Used too often, they dilute important actions.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Helpful for",
  useCases: ["CTA design decisions.", "Navigation and link styling.", "Updating outdated brand palettes."],
  closingTitle: "Use accents with intent",
  closingText: "A small number of well-placed accents is more effective than many loud colors.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Define what needs emphasis", paragraphs: ["List the UI elements that truly need attention first.", "Your accent color should serve those elements, not every component."] },
    { heading: "Contrast against your base and neutrals", paragraphs: ["An accent should stand out from base surfaces and text colors.", "If it blends in, users may miss key actions."] },
    { heading: "Use one main accent, one optional backup", paragraphs: ["Most sites only need one primary accent and sometimes one secondary accent.", "More than that often weakens visual hierarchy."], bullets: ["Primary accent for CTAs and key links.", "Optional secondary accent for badges or secondary actions.", "Avoid using accents for long body text."] },
    { heading: "Test in real interface states", paragraphs: ["Check hover, active, and focus states for accent elements.", "Make sure the accent remains clear on both light and dark sections."] },
    { heading: "Review accessibility early", paragraphs: ["Run quick contrast checks for accent text and buttons.", "Small hue or lightness tweaks can improve readability without changing brand feel."] }
  ]
};

const chooseAccentColorsForWebsiteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: chooseAccentColorsForWebsiteEn,
  ko: { ...chooseAccentColorsForWebsiteEn, title: "웹사이트 강조 색상을 고르는 가장 좋은 방법", description: "강조는 살리고 화면 혼잡은 줄이는 실용적인 액센트 선택 가이드입니다.", intro: "강조 색은 시선을 모으는 도구입니다. 많이 쓰기보다 정확히 써야 효과가 납니다." },
  ja: { ...chooseAccentColorsForWebsiteEn, title: "Webサイトのアクセントカラーを選ぶベストな方法", description: "画面をうるさくせずに強調を作るアクセント設計の実践ガイドです。", intro: "アクセントは注意誘導のための色です。使いすぎると効果が下がります。" },
  es: { ...chooseAccentColorsForWebsiteEn, title: "Mejores formas de elegir colores de acento para un sitio web", description: "Selecciona acentos que guíen la atención sin sobrecargar la interfaz.", intro: "Un buen acento mejora jerarquía; demasiados acentos la destruyen." },
  fr: { ...chooseAccentColorsForWebsiteEn, title: "Meilleures façons de choisir des couleurs d'accent pour un site", description: "Choisissez des accents qui guident l'attention sans surcharger l'interface.", intro: "Les accents structurent l'attention, mais perdent leur force s'ils sont trop nombreux." },
  de: { ...chooseAccentColorsForWebsiteEn, title: "Die besten Wege, Akzentfarben für eine Website zu wählen", description: "Akzentfarben so wählen, dass sie Fokus schaffen ohne visuelles Chaos.", intro: "Akzentfarben lenken Aufmerksamkeit. Zu viele Akzente schwächen die Hierarchie." }
};

const testColorPaletteBeforeUsingEn: GuideLocalizedContent = {
  title: "How to Test a Color Palette Before Using It on a Site",
  description: "Run a quick pre-launch palette test so colors work in real UI states, not just in swatches.",
  intro: "A palette can look good in isolation but fail in actual components. Fast testing helps you catch those issues before launch.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Use this when",
  useCases: ["Finalizing a new website palette.", "Preparing a redesign rollout.", "QA testing design tokens."],
  closingTitle: "Test in context, not in theory",
  closingText: "A short checklist across real UI elements prevents expensive color cleanup later.",
  relatedToolLabel: "Open Palette Generator",
  sections: [
    { heading: "Build a small UI test screen", paragraphs: ["Create one test layout with headings, body text, buttons, cards, and alerts.", "This reveals palette issues faster than checking color chips alone."] },
    { heading: "Check interaction states", paragraphs: ["Test default, hover, active, disabled, and focus states.", "Many palette problems appear only in these state transitions."] },
    { heading: "Validate readability and contrast", paragraphs: ["Review text/background pairs in all important sections.", "Use a contrast checker for quick accessibility validation."], bullets: ["Body text on primary and neutral backgrounds.", "Button text in all states.", "Link color against surrounding copy."] },
    { heading: "Test on multiple displays", paragraphs: ["Compare on at least one desktop and one mobile display.", "Device differences are normal, so confirm the palette still feels balanced."] },
    { heading: "Collect feedback before rollout", paragraphs: ["Ask one designer and one developer to review the test screen.", "A short cross-team review catches practical usage problems early."] }
  ]
};

const testColorPaletteBeforeUsingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: testColorPaletteBeforeUsingEn,
  ko: { ...testColorPaletteBeforeUsingEn, title: "사이트 적용 전에 컬러 팔레트를 테스트하는 방법", description: "실제 UI 상태에서 색상 문제가 없는지 빠르게 점검하는 사전 테스트 가이드입니다.", intro: "칩에서는 좋아 보여도 실제 컴포넌트에서는 실패할 수 있습니다. 배포 전에 빠르게 확인하세요." },
  ja: { ...testColorPaletteBeforeUsingEn, title: "サイト導入前にカラーパレットをテストする方法", description: "実際のUI状態で配色が機能するかを短時間で確認する手順です。", intro: "スウォッチで良く見える配色でも、実画面では問題が出ることがあります。" },
  es: { ...testColorPaletteBeforeUsingEn, title: "Cómo probar una paleta de color antes de usarla en un sitio", description: "Haz una validación rápida para comprobar la paleta en estados reales de UI.", intro: "Una paleta puede verse bien sola y fallar en componentes reales. Prueba antes de publicar." },
  fr: { ...testColorPaletteBeforeUsingEn, title: "Comment tester une palette de couleurs avant de l'utiliser sur un site", description: "Validez rapidement la palette dans de vrais états UI avant mise en ligne.", intro: "Une palette peut sembler bonne en nuancier mais échouer en interface réelle." },
  de: { ...testColorPaletteBeforeUsingEn, title: "So testest du eine Farbpalette vor dem Einsatz auf einer Website", description: "Mit einem kurzen Vorabtest prüfen, ob Farben in echten UI-Zuständen funktionieren.", intro: "Eine Palette kann als Muster gut aussehen und im Interface trotzdem scheitern." }
};

const copyWebColorFromScreenEn: GuideLocalizedContent = {
  title: "How to Copy a Web Color from the Screen Quickly",
  description: "Quickly sample a color from your screen and paste it into your CSS workflow.",
  intro: "When you need to match an existing UI element, screen sampling is often faster than searching through code or design files.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Great for",
  useCases: ["Fixing one-off UI mismatches.", "Replicating colors from screenshots.", "Fast debugging during QA."],
  closingTitle: "Sample fast, then verify",
  closingText: "Screen-picked colors are convenient, but always confirm the final value in your source files.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    { heading: "Use zoom for accurate picking", paragraphs: ["If the target area is small, zoom in before sampling.", "This reduces accidental picks from anti-aliased edges."] },
    { heading: "Capture and convert format", paragraphs: ["Copy the sampled value and convert it to the format your project uses.", "Most workflows need HEX or HSL for final CSS updates."] },
    { heading: "Cross-check against source styles", paragraphs: ["After sampling, compare with token or stylesheet values to avoid drift.", "Treat sampled colors as a shortcut, not the single source of truth."], bullets: ["Check hover/active states too.", "Test on different displays if possible.", "Update variables instead of hardcoded values."] },
    { heading: "Document what changed", paragraphs: ["Write a short note in your commit or changelog about the color update.", "Small documentation habits prevent repeated guesswork later."] }
  ]
};

const copyWebColorFromScreenContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: copyWebColorFromScreenEn,
  ko: { ...copyWebColorFromScreenEn, title: "화면에서 웹 색상을 빠르게 복사하는 방법", description: "화면에서 색상을 샘플링해 CSS 작업에 바로 적용하는 빠른 방법입니다.", intro: "기존 UI 색상을 맞춰야 할 때는 코드 탐색보다 화면 샘플링이 더 빠를 수 있습니다." },
  ja: { ...copyWebColorFromScreenEn, title: "画面からWebカラーをすばやくコピーする方法", description: "画面上の色を抽出してCSSにすぐ反映するための実践手順です。", intro: "既存UIに色を合わせる場面では、コード検索より画面抽出が速いことがあります。" },
  es: { ...copyWebColorFromScreenEn, title: "Cómo copiar rápidamente un color web desde la pantalla", description: "Toma un color de pantalla y úsalo enseguida en tu flujo CSS.", intro: "Cuando debes igualar un color existente, muestrear en pantalla suele ser la opción más rápida." },
  fr: { ...copyWebColorFromScreenEn, title: "Comment copier rapidement une couleur web depuis l'écran", description: "Prélevez une couleur à l'écran et réutilisez-la immédiatement en CSS.", intro: "Pour retrouver une couleur d'interface, l'échantillonnage à l'écran est souvent plus rapide que la recherche manuelle." },
  de: { ...copyWebColorFromScreenEn, title: "Webfarbe schnell vom Bildschirm übernehmen", description: "Farbe direkt vom Screen aufnehmen und in den CSS-Workflow einfügen.", intro: "Wenn du eine bestehende UI-Farbe treffen musst, ist Screen-Sampling oft der schnellste Weg." }
};

const commonColorPickerMistakesEn: GuideLocalizedContent = {
  title: "Common Color Picker Mistakes in Web Design",
  description: "Avoid common picker mistakes that lead to inconsistent, inaccessible, or hard-to-maintain color choices.",
  intro: "Color pickers are simple tools, but common mistakes can still create rework in design and frontend implementation.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Common issues appear in",
  useCases: ["Rapid landing page edits.", "Theme updates.", "Design-to-code handoff."],
  closingTitle: "Small checks prevent big cleanup",
  closingText: "A few validation steps keep your color system cleaner and easier to maintain.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    { heading: "Mistake: picking by eye only", paragraphs: ["Visual guesses drift over time, especially across displays.", "Always copy numeric values and compare them directly."] },
    { heading: "Mistake: ignoring format consistency", paragraphs: ["Mixed HEX/RGB/HSL usage without a rule creates confusion.", "Set a preferred format for commits and documentation."] },
    { heading: "Mistake: skipping context checks", paragraphs: ["A color can look fine in a swatch but fail in real UI states.", "Test contrast, hover states, and adjacent surfaces before shipping."], bullets: ["Test text readability.", "Check light and dark backgrounds.", "Review disabled and active states."] },
    { heading: "Mistake: hardcoding values everywhere", paragraphs: ["Repeated literals are difficult to update later.", "Use tokens or variables so changes remain centralized."] }
  ]
};

const commonColorPickerMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: commonColorPickerMistakesEn,
  ko: { ...commonColorPickerMistakesEn, title: "웹 디자인에서 자주 하는 컬러 피커 실수", description: "일관성 저하와 유지보수 문제를 부르는 대표적인 컬러 선택 실수를 정리했습니다.", intro: "컬러 피커는 단순하지만, 작은 실수가 디자인과 구현 단계에서 큰 재작업으로 이어질 수 있습니다." },
  ja: { ...commonColorPickerMistakesEn, title: "Webデザインでよくあるカラーピッカーの失敗", description: "色の不一致や保守性低下を招く典型的なミスを防ぎます。", intro: "カラーピッカーは便利ですが、運用ミスでUI品質が下がることがあります。" },
  es: { ...commonColorPickerMistakesEn, title: "Errores comunes con el selector de color en diseño web", description: "Evita fallos frecuentes que generan inconsistencia y más mantenimiento.", intro: "Aunque el selector de color es simple, su mal uso produce retrabajo en diseño y frontend." },
  fr: { ...commonColorPickerMistakesEn, title: "Erreurs courantes de color picker en web design", description: "Évitez les erreurs fréquentes qui nuisent à la cohérence et à la maintenance.", intro: "Le color picker est simple, mais de mauvaises habitudes créent vite du travail supplémentaire." },
  de: { ...commonColorPickerMistakesEn, title: "Häufige Color-Picker-Fehler im Webdesign", description: "Typische Fehler vermeiden, die zu Inkonsistenz und Mehraufwand führen.", intro: "Auch mit einfachen Tools entstehen schnell Farbfehler, die später viel Nacharbeit kosten." }
};

const extractBrandColorsFromImageEn: GuideLocalizedContent = {
  title: "How to Extract Brand Colors from an Image",
  description: "A beginner-friendly way to sample reliable brand-like colors from logos, packaging, or campaign images.",
  intro: "When official color codes are missing, image sampling helps you build a usable palette quickly and consistently.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Great for",
  useCases: ["Fast brand audits.", "Social asset alignment.", "Moodboard-to-design handoff."],
  closingTitle: "Extract, verify, then standardize",
  closingText: "Use sampled colors as a starting point, then lock approved values in your design system.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Start with a clean source image", paragraphs: ["Use a high-quality image with good lighting and minimal compression.", "Low-quality sources produce unreliable color values."] },
    { heading: "Sample key visual areas", paragraphs: ["Pick colors from logo marks, dominant backgrounds, and accents.", "Take multiple samples from each area to avoid one-pixel noise."] },
    { heading: "Group and name your palette", paragraphs: ["Organize extracted colors by role such as primary, secondary, and accent.", "Naming by usage makes handoff easier than naming by appearance."], bullets: ["Record HEX values.", "Keep fallback neutrals.", "Share usage notes with teammates."] },
    { heading: "Validate across screens", paragraphs: ["Compare sampled colors on different displays when possible.", "Slight device variation is normal, so finalize from a trusted reference."] }
  ]
};

const extractBrandColorsFromImageContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: extractBrandColorsFromImageEn,
  ko: { ...extractBrandColorsFromImageEn, title: "이미지에서 브랜드 색상을 추출하는 방법", description: "로고·패키지·캠페인 이미지에서 브랜드 색상을 실용적으로 추출하는 방법입니다.", intro: "공식 색상 코드가 없을 때 이미지 샘플링으로 빠르게 팔레트 초안을 만들 수 있습니다." },
  ja: { ...extractBrandColorsFromImageEn, title: "画像からブランドカラーを抽出する方法", description: "ロゴやビジュアルから実用的にブランド色を取り出す手順です。", intro: "公式カラーコードがない場合でも、画像サンプリングで色設計を始められます。" },
  es: { ...extractBrandColorsFromImageEn, title: "Cómo extraer colores de marca desde una imagen", description: "Método sencillo para obtener colores útiles de logos o imágenes de campaña.", intro: "Si no tienes códigos oficiales, el muestreo de imagen te ayuda a construir una paleta inicial confiable." },
  fr: { ...extractBrandColorsFromImageEn, title: "Comment extraire des couleurs de marque depuis une image", description: "Méthode simple pour récupérer des couleurs utiles depuis logos ou visuels.", intro: "Sans codes officiels, l'échantillonnage d'image permet de créer rapidement une base de palette." },
  de: { ...extractBrandColorsFromImageEn, title: "Brand-Farben aus einem Bild extrahieren", description: "Einsteigerfreundlicher Ablauf, um Farben aus Logos oder Kampagnenbildern abzuleiten.", intro: "Wenn offizielle Farbwerte fehlen, hilft Bild-Sampling beim schnellen Aufbau einer brauchbaren Palette." }
};

const buildColorPaletteFromPhotoEn: GuideLocalizedContent = {
  title: "How to Build a Simple Color Palette from a Photo",
  description: "Turn a single photo into a practical palette you can use for web or social design.",
  intro: "Photos are a great starting point for color direction. With a simple extraction workflow, you can convert mood into reusable color tokens.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Useful for",
  useCases: ["Campaign concepts.", "Landing page mood exploration.", "Quick social templates."],
  closingTitle: "Keep the palette small and usable",
  closingText: "A focused 4–6 color set is usually easier to apply than a large unstructured list.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Choose one strong reference photo", paragraphs: ["Pick a photo with clear color mood and sufficient quality.", "Avoid heavily filtered images if you need realistic brand usage."] },
    { heading: "Extract dominant and accent colors", paragraphs: ["Capture both the main tones and one or two accent colors.", "This gives you balance between stable backgrounds and attention points."] },
    { heading: "Reduce to a practical set", paragraphs: ["Trim duplicates and near-duplicates until the palette is easy to apply.", "Keep contrast in mind for text and UI components."], bullets: ["1-2 base neutrals.", "1 primary brand tone.", "1-2 accent colors.", "Optional warning/success utility colors."] },
    { heading: "Test in a quick mockup", paragraphs: ["Apply the palette to a basic layout before finalizing.", "If one color dominates too much, swap it early."] }
  ]
};

const buildColorPaletteFromPhotoContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: buildColorPaletteFromPhotoEn,
  ko: { ...buildColorPaletteFromPhotoEn, title: "사진에서 간단한 컬러 팔레트 만드는 방법", description: "한 장의 사진에서 웹/소셜에 쓸 수 있는 실용 팔레트를 만드는 방법입니다.", intro: "사진의 분위기를 색상 토큰으로 바꾸면 빠르게 디자인 방향을 잡을 수 있습니다." },
  ja: { ...buildColorPaletteFromPhotoEn, title: "写真からシンプルなカラーパレットを作る方法", description: "1枚の写真から実用的な配色セットを作る手順です。", intro: "写真のムードを色トークンに変換すると、デザインの方向性を決めやすくなります。" },
  es: { ...buildColorPaletteFromPhotoEn, title: "Cómo crear una paleta de color simple desde una foto", description: "Convierte una foto en una paleta práctica para web o redes.", intro: "Una foto puede definir muy bien el tono visual. Con una extracción simple obtienes colores reutilizables." },
  fr: { ...buildColorPaletteFromPhotoEn, title: "Comment créer une palette simple à partir d'une photo", description: "Transformez une photo en palette exploitable pour le web et le social.", intro: "Une photo donne une direction visuelle claire. L'extraction permet de la convertir en couleurs réutilisables." },
  de: { ...buildColorPaletteFromPhotoEn, title: "Einfache Farbpalette aus einem Foto erstellen", description: "So wandelst du ein Foto in eine praktische Palette für Web und Social um.", intro: "Fotos geben schnell eine Farbrichtung vor. Mit Extraktion entstehen direkt nutzbare Farbwerte." }
};

const whenImageColorSamplingHelpsEn: GuideLocalizedContent = {
  title: "When Image Color Sampling Helps Design Workflows",
  description: "Understand where image color sampling saves time in real design and content workflows.",
  intro: "Color sampling is most useful when you need fast alignment, not perfect color science. Used well, it speeds up early design decisions.",
  categoryLabel: "Color workflow",
  useCasesTitle: "High-impact moments",
  useCases: ["Early concept direction.", "Brand adaptation for campaigns.", "Rapid prototype styling."],
  closingTitle: "Use sampling as a workflow accelerator",
  closingText: "Sampling is great for speed; finalize with design tokens and accessibility checks.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Great for early-stage exploration", paragraphs: ["Sampling helps teams discuss direction quickly with real visual references.", "It reduces time spent guessing color combinations from scratch."] },
    { heading: "Useful for cross-team communication", paragraphs: ["A sampled palette gives product, design, and marketing teams a shared starting point.", "This is especially helpful during campaign planning."] },
    { heading: "Not a replacement for final QA", paragraphs: ["Sampled colors still need accessibility and consistency checks.", "Treat extracted values as drafts until validated."], bullets: ["Run contrast checks.", "Align with existing tokens.", "Review in real UI components."] },
    { heading: "Best practice: sample then systematize", paragraphs: ["Move confirmed colors into your design variables or style guide.", "That keeps future implementation stable."] }
  ]
};

const whenImageColorSamplingHelpsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenImageColorSamplingHelpsEn,
  ko: { ...whenImageColorSamplingHelpsEn, title: "이미지 색상 샘플링이 디자인 워크플로에 도움이 되는 순간", description: "실무 디자인 과정에서 색상 샘플링이 시간을 줄여 주는 상황을 설명합니다.", intro: "샘플링은 완벽한 색채 이론보다 빠른 정렬이 필요할 때 특히 효과적입니다." },
  ja: { ...whenImageColorSamplingHelpsEn, title: "画像カラーサンプリングがデザインに役立つ場面", description: "実務フローでカラーサンプリングが効くタイミングを整理します。", intro: "サンプリングは厳密性よりスピードが必要な初期段階で特に有効です。" },
  es: { ...whenImageColorSamplingHelpsEn, title: "Cuándo el muestreo de color en imágenes mejora el flujo de diseño", description: "Situaciones reales donde muestrear colores acelera decisiones de diseño.", intro: "El muestreo no busca perfección absoluta; busca rapidez para alinear decisiones visuales." },
  fr: { ...whenImageColorSamplingHelpsEn, title: "Quand l'échantillonnage de couleurs d'image aide le workflow design", description: "Cas concrets où l'échantillonnage fait gagner du temps en conception.", intro: "L'échantillonnage sert surtout à aller vite sur l'alignement visuel, pas à finaliser la colorimétrie." },
  de: { ...whenImageColorSamplingHelpsEn, title: "Wann Farb-Sampling aus Bildern Design-Workflows verbessert", description: "Praxisfälle, in denen Farb-Sampling echte Zeit spart.", intro: "Sampling ist ideal, wenn schnelle Abstimmung wichtiger ist als perfekte Farbmetrik." }
};

const mistakesWhenExtractingColorsFromImagesEn: GuideLocalizedContent = {
  title: "Common Mistakes When Extracting Colors from Images",
  description: "Avoid extraction mistakes that create noisy palettes and inconsistent design decisions.",
  intro: "Image color extraction is quick, but poor source images and weak selection habits often produce unreliable palettes.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Watch out during",
  useCases: ["Palette creation.", "Brand approximation.", "Photo-based UI theming."],
  closingTitle: "Better inputs produce better palettes",
  closingText: "Use clean images, sample intentionally, and validate before rollout.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Mistake: sampling low-quality images", paragraphs: ["Compression artifacts distort extracted colors.", "Always start with the highest quality image you can access."] },
    { heading: "Mistake: collecting too many similar colors", paragraphs: ["Large noisy palettes are hard to use consistently.", "Merge near-duplicates into a smaller practical set."] },
    { heading: "Mistake: skipping context and contrast checks", paragraphs: ["Extracted colors may look good in isolation but fail in interfaces.", "Test text readability and UI state combinations early."], bullets: ["Run contrast checks.", "Preview on real components.", "Validate light and dark surfaces."] },
    { heading: "Mistake: no naming or documentation", paragraphs: ["Unnamed colors are difficult to reuse across teams.", "Assign role-based names and capture final approved values."] }
  ]
};

const mistakesWhenExtractingColorsFromImagesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: mistakesWhenExtractingColorsFromImagesEn,
  ko: { ...mistakesWhenExtractingColorsFromImagesEn, title: "이미지에서 색상 추출할 때 자주 하는 실수", description: "노이즈 많은 팔레트와 불안정한 색상 결정을 부르는 추출 실수를 피하는 방법입니다.", intro: "색상 추출은 빠르지만, 원본 품질과 샘플링 습관이 나쁘면 결과가 쉽게 흔들립니다." },
  ja: { ...mistakesWhenExtractingColorsFromImagesEn, title: "画像から色を抽出するときのよくある失敗", description: "ノイズの多い配色や不安定な判断につながるミスを防ぎます。", intro: "抽出は手軽ですが、元画像や選び方が悪いと使いにくいパレットになります。" },
  es: { ...mistakesWhenExtractingColorsFromImagesEn, title: "Errores comunes al extraer colores de imágenes", description: "Evita errores que generan paletas ruidosas e inconsistentes.", intro: "Extraer colores es rápido, pero una mala fuente o selección débil produce resultados poco fiables." },
  fr: { ...mistakesWhenExtractingColorsFromImagesEn, title: "Erreurs fréquentes lors de l'extraction de couleurs d'images", description: "Évitez les erreurs qui créent des palettes confuses et difficiles à appliquer.", intro: "L'extraction est rapide, mais de mauvaises sources ou habitudes donnent des résultats peu fiables." },
  de: { ...mistakesWhenExtractingColorsFromImagesEn, title: "Häufige Fehler beim Extrahieren von Farben aus Bildern", description: "Fehler vermeiden, die zu unruhigen Paletten und inkonsistenten Entscheidungen führen.", intro: "Farbextraktion ist schnell, aber schlechte Vorlagen und unsaubere Auswahl schaden der Qualität." }
};

const findMainColorsInImageQuicklyEn: GuideLocalizedContent = {
  title: "How to Find the Main Colors in an Image Quickly",
  description: "Use a fast, repeatable workflow to identify the most useful dominant colors in any image.",
  intro: "You do not need advanced design tools to get useful dominant colors. A quick extraction pass plus a short cleanup step is enough for most web and content tasks.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Useful for",
  useCases: ["Quick campaign styling.", "Landing page mood checks.", "Preparing starter palettes for teams."],
  closingTitle: "Extract fast, then simplify",
  closingText: "Focus on a few dominant colors you can actually apply instead of keeping every sampled value.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Start with one clear reference image", paragraphs: ["Pick a clean image with a visible main subject and strong color areas.", "Busy collages make dominant color detection slower and less reliable."] },
    { heading: "Sample multiple points in large color regions", paragraphs: ["Click several points across big areas like backgrounds, product surfaces, or clothing.", "This helps you avoid accidental one-pixel outliers."] },
    { heading: "Keep only your top 3-5 colors", paragraphs: ["After sampling, remove near-duplicates and keep a small practical set.", "Most workflows move faster with a focused shortlist."], bullets: ["1-2 base/background colors.", "1 primary action or brand color.", "1-2 supporting accents."] },
    { heading: "Label colors by usage, not by shade name", paragraphs: ["Names like Primary, Surface, and Accent are easier for handoff than names like Blue 1.", "Role-based labels reduce confusion during implementation."] },
    { heading: "Check readability before final use", paragraphs: ["Test text and button contrast against your selected colors.", "A dominant color is not always usable for UI text or CTAs."] }
  ]
};

const findMainColorsInImageQuicklyContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: findMainColorsInImageQuicklyEn,
  ko: { ...findMainColorsInImageQuicklyEn, title: "이미지의 주요 색상을 빠르게 찾는 방법", description: "이미지에서 핵심 색상을 빠르게 추려내는 반복 가능한 실무 흐름입니다.", intro: "복잡한 디자인 도구 없이도 주요 색상은 충분히 빠르게 찾을 수 있습니다. 짧은 추출과 정리 단계면 대부분의 작업에 충분합니다." },
  ja: { ...findMainColorsInImageQuicklyEn, title: "画像の主要カラーをすばやく見つける方法", description: "画像の支配的な色を実務向けに素早く抽出する手順です。", intro: "高度なデザインツールがなくても、短い抽出と整理で実用的な主要色を取得できます。" },
  es: { ...findMainColorsInImageQuicklyEn, title: "Cómo encontrar rápidamente los colores principales de una imagen", description: "Flujo rápido y repetible para detectar colores dominantes útiles en cualquier imagen.", intro: "No necesitas herramientas complejas: una extracción rápida y una limpieza corta bastan para la mayoría de tareas web." },
  fr: { ...findMainColorsInImageQuicklyEn, title: "Comment trouver rapidement les couleurs principales d'une image", description: "Méthode rapide et reproductible pour identifier les couleurs dominantes utiles.", intro: "Pas besoin d'outil complexe : une extraction rapide puis un tri court suffisent souvent pour les usages web." },
  de: { ...findMainColorsInImageQuicklyEn, title: "Die Hauptfarben in einem Bild schnell finden", description: "Schneller, wiederholbarer Ablauf, um dominante und nutzbare Farben zu erkennen.", intro: "Für brauchbare Hauptfarben brauchst du kein komplexes Design-Setup. Eine kurze Extraktion plus Bereinigung reicht meist aus." }
};

const useExtractedColorsInWebsitePaletteEn: GuideLocalizedContent = {
  title: "Best Ways to Use Extracted Colors in a Website Palette",
  description: "Turn raw extracted colors into a clean website palette that is easier to apply consistently.",
  intro: "Extracted colors are a great starting point, but they are rarely ready for direct use. A small structuring step helps you build a palette that works across real UI screens.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Great for",
  useCases: ["Converting moodboards into UI palettes.", "Rapid site redesign planning.", "Aligning image-led campaigns with website colors."],
  closingTitle: "Structure first, then scale",
  closingText: "When each extracted color has a clear role, applying your palette across pages becomes much easier.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Group extracted colors by role", paragraphs: ["Place colors into simple groups: neutral surfaces, primary brand, and accents.", "This prevents random color usage across components."] },
    { heading: "Create one primary action color", paragraphs: ["Choose one extracted color for important buttons and key links.", "Keeping one clear action color improves scanability and consistency."] },
    { heading: "Add supporting neutrals around sampled tones", paragraphs: ["Image colors can be vivid, so pair them with neutral backgrounds and text colors.", "Neutrals make accent colors feel intentional."], bullets: ["Light neutral for page backgrounds.", "Dark neutral for body text.", "Soft border color for cards and sections."] },
    { heading: "Test palette on a small UI kit first", paragraphs: ["Preview your colors on headings, body text, buttons, cards, and alerts.", "Small kit testing catches imbalance early."] },
    { heading: "Save final choices as reusable tokens", paragraphs: ["After testing, move final HEX values into your variables or token file.", "This keeps implementation stable as pages grow."] }
  ]
};

const useExtractedColorsInWebsitePaletteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: useExtractedColorsInWebsitePaletteEn,
  ko: { ...useExtractedColorsInWebsitePaletteEn, title: "추출한 색상을 웹사이트 팔레트에 잘 쓰는 방법", description: "이미지에서 뽑은 색을 실무용 웹 팔레트로 정리하는 방법입니다.", intro: "추출 색상은 시작점으로 좋지만 바로 쓰기엔 불안정할 수 있습니다. 짧은 구조화 단계로 실제 UI에 맞는 팔레트를 만들 수 있습니다." },
  ja: { ...useExtractedColorsInWebsitePaletteEn, title: "抽出した色をWebサイトのパレットに活かす方法", description: "抽出色を実用的なWeb配色に整理して再利用しやすくする手順です。", intro: "抽出色は出発点として優秀ですが、そのままでは使いにくいことがあります。短い整理でUI向けに整えましょう。" },
  es: { ...useExtractedColorsInWebsitePaletteEn, title: "Mejores formas de usar colores extraídos en una paleta web", description: "Convierte colores extraídos en una paleta web clara y fácil de aplicar.", intro: "Los colores extraídos son una buena base, pero rara vez están listos para uso directo. Un paso de estructura mejora su uso en UI real." },
  fr: { ...useExtractedColorsInWebsitePaletteEn, title: "Meilleures façons d'utiliser des couleurs extraites dans une palette web", description: "Transformez des couleurs extraites en palette web claire et cohérente.", intro: "Les couleurs extraites sont un bon point de départ, mais demandent souvent une étape de structuration avant usage réel." },
  de: { ...useExtractedColorsInWebsitePaletteEn, title: "Extrahierte Farben sinnvoll in einer Website-Palette nutzen", description: "So machst du aus extrahierten Farben eine saubere, konsistente Web-Palette.", intro: "Extrahierte Farben sind ein guter Start, aber selten sofort einsatzbereit. Mit kurzer Strukturierung werden sie UI-tauglich." }
};

const avoidBadColorPicksFromBusyImagesEn: GuideLocalizedContent = {
  title: "How to Avoid Bad Color Picks from Busy Images",
  description: "Avoid noisy color samples from complex images with a few simple selection rules.",
  intro: "Busy images often create messy palettes because they contain shadows, highlights, and tiny color noise. With a cleaner sampling approach, you can keep only colors that are actually useful.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Most helpful when",
  useCases: ["Sampling from lifestyle photos.", "Working with detailed product scenes.", "Cleaning up over-large extracted palettes."],
  closingTitle: "Sample intentionally, not randomly",
  closingText: "A few careful picks from stable regions give better results than dozens of random clicks.",
  relatedToolLabel: "Open Image Color Extractor",
  sections: [
    { heading: "Skip tiny details and reflective spots", paragraphs: ["Do not sample from glare, sharp highlights, or tiny patterned areas.", "These spots rarely represent usable interface colors."] },
    { heading: "Prioritize broad, stable color zones", paragraphs: ["Pick from larger areas with consistent color values.", "Backgrounds, large objects, and flat surfaces are usually safer."] },
    { heading: "Avoid edge pixels between two colors", paragraphs: ["Borders and anti-aliased edges often create mixed values.", "Click slightly inside a color area instead of directly on edges."], bullets: ["Zoom in before sampling small elements.", "Take 2-3 samples in the same region.", "Keep the median-looking value."] },
    { heading: "Filter palette noise immediately", paragraphs: ["After extraction, remove colors that are too close to each other.", "A smaller cleaned palette is easier to use in web UI."] },
    { heading: "Validate your final set in context", paragraphs: ["Apply selected colors to a quick mockup and review readability.", "If one color feels unstable, replace it before rollout."] }
  ]
};

const avoidBadColorPicksFromBusyImagesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: avoidBadColorPicksFromBusyImagesEn,
  ko: { ...avoidBadColorPicksFromBusyImagesEn, title: "복잡한 이미지에서 잘못된 색상 선택을 피하는 방법", description: "복잡한 이미지에서 노이즈 색상을 줄이고 실사용 색상만 고르는 방법입니다.", intro: "복잡한 이미지는 그림자·하이라이트·미세 노이즈 때문에 팔레트가 쉽게 지저분해집니다. 샘플링 규칙을 정하면 훨씬 안정적입니다." },
  ja: { ...avoidBadColorPicksFromBusyImagesEn, title: "情報量の多い画像で悪い色選びを避ける方法", description: "複雑な画像からノイズ色を避けて実用色だけを抽出するコツです。", intro: "情報量の多い画像は影やハイライトで配色が乱れやすくなります。抽出ルールを決めると安定します。" },
  es: { ...avoidBadColorPicksFromBusyImagesEn, title: "Cómo evitar malas selecciones de color en imágenes recargadas", description: "Evita colores ruidosos de imágenes complejas con reglas simples de muestreo.", intro: "Las imágenes cargadas generan paletas confusas por sombras, brillos y ruido de color. Un muestreo más limpio mejora mucho el resultado." },
  fr: { ...avoidBadColorPicksFromBusyImagesEn, title: "Comment éviter les mauvais choix de couleurs sur des images chargées", description: "Évitez les couleurs parasites des images complexes avec quelques règles simples.", intro: "Les images chargées produisent souvent des palettes confuses à cause des ombres, reflets et micro-variations." },
  de: { ...avoidBadColorPicksFromBusyImagesEn, title: "Schlechte Farbauswahl bei unruhigen Bildern vermeiden", description: "So vermeidest du Farbrauschen aus komplexen Bildern mit einfachen Sampling-Regeln.", intro: "Unruhige Bilder liefern oft chaotische Paletten durch Schatten, Glanzlichter und kleine Farbabweichungen. Mit klaren Regeln wird es stabiler." }
};


const bestWebpQualitySettingsEn: GuideLocalizedContent = {
  title: "Best WebP Quality Settings for Real-World Use",
  description: "Use practical WebP quality ranges for photos, blog images, and UI assets without guesswork.",
  intro: "The best WebP setting depends on the image type and where it will be used. Instead of chasing one perfect number, use a small set of quality ranges and compare results quickly.",
  categoryLabel: "WebP workflow",
  useCasesTitle: "Where this helps most",
  useCases: ["Optimizing blog post images.", "Reducing hero image weight.", "Exporting UI screenshots.", "Building a repeatable team workflow."],
  closingTitle: "Use ranges, then verify",
  closingText: "Start with a practical range, check visual quality, and keep the smallest acceptable file.",
  relatedToolLabel: "Open the WebP Converter",
  sections: [
    { heading: "Start with practical quality ranges", paragraphs: ["For many photo-style web images, quality around 70–82 is a strong starting point. For UI screenshots or text-heavy images, test higher quality first to protect sharp edges.", "If quality is too low, artifacts become obvious around text, gradients, and faces."] },
    { heading: "Choose by image type", paragraphs: ["Photos usually handle lossy compression well, but graphics with text and flat colors may need higher quality or lossless mode.", "Treat product photos, UI captures, and logos as separate cases instead of using one global export preset."] },
    { heading: "Compare size and clarity side by side", paragraphs: ["Run two or three exports, then compare actual file size and visible quality at real display size.", "Tiny quality gains are not worth large file size increases."], bullets: ["Test around 65, 75, and 85 for photos.", "Zoom to 100% when checking edges and text.", "Prefer the smallest version that still looks clean."] },
    { heading: "Save your default workflow", paragraphs: ["Once you find ranges that work, document them for your team.", "A simple rule set prevents random quality choices and keeps image output consistent."] }
  ]
};

const bestWebpQualitySettingsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: bestWebpQualitySettingsEn,
  ko: { ...bestWebpQualitySettingsEn, title: "실무에서 쓰기 좋은 WebP 품질 설정", description: "사진, 블로그 이미지, UI 자산에 맞는 WebP 품질 범위를 실무 기준으로 정리합니다.", intro: "WebP 품질의 정답은 하나가 아니라 이미지 유형과 사용 위치에 따라 달라집니다. 작은 범위를 정해 비교하면 훨씬 빠르게 결정할 수 있습니다." },
  ja: { ...bestWebpQualitySettingsEn, title: "実務で使えるWebP品質設定の目安", description: "写真・記事画像・UI素材に合わせた実用的なWebP品質レンジを紹介します。", intro: "WebPの最適値は1つではなく、画像の種類と用途で変わります。少数のレンジで比較すると判断が速くなります。" },
  es: { ...bestWebpQualitySettingsEn, title: "Mejores ajustes de calidad WebP para uso real", description: "Aplica rangos prácticos de calidad WebP para fotos, imágenes de blog y recursos UI.", intro: "No existe un único valor perfecto de WebP. Lo más útil es trabajar con rangos y comparar resultados rápidamente." },
  fr: { ...bestWebpQualitySettingsEn, title: "Meilleurs réglages de qualité WebP en pratique", description: "Utilisez des plages de qualité WebP adaptées aux photos, images d'article et éléments UI.", intro: "Il n'existe pas une valeur WebP parfaite pour tout. Des plages simples et des comparaisons rapides donnent de meilleurs résultats." },
  de: { ...bestWebpQualitySettingsEn, title: "Die besten WebP-Qualitätseinstellungen für die Praxis", description: "Praktische WebP-Qualitätsbereiche für Fotos, Blogbilder und UI-Assets nutzen.", intro: "Es gibt nicht den einen perfekten WebP-Wert. Mit kleinen Qualitätsbereichen und schnellen Vergleichen triffst du bessere Entscheidungen." }
};

const jpgToWebpVsPngToWebpEn: GuideLocalizedContent = {
  title: "JPG to WebP vs PNG to WebP: What Changes?",
  description: "Understand why JPG-to-WebP and PNG-to-WebP conversions behave differently in quality and file size.",
  intro: "Many people expect identical results when converting JPG and PNG to WebP, but the source format strongly affects output quality and compression gains.",
  categoryLabel: "WebP workflow",
  useCasesTitle: "Useful when",
  useCases: ["Planning bulk conversion jobs.", "Comparing before/after image weight.", "Choosing export rules by asset type."],
  closingTitle: "Start from the source format",
  closingText: "If you separate JPG and PNG workflows, your WebP results become more predictable and easier to control.",
  relatedToolLabel: "Open the WebP Converter",
  sections: [
    { heading: "JPG and PNG start from different data", paragraphs: ["JPG is already lossy, so converting it to WebP usually gives incremental savings rather than dramatic quality improvements.", "PNG is often lossless or transparency-heavy, so converting to WebP can reduce size a lot, but settings must be chosen carefully."] },
    { heading: "What to expect from JPG to WebP", paragraphs: ["For photo content, WebP often cuts size further while keeping acceptable quality.", "If the original JPG is already heavily compressed, pushing quality too low can quickly look worse."] },
    { heading: "What to expect from PNG to WebP", paragraphs: ["UI graphics and transparent assets can shrink significantly with WebP.", "But text edges and logos need closer review, especially with lossy settings."], bullets: ["Keep transparency checks in your QA step.", "Use higher quality for text-heavy graphics.", "Use lossless mode for critical brand assets."] },
    { heading: "Build two simple conversion rules", paragraphs: ["Use one default for photos (usually lossy) and another for graphics/transparency (often lossless or higher quality).", "This keeps automation simple and avoids quality surprises."] }
  ]
};

const jpgToWebpVsPngToWebpContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: jpgToWebpVsPngToWebpEn,
  ko: { ...jpgToWebpVsPngToWebpEn, title: "JPG→WebP와 PNG→WebP 변환은 무엇이 다를까?", description: "JPG와 PNG를 WebP로 바꿀 때 품질과 용량 결과가 왜 다른지 이해합니다.", intro: "JPG와 PNG를 같은 방식으로 WebP로 변환해도 결과는 다르게 나옵니다. 원본 형식이 결과를 크게 좌우하기 때문입니다." },
  ja: { ...jpgToWebpVsPngToWebpEn, title: "JPG→WebPとPNG→WebPの違い", description: "JPG変換とPNG変換でWebPの画質・サイズ結果が変わる理由を整理します。", intro: "JPGとPNGは元データの性質が異なるため、WebP変換後の結果も同じにはなりません。" },
  es: { ...jpgToWebpVsPngToWebpEn, title: "JPG a WebP vs PNG a WebP: ¿qué cambia?", description: "Comprende por qué convertir JPG y PNG a WebP da resultados distintos de tamaño y calidad.", intro: "No esperes resultados idénticos al convertir JPG y PNG a WebP. El formato de origen influye mucho." },
  fr: { ...jpgToWebpVsPngToWebpEn, title: "JPG vers WebP vs PNG vers WebP : quelles différences ?", description: "Comprenez pourquoi les conversions JPG→WebP et PNG→WebP ne donnent pas les mêmes résultats.", intro: "Le format source influence fortement le rendu final. JPG et PNG ne réagissent pas de la même façon en WebP." },
  de: { ...jpgToWebpVsPngToWebpEn, title: "JPG zu WebP vs PNG zu WebP: Was ist anders?", description: "Warum JPG-zu-WebP und PNG-zu-WebP bei Qualität und Dateigröße unterschiedlich ausfallen.", intro: "Bei der WebP-Konvertierung bestimmt das Ausgangsformat stark das Ergebnis. JPG und PNG verhalten sich unterschiedlich." }
};

const commonWebpConversionMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Common WebP Conversion Mistakes to Avoid",
    description: "Avoid the most common WebP conversion errors that hurt image quality, workflow speed, and consistency.",
    intro: "WebP conversion is simple, but small workflow mistakes can produce blurry images, oversized files, or inconsistent results across pages.",
    categoryLabel: "WebP workflow",
    useCasesTitle: "When this guide helps",
    useCases: ["Converting large image batches.", "Setting team image export rules.", "Fixing inconsistent quality on a live site."],
    closingTitle: "Small fixes, better output",
    closingText: "Most WebP problems come from process issues, not from WebP itself. A short checklist solves most of them.",
    relatedToolLabel: "Open the WebP Converter",
    sections: [
      { heading: "Using one quality value for every image", paragraphs: ["Photos, UI screenshots, and logos need different settings. One global number creates unnecessary quality loss or larger files than needed.", "Start with format-specific defaults and adjust only when needed."] },
      { heading: "Skipping visual checks after conversion", paragraphs: ["A small file is not useful if text edges, faces, or gradients look damaged.", "Always review converted files at realistic display size before publishing."], bullets: ["Check text and logo edges.", "Check gradients and shadow areas.", "Compare original and converted side by side."] },
      { heading: "Converting already-overcompressed sources", paragraphs: ["If the original JPG is heavily compressed, converting again can amplify artifacts.", "When possible, start from a cleaner source file or a less compressed master."] },
      { heading: "Ignoring transparency and use context", paragraphs: ["Transparent graphics and UI elements can require different WebP settings than photos.", "Test images in real UI context, not only in isolated previews."] },
      { heading: "Not documenting your workflow", paragraphs: ["Without team rules, everyone exports differently and results become inconsistent.", "Write a small conversion guide with default ranges and review steps."] }
    ]
  },
  ko: { title: "자주 하는 WebP 변환 실수와 예방법", description: "화질 저하, 용량 비효율, 결과 불일치를 만드는 WebP 변환 실수를 피하는 방법입니다.", intro: "WebP 변환 자체는 쉽지만, 작업 방식이 잘못되면 흐림, 과도한 압축, 일관성 부족이 생기기 쉽습니다.", categoryLabel: "WebP 워크플로", useCasesTitle: "이럴 때 도움됩니다", useCases: ["대량 이미지 변환", "팀 내 변환 기준 수립", "운영 중 사이트 화질 문제 해결"], closingTitle: "작은 개선이 큰 차이", closingText: "대부분의 문제는 포맷이 아니라 프로세스에서 생깁니다. 짧은 체크리스트만으로도 품질이 안정됩니다.", relatedToolLabel: "WebP 변환기 열기", sections: [{ heading: "모든 이미지에 같은 품질값 사용", paragraphs: ["사진, UI 캡처, 로고는 필요한 설정이 다릅니다.", "자산 유형별 기본값을 먼저 정하세요."] }, { heading: "변환 후 시각 검수 생략", paragraphs: ["용량이 줄어도 글자 가장자리나 그라디언트가 깨지면 의미가 없습니다.", "실제 표시 크기에서 최종 확인하세요."], bullets: ["텍스트/로고 가장자리 확인", "그라디언트/그림자 확인", "원본과 나란히 비교"] }, { heading: "이미 과압축된 원본 재변환", paragraphs: ["원본 JPG가 이미 손상된 상태면 WebP 재변환에서 아티팩트가 더 도드라집니다.", "가능하면 더 깨끗한 원본으로 시작하세요."] }, { heading: "투명도와 사용 맥락 무시", paragraphs: ["투명 배경 그래픽은 사진과 다른 설정이 필요할 수 있습니다.", "단독 미리보기뿐 아니라 실제 UI에 넣어 확인하세요."] }, { heading: "워크플로 문서화 부족", paragraphs: ["기준이 없으면 팀마다 결과가 달라집니다.", "기본 품질 범위와 검수 단계를 짧게 문서화하세요."] }] },
  ja: { title: "WebP変換でよくある失敗と回避方法", description: "画質低下やサイズ不安定を招くWebP変換ミスを実務的に防ぐためのガイド。", intro: "WebP変換は簡単ですが、運用ルールがないとぼやけ・劣化・ばらつきが起こりやすくなります。", categoryLabel: "WebPワークフロー", useCasesTitle: "役立つ場面", useCases: ["画像の一括変換", "チームルール整備", "公開済みページの品質改善"], closingTitle: "小さな運用改善が効く", closingText: "多くの問題はWebP自体ではなく運用手順で発生します。短いチェックリストで防げます。", relatedToolLabel: "WebP Converterを開く", sections: [{ heading: "全画像に同じ品質値を使う", paragraphs: ["写真、UI、ロゴでは最適値が異なります。", "素材タイプごとに初期設定を分けましょう。"] }, { heading: "変換後の目視確認をしない", paragraphs: ["軽量化できても文字や輪郭が崩れていたら逆効果です。", "実表示サイズで確認する習慣を入れてください。"], bullets: ["文字とロゴの縁を確認", "グラデーションや影を確認", "原本と並べて比較"] }, { heading: "劣化した元画像を再圧縮", paragraphs: ["すでに強圧縮されたJPGを再変換すると劣化が目立ちます。", "可能なら元の高品質データから変換します。"] }, { heading: "透過と表示文脈を無視", paragraphs: ["透過付き画像は写真と同じ設定では不十分な場合があります。", "単体プレビューだけでなくUI上で確認しましょう。"] }, { heading: "手順の文書化がない", paragraphs: ["基準がないと担当者ごとに品質がぶれます。", "品質レンジと確認項目を短く共有しましょう。"] }] },
  es: { ...bestWebpQualitySettingsEn, title: "Errores comunes al convertir a WebP (y cómo evitarlos)", description: "Evita errores frecuentes de conversión WebP que afectan calidad, peso y consistencia.", intro: "Convertir a WebP es fácil, pero pequeños fallos de proceso pueden generar imágenes borrosas o resultados desiguales.", useCasesTitle: "Cuándo ayuda esta guía", useCases: ["Conversión por lotes.", "Estandarizar flujo del equipo.", "Corregir calidad inconsistente."], closingTitle: "Mejor proceso, mejor resultado", closingText: "La mayoría de problemas vienen del flujo, no del formato.", sections: [{ heading: "Usar la misma calidad para todo", paragraphs: ["Fotos, capturas y logos requieren ajustes distintos.", "Define valores base por tipo de recurso."] }, { heading: "No revisar después de convertir", paragraphs: ["Un archivo pequeño no sirve si se ve mal.", "Revisa a tamaño real antes de publicar."], bullets: ["Bordes de texto y logo", "Gradientes y sombras", "Comparación lado a lado"] }, { heading: "Reconvertir archivos ya muy comprimidos", paragraphs: ["Si el JPG original ya está degradado, reconvertir empeora artefactos.", "Cuando puedas, parte de una fuente más limpia."] }, { heading: "Ignorar transparencia y contexto", paragraphs: ["Los recursos con transparencia no se comportan igual que una foto.", "Valida dentro del diseño real."] }, { heading: "No documentar el flujo", paragraphs: ["Sin reglas, cada persona exporta distinto.", "Guarda un mini checklist de calidad y revisión."] }] },
  fr: { ...bestWebpQualitySettingsEn, title: "Erreurs courantes à éviter lors d'une conversion WebP", description: "Évitez les erreurs de conversion WebP qui nuisent à la qualité et à la cohérence.", intro: "La conversion WebP est simple, mais des habitudes imprécises peuvent produire des images floues ou trop lourdes.", useCasesTitle: "Utile quand", useCases: ["Conversion en lot.", "Règles d'équipe.", "Correction de qualité en production."], closingTitle: "Petit cadre, grands gains", closingText: "Les problèmes viennent souvent du process, pas du format.", sections: [{ heading: "Une seule qualité pour tous les visuels", paragraphs: ["Photos, captures UI et logos n'ont pas les mêmes besoins.", "Créez des réglages de base par type d'image."] }, { heading: "Aucun contrôle visuel après export", paragraphs: ["Un fichier léger mais abîmé reste un mauvais résultat.", "Vérifiez toujours à taille d'affichage réelle."], bullets: ["Contours de texte/logo", "Dégradés et zones d'ombre", "Comparaison avant/après"] }, { heading: "Reconvertir des sources déjà dégradées", paragraphs: ["Un JPG déjà trop compressé se détériore davantage.", "Repartez d'une source plus propre quand possible."] }, { heading: "Ignorer la transparence et le contexte", paragraphs: ["Les assets transparents demandent souvent d'autres réglages.", "Testez l'image dans l'interface réelle."] }, { heading: "Absence de documentation interne", paragraphs: ["Sans règles partagées, les exports varient selon la personne.", "Documentez une checklist courte."] }] },
  de: { ...bestWebpQualitySettingsEn, title: "Häufige WebP-Konvertierungsfehler vermeiden", description: "Vermeide typische WebP-Fehler, die Qualität, Dateigröße und Konsistenz verschlechtern.", intro: "Die WebP-Konvertierung ist einfach, aber kleine Prozessfehler führen schnell zu unscharfen oder uneinheitlichen Ergebnissen.", useCasesTitle: "Hilfreich bei", useCases: ["Batch-Konvertierung.", "Team-Standards.", "Qualitätsproblemen auf Live-Seiten."], closingTitle: "Kleine Korrekturen, bessere Ergebnisse", closingText: "Die meisten Probleme sind Workflow-Themen, nicht WebP-Probleme.", sections: [{ heading: "Ein Qualitätswert für alle Bilder", paragraphs: ["Fotos, UI-Screenshots und Logos brauchen unterschiedliche Einstellungen.", "Lege Startwerte je Asset-Typ fest."] }, { heading: "Keine Sichtprüfung nach der Konvertierung", paragraphs: ["Eine kleine Datei hilft nicht, wenn Kanten unsauber sind.", "Vor Veröffentlichung immer in realer Anzeigegröße prüfen."], bullets: ["Text- und Logokanten prüfen", "Verläufe und Schatten prüfen", "Vorher/Nachher vergleichen"] }, { heading: "Bereits stark komprimierte Quellen erneut konvertieren", paragraphs: ["Wenn das Ausgangs-JPG schon stark komprimiert ist, verstärken sich Artefakte.", "Wenn möglich von einer saubereren Quelle starten."] }, { heading: "Transparenz und Einsatzkontext ignorieren", paragraphs: ["Transparente Assets reagieren anders als Fotos.", "Im echten UI-Kontext testen, nicht nur isoliert."] }, { heading: "Workflow nicht dokumentieren", paragraphs: ["Ohne Regeln exportiert jede Person anders.", "Kurze Qualitäts- und Prüfregeln dokumentieren."] }] }
};

const whyWebpImageLooksBlurryContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Why Your WebP Image Looks Blurry",
    description: "Diagnose blurry WebP images with a practical checklist and fix quality issues fast.",
    intro: "Blurry WebP output is usually caused by compression settings, poor source files, or resizing mistakes—not by WebP alone.",
    categoryLabel: "WebP troubleshooting",
    useCasesTitle: "Most useful when",
    useCases: ["A converted image looks soft compared to the original.", "Text inside WebP assets becomes hard to read.", "Quality issues appear on mobile or retina screens."],
    closingTitle: "Check source, settings, and display size",
    closingText: "Most blur issues can be fixed quickly once you review those three areas in order.",
    relatedToolLabel: "Open the WebP Converter",
    sections: [
      { heading: "Quality value is too low", paragraphs: ["Very low quality settings can smear details and soften edges, especially around text and faces.", "Raise quality in small steps and compare results."] },
      { heading: "Source image is already degraded", paragraphs: ["WebP cannot restore detail that is already missing in the original file.", "Start from a higher-quality source whenever possible."] },
      { heading: "Image is being resized incorrectly", paragraphs: ["Upscaling small images or forcing wrong dimensions can make WebP appear blurry.", "Serve images close to their real display size."], bullets: ["Avoid enlarging small originals.", "Check CSS width/height rules.", "Use higher-resolution assets for high-density screens."] },
      { heading: "Wrong mode for the asset", paragraphs: ["Text-heavy graphics may need higher quality or lossless mode.", "Photos and UI graphics should not always share the same conversion preset."] },
      { heading: "No side-by-side QA", paragraphs: ["Without a direct comparison, subtle blur can slip into production.", "Always compare original and WebP at 100% zoom before shipping."] }
    ]
  },
  ko: { ...bestWebpQualitySettingsEn, title: "WebP 이미지가 흐릿하게 보이는 이유", description: "체크리스트로 WebP 흐림 원인을 빠르게 찾고 수정하는 방법을 안내합니다.", intro: "대부분의 흐림 문제는 WebP 자체보다 품질 설정, 원본 상태, 리사이즈 방식에서 발생합니다.", categoryLabel: "WebP 문제 해결", useCasesTitle: "이럴 때 유용", useCases: ["변환 후 이미지가 원본보다 뿌옇게 보일 때", "텍스트가 뭉개져 읽기 어려울 때", "모바일/레티나에서만 품질이 떨어질 때"], closingTitle: "원본-설정-표시 크기 순서로 점검", closingText: "세 가지를 순서대로 보면 대부분 빠르게 해결됩니다.", sections: [{ heading: "품질 값이 너무 낮음", paragraphs: ["품질이 너무 낮으면 윤곽과 디테일이 쉽게 무너집니다.", "작은 단계로 올려 비교하세요."] }, { heading: "원본 이미지가 이미 손상됨", paragraphs: ["원본 디테일이 없으면 WebP로 바꿔도 복원되지 않습니다.", "가능하면 더 고품질 원본을 사용하세요."] }, { heading: "리사이즈 방식 문제", paragraphs: ["작은 이미지를 억지로 키우면 흐릿해집니다.", "실제 노출 크기에 맞춘 자산을 사용하세요."], bullets: ["작은 원본 확대 피하기", "CSS width/height 확인", "고해상도 화면용 자산 준비"] }, { heading: "자산 유형에 맞지 않는 모드", paragraphs: ["텍스트 중심 그래픽은 높은 품질 또는 무손실이 필요할 수 있습니다.", "사진과 UI를 같은 프리셋으로 처리하지 마세요."] }, { heading: "나란히 비교 검수 부재", paragraphs: ["직접 비교하지 않으면 미세한 흐림을 놓치기 쉽습니다.", "배포 전 100% 배율로 비교하세요."] }] },
  ja: { ...bestWebpQualitySettingsEn, title: "WebP画像がぼやけて見える理由", description: "WebPがぼやける原因をチェックリストで特定し、短時間で改善する方法。", intro: "多くの場合、原因はWebPそのものではなく設定値・元画像・リサイズ方法です。", categoryLabel: "WebPトラブル対応", useCasesTitle: "役立つ場面", useCases: ["変換後に画像が甘く見える", "文字入り画像が読みにくい", "モバイルだけ画質が悪い"], closingTitle: "元画像・設定・表示サイズを順に確認", closingText: "この順序で確認すると、ぼやけ問題は多くが解決できます。", sections: [{ heading: "品質値が低すぎる", paragraphs: ["品質を下げすぎると輪郭や細部が崩れます。", "少しずつ上げて比較してください."] }, { heading: "元画像がすでに劣化", paragraphs: ["元画像の情報が不足しているとWebPでも改善できません。", "可能なら高品質な元データから変換しましょう。"] }, { heading: "リサイズ設定の問題", paragraphs: ["小さい画像の拡大表示はぼやけの原因です。", "実表示サイズに近い解像度を用意しましょう。"], bullets: ["小さな元画像の拡大を避ける", "CSSの幅・高さ指定を確認", "高密度画面向け画像を用意"] }, { heading: "素材に合わないモード", paragraphs: ["文字中心素材は高品質または可逆が必要な場合があります。", "写真とUI素材で同じプリセットを使い回さないでください。"] }, { heading: "比較チェック不足", paragraphs: ["並べて比較しないと微妙なぼけを見落とします。", "公開前に100%表示で原本比較しましょう。"] }] },
  es: { ...bestWebpQualitySettingsEn, title: "Por qué tu imagen WebP se ve borrosa", description: "Detecta rápidamente por qué un WebP se ve borroso y cómo corregirlo.", intro: "El problema suele venir de la configuración, la fuente o el reescalado, no del formato WebP en sí.", categoryLabel: "Solución WebP", useCasesTitle: "Útil cuando", useCases: ["El WebP se ve más suave que el original.", "El texto dentro de la imagen pierde nitidez.", "La calidad cae en móvil."], closingTitle: "Revisa fuente, ajustes y tamaño real", closingText: "Con ese orden puedes resolver la mayoría de casos en minutos.", sections: [{ heading: "Calidad demasiado baja", paragraphs: ["Una calidad muy baja borra bordes y detalles.", "Sube el valor poco a poco y compara."] }, { heading: "Fuente ya degradada", paragraphs: ["WebP no puede recuperar detalle perdido en el original.", "Empieza desde un archivo más limpio cuando puedas."] }, { heading: "Escalado incorrecto", paragraphs: ["Ampliar imágenes pequeñas genera borrosidad.", "Sirve imágenes cercanas al tamaño de visualización."], bullets: ["Evita ampliar originales pequeños", "Revisa width/height en CSS", "Usa recursos más grandes para pantallas densas"] }, { heading: "Modo no adecuado", paragraphs: ["Imágenes con texto pueden necesitar más calidad o modo sin pérdida.", "No uses el mismo preset para todo."] }, { heading: "Falta de comparación", paragraphs: ["Sin comparar lado a lado, el problema pasa desapercibido.", "Valida a zoom 100% antes de publicar."] }] },
  fr: { ...bestWebpQualitySettingsEn, title: "Pourquoi votre image WebP paraît floue", description: "Diagnostiquez vite les causes d'un WebP flou et corrigez-les avec une méthode simple.", intro: "Le flou vient souvent des réglages, de la source ou du redimensionnement, pas du format lui-même.", categoryLabel: "Dépannage WebP", useCasesTitle: "Utile quand", useCases: ["Le WebP est moins net que l'original.", "Le texte devient difficile à lire.", "Le rendu se dégrade sur mobile."], closingTitle: "Vérifiez source, réglages, taille", closingText: "Cet ordre suffit dans la plupart des cas pour corriger rapidement.", sections: [{ heading: "Qualité trop basse", paragraphs: ["Un niveau trop bas lisse les détails et les contours.", "Montez progressivement puis comparez."] }, { heading: "Source déjà dégradée", paragraphs: ["WebP ne recrée pas les détails perdus dans l'image d'origine.", "Utilisez une source plus propre dès que possible."] }, { heading: "Redimensionnement inadapté", paragraphs: ["Agrandir une petite image la rend floue.", "Servez une image proche de la taille réelle d'affichage."], bullets: ["Éviter les agrandissements excessifs", "Contrôler width/height CSS", "Prévoir des ressources haute densité"] }, { heading: "Mauvais mode pour le visuel", paragraphs: ["Les visuels avec texte demandent parfois plus de qualité ou du sans perte.", "Évitez un preset unique pour tous les assets."] }, { heading: "Absence de comparaison directe", paragraphs: ["Sans comparaison côte à côte, le flou subtil passe inaperçu.", "Vérifiez à 100% avant publication."] }] },
  de: { ...bestWebpQualitySettingsEn, title: "Warum dein WebP-Bild unscharf aussieht", description: "Finde mit einer kurzen Checkliste heraus, warum WebP unscharf wirkt, und behebe es schnell.", intro: "Unscharfes WebP liegt meist an Einstellungen, Quellqualität oder falscher Skalierung, nicht am Format selbst.", categoryLabel: "WebP-Fehleranalyse", useCasesTitle: "Hilfreich wenn", useCases: ["Das WebP wirkt weicher als das Original.", "Text im Bild ist schwer lesbar.", "Mobil wirkt die Qualität schlechter."], closingTitle: "Quelle, Einstellungen, Anzeigegröße prüfen", closingText: "Mit dieser Reihenfolge lassen sich die meisten Fälle schnell lösen.", sections: [{ heading: "Qualität zu niedrig", paragraphs: ["Zu niedrige Qualität verwischt Details und Kanten.", "In kleinen Schritten erhöhen und vergleichen."] }, { heading: "Quelle bereits schlecht", paragraphs: ["Fehlende Details im Original lassen sich nicht zurückholen.", "Wenn möglich mit besserer Quelle starten."] }, { heading: "Falsche Skalierung", paragraphs: ["Kleine Bilder hochzuskalieren macht sie unscharf.", "Nahe an realer Darstellungsgröße ausliefern."], bullets: ["Keine kleinen Bilder aufblasen", "CSS width/height prüfen", "Für Retina größere Assets nutzen"] }, { heading: "Unpassender Modus", paragraphs: ["Textlastige Grafiken brauchen oft höhere Qualität oder verlustfrei.", "Fotos und UI-Grafiken nicht identisch behandeln."] }, { heading: "Keine Side-by-Side-Prüfung", paragraphs: ["Ohne Direktvergleich bleiben subtile Probleme unentdeckt.", "Vor Release bei 100% Zoom vergleichen."] }] }
};

const lossyVsLosslessWebpContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Choose Between Lossy and Lossless WebP",
    description: "Pick the right WebP mode for each image type with simple rules you can use in daily workflows.",
    intro: "Lossy WebP usually gives smaller files, while lossless WebP keeps exact pixel detail. The right choice depends on asset type and quality tolerance.",
    categoryLabel: "WebP workflow",
    useCasesTitle: "Useful for",
    useCases: ["Preparing blog and product images.", "Exporting logos and UI assets.", "Defining image standards for a team."],
    closingTitle: "Use mode by purpose",
    closingText: "Pick lossy for efficient delivery and lossless for precision assets. Mixing both gives the best overall results.",
    relatedToolLabel: "Open the WebP Converter",
    sections: [
      { heading: "What lossy and lossless mean", paragraphs: ["Lossy WebP removes some detail to shrink file size more aggressively.", "Lossless WebP preserves pixel data more faithfully but usually creates larger files."] },
      { heading: "When lossy WebP is the better choice", paragraphs: ["Use lossy mode for photos and large content images where slight detail loss is acceptable.", "It is often best for page speed and bandwidth savings."] },
      { heading: "When lossless WebP is the better choice", paragraphs: ["Use lossless mode for logos, icons, UI graphics, and text-heavy assets.", "It helps preserve sharp edges and brand details."], bullets: ["Logos and symbols", "Screenshots with text", "Assets reused across many pages"] },
      { heading: "A simple decision workflow", paragraphs: ["Start by classifying the asset: photo or graphic. Then test one lossy and one lossless export if unsure.", "Choose the smallest version that still matches your visual quality bar."] },
      { heading: "Keep both options in your process", paragraphs: ["Teams often get better consistency by documenting when to use each mode.", "This avoids over-compressing important assets or shipping unnecessarily large files."] }
    ]
  },
  ko: { ...bestWebpQualitySettingsEn, title: "손실 WebP와 무손실 WebP, 어떻게 고를까?", description: "이미지 유형에 따라 손실/무손실 WebP를 고르는 실무 기준을 소개합니다.", intro: "손실 WebP는 용량 절감에 유리하고, 무손실 WebP는 픽셀 디테일 보존에 유리합니다. 핵심은 자산 목적에 맞춰 고르는 것입니다.", categoryLabel: "WebP 워크플로", useCasesTitle: "유용한 상황", useCases: ["블로그/상품 이미지 준비", "로고·UI 자산 내보내기", "팀 공통 이미지 기준 수립"], closingTitle: "용도별로 모드를 분리", closingText: "사진은 손실, 정밀 그래픽은 무손실 중심으로 운영하면 품질과 성능을 함께 잡기 쉽습니다.", sections: [{ heading: "손실과 무손실의 차이", paragraphs: ["손실 WebP는 일부 정보를 줄여 파일을 더 작게 만듭니다.", "무손실 WebP는 원본 픽셀 보존이 좋아 대신 파일이 커질 수 있습니다."] }, { heading: "손실 WebP가 좋은 경우", paragraphs: ["사진이나 큰 본문 이미지는 손실 WebP가 효율적입니다.", "페이지 속도와 전송량 개선에 유리합니다."] }, { heading: "무손실 WebP가 좋은 경우", paragraphs: ["로고, 아이콘, 텍스트 중심 UI 그래픽에는 무손실이 안전합니다.", "경계선과 브랜드 디테일 보존에 도움이 됩니다."], bullets: ["로고/심볼", "텍스트 포함 스크린샷", "여러 페이지에서 재사용되는 자산"] }, { heading: "빠른 결정 흐름", paragraphs: ["먼저 사진인지 그래픽인지 분류한 뒤, 애매하면 손실·무손실을 각각 1개씩 테스트하세요.", "품질 기준을 만족하는 가장 작은 파일을 선택합니다."] }, { heading: "프로세스에 둘 다 포함", paragraphs: ["모드별 사용 기준을 문서화하면 팀 일관성이 높아집니다.", "중요 자산의 과압축이나 불필요한 대용량 배포를 줄일 수 있습니다."] }] },
  ja: { ...bestWebpQualitySettingsEn, title: "Lossy WebPとLossless WebPの選び方", description: "画像タイプ別にLossy/Lossless WebPを使い分ける実践ルール。", intro: "Lossyは軽量化に強く、Losslessは画素保持に強い方式です。素材の用途で選ぶのが最短です。", categoryLabel: "WebPワークフロー", useCasesTitle: "役立つ場面", useCases: ["記事画像の最適化", "ロゴ・UI素材の書き出し", "チーム運用ルール作成"], closingTitle: "用途でモードを分ける", closingText: "写真はLossy、精密素材はLosslessを基本にすると安定します。", sections: [{ heading: "LossyとLosslessの違い", paragraphs: ["Lossyは情報を一部減らして大きく軽量化します。", "Losslessは画素を忠実に保つ分、サイズが大きくなりやすいです."] }, { heading: "Lossyを選ぶ場面", paragraphs: ["写真や記事用の大型画像で軽量化を優先したいときに向きます。", "表示品質を保ちつつ配信効率を高めやすいです。"] }, { heading: "Losslessを選ぶ場面", paragraphs: ["ロゴ、アイコン、文字入りUI画像ではLosslessが有効です。", "輪郭や細部を守りたい素材で効果的です。"], bullets: ["ロゴ・シンボル", "文字入りスクリーンショット", "繰り返し使う重要素材"] }, { heading: "簡単な判断手順", paragraphs: ["まず写真かグラフィックか分類し、迷う場合は両方を1枚ずつ比較します。", "品質基準を満たす最小サイズを選びましょう。"] }, { heading: "両モードを運用に組み込む", paragraphs: ["使い分けルールを文書化すると品質のばらつきを防げます。", "重要素材の過圧縮や不要な大容量配信を減らせます。"] }] },
  es: { ...bestWebpQualitySettingsEn, title: "Cómo elegir entre WebP con pérdida y sin pérdida", description: "Elige el modo WebP adecuado según el tipo de imagen con reglas simples.", intro: "WebP con pérdida suele ser más liviano; WebP sin pérdida conserva mejor los píxeles. La mejor opción depende del recurso.", categoryLabel: "Flujo WebP", useCasesTitle: "Útil para", useCases: ["Optimizar imágenes de artículos", "Exportar logos y UI", "Definir estándares de equipo"], closingTitle: "Modo según objetivo", closingText: "Usa con pérdida para eficiencia y sin pérdida para precisión visual.", sections: [{ heading: "Qué significa cada modo", paragraphs: ["Con pérdida elimina parte de la información para reducir más el peso.", "Sin pérdida mantiene mejor el detalle de píxel, pero pesa más."] }, { heading: "Cuándo usar con pérdida", paragraphs: ["Ideal para fotos y contenido visual grande.", "Suele dar mejor rendimiento de carga."] }, { heading: "Cuándo usar sin pérdida", paragraphs: ["Mejor para logos, iconos y gráficos con texto.", "Ayuda a mantener bordes limpios y detalle de marca."], bullets: ["Logos", "Capturas con texto", "Recursos clave reutilizados"] }, { heading: "Flujo rápido de decisión", paragraphs: ["Clasifica primero: foto o gráfico. Si dudas, prueba ambas opciones.", "Quédate con la versión más ligera que siga viéndose bien."] }, { heading: "Incluye ambos modos en tu proceso", paragraphs: ["Documentar cuándo usar cada modo mejora consistencia.", "Evitas comprimir en exceso o enviar archivos innecesariamente grandes."] }] },
  fr: { ...bestWebpQualitySettingsEn, title: "Comment choisir entre WebP avec et sans perte", description: "Choisissez le bon mode WebP selon le type d'image avec des règles simples.", intro: "Le WebP avec perte est souvent plus léger, le sans perte conserve mieux les détails. Le bon choix dépend du visuel.", categoryLabel: "Workflow WebP", useCasesTitle: "Utile pour", useCases: ["Optimiser images d'articles", "Exporter logos/UI", "Définir des standards équipe"], closingTitle: "Choisir selon l'usage", closingText: "Avec perte pour l'efficacité, sans perte pour la précision visuelle.", sections: [{ heading: "Différence entre les modes", paragraphs: ["Le mode avec perte réduit davantage le poids en supprimant une partie des données.", "Le mode sans perte garde mieux les pixels, mais génère souvent des fichiers plus lourds."] }, { heading: "Quand préférer le mode avec perte", paragraphs: ["Adapté aux photos et grandes images de contenu.", "Souvent meilleur pour la vitesse de chargement."] }, { heading: "Quand préférer le mode sans perte", paragraphs: ["Plus sûr pour logos, icônes et visuels avec texte.", "Permet de préserver des contours nets."], bullets: ["Logos", "Captures avec texte", "Assets critiques réutilisés"] }, { heading: "Méthode de décision rapide", paragraphs: ["Commencez par classer le visuel : photo ou graphique. En cas de doute, testez les deux.", "Gardez la version la plus légère qui reste propre visuellement."] }, { heading: "Intégrer les deux modes au process", paragraphs: ["Documenter les règles d'usage améliore la cohérence.", "Vous évitez la surcompression comme les fichiers inutilement lourds."] }] },
  de: { ...bestWebpQualitySettingsEn, title: "So wählst du zwischen verlustbehaftetem und verlustfreiem WebP", description: "Wähle den passenden WebP-Modus je Bildtyp mit einfachen Praxisregeln.", intro: "Verlustbehaftetes WebP ist meist kleiner, verlustfreies WebP erhält Details besser. Entscheidend ist der Einsatzzweck.", categoryLabel: "WebP-Workflow", useCasesTitle: "Hilfreich für", useCases: ["Blog- und Produktbilder", "Logos und UI-Assets", "Teamweite Exportregeln"], closingTitle: "Modus nach Zweck wählen", closingText: "Verlustbehaftet für Effizienz, verlustfrei für präzise Assets.", sections: [{ heading: "Was die Modi bedeuten", paragraphs: ["Verlustbehaftet entfernt einen Teil der Details für kleinere Dateien.", "Verlustfrei erhält Pixel genauer, ist aber meist größer."] }, { heading: "Wann verlustbehaftet besser ist", paragraphs: ["Für Fotos und große Content-Bilder ist dieser Modus oft ideal.", "Er verbessert häufig Ladezeit und Bandbreite."] }, { heading: "Wann verlustfrei besser ist", paragraphs: ["Für Logos, Icons und textlastige Grafiken meist die bessere Wahl.", "Hilft, scharfe Kanten und Markendetails zu behalten."], bullets: ["Logos und Symbole", "Screenshots mit Text", "Wichtige wiederverwendete Assets"] }, { heading: "Einfache Entscheidungsroutine", paragraphs: ["Zuerst Bildtyp bestimmen: Foto oder Grafik. Bei Unsicherheit beide Varianten testen.", "Die kleinste Version wählen, die visuell noch sauber ist."] }, { heading: "Beide Modi im Prozess verankern", paragraphs: ["Dokumentierte Regeln erhöhen Teamkonsistenz.", "So vermeidest du Überkomprimierung und unnötig große Dateien."] }] }
};


const writeShorterTitlesWithoutBeingVagueContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Write Shorter Titles Without Making Them Vague", description: "Use a simple rewrite workflow to shorten titles while keeping the core meaning clear.", intro: "Short titles often perform better in search and social previews, but aggressive cuts can make them vague. This guide shows how to trim safely so readers still understand your page instantly.", categoryLabel: "Content writing", useCasesTitle: "Useful for", useCases: ["Refreshing long blog headlines.", "Improving title clarity in SERP snippets.", "Reducing rewrite cycles during editing.", "Creating concise title style rules for teams."], closingTitle: "Short and clear can coexist", closingText: "Use character count as a checkpoint, not a writing target. Keep the topic explicit, then trim only what does not add meaning.", relatedToolLabel: "Open Character Counter", sections: [{ heading: "Start with the core promise", paragraphs: ["Before trimming, identify what the title must communicate: topic, audience, and practical value.", "If one of those elements disappears after editing, the title is probably too vague."] }, { heading: "Cut filler before cutting meaning", paragraphs: ["Remove empty phrases first instead of deleting important keywords."], bullets: ["Delete phrases like ‘complete guide to’ when unnecessary.", "Replace long connectors with shorter natural wording.", "Keep one clear action or outcome in the title.", "Read the trimmed version once out loud for clarity."] }, { heading: "Keep the main topic near the front", paragraphs: ["Readers scan quickly, so front-load the key subject.", "If truncation happens, an early keyword still preserves meaning."] }, { heading: "Compare two concise variations", paragraphs: ["Draft at least two shorter options and review them in a character counter.", "Choose the version that stays specific, not just the shortest number."] }, { heading: "Run a quick ambiguity check", paragraphs: ["Ask whether a first-time reader can understand the page purpose in one glance.", "If not, restore one clarifying word instead of forcing extra brevity."] }] },
  ko: { title: "모호해지지 않게 제목을 짧게 쓰는 방법", description: "제목 의미를 유지하면서 길이만 줄이는 실무 리라이트 방법을 소개합니다.", intro: "짧은 제목은 검색·SNS 노출에 유리하지만, 무리하게 줄이면 의미가 흐려집니다. 핵심은 정보는 남기고 군더더기만 줄이는 것입니다.", categoryLabel: "콘텐츠 작성", useCasesTitle: "도움이 되는 상황", useCases: ["긴 블로그 제목 리라이트", "검색 스니펫 가독성 개선", "편집 반복 줄이기", "팀 제목 작성 기준 정리"], closingTitle: "짧고 명확하게", closingText: "문자 수는 기준점일 뿐입니다. 주제를 분명히 남긴 뒤 불필요한 표현만 줄이세요.", relatedToolLabel: "Character Counter 열기", sections: [{ heading: "먼저 핵심 메시지 고정", paragraphs: ["줄이기 전에 제목이 반드시 전달해야 할 내용을 정하세요.", "주제·대상·이점 중 하나라도 빠지면 모호해질 가능성이 큽니다."] }, { heading: "의미보다 군더더기부터 삭제", paragraphs: ["중요 키워드보다 불필요한 문구를 먼저 제거하세요."], bullets: ["‘완벽 가이드’ 같은 상투 표현 줄이기", "긴 연결어를 자연스럽게 축약", "제목에 핵심 행동/결과 1개 유지", "소리 내어 읽어 어색한 부분 확인"] }, { heading: "핵심 주제를 앞쪽에 배치", paragraphs: ["사용자는 빠르게 훑어보므로 핵심 키워드를 앞에 둡니다.", "잘려 보여도 앞부분만으로 의미가 전달됩니다."] }, { heading: "짧은 후보 2개 이상 비교", paragraphs: ["최소 2개 버전을 만들어 문자 수와 의미를 함께 비교하세요.", "가장 짧은 제목보다 가장 명확한 제목을 선택하세요."] }, { heading: "모호성 최종 점검", paragraphs: ["처음 보는 사람도 한 번에 이해되는지 확인하세요.", "애매하면 설명 단어 1개를 되돌리는 편이 낫습니다."] }] },
  ja: { title: "曖昧にせずにタイトルを短くする方法", description: "意味を保ったままタイトルを短くする実践的なリライト手順です。", intro: "短いタイトルは検索やSNSで有利ですが、削りすぎると内容が伝わりません。重要情報を残して不要語だけ削るのがポイントです。", categoryLabel: "ライティング", useCasesTitle: "役立つ場面", useCases: ["長いブログ見出しの調整", "検索スニペットの改善", "編集工数の削減", "チームの命名ルール整備"], closingTitle: "短さと明確さを両立", closingText: "文字数は目安です。主題が明確に残る形で、不要な語だけを削りましょう。", relatedToolLabel: "Character Counterを開く", sections: [{ heading: "先に伝える要点を決める", paragraphs: ["短縮前に、タイトルで必ず伝える要素を整理します。", "主題・対象・価値のどれかが抜けると曖昧になります。"] }, { heading: "意味より先に冗長語を削る", paragraphs: ["重要キーワードを消す前に、不要な装飾語を整理します。"], bullets: ["「完全ガイド」などの定型句を削る", "長い接続表現を短くする", "行動や結果を1つ残す", "声に出して不自然さを確認する"] }, { heading: "主題を前半に置く", paragraphs: ["ユーザーは先頭から素早く判断します。", "前半に主題があれば、省略表示でも意味を保てます。"] }, { heading: "短い候補を複数比較", paragraphs: ["2案以上を作って文字数と分かりやすさを比べましょう。", "最短ではなく、最も具体的な案を選びます。"] }, { heading: "曖昧さチェックで仕上げる", paragraphs: ["初見の読者が一目で内容を理解できるか確認します。", "不明瞭なら補足語を1語戻してください。"] }] },
  es: { title: "Cómo escribir títulos más cortos sin volverlos vagos", description: "Acorta títulos con un flujo simple de edición sin perder claridad ni intención.", intro: "Los títulos cortos suelen funcionar mejor en buscadores y redes, pero recortar demasiado puede volverlos ambiguos. Aquí verás cómo acortar sin perder el mensaje principal.", categoryLabel: "Redacción", useCasesTitle: "Útil para", useCases: ["Actualizar titulares largos", "Mejorar snippets en buscadores", "Reducir iteraciones de edición", "Definir reglas editoriales de títulos"], closingTitle: "Breve y claro al mismo tiempo", closingText: "Usa el contador como control final. Mantén explícito el tema y recorta solo lo que no aporta valor.", relatedToolLabel: "Abrir Character Counter", sections: [{ heading: "Define la promesa central", paragraphs: ["Antes de recortar, decide qué debe comunicar sí o sí el título.", "Si desaparece tema, audiencia o beneficio, quedó demasiado vago."] }, { heading: "Quita relleno antes que significado", paragraphs: ["Recorta frases de relleno antes de tocar palabras clave importantes."], bullets: ["Elimina frases largas tipo ‘guía completa de’ si sobran.", "Acorta conectores manteniendo lenguaje natural.", "Conserva una acción o resultado claro.", "Lee la versión final en voz alta."] }, { heading: "Pon el tema principal al inicio", paragraphs: ["La mayoría escanea rápido, así que adelanta el tema.", "Si hay recorte visual, el sentido se conserva mejor."] }, { heading: "Compara dos versiones cortas", paragraphs: ["Crea al menos dos alternativas y compáralas con el contador.", "Elige la más específica, no solo la más corta."] }, { heading: "Haz una revisión anti-ambigüedad", paragraphs: ["Verifica si alguien nuevo entiende el objetivo de la página al instante.", "Si no, recupera una palabra de contexto."] }] },
  fr: { title: "Comment raccourcir des titres sans les rendre vagues", description: "Raccourcissez vos titres avec méthode tout en gardant un message clair et utile.", intro: "Les titres courts fonctionnent souvent mieux en recherche et sur les réseaux, mais couper trop fort peut brouiller le sens. L'objectif est de retirer le superflu, pas l'information clé.", categoryLabel: "Rédaction", useCasesTitle: "Utile pour", useCases: ["Réécrire des titres trop longs", "Améliorer les snippets SEO", "Réduire les allers-retours éditoriaux", "Standardiser les règles de titrage"], closingTitle: "Court mais explicite", closingText: "Le compteur sert de repère final. Gardez le sujet explicite puis supprimez seulement le remplissage.", relatedToolLabel: "Ouvrir Character Counter", sections: [{ heading: "Identifier le message indispensable", paragraphs: ["Avant de raccourcir, définissez ce que le titre doit absolument dire.", "Sujet, cible et bénéfice doivent rester visibles."] }, { heading: "Supprimer le superflu d'abord", paragraphs: ["Retirez les formulations lourdes avant de toucher aux mots importants."], bullets: ["Alléger les expressions type « guide complet » si inutile.", "Raccourcir les liaisons trop longues.", "Garder une action ou un bénéfice clair.", "Relire à voix haute pour valider la fluidité."] }, { heading: "Placer le thème principal tôt", paragraphs: ["Les lecteurs scannent vite, surtout sur mobile.", "Un mot-clé placé tôt protège le sens en cas de coupure."] }, { heading: "Comparer plusieurs versions courtes", paragraphs: ["Préparez au moins deux variantes et comparez-les.", "Choisissez la plus précise, pas seulement la plus courte."] }, { heading: "Faire un test anti-flou", paragraphs: ["Vérifiez qu'un lecteur découvre immédiatement le sujet de la page.", "Sinon, réintroduisez un mot de contexte."] }] },
  de: { title: "Wie du Titel kürzer machst, ohne unklar zu werden", description: "Kürze Titel mit einem klaren Workflow, ohne die Aussage oder Suchintention zu verlieren.", intro: "Kürzere Titel funktionieren oft besser in Suche und Social Feeds. Zu starkes Kürzen macht sie aber schnell unklar. Entscheidend ist: Bedeutung behalten, Fülltext entfernen.", categoryLabel: "Content Writing", useCasesTitle: "Hilfreich bei", useCases: ["Lange Blogtitel überarbeiten", "Snippet-Klarheit verbessern", "Weniger Redaktionsschleifen", "Teamregeln für Headlines erstellen"], closingTitle: "Kurz und klar zugleich", closingText: "Nutze Zeichenzahl als Check, nicht als Ziel. Erst Klarheit sichern, dann kürzen.", relatedToolLabel: "Character Counter öffnen", sections: [{ heading: "Kernbotschaft zuerst festlegen", paragraphs: ["Definiere vor dem Kürzen, was der Titel zwingend sagen muss.", "Wenn Thema, Zielgruppe oder Nutzen fehlt, wird der Titel zu vage."] }, { heading: "Erst Füllwörter streichen", paragraphs: ["Entferne unnötige Phrasen, bevor du wichtige Keywords kürzt."], bullets: ["Phrasen wie „kompletter Leitfaden“ nur bei Bedarf nutzen.", "Lange Verbindungswörter vereinfachen.", "Eine klare Handlung oder Wirkung behalten.", "Finale Version laut lesen."] }, { heading: "Hauptthema nach vorne", paragraphs: ["Leser scannen schnell und sehen zuerst den Anfang.", "So bleibt die Aussage auch bei Kürzung im Feed erhalten."] }, { heading: "Zwei kurze Varianten vergleichen", paragraphs: ["Erstelle mehrere kurze Versionen und prüfe sie im Counter.", "Wähle die präziseste statt der kürzesten Variante."] }, { heading: "Unschärfe-Check zum Schluss", paragraphs: ["Kann eine neue Person das Seitenthema sofort verstehen?", "Wenn nicht, einen klärenden Begriff ergänzen."] }] }
};

const characterCountForSocialCaptionsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "Best Character Count for Social Captions and Short Posts", description: "Use practical length ranges for social captions so posts stay clear, scannable, and easy to finish.", intro: "There is no single perfect caption length across every platform. The practical approach is to write for clarity first, then keep your opening lines compact so users understand the message quickly.", categoryLabel: "Social writing", useCasesTitle: "Useful for", useCases: ["Drafting captions for campaign posts.", "Editing creator or brand copy for better scanning.", "Preparing short announcements across channels.", "Building reusable social copy templates."], closingTitle: "Optimize for readability, not a magic number", closingText: "Short social copy works best when the first line is specific and the rest stays easy to skim. Use a character counter to keep that structure consistent.", relatedToolLabel: "Open Character Counter", sections: [{ heading: "Why caption length still matters", paragraphs: ["Users scroll quickly, so long openings often get skipped.", "A tighter first line improves comprehension before the platform truncates text."] }, { heading: "Use practical ranges instead of strict rules", paragraphs: ["Set flexible ranges for your team and adjust by channel."], bullets: ["Lead line: keep it concise and specific.", "Body: add only supporting detail.", "CTA: one clear action is usually enough.", "If it feels heavy, split into two short sentences."] }, { heading: "Write the first line to stand alone", paragraphs: ["Assume users may only read the first visible portion.", "Put the topic and value early so meaning survives truncation."] }, { heading: "Trim with a fast editing pass", paragraphs: ["After drafting, remove repeated adjectives, redundant hashtags, and weak fillers.", "Then check final length in a character counter before scheduling."] }, { heading: "Keep channel-specific notes", paragraphs: ["Store examples of captions that stayed readable and performed well.", "These patterns speed up future writing while keeping length under control."] }] },
  ko: { title: "소셜 캡션과 짧은 게시물의 적정 문자 수", description: "소셜 캡션을 짧고 명확하게 유지하는 실무 길이 기준을 정리합니다.", intro: "모든 플랫폼에 통하는 단일 정답은 없습니다. 핵심은 첫 문장을 짧고 분명하게 써서 빠르게 의미를 전달하는 것입니다.", categoryLabel: "소셜 작성", useCasesTitle: "활용 상황", useCases: ["캠페인 캡션 작성", "브랜드/크리에이터 문구 편집", "짧은 공지 게시물 작성", "채널별 템플릿 운영"], closingTitle: "숫자보다 가독성 우선", closingText: "첫 줄에 핵심을 담고 나머지는 간결하게 보완하세요. 문자 수 확인은 일관성 유지에 도움을 줍니다.", relatedToolLabel: "Character Counter 열기", sections: [{ heading: "캡션 길이가 중요한 이유", paragraphs: ["사용자는 피드를 빠르게 넘기기 때문에 긴 첫 문장은 읽히기 어렵습니다.", "앞부분이 짧고 명확하면 잘림 상황에서도 의미가 남습니다."] }, { heading: "고정 숫자보다 범위 사용", paragraphs: ["채널별로 유연한 길이 범위를 정해 운영하세요."], bullets: ["첫 줄은 짧고 구체적으로", "본문은 보조 정보만 추가", "CTA는 한 가지 행동으로", "길면 짧은 문장 2개로 분리"] }, { heading: "첫 줄만 읽혀도 이해되게", paragraphs: ["처음 보이는 구간만 읽힐 수 있다고 가정하세요.", "주제와 이점을 앞부분에 배치하면 안전합니다."] }, { heading: "빠른 축약 편집", paragraphs: ["초안 후 반복 형용사, 불필요 해시태그, 군더더기를 제거하세요.", "예약 전 Character Counter로 최종 길이를 확인하세요."] }, { heading: "채널별 성공 패턴 기록", paragraphs: ["읽기 쉽고 반응 좋은 캡션 예시를 저장해 두세요.", "다음 작성 속도와 품질이 함께 올라갑니다."] }] },
  ja: { title: "SNSキャプションと短文投稿の最適な文字数", description: "読みやすく完読されやすいSNSキャプションの実践的な長さ目安を紹介します。", intro: "全プラットフォーム共通の正解はありません。大切なのは、冒頭で要点が伝わる短い構成にすることです。", categoryLabel: "SNSライティング", useCasesTitle: "役立つ場面", useCases: ["キャンペーン投稿の下書き", "ブランド投稿文の調整", "短い告知文の作成", "運用テンプレート整備"], closingTitle: "魔法の数字より読みやすさ", closingText: "冒頭を具体的にし、残りを簡潔に保つだけで可読性は上がります。文字数はその確認に使いましょう。", relatedToolLabel: "Character Counterを開く", sections: [{ heading: "なぜ文字数が重要か", paragraphs: ["ユーザーは高速でスクロールするため、長い冒頭は読まれにくくなります。", "短い導入は省略表示でも要点を残しやすくなります。"] }, { heading: "固定値ではなく目安レンジ", paragraphs: ["媒体ごとに柔軟なレンジを決めて運用します。"], bullets: ["冒頭は短く具体的に", "本文は補足だけに絞る", "CTAは1アクションにする", "重い場合は2文に分ける"] }, { heading: "冒頭1行で意味を成立させる", paragraphs: ["表示される最初の部分だけ読まれる前提で書きます。", "主題と価値を早めに置くと省略時も伝わります。"] }, { heading: "短縮の最終調整", paragraphs: ["下書き後に重複表現や不要ハッシュタグを削除します。", "投稿前にCharacter Counterで最終確認します。"] }, { heading: "媒体別の良例を蓄積", paragraphs: ["読みやすく反応が良い文例を記録して再利用します。", "長さの安定と制作速度の両方に効きます。"] }] },
  es: { title: "Mejor recuento de caracteres para captions y posts cortos", description: "Define longitudes prácticas para captions sociales que se lean rápido y mantengan claridad.", intro: "No existe una longitud perfecta para todas las redes. Lo más útil es priorizar claridad y mantener el inicio compacto para que el mensaje se entienda de inmediato.", categoryLabel: "Redacción social", useCasesTitle: "Útil para", useCases: ["Redactar captions de campaña", "Editar copy de marca o creadores", "Publicar anuncios breves", "Crear plantillas por canal"], closingTitle: "Mejor legibilidad que número exacto", closingText: "Si la primera línea es clara y el resto es escaneable, suele funcionar mejor. El contador ayuda a mantener esa disciplina.", relatedToolLabel: "Abrir Character Counter", sections: [{ heading: "Por qué la longitud sigue importando", paragraphs: ["Las personas hacen scroll rápido y saltan introducciones largas.", "Una apertura corta mejora comprensión antes del recorte visual."] }, { heading: "Usa rangos, no reglas rígidas", paragraphs: ["Trabaja con rangos por canal y ajusta según contexto."], bullets: ["Primera línea breve y concreta", "Cuerpo con detalles mínimos", "CTA único y claro", "Si pesa, divide en dos frases"] }, { heading: "Haz que la primera línea se sostenga sola", paragraphs: ["Asume que solo se verá una parte del texto.", "Ubica tema y beneficio al inicio."] }, { heading: "Recorte rápido antes de publicar", paragraphs: ["Elimina adjetivos repetidos, hashtags redundantes y relleno.", "Luego verifica longitud final en el contador."] }, { heading: "Documenta patrones por canal", paragraphs: ["Guarda ejemplos de captions claros que funcionaron bien.", "Te ayudarán a mantener calidad y velocidad."] }] },
  fr: { title: "Meilleur nombre de caractères pour légendes sociales et posts courts", description: "Appliquez des longueurs pratiques pour des légendes sociales claires et faciles à lire.", intro: "Il n'existe pas une longueur parfaite universelle. L'approche la plus fiable est de garder une première ligne courte et explicite, puis d'ajouter seulement l'essentiel.", categoryLabel: "Rédaction social media", useCasesTitle: "Utile pour", useCases: ["Rédiger des légendes de campagne", "Optimiser le copy de marque", "Publier des annonces courtes", "Créer des templates éditoriaux"], closingTitle: "Privilégier la lisibilité", closingText: "Une structure courte et claire surperforme souvent un texte long. Le compteur sert à garder cette cohérence.", relatedToolLabel: "Ouvrir Character Counter", sections: [{ heading: "Pourquoi la longueur compte", paragraphs: ["Les utilisateurs scrollent vite et ignorent les débuts trop longs.", "Une accroche courte reste compréhensible même en affichage tronqué."] }, { heading: "Travailler par plages de longueur", paragraphs: ["Définissez des plages souples selon vos canaux."], bullets: ["Ligne d'ouverture courte", "Détails limités dans le corps", "Un seul CTA clair", "Scinder en deux phrases si nécessaire"] }, { heading: "Rendre la première ligne autonome", paragraphs: ["Supposez qu'une partie du texte seulement sera vue.", "Placez sujet et bénéfice dès le début."] }, { heading: "Faire une passe de coupe rapide", paragraphs: ["Supprimez les répétitions, hashtags superflus et mots de remplissage.", "Contrôlez ensuite la longueur finale."] }, { heading: "Conserver des exemples efficaces", paragraphs: ["Archivez les légendes lisibles qui ont bien performé.", "Vous gagnerez du temps et de la constance."] }] },
  de: { title: "Beste Zeichenanzahl für Social Captions und kurze Posts", description: "Praktische Längenrichtwerte für Social Captions, damit Beiträge klar und schnell erfassbar bleiben.", intro: "Eine universelle Idealzahl gibt es nicht. In der Praxis zählt, dass die erste Zeile kurz und konkret ist und der Rest leicht scanbar bleibt.", categoryLabel: "Social Writing", useCasesTitle: "Hilfreich für", useCases: ["Campaign-Captions schreiben", "Brand-Copy überarbeiten", "Kurze Ankündigungen posten", "Vorlagen pro Kanal aufbauen"], closingTitle: "Lesbarkeit vor exakter Zahl", closingText: "Wenn die erste Zeile klar ist, funktionieren kurze Posts meist besser. Der Counter hilft bei konsistenter Länge.", relatedToolLabel: "Character Counter öffnen", sections: [{ heading: "Warum Länge relevant bleibt", paragraphs: ["Nutzer scrollen schnell und überspringen lange Einstiege.", "Eine kurze Opening-Zeile vermittelt die Botschaft früher."] }, { heading: "Mit Längenbereichen arbeiten", paragraphs: ["Definiere flexible Bereiche statt starrer Limits."], bullets: ["Erste Zeile kurz und konkret", "Nur nötige Details im Hauptteil", "Ein klarer CTA", "Bei Bedarf in zwei Sätze teilen"] }, { heading: "Erste Zeile muss allein funktionieren", paragraphs: ["Plane so, als ob nur der sichtbare Anfang gelesen wird.", "Thema und Nutzen gehören nach vorne."] }, { heading: "Schneller Kürzungs-Check", paragraphs: ["Streiche Wiederholungen, überflüssige Hashtags und Füllwörter.", "Prüfe danach die finale Länge im Counter."] }, { heading: "Muster pro Kanal dokumentieren", paragraphs: ["Speichere gut lesbare Captions mit guter Performance.", "Das verbessert Tempo und Qualität im Team."] }] }
};

const shortenBlogTitleKeepMainKeywordContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Shorten a Blog Title While Keeping the Main Keyword", description: "Trim long blog titles without dropping your primary keyword or losing topic clarity.", intro: "Many titles become long during drafting because they try to include every detail. You can shorten them effectively by protecting one main keyword, then removing secondary clutter.", categoryLabel: "SEO writing", useCasesTitle: "Useful for", useCases: ["Updating old posts with long headlines.", "Improving keyword visibility in truncated snippets.", "Aligning editorial and SEO goals.", "Preparing cleaner titles for multilingual publishing."], closingTitle: "Protect the keyword, simplify the rest", closingText: "Your main keyword should stay natural and visible. Once that is secure, shorten surrounding text until the title reads clearly in one pass.", relatedToolLabel: "Open Character Counter", sections: [{ heading: "Choose one primary keyword", paragraphs: ["Define the exact main keyword before editing the title.", "If you keep changing keywords during trimming, quality drops and wording becomes awkward."] }, { heading: "Separate must-have vs optional words", paragraphs: ["Mark words that are essential for meaning and search intent."], bullets: ["Keep the primary keyword intact.", "Keep one clear benefit or outcome.", "Remove duplicate modifiers.", "Move optional details to subheadings or body copy."] }, { heading: "Use a front-loaded title structure", paragraphs: ["Place the main keyword early so users and crawlers see it immediately.", "This also reduces risk when titles are visually truncated."] }, { heading: "Rewrite in two passes", paragraphs: ["Pass 1: cut obvious filler phrases.", "Pass 2: smooth grammar so the keyword fits naturally without sounding forced."] }, { heading: "Validate with a quick counter check", paragraphs: ["Compare the original and revised title side by side in a character counter.", "Pick the shortest option that still sounds natural and specific."] }] },
  ko: { title: "메인 키워드를 유지하면서 블로그 제목 줄이는 방법", description: "핵심 키워드는 살리고 긴 제목만 간결하게 줄이는 실전 방법입니다.", intro: "초안 단계에서는 정보를 많이 넣다 보니 제목이 길어지기 쉽습니다. 메인 키워드를 먼저 고정하면 주변 문구를 안전하게 줄일 수 있습니다.", categoryLabel: "SEO 작성", useCasesTitle: "도움이 되는 상황", useCases: ["긴 기존 제목 개선", "잘림 노출에서 키워드 가시성 확보", "편집/SEO 기준 정렬", "다국어 게시용 제목 정리"], closingTitle: "키워드는 지키고 문장은 단순하게", closingText: "메인 키워드는 자연스럽게 유지하고, 나머지 표현만 정리하세요. 한 번에 이해되는 제목이 가장 좋습니다.", relatedToolLabel: "Character Counter 열기", sections: [{ heading: "우선 메인 키워드 확정", paragraphs: ["제목을 줄이기 전에 주 키워드를 하나로 정하세요.", "편집 중 키워드를 계속 바꾸면 문장이 어색해지기 쉽습니다."] }, { heading: "필수 단어와 선택 단어 분리", paragraphs: ["의미와 검색 의도에 꼭 필요한 단어를 먼저 표시하세요."], bullets: ["메인 키워드는 그대로 유지", "핵심 이점 1개 유지", "중복 수식어 제거", "부가 정보는 본문/소제목으로 이동"] }, { heading: "키워드를 앞쪽에 배치", paragraphs: ["핵심 키워드를 앞에 두면 빠른 스캔에 유리합니다.", "제목이 잘려도 의미 손실을 줄일 수 있습니다."] }, { heading: "2단계 리라이트", paragraphs: ["1차: 군더더기 표현 삭제", "2차: 키워드가 자연스럽게 읽히도록 문장 다듬기"] }, { heading: "문자 수로 전후 비교", paragraphs: ["원문과 수정안을 Character Counter에서 나란히 비교하세요.", "가장 짧은 안보다 자연스럽고 명확한 안을 선택하세요."] }] },
  ja: { title: "メインキーワードを残してブログタイトルを短くする方法", description: "主キーワードを維持しながら、長いタイトルを自然に短縮する手順です。", intro: "下書きでは情報を詰め込みすぎてタイトルが長くなりがちです。主キーワードを固定し、周辺語を整理すると短くしても伝わります。", categoryLabel: "SEOライティング", useCasesTitle: "役立つ場面", useCases: ["長い既存タイトルの改善", "省略表示でのキーワード可視性向上", "編集方針とSEO方針の両立", "多言語公開向けの整理"], closingTitle: "キーワードを守り、周辺を整理", closingText: "主キーワードを自然に残しつつ、不要語を削れば読みやすさが上がります。", relatedToolLabel: "Character Counterを開く", sections: [{ heading: "主キーワードを1つ決める", paragraphs: ["短縮前に主キーワードを明確に固定します。", "途中で軸を変えると不自然なタイトルになります。"] }, { heading: "必須語と補足語を分ける", paragraphs: ["検索意図に必要な語だけを残す方針にします。"], bullets: ["主キーワードは維持", "価値を示す語を1つ残す", "重複修飾を削る", "補足情報は見出しや本文へ移す"] }, { heading: "キーワードは前半に", paragraphs: ["前半に置くと検索結果でも把握されやすくなります。", "省略表示でも意味を保ちやすくなります。"] }, { heading: "2段階で書き直す", paragraphs: ["第1段階: 不要語を削除", "第2段階: 文法を整えて自然な読み心地にする"] }, { heading: "カウンターで最終比較", paragraphs: ["元タイトルと短縮版を並べて文字数を確認します。", "最短より、自然で具体的な案を採用しましょう。"] }] },
  es: { title: "Cómo acortar un título de blog manteniendo la palabra clave principal", description: "Reduce títulos largos sin perder la keyword principal ni la claridad del tema.", intro: "Muchos títulos se alargan al intentar incluir todos los detalles. La forma práctica es proteger una keyword principal y recortar lo secundario.", categoryLabel: "Redacción SEO", useCasesTitle: "Útil para", useCases: ["Actualizar titulares antiguos", "Mejorar visibilidad de keyword en snippets", "Alinear SEO y edición", "Preparar títulos para publicación multilingüe"], closingTitle: "Protege la keyword y simplifica", closingText: "Mantén la keyword principal visible y natural. Luego recorta lo demás hasta lograr una lectura clara en una sola pasada.", relatedToolLabel: "Abrir Character Counter", sections: [{ heading: "Define una keyword principal", paragraphs: ["Fija la keyword principal antes de editar.", "Cambiarla durante el recorte suele generar títulos forzados."] }, { heading: "Separa palabras obligatorias y opcionales", paragraphs: ["Marca qué términos sostienen intención y contexto."], bullets: ["Conservar la keyword principal", "Mantener un beneficio claro", "Eliminar modificadores repetidos", "Mover detalles opcionales al contenido"] }, { heading: "Estructura con keyword al inicio", paragraphs: ["Colocar la keyword pronto mejora escaneo y relevancia.", "También reduce riesgo en títulos truncados."] }, { heading: "Haz recorte en dos pasadas", paragraphs: ["Primera pasada: elimina relleno evidente.", "Segunda pasada: ajusta gramática para mantener naturalidad."] }, { heading: "Compara con contador", paragraphs: ["Revisa versión original y recortada lado a lado.", "Elige la más corta que siga siendo específica y natural."] }] },
  fr: { title: "Comment raccourcir un titre de blog en gardant le mot-clé principal", description: "Réduisez la longueur d'un titre sans perdre votre mot-clé principal ni la clarté du sujet.", intro: "Les titres deviennent souvent trop longs quand on veut tout dire. La méthode la plus sûre consiste à garder un mot-clé principal fixe puis à supprimer le reste du bruit.", categoryLabel: "Rédaction SEO", useCasesTitle: "Utile pour", useCases: ["Mettre à jour d'anciens titres longs", "Améliorer la visibilité en snippet", "Aligner objectifs éditoriaux et SEO", "Préparer des versions multilingues"], closingTitle: "Préserver le mot-clé, alléger le reste", closingText: "Gardez le mot-clé principal naturel et visible, puis simplifiez autour jusqu'à une lecture fluide.", relatedToolLabel: "Ouvrir Character Counter", sections: [{ heading: "Choisir un mot-clé principal", paragraphs: ["Fixez votre mot-clé avant de raccourcir.", "Le changer en cours d'édition crée souvent des formulations artificielles."] }, { heading: "Distinguer l'essentiel du secondaire", paragraphs: ["Repérez les mots indispensables à l'intention de recherche."], bullets: ["Conserver le mot-clé principal", "Garder un bénéfice explicite", "Supprimer les doublons descriptifs", "Déplacer les détails optionnels dans le contenu"] }, { heading: "Placer le mot-clé en début de titre", paragraphs: ["Un mot-clé placé tôt est mieux perçu au scan.", "Il reste visible même si le titre est tronqué."] }, { heading: "Réécrire en deux passes", paragraphs: ["Passe 1 : retirer les formulations inutiles.", "Passe 2 : lisser la phrase pour un rendu naturel."] }, { heading: "Valider avec le compteur", paragraphs: ["Comparez original et version courte côte à côte.", "Gardez la version la plus courte qui reste claire et spécifique."] }] },
  de: { title: "Wie du einen Blogtitel kürzt und das Haupt-Keyword behältst", description: "Lange Blogtitel kürzen, ohne das Haupt-Keyword oder die Klarheit zu verlieren.", intro: "Beim Schreiben werden Titel oft zu lang, weil zu viele Details hinein sollen. Mit einem festen Haupt-Keyword kannst du den Rest gezielt kürzen.", categoryLabel: "SEO Writing", useCasesTitle: "Hilfreich für", useCases: ["Alte lange Titel überarbeiten", "Keyword-Sichtbarkeit in Snippets verbessern", "SEO und Redaktion abstimmen", "Mehrsprachige Veröffentlichung vorbereiten"], closingTitle: "Keyword schützen, Rest vereinfachen", closingText: "Das Haupt-Keyword sollte sichtbar und natürlich bleiben. Danach kürzt du nur noch, was keine zusätzliche Klarheit bringt.", relatedToolLabel: "Character Counter öffnen", sections: [{ heading: "Ein Haupt-Keyword festlegen", paragraphs: ["Definiere vor dem Kürzen ein klares Haupt-Keyword.", "Wenn es während der Bearbeitung wechselt, wird der Titel schnell holprig."] }, { heading: "Pflichtwörter vs. optionale Wörter", paragraphs: ["Markiere Begriffe, die für Suchintention und Verständnis nötig sind."], bullets: ["Haupt-Keyword unverändert lassen", "Einen klaren Nutzen behalten", "Doppelte Zusätze streichen", "Optionale Details in Untertitel oder Text verschieben"] }, { heading: "Keyword früh platzieren", paragraphs: ["Frühe Platzierung verbessert Scanbarkeit und Relevanz.", "Bei Kürzung im Feed bleibt die Kernaussage besser erhalten."] }, { heading: "In zwei Durchläufen kürzen", paragraphs: ["Durchlauf 1: offensichtliche Füllphrasen entfernen.", "Durchlauf 2: Satzfluss glätten, damit das Keyword natürlich wirkt."] }, { heading: "Mit Counter gegenprüfen", paragraphs: ["Original und Kurzversion nebeneinander vergleichen.", "Wähle die kürzeste Variante, die klar und natürlich klingt."] }] }
};



const nameUtmCampaignsConsistentlyContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Name UTM Campaigns Consistently",
    description: "Use a simple naming system so campaign reports stay clean across channels and teammates.",
    intro: "If one campaign appears under five slightly different names, reporting gets messy fast. A lightweight naming standard keeps your dashboards readable and saves cleanup time.",
    categoryLabel: "Marketing tracking",
    useCasesTitle: "When this helps most",
    useCases: ["Running campaigns across email, paid social, and partnerships.", "Sharing UTM work between marketing and sales.", "Reviewing monthly performance without manual regrouping."],
    closingTitle: "Consistency beats complexity",
    closingText: "Use a naming format your team can remember. Small discipline now prevents reporting confusion later.",
    relatedToolLabel: "Open the UTM Builder",
    sections: [
      { heading: "Start with one naming template", paragraphs: ["Pick one pattern and keep it stable, such as channel_promo_region_date.", "Avoid changing separators and word order between campaigns."] },
      { heading: "Use lowercase and simple separators", paragraphs: ["Lowercase reduces accidental duplicates like SpringSale vs springsale.", "Use hyphens or underscores consistently so filtered reports stay reliable."], bullets: ["Use lowercase only.", "Avoid spaces.", "Use one separator style."] },
      { heading: "Keep campaign names specific", paragraphs: ["Campaign names should explain intent, not just season names.", "For example, spring_sale_newsletter is clearer than spring2026."] },
      { heading: "Document examples in one shared place", paragraphs: ["Create a short reference with approved source, medium, and campaign examples.", "When new teammates join, they can copy the same structure immediately."] },
      { heading: "Review names before launch", paragraphs: ["Do a quick pre-launch check for typos or alternate spellings.", "Fixing one link before publishing is easier than cleaning analytics data later."] }
    ]
  },
  ko: {
    title: "UTM 캠페인 이름을 일관되게 정하는 방법",
    description: "간단한 네이밍 규칙으로 팀 전체 리포트를 깔끔하게 유지하세요.",
    intro: "같은 캠페인이 비슷한 이름으로 여러 개 잡히면 리포트 해석이 어려워집니다. 가벼운 네이밍 기준만 있어도 정리 시간을 크게 줄일 수 있습니다.",
    categoryLabel: "마케팅 추적",
    useCasesTitle: "특히 도움이 되는 상황",
    useCases: ["이메일, 소셜 광고 등 여러 채널을 함께 운영할 때", "마케팅/세일즈가 링크를 함께 만들 때", "월간 성과를 빠르게 정리해야 할 때"],
    closingTitle: "복잡함보다 일관성이 중요합니다",
    closingText: "팀이 기억하기 쉬운 형식을 정해 반복해서 쓰세요. 작은 습관이 리포팅 혼선을 막아줍니다.",
    relatedToolLabel: "UTM Builder 열기",
    sections: [
      { heading: "하나의 네이밍 템플릿부터 정하기", paragraphs: ["예: channel_promo_region_date처럼 한 가지 패턴을 고정하세요.", "캠페인마다 구분자나 단어 순서를 바꾸지 않는 것이 핵심입니다."] },
      { heading: "소문자와 단순 구분자 사용", paragraphs: ["SpringSale과 springsale 같은 중복을 줄이려면 소문자로 통일하세요.", "하이픈/언더스코어를 한 가지로 통일하면 필터링이 안정적입니다."], bullets: ["소문자만 사용", "공백 사용 금지", "구분자 한 가지로 통일"] },
      { heading: "캠페인 이름은 목적 중심으로", paragraphs: ["계절명만 쓰기보다 어떤 활동인지 드러나게 작성하세요.", "예: spring2026보다 spring_sale_newsletter가 더 명확합니다."] },
      { heading: "공유 문서에 예시 정리", paragraphs: ["source, medium, campaign의 승인 예시를 짧게 문서화하세요.", "신규 팀원도 같은 구조를 바로 복사해 쓸 수 있습니다."] },
      { heading: "배포 전 이름 최종 점검", paragraphs: ["오탈자나 다른 철자가 없는지 1분만 확인하세요.", "배포 전 수정이 분석 데이터 사후 정리보다 훨씬 쉽습니다."] }
    ]
  },
  ja: {
    title: "UTMキャンペーン名を一貫して付ける方法",
    description: "シンプルな命名ルールで、チームのレポートを見やすく保ちます。",
    intro: "同じ施策が少しずつ違う名前で記録されると、分析はすぐに読みにくくなります。軽い命名ルールだけでも集計の手戻りを減らせます。",
    categoryLabel: "マーケティング計測",
    useCasesTitle: "役立つ場面",
    useCases: ["メール・SNS広告など複数チャネルを運用するとき", "複数メンバーでUTMリンクを作るとき", "月次レポートを素早くまとめたいとき"],
    closingTitle: "複雑さより統一",
    closingText: "覚えやすい形式を決めて繰り返し使いましょう。小さな統一が後の分析ミスを防ぎます。",
    relatedToolLabel: "UTM Builderを開く",
    sections: [
      { heading: "まず命名テンプレートを1つ決める", paragraphs: ["例: channel_promo_region_date のように固定パターンを作ります。", "施策ごとに単語順や区切りを変えないことが重要です。"] },
      { heading: "小文字と単純な区切りに統一", paragraphs: ["SpringSale と springsale のような重複を防ぐため小文字に統一します。", "ハイフンかアンダースコアのどちらか1つに揃えましょう。"], bullets: ["小文字のみ", "スペースを使わない", "区切り記号を統一"] },
      { heading: "キャンペーン名は目的が伝わるように", paragraphs: ["季節名だけより、施策内容がわかる名前にします。", "例: spring2026 より spring_sale_newsletter の方が明確です。"] },
      { heading: "共通ドキュメントに例を残す", paragraphs: ["source / medium / campaign の推奨例を短くまとめます。", "新メンバーも同じ形式で作業を始めやすくなります。"] },
      { heading: "公開前に命名を最終確認", paragraphs: ["スペル違いや表記ゆれを公開前にチェックします。", "事前修正は公開後のデータ修正よりはるかに簡単です。"] }
    ]
  },
  es: {
    title: "Cómo nombrar campañas UTM de forma consistente",
    description: "Aplica reglas simples de nombres para mantener reportes limpios en todo el equipo.",
    intro: "Si una misma campaña aparece con varios nombres parecidos, el reporte se vuelve confuso. Un estándar ligero evita limpieza manual después.",
    categoryLabel: "Medición de marketing",
    useCasesTitle: "Cuándo más ayuda",
    useCases: ["Campañas en email, social y otros canales.", "Trabajo compartido entre marketing y ventas.", "Revisión mensual sin reagrupar datos a mano."],
    closingTitle: "La consistencia gana",
    closingText: "Usa un formato fácil de recordar para todos. Un poco de orden ahora evita ruido en analytics después.",
    relatedToolLabel: "Abrir UTM Builder",
    sections: [
      { heading: "Define una plantilla única", paragraphs: ["Elige un patrón fijo, por ejemplo canal_promocion_region_fecha.", "No cambies el orden ni los separadores entre campañas."] },
      { heading: "Usa minúsculas y separadores simples", paragraphs: ["Las minúsculas reducen duplicados como SpringSale vs springsale.", "Mantén un solo estilo de separador para filtrar mejor."], bullets: ["Solo minúsculas.", "Sin espacios.", "Un solo estilo de separador."] },
      { heading: "Nombres de campaña específicos", paragraphs: ["El nombre debe explicar la acción, no solo la temporada.", "Por ejemplo, spring_sale_newsletter es más claro que spring2026."] },
      { heading: "Documenta ejemplos compartidos", paragraphs: ["Guarda ejemplos aprobados de source, medium y campaign en un solo lugar.", "Así, cualquier miembro nuevo puede replicar el mismo formato."] },
      { heading: "Revisa antes de publicar", paragraphs: ["Haz una revisión rápida para detectar errores de escritura.", "Corregir antes del lanzamiento es mucho más fácil que limpiar datos luego."] }
    ]
  },
  fr: {
    title: "Nommer vos campagnes UTM de façon cohérente",
    description: "Mettez en place des règles simples pour garder des rapports propres en équipe.",
    intro: "Quand une même campagne apparaît sous plusieurs noms proches, la lecture des données devient difficile. Une convention légère évite ce nettoyage plus tard.",
    categoryLabel: "Mesure marketing",
    useCasesTitle: "Quand c'est le plus utile",
    useCases: ["Campagnes sur e-mail, social et autres canaux.", "Création de liens partagée entre plusieurs équipes.", "Analyse mensuelle sans retraitement manuel."],
    closingTitle: "La cohérence avant la complexité",
    closingText: "Choisissez un format facile à retenir et utilisez-le partout. Cette discipline réduit les erreurs d'analyse.",
    relatedToolLabel: "Ouvrir UTM Builder",
    sections: [
      { heading: "Définir un modèle unique", paragraphs: ["Choisissez un format stable, par exemple canal_promo_region_date.", "Évitez de changer l'ordre des mots et les séparateurs selon la campagne."] },
      { heading: "Utiliser les minuscules et un séparateur simple", paragraphs: ["Les minuscules évitent les doublons du type SpringSale vs springsale.", "Conservez un seul style de séparateur pour des filtres fiables."], bullets: ["Minuscules uniquement.", "Pas d'espaces.", "Un seul séparateur."] },
      { heading: "Rendre le nom de campagne explicite", paragraphs: ["Le nom doit indiquer l'action, pas seulement la saison.", "Exemple: spring_sale_newsletter est plus clair que spring2026."] },
      { heading: "Centraliser des exemples validés", paragraphs: ["Listez des exemples source, medium et campaign dans un document partagé.", "Les nouveaux membres peuvent ainsi appliquer la même logique immédiatement."] },
      { heading: "Contrôler avant publication", paragraphs: ["Faites une vérification rapide des fautes et variantes.", "Corriger avant diffusion est plus simple que nettoyer les rapports ensuite."] }
    ]
  },
  de: {
    title: "UTM-Kampagnen konsistent benennen",
    description: "Mit einfachen Namensregeln bleiben Reports auch in kleinen Teams sauber.",
    intro: "Wenn eine Kampagne mit mehreren ähnlichen Namen auftaucht, wird Reporting schnell unübersichtlich. Ein kleiner Standard spart später viel Aufräumarbeit.",
    categoryLabel: "Marketing-Tracking",
    useCasesTitle: "Wann es besonders hilft",
    useCases: ["Kampagnen über E-Mail, Social und weitere Kanäle.", "Gemeinsame UTM-Arbeit zwischen Teams.", "Monatliche Auswertung ohne manuelles Zusammenführen."],
    closingTitle: "Konsistenz schlägt Komplexität",
    closingText: "Nutze ein Schema, das sich alle merken können. So bleibt Analytics langfristig klar.",
    relatedToolLabel: "UTM Builder öffnen",
    sections: [
      { heading: "Ein einheitliches Muster festlegen", paragraphs: ["Definiere ein festes Format wie kanal_promo_region_datum.", "Ändere Wortreihenfolge und Trennzeichen nicht je Kampagne."] },
      { heading: "Kleinbuchstaben und einfache Trennzeichen", paragraphs: ["Kleinbuchstaben vermeiden Duplikate wie SpringSale vs springsale.", "Nutze durchgehend dieselbe Trennlogik für verlässliche Filter."], bullets: ["Nur Kleinbuchstaben.", "Keine Leerzeichen.", "Ein Trennzeichen-Stil."] },
      { heading: "Kampagnennamen konkret halten", paragraphs: ["Der Name sollte die Aktion zeigen, nicht nur eine Saison.", "spring_sale_newsletter ist klarer als spring2026."] },
      { heading: "Beispiele zentral dokumentieren", paragraphs: ["Halte freigegebene source-, medium- und campaign-Beispiele in einem Dokument fest.", "Neue Teammitglieder können das Muster sofort übernehmen."] },
      { heading: "Vor dem Start kurz prüfen", paragraphs: ["Kontrolliere Schreibweisen und Tippfehler vor der Veröffentlichung.", "Ein früher Fix ist einfacher als spätere Datenbereinigung."] }
    ]
  }
};

const utmSourceVsMediumVsCampaignContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "UTM Source vs Medium vs Campaign", description: "Understand the role of source, medium, and campaign so your tagged links are easier to analyze.", intro: "Many UTM errors come from mixing source, medium, and campaign. Once each field has one job, reports become much easier to read.", categoryLabel: "Marketing tracking", useCasesTitle: "Useful when", useCases: ["Setting up new tracking conventions.", "Cleaning messy channel reports.", "Training teammates on UTM basics."], closingTitle: "One field, one purpose", closingText: "Treat each parameter as a separate label and avoid overlap. Clean structure gives cleaner reporting.", relatedToolLabel: "Open the UTM Builder", sections: [{ heading: "What utm_source should represent", paragraphs: ["Source identifies where traffic comes from, such as newsletter, linkedin, or google.", "Keep source focused on origin only."], bullets: ["Good: newsletter, instagram, partner-site", "Avoid: paid-social, launch-campaign"] }, { heading: "What utm_medium should represent", paragraphs: ["Medium describes the channel type, like email, cpc, social, or referral.", "Use a controlled list so reports group correctly."] }, { heading: "What utm_campaign should represent", paragraphs: ["Campaign names the specific initiative you are measuring, like spring_launch or black_friday_sale.", "This should describe the effort, not the platform."] }, { heading: "Quick mapping examples", paragraphs: ["A LinkedIn ad might be source=linkedin, medium=paid-social, campaign=q2_demo_offer.", "An email newsletter could be source=newsletter, medium=email, campaign=april_product_update."] }] },
  ko: { title: "UTM source, medium, campaign 차이 이해하기", description: "세 파라미터의 역할을 분리해 태깅 리포트를 더 읽기 쉽게 만드세요.", intro: "UTM 혼선의 대부분은 source, medium, campaign을 섞어 쓰는 데서 시작됩니다. 각 항목의 역할을 고정하면 분석이 쉬워집니다.", categoryLabel: "마케팅 추적", useCasesTitle: "유용한 상황", useCases: ["새 추적 규칙을 정할 때", "채널 리포트가 지저분할 때", "팀 온보딩 교육 자료가 필요할 때"], closingTitle: "항목마다 역할 하나", closingText: "각 파라미터를 다른 라벨로 유지하면 보고서 구조가 훨씬 깔끔해집니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "utm_source는 유입 출처", paragraphs: ["source는 트래픽이 시작된 위치를 뜻합니다. 예: newsletter, linkedin, google.", "출처 정보만 넣고 채널 유형은 섞지 마세요."], bullets: ["좋은 예: newsletter, instagram, partner-site", "피할 예: paid-social, launch-campaign"] }, { heading: "utm_medium은 채널 유형", paragraphs: ["medium은 email, cpc, social, referral 같은 전달 방식을 나타냅니다.", "고정된 목록을 쓰면 리포트 그룹핑이 안정적입니다."] }, { heading: "utm_campaign은 캠페인 이름", paragraphs: ["campaign에는 spring_launch처럼 측정하려는 활동 이름을 넣습니다.", "플랫폼명이 아니라 캠페인 목적이 보여야 합니다."] }, { heading: "빠른 매핑 예시", paragraphs: ["LinkedIn 광고: source=linkedin, medium=paid-social, campaign=q2_demo_offer", "이메일 뉴스레터: source=newsletter, medium=email, campaign=april_product_update"] }] },
  ja: { title: "UTMのsource・medium・campaignの違い", description: "3つの役割を分けて、タグ付きリンクの分析を読みやすくします。", intro: "UTMの混乱は source / medium / campaign の使い分け不足で起こりがちです。役割を固定するとレポートは一気に整理されます。", categoryLabel: "マーケティング計測", useCasesTitle: "役立つ場面", useCases: ["新しい計測ルールを作るとき", "チャネル別レポートが混在しているとき", "チーム向けにUTM基礎を共有したいとき"], closingTitle: "1項目1役割", closingText: "各パラメータを別ラベルとして扱えば、レポートの解釈がぐっと簡単になります。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "utm_sourceの役割", paragraphs: ["source は流入元を示します。例: newsletter / linkedin / google。", "ここには起点情報だけを入れます。"], bullets: ["良い例: newsletter, instagram, partner-site", "避けたい例: paid-social, launch-campaign"] }, { heading: "utm_mediumの役割", paragraphs: ["medium は email / cpc / social / referral などのチャネル種別です。", "固定リストで運用すると集計が安定します。"] }, { heading: "utm_campaignの役割", paragraphs: ["campaign は計測したい施策名です。例: spring_launch。", "媒体名ではなく施策名を表すようにします。"] }, { heading: "すぐ使える例", paragraphs: ["LinkedIn広告: source=linkedin, medium=paid-social, campaign=q2_demo_offer", "メール配信: source=newsletter, medium=email, campaign=april_product_update"] }] },
  es: { title: "Diferencia entre UTM source, medium y campaign", description: "Aclara el rol de source, medium y campaign para analizar mejor tus enlaces etiquetados.", intro: "Muchos errores UTM vienen de mezclar source, medium y campaign. Si cada campo tiene una función clara, los reportes mejoran.", categoryLabel: "Medición de marketing", useCasesTitle: "Útil cuando", useCases: ["Definir nuevas reglas de etiquetado.", "Limpiar reportes por canal.", "Formar al equipo en UTM."], closingTitle: "Un campo, un propósito", closingText: "Mantén cada parámetro separado y evita solapamientos. Tendrás reportes más limpios.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Qué representa utm_source", paragraphs: ["Source indica de dónde viene el tráfico: newsletter, linkedin o google.", "Úsalo solo para origen."], bullets: ["Bien: newsletter, instagram, partner-site", "Evita: paid-social, launch-campaign"] }, { heading: "Qué representa utm_medium", paragraphs: ["Medium describe el tipo de canal: email, cpc, social o referral.", "Usa una lista controlada para agrupar datos correctamente."] }, { heading: "Qué representa utm_campaign", paragraphs: ["Campaign nombra la iniciativa concreta, como spring_launch.", "Debe describir la campaña, no la plataforma."] }, { heading: "Ejemplos rápidos", paragraphs: ["Anuncio en LinkedIn: source=linkedin, medium=paid-social, campaign=q2_demo_offer.", "Newsletter: source=newsletter, medium=email, campaign=april_product_update."] }] },
  fr: { title: "UTM source vs medium vs campaign", description: "Comprenez le rôle de chaque paramètre pour analyser vos liens UTM plus facilement.", intro: "Beaucoup d'erreurs UTM viennent d'un mélange entre source, medium et campaign. Une règle claire par champ simplifie les rapports.", categoryLabel: "Mesure marketing", useCasesTitle: "Utile pour", useCases: ["Définir une convention UTM.", "Nettoyer des rapports par canal.", "Former l'équipe aux bases."], closingTitle: "Un champ, une fonction", closingText: "Gardez des rôles séparés pour chaque paramètre afin d'obtenir des données lisibles.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Rôle de utm_source", paragraphs: ["Source indique l'origine du trafic: newsletter, linkedin, google.", "N'utilisez ce champ que pour l'origine."], bullets: ["Bon: newsletter, instagram, partner-site", "À éviter: paid-social, launch-campaign"] }, { heading: "Rôle de utm_medium", paragraphs: ["Medium décrit le type de canal: email, cpc, social, referral.", "Une liste maîtrisée améliore le regroupement des rapports."] }, { heading: "Rôle de utm_campaign", paragraphs: ["Campaign nomme l'initiative suivie, par exemple spring_launch.", "Ce champ doit décrire l'action marketing." ] }, { heading: "Exemples rapides", paragraphs: ["Annonce LinkedIn: source=linkedin, medium=paid-social, campaign=q2_demo_offer.", "Newsletter e-mail: source=newsletter, medium=email, campaign=april_product_update."] }] },
  de: { title: "UTM Source vs Medium vs Campaign", description: "Verstehe die Aufgaben von source, medium und campaign für sauberere Auswertungen.", intro: "Viele UTM-Fehler entstehen, wenn source, medium und campaign vermischt werden. Mit klarer Trennung werden Reports deutlich verständlicher.", categoryLabel: "Marketing-Tracking", useCasesTitle: "Besonders nützlich bei", useCases: ["Aufbau neuer Tracking-Regeln.", "Bereinigung chaotischer Kanalreports.", "Einführung neuer Teammitglieder."], closingTitle: "Ein Feld, ein Zweck", closingText: "Gib jedem Parameter eine klare Rolle. So bleibt Reporting strukturiert und vergleichbar.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "Bedeutung von utm_source", paragraphs: ["Source zeigt die Herkunft des Traffics, z. B. newsletter, linkedin oder google.", "Nutze dieses Feld nur für den Ursprung."], bullets: ["Gut: newsletter, instagram, partner-site", "Vermeiden: paid-social, launch-campaign"] }, { heading: "Bedeutung von utm_medium", paragraphs: ["Medium beschreibt den Kanaltyp wie email, cpc, social oder referral.", "Eine feste Liste sorgt für saubere Gruppierung."] }, { heading: "Bedeutung von utm_campaign", paragraphs: ["Campaign benennt die konkrete Maßnahme, z. B. spring_launch.", "Hier sollte die Initiative stehen, nicht die Plattform."] }, { heading: "Schnelle Zuordnungsbeispiele", paragraphs: ["LinkedIn-Anzeige: source=linkedin, medium=paid-social, campaign=q2_demo_offer.", "E-Mail-Newsletter: source=newsletter, medium=email, campaign=april_product_update."] }] }
};

const useUtmLinksWithoutBreakingReportingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Use UTM Links Without Breaking Clean Reporting", description: "Practical rules for creating UTM links that stay consistent and easy to analyze.", intro: "UTM links are only useful when naming stays consistent. This guide shows a simple workflow to avoid messy reports while moving fast.", categoryLabel: "Marketing tracking", useCasesTitle: "When to use this workflow", useCases: ["Launching new campaigns quickly.", "Working with multiple teammates.", "Keeping monthly dashboards clean."], closingTitle: "Build once, measure clearly", closingText: "A few naming checks before sharing links can prevent hours of reporting cleanup later.", relatedToolLabel: "Open the UTM Builder", sections: [{ heading: "Define a minimal naming standard first", paragraphs: ["Agree on basic rules for source, medium, and campaign before building links.", "Even a one-page convention prevents most reporting issues."] }, { heading: "Use one format across every channel", paragraphs: ["Keep case, separators, and wording style consistent in email, social, and ads.", "Inconsistent formatting creates duplicate rows in analytics."], bullets: ["Prefer lowercase.", "Use one separator style.", "Avoid shorthand only one person understands."] }, { heading: "Tag only external traffic links", paragraphs: ["Use UTM links for traffic coming from outside your site.", "Avoid adding UTM parameters to internal navigation links because it can overwrite session attribution."] }, { heading: "Check links before publishing", paragraphs: ["Open the final URL once and confirm every parameter value.", "Catch typos now so your report categories stay clean later."] }, { heading: "Keep a shared campaign log", paragraphs: ["Save final link values in a simple team sheet.", "This makes reuse easier and avoids accidental new variants."] }] },
  ko: { title: "리포트를 망치지 않고 UTM 링크 사용하는 방법", description: "보고서가 깔끔하게 유지되도록 UTM 링크를 만드는 실무 규칙을 정리했습니다.", intro: "UTM 링크는 이름이 일관될 때만 분석 가치가 높아집니다. 이 가이드는 빠르게 작업하면서도 리포트 혼선을 줄이는 방법을 보여줍니다.", categoryLabel: "마케팅 추적", useCasesTitle: "이 워크플로가 필요한 상황", useCases: ["캠페인을 빠르게 시작할 때", "여러 팀원이 함께 링크를 만들 때", "월간 대시보드를 깔끔하게 유지하고 싶을 때"], closingTitle: "한 번 정확히 만들고 명확하게 측정하세요", closingText: "공유 전 몇 가지 점검만 해도 이후 데이터 정리 시간을 크게 줄일 수 있습니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "먼저 최소 네이밍 규칙 합의", paragraphs: ["링크를 만들기 전에 source, medium, campaign 기준을 먼저 맞추세요.", "한 페이지짜리 규칙만 있어도 대부분의 혼선을 막을 수 있습니다."] }, { heading: "채널마다 같은 형식 유지", paragraphs: ["이메일, 소셜, 광고 모두에서 대소문자와 구분자를 통일하세요.", "형식이 다르면 분석 도구에서 행이 분리됩니다."], bullets: ["소문자 우선", "구분자 한 가지 유지", "개인 약어 남용 금지"] }, { heading: "외부 유입 링크만 태깅", paragraphs: ["UTM은 외부 유입을 측정할 때 사용하세요.", "내부 링크에 UTM을 붙이면 세션 기여도가 덮어써질 수 있습니다."] }, { heading: "배포 전 링크 검수", paragraphs: ["최종 URL을 한 번 열어 파라미터 값을 확인하세요.", "오탈자를 미리 잡으면 리포트 분류가 깔끔해집니다."] }, { heading: "공유 캠페인 로그 유지", paragraphs: ["최종 링크 값을 팀 문서에 기록해 두세요.", "재사용이 쉬워지고 불필요한 변형을 줄일 수 있습니다."] }] },
  ja: { title: "きれいなレポートを崩さずにUTMリンクを使う方法", description: "分析を乱さないUTMリンク作成の実践ルールを短くまとめます。", intro: "UTMリンクは命名が揃っていてこそ効果を発揮します。ここでは、スピードを落とさずにレポート品質を保つ手順を紹介します。", categoryLabel: "マーケティング計測", useCasesTitle: "この流れが有効な場面", useCases: ["施策を素早く開始したいとき", "複数メンバーでリンクを作るとき", "月次ダッシュボードを整理したいとき"], closingTitle: "正しく作って、明確に測る", closingText: "公開前の小さな確認で、後からのデータ整理コストを大きく減らせます。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "最小限の命名ルールを先に決める", paragraphs: ["リンク作成前に source / medium / campaign の基本ルールを合わせます。", "1ページ程度のルールでも十分効果があります。"] }, { heading: "全チャネルで同じ形式を使う", paragraphs: ["メール・SNS・広告で大文字小文字や区切りを統一します。", "形式のゆれは分析上の重複行を生みます。"], bullets: ["小文字を基本にする", "区切り記号を統一する", "個人だけが分かる略語を避ける"] }, { heading: "UTMは外部流入リンクに付ける", paragraphs: ["UTMは外部からの流入を測るリンクに使います。", "内部リンクに付けるとアトリビューションが上書きされる場合があります。"] }, { heading: "公開前にリンクを確認する", paragraphs: ["完成URLを一度開いてパラメータ値を確認します。", "先に誤字を直せば後の集計が楽になります。"] }, { heading: "共有ログを残す", paragraphs: ["最終的に使った値をチームの一覧に記録します。", "再利用しやすくなり、表記ゆれも防げます。"] }] },
  es: { title: "Cómo usar enlaces UTM sin romper reportes limpios", description: "Reglas prácticas para crear enlaces UTM consistentes y fáciles de analizar.", intro: "Los enlaces UTM solo funcionan bien cuando los nombres son consistentes. Esta guía te ayuda a trabajar rápido sin ensuciar reportes.", categoryLabel: "Medición de marketing", useCasesTitle: "Cuándo usar este flujo", useCases: ["Lanzar campañas con rapidez.", "Trabajar con varios compañeros.", "Mantener dashboards mensuales limpios."], closingTitle: "Construye una vez, mide con claridad", closingText: "Unas pocas revisiones antes de compartir enlaces evitan horas de limpieza posterior.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Define primero un estándar mínimo", paragraphs: ["Alinea reglas básicas para source, medium y campaign antes de crear enlaces.", "Incluso una guía corta evita muchos problemas de reporte."] }, { heading: "Usa un formato único en todos los canales", paragraphs: ["Mantén el mismo estilo en email, social y anuncios.", "La inconsistencia crea filas duplicadas en analytics."], bullets: ["Prefiere minúsculas.", "Usa un solo separador.", "Evita abreviaturas personales."] }, { heading: "Etiqueta solo enlaces de tráfico externo", paragraphs: ["Usa UTM para tráfico que llega desde fuera del sitio.", "No añadas UTM a enlaces internos porque puede alterar la atribución de sesión."] }, { heading: "Revisa el enlace antes de publicar", paragraphs: ["Abre la URL final y valida cada parámetro.", "Detectar errores ahora mantiene limpio el reporte después."] }, { heading: "Guarda un registro compartido", paragraphs: ["Anota valores finales en una hoja compartida.", "Reutilizar será más fácil y evitarás variantes innecesarias."] }] },
  fr: { title: "Utiliser des liens UTM sans casser un reporting propre", description: "Règles pratiques pour créer des liens UTM cohérents et faciles à analyser.", intro: "Les liens UTM sont utiles seulement si la nomenclature reste stable. Voici un workflow simple pour aller vite sans dégrader vos rapports.", categoryLabel: "Mesure marketing", useCasesTitle: "Quand utiliser ce workflow", useCases: ["Lancement rapide de campagnes.", "Travail à plusieurs sur les mêmes liens.", "Tableaux mensuels à garder lisibles."], closingTitle: "Construire une fois, mesurer clairement", closingText: "Quelques vérifications avant diffusion évitent de longues corrections de données ensuite.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Définir un standard minimal d'abord", paragraphs: ["Validez des règles simples pour source, medium et campaign avant de créer les URL.", "Même une convention courte suffit à éviter beaucoup d'erreurs."] }, { heading: "Conserver le même format partout", paragraphs: ["Appliquez le même style sur e-mail, social et publicités.", "Les variations de format créent des doublons dans les rapports."], bullets: ["Privilégier les minuscules.", "Utiliser un seul séparateur.", "Éviter les abréviations personnelles."] }, { heading: "Taguer uniquement les liens externes", paragraphs: ["Utilisez les UTM pour le trafic entrant depuis l'extérieur.", "Évitez les UTM sur les liens internes pour ne pas fausser l'attribution."] }, { heading: "Vérifier l'URL avant publication", paragraphs: ["Ouvrez l'URL finale et contrôlez chaque paramètre.", "Corriger une faute avant diffusion garde des rapports propres."] }, { heading: "Tenir un registre partagé", paragraphs: ["Conservez les valeurs finales dans un document d'équipe.", "Vous réutiliserez plus facilement sans créer de variantes inutiles."] }] },
  de: { title: "UTM-Links nutzen ohne sauberes Reporting zu zerstören", description: "Praktische Regeln für konsistente UTM-Links und klare Auswertungen.", intro: "UTM-Links bringen nur dann Nutzen, wenn die Benennung konsistent bleibt. Dieser Ablauf hilft dir, schnell zu arbeiten und Reports sauber zu halten.", categoryLabel: "Marketing-Tracking", useCasesTitle: "Wann dieser Ablauf hilft", useCases: ["Kampagnen schnell starten.", "Mit mehreren Personen zusammenarbeiten.", "Monatliche Dashboards sauber halten."], closingTitle: "Einmal sauber bauen, klar messen", closingText: "Ein paar Prüfungen vor dem Teilen sparen später viel Datenbereinigung.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "Zuerst einen Minimalstandard festlegen", paragraphs: ["Stimmt einfache Regeln für source, medium und campaign vorab ab.", "Schon eine kurze Richtlinie verhindert viele Reporting-Probleme."] }, { heading: "Ein Format über alle Kanäle", paragraphs: ["Halte Schreibweise und Trennzeichen in E-Mail, Social und Ads identisch.", "Inkonsistenz erzeugt doppelte Zeilen in Analytics."], bullets: ["Kleinbuchstaben bevorzugen.", "Nur ein Trennzeichenstil.", "Keine persönlichen Abkürzungen."] }, { heading: "Nur externe Links taggen", paragraphs: ["Nutze UTM-Parameter für Traffic von außerhalb der Website.", "Vermeide UTM in internen Links, da sonst Attribution überschrieben werden kann."] }, { heading: "Links vor dem Veröffentlichen prüfen", paragraphs: ["Öffne die finale URL einmal und kontrolliere alle Werte.", "Frühe Korrekturen halten Reports später sauber."] }, { heading: "Gemeinsames Kampagnen-Log führen", paragraphs: ["Speichere finale Werte in einer Teamliste.", "Das erleichtert Wiederverwendung und reduziert neue Varianten."] }] }
};

const bestUtmNamingRulesForSmallTeamsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "Best UTM Naming Rules for Small Teams", description: "Simple UTM naming rules small teams can follow without slowing down campaign execution.", intro: "Small teams need fast workflows and clean reporting at the same time. These naming rules are easy to adopt and maintain.", categoryLabel: "Marketing tracking", useCasesTitle: "Best for", useCases: ["Lean teams managing many campaigns.", "Startups without dedicated analytics operations.", "Teams onboarding new marketers quickly."], closingTitle: "Keep rules short and enforced", closingText: "A short rule set used consistently is better than a perfect system no one follows.", relatedToolLabel: "Open the UTM Builder", sections: [{ heading: "Create a fixed value list", paragraphs: ["Define allowed values for source and medium to prevent random naming.", "Use a small controlled list first, then expand only when needed."] }, { heading: "Standardize campaign structure", paragraphs: ["Use the same token order for every campaign name.", "For example: objective_offer_month or product_audience_region."], bullets: ["Use descriptive words.", "Avoid one-off abbreviations.", "Keep names readable by humans."] }, { heading: "Ban spaces and mixed casing", paragraphs: ["Spaces and inconsistent casing create fragmented rows in reports.", "Stick to lowercase with hyphens or underscores."] }, { heading: "Add a quick QA step", paragraphs: ["Before publishing, one teammate should quickly validate naming and URL output.", "A 30-second review prevents long cleanup cycles."] }, { heading: "Review monthly and adjust", paragraphs: ["At month end, review whether naming rules still fit current channels.", "Update the guide only when a clear recurring need appears."] }] },
  ko: { title: "소규모 팀을 위한 UTM 네이밍 규칙", description: "작은 팀도 빠르게 적용할 수 있는 간단한 UTM 네이밍 원칙을 정리했습니다.", intro: "소규모 팀은 속도와 데이터 정합성을 동시에 챙겨야 합니다. 아래 규칙은 부담 없이 도입하고 유지하기 쉽습니다.", categoryLabel: "마케팅 추적", useCasesTitle: "특히 적합한 경우", useCases: ["적은 인원으로 캠페인을 많이 운영할 때", "전담 분석 인력이 없는 스타트업", "새 마케터 온보딩이 잦을 때"], closingTitle: "짧은 규칙을 확실히 지키세요", closingText: "아무도 지키지 않는 완벽한 체계보다, 모두가 따르는 짧은 규칙이 더 효과적입니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "고정 값 목록 만들기", paragraphs: ["source와 medium에 허용 값 목록을 정해 임의 입력을 줄이세요.", "처음에는 작게 시작하고 필요할 때만 확장하세요."] }, { heading: "campaign 구조 통일", paragraphs: ["캠페인 이름의 토큰 순서를 고정하세요.", "예: objective_offer_month 또는 product_audience_region"], bullets: ["의미 있는 단어 사용", "일회성 약어 지양", "사람이 읽기 쉬운 이름 유지"] }, { heading: "공백·혼합 대소문자 금지", paragraphs: ["공백이나 대소문자 혼용은 리포트 행 분리를 유발합니다.", "소문자 + 하이픈/언더스코어 조합으로 통일하세요."] }, { heading: "간단 QA 단계 추가", paragraphs: ["배포 전 한 명이 네이밍과 URL 결과를 빠르게 검수하세요.", "30초 점검이 긴 데이터 정리 시간을 줄입니다."] }, { heading: "월간 리뷰로 규칙 보정", paragraphs: ["매달 말 규칙이 현재 채널 구조에 맞는지 확인하세요.", "반복적으로 필요할 때만 규칙을 수정하면 됩니다."] }] },
  ja: { title: "小規模チーム向けUTM命名ルール", description: "小さなチームでも無理なく運用できるUTM命名ルールをまとめました。", intro: "少人数チームでは、スピードとデータ整合性の両立が重要です。以下のルールなら導入・運用がシンプルです。", categoryLabel: "マーケティング計測", useCasesTitle: "特に有効なケース", useCases: ["少人数で多くの施策を回すとき", "専任アナリストがいないチーム", "新メンバーの参加が多いとき"], closingTitle: "短いルールを確実に守る", closingText: "誰も使わない完璧な設計より、全員が守る短いルールの方が成果につながります。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "固定値リストを作る", paragraphs: ["source と medium の許可値を決め、自由入力を減らします。", "最初は小さく始め、必要時のみ拡張します。"] }, { heading: "campaignの構造を統一", paragraphs: ["キャンペーン名の要素順を固定します。", "例: objective_offer_month / product_audience_region"], bullets: ["意味が分かる単語を使う", "その場限りの略語を避ける", "人が読める名前を維持する"] }, { heading: "スペースと大小混在を禁止", paragraphs: ["スペースや大小文字の混在はレポート分断の原因です。", "小文字 + ハイフン/アンダースコアに統一しましょう。"] }, { heading: "公開前の簡易QAを入れる", paragraphs: ["公開前に1人が命名とURLを短時間で確認します。", "30秒の確認が後の修正工数を減らします。"] }, { heading: "月次レビューで調整", paragraphs: ["月末にルールが現状チャネルに合っているか確認します。", "繰り返し必要な変更だけ反映しましょう。"] }] },
  es: { title: "Mejores reglas de nombres UTM para equipos pequeños", description: "Reglas UTM simples para equipos pequeños que necesitan velocidad y reportes limpios.", intro: "Los equipos pequeños deben ejecutar rápido sin perder calidad de datos. Estas reglas son fáciles de aplicar y mantener.", categoryLabel: "Medición de marketing", useCasesTitle: "Ideal para", useCases: ["Equipos reducidos con muchas campañas.", "Startups sin operación analítica dedicada.", "Onboarding frecuente de nuevos marketers."], closingTitle: "Reglas cortas y cumplidas", closingText: "Un sistema simple que todos siguen funciona mejor que uno perfecto que nadie usa.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Define una lista fija de valores", paragraphs: ["Establece valores permitidos para source y medium.", "Empieza con una lista pequeña y amplíala solo si hace falta."] }, { heading: "Estandariza la estructura de campaign", paragraphs: ["Usa el mismo orden de tokens en todos los nombres.", "Ejemplo: objetivo_oferta_mes o producto_audiencia_region."], bullets: ["Usa palabras descriptivas.", "Evita abreviaturas únicas.", "Mantén nombres legibles."] }, { heading: "Sin espacios ni mayúsculas mixtas", paragraphs: ["Espacios y mayúsculas inconsistentes fragmentan reportes.", "Mantén minúsculas con guiones o guiones bajos."] }, { heading: "Añade un paso rápido de QA", paragraphs: ["Antes de publicar, otra persona valida nombre y URL.", "Una revisión de 30 segundos evita limpieza larga después."] }, { heading: "Revisa cada mes y ajusta", paragraphs: ["Al final del mes, comprueba si las reglas siguen encajando.", "Actualiza solo cuando haya una necesidad recurrente clara."] }] },
  fr: { title: "Meilleures règles de nommage UTM pour petites équipes", description: "Des règles simples de nommage UTM pour aller vite tout en gardant des rapports propres.", intro: "Les petites équipes doivent livrer vite sans dégrader la qualité de suivi. Ces règles sont faciles à adopter et à maintenir.", categoryLabel: "Mesure marketing", useCasesTitle: "Particulièrement utile pour", useCases: ["Petites équipes avec beaucoup de campagnes.", "Startups sans pôle analytics dédié.", "Onboarding fréquent de nouveaux profils marketing."], closingTitle: "Des règles courtes, bien appliquées", closingText: "Un système simple respecté par tous vaut mieux qu'un système parfait ignoré par l'équipe.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Créer une liste de valeurs fixes", paragraphs: ["Définissez des valeurs autorisées pour source et medium.", "Commencez petit puis élargissez seulement si nécessaire."] }, { heading: "Uniformiser la structure de campaign", paragraphs: ["Gardez le même ordre de tokens dans chaque nom.", "Exemple: objectif_offre_mois ou produit_audience_region."], bullets: ["Utiliser des mots explicites.", "Éviter les abréviations ponctuelles.", "Rester lisible pour l'équipe."] }, { heading: "Interdire espaces et casse mixte", paragraphs: ["Les espaces et variations de casse fragmentent les rapports.", "Privilégiez les minuscules avec tirets ou underscores."] }, { heading: "Ajouter une vérification rapide", paragraphs: ["Avant publication, une personne vérifie nommage et URL.", "30 secondes de contrôle évitent des heures de correction."] }, { heading: "Réviser chaque mois", paragraphs: ["En fin de mois, vérifiez si les règles restent adaptées.", "N'ajustez que pour des besoins récurrents clairs."] }] },
  de: { title: "Beste UTM-Namensregeln für kleine Teams", description: "Einfache UTM-Regeln für kleine Teams, die schnell arbeiten und sauber auswerten wollen.", intro: "Kleine Teams brauchen Tempo und gleichzeitig saubere Daten. Diese Regeln lassen sich leicht einführen und durchhalten.", categoryLabel: "Marketing-Tracking", useCasesTitle: "Besonders geeignet für", useCases: ["Kleine Teams mit vielen Kampagnen.", "Startups ohne dediziertes Analytics-Team.", "Häufiges Onboarding neuer Marketer."], closingTitle: "Kurze Regeln, konsequent genutzt", closingText: "Ein einfaches Regelwerk, das alle nutzen, ist besser als ein perfektes System ohne Akzeptanz.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "Feste Werteliste definieren", paragraphs: ["Lege erlaubte Werte für source und medium fest.", "Starte mit einer kleinen Liste und erweitere nur bei Bedarf."] }, { heading: "Kampagnenstruktur standardisieren", paragraphs: ["Nutze für campaign immer dieselbe Reihenfolge.", "Beispiel: ziel_angebot_monat oder produkt_zielgruppe_region."], bullets: ["Beschreibende Wörter nutzen.", "Einmalige Abkürzungen vermeiden.", "Für Menschen gut lesbar halten."] }, { heading: "Keine Leerzeichen, keine Mischschreibweise", paragraphs: ["Leerzeichen und wechselnde Groß-/Kleinschreibung splitten Berichte.", "Nutze Kleinbuchstaben mit Bindestrich oder Unterstrich."] }, { heading: "Kurzen QA-Schritt einbauen", paragraphs: ["Vor Veröffentlichung prüft eine zweite Person Benennung und URL.", "30 Sekunden Check sparen lange Nacharbeit."] }, { heading: "Monatlich prüfen und anpassen", paragraphs: ["Prüfe zum Monatsende, ob Regeln noch zu euren Kanälen passen.", "Ändere nur bei klar wiederkehrendem Bedarf."] }] }
};

const checkTaggedUrlBeforeSharingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { title: "How to Check a Tagged URL Before Sharing It", description: "A quick pre-share checklist to catch UTM link mistakes before they pollute campaign data.", intro: "One typo in a tagged URL can split your analytics data for the entire campaign. A fast final check keeps tracking accurate.", categoryLabel: "Marketing tracking", useCasesTitle: "Use this before", useCases: ["Sending email campaigns.", "Publishing paid or organic social posts.", "Handing links to partners or sales teams."], closingTitle: "Check first, then distribute", closingText: "A 60-second review protects data quality and saves reporting cleanup later.", relatedToolLabel: "Open the UTM Builder", sections: [{ heading: "Validate the base URL", paragraphs: ["Confirm the page URL is correct and uses https.", "Remove accidental redirects, preview links, or staging domains."] }, { heading: "Scan each UTM field", paragraphs: ["Look for spelling inconsistencies and empty values.", "Confirm source, medium, and campaign follow your naming rules."], bullets: ["No accidental uppercase variants.", "No trailing spaces.", "No swapped source/medium values."] }, { heading: "Open and test the final link", paragraphs: ["Click the full URL and verify the destination page loads as expected.", "Make sure existing query parameters were not broken while adding UTM tags."] }, { heading: "Save the approved version", paragraphs: ["Copy the final checked URL into your campaign sheet.", "Share only this approved version to avoid multiple variants."] }] },
  ko: { title: "공유 전에 태그된 URL 점검하는 방법", description: "UTM 링크 공유 전 빠르게 점검해 데이터 오염을 막는 체크리스트입니다.", intro: "태그된 URL의 작은 오탈자 하나가 캠페인 데이터 분리를 만들 수 있습니다. 짧은 최종 점검으로 정확도를 지키세요.", categoryLabel: "마케팅 추적", useCasesTitle: "다음 상황 전에 사용", useCases: ["이메일 캠페인 발송 전", "유료/유기 소셜 게시 전", "파트너/세일즈 팀에 링크 전달 전"], closingTitle: "점검 후 공유하세요", closingText: "1분 점검으로 데이터 품질을 지키고 사후 정리 시간을 줄일 수 있습니다.", relatedToolLabel: "UTM Builder 열기", sections: [{ heading: "기본 URL 확인", paragraphs: ["대상 페이지 URL과 https 사용 여부를 확인하세요.", "스테이징 도메인이나 미리보기 링크가 섞이지 않았는지 점검하세요."] }, { heading: "UTM 필드별 스캔", paragraphs: ["철자 불일치와 빈 값을 확인하세요.", "source, medium, campaign이 팀 규칙을 따르는지 점검합니다."], bullets: ["의도치 않은 대문자 없음", "끝 공백 없음", "source/medium 값 뒤바뀜 없음"] }, { heading: "최종 링크 실제 테스트", paragraphs: ["완성 URL을 클릭해 목적 페이지가 정상 로드되는지 확인하세요.", "기존 쿼리 파라미터가 깨지지 않았는지도 확인합니다."] }, { heading: "검수 완료 버전 저장", paragraphs: ["최종 확인된 URL을 캠페인 시트에 저장하세요.", "공유는 이 승인 버전 하나만 사용하세요."] }] },
  ja: { title: "共有前にタグ付きURLを確認する方法", description: "UTMリンク共有前の短いチェックでデータ汚染を防ぎます。", intro: "タグ付きURLの小さな誤字でも、キャンペーンデータが分割される原因になります。公開前の最終確認が重要です。", categoryLabel: "マーケティング計測", useCasesTitle: "次の前に実施", useCases: ["メール配信前", "広告・SNS投稿前", "パートナーや営業への共有前"], closingTitle: "確認してから配布", closingText: "60秒の確認でデータ品質を守り、後の修正工数を減らせます。", relatedToolLabel: "UTM Builderを開く", sections: [{ heading: "ベースURLを検証", paragraphs: ["遷移先URLが正しく https であるか確認します。", "ステージングURLやプレビューURLが混ざっていないか確認します。"] }, { heading: "UTM各項目を目視確認", paragraphs: ["スペルのゆれや空欄をチェックします。", "source / medium / campaign が命名ルールに沿っているか確認します。"], bullets: ["意図しない大文字がない", "末尾スペースがない", "sourceとmediumの入れ違いがない"] }, { heading: "完成URLを実際に開く", paragraphs: ["URLをクリックして正しいページに到達するか確認します。", "既存のクエリパラメータが壊れていないかも確認します。"] }, { heading: "承認済みURLを保存", paragraphs: ["確認済みURLをキャンペーン管理表に保存します。", "共有はこの承認版のみを使います。"] }] },
  es: { title: "Cómo revisar una URL etiquetada antes de compartirla", description: "Checklist rápida para detectar errores UTM antes de que contaminen tus datos.", intro: "Un solo error en una URL etiquetada puede dividir datos de toda la campaña. Una revisión final rápida mantiene la medición limpia.", categoryLabel: "Medición de marketing", useCasesTitle: "Úsalo antes de", useCases: ["Enviar campañas de email.", "Publicar contenido social orgánico o pagado.", "Compartir enlaces con partners o ventas."], closingTitle: "Revisa primero, comparte después", closingText: "Un chequeo de 60 segundos protege la calidad de datos y ahorra limpieza posterior.", relatedToolLabel: "Abrir UTM Builder", sections: [{ heading: "Valida la URL base", paragraphs: ["Confirma que la URL destino es la correcta y usa https.", "Elimina links de preview, redirecciones innecesarias o dominios de staging."] }, { heading: "Revisa cada campo UTM", paragraphs: ["Busca errores de escritura y valores vacíos.", "Comprueba que source, medium y campaign siguen tus reglas."], bullets: ["Sin variantes en mayúsculas.", "Sin espacios al final.", "Sin source/medium invertidos."] }, { heading: "Abre y prueba la URL final", paragraphs: ["Haz clic en la URL completa y verifica que cargue la página correcta.", "Asegura que los parámetros existentes no se rompieron al añadir UTM."] }, { heading: "Guarda la versión aprobada", paragraphs: ["Copia la URL validada en tu hoja de campaña.", "Comparte solo esa versión para evitar variantes." ] }] },
  fr: { title: "Comment vérifier une URL taguée avant de la partager", description: "Une checklist rapide pour éviter les erreurs UTM avant diffusion.", intro: "Une simple faute dans une URL taguée peut fragmenter toute votre donnée de campagne. Un dernier contrôle rapide protège vos rapports.", categoryLabel: "Mesure marketing", useCasesTitle: "À faire avant", useCases: ["L'envoi d'une campagne e-mail.", "La publication social organique ou payante.", "Le partage de liens à des partenaires ou équipes commerciales."], closingTitle: "Vérifier puis diffuser", closingText: "60 secondes de contrôle préservent la qualité des données et évitent du nettoyage ensuite.", relatedToolLabel: "Ouvrir UTM Builder", sections: [{ heading: "Valider l'URL de base", paragraphs: ["Vérifiez la bonne page de destination et l'usage de https.", "Supprimez les liens de preview, redirections inutiles ou domaines de staging."] }, { heading: "Contrôler chaque champ UTM", paragraphs: ["Repérez fautes, variantes et valeurs vides.", "Assurez-vous que source, medium et campaign suivent vos règles."], bullets: ["Pas de variantes en majuscules.", "Pas d'espaces en fin de valeur.", "Pas d'inversion source/medium."] }, { heading: "Tester l'URL finale", paragraphs: ["Ouvrez l'URL complète pour confirmer la bonne destination.", "Vérifiez aussi que les paramètres existants n'ont pas été cassés."] }, { heading: "Enregistrer la version validée", paragraphs: ["Copiez l'URL validée dans votre document de campagne.", "Partagez uniquement cette version approuvée."] }] },
  de: { title: "Getaggte URL vor dem Teilen prüfen", description: "Kurze Checkliste, um UTM-Fehler vor der Veröffentlichung zu erkennen.", intro: "Schon ein Tippfehler in einer getaggten URL kann Kampagnendaten aufsplitten. Eine schnelle Endkontrolle hält Tracking sauber.", categoryLabel: "Marketing-Tracking", useCasesTitle: "Vor diesen Schritten nutzen", useCases: ["E-Mail-Kampagnenversand.", "Veröffentlichung von Social-Posts (paid/organisch).", "Weitergabe an Partner oder Vertrieb."], closingTitle: "Erst prüfen, dann teilen", closingText: "Ein 60-Sekunden-Check schützt die Datenqualität und spart spätere Korrekturarbeit.", relatedToolLabel: "UTM Builder öffnen", sections: [{ heading: "Basis-URL validieren", paragraphs: ["Prüfe, ob die Zielseite korrekt ist und https nutzt.", "Entferne Preview-Links, unnötige Redirects oder Staging-Domains."] }, { heading: "Jedes UTM-Feld prüfen", paragraphs: ["Suche nach Tippfehlern und leeren Werten.", "Bestätige, dass source, medium und campaign euren Regeln folgen."], bullets: ["Keine unbeabsichtigten Großbuchstaben.", "Keine Leerzeichen am Ende.", "Source und Medium nicht vertauschen."] }, { heading: "Finale URL testen", paragraphs: ["Öffne die komplette URL und prüfe die Zielseite.", "Stelle sicher, dass bestehende Query-Parameter nicht beschädigt wurden."] }, { heading: "Freigegebene Version speichern", paragraphs: ["Speichere die geprüfte URL im Kampagnen-Sheet.", "Teile nur diese freigegebene Version."] }] }
};
const contrastCheckerGuideEn: GuideLocalizedContent = {
  title: "Contrast Checker Guide for Everyday Website Work",
  description: "Learn a practical workflow to test text contrast quickly and improve readability before publishing.",
  intro: "The fastest way to improve readability is to check text and background color pairs before they go live. This guide gives you a lightweight routine you can apply to pages, components, and design updates.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "When this guide helps",
  useCases: ["Preparing a new page design.", "Reviewing button and link styles.", "Validating brand colors in UI components."],
  closingTitle: "Use contrast checks early",
  closingText: "If you run a quick contrast check during design and QA, accessibility issues are easier to fix and less likely to reach production.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Start with real text combinations", paragraphs: ["Check actual text/background pairs used in your UI, not only palette swatches.", "Prioritize body text, buttons, links, and captions because users depend on them most."] },
    { heading: "Read ratio and pass/fail together", paragraphs: ["The ratio shows measurable contrast strength.", "WCAG pass/fail tells you whether the combination is acceptable for normal and large text."] },
    { heading: "Adjust color in small steps", paragraphs: ["Move one color at a time and retest quickly.", "Small shifts in lightness often fix contrast without changing the overall brand feel."] },
    { heading: "Check states and context", paragraphs: ["A color pair that passes in one place may fail in hover, disabled, or dark-mode states.", "Verify combinations inside real components before final approval."] }
  ]
};

const contrastCheckerGuideContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: contrastCheckerGuideEn,
  ko: { ...contrastCheckerGuideEn, title: "실무에서 바로 쓰는 Contrast Checker 가이드", description: "배포 전에 텍스트 대비를 빠르게 점검해 가독성을 높이는 실전 흐름을 소개합니다.", intro: "텍스트와 배경 색 조합을 미리 점검하면 접근성 문제를 훨씬 쉽게 줄일 수 있습니다. 이 가이드는 디자인/QA 단계에서 바로 쓰는 간단한 루틴입니다." },
  ja: { ...contrastCheckerGuideEn, title: "日常のWeb作業向け Contrast Checker ガイド", description: "公開前に文字コントラストを素早く確認し、可読性を改善する実践フローです。", intro: "公開前に文字色と背景色を確認するだけで、読みづらさを大きく減らせます。設計とQAで使えるシンプルな手順をまとめました。" },
  es: { ...contrastCheckerGuideEn, title: "Guía práctica de Contrast Checker para sitios web", description: "Aprende un flujo rápido para validar contraste de texto y mejorar legibilidad antes de publicar.", intro: "Revisar combinaciones reales de texto y fondo antes de publicar reduce errores de accesibilidad. Aquí tienes una rutina ligera para diseño y QA." },
  fr: { ...contrastCheckerGuideEn, title: "Guide pratique Contrast Checker pour le web", description: "Adoptez un flux rapide pour vérifier le contraste du texte et améliorer la lisibilité avant publication.", intro: "Vérifier les paires texte/fond avant mise en ligne évite beaucoup de problèmes de lisibilité. Ce guide propose une routine simple pour design et QA." },
  de: { ...contrastCheckerGuideEn, title: "Praktischer Contrast-Checker-Guide für Websites", description: "Mit einem kurzen Workflow Textkontraste vor dem Veröffentlichen prüfen und Lesbarkeit verbessern.", intro: "Wenn du Text- und Hintergrundfarben früh prüfst, lassen sich Barrierefreiheitsprobleme deutlich leichter beheben. Dieser Guide zeigt eine einfache Routine für Design und QA." }
};

const checkTextContrastForAccessibilityEn: GuideLocalizedContent = {
  title: "How to Check Text Contrast for Accessibility",
  description: "Use a simple repeatable method to test text contrast against WCAG targets.",
  intro: "Accessible text contrast is one of the fastest wins in UI quality. You do not need a complex audit to start. A short, repeatable check catches most common issues.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "Where to apply this",
  useCases: ["Landing page updates.", "Product UI reviews.", "Design handoff QA."],
  closingTitle: "Make contrast part of QA",
  closingText: "Treat contrast checks as a standard release step, just like spelling or layout checks.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Identify text types first", paragraphs: ["List body text, helper text, button labels, and links.", "Smaller text needs stronger contrast than large headings."] },
    { heading: "Test each pair with a checker", paragraphs: ["Enter foreground and background colors and read both ratio and WCAG results.", "Document combinations that fail so fixes stay organized."] },
    { heading: "Fix by changing lightness first", paragraphs: ["Try lightness adjustments before replacing the full hue.", "This usually preserves your visual identity while improving readability."] },
    { heading: "Retest interactive states", paragraphs: ["Validate default, hover, focus, active, and disabled states.", "Accessibility failures often hide in non-default states."] }
  ]
};

const checkTextContrastForAccessibilityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: checkTextContrastForAccessibilityEn,
  ko: { ...checkTextContrastForAccessibilityEn, title: "접근성을 위한 텍스트 대비 확인 방법", description: "WCAG 기준에 맞춰 텍스트 대비를 빠르게 점검하는 반복 가능한 방법을 소개합니다.", intro: "텍스트 대비 점검은 UI 품질을 빠르게 높이는 가장 쉬운 접근성 개선입니다. 짧은 체크 루틴만으로도 대부분의 문제를 미리 찾을 수 있습니다." },
  ja: { ...checkTextContrastForAccessibilityEn, title: "アクセシビリティのために文字コントラストを確認する方法", description: "WCAGを基準に、文字コントラストを実務で反復チェックする方法を解説します。", intro: "文字コントラストの確認は、UI品質をすぐ改善できる施策です。短い手順を繰り返すだけで多くの問題を早期に防げます。" },
  es: { ...checkTextContrastForAccessibilityEn, title: "Cómo revisar contraste de texto para accesibilidad", description: "Aplica un método simple y repetible para validar contraste de texto según WCAG.", intro: "El contraste de texto es una mejora rápida y de alto impacto en calidad de UI. Con una revisión breve puedes detectar la mayoría de problemas comunes." },
  fr: { ...checkTextContrastForAccessibilityEn, title: "Comment vérifier le contraste du texte pour l'accessibilité", description: "Utilisez une méthode simple et répétable pour tester le contraste du texte selon WCAG.", intro: "Le contraste du texte est un gain rapide pour la qualité UI. Une vérification courte permet d'attraper la plupart des problèmes courants." },
  de: { ...checkTextContrastForAccessibilityEn, title: "Textkontrast für Barrierefreiheit prüfen", description: "Mit einer einfachen, wiederholbaren Methode Textkontrast gegen WCAG-Ziele testen.", intro: "Textkontrast ist einer der schnellsten Hebel für bessere UI-Qualität. Mit einem kurzen Check lassen sich die meisten Probleme früh erkennen." }
};

const lowContrastTextHurtsReadabilityEn: GuideLocalizedContent = {
  title: "Why Low-Contrast Text Hurts Readability",
  description: "Understand how low contrast affects scanning speed, comprehension, and trust.",
  intro: "Low-contrast text may look subtle in mockups, but it slows real users. People read less comfortably, skip content sooner, and make more mistakes.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "Useful for",
  useCases: ["Content-heavy pages.", "Form and checkout flows.", "Dashboard UI cleanup."],
  closingTitle: "Readable text is a product decision",
  closingText: "Improving contrast is not just compliance. It directly improves how quickly users understand your interface.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Low contrast increases reading effort", paragraphs: ["Users need more focus to separate letters from the background.", "This is worse on small screens, low brightness, or bright environments."] },
    { heading: "It affects more than users with disabilities", paragraphs: ["Anyone can struggle with low-contrast text when tired, distracted, or in glare.", "Better contrast improves readability for everyone."] },
    { heading: "Hard-to-read text lowers task completion", paragraphs: ["If instructions or labels are unclear, users miss steps or abandon tasks.", "Contrast issues can reduce conversion and increase support questions."] },
    { heading: "Quick fixes often solve most cases", paragraphs: ["Slightly darkening text or lightening backgrounds can produce immediate gains.", "Validate fixes with a checker and keep a documented color system."] }
  ]
};

const lowContrastTextHurtsReadabilityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: lowContrastTextHurtsReadabilityEn,
  ko: { ...lowContrastTextHurtsReadabilityEn, title: "낮은 대비 텍스트가 가독성을 해치는 이유", description: "낮은 대비가 읽기 속도와 이해도, 사용자 신뢰에 주는 영향을 실무 관점에서 설명합니다.", intro: "시안에서 은은해 보이는 텍스트도 실제 사용에서는 읽기 부담을 크게 높입니다. 그 결과 사용자 이탈과 실수가 늘어날 수 있습니다." },
  ja: { ...lowContrastTextHurtsReadabilityEn, title: "低コントラスト文字が読みやすさを下げる理由", description: "低コントラストが読解速度・理解・信頼に与える影響を実務向けに解説します。", intro: "モックでは上品に見える低コントラスト文字も、実際の利用では読みにくさを生みます。結果として離脱や入力ミスが増えます。" },
  es: { ...lowContrastTextHurtsReadabilityEn, title: "Por qué el texto con bajo contraste reduce la legibilidad", description: "Comprende cómo el bajo contraste afecta velocidad de lectura, comprensión y confianza.", intro: "Un texto de bajo contraste puede verse elegante en diseño, pero en uso real dificulta la lectura y aumenta errores." },
  fr: { ...lowContrastTextHurtsReadabilityEn, title: "Pourquoi un texte à faible contraste nuit à la lisibilité", description: "Comprenez l'impact d'un faible contraste sur la lecture, la compréhension et la confiance.", intro: "Un faible contraste peut sembler esthétique dans une maquette, mais il ralentit la lecture en situation réelle." },
  de: { ...lowContrastTextHurtsReadabilityEn, title: "Warum kontrastarmer Text die Lesbarkeit verschlechtert", description: "So wirkt sich zu geringer Kontrast auf Lesegeschwindigkeit, Verständnis und Vertrauen aus.", intro: "Kontrastarmer Text wirkt im Mockup oft dezent, bremst aber reale Nutzer beim Lesen und erhöht Fehler." }
};

const wcagContrastRatioBasicsEn: GuideLocalizedContent = {
  title: "WCAG Contrast Ratio Basics (Without the Jargon)",
  description: "Learn what contrast ratios mean and how to apply AA/AAA targets in practical UI work.",
  intro: "Contrast ratio numbers can feel abstract at first. This guide explains what they mean in plain language and how to use them when reviewing text colors.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "When to read this",
  useCases: ["Starting accessibility reviews.", "Training designers and developers.", "Creating color QA checklists."],
  closingTitle: "Use ratios as a decision tool",
  closingText: "You do not need to memorize every rule. Use a checker and know which threshold applies to your text size.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "What a contrast ratio represents", paragraphs: ["It compares how different a text color is from its background.", "Higher ratios generally mean easier reading."] },
    { heading: "AA and AAA in simple terms", paragraphs: ["AA is the common practical baseline for most web interfaces.", "AAA is stricter and useful where maximum readability is needed."] },
    { heading: "Normal text vs large text", paragraphs: ["Large text can pass at lower ratios than normal body text.", "Always classify text size correctly before deciding pass/fail."] },
    { heading: "How to apply this in a workflow", paragraphs: ["Check planned color pairs before development.", "Retest final UI states after implementation."] }
  ]
};

const wcagContrastRatioBasicsContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: wcagContrastRatioBasicsEn,
  ko: { ...wcagContrastRatioBasicsEn, title: "WCAG 대비 비율 기초 (어려운 용어 없이)", description: "대비 비율 숫자의 의미와 AA/AAA 기준을 실무 UI 점검에 적용하는 방법을 설명합니다.", intro: "대비 비율 숫자는 처음엔 추상적으로 느껴질 수 있습니다. 이 가이드는 개념을 쉬운 언어로 풀어 실제 작업에 연결해 줍니다." },
  ja: { ...wcagContrastRatioBasicsEn, title: "WCAGコントラスト比の基本（難しい用語なし）", description: "コントラスト比の意味とAA/AAA基準を実務UIで使う方法をわかりやすく解説します。", intro: "コントラスト比は数字だけだと分かりにくいものです。このガイドでは実務で使える形に整理します。" },
  es: { ...wcagContrastRatioBasicsEn, title: "Conceptos básicos de ratio WCAG (sin tecnicismos)", description: "Entiende qué significan los ratios de contraste y cómo usar AA/AAA en trabajo real de UI.", intro: "Los números de contraste pueden parecer abstractos al inicio. Aquí los traducimos a decisiones prácticas." },
  fr: { ...wcagContrastRatioBasicsEn, title: "Bases du ratio de contraste WCAG (sans jargon)", description: "Comprenez les ratios de contraste et appliquez AA/AAA dans un workflow UI concret.", intro: "Les ratios de contraste paraissent abstraits au début. Ce guide les transforme en règles pratiques de décision." },
  de: { ...wcagContrastRatioBasicsEn, title: "WCAG-Kontrastverhältnis einfach erklärt", description: "Was Kontrastverhältnisse bedeuten und wie du AA/AAA-Ziele praktisch in UI-Workflows anwendest.", intro: "Kontrastzahlen wirken anfangs abstrakt. Dieser Guide erklärt sie ohne Fachjargon und mit klarem Praxisbezug." }
};

const accessibilityColorContrastMistakesEn: GuideLocalizedContent = {
  title: "Accessibility Color Contrast Mistakes to Avoid",
  description: "Spot the most common contrast errors teams repeat in design and frontend workflows.",
  intro: "Many contrast issues are predictable. Teams often repeat the same mistakes: testing too late, checking only one state, and trusting visual preference over measured ratios.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "Useful for",
  useCases: ["Design QA checklists.", "Frontend accessibility reviews.", "Component library updates."],
  closingTitle: "Prevent mistakes upstream",
  closingText: "Catch contrast problems in design tokens and component specs, and you will fix fewer issues later in QA.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Mistake: checking only default state", paragraphs: ["Hover, focus, disabled, and active states often fail while default passes.", "Always test full component state sets."] },
    { heading: "Mistake: treating brand colors as untouchable", paragraphs: ["Brand identity can stay intact while adjusting lightness for readability.", "Document accessible alternates for text and interactive UI use."] },
    { heading: "Mistake: testing large text only", paragraphs: ["Body copy and helper text require stricter contrast thresholds.", "Include small text in every accessibility review."] },
    { heading: "Mistake: skipping real-background testing", paragraphs: ["A color can pass on white but fail on cards, banners, and gradients.", "Validate color pairs in real layouts."] }
  ]
};

const accessibilityColorContrastMistakesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: accessibilityColorContrastMistakesEn,
  ko: { ...accessibilityColorContrastMistakesEn, title: "피해야 할 접근성 대비 실수", description: "디자인/프론트엔드 작업에서 반복되는 대표적인 대비 실수를 빠르게 점검합니다.", intro: "대비 문제는 대부분 예측 가능합니다. 늦은 점검, 단일 상태만 확인, 감각 중심 판단이 반복되는 핵심 원인입니다." },
  ja: { ...accessibilityColorContrastMistakesEn, title: "避けたいアクセシビリティ配色コントラストのミス", description: "デザインと実装で繰り返される代表的なコントラストの失敗を整理します。", intro: "コントラスト問題の多くは同じパターンです。チェック時期が遅い、状態を網羅しない、比率を見ないことが主因です。" },
  es: { ...accessibilityColorContrastMistakesEn, title: "Errores de contraste de color en accesibilidad que debes evitar", description: "Identifica fallos comunes de contraste que se repiten en diseño y frontend.", intro: "Muchos problemas de contraste son previsibles: revisar tarde, validar un solo estado y decidir por apariencia." },
  fr: { ...accessibilityColorContrastMistakesEn, title: "Erreurs fréquentes de contraste couleur à éviter", description: "Repérez les erreurs de contraste les plus courantes en design et en frontend.", intro: "Les problèmes de contraste se répètent souvent: tests trop tardifs, un seul état vérifié, et décisions visuelles sans mesure." },
  de: { ...accessibilityColorContrastMistakesEn, title: "Häufige Accessibility-Fehler beim Farbkontrast", description: "Typische Kontrastfehler aus Design- und Frontend-Workflows früh erkennen.", intro: "Viele Kontrastprobleme sind vorhersehbar: zu spätes Testen, nur ein Zustand, und Entscheidungen nach Gefühl statt Ratio." }
};

const fixLowContrastTextOnWebsiteEn: GuideLocalizedContent = {
  title: "How to Fix Low Contrast Text on a Website",
  description: "Follow a practical step-by-step process to identify and fix low-contrast text quickly.",
  intro: "If users say text is hard to read, you can usually fix it quickly without redesigning everything. This workflow helps you find failing combinations, update colors safely, and validate results before release.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "When this guide helps",
  useCases: ["Fixing readability complaints from users.", "Improving old pages before relaunch.", "Cleaning up inconsistent legacy color styles."],
  closingTitle: "Fix contrast in controlled iterations",
  closingText: "Work through the highest-impact text first, test each change, and lock improved values into your design tokens.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Audit the worst readability problems first", paragraphs: ["Start with body text, form labels, buttons, and links on high-traffic pages.", "Collect failing pairs in a short list so your fixes stay focused."], bullets: ["Homepage hero text", "Primary/secondary buttons", "Form helper and error text"] },
    { heading: "Measure each text/background pair", paragraphs: ["Run each pair in a contrast checker and note failed AA/AAA targets.", "Keep one table with current value, target, and proposed fix."] },
    { heading: "Adjust color without breaking brand style", paragraphs: ["Change lightness first before changing hue.", "Small shifts can improve readability while keeping your visual identity recognizable."] },
    { heading: "Retest UI states and responsive layouts", paragraphs: ["Check hover, focus, disabled, and visited states.", "Confirm results on mobile where smaller text magnifies contrast problems."] },
    { heading: "Ship and document new color tokens", paragraphs: ["After fixes pass, update your design system tokens and component docs.", "This prevents the same low-contrast values from returning later."] }
  ]
};

const fixLowContrastTextOnWebsiteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: fixLowContrastTextOnWebsiteEn,
  ko: { ...fixLowContrastTextOnWebsiteEn, title: "웹사이트의 낮은 대비 텍스트를 수정하는 방법", description: "가독성이 낮은 텍스트를 빠르게 찾아 실무적으로 개선하는 단계별 방법입니다.", intro: "사용자가 텍스트가 잘 안 읽힌다고 말할 때, 전체 리디자인 없이도 대부분 빠르게 개선할 수 있습니다. 실패 조합을 찾고 안전하게 색을 조정하는 흐름을 소개합니다." },
  ja: { ...fixLowContrastTextOnWebsiteEn, title: "Webサイトの低コントラスト文字を修正する方法", description: "読みにくいテキストを見つけて修正する実践的な手順を解説します。", intro: "『文字が読みづらい』という指摘は、全面改修なしでも改善できることがほとんどです。失敗箇所を特定し、安全に色を調整する流れを紹介します。" },
  es: { ...fixLowContrastTextOnWebsiteEn, title: "Cómo corregir texto con bajo contraste en un sitio web", description: "Sigue un proceso práctico para detectar y corregir texto con bajo contraste rápidamente.", intro: "Si los usuarios dicen que el texto cuesta leer, normalmente puedes corregirlo sin rediseñar todo el sitio. Esta guía te da un flujo claro y rápido." },
  fr: { ...fixLowContrastTextOnWebsiteEn, title: "Comment corriger un texte à faible contraste sur un site web", description: "Suivez un processus concret pour identifier et corriger rapidement les textes peu lisibles.", intro: "Quand les utilisateurs signalent un texte difficile à lire, il est souvent possible de corriger vite sans tout refondre. Ce guide propose une méthode pas à pas." },
  de: { ...fixLowContrastTextOnWebsiteEn, title: "Niedrigen Textkontrast auf einer Website beheben", description: "Ein praktischer Ablauf, um kontrastarme Texte schnell zu finden und zu korrigieren.", intro: "Wenn Nutzer Text schlecht lesen können, lassen sich die meisten Probleme ohne komplettes Redesign beheben. Dieser Guide zeigt einen klaren Schritt-für-Schritt-Prozess." }
};

const bestContrastPracticesForUiTextEn: GuideLocalizedContent = {
  title: "Best Contrast Practices for Buttons, Links, and UI Text",
  description: "Use practical contrast rules for interactive elements and small UI copy.",
  intro: "Buttons, links, and helper text are where contrast mistakes hurt the most. These elements drive actions. If users cannot read them quickly, task completion drops.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "Great for",
  useCases: ["Design system standards.", "Component library QA.", "Product interface refresh projects."],
  closingTitle: "Make contrast a component requirement",
  closingText: "Define contrast expectations inside component specs so teams do not need to re-decide rules in every sprint.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Set minimum contrast targets by component type", paragraphs: ["Define baseline targets for body text, link text, button labels, and meta text.", "Shared targets reduce debates and speed up reviews."] },
    { heading: "Design interactive states as complete sets", paragraphs: ["Plan default, hover, focus, active, and disabled states together.", "A complete state system prevents hidden accessibility failures."] },
    { heading: "Prioritize link readability in content blocks", paragraphs: ["Links should remain clear without relying only on color differences.", "Use underline or stronger weight where needed for clarity."] },
    { heading: "Protect small text in dense interfaces", paragraphs: ["Captions, form hints, and secondary labels often fail first.", "Give small UI text extra contrast margin instead of aiming for the bare minimum."] },
    { heading: "Review with real backgrounds and themes", paragraphs: ["Test components on cards, tables, banners, and dark/light themes.", "One passing pair on white does not guarantee full UI accessibility."] }
  ]
};

const bestContrastPracticesForUiTextContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: bestContrastPracticesForUiTextEn,
  ko: { ...bestContrastPracticesForUiTextEn, title: "버튼, 링크, UI 텍스트를 위한 대비 모범 사례", description: "인터랙티브 요소와 작은 UI 텍스트에서 바로 적용할 수 있는 실전 대비 규칙입니다.", intro: "버튼·링크·보조 텍스트는 행동 전환에 직접 영향을 줍니다. 여기서 대비가 약하면 사용자는 쉽게 놓치고 이탈합니다." },
  ja: { ...bestContrastPracticesForUiTextEn, title: "ボタン・リンク・UIテキストのコントラスト実践ベストプラクティス", description: "操作要素と小さなUI文字に使える実務向けコントラスト指針を紹介します。", intro: "ボタンやリンク、補助テキストは行動につながる重要要素です。読みにくいと完了率が下がります。" },
  es: { ...bestContrastPracticesForUiTextEn, title: "Mejores prácticas de contraste para botones, enlaces y texto UI", description: "Aplica reglas prácticas de contraste en elementos interactivos y texto pequeño de interfaz.", intro: "Botones, enlaces y texto auxiliar concentran errores de contraste críticos. Si no se leen rápido, las tareas se abandonan." },
  fr: { ...bestContrastPracticesForUiTextEn, title: "Bonnes pratiques de contraste pour boutons, liens et texte UI", description: "Règles pratiques de contraste pour les éléments interactifs et les petits textes d'interface.", intro: "Les boutons, liens et textes d'aide sont les zones où un faible contraste impacte le plus l'action utilisateur." },
  de: { ...bestContrastPracticesForUiTextEn, title: "Beste Kontrast-Praktiken für Buttons, Links und UI-Text", description: "Praktische Kontrastregeln für interaktive Elemente und kleine UI-Texte.", intro: "Buttons, Links und Hilfetexte sind besonders kritisch. Wenn sie schwer lesbar sind, sinkt die Abschlussrate von Aufgaben." }
};

const checkBrandColorsWithoutHurtingAccessibilityEn: GuideLocalizedContent = {
  title: "How to Check Brand Colors Without Hurting Accessibility",
  description: "Keep your brand palette recognizable while making text and UI combinations accessible.",
  intro: "Brand teams and accessibility goals do not need to conflict. You can preserve brand identity and still meet contrast needs by testing usage contexts, not just standalone color swatches.",
  categoryLabel: "Color accessibility",
  useCasesTitle: "Best for",
  useCases: ["Brand refreshes.", "Marketing site redesigns.", "Design token migration projects."],
  closingTitle: "Brand and accessibility can work together",
  closingText: "By defining accessible usage variants, your team can move faster without repeating color debates on every project.",
  relatedToolLabel: "Open Contrast Checker",
  sections: [
    { heading: "Separate brand core colors from UI usage colors", paragraphs: ["Keep master brand colors for identity references.", "Create accessible UI variants for text, buttons, and links where needed."] },
    { heading: "Test combinations, not single swatches", paragraphs: ["A single color cannot pass or fail by itself.", "Always test foreground and background pairs in realistic contexts."] },
    { heading: "Create approved contrast-safe pair sets", paragraphs: ["Document which brand pairings are safe for normal text and which are only for large decorative text.", "This helps non-design teams choose colors correctly."] },
    { heading: "Handle gradients and overlays carefully", paragraphs: ["Text over images or gradients can pass in one area and fail in another.", "Add overlays or solid backing when contrast fluctuates."] },
    { heading: "Document final rules in your design system", paragraphs: ["Publish do/don't examples and token guidance.", "Clear rules reduce accessibility regressions in future campaigns."] }
  ]
};

const checkBrandColorsWithoutHurtingAccessibilityContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: checkBrandColorsWithoutHurtingAccessibilityEn,
  ko: { ...checkBrandColorsWithoutHurtingAccessibilityEn, title: "접근성을 해치지 않고 브랜드 색상을 점검하는 방법", description: "브랜드 정체성은 유지하면서 텍스트/UI 대비 기준을 함께 만족시키는 방법입니다.", intro: "브랜드팀 목표와 접근성 목표는 충돌하지 않습니다. 핵심은 단색 스와치가 아니라 실제 사용 맥락에서 조합을 검증하는 것입니다." },
  ja: { ...checkBrandColorsWithoutHurtingAccessibilityEn, title: "アクセシビリティを損なわずにブランドカラーを確認する方法", description: "ブランドらしさを保ちながら、文字とUIの可読性を確保する実践手順です。", intro: "ブランド表現とアクセシビリティは両立できます。単色ではなく使用コンテキストで組み合わせを検証することが重要です。" },
  es: { ...checkBrandColorsWithoutHurtingAccessibilityEn, title: "Cómo revisar colores de marca sin dañar la accesibilidad", description: "Mantén tu identidad visual mientras garantizas combinaciones de texto y UI accesibles.", intro: "Marca y accesibilidad no tienen por qué chocar. La clave es validar combinaciones en contexto real, no solo muestras aisladas." },
  fr: { ...checkBrandColorsWithoutHurtingAccessibilityEn, title: "Comment vérifier les couleurs de marque sans nuire à l'accessibilité", description: "Conservez l'identité de marque tout en rendant les combinaisons texte/UI accessibles.", intro: "Les objectifs de marque et d'accessibilité peuvent coexister. Il faut tester les usages réels, pas seulement des échantillons isolés." },
  de: { ...checkBrandColorsWithoutHurtingAccessibilityEn, title: "Markenfarben prüfen, ohne die Barrierefreiheit zu verschlechtern", description: "Markenidentität bewahren und trotzdem zugängliche Text-/UI-Farbkombinationen sichern.", intro: "Branding und Accessibility müssen kein Widerspruch sein. Entscheidend ist das Testen realer Farbkombinationen im Nutzungskontext." }
};

const captureWebsitePreviewBeforeSharingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "How to Capture a Website Preview Before Sharing It",
    description: "Use a fast, repeatable workflow to capture a clean website preview before posting links in chat, email, or social.",
    intro: "Before you share a link, a screenshot helps you confirm what people will see first. A quick preview prevents broken layouts, wrong sections, or outdated pages from being shared.",
    categoryLabel: "Website screenshot workflow",
    useCasesTitle: "When this guide is useful",
    useCases: ["Sharing launch updates in Slack or email.", "Sending landing page checks to teammates.", "Preparing social posts with a visual preview."],
    closingTitle: "Share with more confidence",
    closingText: "A 30-second screenshot check reduces follow-up corrections and makes link sharing more reliable.",
    relatedToolLabel: "Open Website Screenshot",
    sections: [
      { heading: "Start with the exact URL", paragraphs: ["Use the final page URL, not a draft link or tracking redirect.", "If the URL is wrong, your preview will mislead everyone reviewing it."] },
      { heading: "Capture the preview before publishing", paragraphs: ["Generate a screenshot and quickly scan key areas such as headline, hero image, and navigation.", "This helps you catch obvious visual issues before your audience sees them."] },
      { heading: "Check mobile-critical content", paragraphs: ["Even with a desktop-style preview, confirm that key text and call-to-action placement still look clear.", "If needed, open the page manually on mobile before broad sharing."] },
      { heading: "Use a simple pre-share checklist", paragraphs: ["A short checklist keeps the process fast and consistent."], bullets: ["Correct URL", "Current page content", "Visible headline and main call to action"] },
      { heading: "Attach the screenshot with context", paragraphs: ["When sharing internally, include one line explaining what changed.", "This gives reviewers enough context without opening the page first."] }
    ]
  },
  ko: { title: "공유 전에 웹사이트 미리보기를 캡처하는 방법", description: "링크를 공유하기 전에 깔끔한 웹페이지 미리보기를 빠르게 캡처하는 실전 흐름입니다.", intro: "링크를 보내기 전에 스크린샷으로 첫 화면을 확인하면 잘못된 섹션, 깨진 레이아웃, 오래된 페이지 공유를 줄일 수 있습니다.", categoryLabel: "웹사이트 스크린샷 워크플로", useCasesTitle: "이럴 때 유용합니다", useCases: ["슬랙/이메일로 출시 소식을 공유할 때", "랜딩 페이지 점검을 팀에 전달할 때", "소셜 게시 전 시각 미리보기를 확인할 때"], closingTitle: "더 확실하게 공유하세요", closingText: "30초 미리보기 점검만으로도 공유 후 수정 요청을 크게 줄일 수 있습니다.", relatedToolLabel: "Website Screenshot 열기", sections: [{ heading: "정확한 URL부터 확인하기", paragraphs: ["최종 페이지 URL을 사용하고, 임시 링크나 리다이렉트 URL은 피하세요.", "URL이 틀리면 검토자에게 잘못된 화면을 보여주게 됩니다."] }, { heading: "게시 전에 미리보기 캡처하기", paragraphs: ["스크린샷을 만든 뒤 제목, 히어로 이미지, 내비게이션을 빠르게 확인하세요.", "공유 전에 눈에 띄는 오류를 먼저 잡을 수 있습니다."] }, { heading: "모바일 핵심 정보도 점검하기", paragraphs: ["데스크톱 기준 미리보기라도 핵심 텍스트와 CTA 가독성은 확인하세요.", "필요하면 실제 모바일에서 한 번 더 열어보세요."] }, { heading: "짧은 공유 전 체크리스트 사용하기", paragraphs: ["간단한 체크리스트만 있어도 매번 같은 품질을 유지할 수 있습니다."], bullets: ["URL 정확성", "최신 콘텐츠 반영", "제목과 주요 CTA 노출 여부"] }, { heading: "맥락 한 줄과 함께 전달하기", paragraphs: ["내부 공유 시 무엇이 바뀌었는지 한 줄 설명을 함께 보내세요.", "검토자가 페이지를 열기 전에 핵심을 파악할 수 있습니다."] }] },
  ja: { title: "共有前にWebサイトプレビューをキャプチャする方法", description: "リンク共有前に、見た目を素早く確認できる実践的なスクリーンショット手順です。", intro: "リンクを送る前にスクリーンショットを確認すると、崩れた表示や古いページの共有を防げます。", categoryLabel: "Webサイトスクリーンショット運用", useCasesTitle: "こんな時に便利", useCases: ["Slackやメールで更新を共有する時", "ランディングページ確認を依頼する時", "SNS投稿前に見え方を確認する時"], closingTitle: "安心して共有するために", closingText: "30秒の事前キャプチャで、共有後の差し戻しを減らせます。", relatedToolLabel: "Website Screenshotを開く", sections: [{ heading: "まず正しいURLを使う", paragraphs: ["下書きURLやリダイレクトではなく、最終公開URLを使います。", "URLが違うとレビュー自体が無意味になります。"] }, { heading: "公開前にプレビューを撮る", paragraphs: ["見出し、ヒーロー画像、ナビゲーションを短時間で確認します。", "共有前に目立つ崩れを見つけやすくなります。"] }, { heading: "モバイルで重要要素を確認", paragraphs: ["デスクトップ中心の確認でも、主要テキストとCTAの見やすさはチェックします。", "必要なら実機で最終確認しましょう。"] }, { heading: "共有前チェックリストを固定する", paragraphs: ["短いチェック項目を決めると運用が安定します。"], bullets: ["URLが正しい", "内容が最新", "見出しとCTAが見える"] }, { heading: "1行コメントを添えて共有", paragraphs: ["社内共有では『何を確認してほしいか』を1行で添えます。", "受け手が素早く判断できます。"] }] },
  es: { title: "Cómo Capturar una Vista Previa de un Sitio Web Antes de Compartirla", description: "Sigue un flujo rápido para capturar una vista previa limpia antes de compartir enlaces en chat, correo o redes.", intro: "Una captura previa te ayuda a validar qué verá la gente primero. Así evitas compartir páginas rotas, secciones equivocadas o contenido desactualizado.", categoryLabel: "Flujo de captura web", useCasesTitle: "Cuándo ayuda esta guía", useCases: ["Compartir lanzamientos por Slack o correo", "Enviar revisiones de landing pages al equipo", "Preparar publicaciones sociales con apoyo visual"], closingTitle: "Comparte con más seguridad", closingText: "Una revisión de 30 segundos evita correcciones después de compartir.", relatedToolLabel: "Abrir Website Screenshot", sections: [{ heading: "Empieza con la URL exacta", paragraphs: ["Usa la URL final publicada, no enlaces de borrador ni redirecciones.", "Si la URL está mal, la vista previa también lo estará."] }, { heading: "Captura antes de publicar", paragraphs: ["Genera la captura y revisa título, imagen principal y navegación.", "Detectarás errores visuales antes de que los vea tu audiencia."] }, { heading: "Valida el contenido clave en móvil", paragraphs: ["Aunque la vista previa sea de escritorio, confirma que texto y CTA se entienden.", "Si hace falta, abre la página en móvil antes de compartir masivamente."] }, { heading: "Usa una checklist breve", paragraphs: ["Una lista corta mantiene el proceso rápido y repetible."], bullets: ["URL correcta", "Contenido actualizado", "Título y CTA visibles"] }, { heading: "Comparte la captura con contexto", paragraphs: ["Añade una línea explicando qué cambió.", "Así el equipo entiende el objetivo sin abrir de inmediato la página."] }] },
  fr: { title: "Comment Capturer un Aperçu de Site Web Avant de le Partager", description: "Appliquez un workflow rapide pour capturer un aperçu propre avant de partager un lien.", intro: "Une capture d'aperçu permet de vérifier ce que les personnes verront en premier. Cela évite de partager une page cassée ou obsolète.", categoryLabel: "Workflow de capture web", useCasesTitle: "Quand ce guide est utile", useCases: ["Partager une mise en ligne dans Slack ou par email", "Envoyer un contrôle de landing page à l'équipe", "Préparer un post social avec aperçu visuel"], closingTitle: "Partagez avec plus de fiabilité", closingText: "30 secondes de vérification réduisent les retours et corrections après partage.", relatedToolLabel: "Ouvrir Website Screenshot", sections: [{ heading: "Commencez par la bonne URL", paragraphs: ["Utilisez l'URL finale publiée, pas un lien de brouillon ni une redirection.", "Une mauvaise URL rend la validation inutile."] }, { heading: "Capturez avant diffusion", paragraphs: ["Vérifiez rapidement le titre, l'image principale et la navigation.", "Vous repérez les problèmes visuels avant votre audience."] }, { heading: "Validez les éléments clés sur mobile", paragraphs: ["Même avec un aperçu desktop, contrôlez lisibilité et CTA.", "Faites un check mobile manuel si nécessaire."] }, { heading: "Gardez une mini check-list", paragraphs: ["Une check-list courte rend le process constant."], bullets: ["URL correcte", "Contenu à jour", "Titre et CTA visibles"] }, { heading: "Ajoutez une phrase de contexte", paragraphs: ["En interne, précisez en une ligne ce qui a changé.", "Le relecteur comprend plus vite ce qu'il doit valider."] }] },
  de: { title: "So erstellst du vor dem Teilen eine Website-Vorschau", description: "Nutze einen schnellen Ablauf, um vor dem Teilen eine saubere Website-Vorschau zu erfassen.", intro: "Ein Screenshot vor dem Teilen zeigt dir, was andere zuerst sehen. So vermeidest du falsche Abschnitte, Layoutfehler oder veraltete Seiten.", categoryLabel: "Website-Screenshot-Workflow", useCasesTitle: "Wann das hilfreich ist", useCases: ["Launch-Updates in Slack oder E-Mail teilen", "Landingpage-Checks ans Team senden", "Social-Posts mit Bildvorschau vorbereiten"], closingTitle: "Zuverlässiger teilen", closingText: "Ein 30-Sekunden-Check reduziert Korrekturen nach dem Teilen deutlich.", relatedToolLabel: "Website Screenshot öffnen", sections: [{ heading: "Mit der exakten URL starten", paragraphs: ["Nutze die finale Seiten-URL, keine Entwurfs- oder Redirect-Links.", "Eine falsche URL führt zu einer falschen Vorschau."] }, { heading: "Vorschau vor dem Veröffentlichen erfassen", paragraphs: ["Prüfe Überschrift, Hero-Bild und Navigation in wenigen Sekunden.", "So findest du sichtbare Fehler frühzeitig."] }, { heading: "Mobile-relevante Inhalte prüfen", paragraphs: ["Auch bei Desktop-Vorschau sollten Text und CTA klar erkennbar sein.", "Bei Bedarf zusätzlich mobil manuell prüfen."] }, { heading: "Kurze Pre-Share-Checkliste verwenden", paragraphs: ["Eine kleine Liste hält den Ablauf konstant."], bullets: ["Korrekte URL", "Aktueller Seitenstand", "Überschrift und CTA sichtbar"] }, { heading: "Screenshot mit kurzem Kontext teilen", paragraphs: ["Ergänze intern einen Satz, was sich geändert hat.", "So verstehen Reviewer den Fokus sofort."] }] }
};

const useWebsiteScreenshotsInClientFeedbackContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "Best Ways to Use Website Screenshots in Client Feedback",
    description: "Give clearer client feedback by using screenshots to anchor comments, priorities, and revision requests.",
    intro: "Client feedback is faster when everyone comments on the same visual reference. Website screenshots reduce ambiguity and make revisions easier to prioritize.",
    categoryLabel: "Client feedback workflow",
    useCasesTitle: "Where this works best",
    useCases: ["Weekly design review updates.", "Landing page revision rounds.", "Stakeholder sign-off discussions."],
    closingTitle: "Make feedback specific",
    closingText: "Screenshot-based comments save time because they turn vague opinions into concrete edits.",
    relatedToolLabel: "Open Website Screenshot",
    sections: [
      { heading: "Capture the page state you are discussing", paragraphs: ["Take a screenshot that matches the exact version under review.", "Avoid feedback on outdated drafts to prevent rework."] },
      { heading: "Mark one issue per comment", paragraphs: ["Keep each comment focused on a single problem or suggestion.", "This makes action items easier for designers and developers to track."] },
      { heading: "Prioritize feedback with simple labels", paragraphs: ["Use a lightweight priority format to reduce confusion."], bullets: ["High: blocks launch", "Medium: should improve before publish", "Low: optional polish"] },
      { heading: "Pair visuals with expected outcomes", paragraphs: ["Do not only say what is wrong; explain what better looks like.", "For example, request clearer hierarchy, stronger CTA visibility, or cleaner spacing."] },
      { heading: "Close each round with a checklist", paragraphs: ["Summarize approved items and open issues at the end of each feedback cycle.", "This keeps client communication aligned and reduces duplicate comments."] }
    ]
  },
  ko: { title: "클라이언트 피드백에서 웹사이트 스크린샷을 효과적으로 활용하는 방법", description: "스크린샷을 기준점으로 사용해 피드백을 더 명확하고 실행 가능하게 만드는 방법입니다.", intro: "같은 화면을 기준으로 의견을 주고받으면 피드백 속도와 정확도가 올라갑니다. 스크린샷은 모호한 요청을 구체적인 수정 항목으로 바꿔줍니다.", categoryLabel: "클라이언트 피드백 워크플로", useCasesTitle: "특히 유용한 상황", useCases: ["주간 디자인 리뷰", "랜딩 페이지 수정 라운드", "승인 전 최종 점검 회의"], closingTitle: "피드백을 구체적으로 만드세요", closingText: "스크린샷 기반 코멘트는 의견 충돌을 줄이고 수정 우선순위를 빠르게 정리해 줍니다.", relatedToolLabel: "Website Screenshot 열기", sections: [{ heading: "논의 중인 페이지 상태를 캡처하기", paragraphs: ["검토 대상과 같은 버전의 화면을 캡처하세요.", "오래된 화면에 피드백을 달면 재작업이 늘어납니다."] }, { heading: "코멘트는 한 이슈씩 분리하기", paragraphs: ["한 코멘트에 한 문제만 담아 작업 지시를 명확히 하세요.", "디자이너와 개발자가 추적하기 쉬워집니다."] }, { heading: "우선순위를 짧게 라벨링하기", paragraphs: ["간단한 우선순위 라벨로 혼선을 줄이세요."], bullets: ["High: 출시 차단 이슈", "Medium: 출시 전 개선 권장", "Low: 선택적 디테일 개선"] }, { heading: "화면 지적 + 기대 결과 함께 전달하기", paragraphs: ["문제만 지적하지 말고 원하는 결과를 함께 적으세요.", "예: CTA 가시성 강화, 정보 위계 개선, 간격 정리"] }, { heading: "라운드 종료 시 체크리스트로 정리하기", paragraphs: ["각 라운드마다 완료/미해결 항목을 요약하세요.", "중복 코멘트를 줄이고 커뮤니케이션을 정리할 수 있습니다."] }] },
  ja: { title: "クライアントフィードバックでWebサイトスクリーンショットを活用するベストな方法", description: "スクリーンショットを基準にして、クライアントの修正依頼を明確に整理する方法を解説します。", intro: "同じ画面を見ながらコメントすると、認識ズレが減って修正の優先順位が決めやすくなります。", categoryLabel: "クライアントレビュー運用", useCasesTitle: "効果が高い場面", useCases: ["週次デザインレビュー", "LP修正ラウンド", "承認前の最終確認"], closingTitle: "曖昧な指示をなくす", closingText: "スクリーンショットに基づくコメントは、主観的な意見を実行可能な修正指示に変えます。", relatedToolLabel: "Website Screenshotを開く", sections: [{ heading: "レビュー対象の状態を正確に撮る", paragraphs: ["議論している版と同じページ状態をキャプチャします。", "古い版へのコメントは手戻りの原因です。"] }, { heading: "コメントは1指摘1テーマ", paragraphs: ["1つのコメントに複数課題を詰め込まないようにします。", "担当者が着手しやすくなります。"] }, { heading: "優先度ラベルを統一する", paragraphs: ["短いラベルで判断基準を揃えます。"], bullets: ["High: 公開を止める問題", "Medium: 公開前に改善したい", "Low: 任意の仕上げ"] }, { heading: "問題点だけでなく期待値を書く", paragraphs: ["『何が悪いか』だけでなく『どうなれば良いか』を添えます。", "例: CTAの視認性向上、情報階層の明確化、余白調整"] }, { heading: "各ラウンドをチェックリストで締める", paragraphs: ["完了項目と保留項目を毎回まとめます。", "重複コメントと認識ズレを減らせます。"] }] },
  es: { title: "Mejores Formas de Usar Capturas de Sitios Web en Feedback de Clientes", description: "Usa capturas para dar feedback más claro, priorizable y fácil de ejecutar por el equipo.", intro: "El feedback va más rápido cuando todos comentan sobre la misma referencia visual. Las capturas reducen ambigüedad y aceleran revisiones.", categoryLabel: "Flujo de feedback con clientes", useCasesTitle: "Dónde funciona mejor", useCases: ["Revisiones semanales de diseño", "Rondas de cambios en landings", "Aprobaciones con stakeholders"], closingTitle: "Haz el feedback más específico", closingText: "Comentar sobre capturas convierte opiniones vagas en tareas concretas.", relatedToolLabel: "Abrir Website Screenshot", sections: [{ heading: "Captura el estado exacto de la página", paragraphs: ["Asegúrate de capturar la versión correcta en revisión.", "Comentar sobre una versión antigua genera retrabajo."] }, { heading: "Un problema por comentario", paragraphs: ["Mantén cada comentario enfocado en un solo punto.", "Así diseño y desarrollo pueden ejecutar más rápido."] }, { heading: "Prioriza con etiquetas simples", paragraphs: ["Una clasificación corta evita confusiones."], bullets: ["Alta: bloquea lanzamiento", "Media: mejorar antes de publicar", "Baja: mejora opcional"] }, { heading: "Acompaña la observación con objetivo", paragraphs: ["No solo digas qué está mal; indica el resultado esperado.", "Ejemplo: CTA más visible, jerarquía más clara, mejor espaciado."] }, { heading: "Cierra cada ronda con checklist", paragraphs: ["Resume qué quedó aprobado y qué sigue abierto.", "Esto mantiene alineada la comunicación con el cliente."] }] },
  fr: { title: "Les Meilleures Façons d'Utiliser des Captures de Site Web dans les Retours Client", description: "Structurez les retours client avec des captures pour des demandes plus claires et mieux priorisées.", intro: "Le feedback est plus rapide quand tout le monde commente la même référence visuelle. Les captures réduisent les ambiguïtés.", categoryLabel: "Workflow de feedback client", useCasesTitle: "Situations idéales", useCases: ["Revues design hebdomadaires", "Cycles de correction de landing page", "Échanges de validation avec décideurs"], closingTitle: "Rendre le feedback actionnable", closingText: "Les commentaires basés sur captures transforment les avis flous en actions concrètes.", relatedToolLabel: "Ouvrir Website Screenshot", sections: [{ heading: "Capturer la bonne version de page", paragraphs: ["Prenez une capture correspondant exactement à la version discutée.", "Commenter une ancienne version crée du travail inutile."] }, { heading: "Un commentaire = un sujet", paragraphs: ["Gardez chaque commentaire centré sur un seul point.", "Le suivi devient plus simple pour l'équipe."] }, { heading: "Ajouter des niveaux de priorité", paragraphs: ["Un format court de priorité clarifie les attentes."], bullets: ["High : bloque la mise en ligne", "Medium : à améliorer avant publication", "Low : amélioration facultative"] }, { heading: "Associer constat et résultat attendu", paragraphs: ["N'indiquez pas seulement le problème, précisez le résultat voulu.", "Par exemple: CTA plus visible, meilleure hiérarchie, espacement plus propre."] }, { heading: "Clôturer chaque cycle avec une synthèse", paragraphs: ["Listez les éléments validés et les points ouverts.", "Vous limitez les doublons et les incompréhensions."] }] },
  de: { title: "Die besten Wege, Website-Screenshots im Kundenfeedback zu nutzen", description: "Nutze Screenshots, um Kundenfeedback klarer, priorisiert und umsetzbar zu machen.", intro: "Feedback wird schneller, wenn alle dieselbe visuelle Grundlage kommentieren. Screenshots reduzieren Missverständnisse und erleichtern Revisionen.", categoryLabel: "Kundenfeedback-Workflow", useCasesTitle: "Besonders nützlich bei", useCases: ["Wöchentlichen Design-Reviews", "Landingpage-Überarbeitungen", "Freigaberunden mit Stakeholdern"], closingTitle: "Feedback konkret machen", closingText: "Screenshot-basierte Kommentare sparen Zeit, weil sie vage Aussagen in klare Aufgaben übersetzen.", relatedToolLabel: "Website Screenshot öffnen", sections: [{ heading: "Den besprochenen Seitenstand erfassen", paragraphs: ["Erstelle den Screenshot von genau der Version, die geprüft wird.", "Feedback auf alten Versionen führt zu unnötiger Nacharbeit."] }, { heading: "Pro Kommentar nur ein Thema", paragraphs: ["Halte jeden Hinweis auf ein Problem oder einen Wunsch fokussiert.", "So kann das Team schneller umsetzen."] }, { heading: "Mit klaren Prioritäten arbeiten", paragraphs: ["Einfache Prioritätslabels schaffen Orientierung."], bullets: ["High: blockiert den Launch", "Medium: sollte vor Veröffentlichung verbessert werden", "Low: optionales Feintuning"] }, { heading: "Beobachtung mit Zielbild kombinieren", paragraphs: ["Nicht nur Fehler nennen, sondern gewünschtes Ergebnis beschreiben.", "Zum Beispiel: CTA besser sichtbar, klarere Hierarchie, sauberere Abstände."] }, { heading: "Jede Runde mit Checkliste abschließen", paragraphs: ["Fasse erledigte und offene Punkte am Ende zusammen.", "Das reduziert doppelte Kommentare und hält alle synchron."] }] }
};

const fullPageVsCroppedWebsiteScreenshotContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: {
    title: "When a Full Page Screenshot Is Better Than a Cropped Screenshot",
    description: "Choose full-page or cropped website screenshots based on your communication goal, review context, and audience.",
    intro: "Both screenshot styles are useful. The key is matching format to purpose: full-page for flow context, cropped for focused discussion.",
    categoryLabel: "Screenshot decision workflow",
    useCasesTitle: "Use this when you need to decide format",
    useCases: ["Design review discussions.", "Client update reports.", "Bug triage and QA handoff."],
    closingTitle: "Pick the format that answers the question",
    closingText: "If your reader needs page context, use full page. If they need one exact issue, use a crop.",
    relatedToolLabel: "Open Website Screenshot",
    sections: [
      { heading: "Use full-page screenshots for page flow", paragraphs: ["Full-page captures show structure from top to bottom.", "They are useful for discussing layout rhythm, section order, and long-form landing pages."] },
      { heading: "Use cropped screenshots for specific issues", paragraphs: ["Crops remove noise and direct attention to one element.", "They work well for copy edits, button states, and spacing fixes."] },
      { heading: "Match format to stakeholder needs", paragraphs: ["Executives often need quick context, while implementers need precise detail.", "You can share both versions when decisions and execution happen in different groups."] },
      { heading: "Avoid common format mistakes", paragraphs: ["The wrong format can slow feedback loops."], bullets: ["Overly long full pages with no annotations", "Crops that hide surrounding context", "No note explaining why this view matters"] },
      { heading: "Create a simple team rule", paragraphs: ["Define when to send full-page, cropped, or both.", "A shared rule keeps communication consistent across projects."] }
    ]
  },
  ko: { title: "전체 페이지 스크린샷이 크롭 스크린샷보다 나은 경우", description: "커뮤니케이션 목적에 맞게 전체 페이지 캡처와 크롭 캡처를 선택하는 실전 기준입니다.", intro: "두 방식 모두 유용합니다. 핵심은 목적에 맞추는 것입니다. 흐름 확인은 전체 페이지, 세부 수정은 크롭이 유리합니다.", categoryLabel: "스크린샷 선택 워크플로", useCasesTitle: "형식을 결정해야 할 때", useCases: ["디자인 리뷰", "클라이언트 업데이트", "버그 triage 및 QA 전달"], closingTitle: "질문에 맞는 형식을 고르세요", closingText: "페이지 맥락이 필요하면 전체 페이지, 특정 문제만 다루면 크롭을 선택하세요.", relatedToolLabel: "Website Screenshot 열기", sections: [{ heading: "페이지 흐름 점검은 전체 페이지", paragraphs: ["전체 캡처는 상단부터 하단까지 구조를 보여줍니다.", "섹션 순서, 길이감, 스토리 흐름 논의에 적합합니다."] }, { heading: "정확한 이슈 전달은 크롭", paragraphs: ["크롭은 불필요한 정보를 줄여 한 요소에 집중하게 합니다.", "문구 수정, 버튼 상태, 간격 문제 전달에 효과적입니다."] }, { heading: "이해관계자별로 형식 맞추기", paragraphs: ["의사결정자는 맥락을, 실행 담당자는 디테일을 더 필요로 합니다.", "필요하면 두 형식을 함께 제공하세요."] }, { heading: "형식 선택 실수 피하기", paragraphs: ["형식이 맞지 않으면 피드백 속도가 느려집니다."], bullets: ["설명 없는 긴 전체 페이지", "주변 맥락이 사라진 과도한 크롭", "이 화면을 보낸 이유 미기재"] }, { heading: "팀 공통 규칙 만들기", paragraphs: ["언제 전체/크롭/둘 다 보내는지 기준을 정하세요.", "프로젝트 간 커뮤니케이션 품질이 안정됩니다."] }] },
  ja: { title: "フルページスクリーンショットがクロップより適している場面", description: "目的に合わせてフルページとクロップを使い分ける実践的な判断基準です。", intro: "どちらの形式も有効です。ページ全体の流れ確認はフルページ、特定箇所の指摘はクロップが向いています。", categoryLabel: "スクリーンショット判断フロー", useCasesTitle: "形式判断に迷うとき", useCases: ["デザインレビュー", "クライアント報告", "不具合共有とQA引き継ぎ"], closingTitle: "目的に答える形式を選ぶ", closingText: "文脈が必要ならフルページ、1点修正ならクロップを使いましょう。", relatedToolLabel: "Website Screenshotを開く", sections: [{ heading: "ページ構成確認はフルページ", paragraphs: ["フルページは上から下までの情報構造を見せられます。", "セクション順序やLP全体の流れ確認に適しています。"] }, { heading: "ピンポイント指摘はクロップ", paragraphs: ["クロップはノイズを減らし、1要素に集中させます。", "文言修正、ボタン状態、余白調整の共有に向いています。"] }, { heading: "関係者に合わせて形式を選ぶ", paragraphs: ["意思決定者は文脈、実装担当は詳細を重視します。", "必要なら両方を併用しましょう。"] }, { heading: "よくある失敗を避ける", paragraphs: ["形式選択ミスはレビュー速度を落とします。"], bullets: ["注釈のない長すぎるフルページ", "周辺情報が消えた過度なクロップ", "この画像の意図説明がない"] }, { heading: "チームルールを作る", paragraphs: ["フルページ/クロップ/併用の基準を決めます。", "案件ごとの伝達品質が安定します。"] }] },
  es: { title: "Cuándo una Captura de Página Completa es Mejor que una Captura Recortada", description: "Elige entre captura completa o recortada según objetivo, contexto de revisión y audiencia.", intro: "Ambos formatos sirven. La clave es el propósito: completa para contexto de flujo, recortada para discutir un punto concreto.", categoryLabel: "Flujo de decisión de capturas", useCasesTitle: "Útil cuando debes elegir formato", useCases: ["Revisiones de diseño", "Reportes a clientes", "Triage de bugs y handoff QA"], closingTitle: "Elige el formato que responde la pregunta", closingText: "Si necesitas contexto de página, usa captura completa. Si necesitas foco, usa recorte.", relatedToolLabel: "Abrir Website Screenshot", sections: [{ heading: "Usa página completa para ver el flujo", paragraphs: ["La captura completa muestra estructura de arriba abajo.", "Es ideal para revisar orden de secciones y narrativa de landing larga."] }, { heading: "Usa recorte para problemas puntuales", paragraphs: ["El recorte elimina ruido y centra atención.", "Funciona para cambios de copy, estados de botón y ajustes de espaciado."] }, { heading: "Ajusta formato al stakeholder", paragraphs: ["Dirección suele necesitar contexto; ejecución, detalle.", "Puedes compartir ambos formatos cuando participan perfiles distintos."] }, { heading: "Evita errores comunes de formato", paragraphs: ["El formato incorrecto retrasa el feedback."], bullets: ["Capturas completas muy largas sin notas", "Recortes sin contexto alrededor", "Sin explicación de por qué importa esa vista"] }, { heading: "Define una regla simple de equipo", paragraphs: ["Acordad cuándo usar completa, recorte o ambos.", "Una regla común mejora consistencia entre proyectos."] }] },
  fr: { title: "Quand une Capture Pleine Page est Préférable à une Capture Recadrée", description: "Choisissez entre capture pleine page et recadrée selon l'objectif, le contexte de revue et le public.", intro: "Les deux formats sont utiles. Pleine page pour le contexte global, recadrée pour un point précis.", categoryLabel: "Workflow de choix de capture", useCasesTitle: "À utiliser pour choisir un format", useCases: ["Revues design", "Comptes rendus client", "Triage bug et transmission QA"], closingTitle: "Choisissez le format qui répond au besoin", closingText: "Besoin de contexte global: pleine page. Besoin de précision: recadrée.", relatedToolLabel: "Ouvrir Website Screenshot", sections: [{ heading: "Pleine page pour la lecture du flux", paragraphs: ["La pleine page montre la structure du haut vers le bas.", "Pratique pour l'ordre des sections et les pages longues."] }, { heading: "Recadrée pour un problème ciblé", paragraphs: ["Le recadrage retire le bruit visuel et focalise l'attention.", "Adapté aux corrections de texte, d'état de bouton ou d'espacement."] }, { heading: "Adapter au profil du lecteur", paragraphs: ["Les décideurs veulent du contexte, les exécutants du détail.", "Partagez les deux formats si nécessaire."] }, { heading: "Éviter les erreurs de format", paragraphs: ["Un mauvais format ralentit le cycle de feedback."], bullets: ["Pleine page trop longue sans annotation", "Recadrage qui masque le contexte", "Aucune explication de l'objectif de la vue"] }, { heading: "Fixer une règle d'équipe", paragraphs: ["Définissez quand envoyer pleine page, recadrée ou les deux.", "Vous gagnez en cohérence sur tous les projets."] }] },
  de: { title: "Wann ein Full-Page-Screenshot besser ist als ein Zuschnitt", description: "Wähle Full-Page oder Crop-Screenshot je nach Ziel, Review-Kontext und Zielgruppe.", intro: "Beide Formate sind nützlich. Full-Page für Gesamtzusammenhang, Crop für punktgenaue Diskussion.", categoryLabel: "Screenshot-Entscheidungsworkflow", useCasesTitle: "Hilfreich bei der Formatwahl", useCases: ["Design-Reviews", "Kunden-Updates", "Bug-Triage und QA-Handover"], closingTitle: "Format nach Fragestellung wählen", closingText: "Für Seitenkontext: Full-Page. Für ein konkretes Problem: Crop.", relatedToolLabel: "Website Screenshot öffnen", sections: [{ heading: "Full-Page für Seitenfluss nutzen", paragraphs: ["Full-Page zeigt die Struktur von oben bis unten.", "Ideal für Abschnittsreihenfolge und lange Landingpages."] }, { heading: "Crop für konkrete Probleme nutzen", paragraphs: ["Crops reduzieren Rauschen und fokussieren auf ein Element.", "Gut für Copy-Änderungen, Button-Zustände und Spacing-Fixes."] }, { heading: "Format auf Stakeholder abstimmen", paragraphs: ["Entscheider brauchen oft Kontext, Umsetzende präzise Details.", "Wenn nötig beide Formate teilen."] }, { heading: "Typische Fehler vermeiden", paragraphs: ["Falsches Format verlangsamt Feedback."], bullets: ["Zu lange Full-Page ohne Hinweise", "Crop ohne Umgebungs-Kontext", "Keine Notiz, warum die Ansicht wichtig ist"] }, { heading: "Einfache Teamregel definieren", paragraphs: ["Legt fest, wann Full-Page, Crop oder beides genutzt wird.", "So bleibt Kommunikation projektübergreifend konsistent."] }] }
};

const pickWebsiteColorsMoreConfidentlyEn: GuideLocalizedContent = {
  title: "How to Pick Website Colors More Confidently",
  description: "Use a practical workflow to choose web colors with fewer second guesses and cleaner handoff to development.",
  intro: "Picking colors feels hard when every option looks close enough. A simple workflow helps you stop random tweaking and make clearer decisions faster.",
  categoryLabel: "Color workflow",
  useCasesTitle: "When this guide helps most",
  useCases: [
    "Starting a new landing page or redesign.",
    "Refining an existing brand color into usable UI tones.",
    "Aligning designer and developer color handoff."
  ],
  closingTitle: "Confidence comes from a repeatable process",
  closingText: "You do not need perfect color theory to work faster. You need clear checks and consistent decisions from first pick to final UI.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    {
      heading: "Start with one anchor color",
      paragraphs: [
        "Choose one primary color first instead of trying to solve your full palette at once.",
        "This anchor becomes the reference for buttons, links, and emphasis styles."
      ]
    },
    {
      heading: "Test color on real interface surfaces",
      paragraphs: [
        "A color can look great as a swatch but fail in a real card, hero section, or form.",
        "Preview your color on light and dark surfaces before deciding."
      ]
    },
    {
      heading: "Create two practical variants early",
      paragraphs: ["Do not keep only one color value. Prepare a lighter and darker option for UI states."],
      bullets: ["Default state color", "Hover/focus variant", "Muted or background-support variant"]
    },
    {
      heading: "Compare formats only when needed",
      paragraphs: [
        "HEX is usually enough for quick picking and handoff.",
        "Use RGB or HSL when your workflow needs numeric control or easier adjustments."
      ]
    },
    {
      heading: "Save decisions in a small color list",
      paragraphs: [
        "Document final values in one place so teammates do not re-pick similar colors every sprint.",
        "A short shared color list improves consistency immediately."
      ]
    }
  ]
};

const pickWebsiteColorsMoreConfidentlyContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: pickWebsiteColorsMoreConfidentlyEn,
  ko: { ...pickWebsiteColorsMoreConfidentlyEn, title: "웹사이트 색상을 더 자신 있게 고르는 방법", description: "색상 선택에서 망설임을 줄이고 개발 전달까지 깔끔하게 이어지는 실전 워크플로입니다.", intro: "비슷한 색이 많아 보이면 결정이 어려워집니다. 간단한 순서를 정하면 불필요한 수정 없이 더 빠르게 선택할 수 있습니다." },
  ja: { ...pickWebsiteColorsMoreConfidentlyEn, title: "Webサイト配色をもっと自信を持って選ぶ方法", description: "迷いを減らし、実装までスムーズにつなげる実践的な配色ワークフローです。", intro: "色選びが難しいのは選択肢が多いからです。手順を固定すると、不要な微調整を減らして判断が速くなります。" },
  es: { ...pickWebsiteColorsMoreConfidentlyEn, title: "Cómo Elegir Colores Web con Más Confianza", description: "Aplica un flujo práctico para elegir colores con menos dudas y mejor consistencia entre diseño y desarrollo.", intro: "Elegir colores se vuelve difícil cuando todo parece casi igual. Un flujo simple te ayuda a decidir más rápido y con menos cambios." },
  fr: { ...pickWebsiteColorsMoreConfidentlyEn, title: "Comment Choisir les Couleurs d'un Site avec Plus d'Assurance", description: "Suivez un workflow pratique pour choisir des couleurs web plus vite et avec moins d'hésitation.", intro: "Le choix des couleurs devient flou quand tout se ressemble. Un processus simple permet de décider plus clairement et plus vite." },
  de: { ...pickWebsiteColorsMoreConfidentlyEn, title: "Website-Farben sicherer auswählen", description: "Ein praxisnaher Ablauf, um Webfarben mit weniger Unsicherheit und sauberem Dev-Handoff zu wählen.", intro: "Farbauswahl ist schwer, wenn viele Optionen ähnlich wirken. Mit einem klaren Ablauf triffst du schneller bessere Entscheidungen." }
};

const whenToUseHexRgbOrHslEn: GuideLocalizedContent = {
  title: "When to Use HEX, RGB, or HSL in Real Design Work",
  description: "Choose the right color format for the task so your design and development workflow stays faster and less error-prone.",
  intro: "HEX, RGB, and HSL describe the same color in different ways. The best choice depends on your task, not on which format is 'better'.",
  categoryLabel: "Color workflow",
  useCasesTitle: "Where format choice matters",
  useCases: [
    "Writing CSS quickly during implementation.",
    "Adjusting lightness and saturation in design iteration.",
    "Copying values between design files and code."
  ],
  closingTitle: "Use the format that reduces friction",
  closingText: "Most teams use multiple formats. What matters is choosing the one that makes each step clearer and easier to maintain.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    {
      heading: "Use HEX for fast copy-and-paste workflows",
      paragraphs: [
        "HEX is compact and common in UI handoff notes.",
        "It works well when you mostly pick a fixed color and move on."
      ]
    },
    {
      heading: "Use RGB when channels matter",
      paragraphs: [
        "RGB is useful when you need clear red/green/blue channel values.",
        "It is also convenient when working with alpha transparency in rgba() patterns."
      ]
    },
    {
      heading: "Use HSL when adjusting color behavior",
      paragraphs: [
        "HSL makes it easier to tweak hue, saturation, and lightness separately.",
        "This is helpful when creating hover states or theme variants."
      ]
    },
    {
      heading: "Avoid format mixing without a rule",
      paragraphs: ["Define a simple team convention so specs remain readable and consistent."],
      bullets: ["Design documentation default format", "Development default format", "When conversion is required"]
    },
    {
      heading: "Always verify the final rendered color",
      paragraphs: [
        "Even if the numbers match, context can change perception.",
        "Check the color in actual UI before final approval."
      ]
    }
  ]
};

const whenToUseHexRgbOrHslContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whenToUseHexRgbOrHslEn,
  ko: { ...whenToUseHexRgbOrHslEn, title: "실무 디자인에서 HEX, RGB, HSL을 언제 써야 할까", description: "작업 목적에 맞는 색상 포맷을 골라 디자인-개발 흐름을 더 빠르고 안정적으로 유지하세요.", intro: "HEX, RGB, HSL은 같은 색을 다른 방식으로 표현합니다. 정답 포맷이 아니라 상황에 맞는 선택이 중요합니다." },
  ja: { ...whenToUseHexRgbOrHslEn, title: "実務デザインでHEX・RGB・HSLを使い分けるタイミング", description: "作業内容に合う形式を選び、デザインと実装の連携をスムーズにします。", intro: "HEX・RGB・HSLは同じ色の表現方法です。どれが優れているかより、用途に合うかで選びましょう。" },
  es: { ...whenToUseHexRgbOrHslEn, title: "Cuándo Usar HEX, RGB o HSL en Trabajo Real de Diseño", description: "Elige el formato correcto según la tarea para evitar errores y acelerar el flujo entre diseño y desarrollo.", intro: "HEX, RGB y HSL representan el mismo color de formas distintas. La clave es elegir según el contexto." },
  fr: { ...whenToUseHexRgbOrHslEn, title: "Quand Utiliser HEX, RGB ou HSL en Design Réel", description: "Choisissez le bon format selon la tâche pour fluidifier le workflow design-développement.", intro: "HEX, RGB et HSL décrivent la même couleur différemment. Le meilleur format dépend surtout de l'usage." },
  de: { ...whenToUseHexRgbOrHslEn, title: "Wann HEX, RGB oder HSL in der Praxis sinnvoll ist", description: "Wähle das passende Farbformat je Aufgabe, damit Design- und Entwicklungsabläufe reibungslos bleiben.", intro: "HEX, RGB und HSL beschreiben dieselbe Farbe auf unterschiedliche Weise. Entscheidend ist der Einsatzzweck." }
};

const checkColorCombinationBeforeUsingEn: GuideLocalizedContent = {
  title: "How to Check a Color Combination Before Using It in UI",
  description: "Validate color combinations quickly before implementation so your UI stays readable, consistent, and easier to approve.",
  intro: "A color pair that looks fine in isolation can fail once text, spacing, and component states are involved. A short pre-check prevents rework.",
  categoryLabel: "Color workflow",
  useCasesTitle: "When to run this check",
  useCases: [
    "Before shipping new button or alert styles.",
    "Before adopting brand colors in body text or labels.",
    "During final QA for a redesign."
  ],
  closingTitle: "Check combinations before they become expensive",
  closingText: "A few minutes of color validation before implementation is faster than fixing inconsistent UI after release.",
  relatedToolLabel: "Open HTML Color Picker",
  sections: [
    {
      heading: "Test the exact foreground-background pair",
      paragraphs: [
        "Always evaluate colors as a pair, not as separate swatches.",
        "The same text color can pass on one background and fail on another."
      ]
    },
    {
      heading: "Preview combinations in real components",
      paragraphs: [
        "Check buttons, badges, cards, and form hints using the real color pairing.",
        "This shows whether hierarchy and readability still hold."
      ]
    },
    {
      heading: "Check multiple UI states early",
      paragraphs: ["Do not validate only the default state."],
      bullets: ["Default", "Hover/focus", "Disabled or subtle state"]
    },
    {
      heading: "Compare with nearby colors in the same screen",
      paragraphs: [
        "A pair can be readable but still look disconnected from surrounding UI colors.",
        "Quickly compare it against adjacent elements before finalizing."
      ]
    },
    {
      heading: "Save approved combinations as reusable tokens",
      paragraphs: [
        "Once approved, store the pair in your style guide or token set.",
        "This prevents accidental drift when new screens are added."
      ]
    }
  ]
};

const checkColorCombinationBeforeUsingContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: checkColorCombinationBeforeUsingEn,
  ko: { ...checkColorCombinationBeforeUsingEn, title: "UI에 쓰기 전에 색상 조합을 점검하는 방법", description: "개발 전에 색상 조합을 빠르게 검증해 가독성과 일관성을 높이는 방법입니다.", intro: "단독으로 괜찮아 보이는 색도 실제 UI 조합에서는 문제를 만들 수 있습니다. 짧은 사전 점검이 재작업을 줄여줍니다." },
  ja: { ...checkColorCombinationBeforeUsingEn, title: "UIに使う前に色の組み合わせを確認する方法", description: "実装前に配色ペアを手早く検証し、読みやすさと一貫性を保つための手順です。", intro: "単体では良く見える色でも、実際のUIでは読みにくくなることがあります。事前チェックで手戻りを減らせます。" },
  es: { ...checkColorCombinationBeforeUsingEn, title: "Cómo Revisar una Combinación de Color Antes de Usarla en UI", description: "Valida combinaciones de color antes de implementar para mejorar legibilidad y consistencia visual.", intro: "Una pareja de colores puede verse bien aislada pero fallar en componentes reales. Un chequeo breve evita retrabajo." },
  fr: { ...checkColorCombinationBeforeUsingEn, title: "Comment Vérifier une Combinaison de Couleurs Avant de l'Utiliser en UI", description: "Validez rapidement vos combinaisons avant l'implémentation pour garder une UI lisible et cohérente.", intro: "Une combinaison peut sembler correcte seule mais poser problème en contexte réel. Un contrôle rapide évite des retouches coûteuses." },
  de: { ...checkColorCombinationBeforeUsingEn, title: "Farbkombination vor dem Einsatz in UI prüfen", description: "Prüfe Farbkombinationen vor der Umsetzung, damit deine UI lesbar und konsistent bleibt.", intro: "Eine Farbkombination kann isoliert gut wirken, im UI-Kontext aber scheitern. Ein kurzer Vorab-Check spart Nacharbeit." }
};

const gradientGeneratorGuideEn: GuideLocalizedContent = {
  title: "Gradient Generator Guide for Fast CSS Background Decisions",
  description: "Use a simple gradient workflow to move from idea to production-ready CSS without overdesigning.",
  intro: "A gradient generator is most useful when you need a practical background choice quickly, not when you want endless experimentation.",
  categoryLabel: "Gradient workflow",
  useCasesTitle: "Practical use cases",
  useCases: ["Landing page hero backgrounds.", "Section dividers with subtle depth.", "CTA blocks that need clearer visual focus."],
  closingTitle: "Use gradients as support, not decoration",
  closingText: "Start with clarity, test quickly, then ship a gradient that helps the layout instead of competing with it.",
  relatedToolLabel: "Open Gradient Generator",
  sections: [
    { heading: "Start with one clear UI goal", paragraphs: ["Decide whether the gradient should separate sections, emphasize a block, or create depth.", "One goal makes direction, colors, and intensity easier to control."] },
    { heading: "Choose two colors before adding complexity", paragraphs: ["Two stops are usually enough for clean interfaces.", "Only add a third color if it solves a specific visual problem."], bullets: ["Use nearby hues for subtle depth.", "Use stronger contrast only on focal sections.", "Check readability before locking colors."] },
    { heading: "Pick linear or radial based on layout shape", paragraphs: ["Linear gradients fit headers, cards, and directional flow.", "Radial gradients fit spotlight-style emphasis behind one focal element."] },
    { heading: "Always validate with real text and components", paragraphs: ["Test the gradient behind real heading sizes, buttons, and cards.", "If readability drops, reduce saturation or add a soft overlay."] }
  ]
};

const gradientGeneratorGuideContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: gradientGeneratorGuideEn,
  ko: { ...gradientGeneratorGuideEn, title: "빠른 CSS 배경 결정을 위한 Gradient Generator 가이드", description: "아이디어에서 실서비스 CSS까지, 과한 디자인 없이 그라디언트를 정하는 실전 흐름입니다.", intro: "그라디언트 생성기는 오래 고민할 때보다, 짧은 시간에 실용적인 배경 결정을 내릴 때 가장 유용합니다." },
  ja: { ...gradientGeneratorGuideEn, title: "CSS背景を素早く決めるためのGradient Generatorガイド", description: "アイデアから本番向けCSSまで、迷いを減らして進める実践ワークフローです。", intro: "Gradient Generatorは、長く試行錯誤するより実用的な背景を短時間で決めたいときに役立ちます。" },
  es: { ...gradientGeneratorGuideEn, title: "Guía de Gradient Generator para Decidir Fondos CSS Más Rápido", description: "Pasa de la idea al CSS listo para producción con un flujo simple y práctico de gradientes.", intro: "Un generador de gradientes funciona mejor cuando necesitas decidir rápido, no cuando quieres probar infinitas variaciones." },
  fr: { ...gradientGeneratorGuideEn, title: "Guide Gradient Generator pour Décider Plus Vite un Fond CSS", description: "Passez d'une idée à un CSS prêt en production avec un workflow de dégradé simple et pratique.", intro: "Un générateur de dégradé est surtout utile quand vous devez trancher vite, pas explorer sans fin." },
  de: { ...gradientGeneratorGuideEn, title: "Gradient-Generator-Guide für schnelle CSS-Hintergründe", description: "Mit einem einfachen Ablauf von der Idee zu produktionsreifem CSS-Verlauf ohne überladenes Design.", intro: "Ein Verlaufsgenerator ist am nützlichsten, wenn du schnell eine praktikable Hintergrundentscheidung treffen musst." }
};

const createSimpleCssGradientBackgroundEn: GuideLocalizedContent = {
  title: "How to Create a Simple CSS Gradient Background",
  description: "Build a clean two-color gradient background with quick checks for readability and balance.",
  intro: "Simple gradients often perform better than complex ones because they support content instead of stealing attention.",
  categoryLabel: "Gradient basics",
  useCasesTitle: "Where this helps",
  useCases: ["Hero sections for small websites.", "Promo cards and newsletter blocks.", "Page sections that need light visual separation."],
  closingTitle: "Simple usually scales better",
  closingText: "A calm two-color gradient is easier to maintain and more reusable across future pages.",
  relatedToolLabel: "Open Gradient Generator",
  sections: [
    { heading: "Begin with two related colors", paragraphs: ["Pick colors from the same family or nearby hues.", "This keeps transitions smooth and avoids harsh banding."] },
    { heading: "Use a neutral default angle", paragraphs: ["90° or 120° works well for many section backgrounds.", "Change the angle only when layout direction requires it."] },
    { heading: "Test with real content early", paragraphs: ["Place heading text and a button over the gradient.", "If contrast is weak, darken one stop slightly or add a subtle overlay."] },
    { heading: "Save the final CSS snippet", paragraphs: ["Copy the final gradient code into your stylesheet or token file.", "Documenting the decision prevents random variations later."] }
  ]
};

const createSimpleCssGradientBackgroundContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: createSimpleCssGradientBackgroundEn,
  ko: { ...createSimpleCssGradientBackgroundEn, title: "심플한 CSS 그라디언트 배경 만드는 방법", description: "가독성과 균형을 빠르게 점검하며 두 가지 색상으로 깔끔한 배경을 만드는 방법입니다.", intro: "단순한 그라디언트는 시선을 빼앗기보다 콘텐츠를 돕기 때문에 실제 UI에서 더 자주 유리합니다." },
  ja: { ...createSimpleCssGradientBackgroundEn, title: "シンプルなCSSグラデーション背景の作り方", description: "読みやすさとバランスを確認しながら、2色で整った背景を作る方法です。", intro: "シンプルなグラデーションは主張しすぎず、コンテンツを支えるため実務で使いやすいです。" },
  es: { ...createSimpleCssGradientBackgroundEn, title: "Cómo Crear un Fondo CSS con Degradado Simple", description: "Crea un fondo limpio de dos colores con revisiones rápidas de legibilidad y equilibrio.", intro: "Los gradientes simples suelen funcionar mejor porque apoyan el contenido en lugar de competir con él." },
  fr: { ...createSimpleCssGradientBackgroundEn, title: "Comment Créer un Fond Dégradé CSS Simple", description: "Créez un dégradé propre à deux couleurs avec des vérifications rapides de lisibilité.", intro: "Les dégradés simples fonctionnent souvent mieux car ils soutiennent le contenu au lieu de le détourner." },
  de: { ...createSimpleCssGradientBackgroundEn, title: "So erstellst du einen einfachen CSS-Verlaufshintergrund", description: "Erstelle einen klaren Zwei-Farben-Verlauf mit schnellen Checks für Lesbarkeit und Balance.", intro: "Einfache Verläufe funktionieren oft besser, weil sie Inhalte unterstützen statt Aufmerksamkeit zu stehlen." }
};

const linearVsRadialGradientEn: GuideLocalizedContent = {
  title: "Linear vs Radial Gradient: Which One Should You Use?",
  description: "Choose between linear and radial gradients based on layout direction, focal points, and readability.",
  intro: "Most gradient decisions become easier when you match gradient shape to content layout instead of choosing by taste.",
  categoryLabel: "Gradient decisions",
  useCasesTitle: "Common decisions",
  useCases: ["Choosing hero section direction.", "Highlighting one CTA area.", "Reducing visual noise in content-heavy pages."],
  closingTitle: "Match gradient shape to content structure",
  closingText: "Use linear for flow and radial for focal emphasis, then validate with real content.",
  relatedToolLabel: "Open Gradient Generator",
  sections: [
    { heading: "Use linear for directional layouts", paragraphs: ["Linear gradients naturally follow horizontal or vertical content flow.", "They are easier to keep subtle across full-width sections."] },
    { heading: "Use radial for single focal areas", paragraphs: ["Radial gradients pull attention toward a center area.", "Use them sparingly behind one message or one CTA block."] },
    { heading: "Avoid mixing both in one small region", paragraphs: ["Layering linear and radial gradients too closely can feel busy.", "Choose one primary gradient behavior per component."] },
    { heading: "Run a readability check before finalizing", paragraphs: ["Always test heading, body text, and button states on top of the gradient."], bullets: ["Normal text state", "Hover/focus state", "Mobile viewport"] }
  ]
};

const linearVsRadialGradientContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: linearVsRadialGradientEn,
  ko: { ...linearVsRadialGradientEn, title: "선형 vs 원형 그라디언트: 무엇을 써야 할까?", description: "레이아웃 방향, 시선 집중, 가독성을 기준으로 선형과 원형 그라디언트를 선택하세요.", intro: "취향보다 레이아웃 구조에 맞춰 고르면 대부분의 그라디언트 결정이 훨씬 쉬워집니다." },
  ja: { ...linearVsRadialGradientEn, title: "線形と放射状グラデーションはどちらを使うべき？", description: "レイアウトの流れ・視線誘導・可読性で線形と放射状を選ぶための実践ガイドです。", intro: "好みよりも、コンテンツ構造に合う形を選ぶと判断が速くなります。" },
  es: { ...linearVsRadialGradientEn, title: "Gradiente Lineal vs Radial: ¿Cuál Conviene Usar?", description: "Elige entre lineal y radial según dirección del layout, foco visual y legibilidad.", intro: "La decisión es más fácil cuando ajustas la forma del gradiente a la estructura del contenido." },
  fr: { ...linearVsRadialGradientEn, title: "Dégradé Linéaire vs Radial : lequel choisir ?", description: "Choisissez entre linéaire et radial selon la direction du layout, le point focal et la lisibilité.", intro: "La décision devient plus simple quand la forme du dégradé suit la structure du contenu." },
  de: { ...linearVsRadialGradientEn, title: "Linearer vs radialer Verlauf: Was ist sinnvoll?", description: "Wähle zwischen linear und radial nach Layout-Richtung, Fokuspunkt und Lesbarkeit.", intro: "Die Entscheidung wird leichter, wenn die Verlaufsform zur Inhaltsstruktur passt." }
};

const whenGradientsImproveUiContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { ...gradientGeneratorGuideEn, title: "When Gradients Actually Improve UI", description: "Learn practical cases where gradients improve hierarchy and focus without making screens noisy.", intro: "Gradients help when they clarify structure or focus. They hurt when they are only decorative.", useCases: ["Separating hero and content sections.", "Adding depth to flat card areas.", "Drawing attention to one primary action."], closingTitle: "Use gradients with intent", closingText: "If a gradient improves hierarchy or focus, keep it. If not, simplify." },
  ko: { ...gradientGeneratorGuideEn, title: "그라디언트가 UI를 실제로 개선하는 경우", description: "화면을 복잡하게 만들지 않고 계층과 집중도를 높이는 그라디언트 사용 상황을 정리했습니다.", intro: "그라디언트는 구조와 집중을 돕는 경우에만 효과적입니다." },
  ja: { ...gradientGeneratorGuideEn, title: "グラデーションがUIを本当に改善する場面", description: "画面を騒がしくせずに階層と注目度を上げる実用ケースを紹介します。", intro: "グラデーションは構造や視線誘導に効くときだけ価値があります。" },
  es: { ...gradientGeneratorGuideEn, title: "Cuándo los Gradientes Sí Mejoran una UI", description: "Casos prácticos donde un gradiente mejora jerarquía y foco sin recargar la interfaz.", intro: "Un gradiente ayuda cuando aclara estructura o foco; molesta cuando es solo decorativo." },
  fr: { ...gradientGeneratorGuideEn, title: "Quand les Dégradés Améliorent Vraiment l'UI", description: "Des cas concrets où un dégradé améliore hiérarchie et focus sans surcharger l'interface.", intro: "Un dégradé aide s'il clarifie la structure ou l'attention." },
  de: { ...gradientGeneratorGuideEn, title: "Wann Verläufe eine UI wirklich verbessern", description: "Praktische Fälle, in denen Verläufe Hierarchie und Fokus stärken, ohne unruhig zu wirken.", intro: "Verläufe helfen, wenn sie Struktur und Fokus klären – nicht als reine Deko." }
};

const commonGradientMistakesUiContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { ...gradientGeneratorGuideEn, title: "Common Gradient Mistakes in UI Design", description: "Avoid the most common gradient mistakes that reduce readability and make interfaces feel busy.", intro: "Most gradient issues come from too much intensity, too many colors, or missing contrast checks.", closingTitle: "Reduce noise, keep purpose", closingText: "A restrained gradient usually looks more professional and stays easier to maintain." },
  ko: { ...gradientGeneratorGuideEn, title: "UI 디자인에서 자주 하는 그라디언트 실수", description: "가독성을 떨어뜨리고 화면을 복잡하게 만드는 대표적인 실수를 피하는 방법입니다." },
  ja: { ...gradientGeneratorGuideEn, title: "UIデザインでありがちなグラデーションの失敗", description: "可読性を下げて画面を騒がしくする代表的な失敗を避けるためのガイドです。" },
  es: { ...gradientGeneratorGuideEn, title: "Errores Comunes de Gradientes en UI", description: "Evita errores típicos de gradiente que reducen legibilidad y recargan la interfaz." },
  fr: { ...gradientGeneratorGuideEn, title: "Erreurs Courantes de Dégradé en UI", description: "Évitez les erreurs fréquentes qui nuisent à la lisibilité et surchargent l'interface." },
  de: { ...gradientGeneratorGuideEn, title: "Häufige Verlaufsfehler im UI-Design", description: "Vermeide typische Fehler, die Lesbarkeit senken und Interfaces überladen wirken lassen." }
};

const useGradientsWithoutBusyUiContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { ...gradientGeneratorGuideEn, title: "How to Use Gradients Without Making a UI Look Busy", description: "Apply gradients in a restrained way so your interface keeps focus, clarity, and readable hierarchy.", intro: "Gradients can add polish, but heavy gradients quickly make a screen feel crowded. A few constraints keep UI calm.", sections: [{ heading: "Treat gradients as a background layer", paragraphs: ["Use gradients to support structure, not to become the main visual object.", "If users notice the gradient before the content, reduce intensity."] }, { heading: "Keep contrast soft between color stops", paragraphs: ["Large jumps in hue or brightness create visual noise.", "Start with neighboring hues, then increase contrast only when hierarchy needs it."], bullets: ["Prefer two-color gradients for most UI surfaces.", "Avoid neon-like saturation for body-content areas.", "Reserve high-energy gradients for one focal section."] }, { heading: "Limit gradient usage per screen", paragraphs: ["Using gradients in every card, button, and banner makes interfaces feel inconsistent.", "Choose one or two strategic areas and keep other surfaces neutral."] }, { heading: "Check text readability in multiple spots", paragraphs: ["A gradient can be readable on one side and fail on another.", "Test titles, body text, and button labels across the full background area."] }, { heading: "Create a small reusable gradient set", paragraphs: ["Define a few approved gradient tokens and reuse them.", "This avoids random one-off gradients across new pages."] }], closingTitle: "Calm gradients create stronger UI", closingText: "If a gradient improves structure while content stays easy to read, you are using it correctly." },
  ko: { ...gradientGeneratorGuideEn, title: "UI를 복잡하게 보이지 않게 그라디언트 쓰는 방법", description: "시선을 분산시키지 않으면서 그라디언트를 적용하는 실전 규칙을 정리했습니다.", intro: "그라디언트는 완성도를 높일 수 있지만 강도가 높으면 화면이 금방 복잡해집니다." },
  ja: { ...gradientGeneratorGuideEn, title: "UIを騒がしく見せずにグラデーションを使う方法", description: "可読性と階層を保ちながら、控えめにグラデーションを使う実践ルールです。", intro: "グラデーションは便利ですが、強すぎると画面が散らかって見えます。" },
  es: { ...gradientGeneratorGuideEn, title: "Cómo Usar Gradientes sin Recargar la UI", description: "Aplica gradientes con moderación para mantener foco, claridad y jerarquía legible.", intro: "Los gradientes suman acabado visual, pero un uso intenso puede saturar rápidamente la interfaz." },
  fr: { ...gradientGeneratorGuideEn, title: "Comment Utiliser des Dégradés sans Surcharger l'UI", description: "Appliquez les dégradés avec retenue pour garder focus, clarté et hiérarchie lisible.", intro: "Les dégradés peuvent enrichir une interface, mais un excès la rend vite trop chargée." },
  de: { ...gradientGeneratorGuideEn, title: "So nutzt du Verläufe, ohne die UI unruhig zu machen", description: "Setze Verläufe zurückhaltend ein, damit Fokus, Klarheit und Lesbarkeit erhalten bleiben.", intro: "Verläufe können ein UI aufwerten, wirken bei zu hoher Intensität aber schnell überladen." }
};

const bestPlacesToUseGradientsOnWebsiteContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { ...gradientGeneratorGuideEn, title: "Best Places to Use a Gradient on a Website", description: "Choose high-impact website areas where gradients improve hierarchy and attention without hurting readability.", intro: "A gradient works best in strategic zones, not everywhere. Picking the right placement matters more than color complexity.", sections: [{ heading: "Hero backgrounds for first visual impact", paragraphs: ["Hero sections are ideal for controlled gradients because they introduce mood and hierarchy.", "Keep text areas calmer than decorative edges."] }, { heading: "Section transitions and separators", paragraphs: ["Subtle gradients can separate blocks without extra borders or heavy shadows.", "This helps long pages feel organized."], bullets: ["Feature section to pricing", "Content to CTA zone", "Footer pre-section highlights"] }, { heading: "CTA containers, not every button", paragraphs: ["Use gradients around the action area first.", "Applying strong gradients to every button often reduces consistency."] }, { heading: "Promotional cards with limited frequency", paragraphs: ["Gradients can help one featured card stand out in a grid.", "Avoid using unique gradients on all cards at once."] }, { heading: "Background accents behind illustrations", paragraphs: ["Soft radial gradients can frame an illustration or mockup.", "Keep opacity low so the visual remains readable."] }], closingTitle: "Placement drives quality", closingText: "A simple gradient in the right location performs better than a complex gradient used everywhere." },
  ko: { ...gradientGeneratorGuideEn, title: "웹사이트에서 그라디언트를 쓰기 좋은 위치", description: "가독성을 해치지 않으면서 계층과 시선을 강화하는 그라디언트 배치 포인트를 정리했습니다.", intro: "그라디언트는 많이 쓰는 것보다 어디에 쓰는지가 더 중요합니다." },
  ja: { ...gradientGeneratorGuideEn, title: "Webサイトでグラデーションを使うべき場所", description: "可読性を保ちながら階層と注目を高める、効果的な配置ポイントを紹介します。", intro: "グラデーションは数より配置が重要です。" },
  es: { ...gradientGeneratorGuideEn, title: "Mejores Lugares para Usar un Gradiente en un Sitio Web", description: "Ubica gradientes en zonas de alto impacto para mejorar jerarquía y atención sin perder legibilidad.", intro: "Funciona mejor en áreas estratégicas, no en toda la página." },
  fr: { ...gradientGeneratorGuideEn, title: "Meilleurs Emplacements pour un Dégradé sur un Site Web", description: "Placez les dégradés aux bons endroits pour renforcer hiérarchie et attention sans nuire à la lecture.", intro: "Un dégradé fonctionne mieux dans des zones ciblées, pas partout." },
  de: { ...gradientGeneratorGuideEn, title: "Die besten Stellen für Verläufe auf einer Website", description: "Nutze Verläufe an wirkungsvollen Stellen, ohne Lesbarkeit und Ruhe zu verlieren.", intro: "Entscheidend ist der Einsatzort – nicht die Anzahl der Verläufe." }
};

const testGradientBeforeUsingInProductionContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: { ...gradientGeneratorGuideEn, title: "How to Test a Gradient Before Using It in Production", description: "Run a quick gradient QA checklist before release so readability, consistency, and performance stay stable.", intro: "A gradient that looks good in design drafts can still fail in real UI states. Short production checks prevent this.", sections: [{ heading: "Test in real component contexts", paragraphs: ["Preview the gradient behind actual headings, paragraphs, inputs, and buttons.", "Do not approve gradients using empty mock blocks only."] }, { heading: "Validate desktop and mobile separately", paragraphs: ["Gradient direction and contrast can feel different on narrow screens.", "Check at least one mobile breakpoint before final export."] }, { heading: "Check interaction states", paragraphs: ["Hover, focus, and disabled states can lose clarity against gradients.", "Verify contrast and focus indicators in each state."], bullets: ["Primary button text", "Secondary button borders", "Input focus rings"] }, { heading: "Compare with adjacent sections", paragraphs: ["A gradient can look fine alone but clash with nearby surfaces.", "Review transitions between sections to avoid abrupt color jumps."] }, { heading: "Lock and document the final CSS", paragraphs: ["Once approved, save exact values and usage notes for your team.", "Documentation helps future pages stay visually consistent."] }], closingTitle: "Test quickly, then ship with confidence", closingText: "A small pre-launch gradient check catches issues early and keeps production UI cleaner." },
  ko: { ...gradientGeneratorGuideEn, title: "프로덕션 적용 전 그라디언트 테스트 방법", description: "배포 전에 짧은 QA 체크를 통해 가독성, 일관성, 상태별 안정성을 점검하세요.", intro: "시안에서 좋아 보인 그라디언트도 실제 UI 상태에서는 문제가 생길 수 있습니다." },
  ja: { ...gradientGeneratorGuideEn, title: "本番導入前にグラデーションをテストする方法", description: "公開前に短いチェックを行い、可読性・一貫性・状態別の見え方を確認する手順です。", intro: "デザイン上で良く見えても、実装状態では崩れることがあります。" },
  es: { ...gradientGeneratorGuideEn, title: "Cómo Probar un Gradiente Antes de Usarlo en Producción", description: "Aplica una revisión rápida antes de publicar para asegurar legibilidad, consistencia y estados estables.", intro: "Un gradiente puede verse bien en un mockup y fallar en estados reales de UI." },
  fr: { ...gradientGeneratorGuideEn, title: "Comment Tester un Dégradé Avant la Mise en Production", description: "Faites une vérification rapide avant publication pour garder lisibilité, cohérence et stabilité visuelle.", intro: "Un dégradé validé en maquette peut échouer dans des états UI réels." },
  de: { ...gradientGeneratorGuideEn, title: "So testest du einen Verlauf vor dem Produktionseinsatz", description: "Führe vor dem Release kurze Checks durch, damit Lesbarkeit und Konsistenz stabil bleiben.", intro: "Ein Verlauf kann im Mockup gut aussehen und im echten UI dennoch Probleme machen." }
};

const md5VsSha256En: GuideLocalizedContent = {
    title: "MD5 vs SHA-256: What’s the Difference?",
    description: "Understand the practical differences between MD5 and SHA-256 so you can choose the right hash for your workflow.",
    intro: "MD5 and SHA-256 both convert input text into a fixed-length hash, but they are used for different reasons. In daily workflows, the biggest question is whether you only need quick change detection or stronger integrity checks.",
    categoryLabel: "Hash basics",
    useCasesTitle: "Useful for",
    useCases: ["Choosing a hash algorithm for file verification.", "Explaining why older systems still output MD5.", "Documenting team rules for checksum workflows.", "Avoiding weak defaults in new projects."],
    closingTitle: "Use MD5 for compatibility, SHA-256 for stronger integrity",
    closingText: "If you are designing a new workflow, SHA-256 is usually the safer default. Keep MD5 only when legacy compatibility is required.",
    relatedToolLabel: "Open Hash Generator",
    sections: [
      { heading: "Quick definition of each algorithm", paragraphs: ["MD5 outputs a 128-bit hash, usually shown as 32 hex characters.", "SHA-256 outputs a 256-bit hash, usually shown as 64 hex characters."] },
      { heading: "Why SHA-256 is generally preferred now", paragraphs: ["MD5 is considered cryptographically weak because collisions are practical.", "SHA-256 is much harder to break, so it is preferred for modern integrity and security-sensitive workflows."] },
      { heading: "When teams still use MD5", paragraphs: ["MD5 can still appear in old systems, mirrors, or compatibility scripts.", "It is often used as a quick fingerprint where security is not the primary goal."], bullets: ["Legacy checksum fields in old tools.", "Fast duplicate detection in internal scripts.", "Backwards compatibility with existing APIs."] },
      { heading: "Practical rule of thumb", paragraphs: ["For new projects, pick SHA-256 unless you have a clear compatibility reason not to.", "If another system forces MD5, document that decision and treat it as a legacy constraint."] },
      { heading: "How to compare outputs correctly", paragraphs: ["Hashes are exact-match values. One character difference means the inputs were different.", "Make sure encoding and whitespace are consistent before deciding data changed."] }
    ]
};

const md5VsSha256Content: Record<LocaleCode, GuideLocalizedContent> = {
  en: md5VsSha256En,
  ko: { ...md5VsSha256En, title: "MD5 vs SHA-256: 무엇이 다를까?", description: "MD5와 SHA-256의 실무 차이를 빠르게 이해하고 상황에 맞게 선택하세요.", intro: "두 알고리즘 모두 텍스트를 고정 길이 해시로 바꾸지만, 사용 목적은 다릅니다. 실무에서는 빠른 변경 감지인지, 더 강한 무결성 검증인지가 핵심입니다.", categoryLabel: "해시 기본", useCasesTitle: "이럴 때 유용합니다", closingTitle: "호환성은 MD5, 기본 선택은 SHA-256", closingText: "새 워크플로를 설계한다면 SHA-256을 기본으로 두는 편이 안전합니다. MD5는 레거시 호환이 필요할 때만 유지하세요.", relatedToolLabel: "Hash Generator 열기" },
  ja: { ...md5VsSha256En, title: "MD5とSHA-256の違いは？", description: "MD5とSHA-256の実務上の違いを理解し、適切なハッシュを選ぶためのガイドです。", intro: "どちらも入力を固定長ハッシュに変換しますが、用途は同じではありません。実務では、単純な変更検知か、より強い完全性確認かを切り分けることが重要です。", categoryLabel: "ハッシュ基礎", useCasesTitle: "こんなときに便利", closingTitle: "互換性ならMD5、基本はSHA-256", closingText: "新規ワークフローではSHA-256を標準にするのが無難です。MD5はレガシー互換が必要な場合に限定しましょう。", relatedToolLabel: "Hash Generatorを開く" },
  es: { ...md5VsSha256En, title: "MD5 vs SHA-256: ¿Cuál es la diferencia?", description: "Comprende la diferencia práctica entre MD5 y SHA-256 para elegir el hash correcto.", intro: "Ambos convierten texto en un hash de longitud fija, pero no se usan para lo mismo. En la práctica, decide si solo necesitas detectar cambios o validar integridad con más seguridad.", categoryLabel: "Fundamentos de hash", useCasesTitle: "Útil para", closingTitle: "MD5 por compatibilidad, SHA-256 como base", closingText: "Para flujos nuevos, SHA-256 suele ser la opción recomendada. Deja MD5 para requisitos heredados.", relatedToolLabel: "Abrir Hash Generator" },
  fr: { ...md5VsSha256En, title: "MD5 vs SHA-256 : quelle différence ?", description: "Comprenez la différence pratique entre MD5 et SHA-256 pour choisir le bon hash.", intro: "Les deux transforment une entrée en hash de longueur fixe, mais leurs usages diffèrent. En pratique, il faut distinguer détection rapide de changement et contrôle d’intégrité plus robuste.", categoryLabel: "Bases du hash", useCasesTitle: "Utile pour", closingTitle: "MD5 pour la compatibilité, SHA-256 par défaut", closingText: "Pour un nouveau workflow, SHA-256 est généralement le meilleur choix. Gardez MD5 uniquement pour des contraintes legacy.", relatedToolLabel: "Ouvrir Hash Generator" },
  de: { ...md5VsSha256En, title: "MD5 vs. SHA-256: Was ist der Unterschied?", description: "Verstehe die praktischen Unterschiede zwischen MD5 und SHA-256 für die richtige Auswahl im Workflow.", intro: "Beide erzeugen einen Hash fester Länge, werden aber nicht für denselben Zweck genutzt. In der Praxis geht es um schnellen Änderungscheck vs. stärkere Integritätsprüfung.", categoryLabel: "Hash-Grundlagen", useCasesTitle: "Hilfreich für", closingTitle: "MD5 für Kompatibilität, SHA-256 als Standard", closingText: "Für neue Workflows ist SHA-256 meist die bessere Standardwahl. MD5 sollte nur aus Legacy-Gründen genutzt werden.", relatedToolLabel: "Hash Generator öffnen" }
};

const compareHashesToCheckDataChangesEn: GuideLocalizedContent = {
    title: "How to Compare Hashes to Check Whether Data Changed",
    description: "Use a simple hash comparison workflow to confirm if text or file content changed between versions.",
    intro: "Hash comparison is one of the fastest ways to verify whether content changed. Instead of manually scanning long text, you can compare two hash strings and confirm equality in seconds.",
    categoryLabel: "Hash workflow",
    useCasesTitle: "Useful for",
    useCases: ["Checking whether a config file changed after deployment.", "Verifying copied payloads before API tests.", "Comparing backup exports across environments.", "Confirming data integrity in handoff workflows."],
    closingTitle: "Compare values, then investigate differences",
    closingText: "A hash mismatch does not tell you where the change happened, but it tells you quickly that a change exists. Use that as your first integrity checkpoint.",
    relatedToolLabel: "Open Hash Generator",
    sections: [
      { heading: "Basic comparison flow", paragraphs: ["Generate a hash from the original data and one from the new data.", "If the two hashes are identical, the input content matched exactly."] },
      { heading: "Normalize inputs before hashing", paragraphs: ["Whitespace, line endings, and hidden characters can change the hash.", "Use a consistent copy/paste process before concluding that the actual business data changed."], bullets: ["Keep the same text encoding.", "Watch for extra spaces at line ends.", "Avoid editor auto-formatting between comparisons."] },
      { heading: "Use the same algorithm on both sides", paragraphs: ["Comparing MD5 to SHA-256 is invalid because they are different algorithms.", "Always hash both values with the same algorithm before comparison."] },
      { heading: "Where this helps in real workflows", paragraphs: ["During incident response, hash checks quickly confirm whether a payload drifted.", "In QA, hashes help verify copied fixtures without manual line-by-line review."] },
      { heading: "What to do after a mismatch", paragraphs: ["When hashes differ, move to structured diff tools to locate exact changes.", "Treat the hash check as the fast gate before deeper debugging."] }
    ]
};

const compareHashesToCheckDataChangesContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: compareHashesToCheckDataChangesEn,
  ko: { ...compareHashesToCheckDataChangesEn, title: "해시 비교로 데이터 변경 여부 확인하는 방법", description: "해시 비교로 텍스트나 파일 내용이 바뀌었는지 빠르게 확인하는 실무 흐름입니다.", intro: "긴 데이터를 눈으로 비교하지 않아도, 해시 문자열 두 개만 비교하면 변경 여부를 빠르게 판단할 수 있습니다.", categoryLabel: "해시 워크플로", useCasesTitle: "이럴 때 유용합니다", closingTitle: "먼저 해시로 확인하고, 이후 원인 분석", closingText: "해시 불일치는 어디가 달라졌는지 알려주진 않지만 변경이 있다는 사실은 즉시 알려줍니다. 무결성 점검의 첫 단계로 활용하세요.", relatedToolLabel: "Hash Generator 열기" },
  ja: { ...compareHashesToCheckDataChangesEn, title: "ハッシュ比較でデータ変更を確認する方法", description: "テキストやファイル内容の変更有無を、シンプルなハッシュ比較で素早く確認する方法です。", intro: "長文を目視で比較する代わりに、ハッシュ値を比較すれば一致・不一致を短時間で判断できます。", categoryLabel: "ハッシュ運用", useCasesTitle: "活用シーン", closingTitle: "まず一致確認、その後に差分調査", closingText: "ハッシュ不一致だけでは変更箇所は分かりませんが、変更がある事実をすぐに確認できます。最初の整合性チェックとして有効です。", relatedToolLabel: "Hash Generatorを開く" },
  es: { ...compareHashesToCheckDataChangesEn, title: "Cómo comparar hashes para verificar si los datos cambiaron", description: "Aplica un flujo simple de comparación de hashes para confirmar cambios en texto o archivos.", intro: "Comparar hashes es una forma rápida de saber si cambió el contenido. En lugar de revisar líneas manualmente, comparas dos valores y validas en segundos.", categoryLabel: "Flujo de hash", useCasesTitle: "Útil para", closingTitle: "Compara primero, investiga después", closingText: "Una diferencia de hash no explica dónde cambió el contenido, pero sí confirma rápidamente que hubo cambio.", relatedToolLabel: "Abrir Hash Generator" },
  fr: { ...compareHashesToCheckDataChangesEn, title: "Comment comparer des hash pour vérifier si des données ont changé", description: "Suivez un workflow simple de comparaison de hash pour confirmer un changement de contenu.", intro: "La comparaison de hash est l’un des moyens les plus rapides pour savoir si un contenu a changé. Deux valeurs suffisent pour valider l’égalité.", categoryLabel: "Workflow hash", useCasesTitle: "Utile pour", closingTitle: "Comparer d’abord, analyser ensuite", closingText: "Un hash différent n’indique pas l’emplacement du changement, mais confirme immédiatement qu’un changement existe.", relatedToolLabel: "Ouvrir Hash Generator" },
  de: { ...compareHashesToCheckDataChangesEn, title: "Hashes vergleichen, um Datenänderungen zu prüfen", description: "Mit einem einfachen Hash-Vergleich schnell erkennen, ob sich Inhalte geändert haben.", intro: "Ein Hash-Vergleich ist einer der schnellsten Wege, Änderungen zu erkennen. Statt langer Texte manuell zu prüfen, vergleichst du zwei Hash-Werte.", categoryLabel: "Hash-Workflow", useCasesTitle: "Hilfreich für", closingTitle: "Erst vergleichen, dann analysieren", closingText: "Ein Unterschied zeigt nicht die genaue Stelle, aber sofort, dass eine Änderung vorliegt. Nutze das als ersten Integritätscheck.", relatedToolLabel: "Hash Generator öffnen" }
};

const whyTwoHashesAreDifferentEn: GuideLocalizedContent = {
    title: "Why Two Hashes Are Different Even When Text Looks Similar",
    description: "Learn the most common reasons hash outputs differ even when two inputs look almost identical.",
    intro: "If two strings look the same but produce different hashes, hidden differences are usually the cause. Small formatting details can completely change the final hash output.",
    categoryLabel: "Hash debugging",
    useCasesTitle: "Useful for",
    useCases: ["Debugging mismatched signatures in API tests.", "Explaining hash differences in QA reviews.", "Checking copy/paste issues from docs and chat tools.", "Reducing false alarms in integrity checks."],
    closingTitle: "Trust exact bytes, not visual similarity",
    closingText: "Hashes operate on exact input bytes. If hashes differ, something in the raw input differs too—even if it is hard to see.",
    relatedToolLabel: "Open Hash Generator",
    sections: [
      { heading: "Whitespace is enough to change a hash", paragraphs: ["A trailing space or an extra blank line changes the final value.", "Always check beginning and end whitespace when debugging mismatches."] },
      { heading: "Line ending differences matter", paragraphs: ["Windows and Unix line endings are different byte sequences.", "The same visible text can hash differently across environments if line endings change."], bullets: ["CRLF vs LF differences", "Automatic editor normalization", "Copied text from terminals or spreadsheets"] },
      { heading: "Encoding mismatches can break comparisons", paragraphs: ["UTF-8 and other encodings can represent characters differently.", "Be consistent about encoding between systems before comparing hashes."] },
      { heading: "Look for invisible characters", paragraphs: ["Zero-width spaces, non-breaking spaces, and smart punctuation are common causes.", "These characters often appear after copy/paste from rich text sources."] },
      { heading: "Use a quick isolate-and-test workflow", paragraphs: ["Start with a short known string, hash it on both sides, and expand gradually.", "This step-by-step approach helps isolate exactly where the mismatch begins."] }
    ]
};

const whyTwoHashesAreDifferentContent: Record<LocaleCode, GuideLocalizedContent> = {
  en: whyTwoHashesAreDifferentEn,
  ko: { ...whyTwoHashesAreDifferentEn, title: "텍스트가 비슷한데 해시가 다른 이유", description: "겉보기에는 비슷한 입력인데 해시가 달라지는 대표 원인을 정리했습니다.", intro: "문자열이 비슷해 보여도 해시가 다르면 보이지 않는 차이가 있는 경우가 많습니다. 아주 작은 포맷 차이도 결과를 완전히 바꿉니다.", categoryLabel: "해시 디버깅", useCasesTitle: "이럴 때 유용합니다", closingTitle: "겉모습보다 원본 바이트를 기준으로 보기", closingText: "해시는 정확한 입력 바이트를 기준으로 계산됩니다. 해시가 다르면 눈에 안 보여도 입력 어딘가가 다릅니다.", relatedToolLabel: "Hash Generator 열기" },
  ja: { ...whyTwoHashesAreDifferentEn, title: "見た目が似た文字列なのにハッシュが違う理由", description: "ほぼ同じに見える入力でハッシュが変わる主な原因を実務目線で解説します。", intro: "見た目が同じでも、隠れた差分があるとハッシュは変わります。小さな書式差でも結果は完全に変わります。", categoryLabel: "ハッシュデバッグ", useCasesTitle: "こんなときに便利", closingTitle: "見た目ではなく生データを信頼する", closingText: "ハッシュは入力バイト列そのものに対して計算されます。違う結果なら、必ず入力差分があります。", relatedToolLabel: "Hash Generatorを開く" },
  es: { ...whyTwoHashesAreDifferentEn, title: "Por qué dos hashes son diferentes aunque el texto parezca similar", description: "Conoce las causas más comunes de diferencias de hash en entradas aparentemente iguales.", intro: "Cuando dos textos parecen iguales y el hash no coincide, casi siempre hay diferencias ocultas. Pequeños detalles de formato cambian por completo el resultado.", categoryLabel: "Depuración de hash", useCasesTitle: "Útil para", closingTitle: "Confía en los bytes exactos, no en la apariencia", closingText: "El hash se calcula sobre bytes exactos. Si cambia el hash, cambió algo en la entrada real.", relatedToolLabel: "Abrir Hash Generator" },
  fr: { ...whyTwoHashesAreDifferentEn, title: "Pourquoi deux hash diffèrent même quand le texte semble similaire", description: "Découvrez les causes fréquentes d’écarts de hash sur des textes apparemment identiques.", intro: "Si deux chaînes paraissent identiques mais donnent des hash différents, des différences invisibles sont souvent en cause.", categoryLabel: "Débogage hash", useCasesTitle: "Utile pour", closingTitle: "Se fier aux octets exacts, pas au visuel", closingText: "Un hash est calculé sur les octets exacts en entrée. Si le hash diffère, l’entrée diffère aussi.", relatedToolLabel: "Ouvrir Hash Generator" },
  de: { ...whyTwoHashesAreDifferentEn, title: "Warum zwei Hashes unterschiedlich sind, obwohl der Text ähnlich aussieht", description: "Die häufigsten Gründe für unterschiedliche Hash-Werte bei scheinbar gleichen Eingaben.", intro: "Wenn zwei Texte gleich aussehen, aber unterschiedliche Hashes liefern, gibt es meist unsichtbare Unterschiede.", categoryLabel: "Hash-Debugging", useCasesTitle: "Hilfreich für", closingTitle: "Vertraue exakten Bytes, nicht dem Aussehen", closingText: "Hashes basieren auf exakten Eingabebytes. Unterschiedliche Hashes bedeuten immer eine echte Eingabedifferenz.", relatedToolLabel: "Hash Generator öffnen" }
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
  },
  {
    slug: "how-to-count-characters-for-seo",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: {
        title: "How to Count Characters for SEO Titles and Descriptions",
        description: "Learn how to count characters for SEO titles and meta descriptions so your pages stay clear, readable, and more likely to display well in search results.",
        intro: "A simple character check can prevent common SEO mistakes before a page goes live. If your title is too long, search engines may shorten it. If your description is too vague or too crowded, users may skip it even when your page ranks well.",
        categoryLabel: "SEO Writing",
        useCasesTitle: "When this is most useful",
        useCases: [
          "Publishing new blog articles.",
          "Writing category page titles.",
          "Updating meta descriptions for older content.",
          "Preparing landing pages for campaigns.",
          "Checking consistency across many pages.",
          "Improving snippets for multilingual sites."
        ],
        closingTitle: "Keep the workflow lightweight",
        closingText: "You do not need to overcomplicate this task. A simple browser-based character counter is often enough for day-to-day SEO writing. The goal is not perfection. The goal is to avoid preventable mistakes and publish cleaner page copy. When paired with a good page title, a useful meta description, and relevant on-page content, character review becomes one small but valuable part of a stronger SEO process.",
        relatedToolLabel: "Open the Character Counter",
        sections: [
          {
            heading: "Why character count matters for SEO",
            paragraphs: [
              "Search results do not always show your title and description exactly as written, but length still matters. Very long text is more likely to be truncated. Very short text may miss important context or fail to explain what the page offers.",
              "A practical character counter helps you review text quickly, compare options, and keep your search snippets cleaner. You do not need a complicated SEO suite for this step. For many pages, a lightweight browser-based tool is enough."
            ],
            bullets: [
              "Write titles that are easier to scan.",
              "Avoid cutting off important keywords.",
              "Compare multiple headline options quickly.",
              "Keep descriptions readable on both desktop and mobile.",
              "Maintain a more consistent style across your site."
            ]
          },
          {
            heading: "A practical way to review titles and descriptions",
            paragraphs: [
              "A good workflow is to start with meaning first and count second. Do not force a title to hit an exact number if it becomes awkward. Instead, write a clear draft, then use a character counter to tighten it.",
              "For example, a weak title may be too generic: “SEO Tips for Better Search Results”. It is short, but it does not say much. A stronger version may be: “How to Count Characters for SEO Titles and Descriptions”. This is more specific, more useful, and still easy to review with a counter. The same idea applies to descriptions. A description should explain what the page helps with, not just repeat keywords."
            ]
          },
          {
            heading: "How to use a character counter for SEO work",
            paragraphs: [
              "You can keep the process very simple.",
              "1. Draft your title naturally. Write the clearest version first. Focus on the page topic and the user's search intent. Ask: What is this page about? What problem does it solve? Why would someone click it?",
              "2. Check the character count. Paste the text into a character counter and review the total length. This is the fastest way to spot titles or descriptions that are much longer than expected.",
              "3. Trim unnecessary words. Look for filler words, repeated phrases, or vague wording. In many cases, removing one or two extra phrases makes the snippet cleaner without losing meaning.",
              "For example, “A complete and detailed guide to learning how to count characters for SEO titles” can often become “How to Count Characters for SEO Titles”.",
              "4. Compare two or three variations. Do not stop at the first acceptable version. Make a few alternatives and compare them side by side. Sometimes a slightly shorter version is stronger and easier to understand.",
              "5. Review the final wording for clarity. A title that fits well but sounds unnatural is still a bad title. Always do one final read to make sure the text is useful to humans, not just adjusted for length."
            ]
          },
          {
            heading: "Common mistakes to avoid",
            paragraphs: [
              "One common mistake is treating character count as the only SEO rule. It is important, but it is not everything. Search engines care about relevance, clarity, page quality, and user intent too.",
              "Another mistake is stuffing titles with too many keywords. Even if the length looks acceptable, the result can feel spammy and reduce trust.",
              "It is also a mistake to write descriptions that are technically the right length but say nothing helpful. Users need a reason to click. A strong description should explain the value of the page in clear language.",
              "Finally, avoid copying the same title pattern across too many pages without adjusting it for each topic. Unique and specific copy usually performs better."
            ]
          }
        ]
      },
      ko: {
        title: "SEO 제목/설명 글자 수 세는 방법",
        description: "SEO 제목과 메타 설명의 글자 수를 점검해 검색 결과에서 더 명확하고 읽기 쉬운 문구를 만드는 방법입니다.",
        intro: "페이지를 발행하기 전에 글자 수를 한 번만 확인해도 잘림, 의미 부족, 과도한 문구 같은 흔한 문제를 줄일 수 있습니다.",
        categoryLabel: "SEO 작성",
        useCasesTitle: "이럴 때 특히 유용합니다",
        useCases: ["새 블로그 글 발행", "카테고리 페이지 제목 작성", "기존 메타 설명 개선", "캠페인 랜딩 페이지 준비", "여러 페이지 문구 일관성 점검", "다국어 스니펫 품질 개선"],
        closingTitle: "가볍게 점검하세요",
        closingText: "완벽한 숫자를 맞추는 것이 목표가 아닙니다. 핵심은 사용자가 이해하기 쉬운 문구를 유지하면서 불필요한 잘림을 줄이는 것입니다.",
        relatedToolLabel: "문자 수 카운터 열기",
        sections: [
          { heading: "왜 글자 수 점검이 중요한가", paragraphs: ["검색 결과는 공간이 제한되어 있어 너무 긴 제목/설명은 잘릴 가능성이 높습니다.", "반대로 너무 짧으면 페이지의 핵심 가치를 전달하지 못할 수 있어 클릭 기회를 놓치기 쉽습니다."], bullets: ["핵심 키워드가 잘리지 않도록 관리", "제목 가독성 개선", "여러 문안 빠른 비교", "모바일/데스크톱 노출 균형", "사이트 전반 문체 일관성 유지"] },
          { heading: "실무 점검 방법", paragraphs: ["먼저 자연스러운 문구를 작성한 뒤 카운터로 길이를 확인하세요.", "길이가 길면 중복 표현과 군더더기를 줄이고, 짧으면 의도와 가치를 더 분명하게 보강합니다."] },
          { heading: "빠른 작업 순서", paragraphs: ["초안 작성 → 글자 수 확인 → 불필요 표현 정리 → 2~3개 문안 비교 → 최종 문맥 검토 순서로 진행하세요.", "숫자만 맞추는 것보다 사람이 읽었을 때 자연스럽고 구체적인 문구가 더 중요합니다."] },
          { heading: "자주 하는 실수", paragraphs: ["글자 수만 SEO의 전부라고 생각하는 것은 큰 오해입니다.", "키워드를 과하게 반복하거나, 길이는 맞지만 의미가 빈약한 설명을 쓰는 실수도 자주 발생합니다."] }
        ]
      },

      ja: {
        title: "SEOタイトルと説明文の文字数を数える方法",
        description: "Learn how to count characters for SEO titles and meta descriptions so your pages stay clear, readable, and more likely to display well in search results.",
        intro: "A simple character check can prevent common SEO mistakes before a page goes live. If your title is too long, search engines may shorten it. If your description is too vague or too crowded, users may skip it even when your page ranks well.",
        categoryLabel: "SEO Writing",
        useCasesTitle: "When this is most useful",
        useCases: ["Publishing new blog articles.", "Writing category page titles.", "Updating meta descriptions for older content.", "Preparing landing pages for campaigns.", "Checking consistency across many pages.", "Improving snippets for multilingual sites."],
        closingTitle: "Keep the workflow lightweight",
        closingText: "You do not need to overcomplicate this task. A simple browser-based character counter is often enough for day-to-day SEO writing. The goal is not perfection. The goal is to avoid preventable mistakes and publish cleaner page copy. When paired with a good page title, a useful meta description, and relevant on-page content, character review becomes one small but valuable part of a stronger SEO process.",
        relatedToolLabel: "文字数カウンターを開く",
        sections: [
          { heading: "Why character count matters for SEO", paragraphs: ["Search results do not always show your title and description exactly as written, but length still matters. Very long text is more likely to be truncated. Very short text may miss important context or fail to explain what the page offers.", "A practical character counter helps you review text quickly, compare options, and keep your search snippets cleaner. You do not need a complicated SEO suite for this step. For many pages, a lightweight browser-based tool is enough."], bullets: ["Write titles that are easier to scan.", "Avoid cutting off important keywords.", "Compare multiple headline options quickly.", "Keep descriptions readable on both desktop and mobile.", "Maintain a more consistent style across your site."] },
          { heading: "A practical way to review titles and descriptions", paragraphs: ["A good workflow is to start with meaning first and count second. Do not force a title to hit an exact number if it becomes awkward. Instead, write a clear draft, then use a character counter to tighten it.", "For example, a weak title may be too generic: “SEO Tips for Better Search Results”. It is short, but it does not say much. A stronger version may be: “How to Count Characters for SEO Titles and Descriptions”. This is more specific, more useful, and still easy to review with a counter. The same idea applies to descriptions. A description should explain what the page helps with, not just repeat keywords."] },
          { heading: "How to use a character counter for SEO work", paragraphs: ["You can keep the process very simple.", "1. Draft your title naturally. Write the clearest version first. Focus on the page topic and the user's search intent. Ask: What is this page about? What problem does it solve? Why would someone click it?", "2. Check the character count. Paste the text into a character counter and review the total length. This is the fastest way to spot titles or descriptions that are much longer than expected.", "3. Trim unnecessary words. Look for filler words, repeated phrases, or vague wording. In many cases, removing one or two extra phrases makes the snippet cleaner without losing meaning.", "For example, “A complete and detailed guide to learning how to count characters for SEO titles” can often become “How to Count Characters for SEO Titles”.", "4. Compare two or three variations. Do not stop at the first acceptable version. Make a few alternatives and compare them side by side. Sometimes a slightly shorter version is stronger and easier to understand.", "5. Review the final wording for clarity. A title that fits well but sounds unnatural is still a bad title. Always do one final read to make sure the text is useful to humans, not just adjusted for length."] },
          { heading: "Common mistakes to avoid", paragraphs: ["One common mistake is treating character count as the only SEO rule. It is important, but it is not everything. Search engines care about relevance, clarity, page quality, and user intent too.", "Another mistake is stuffing titles with too many keywords. Even if the length looks acceptable, the result can feel spammy and reduce trust.", "It is also a mistake to write descriptions that are technically the right length but say nothing helpful. Users need a reason to click. A strong description should explain the value of the page in clear language.", "Finally, avoid copying the same title pattern across too many pages without adjusting it for each topic. Unique and specific copy usually performs better."] }
        ]
      },
      es: {
        title: "Cómo contar caracteres para títulos y descripciones SEO",
        description: "Learn how to count characters for SEO titles and meta descriptions so your pages stay clear, readable, and more likely to display well in search results.",
        intro: "A simple character check can prevent common SEO mistakes before a page goes live. If your title is too long, search engines may shorten it. If your description is too vague or too crowded, users may skip it even when your page ranks well.",
        categoryLabel: "SEO Writing",
        useCasesTitle: "When this is most useful",
        useCases: ["Publishing new blog articles.", "Writing category page titles.", "Updating meta descriptions for older content.", "Preparing landing pages for campaigns.", "Checking consistency across many pages.", "Improving snippets for multilingual sites."],
        closingTitle: "Keep the workflow lightweight",
        closingText: "You do not need to overcomplicate this task. A simple browser-based character counter is often enough for day-to-day SEO writing. The goal is not perfection. The goal is to avoid preventable mistakes and publish cleaner page copy. When paired with a good page title, a useful meta description, and relevant on-page content, character review becomes one small but valuable part of a stronger SEO process.",
        relatedToolLabel: "Abrir contador de caracteres",
        sections: [
          { heading: "Why character count matters for SEO", paragraphs: ["Search results do not always show your title and description exactly as written, but length still matters. Very long text is more likely to be truncated. Very short text may miss important context or fail to explain what the page offers.", "A practical character counter helps you review text quickly, compare options, and keep your search snippets cleaner. You do not need a complicated SEO suite for this step. For many pages, a lightweight browser-based tool is enough."], bullets: ["Write titles that are easier to scan.", "Avoid cutting off important keywords.", "Compare multiple headline options quickly.", "Keep descriptions readable on both desktop and mobile.", "Maintain a more consistent style across your site."] },
          { heading: "A practical way to review titles and descriptions", paragraphs: ["A good workflow is to start with meaning first and count second. Do not force a title to hit an exact number if it becomes awkward. Instead, write a clear draft, then use a character counter to tighten it.", "For example, a weak title may be too generic: “SEO Tips for Better Search Results”. It is short, but it does not say much. A stronger version may be: “How to Count Characters for SEO Titles and Descriptions”. This is more specific, more useful, and still easy to review with a counter. The same idea applies to descriptions. A description should explain what the page helps with, not just repeat keywords."] },
          { heading: "How to use a character counter for SEO work", paragraphs: ["You can keep the process very simple.", "1. Draft your title naturally. Write the clearest version first. Focus on the page topic and the user's search intent. Ask: What is this page about? What problem does it solve? Why would someone click it?", "2. Check the character count. Paste the text into a character counter and review the total length. This is the fastest way to spot titles or descriptions that are much longer than expected.", "3. Trim unnecessary words. Look for filler words, repeated phrases, or vague wording. In many cases, removing one or two extra phrases makes the snippet cleaner without losing meaning.", "For example, “A complete and detailed guide to learning how to count characters for SEO titles” can often become “How to Count Characters for SEO Titles”.", "4. Compare two or three variations. Do not stop at the first acceptable version. Make a few alternatives and compare them side by side. Sometimes a slightly shorter version is stronger and easier to understand.", "5. Review the final wording for clarity. A title that fits well but sounds unnatural is still a bad title. Always do one final read to make sure the text is useful to humans, not just adjusted for length."] },
          { heading: "Common mistakes to avoid", paragraphs: ["One common mistake is treating character count as the only SEO rule. It is important, but it is not everything. Search engines care about relevance, clarity, page quality, and user intent too.", "Another mistake is stuffing titles with too many keywords. Even if the length looks acceptable, the result can feel spammy and reduce trust.", "It is also a mistake to write descriptions that are technically the right length but say nothing helpful. Users need a reason to click. A strong description should explain the value of the page in clear language.", "Finally, avoid copying the same title pattern across too many pages without adjusting it for each topic. Unique and specific copy usually performs better."] }
        ]
      },
      fr: {
        title: "Comment compter les caractères pour les titres et descriptions SEO",
        description: "Learn how to count characters for SEO titles and meta descriptions so your pages stay clear, readable, and more likely to display well in search results.",
        intro: "A simple character check can prevent common SEO mistakes before a page goes live. If your title is too long, search engines may shorten it. If your description is too vague or too crowded, users may skip it even when your page ranks well.",
        categoryLabel: "SEO Writing",
        useCasesTitle: "When this is most useful",
        useCases: ["Publishing new blog articles.", "Writing category page titles.", "Updating meta descriptions for older content.", "Preparing landing pages for campaigns.", "Checking consistency across many pages.", "Improving snippets for multilingual sites."],
        closingTitle: "Keep the workflow lightweight",
        closingText: "You do not need to overcomplicate this task. A simple browser-based character counter is often enough for day-to-day SEO writing. The goal is not perfection. The goal is to avoid preventable mistakes and publish cleaner page copy. When paired with a good page title, a useful meta description, and relevant on-page content, character review becomes one small but valuable part of a stronger SEO process.",
        relatedToolLabel: "Ouvrir le compteur de caractères",
        sections: [
          { heading: "Why character count matters for SEO", paragraphs: ["Search results do not always show your title and description exactly as written, but length still matters. Very long text is more likely to be truncated. Very short text may miss important context or fail to explain what the page offers.", "A practical character counter helps you review text quickly, compare options, and keep your search snippets cleaner. You do not need a complicated SEO suite for this step. For many pages, a lightweight browser-based tool is enough."], bullets: ["Write titles that are easier to scan.", "Avoid cutting off important keywords.", "Compare multiple headline options quickly.", "Keep descriptions readable on both desktop and mobile.", "Maintain a more consistent style across your site."] },
          { heading: "A practical way to review titles and descriptions", paragraphs: ["A good workflow is to start with meaning first and count second. Do not force a title to hit an exact number if it becomes awkward. Instead, write a clear draft, then use a character counter to tighten it.", "For example, a weak title may be too generic: “SEO Tips for Better Search Results”. It is short, but it does not say much. A stronger version may be: “How to Count Characters for SEO Titles and Descriptions”. This is more specific, more useful, and still easy to review with a counter. The same idea applies to descriptions. A description should explain what the page helps with, not just repeat keywords."] },
          { heading: "How to use a character counter for SEO work", paragraphs: ["You can keep the process very simple.", "1. Draft your title naturally. Write the clearest version first. Focus on the page topic and the user's search intent. Ask: What is this page about? What problem does it solve? Why would someone click it?", "2. Check the character count. Paste the text into a character counter and review the total length. This is the fastest way to spot titles or descriptions that are much longer than expected.", "3. Trim unnecessary words. Look for filler words, repeated phrases, or vague wording. In many cases, removing one or two extra phrases makes the snippet cleaner without losing meaning.", "For example, “A complete and detailed guide to learning how to count characters for SEO titles” can often become “How to Count Characters for SEO Titles”.", "4. Compare two or three variations. Do not stop at the first acceptable version. Make a few alternatives and compare them side by side. Sometimes a slightly shorter version is stronger and easier to understand.", "5. Review the final wording for clarity. A title that fits well but sounds unnatural is still a bad title. Always do one final read to make sure the text is useful to humans, not just adjusted for length."] },
          { heading: "Common mistakes to avoid", paragraphs: ["One common mistake is treating character count as the only SEO rule. It is important, but it is not everything. Search engines care about relevance, clarity, page quality, and user intent too.", "Another mistake is stuffing titles with too many keywords. Even if the length looks acceptable, the result can feel spammy and reduce trust.", "It is also a mistake to write descriptions that are technically the right length but say nothing helpful. Users need a reason to click. A strong description should explain the value of the page in clear language.", "Finally, avoid copying the same title pattern across too many pages without adjusting it for each topic. Unique and specific copy usually performs better."] }
        ]
      },
      de: {
        title: "So zählst du Zeichen für SEO-Titel und Beschreibungen",
        description: "Learn how to count characters for SEO titles and meta descriptions so your pages stay clear, readable, and more likely to display well in search results.",
        intro: "A simple character check can prevent common SEO mistakes before a page goes live. If your title is too long, search engines may shorten it. If your description is too vague or too crowded, users may skip it even when your page ranks well.",
        categoryLabel: "SEO Writing",
        useCasesTitle: "When this is most useful",
        useCases: ["Publishing new blog articles.", "Writing category page titles.", "Updating meta descriptions for older content.", "Preparing landing pages for campaigns.", "Checking consistency across many pages.", "Improving snippets for multilingual sites."],
        closingTitle: "Keep the workflow lightweight",
        closingText: "You do not need to overcomplicate this task. A simple browser-based character counter is often enough for day-to-day SEO writing. The goal is not perfection. The goal is to avoid preventable mistakes and publish cleaner page copy. When paired with a good page title, a useful meta description, and relevant on-page content, character review becomes one small but valuable part of a stronger SEO process.",
        relatedToolLabel: "Zeichenzähler öffnen",
        sections: [
          { heading: "Why character count matters for SEO", paragraphs: ["Search results do not always show your title and description exactly as written, but length still matters. Very long text is more likely to be truncated. Very short text may miss important context or fail to explain what the page offers.", "A practical character counter helps you review text quickly, compare options, and keep your search snippets cleaner. You do not need a complicated SEO suite for this step. For many pages, a lightweight browser-based tool is enough."], bullets: ["Write titles that are easier to scan.", "Avoid cutting off important keywords.", "Compare multiple headline options quickly.", "Keep descriptions readable on both desktop and mobile.", "Maintain a more consistent style across your site."] },
          { heading: "A practical way to review titles and descriptions", paragraphs: ["A good workflow is to start with meaning first and count second. Do not force a title to hit an exact number if it becomes awkward. Instead, write a clear draft, then use a character counter to tighten it.", "For example, a weak title may be too generic: “SEO Tips for Better Search Results”. It is short, but it does not say much. A stronger version may be: “How to Count Characters for SEO Titles and Descriptions”. This is more specific, more useful, and still easy to review with a counter. The same idea applies to descriptions. A description should explain what the page helps with, not just repeat keywords."] },
          { heading: "How to use a character counter for SEO work", paragraphs: ["You can keep the process very simple.", "1. Draft your title naturally. Write the clearest version first. Focus on the page topic and the user's search intent. Ask: What is this page about? What problem does it solve? Why would someone click it?", "2. Check the character count. Paste the text into a character counter and review the total length. This is the fastest way to spot titles or descriptions that are much longer than expected.", "3. Trim unnecessary words. Look for filler words, repeated phrases, or vague wording. In many cases, removing one or two extra phrases makes the snippet cleaner without losing meaning.", "For example, “A complete and detailed guide to learning how to count characters for SEO titles” can often become “How to Count Characters for SEO Titles”.", "4. Compare two or three variations. Do not stop at the first acceptable version. Make a few alternatives and compare them side by side. Sometimes a slightly shorter version is stronger and easier to understand.", "5. Review the final wording for clarity. A title that fits well but sounds unnatural is still a bad title. Always do one final read to make sure the text is useful to humans, not just adjusted for length."] },
          { heading: "Common mistakes to avoid", paragraphs: ["One common mistake is treating character count as the only SEO rule. It is important, but it is not everything. Search engines care about relevance, clarity, page quality, and user intent too.", "Another mistake is stuffing titles with too many keywords. Even if the length looks acceptable, the result can feel spammy and reduce trust.", "It is also a mistake to write descriptions that are technically the right length but say nothing helpful. Users need a reason to click. A strong description should explain the value of the page in clear language.", "Finally, avoid copying the same title pattern across too many pages without adjusting it for each topic. Unique and specific copy usually performs better."] }
        ]
      }
    }
  },
  {
    slug: "meta-title-length-guide",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["how-to-count-characters-for-seo", "meta-description-length-for-ctr"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: metaTitleLengthGuideContent
  },
  {
    slug: "meta-description-length-for-ctr",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["how-to-count-characters-for-seo", "meta-title-length-guide"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: metaDescriptionLengthForCtrContent
  },
  {
    slug: "utm-parameters-explained",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["how-to-build-utm-links", "common-utm-tagging-mistakes"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: utmParametersExplainedContent
  },
  {
    slug: "common-utm-tagging-mistakes",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["how-to-build-utm-links", "utm-parameters-explained"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: commonUtmTaggingMistakesContent
  },
  {
    slug: "open-graph-image-size-guide",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["how-to-check-open-graph-metadata", "fix-missing-social-preview-images"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: openGraphImageSizeGuideContent
  },
  {
    slug: "fix-missing-social-preview-images",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["how-to-check-open-graph-metadata", "open-graph-image-size-guide"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: fixMissingSocialPreviewImagesContent
  },
  {
    slug: "png-vs-jpg-vs-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["what-is-webp", "how-to-convert-images-to-webp"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: pngVsJpgVsWebpContent
  },
  {
    slug: "when-not-to-use-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["what-is-webp", "png-vs-jpg-vs-webp"],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    content: whenNotToUseWebpContent
  },
  {
    slug: "best-webp-quality-settings",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["how-to-convert-images-to-webp", "lossy-vs-lossless-webp"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: bestWebpQualitySettingsContent
  },
  {
    slug: "jpg-to-webp-vs-png-to-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["png-vs-jpg-vs-webp", "best-webp-quality-settings"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: jpgToWebpVsPngToWebpContent
  },
  {
    slug: "common-webp-conversion-mistakes",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["how-to-convert-images-to-webp", "when-not-to-use-webp"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: commonWebpConversionMistakesContent
  },
  {
    slug: "why-webp-image-looks-blurry",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["best-webp-quality-settings", "reduce-image-size-without-losing-too-much-quality"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: whyWebpImageLooksBlurryContent
  },
  {
    slug: "lossy-vs-lossless-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["jpg-to-webp-vs-png-to-webp", "best-webp-quality-settings"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: lossyVsLosslessWebpContent
  },

  {
    slug: "compress-images-for-page-speed",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["how-to-convert-images-to-webp", "best-image-file-size-for-websites"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: compressImagesForPageSpeedContent
  },
  {
    slug: "best-image-file-size-for-websites",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["compress-images-for-page-speed", "png-vs-jpg-vs-webp"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: bestImageFileSizeForWebsitesContent
  },
  {
    slug: "why-large-images-slow-down-websites",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["compress-images-for-page-speed", "best-image-file-size-for-websites"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: whyLargeImagesSlowDownWebsitesContent
  },
  {
    slug: "optimize-blog-images-before-uploading",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["compress-images-for-page-speed", "reduce-image-size-without-losing-too-much-quality"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: optimizeBlogImagesBeforeUploadingContent
  },
  {
    slug: "image-compression-mistakes-that-hurt-quality",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["best-image-file-size-for-websites", "reduce-image-size-without-losing-too-much-quality"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: imageCompressionMistakesThatHurtQualityContent
  },
  {
    slug: "compress-images-without-making-them-look-bad",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["compress-images-for-page-speed", "image-compression-mistakes-that-hurt-quality"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: compressImagesWithoutMakingThemLookBadContent
  },
  {
    slug: "best-image-compression-settings-for-web",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["best-image-file-size-for-websites", "optimize-blog-images-before-uploading"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: bestImageCompressionSettingsForWebContent
  },
  {
    slug: "resize-image-before-compressing",
    category: "color-image",
    relatedToolSlug: "image-compressor",
    relatedGuideSlugs: ["best-image-file-size-for-websites", "compress-images-for-page-speed"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: resizeImageBeforeCompressingContent
  },
  {
    slug: "resize-images-for-social-media-without-bad-cropping",
    category: "color-image",
    relatedToolSlug: "image-resizer",
    relatedGuideSlugs: ["open-graph-image-size-guide", "copy-web-color-from-screen"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: resizeImagesForSocialMediaWithoutBadCroppingContent
  },
  {
    slug: "best-image-dimensions-for-blog-headers-and-thumbnails",
    category: "color-image",
    relatedToolSlug: "image-resizer",
    relatedGuideSlugs: ["best-image-file-size-for-websites", "optimize-blog-images-before-uploading"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: bestImageDimensionsForBlogHeadersAndThumbnailsContent
  },
  {
    slug: "resize-image-without-stretching",
    category: "color-image",
    relatedToolSlug: "image-resizer",
    relatedGuideSlugs: ["compress-images-without-making-them-look-bad", "resize-image-before-compressing"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: resizeImageWithoutStretchingContent
  },
  {
    slug: "json-parse-error-examples",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["json-formatting-basics", "how-to-use-a-json-formatter-for-debugging"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: jsonParseErrorExamplesContent
  },
  {
    slug: "validate-json-before-api-requests",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["json-formatting-basics", "json-parse-error-examples"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: validateJsonBeforeApiRequestsContent
  },

  {
    slug: "reduce-image-size-without-losing-too-much-quality",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    relatedGuideSlugs: ["how-to-convert-images-to-webp", "png-vs-jpg-vs-webp"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: reduceImageSizeWithoutLosingTooMuchQualityContent
  },
  {
    slug: "minified-vs-pretty-json",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["json-formatting-basics", "how-to-use-a-json-formatter-for-debugging"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: minifiedVsPrettyJsonContent
  },
  {
    slug: "why-json-breaks-after-copy-paste",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["json-parse-error-examples", "validate-json-before-api-requests"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: whyJsonBreaksAfterCopyPasteContent
  },
  {
    slug: "read-json-errors-more-quickly",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["how-to-use-a-json-formatter-for-debugging", "json-parse-error-examples"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: readJsonErrorsMoreQuicklyContent
  },
  {
    slug: "when-to-use-minified-vs-pretty-json",
    category: "developer",
    relatedToolSlug: "json-formatter",
    relatedGuideSlugs: ["json-formatting-basics", "minified-vs-pretty-json"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: whenToUseMinifiedVsPrettyJsonContent
  },
  {
    slug: "track-social-campaigns-with-utm-links",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["how-to-build-utm-links", "utm-parameters-explained"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: trackSocialCampaignsWithUtmLinksContent
  },
  {
    slug: "track-email-clicks-with-utm-parameters",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["utm-parameters-explained", "common-utm-tagging-mistakes"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: trackEmailClicksWithUtmParametersContent
  },
  {
    slug: "name-utm-campaigns-consistently",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["utm-parameters-explained", "common-utm-tagging-mistakes"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: nameUtmCampaignsConsistentlyContent
  },
  {
    slug: "utm-source-vs-medium-vs-campaign",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["utm-parameters-explained", "name-utm-campaigns-consistently"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: utmSourceVsMediumVsCampaignContent
  },
  {
    slug: "use-utm-links-without-breaking-reporting",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["common-utm-tagging-mistakes", "name-utm-campaigns-consistently"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: useUtmLinksWithoutBreakingReportingContent
  },
  {
    slug: "best-utm-naming-rules-for-small-teams",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["name-utm-campaigns-consistently", "utm-source-vs-medium-vs-campaign"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: bestUtmNamingRulesForSmallTeamsContent
  },
  {
    slug: "check-tagged-url-before-sharing",
    category: "web-marketing",
    relatedToolSlug: "utm-builder",
    relatedGuideSlugs: ["how-to-build-utm-links", "track-email-clicks-with-utm-parameters"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: checkTaggedUrlBeforeSharingContent
  },
  {
    slug: "check-character-count-before-publishing",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["how-to-count-characters-for-seo", "meta-title-length-guide"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: checkCharacterCountBeforePublishingContent
  },
  {
    slug: "blog-title-length-for-readability",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["meta-title-length-guide", "meta-description-length-for-ctr"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: blogTitleLengthForReadabilityContent
  },
  {
    slug: "write-shorter-titles-without-being-vague",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["blog-title-length-for-readability", "meta-title-length-guide"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: writeShorterTitlesWithoutBeingVagueContent
  },
  {
    slug: "character-count-for-social-captions",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["check-character-count-before-publishing", "blog-title-length-for-readability"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: characterCountForSocialCaptionsContent
  },
  {
    slug: "shorten-blog-title-keep-main-keyword",
    category: "web-marketing",
    relatedToolSlug: "character-counter",
    relatedGuideSlugs: ["blog-title-length-for-readability", "how-to-count-characters-for-seo"],
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    content: shortenBlogTitleKeepMainKeywordContent
  },
  {
    slug: "why-open-graph-images-look-wrong",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["how-to-check-open-graph-metadata", "open-graph-image-size-guide"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: whyOpenGraphImagesLookWrongContent
  },
  {
    slug: "preview-shared-links-before-posting",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["fix-missing-social-preview-images", "how-to-check-open-graph-metadata"],
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    content: previewSharedLinksBeforePostingContent
  },
  {
    slug: "why-link-preview-title-looks-wrong",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["how-to-check-open-graph-metadata", "open-graph-image-size-guide"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: whyLinkPreviewTitleLooksWrongContent
  },
  {
    slug: "update-open-graph-after-page-edits",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["test-open-graph-changes-before-sharing", "fix-missing-social-preview-images"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: updateOpenGraphAfterPageEditsContent
  },
  {
    slug: "why-link-preview-description-looks-wrong",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["why-link-preview-title-looks-wrong", "how-to-check-open-graph-metadata"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: whyLinkPreviewDescriptionLooksWrongContent
  },
  {
    slug: "test-open-graph-changes-before-sharing",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["update-open-graph-after-page-edits", "fix-missing-social-preview-images"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: testOpenGraphChangesBeforeSharingContent
  },
  {
    slug: "common-open-graph-tag-mistakes",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    relatedGuideSlugs: ["how-to-check-open-graph-metadata", "open-graph-image-size-guide"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: commonOpenGraphTagMistakesContent
  },

  {
    slug: "how-to-convert-images-to-webp",
    category: "color-image",
    relatedToolSlug: "webp-converter",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: howToConvertImagesToWebpEn,
      ko: howToConvertImagesToWebpKo,
      ja: howToConvertImagesToWebpJa,
      es: howToConvertImagesToWebpEn,
      fr: howToConvertImagesToWebpEn,
      de: howToConvertImagesToWebpEn
    }
  },
  {
    slug: "when-to-use-base64-encoding",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["base64-vs-url-encoding", "how-to-decode-base64-safely-for-debugging"],
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: whenToUseBase64EncodingEn,
      ko: whenToUseBase64EncodingKo,
      ja: whenToUseBase64EncodingJa,
      es: whenToUseBase64EncodingEs,
      fr: whenToUseBase64EncodingFr,
      de: whenToUseBase64EncodingDe
    }
  },
  {
    slug: "base64-vs-url-encoding",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "how-to-decode-base64-safely-for-debugging"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: base64VsUrlEncodingContent
  },
  {
    slug: "when-to-encode-url-and-when-not-to",
    category: "developer",
    relatedToolSlug: "url-encode-decode",
    relatedGuideSlugs: ["base64-vs-url-encoding", "how-to-build-utm-links"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whenToEncodeUrlAndWhenNotToContent
  },
  {
    slug: "fix-broken-links-caused-by-url-encoding",
    category: "developer",
    relatedToolSlug: "url-encode-decode",
    relatedGuideSlugs: ["check-tagged-url-before-sharing", "use-utm-links-without-breaking-reporting"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: fixBrokenLinksCausedByUrlEncodingContent
  },
  {
    slug: "spaces-symbols-and-query-strings-url-encoding",
    category: "developer",
    relatedToolSlug: "url-encode-decode",
    relatedGuideSlugs: ["base64-vs-url-encoding", "utm-source-vs-medium-vs-campaign"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: spacesSymbolsAndQueryStringsUrlEncodingContent
  },
  {
    slug: "what-does-xn-mean-in-domain",
    category: "developer",
    relatedToolSlug: "punycode-converter",
    relatedGuideSlugs: ["when-to-encode-url-and-when-not-to", "spaces-symbols-and-query-strings-url-encoding"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whatDoesXnMeanInDomainContent
  },
  {
    slug: "unicode-domains-vs-punycode",
    category: "developer",
    relatedToolSlug: "punycode-converter",
    relatedGuideSlugs: ["what-does-xn-mean-in-domain", "tell-whether-string-is-base64"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: unicodeDomainsVsPunycodeContent
  },
  {
    slug: "check-whether-domain-is-punycode",
    category: "developer",
    relatedToolSlug: "punycode-converter",
    relatedGuideSlugs: ["unicode-domains-vs-punycode", "fix-broken-links-caused-by-url-encoding"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: checkWhetherDomainIsPunycodeContent
  },
  {
    slug: "how-to-decode-base64-safely-for-debugging",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "base64-vs-url-encoding"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: howToDecodeBase64SafelyForDebuggingContent
  },
  {
    slug: "common-base64-mistakes-in-web-workflows",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "how-to-decode-base64-safely-for-debugging"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: commonBase64MistakesInWebWorkflowsContent
  },
  {
    slug: "when-plain-text-is-better-than-base64",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "common-base64-mistakes-in-web-workflows"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: whenPlainTextIsBetterThanBase64Content
  },
  {
    slug: "why-base64-strings-get-so-long",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "when-plain-text-is-better-than-base64"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whyBase64StringsGetSoLongContent
  },
  {
    slug: "tell-whether-string-is-base64",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["how-to-decode-base64-safely-for-debugging", "base64-vs-url-encoding"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: tellWhetherStringIsBase64Content
  },
  {
    slug: "when-base64-makes-debugging-harder",
    category: "developer",
    relatedToolSlug: "base64-encode-decode",
    relatedGuideSlugs: ["common-base64-mistakes-in-web-workflows", "when-plain-text-is-better-than-base64"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whenBase64MakesDebuggingHarderContent
  },
  {
    slug: "md5-vs-sha256",
    category: "developer",
    relatedToolSlug: "hash-generator",
    relatedGuideSlugs: ["when-to-use-base64-encoding", "why-base64-strings-get-so-long"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: md5VsSha256Content
  },
  {
    slug: "compare-hashes-to-check-data-changes",
    category: "developer",
    relatedToolSlug: "hash-generator",
    relatedGuideSlugs: ["validate-json-before-api-requests", "read-json-errors-more-quickly"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: compareHashesToCheckDataChangesContent
  },
  {
    slug: "why-two-hashes-are-different",
    category: "developer",
    relatedToolSlug: "hash-generator",
    relatedGuideSlugs: ["why-json-breaks-after-copy-paste", "tell-whether-string-is-base64"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whyTwoHashesAreDifferentContent
  },
  {
    slug: "how-to-check-open-graph-metadata",
    category: "web-marketing",
    relatedToolSlug: "og-preview",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: howToCheckOpenGraphMetadataEn,
      ko: howToCheckOpenGraphMetadataKo,
      ja: howToCheckOpenGraphMetadataJa,
      es: howToCheckOpenGraphMetadataEs,
      fr: howToCheckOpenGraphMetadataFr,
      de: howToCheckOpenGraphMetadataDe
    }
  },
  {
    slug: "how-to-extract-youtube-thumbnails",
    category: "web-marketing",
    relatedToolSlug: "youtube-thumbnail-extractor",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: howToExtractYoutubeThumbnailsEn,
      ko: howToExtractYoutubeThumbnailsKo,
      ja: howToExtractYoutubeThumbnailsJa,
      es: howToExtractYoutubeThumbnailsEs,
      fr: howToExtractYoutubeThumbnailsFr,
      de: howToExtractYoutubeThumbnailsDe
    }
  },
  {
    slug: "how-to-use-a-json-formatter-for-debugging",
    category: "developer",
    relatedToolSlug: "json-formatter",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: howToUseAJsonFormatterForDebuggingEn,
      ko: howToUseAJsonFormatterForDebuggingKo,
      ja: howToUseAJsonFormatterForDebuggingEn,
      es: howToUseAJsonFormatterForDebuggingEn,
      fr: howToUseAJsonFormatterForDebuggingEn,
      de: howToUseAJsonFormatterForDebuggingEn
    }
  },

  {
    slug: "how-to-convert-timestamps-quickly",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["unix-timestamp-seconds-vs-milliseconds", "convert-api-timestamps-to-readable-dates"],
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    content: {
      en: howToConvertTimestampsQuicklyEn,
      ko: howToConvertTimestampsQuicklyKo,
      ja: howToConvertTimestampsQuicklyJa,
      es: howToConvertTimestampsQuicklyEs,
      fr: howToConvertTimestampsQuicklyFr,
      de: howToConvertTimestampsQuicklyDe
    }
  },
  {
    slug: "unix-timestamp-seconds-vs-milliseconds",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["how-to-convert-timestamps-quickly", "validate-json-before-api-requests"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: unixTimestampSecondsVsMillisecondsContent
  },
  {
    slug: "convert-api-timestamps-to-readable-dates",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["how-to-convert-timestamps-quickly", "unix-timestamp-seconds-vs-milliseconds"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: convertApiTimestampsToReadableDatesContent
  },
  {
    slug: "why-your-timestamp-looks-wrong-in-javascript",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["how-to-convert-timestamps-quickly", "unix-timestamp-seconds-vs-milliseconds"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: whyYourTimestampLooksWrongInJavascriptContent
  },
  {
    slug: "debug-timezone-confusion-in-timestamps",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["convert-api-timestamps-to-readable-dates", "why-your-timestamp-looks-wrong-in-javascript"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: debugTimezoneConfusionInTimestampsContent
  },
  {
    slug: "api-dates-vs-unix-timestamps",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["convert-api-timestamps-to-readable-dates", "unix-timestamp-seconds-vs-milliseconds"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: apiDatesVsUnixTimestampsContent
  },
  {
    slug: "spot-seconds-vs-milliseconds-bug",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["unix-timestamp-seconds-vs-milliseconds", "why-your-timestamp-looks-wrong-in-javascript"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: spotSecondsVsMillisecondsBugContent
  },
  {
    slug: "timestamp-looks-right-but-timezone-is-wrong",
    category: "developer",
    relatedToolSlug: "timestamp-converter",
    relatedGuideSlugs: ["debug-timezone-confusion-in-timestamps", "convert-api-timestamps-to-readable-dates"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: timestampLooksRightButTimezoneIsWrongContent
  },
  {
    slug: "download-youtube-thumbnail-by-url",
    category: "web-marketing",
    relatedToolSlug: "youtube-thumbnail-extractor",
    relatedGuideSlugs: ["how-to-extract-youtube-thumbnails", "check-youtube-thumbnail-quality"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: downloadYoutubeThumbnailByUrlContent
  },
  {
    slug: "youtube-thumbnail-sizes-explained",
    category: "web-marketing",
    relatedToolSlug: "youtube-thumbnail-extractor",
    relatedGuideSlugs: ["how-to-extract-youtube-thumbnails", "download-youtube-thumbnail-by-url"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: youtubeThumbnailSizesExplainedContent
  },
  {
    slug: "check-youtube-thumbnail-quality",
    category: "web-marketing",
    relatedToolSlug: "youtube-thumbnail-extractor",
    relatedGuideSlugs: ["how-to-extract-youtube-thumbnails", "youtube-thumbnail-sizes-explained"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: checkYoutubeThumbnailQualityContent
  },
  {
    slug: "when-to-use-youtube-thumbnails-for-reference",
    category: "web-marketing",
    relatedToolSlug: "youtube-thumbnail-extractor",
    relatedGuideSlugs: ["check-youtube-thumbnail-quality", "download-youtube-thumbnail-by-url"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: whenToUseYoutubeThumbnailsForReferenceContent
  },
  {
    slug: "capture-website-preview-before-sharing",
    category: "web-marketing",
    relatedToolSlug: "website-screenshot",
    relatedGuideSlugs: ["website-screenshot-guide", "full-page-website-screenshot"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: captureWebsitePreviewBeforeSharingContent
  },
  {
    slug: "use-website-screenshots-in-client-feedback",
    category: "web-marketing",
    relatedToolSlug: "website-screenshot",
    relatedGuideSlugs: ["capture-website-previews-for-clients", "website-screenshot-mistakes"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: useWebsiteScreenshotsInClientFeedbackContent
  },
  {
    slug: "full-page-vs-cropped-website-screenshot",
    category: "web-marketing",
    relatedToolSlug: "website-screenshot",
    relatedGuideSlugs: ["full-page-website-screenshot", "website-screenshot-vs-screen-recording"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: fullPageVsCroppedWebsiteScreenshotContent
  },
  {
    slug: "hex-vs-rgb-vs-hsl",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["how-to-use-html-color-picker", "match-website-colors-consistently"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: hexVsRgbVsHslContent
  },
  {
    slug: "match-website-colors-consistently",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["how-to-use-html-color-picker", "copy-web-color-from-screen"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: matchWebsiteColorsConsistentlyContent
  },
  {
    slug: "create-basic-website-color-palette",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["how-many-colors-in-brand-palette", "choose-supporting-colors-around-brand-color"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: createBasicWebsiteColorPaletteContent
  },
  {
    slug: "how-many-colors-in-brand-palette",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "website-palette-mistakes"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: howManyColorsInBrandPaletteContent
  },
  {
    slug: "choose-supporting-colors-around-brand-color",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "how-many-colors-in-brand-palette"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: chooseSupportingColorsAroundBrandColorContent
  },
  {
    slug: "website-palette-mistakes",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "choose-supporting-colors-around-brand-color"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: websitePaletteMistakesContent
  },
  {
    slug: "build-consistent-color-palette",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "match-website-colors-consistently"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: buildConsistentColorPaletteContent
  },
  {
    slug: "use-css-variables-for-repeated-colors",
    category: "color-image",
    relatedToolSlug: "css-variable-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "match-website-colors-consistently"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: useCssVariablesForRepeatedColorsContent
  },
  {
    slug: "css-variables-vs-hardcoded-values",
    category: "color-image",
    relatedToolSlug: "css-variable-generator",
    relatedGuideSlugs: ["when-to-use-hex-rgb-or-hsl", "build-consistent-color-palette"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: cssVariablesVsHardcodedValuesContent
  },
  {
    slug: "organize-css-variables-for-small-website",
    category: "color-image",
    relatedToolSlug: "css-variable-generator",
    relatedGuideSlugs: ["use-css-variables-for-repeated-colors", "css-variables-vs-hardcoded-values"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: organizeCssVariablesForSmallWebsiteContent
  },
  {
    slug: "choose-accent-colors-for-website",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["choose-supporting-colors-around-brand-color", "hex-vs-rgb-vs-hsl"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: chooseAccentColorsForWebsiteContent
  },
  {
    slug: "test-color-palette-before-using",
    category: "color-image",
    relatedToolSlug: "palette-generator",
    relatedGuideSlugs: ["create-basic-website-color-palette", "website-palette-mistakes"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: testColorPaletteBeforeUsingContent
  },
  {
    slug: "copy-web-color-from-screen",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["how-to-use-html-color-picker", "hex-vs-rgb-vs-hsl"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: copyWebColorFromScreenContent
  },
  {
    slug: "common-color-picker-mistakes",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["hex-vs-rgb-vs-hsl", "match-website-colors-consistently"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: commonColorPickerMistakesContent
  },
  {
    slug: "pick-website-colors-more-confidently",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["how-to-use-html-color-picker", "match-website-colors-consistently"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: pickWebsiteColorsMoreConfidentlyContent
  },
  {
    slug: "when-to-use-hex-rgb-or-hsl",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["hex-vs-rgb-vs-hsl", "common-color-picker-mistakes"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whenToUseHexRgbOrHslContent
  },
  {
    slug: "check-color-combination-before-using",
    category: "color-image",
    relatedToolSlug: "html-color-picker",
    relatedGuideSlugs: ["match-website-colors-consistently", "check-brand-colors-without-hurting-accessibility"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: checkColorCombinationBeforeUsingContent
  },
  {
    slug: "extract-brand-colors-from-image",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["image-color-extractor-guide", "build-color-palette-from-photo"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: extractBrandColorsFromImageContent
  },
  {
    slug: "build-color-palette-from-photo",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["image-color-extractor-guide", "extract-brand-colors-from-image"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: buildColorPaletteFromPhotoContent
  },
  {
    slug: "when-image-color-sampling-helps",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["image-color-extractor-guide", "build-color-palette-from-photo"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: whenImageColorSamplingHelpsContent
  },
  {
    slug: "mistakes-when-extracting-colors-from-images",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["extract-brand-colors-from-image", "when-image-color-sampling-helps"],
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    content: mistakesWhenExtractingColorsFromImagesContent
  },
  {
    slug: "find-main-colors-in-image-quickly",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["extract-brand-colors-from-image", "build-color-palette-from-photo"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: findMainColorsInImageQuicklyContent
  },
  {
    slug: "use-extracted-colors-in-website-palette",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["create-basic-website-color-palette", "build-consistent-color-palette"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: useExtractedColorsInWebsitePaletteContent
  },
  {
    slug: "avoid-bad-color-picks-from-busy-images",
    category: "color-image",
    relatedToolSlug: "image-color-extractor",
    relatedGuideSlugs: ["mistakes-when-extracting-colors-from-images", "when-image-color-sampling-helps"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: avoidBadColorPicksFromBusyImagesContent
  },
  {
    slug: "contrast-checker-guide",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["check-text-contrast-for-accessibility", "wcag-contrast-ratio-basics"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: contrastCheckerGuideContent
  },
  {
    slug: "check-text-contrast-for-accessibility",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["contrast-checker-guide", "low-contrast-text-hurts-readability"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: checkTextContrastForAccessibilityContent
  },
  {
    slug: "low-contrast-text-hurts-readability",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["check-text-contrast-for-accessibility", "accessibility-color-contrast-mistakes"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: lowContrastTextHurtsReadabilityContent
  },
  {
    slug: "wcag-contrast-ratio-basics",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["contrast-checker-guide", "accessibility-color-contrast-mistakes"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: wcagContrastRatioBasicsContent
  },
  {
    slug: "accessibility-color-contrast-mistakes",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["wcag-contrast-ratio-basics", "low-contrast-text-hurts-readability"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: accessibilityColorContrastMistakesContent
  },
  {
    slug: "fix-low-contrast-text-on-website",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["check-text-contrast-for-accessibility", "low-contrast-text-hurts-readability"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: fixLowContrastTextOnWebsiteContent
  },
  {
    slug: "best-contrast-practices-for-ui-text",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["wcag-contrast-ratio-basics", "accessibility-color-contrast-mistakes"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: bestContrastPracticesForUiTextContent
  },
  {
    slug: "check-brand-colors-without-hurting-accessibility",
    category: "color-image",
    relatedToolSlug: "contrast-checker",
    relatedGuideSlugs: ["check-text-contrast-for-accessibility", "common-color-picker-mistakes"],
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    content: checkBrandColorsWithoutHurtingAccessibilityContent
  },
  {
    slug: "gradient-generator-guide",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["create-simple-css-gradient-background", "linear-vs-radial-gradient"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: gradientGeneratorGuideContent
  },
  {
    slug: "create-simple-css-gradient-background",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["gradient-generator-guide", "linear-vs-radial-gradient"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: createSimpleCssGradientBackgroundContent
  },
  {
    slug: "linear-vs-radial-gradient",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["gradient-generator-guide", "create-simple-css-gradient-background"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: linearVsRadialGradientContent
  },
  {
    slug: "when-gradients-improve-ui",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["gradient-generator-guide", "common-gradient-mistakes-ui"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: whenGradientsImproveUiContent
  },
  {
    slug: "common-gradient-mistakes-ui",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["gradient-generator-guide", "when-gradients-improve-ui"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: commonGradientMistakesUiContent
  },
  {
    slug: "use-gradients-without-busy-ui",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["when-gradients-improve-ui", "common-gradient-mistakes-ui"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: useGradientsWithoutBusyUiContent
  },
  {
    slug: "best-places-to-use-gradients-on-website",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["create-simple-css-gradient-background", "linear-vs-radial-gradient"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: bestPlacesToUseGradientsOnWebsiteContent
  },
  {
    slug: "test-gradient-before-using-in-production",
    category: "color-image",
    relatedToolSlug: "gradient-generator",
    relatedGuideSlugs: ["create-simple-css-gradient-background", "when-gradients-improve-ui"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    content: testGradientBeforeUsingInProductionContent
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
  const currentGuideDefinition = guideDefinitions.find((guide) => guide.slug === slug);

  if (!currentGuideDefinition) {
    return [];
  }

  const localizedGuides = getGuides(locale);

  if (currentGuideDefinition.relatedGuideSlugs?.length) {
    return currentGuideDefinition.relatedGuideSlugs
      .map((relatedSlug) => localizedGuides.find((guide) => guide.slug === relatedSlug))
      .filter((guide): guide is GuideItem => Boolean(guide))
      .slice(0, limit);
  }

  return localizedGuides
    .filter((guide) => guide.slug !== slug && guide.category === currentGuideDefinition.category)
    .slice(0, limit);
}

export function getGuideRelatedTool(locale: LocaleCode, slug: string) {
  const guide = getGuide(locale, slug);

  if (!guide?.relatedToolSlug) {
    return undefined;
  }

  return getTool(locale, guide.relatedToolSlug);
}

export function getGuidesByCategory(locale: LocaleCode, category: ToolCategory) {
  return getGuides(locale).filter((guide) => guide.category === category);
}
