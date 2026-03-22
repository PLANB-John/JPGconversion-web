import type { LocaleCode } from "@/data/locales";

export type ToolCategory = "color-image" | "web-marketing" | "developer";
export type ToolStatus = "Available" | "Coming Soon";

type ToolDefinition = {
  slug: string;
  category: ToolCategory;
  featured: boolean;
};

export type ToolItem = ToolDefinition & {
  name: string;
  description: string;
  status: ToolStatus;
};

type LocalizedToolContent = {
  name: string;
  description: string;
};

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  "color-image": "Color & Image",
  "web-marketing": "Web & Marketing",
  developer: "Developer Tools"
};

const toolDefinitions: ToolDefinition[] = [
  { slug: "html-color-picker", category: "color-image", featured: true },
  { slug: "image-color-extractor", category: "color-image", featured: true },
  { slug: "palette-generator", category: "color-image", featured: true },
  { slug: "contrast-checker", category: "color-image", featured: false },
  { slug: "gradient-generator", category: "color-image", featured: false },
  { slug: "css-variable-generator", category: "color-image", featured: false },
  { slug: "image-compressor", category: "color-image", featured: true },
  { slug: "webp-converter", category: "color-image", featured: true },
  { slug: "image-resizer", category: "color-image", featured: false },
  { slug: "website-screenshot", category: "web-marketing", featured: false },
  { slug: "youtube-thumbnail-extractor", category: "web-marketing", featured: true },
  { slug: "website-image-extractor", category: "web-marketing", featured: false },
  { slug: "og-preview", category: "web-marketing", featured: false },
  { slug: "utm-builder", category: "web-marketing", featured: false },
  { slug: "json-formatter", category: "developer", featured: true },
  { slug: "url-encode-decode", category: "developer", featured: false },
  { slug: "base64-encode-decode", category: "developer", featured: false },
  { slug: "character-counter", category: "developer", featured: false },
  { slug: "hash-generator", category: "developer", featured: false },
  { slug: "timestamp-converter", category: "developer", featured: false },
  { slug: "punycode-converter", category: "developer", featured: false }
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

const localizedToolContent: Record<LocaleCode, Record<string, LocalizedToolContent>> = {
  en: {
    "html-color-picker": {
      name: "HTML Color Picker",
      description: "Pick a color, preview it live, and copy HEX, RGB, or HSL values in seconds."
    },
    "image-color-extractor": {
      name: "Image Color Extractor",
      description: "Upload an image, click any point, and read the exact color under the cursor."
    },
    "palette-generator": {
      name: "Palette Generator",
      description: "Choose a base color and generate a balanced palette for UI, branding, or content."
    },
    "contrast-checker": {
      name: "Contrast Checker",
      description: "Compare text and background colors, then verify contrast ratios and WCAG levels."
    },
    "gradient-generator": {
      name: "Gradient Generator",
      description: "Mix colors, adjust the angle, and copy a clean CSS gradient instantly."
    },
    "css-variable-generator": {
      name: "CSS Variable Generator",
      description: "Build color tokens, preview each swatch, and copy ready-to-use CSS variables."
    },
    "image-compressor": {
      name: "Image Compressor",
      description: "Compress JPG or PNG images in the browser and keep a practical balance of quality."
    },
    "webp-converter": {
      name: "WebP Converter",
      description: "Convert common image files to lightweight WebP output without leaving the browser."
    },
    "image-resizer": {
      name: "Image Resizer",
      description: "Set a target size and export a resized PNG or JPG for web and social layouts."
    },
    "website-screenshot": {
      name: "Website Screenshot",
      description: "Generate a simple webpage screenshot preview from a URL and review it quickly."
    },
    "youtube-thumbnail-extractor": {
      name: "YouTube Thumbnail Extractor",
      description: "Paste a YouTube link to preview and copy the main thumbnail image sizes."
    },
    "website-image-extractor": {
      name: "Website Image Extractor",
      description: "Collect page images, OG images, and Twitter card images from one webpage."
    },
    "og-preview": {
      name: "OG Preview",
      description: "Fetch a page URL and preview its Open Graph, Twitter card, and basic SEO data."
    },
    "utm-builder": {
      name: "UTM Builder",
      description: "Build clean campaign URLs with UTM parameters and copy the final link fast."
    },
    "json-formatter": {
      name: "JSON Formatter",
      description: "Format, minify, and validate JSON so debugging and copy-paste work stay tidy."
    },
    "url-encode-decode": {
      name: "URL Encode/Decode",
      description: "Convert plain text to URL-safe text or decode it back to a readable version."
    },
    "base64-encode-decode": {
      name: "Base64 Encode/Decode",
      description: "Encode plain text to Base64 or decode Base64 back with UTF-8 support."
    },
    "character-counter": {
      name: "Character Counter",
      description: "Count characters, words, lines, and UTF-8 bytes while you type or paste."
    },
    "hash-generator": {
      name: "Hash Generator",
      description: "Create common text hashes instantly with everything processed in your browser."
    },
    "timestamp-converter": {
      name: "Timestamp Converter",
      description: "Convert Unix seconds, Unix milliseconds, and readable date text both ways."
    },
    "punycode-converter": {
      name: "Punycode Converter",
      description: "Convert internationalized domain names between Unicode and ASCII Punycode."
    }
  },
  ko: {
    "html-color-picker": {
      name: "HTML 색상 선택기",
      description: "색상을 고르고 실시간으로 미리본 뒤 HEX, RGB, HSL 값을 바로 복사하세요."
    },
    "image-color-extractor": {
      name: "이미지 색상 추출기",
      description: "이미지를 올리고 원하는 지점을 클릭해 커서 아래의 정확한 색상을 확인하세요."
    },
    "palette-generator": {
      name: "팔레트 생성기",
      description: "기준 색상을 선택하면 UI, 브랜딩, 콘텐츠에 맞는 균형 잡힌 팔레트를 만듭니다."
    },
    "contrast-checker": {
      name: "대비 검사기",
      description: "텍스트와 배경 색상을 비교해 대비 비율과 WCAG 기준 충족 여부를 확인하세요."
    },
    "gradient-generator": {
      name: "그라디언트 생성기",
      description: "색상과 각도를 조정하고 깔끔한 CSS 그라디언트 코드를 바로 복사하세요."
    },
    "css-variable-generator": {
      name: "CSS 변수 생성기",
      description: "색상 토큰을 만들고 미리본 뒤 바로 사용할 CSS 변수를 복사하세요."
    },
    "image-compressor": {
      name: "이미지 압축기",
      description: "브라우저에서 JPG 또는 PNG 이미지를 압축하고 품질 균형을 쉽게 맞추세요."
    },
    "webp-converter": {
      name: "WebP 변환기",
      description: "일반 이미지 파일을 가벼운 WebP 형식으로 브라우저에서 바로 변환하세요."
    },
    "image-resizer": {
      name: "이미지 크기 조절기",
      description: "목표 크기를 설정하고 웹과 소셜용 PNG 또는 JPG로 다시 저장하세요."
    },
    "website-screenshot": {
      name: "웹사이트 스크린샷",
      description: "URL을 입력해 간단한 웹페이지 스크린샷 미리보기를 빠르게 생성하세요."
    },
    "youtube-thumbnail-extractor": {
      name: "YouTube 썸네일 추출기",
      description: "YouTube 링크를 붙여넣고 대표 썸네일 크기를 미리본 뒤 바로 복사하세요."
    },
    "website-image-extractor": {
      name: "웹사이트 이미지 추출기",
      description: "하나의 웹페이지에서 본문 이미지, OG 이미지, Twitter 카드 이미지를 모아보세요."
    },
    "og-preview": {
      name: "OG 미리보기",
      description: "페이지 URL을 입력해 Open Graph, Twitter 카드, 기본 SEO 정보를 미리 확인하세요."
    },
    "utm-builder": {
      name: "UTM 빌더",
      description: "UTM 파라미터가 포함된 캠페인 URL을 만들고 최종 링크를 빠르게 복사하세요."
    },
    "json-formatter": {
      name: "JSON 포매터",
      description: "JSON을 보기 좋게 정리하거나 한 줄로 압축하고 유효성도 함께 확인하세요."
    },
    "url-encode-decode": {
      name: "URL 인코드/디코드",
      description: "일반 텍스트를 URL 안전 형식으로 바꾸거나 다시 읽기 쉽게 복원하세요."
    },
    "base64-encode-decode": {
      name: "Base64 인코드/디코드",
      description: "일반 텍스트를 Base64로 변환하거나 UTF-8 지원으로 다시 복원하세요."
    },
    "character-counter": {
      name: "글자 수 세기",
      description: "텍스트를 입력하거나 붙여넣으면 문자 수, 단어 수, 줄 수, UTF-8 바이트를 확인합니다."
    },
    "hash-generator": {
      name: "해시 생성기",
      description: "자주 쓰는 텍스트 해시를 즉시 만들고 모든 처리를 브라우저에서 끝내세요."
    },
    "timestamp-converter": {
      name: "타임스탬프 변환기",
      description: "유닉스 초, 유닉스 밀리초, 읽기 쉬운 날짜 텍스트를 양방향으로 변환하세요."
    },
    "punycode-converter": {
      name: "Punycode 변환기",
      description: "국제화 도메인 이름을 Unicode와 ASCII Punycode 사이에서 변환하세요."
    }
  },
  ja: {
    "html-color-picker": {
      name: "HTMLカラーピッカー",
      description: "色を選んでライブプレビューし、HEX・RGB・HSLの値をすぐにコピーできます。"
    },
    "image-color-extractor": {
      name: "画像カラー抽出",
      description: "画像をアップロードして任意の場所をクリックし、正確な色を読み取れます。"
    },
    "palette-generator": {
      name: "パレットジェネレーター",
      description: "ベースカラーからUI、ブランディング、コンテンツ向けの整った配色を作成します。"
    },
    "contrast-checker": {
      name: "コントラストチェッカー",
      description: "文字色と背景色を比較し、コントラスト比とWCAGレベルを確認できます。"
    },
    "gradient-generator": {
      name: "グラデーションジェネレーター",
      description: "色と角度を調整して、すぐ使えるCSSグラデーションを生成します。"
    },
    "css-variable-generator": {
      name: "CSS変数ジェネレーター",
      description: "カラートークンを整理し、プレビューしながらCSS変数をコピーできます。"
    },
    "image-compressor": {
      name: "画像圧縮",
      description: "ブラウザ内でJPGやPNGを圧縮し、実用的な画質バランスを保てます。"
    },
    "webp-converter": {
      name: "WebP変換",
      description: "一般的な画像ファイルを軽量なWebPへブラウザ内で変換できます。"
    },
    "image-resizer": {
      name: "画像リサイズ",
      description: "目標サイズを指定して、WebやSNS向けのPNGまたはJPGを書き出せます。"
    },
    "website-screenshot": {
      name: "Webサイトスクリーンショット",
      description: "URLからシンプルなWebページのスクリーンショットプレビューを作成できます。"
    },
    "youtube-thumbnail-extractor": {
      name: "YouTubeサムネイル抽出",
      description: "YouTubeリンクを貼り付けて、主要なサムネイルサイズを確認してコピーできます。"
    },
    "website-image-extractor": {
      name: "Webサイト画像抽出",
      description: "1つのWebページから本文画像、OG画像、Twitterカード画像をまとめて確認できます。"
    },
    "og-preview": {
      name: "OGプレビュー",
      description: "ページURLを入力してOpen Graph、Twitterカード、基本SEO情報を確認できます。"
    },
    "utm-builder": {
      name: "UTMビルダー",
      description: "UTMパラメータ付きのキャンペーンURLを作成し、完成リンクをすぐコピーできます。"
    },
    "json-formatter": {
      name: "JSONフォーマッター",
      description: "JSONを整形・圧縮し、構文の確認までまとめて行えます。"
    },
    "url-encode-decode": {
      name: "URLエンコード/デコード",
      description: "通常テキストをURL向けに変換したり、元の読みやすい形へ戻したりできます。"
    },
    "base64-encode-decode": {
      name: "Base64エンコード/デコード",
      description: "通常テキストとBase64をUTF-8対応で相互に変換できます。"
    },
    "character-counter": {
      name: "文字数カウンター",
      description: "文字数、単語数、行数、UTF-8のバイト数を入力しながら確認できます。"
    },
    "hash-generator": {
      name: "ハッシュジェネレーター",
      description: "よく使うテキストハッシュをすばやく作成し、処理はブラウザ内で完結します。"
    },
    "timestamp-converter": {
      name: "タイムスタンプ変換",
      description: "Unix秒、Unixミリ秒、日時テキストをブラウザ内で双方向に変換できます。"
    },
    "punycode-converter": {
      name: "Punycode変換",
      description: "国際化ドメイン名をUnicodeとASCII Punycodeの間で変換できます。"
    }
  },
  es: {
    "html-color-picker": {
      name: "Selector de Color HTML",
      description: "Elige un color, prévisualízalo al instante y copia valores HEX, RGB o HSL rápidamente."
    },
    "image-color-extractor": {
      name: "Extractor de Color de Imagen",
      description: "Sube una imagen, haz clic en cualquier punto y obtén el color exacto bajo el cursor."
    },
    "palette-generator": {
      name: "Generador de Paletas",
      description: "Parte de un color base y crea una paleta equilibrada para UI, marca o contenido."
    },
    "contrast-checker": {
      name: "Comprobador de Contraste",
      description: "Compara colores de texto y fondo para validar contraste y niveles WCAG."
    },
    "gradient-generator": {
      name: "Generador de Gradientes",
      description: "Combina colores, ajusta el ángulo y copia un gradiente CSS limpio al instante."
    },
    "css-variable-generator": {
      name: "Generador de Variables CSS",
      description: "Crea tokens de color, revisa la vista previa y copia variables CSS listas para usar."
    },
    "image-compressor": {
      name: "Compresor de Imágenes",
      description: "Comprime imágenes JPG o PNG en el navegador y conserva una calidad práctica."
    },
    "webp-converter": {
      name: "Convertidor WebP",
      description: "Convierte archivos de imagen comunes a WebP ligero sin salir del navegador."
    },
    "image-resizer": {
      name: "Redimensionador de Imágenes",
      description: "Define un tamaño objetivo y exporta un PNG o JPG para web y redes sociales."
    },
    "website-screenshot": {
      name: "Captura de Sitio Web",
      description: "Genera una vista previa sencilla de captura de pantalla a partir de una URL."
    },
    "youtube-thumbnail-extractor": {
      name: "Extractor de Miniaturas de YouTube",
      description: "Pega un enlace de YouTube para ver y copiar los tamaños principales de miniatura."
    },
    "website-image-extractor": {
      name: "Extractor de Imágenes Web",
      description: "Reúne imágenes de la página, OG y Twitter Card desde una sola URL."
    },
    "og-preview": {
      name: "Vista Previa OG",
      description: "Carga una URL y revisa Open Graph, Twitter Card y metadatos SEO básicos."
    },
    "utm-builder": {
      name: "Constructor UTM",
      description: "Crea URLs de campaña con parámetros UTM y copia el enlace final en segundos."
    },
    "json-formatter": {
      name: "Formateador JSON",
      description: "Da formato, minimiza y valida JSON para trabajar y depurar con más orden."
    },
    "url-encode-decode": {
      name: "Codificar/Decodificar URL",
      description: "Convierte texto normal a formato seguro para URL o recupéralo en forma legible."
    },
    "base64-encode-decode": {
      name: "Codificar/Decodificar Base64",
      description: "Codifica texto plano a Base64 o vuelve desde Base64 con soporte UTF-8."
    },
    "character-counter": {
      name: "Contador de Caracteres",
      description: "Cuenta caracteres, palabras, líneas y bytes UTF-8 mientras escribes o pegas texto."
    },
    "hash-generator": {
      name: "Generador de Hashes",
      description: "Crea hashes de texto comunes al instante con todo el proceso dentro del navegador."
    },
    "timestamp-converter": {
      name: "Convertidor de Timestamps",
      description: "Convierte en ambos sentidos entre segundos Unix, milisegundos Unix y texto legible."
    },
    "punycode-converter": {
      name: "Convertidor Punycode",
      description: "Convierte dominios internacionalizados entre Unicode y ASCII Punycode."
    }
  },
  fr: {
    "html-color-picker": {
      name: "Sélecteur de Couleur HTML",
      description: "Choisissez une couleur, prévisualisez-la en direct et copiez HEX, RGB ou HSL rapidement."
    },
    "image-color-extractor": {
      name: "Extracteur de Couleur d'Image",
      description: "Importez une image, cliquez sur une zone et relevez la couleur exacte sous le curseur."
    },
    "palette-generator": {
      name: "Générateur de Palette",
      description: "Choisissez une couleur de base et créez une palette équilibrée pour UI, marque ou contenu."
    },
    "contrast-checker": {
      name: "Vérificateur de Contraste",
      description: "Comparez texte et fond pour vérifier le contraste et les niveaux WCAG."
    },
    "gradient-generator": {
      name: "Générateur de Dégradé",
      description: "Mélangez les couleurs, ajustez l'angle et copiez un dégradé CSS propre immédiatement."
    },
    "css-variable-generator": {
      name: "Générateur de Variables CSS",
      description: "Créez des tokens couleur, prévisualisez-les et copiez des variables CSS prêtes à l'emploi."
    },
    "image-compressor": {
      name: "Compresseur d'Image",
      description: "Compressez des images JPG ou PNG dans le navigateur avec un bon équilibre de qualité."
    },
    "webp-converter": {
      name: "Convertisseur WebP",
      description: "Convertissez des images courantes en WebP léger directement dans le navigateur."
    },
    "image-resizer": {
      name: "Redimensionneur d'Image",
      description: "Définissez une taille cible et exportez un PNG ou JPG pour le web et les réseaux."
    },
    "website-screenshot": {
      name: "Capture de Site Web",
      description: "Générez un aperçu simple de capture d'écran de page web à partir d'une URL."
    },
    "youtube-thumbnail-extractor": {
      name: "Extracteur de Miniatures YouTube",
      description: "Collez un lien YouTube pour prévisualiser et copier les principales tailles de miniature."
    },
    "website-image-extractor": {
      name: "Extracteur d'Images Web",
      description: "Rassemblez les images de page, Open Graph et Twitter Card depuis une seule URL."
    },
    "og-preview": {
      name: "Aperçu OG",
      description: "Chargez une URL pour consulter Open Graph, Twitter Card et les métadonnées SEO de base."
    },
    "utm-builder": {
      name: "Générateur UTM",
      description: "Créez des URL de campagne avec paramètres UTM et copiez le lien final rapidement."
    },
    "json-formatter": {
      name: "Formateur JSON",
      description: "Formatez, minifiez et validez du JSON pour garder un flux de travail plus propre."
    },
    "url-encode-decode": {
      name: "Encoder/Décoder URL",
      description: "Convertissez du texte en format sûr pour URL ou restaurez-le dans une forme lisible."
    },
    "base64-encode-decode": {
      name: "Encoder/Décoder Base64",
      description: "Encodez du texte en Base64 ou revenez à du texte lisible avec prise en charge UTF-8."
    },
    "character-counter": {
      name: "Compteur de Caractères",
      description: "Comptez caractères, mots, lignes et octets UTF-8 pendant la saisie ou le collage."
    },
    "hash-generator": {
      name: "Générateur de Hash",
      description: "Créez des hash de texte courants instantanément, avec traitement local dans le navigateur."
    },
    "timestamp-converter": {
      name: "Convertisseur de Timestamps",
      description: "Convertissez dans les deux sens entre secondes Unix, millisecondes Unix et texte lisible."
    },
    "punycode-converter": {
      name: "Convertisseur Punycode",
      description: "Convertissez des domaines internationalisés entre Unicode et ASCII Punycode."
    }
  },
  de: {
    "html-color-picker": {
      name: "HTML-Farbwähler",
      description: "Wähle eine Farbe, sieh die Live-Vorschau und kopiere HEX-, RGB- oder HSL-Werte schnell."
    },
    "image-color-extractor": {
      name: "Bildfarb-Extraktor",
      description: "Lade ein Bild hoch, klicke auf eine Stelle und lies die genaue Farbe unter dem Cursor aus."
    },
    "palette-generator": {
      name: "Paletten-Generator",
      description: "Wähle eine Basisfarbe und erstelle eine ausgewogene Palette für UI, Branding oder Content."
    },
    "contrast-checker": {
      name: "Kontrast-Prüfer",
      description: "Vergleiche Text- und Hintergrundfarben, um Kontrastwerte und WCAG-Stufen zu prüfen."
    },
    "gradient-generator": {
      name: "Verlaufs-Generator",
      description: "Kombiniere Farben, passe den Winkel an und kopiere sofort einen sauberen CSS-Verlauf."
    },
    "css-variable-generator": {
      name: "CSS-Variablen-Generator",
      description: "Erstelle Farb-Tokens, prüfe die Vorschau und kopiere fertige CSS-Variablen."
    },
    "image-compressor": {
      name: "Bildkompressor",
      description: "Komprimiere JPG- oder PNG-Bilder im Browser und halte eine praktische Qualitätsbalance."
    },
    "webp-converter": {
      name: "WebP-Konverter",
      description: "Wandle gängige Bilddateien direkt im Browser in leichtes WebP um."
    },
    "image-resizer": {
      name: "Bildgrößen-Änderer",
      description: "Lege eine Zielgröße fest und exportiere ein PNG oder JPG für Web und Social Media."
    },
    "website-screenshot": {
      name: "Website-Screenshot",
      description: "Erzeuge aus einer URL eine einfache Webseiten-Screenshot-Vorschau zur schnellen Prüfung."
    },
    "youtube-thumbnail-extractor": {
      name: "YouTube-Thumbnail-Extraktor",
      description: "Füge einen YouTube-Link ein, um die wichtigsten Thumbnail-Größen anzuzeigen und zu kopieren."
    },
    "website-image-extractor": {
      name: "Website-Bild-Extraktor",
      description: "Sammle Seitenbilder, OG-Bilder und Twitter-Card-Bilder von einer einzelnen URL."
    },
    "og-preview": {
      name: "OG-Vorschau",
      description: "Lade eine URL, um Open Graph, Twitter Card und grundlegende SEO-Daten zu prüfen."
    },
    "utm-builder": {
      name: "UTM-Builder",
      description: "Erstelle saubere Kampagnen-URLs mit UTM-Parametern und kopiere den finalen Link schnell."
    },
    "json-formatter": {
      name: "JSON-Formatter",
      description: "Formatiere, minifiziere und validiere JSON für einen aufgeräumteren Debugging-Workflow."
    },
    "url-encode-decode": {
      name: "URL-Kodieren/Dekodieren",
      description: "Wandle Klartext in ein URL-sicheres Format um oder mache ihn wieder lesbar."
    },
    "base64-encode-decode": {
      name: "Base64-Kodieren/Dekodieren",
      description: "Kodiere Klartext in Base64 oder dekodiere ihn mit UTF-8-Unterstützung zurück."
    },
    "character-counter": {
      name: "Zeichenzähler",
      description: "Zähle Zeichen, Wörter, Zeilen und UTF-8-Bytes beim Tippen oder Einfügen von Text."
    },
    "hash-generator": {
      name: "Hash-Generator",
      description: "Erstelle gängige Text-Hashes sofort, wobei alles direkt im Browser verarbeitet wird."
    },
    "timestamp-converter": {
      name: "Zeitstempel-Konverter",
      description: "Wandle Unix-Sekunden, Unix-Millisekunden und lesbaren Datumstext in beide Richtungen um."
    },
    "punycode-converter": {
      name: "Punycode-Konverter",
      description: "Konvertiere internationalisierte Domainnamen zwischen Unicode und ASCII-Punycode."
    }
  }
};

export function getToolStatus(slug: string): ToolStatus {
  return liveToolRoutes[slug] ? "Available" : "Coming Soon";
}

export function getLocalizedTools(locale: LocaleCode): ToolItem[] {
  const localeContent = localizedToolContent[locale] ?? localizedToolContent.en;

  return toolDefinitions.map((tool) => ({
    ...tool,
    ...localeContent[tool.slug],
    status: getToolStatus(tool.slug)
  }));
}

export function getFeaturedTools(locale: LocaleCode) {
  return getLocalizedTools(locale)
    .filter((tool) => tool.featured)
    .slice(0, 6);
}

export function getToolsByCategory(locale: LocaleCode) {
  const localizedTools = getLocalizedTools(locale);

  return categoryOrder.map((category) => ({
    key: category,
    label: CATEGORY_LABELS[category],
    items: localizedTools.filter((tool) => tool.category === category)
  }));
}
