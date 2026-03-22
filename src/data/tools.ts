export type ToolCategory = "color-image" | "web-marketing" | "developer";
export type ToolStatus = "Available" | "Coming Soon";

export type ToolItem = {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  status: ToolStatus;
  featured: boolean;
};

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  "color-image": "Color & Image",
  "web-marketing": "Web & Marketing",
  developer: "Developer Tools"
};

export const tools: ToolItem[] = [
  {
    slug: "html-color-picker",
    name: "HTML Color Picker",
    description: "Pick and preview colors quickly for your web projects.",
    category: "color-image",
    status: "Available",
    featured: true
  },
  {
    slug: "image-color-extractor",
    name: "Image Color Extractor",
    description: "Extract dominant colors from images in one click.",
    category: "color-image",
    status: "Available",
    featured: true
  },
  {
    slug: "palette-generator",
    name: "Palette Generator",
    description: "Generate matching color palettes for websites and apps.",
    category: "color-image",
    status: "Available",
    featured: true
  },
  {
    slug: "contrast-checker",
    name: "Contrast Checker",
    description: "Check text and background contrast for better accessibility.",
    category: "color-image",
    status: "Available",
    featured: false
  },
  {
    slug: "gradient-generator",
    name: "Gradient Generator",
    description: "Create smooth CSS gradients and copy the code instantly.",
    category: "color-image",
    status: "Available",
    featured: false
  },
  {
    slug: "css-variable-generator",
    name: "CSS Variable Generator",
    description: "Turn your design tokens into ready-to-use CSS variables.",
    category: "color-image",
    status: "Available",
    featured: false
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file size while keeping visual quality high.",
    category: "color-image",
    status: "Available",
    featured: true
  },
  {
    slug: "webp-converter",
    name: "WebP Converter",
    description: "Convert common image formats into modern WebP files.",
    category: "color-image",
    status: "Available",
    featured: true
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    description: "Resize images to exact dimensions for social and web use.",
    category: "color-image",
    status: "Available",
    featured: false
  },
  {
    slug: "website-screenshot",
    name: "Website Screenshot",
    description: "Capture full-page screenshots directly from a URL.",
    category: "web-marketing",
    status: "Available",
    featured: false
  },
  {
    slug: "youtube-thumbnail-extractor",
    name: "YouTube Thumbnail Extractor",
    description: "Grab YouTube thumbnail images from any video link.",
    category: "web-marketing",
    status: "Available",
    featured: true
  },
  {
    slug: "website-image-extractor",
    name: "Website Image Extractor",
    description: "Collect image assets from a webpage for quick review.",
    category: "web-marketing",
    status: "Available",
    featured: false
  },
  {
    slug: "og-preview",
    name: "OG Preview",
    description: "Preview Open Graph cards before publishing your content.",
    category: "web-marketing",
    status: "Available",
    featured: false
  },
  {
    slug: "utm-builder",
    name: "UTM Builder",
    description: "Build UTM tracking links with clean, consistent parameters.",
    category: "web-marketing",
    status: "Available",
    featured: false
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format and validate JSON for cleaner debugging.",
    category: "developer",
    status: "Available",
    featured: true
  },
  {
    slug: "url-encode-decode",
    name: "URL Encode/Decode",
    description: "Encode and decode URLs safely for requests and links.",
    category: "developer",
    status: "Available",
    featured: false
  },
  {
    slug: "base64-encode-decode",
    name: "Base64 Encode/Decode",
    description: "Convert plain text to Base64 and back instantly.",
    category: "developer",
    status: "Available",
    featured: false
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    description: "Count characters, words, and lines in your text.",
    category: "developer",
    status: "Available",
    featured: false
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate common hashes for quick development checks.",
    category: "developer",
    status: "Available",
    featured: false
  },
  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Switch between Unix timestamps and readable dates.",
    category: "developer",
    status: "Available",
    featured: false
  },
  {
    slug: "punycode-converter",
    name: "Punycode Converter",
    description: "Convert internationalized domain names between Unicode and ASCII Punycode.",
    category: "developer",
    status: "Available",
    featured: false
  }
];

export const categoryOrder: ToolCategory[] = ["color-image", "web-marketing", "developer"];

export const liveToolRoutes: Record<string, string> = {
  "html-color-picker": "html-color-picker",
  "image-color-extractor": "image-color-extractor",
  "palette-generator": "palette-generator",
  "contrast-checker": "contrast-checker",
  "image-resizer": "image-resizer",
  "webp-converter": "webp-converter",
  "gradient-generator": "gradient-generator",
  "css-variable-generator": "css-variable-generator",
  "image-compressor": "image-compressor",
  "youtube-thumbnail-extractor": "youtube-thumbnail-extractor",
  "website-image-extractor": "website-image-extractor",
  "og-preview": "og-preview",
  "utm-builder": "utm-builder",
  "website-screenshot": "website-screenshot",
  "json-formatter": "json-formatter",
  "url-encode-decode": "url-encode-decode",
  "base64-encode-decode": "base64-encode-decode",
  "character-counter": "character-counter",
  "hash-generator": "hash-generator",
  "timestamp-converter": "timestamp-converter",
  "punycode-converter": "punycode-converter"
};

export const featuredTools = tools.filter((tool) => tool.featured).slice(0, 6);

export const toolsByCategory = categoryOrder.map((category) => ({
  key: category,
  label: CATEGORY_LABELS[category],
  items: tools.filter((tool) => tool.category === category)
}));
