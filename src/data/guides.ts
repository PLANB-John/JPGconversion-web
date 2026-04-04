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
  | "how-to-convert-timestamps-quickly"
  | "how-to-use-a-json-formatter-for-debugging"
  | "how-to-convert-images-to-webp"
  | "open-graph-image-size-guide"
  | "fix-missing-social-preview-images"
  | "png-vs-jpg-vs-webp"
  | "when-not-to-use-webp";

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
    relatedToolLabel: "Open the Open Graph Checker / Preview",
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
    relatedToolLabel: "Open Graph Checker / Preview 열기",
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
    relatedToolLabel: "Open Graph Checker / Previewを開く",
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
    relatedToolLabel: "Abrir Open Graph Checker / Preview",
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
    relatedToolLabel: "Ouvrir Open Graph Checker / Preview",
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
    relatedToolLabel: "Open Graph Checker / Preview öffnen",
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
    relatedToolLabel: "Open the Open Graph Checker / Preview",
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
    relatedToolLabel: "Open Graph Checker / Preview 열기",
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
    relatedToolLabel: "Open Graph Checker / Previewを開く",
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
    relatedToolLabel: "Abrir Open Graph Checker / Preview",
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
    relatedToolLabel: "Ouvrir Open Graph Checker / Preview",
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
    relatedToolLabel: "Open Graph Checker / Preview öffnen",
    sections: [
      { heading: "Zuerst die Pflicht-Tags prüfen", paragraphs: ["Im head sollten og:title, og:description und og:image vorhanden sein.", "Fehlende oder falsche og:image-Angaben sind die häufigste Ursache."] },
      { heading: "Bild-URL für Crawler verifizieren", paragraphs: ["og:image muss eine absolute HTTPS-URL sein.", "Öffne die Bild-URL im Inkognito-Modus und prüfe öffentlichen Zugriff ohne Login."] },
      { heading: "Format und Größe kontrollieren", paragraphs: ["Zu kleine Bilder oder ungewöhnliche Formate führen oft zu fehlender Vorschau.", "1200×630 in JPG oder PNG ist ein verlässlicher Ausgangspunkt."] },
      { heading: "Cache aktualisieren", paragraphs: ["Plattformen cachen Vorschauen. Deshalb kann nach Änderungen noch alter Stand erscheinen.", "Per Debugger/Checker einen neuen Scrape anstoßen."] },
      { heading: "Schnelle Checkliste", paragraphs: ["Vor dem Teilen kurz abhaken:"], bullets: ["og:image im HTML vorhanden.", "Absolute HTTPS-URL und öffentlich erreichbar.", "Keine Blockade via Robots/Header.", "Bildmaße social-tauglich.", "Neuabruf angefordert."] }
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
