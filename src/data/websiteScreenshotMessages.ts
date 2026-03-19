import { defaultLocale, type LocaleCode } from "@/data/locales";

type WebsiteScreenshotMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  inputPlaceholder: string;
  captureButton: string;
  capturingButton: string;
  sampleButton: string;
  clearButton: string;
  invalidUrlMessage: string;
  captureFailedMessage: string;
  unsupportedUrlMessage: string;
  helperText: string;
  resultsTitle: string;
  resultsDescription: string;
  resultLabel: string;
  sourcePageLabel: string;
  openImageButton: string;
  copyLinkButton: string;
  copiedLinkButton: string;
  readyStateMessage: string;
  previewAlt: string;
  fallbackNote: string;
};

const websiteScreenshotMessages: Partial<Record<LocaleCode, WebsiteScreenshotMessages>> = {
  en: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "Capture a practical website screenshot preview from a webpage URL.",
    title: "Website Screenshot",
    description: "Paste a webpage URL to generate a simple screenshot preview you can review, open, or copy as an image link.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste a full website URL that starts with http:// or https://.",
      "Click Capture screenshot to generate a fresh preview image.",
      "Review the screenshot card, then open the image in a new tab or copy its image URL."
    ],
    inputLabel: "Website URL",
    inputPlaceholder: "https://example.com",
    captureButton: "Capture screenshot",
    capturingButton: "Capturing...",
    sampleButton: "Sample URL",
    clearButton: "Clear",
    invalidUrlMessage: "Please enter a valid website URL starting with http:// or https://.",
    captureFailedMessage: "We could not capture that page right now. Please check the URL and try again.",
    unsupportedUrlMessage: "For safety, local network and localhost URLs are not supported.",
    helperText: "Tip: some websites block automated previews, so capture can fail even when the URL is valid.",
    resultsTitle: "Screenshot preview",
    resultsDescription: "This first version uses a practical preview-based screenshot flow so the page stays simple and useful.",
    resultLabel: "Captured image",
    sourcePageLabel: "Source page",
    openImageButton: "Open image",
    copyLinkButton: "Copy image URL",
    copiedLinkButton: "Copied!",
    readyStateMessage: "Enter a website URL above to generate a screenshot preview.",
    previewAlt: "Website screenshot preview",
    fallbackNote: "Live capture uses a practical external preview service because Playwright/browser installation is not available in this environment yet."
  },
  ko: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "웹페이지 URL로 실용적인 웹사이트 스크린샷 미리보기를 생성합니다.",
    title: "Website Screenshot",
    description: "웹페이지 URL을 붙여넣으면 간단한 스크린샷 미리보기를 생성하고, 이미지 열기나 링크 복사를 바로 할 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "http:// 또는 https:// 로 시작하는 전체 웹사이트 URL을 입력하세요.",
      "스크린샷 캡처 버튼을 눌러 새 미리보기 이미지를 생성하세요.",
      "결과 카드에서 이미지를 확인한 뒤 새 탭에서 열거나 이미지 URL을 복사하세요."
    ],
    inputLabel: "웹사이트 URL",
    inputPlaceholder: "https://example.com",
    captureButton: "스크린샷 캡처",
    capturingButton: "캡처 중...",
    sampleButton: "샘플 URL",
    clearButton: "지우기",
    invalidUrlMessage: "http:// 또는 https:// 로 시작하는 올바른 웹사이트 URL을 입력해 주세요.",
    captureFailedMessage: "현재 해당 페이지를 캡처할 수 없습니다. URL을 확인한 뒤 다시 시도해 주세요.",
    unsupportedUrlMessage: "보안을 위해 로컬 네트워크 주소와 localhost URL은 지원하지 않습니다.",
    helperText: "안내: 일부 웹사이트는 자동 미리보기를 차단하므로 URL이 올바르더라도 캡처가 실패할 수 있습니다.",
    resultsTitle: "스크린샷 미리보기",
    resultsDescription: "첫 버전에서는 페이지를 단순하고 유용하게 유지하기 위해 실용적인 미리보기 기반 캡처 방식을 사용합니다.",
    resultLabel: "생성된 이미지",
    sourcePageLabel: "원본 페이지",
    openImageButton: "이미지 열기",
    copyLinkButton: "이미지 URL 복사",
    copiedLinkButton: "복사됨!",
    readyStateMessage: "위에 웹사이트 URL을 입력하면 스크린샷 미리보기를 생성할 수 있습니다.",
    previewAlt: "웹사이트 스크린샷 미리보기",
    fallbackNote: "현재 환경에서는 Playwright/브라우저 설치를 사용할 수 없어, 실용적인 외부 미리보기 서비스를 통해 라이브 캡처를 제공합니다."
  },
  ja: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "WebページURLから実用的なWebサイトスクリーンショットのプレビューを生成します。",
    title: "Website Screenshot",
    description: "WebページURLを貼り付けると、シンプルなスクリーンショットプレビューを生成し、画像を開いたりリンクをコピーしたりできます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "http:// または https:// で始まる完全なWebサイトURLを入力します。",
      "スクリーンショットを撮影 を押して新しいプレビュー画像を生成します。",
      "結果カードで画像を確認し、新しいタブで開くか画像URLをコピーします。"
    ],
    inputLabel: "WebサイトURL",
    inputPlaceholder: "https://example.com",
    captureButton: "スクリーンショットを撮影",
    capturingButton: "撮影中...",
    sampleButton: "サンプルURL",
    clearButton: "クリア",
    invalidUrlMessage: "http:// または https:// で始まる有効なWebサイトURLを入力してください。",
    captureFailedMessage: "現在そのページをキャプチャできません。URLを確認してもう一度お試しください。",
    unsupportedUrlMessage: "安全のため、ローカルネットワークや localhost のURLはサポートしていません。",
    helperText: "ヒント: 一部のWebサイトは自動プレビューをブロックするため、URLが正しくてもキャプチャに失敗することがあります。",
    resultsTitle: "スクリーンショットプレビュー",
    resultsDescription: "この初期版では、ページをシンプルで実用的に保つために実践的なプレビュー型キャプチャを使っています。",
    resultLabel: "生成された画像",
    sourcePageLabel: "元ページ",
    openImageButton: "画像を開く",
    copyLinkButton: "画像URLをコピー",
    copiedLinkButton: "コピーしました！",
    readyStateMessage: "上にWebサイトURLを入力するとスクリーンショットプレビューを生成できます。",
    previewAlt: "Webサイトのスクリーンショットプレビュー",
    fallbackNote: "この環境では Playwright / ブラウザインストールを利用できないため、実用的な外部プレビューサービスでライブキャプチャを提供しています。"
  },
  es: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "Genera una vista previa práctica de captura de pantalla a partir de la URL de una página web.",
    title: "Website Screenshot",
    description: "Pega la URL de una página para generar una vista previa simple de captura de pantalla que puedas revisar, abrir o copiar como enlace de imagen.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega una URL completa del sitio web que empiece por http:// o https://.",
      "Haz clic en Capturar pantalla para generar una imagen de vista previa nueva.",
      "Revisa la tarjeta del resultado y luego abre la imagen en una nueva pestaña o copia su URL."
    ],
    inputLabel: "URL del sitio web",
    inputPlaceholder: "https://example.com",
    captureButton: "Capturar pantalla",
    capturingButton: "Capturando...",
    sampleButton: "URL de ejemplo",
    clearButton: "Limpiar",
    invalidUrlMessage: "Ingresa una URL válida del sitio web que empiece por http:// o https://.",
    captureFailedMessage: "No pudimos capturar esa página ahora mismo. Revisa la URL e inténtalo otra vez.",
    unsupportedUrlMessage: "Por seguridad, no se admiten URLs de localhost ni de red local.",
    helperText: "Consejo: algunos sitios bloquean las vistas previas automáticas, así que la captura puede fallar aunque la URL sea válida.",
    resultsTitle: "Vista previa de la captura",
    resultsDescription: "Esta primera versión usa un flujo práctico basado en vista previa para mantener la herramienta simple y útil.",
    resultLabel: "Imagen capturada",
    sourcePageLabel: "Página de origen",
    openImageButton: "Abrir imagen",
    copyLinkButton: "Copiar URL de imagen",
    copiedLinkButton: "¡Copiado!",
    readyStateMessage: "Ingresa arriba la URL de un sitio web para generar una vista previa de captura.",
    previewAlt: "Vista previa de captura del sitio web",
    fallbackNote: "La captura en vivo usa un servicio externo de vista previa porque Playwright o la instalación del navegador no están disponibles en este entorno todavía."
  },
  fr: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "Générez un aperçu pratique de capture d'écran à partir de l'URL d'une page web.",
    title: "Website Screenshot",
    description: "Collez l'URL d'une page web pour générer un aperçu simple de capture d'écran que vous pouvez consulter, ouvrir ou copier comme lien d'image.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez une URL complète de site web commençant par http:// ou https://.",
      "Cliquez sur Capturer l'écran pour générer une nouvelle image d'aperçu.",
      "Consultez la carte de résultat, puis ouvrez l'image dans un nouvel onglet ou copiez son URL."
    ],
    inputLabel: "URL du site web",
    inputPlaceholder: "https://example.com",
    captureButton: "Capturer l'écran",
    capturingButton: "Capture en cours...",
    sampleButton: "URL exemple",
    clearButton: "Effacer",
    invalidUrlMessage: "Veuillez saisir une URL de site web valide commençant par http:// ou https://.",
    captureFailedMessage: "Nous n'avons pas pu capturer cette page pour le moment. Vérifiez l'URL puis réessayez.",
    unsupportedUrlMessage: "Pour des raisons de sécurité, les URLs localhost et réseau local ne sont pas prises en charge.",
    helperText: "Conseil : certains sites bloquent les aperçus automatiques, donc la capture peut échouer même si l'URL est valide.",
    resultsTitle: "Aperçu de la capture",
    resultsDescription: "Cette première version utilise un flux pratique basé sur un aperçu afin de rester simple et utile.",
    resultLabel: "Image capturée",
    sourcePageLabel: "Page source",
    openImageButton: "Ouvrir l'image",
    copyLinkButton: "Copier l'URL de l'image",
    copiedLinkButton: "Copié !",
    readyStateMessage: "Saisissez l'URL d'un site ci-dessus pour générer un aperçu de capture.",
    previewAlt: "Aperçu de capture du site web",
    fallbackNote: "La capture en direct utilise un service d'aperçu externe, car Playwright ou l'installation du navigateur n'est pas disponible dans cet environnement pour le moment."
  },
  de: {
    metadataTitle: "Website Screenshot",
    metadataDescription: "Erstelle eine praktische Website-Screenshot-Vorschau aus einer Webseiten-URL.",
    title: "Website Screenshot",
    description: "Füge eine Webseiten-URL ein, um eine einfache Screenshot-Vorschau zu erzeugen, die du ansehen, öffnen oder als Bildlink kopieren kannst.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge eine vollständige Website-URL ein, die mit http:// oder https:// beginnt.",
      "Klicke auf Screenshot erstellen, um ein neues Vorschaubild zu erzeugen.",
      "Prüfe die Ergebnis-Karte und öffne das Bild in einem neuen Tab oder kopiere die Bild-URL."
    ],
    inputLabel: "Webseiten-URL",
    inputPlaceholder: "https://example.com",
    captureButton: "Screenshot erstellen",
    capturingButton: "Wird erstellt...",
    sampleButton: "Beispiel-URL",
    clearButton: "Leeren",
    invalidUrlMessage: "Bitte gib eine gültige Webseiten-URL ein, die mit http:// oder https:// beginnt.",
    captureFailedMessage: "Diese Seite konnte gerade nicht erfasst werden. Prüfe die URL und versuche es erneut.",
    unsupportedUrlMessage: "Aus Sicherheitsgründen werden localhost- und lokale Netzwerk-URLs nicht unterstützt.",
    helperText: "Tipp: Manche Websites blockieren automatische Vorschauen, deshalb kann die Erfassung trotz gültiger URL fehlschlagen.",
    resultsTitle: "Screenshot-Vorschau",
    resultsDescription: "Diese erste Version nutzt einen praktischen Vorschau-Workflow, damit das Tool einfach und nützlich bleibt.",
    resultLabel: "Erfasstes Bild",
    sourcePageLabel: "Quellseite",
    openImageButton: "Bild öffnen",
    copyLinkButton: "Bild-URL kopieren",
    copiedLinkButton: "Kopiert!",
    readyStateMessage: "Gib oben eine Website-URL ein, um eine Screenshot-Vorschau zu erzeugen.",
    previewAlt: "Website-Screenshot-Vorschau",
    fallbackNote: "Die Live-Erfassung verwendet einen praktischen externen Vorschaudienst, weil Playwright bzw. die Browser-Installation in dieser Umgebung noch nicht verfügbar ist."
  }
};

export function getWebsiteScreenshotMessages(locale: LocaleCode): WebsiteScreenshotMessages {
  return websiteScreenshotMessages[locale] ?? websiteScreenshotMessages[defaultLocale]!;
}

export type { WebsiteScreenshotMessages };
