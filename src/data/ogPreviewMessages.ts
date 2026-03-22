import { defaultLocale, type LocaleCode } from "@/data/locales";

type OgPreviewFieldKey =
  | "ogTitle"
  | "ogDescription"
  | "ogImage"
  | "ogUrl"
  | "ogType"
  | "twitterTitle"
  | "twitterDescription"
  | "twitterImage"
  | "twitterCard"
  | "title"
  | "metaDescription";

type OgPreviewMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  inputPlaceholder: string;
  previewButton: string;
  previewingButton: string;
  sampleButton: string;
  clearButton: string;
  invalidUrlMessage: string;
  fetchFailedMessage: string;
  noMetadataFoundMessage: string;
  previewSectionTitle: string;
  previewSectionDescription: string;
  metadataSectionTitle: string;
  metadataSectionDescription: string;
  sourceUrlLabel: string;
  resolvedUrlLabel: string;
  fields: Record<OgPreviewFieldKey, string>;
  emptyValue: string;
  readyStateMessage: string;
  previewImageAlt: string;
};

const ogPreviewMessages: Partial<Record<LocaleCode, OgPreviewMessages>> = {
  en: {
    metadataTitle: "OG Preview",
    metadataDescription: "Preview Open Graph and Twitter card metadata from any webpage URL.",
    title: "OG Preview",
    description: "Paste a webpage URL to fetch its Open Graph, Twitter card, and basic SEO metadata, then preview how the shared card may appear.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste a full webpage URL into the field below.",
      "Click Preview metadata to fetch the page through this app and read its social tags.",
      "Review the visual preview card and the raw metadata values side by side."
    ],
    inputLabel: "Website URL",
    inputPlaceholder: "https://example.com/article",
    previewButton: "Preview metadata",
    previewingButton: "Loading preview...",
    sampleButton: "Sample URL",
    clearButton: "Clear",
    invalidUrlMessage: "Please enter a valid website URL starting with http:// or https://.",
    fetchFailedMessage: "We could not fetch metadata from that page right now. Please check the URL and try again.",
    noMetadataFoundMessage: "No Open Graph, Twitter, or basic page metadata was found on that page.",
    previewSectionTitle: "Social preview card",
    previewSectionDescription: "This preview prefers Open Graph values first, then Twitter values, then standard page metadata.",
    metadataSectionTitle: "Extracted metadata",
    metadataSectionDescription: "Raw values found in the page source after resolving practical relative URLs.",
    sourceUrlLabel: "Requested URL",
    resolvedUrlLabel: "Fetched page URL",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "Not found",
    readyStateMessage: "Enter a webpage URL above to preview its metadata.",
    previewImageAlt: "Preview image extracted from webpage metadata"
  },
  ko: {
    metadataTitle: "OG Preview",
    metadataDescription: "웹페이지 URL에서 Open Graph와 Twitter 카드 메타데이터를 미리 확인합니다.",
    title: "OG Preview",
    description: "웹페이지 URL을 입력하면 Open Graph, Twitter 카드, 기본 SEO 메타데이터를 불러와 공유 카드가 어떻게 보일지 빠르게 확인할 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "아래 입력칸에 전체 웹페이지 URL을 붙여넣으세요.",
      "메타데이터 미리보기 버튼을 눌러 앱 서버를 통해 페이지를 가져오고 소셜 태그를 읽어오세요.",
      "시각적 미리보기 카드와 원본 메타데이터 값을 함께 확인하세요."
    ],
    inputLabel: "웹사이트 URL",
    inputPlaceholder: "https://example.com/article",
    previewButton: "메타데이터 미리보기",
    previewingButton: "미리보기 불러오는 중...",
    sampleButton: "샘플 URL",
    clearButton: "지우기",
    invalidUrlMessage: "http:// 또는 https://로 시작하는 올바른 웹사이트 URL을 입력해 주세요.",
    fetchFailedMessage: "현재 해당 페이지의 메타데이터를 불러올 수 없습니다. URL을 확인한 뒤 다시 시도해 주세요.",
    noMetadataFoundMessage: "해당 페이지에서 Open Graph, Twitter 또는 기본 메타데이터를 찾지 못했습니다.",
    previewSectionTitle: "소셜 미리보기 카드",
    previewSectionDescription: "이 미리보기는 Open Graph 값을 우선 사용하고, 없으면 Twitter 값과 기본 페이지 메타데이터를 순서대로 사용합니다.",
    metadataSectionTitle: "추출된 메타데이터",
    metadataSectionDescription: "상대 URL을 가능한 범위에서 절대 URL로 변환한 뒤 페이지 소스에서 찾은 원본 값입니다.",
    sourceUrlLabel: "요청한 URL",
    resolvedUrlLabel: "실제로 가져온 페이지 URL",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "없음",
    readyStateMessage: "위에 웹페이지 URL을 입력하면 메타데이터 미리보기를 확인할 수 있습니다.",
    previewImageAlt: "웹페이지 메타데이터에서 추출한 미리보기 이미지"
  },
  ja: {
    metadataTitle: "OG Preview",
    metadataDescription: "WebページURLからOpen GraphとTwitterカードのメタデータを確認できます。",
    title: "OG Preview",
    description: "WebページURLを入力すると、Open Graph、Twitterカード、基本SEOメタデータを取得し、共有カードの見え方をすばやく確認できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "下の入力欄に完全なWebページURLを貼り付けます。",
      "メタデータをプレビューを押して、このアプリ経由でページを取得し、SNSタグを読み取ります。",
      "ビジュアルプレビューカードと生のメタデータ値を並べて確認します。"
    ],
    inputLabel: "WebサイトURL",
    inputPlaceholder: "https://example.com/article",
    previewButton: "メタデータをプレビュー",
    previewingButton: "プレビューを読み込み中...",
    sampleButton: "サンプルURL",
    clearButton: "クリア",
    invalidUrlMessage: "http:// または https:// で始まる有効なWebサイトURLを入力してください。",
    fetchFailedMessage: "現在そのページのメタデータを取得できません。URLを確認してもう一度お試しください。",
    noMetadataFoundMessage: "そのページではOpen Graph、Twitter、または基本メタデータが見つかりませんでした。",
    previewSectionTitle: "ソーシャルプレビューカード",
    previewSectionDescription: "このプレビューでは、Open Graph、Twitter、通常のページメタデータの順に優先して表示します。",
    metadataSectionTitle: "抽出されたメタデータ",
    metadataSectionDescription: "相対URLを可能な範囲で解決した上で、ページソースから見つかった生の値を表示します。",
    sourceUrlLabel: "入力したURL",
    resolvedUrlLabel: "取得したページURL",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "見つかりません",
    readyStateMessage: "上にWebページURLを入力すると、メタデータのプレビューを表示できます。",
    previewImageAlt: "Webページメタデータから抽出したプレビュー画像"
  },
  es: {
    metadataTitle: "OG Preview",
    metadataDescription: "Previsualiza metadatos Open Graph y Twitter Card desde cualquier URL de página web.",
    title: "OG Preview",
    description: "Pega la URL de una página para obtener sus metadatos Open Graph, Twitter Card y SEO básico, y ver cómo podría aparecer al compartirse.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega una URL completa de página web en el campo de abajo.",
      "Haz clic en Previsualizar metadatos para cargar la página a través de esta app y leer sus etiquetas sociales.",
      "Revisa la tarjeta visual y los valores sin procesar de los metadatos lado a lado."
    ],
    inputLabel: "URL del sitio web",
    inputPlaceholder: "https://example.com/article",
    previewButton: "Previsualizar metadatos",
    previewingButton: "Cargando vista previa...",
    sampleButton: "URL de ejemplo",
    clearButton: "Limpiar",
    invalidUrlMessage: "Ingresa una URL válida que empiece por http:// o https://.",
    fetchFailedMessage: "No pudimos obtener los metadatos de esa página en este momento. Revisa la URL e inténtalo de nuevo.",
    noMetadataFoundMessage: "No se encontraron metadatos Open Graph, Twitter ni básicos en esa página.",
    previewSectionTitle: "Tarjeta de vista previa social",
    previewSectionDescription: "Esta vista previa prioriza Open Graph, luego Twitter y después los metadatos estándar de la página.",
    metadataSectionTitle: "Metadatos extraídos",
    metadataSectionDescription: "Valores encontrados en el código fuente después de resolver URLs relativas cuando fue posible.",
    sourceUrlLabel: "URL solicitada",
    resolvedUrlLabel: "URL final obtenida",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "No encontrado",
    readyStateMessage: "Ingresa arriba la URL de una página para previsualizar sus metadatos.",
    previewImageAlt: "Imagen de vista previa extraída de los metadatos de la página"
  },
  fr: {
    metadataTitle: "OG Preview",
    metadataDescription: "Prévisualisez les métadonnées Open Graph et Twitter Card depuis n'importe quelle URL de page web.",
    title: "OG Preview",
    description: "Collez l'URL d'une page web pour récupérer ses métadonnées Open Graph, Twitter Card et SEO de base, puis voir à quoi pourrait ressembler la carte de partage.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez une URL complète de page web dans le champ ci-dessous.",
      "Cliquez sur Prévisualiser les métadonnées pour charger la page via cette application et lire ses balises sociales.",
      "Consultez la carte visuelle et les valeurs brutes des métadonnées côte à côte."
    ],
    inputLabel: "URL du site web",
    inputPlaceholder: "https://example.com/article",
    previewButton: "Prévisualiser les métadonnées",
    previewingButton: "Chargement de l'aperçu...",
    sampleButton: "URL exemple",
    clearButton: "Effacer",
    invalidUrlMessage: "Veuillez saisir une URL valide commençant par http:// ou https://.",
    fetchFailedMessage: "Nous n'avons pas pu récupérer les métadonnées de cette page pour le moment. Vérifiez l'URL puis réessayez.",
    noMetadataFoundMessage: "Aucune métadonnée Open Graph, Twitter ou standard n'a été trouvée sur cette page.",
    previewSectionTitle: "Carte d'aperçu social",
    previewSectionDescription: "Cet aperçu privilégie d'abord Open Graph, puis Twitter, puis les métadonnées standard de la page.",
    metadataSectionTitle: "Métadonnées extraites",
    metadataSectionDescription: "Valeurs brutes trouvées dans le code source après résolution des URLs relatives lorsque c'est possible.",
    sourceUrlLabel: "URL demandée",
    resolvedUrlLabel: "URL finale récupérée",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "Introuvable",
    readyStateMessage: "Saisissez l'URL d'une page ci-dessus pour prévisualiser ses métadonnées.",
    previewImageAlt: "Image d'aperçu extraite des métadonnées de la page"
  },
  de: {
    metadataTitle: "OG Preview",
    metadataDescription: "Sieh dir Open-Graph- und Twitter-Card-Metadaten für eine beliebige Webseiten-URL an.",
    title: "OG Preview",
    description: "Füge eine Webseiten-URL ein, um Open-Graph-, Twitter-Card- und grundlegende SEO-Metadaten abzurufen und die mögliche Social-Card-Vorschau zu sehen.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge unten eine vollständige Webseiten-URL ein.",
      "Klicke auf Metadaten vorschauen, um die Seite über diese App abzurufen und ihre Social-Tags zu lesen.",
      "Prüfe die visuelle Vorschaukarte und die rohen Metadatenwerte nebeneinander."
    ],
    inputLabel: "Webseiten-URL",
    inputPlaceholder: "https://example.com/article",
    previewButton: "Metadaten vorschauen",
    previewingButton: "Vorschau wird geladen...",
    sampleButton: "Beispiel-URL",
    clearButton: "Leeren",
    invalidUrlMessage: "Bitte gib eine gültige Webseiten-URL ein, die mit http:// oder https:// beginnt.",
    fetchFailedMessage: "Die Metadaten dieser Seite konnten gerade nicht geladen werden. Prüfe die URL und versuche es erneut.",
    noMetadataFoundMessage: "Auf dieser Seite wurden keine Open-Graph-, Twitter- oder Basis-Metadaten gefunden.",
    previewSectionTitle: "Social-Preview-Karte",
    previewSectionDescription: "Diese Vorschau bevorzugt zuerst Open Graph, dann Twitter und danach normale Seitenmetadaten.",
    metadataSectionTitle: "Extrahierte Metadaten",
    metadataSectionDescription: "Rohwerte aus dem Seitenquelltext nach praktischer Auflösung relativer URLs.",
    sourceUrlLabel: "Angeforderte URL",
    resolvedUrlLabel: "Geladene Seiten-URL",
    fields: {
      ogTitle: "og:title",
      ogDescription: "og:description",
      ogImage: "og:image",
      ogUrl: "og:url",
      ogType: "og:type",
      twitterTitle: "twitter:title",
      twitterDescription: "twitter:description",
      twitterImage: "twitter:image",
      twitterCard: "twitter:card",
      title: "title",
      metaDescription: "meta description"
    },
    emptyValue: "Nicht gefunden",
    readyStateMessage: "Gib oben eine Webseiten-URL ein, um ihre Metadaten vorzuschauen.",
    previewImageAlt: "Vorschaubild aus den Webseiten-Metadaten"
  }
};

export function getOgPreviewMessages(locale: LocaleCode): OgPreviewMessages {
  return ogPreviewMessages[locale] ?? ogPreviewMessages[defaultLocale]!;
}

export type { OgPreviewFieldKey, OgPreviewMessages };
