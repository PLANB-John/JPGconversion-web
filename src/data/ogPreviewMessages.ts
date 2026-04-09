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
  supportSectionTitle: string;
  supportSectionDescription: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  howToUseTitle: string;
  howToUseSteps: string[];
  mistakesTitle: string;
  mistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
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
    supportSectionTitle: "Use this before you share important links",
    supportSectionDescription: "This page is a quick practical bridge: validate tags, spot issues, and jump to focused guides when something looks wrong.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "Before posting a new URL on social channels or chat apps.",
      "After changing page titles, descriptions, or preview images.",
      "When previews look different across platforms."
    ],
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste a full webpage URL into the field below.",
      "Click Preview metadata to fetch the page through this app and read its social tags.",
      "Review the visual preview card and the raw metadata values side by side."
    ],
    mistakesTitle: "Common mistakes",
    mistakes: [
      "Testing only once after publishing and assuming every platform updated.",
      "Using relative or blocked image URLs in og:image.",
      "Updating tags but forgetting platforms may still show cached previews."
    ],
    relatedGuidesTitle: "Related Open Graph guides",
    relatedGuidesDescription: "Need a deeper fix? Start with one short guide below.",
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
    supportSectionTitle: "중요한 링크를 공유하기 전에 확인하세요",
    supportSectionDescription: "이 섹션은 가볍게 점검하고 바로 가이드로 이어지도록 구성했습니다. 태그 확인, 문제 파악, 후속 해결까지 빠르게 진행할 수 있습니다.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "새 URL을 소셜/메신저에 공유하기 직전",
      "제목·설명·썸네일 이미지를 수정한 직후",
      "플랫폼마다 미리보기 결과가 다르게 보일 때"
    ],
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "아래 입력칸에 전체 웹페이지 URL을 붙여넣으세요.",
      "메타데이터 미리보기 버튼을 눌러 앱 서버를 통해 페이지를 가져오고 소셜 태그를 읽어오세요.",
      "시각적 미리보기 카드와 원본 메타데이터 값을 함께 확인하세요."
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "게시 후 한 번만 확인하고 모든 플랫폼이 갱신됐다고 가정하는 것",
      "og:image에 상대경로나 접근 불가 URL을 사용하는 것",
      "태그는 수정했지만 캐시 재수집을 확인하지 않는 것"
    ],
    relatedGuidesTitle: "관련 Open Graph 가이드",
    relatedGuidesDescription: "문제가 있으면 아래 짧은 가이드부터 확인해 보세요.",
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
    supportSectionTitle: "大事なリンクを共有する前に確認",
    supportSectionDescription: "タグ確認から原因切り分け、関連ガイドへの移動までを短時間で行える導線です。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "新しいURLをSNSやチャットで共有する前",
      "タイトル・説明・画像を更新した後",
      "プラットフォームごとに表示が違うとき"
    ],
    howToUseTitle: "使い方",
    howToUseSteps: [
      "下の入力欄に完全なWebページURLを貼り付けます。",
      "メタデータをプレビューを押して、このアプリ経由でページを取得し、SNSタグを読み取ります。",
      "ビジュアルプレビューカードと生のメタデータ値を並べて確認します。"
    ],
    mistakesTitle: "よくあるミス",
    mistakes: [
      "公開後に1回だけ確認して更新完了と判断すること",
      "og:imageに相対URLや非公開URLを使うこと",
      "タグ更新後にキャッシュ再取得を行わないこと"
    ],
    relatedGuidesTitle: "関連Open Graphガイド",
    relatedGuidesDescription: "詳しく直したい場合は、以下の短いガイドから進めてください。",
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
    supportSectionTitle: "Úsalo antes de compartir enlaces importantes",
    supportSectionDescription: "Esta sección mantiene un formato ligero: validar etiquetas, detectar fallos rápidos y saltar a guías prácticas relacionadas.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Antes de publicar una URL en redes o mensajería.",
      "Después de cambiar título, descripción o imagen social.",
      "Cuando cada plataforma muestra una vista previa distinta."
    ],
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega una URL completa de página web en el campo de abajo.",
      "Haz clic en Previsualizar metadatos para cargar la página a través de esta app y leer sus etiquetas sociales.",
      "Revisa la tarjeta visual y los valores sin procesar de los metadatos lado a lado."
    ],
    mistakesTitle: "Errores comunes",
    mistakes: [
      "Probar una sola vez y asumir que todas las plataformas ya actualizaron.",
      "Usar URLs relativas o bloqueadas en og:image.",
      "Cambiar etiquetas sin forzar recrawl cuando hay caché antigua."
    ],
    relatedGuidesTitle: "Guías relacionadas de Open Graph",
    relatedGuidesDescription: "Si necesitas más contexto, abre una de estas guías breves.",
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
    supportSectionTitle: "À utiliser avant de partager un lien important",
    supportSectionDescription: "Section courte et pratique : vérifier les tags, repérer les erreurs courantes et continuer vers les guides ciblés.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Avant de publier une URL sur social ou messagerie.",
      "Après avoir modifié titre, description ou image de prévisualisation.",
      "Quand les aperçus diffèrent selon les plateformes."
    ],
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez une URL complète de page web dans le champ ci-dessous.",
      "Cliquez sur Prévisualiser les métadonnées pour charger la page via cette application et lire ses balises sociales.",
      "Consultez la carte visuelle et les valeurs brutes des métadonnées côte à côte."
    ],
    mistakesTitle: "Erreurs fréquentes",
    mistakes: [
      "Tester une seule fois et supposer que tout est mis à jour partout.",
      "Mettre une URL relative ou non accessible dans og:image.",
      "Oublier que le cache social peut conserver une ancienne version."
    ],
    relatedGuidesTitle: "Guides Open Graph associés",
    relatedGuidesDescription: "Besoin d'aller plus loin ? Commencez par un guide court.",
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
    supportSectionTitle: "Vor dem Teilen wichtiger Links nutzen",
    supportSectionDescription: "Kurz gehaltene Hilfe: Tags prüfen, typische Fehler erkennen und direkt zu passenden OG-Guides wechseln.",
    whenToUseTitle: "Wann du dieses Tool nutzt",
    whenToUseItems: [
      "Bevor du eine neue URL in Social oder Messenger teilst.",
      "Nachdem Titel, Beschreibung oder Vorschaubild geändert wurden.",
      "Wenn Vorschauen je Plattform unterschiedlich aussehen."
    ],
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge unten eine vollständige Webseiten-URL ein.",
      "Klicke auf Metadaten vorschauen, um die Seite über diese App abzurufen und ihre Social-Tags zu lesen.",
      "Prüfe die visuelle Vorschaukarte und die rohen Metadatenwerte nebeneinander."
    ],
    mistakesTitle: "Häufige Fehler",
    mistakes: [
      "Nur einmal testen und davon ausgehen, dass alles überall aktualisiert ist.",
      "Relative oder gesperrte Bild-URLs in og:image nutzen.",
      "Tag-Updates ohne erneuten Abruf bei gecachten Vorschauen."
    ],
    relatedGuidesTitle: "Passende Open-Graph-Guides",
    relatedGuidesDescription: "Für gezielte Lösungen starte mit einem der kurzen Guides.",
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
