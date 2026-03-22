import { defaultLocale, type LocaleCode } from "@/data/locales";

export type UtmFieldKey = "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content";

export type UtmBuilderMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  baseUrlLabel: string;
  baseUrlPlaceholder: string;
  fieldPlaceholders: Record<UtmFieldKey, string>;
  copyButton: string;
  copiedButton: string;
  sampleButton: string;
  clearButton: string;
  invalidUrlMessage: string;
  generatedUrlTitle: string;
  generatedUrlDescription: string;
  generatedUrlPlaceholder: string;
  parameterSummaryTitle: string;
  parameterSummaryDescription: string;
  emptySummaryMessage: string;
  summaryValueFallback: string;
};

const utmBuilderMessages: Partial<Record<LocaleCode, UtmBuilderMessages>> = {
  en: {
    metadataTitle: "UTM Builder",
    metadataDescription: "Create UTM tracking links in your browser with live URL generation.",
    title: "UTM Builder",
    description: "Build clean marketing URLs with UTM parameters, preview the final link instantly, and copy it when you're ready.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter the page URL you want to track.",
      "Fill in the UTM fields you need for your campaign.",
      "Copy the generated URL and use it in ads, emails, or social posts."
    ],
    baseUrlLabel: "Base URL",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "Copy result",
    copiedButton: "Copied!",
    sampleButton: "Sample",
    clearButton: "Clear",
    invalidUrlMessage: "Please enter a valid URL starting with http:// or https://.",
    generatedUrlTitle: "Generated URL",
    generatedUrlDescription: "Your final tracking link updates live as you edit the fields.",
    generatedUrlPlaceholder: "Your UTM URL will appear here.",
    parameterSummaryTitle: "Parameter summary",
    parameterSummaryDescription: "Review the campaign values currently included in your URL.",
    emptySummaryMessage: "Add at least one UTM value to see a summary here.",
    summaryValueFallback: "Not set"
  },
  ko: {
    metadataTitle: "UTM Builder",
    metadataDescription: "브라우저에서 UTM 추적 링크를 실시간으로 생성하세요.",
    title: "UTM Builder",
    description: "UTM 파라미터가 포함된 마케팅 URL을 만들고, 최종 링크를 바로 확인한 뒤 복사할 수 있습니다.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "추적할 페이지 URL을 입력하세요.",
      "캠페인에 필요한 UTM 항목을 입력하세요.",
      "생성된 URL을 복사해 광고, 이메일, SNS 게시물에 사용하세요."
    ],
    baseUrlLabel: "기본 URL",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플",
    clearButton: "지우기",
    invalidUrlMessage: "http:// 또는 https://로 시작하는 올바른 URL을 입력해 주세요.",
    generatedUrlTitle: "생성된 URL",
    generatedUrlDescription: "필드를 수정하면 최종 추적 링크가 실시간으로 업데이트됩니다.",
    generatedUrlPlaceholder: "UTM URL이 여기에 표시됩니다.",
    parameterSummaryTitle: "파라미터 요약",
    parameterSummaryDescription: "현재 URL에 포함된 캠페인 값을 확인하세요.",
    emptySummaryMessage: "요약을 보려면 UTM 값을 하나 이상 입력하세요.",
    summaryValueFallback: "설정되지 않음"
  },
  ja: {
    metadataTitle: "UTM Builder",
    metadataDescription: "ブラウザ上でUTMトラッキングURLをリアルタイム生成できます。",
    title: "UTM Builder",
    description: "UTMパラメータ付きのマーケティングURLを作成し、完成リンクをすぐ確認してコピーできます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "計測したいページURLを入力します。",
      "キャンペーンに必要なUTM項目を入力します。",
      "生成されたURLをコピーして広告、メール、SNS投稿に使います。"
    ],
    baseUrlLabel: "ベースURL",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプル",
    clearButton: "クリア",
    invalidUrlMessage: "http:// または https:// で始まる有効なURLを入力してください。",
    generatedUrlTitle: "生成されたURL",
    generatedUrlDescription: "入力内容に合わせて最終トラッキングURLがリアルタイムで更新されます。",
    generatedUrlPlaceholder: "ここにUTM URLが表示されます。",
    parameterSummaryTitle: "パラメータ概要",
    parameterSummaryDescription: "現在URLに含まれているキャンペーン値を確認できます。",
    emptySummaryMessage: "ここに概要を表示するには、少なくとも1つのUTM値を入力してください。",
    summaryValueFallback: "未設定"
  },
  es: {
    metadataTitle: "UTM Builder",
    metadataDescription: "Crea enlaces de seguimiento UTM en tu navegador con generación en vivo.",
    title: "UTM Builder",
    description: "Construye URLs de marketing con parámetros UTM, revisa el enlace final al instante y cópialo cuando esté listo.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Introduce la URL de la página que quieres medir.",
      "Completa los campos UTM que necesites para tu campaña.",
      "Copia la URL generada y úsala en anuncios, correos o publicaciones sociales."
    ],
    baseUrlLabel: "URL base",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    sampleButton: "Ejemplo",
    clearButton: "Limpiar",
    invalidUrlMessage: "Introduce una URL válida que empiece por http:// o https://.",
    generatedUrlTitle: "URL generada",
    generatedUrlDescription: "Tu enlace final se actualiza en vivo mientras editas los campos.",
    generatedUrlPlaceholder: "Tu URL UTM aparecerá aquí.",
    parameterSummaryTitle: "Resumen de parámetros",
    parameterSummaryDescription: "Revisa los valores de campaña incluidos actualmente en tu URL.",
    emptySummaryMessage: "Agrega al menos un valor UTM para ver un resumen aquí.",
    summaryValueFallback: "Sin definir"
  },
  fr: {
    metadataTitle: "UTM Builder",
    metadataDescription: "Créez des liens UTM dans votre navigateur avec génération en direct.",
    title: "UTM Builder",
    description: "Créez des URL marketing avec paramètres UTM, prévisualisez le lien final instantanément et copiez-le quand il est prêt.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez l'URL de la page que vous voulez suivre.",
      "Remplissez les champs UTM nécessaires à votre campagne.",
      "Copiez l'URL générée et utilisez-la dans vos publicités, e-mails ou publications sociales."
    ],
    baseUrlLabel: "URL de base",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    sampleButton: "Exemple",
    clearButton: "Effacer",
    invalidUrlMessage: "Veuillez saisir une URL valide commençant par http:// ou https://.",
    generatedUrlTitle: "URL générée",
    generatedUrlDescription: "Votre lien final se met à jour en direct pendant que vous modifiez les champs.",
    generatedUrlPlaceholder: "Votre URL UTM apparaîtra ici.",
    parameterSummaryTitle: "Résumé des paramètres",
    parameterSummaryDescription: "Vérifiez les valeurs de campagne actuellement incluses dans votre URL.",
    emptySummaryMessage: "Ajoutez au moins une valeur UTM pour afficher un résumé ici.",
    summaryValueFallback: "Non défini"
  },
  de: {
    metadataTitle: "UTM Builder",
    metadataDescription: "Erstelle UTM-Tracking-Links direkt im Browser mit Live-Vorschau.",
    title: "UTM Builder",
    description: "Erstelle saubere Marketing-URLs mit UTM-Parametern, prüfe den finalen Link sofort und kopiere ihn bei Bedarf.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib die Seiten-URL ein, die du tracken möchtest.",
      "Fülle die UTM-Felder aus, die du für deine Kampagne brauchst.",
      "Kopiere die generierte URL und nutze sie in Anzeigen, E-Mails oder Social Posts."
    ],
    baseUrlLabel: "Basis-URL",
    baseUrlPlaceholder: "https://example.com/landing-page",
    fieldPlaceholders: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "spring_sale",
      utm_term: "running shoes",
      utm_content: "blue-banner"
    },
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispiel",
    clearButton: "Leeren",
    invalidUrlMessage: "Bitte gib eine gültige URL ein, die mit http:// oder https:// beginnt.",
    generatedUrlTitle: "Generierte URL",
    generatedUrlDescription: "Dein finaler Tracking-Link wird beim Bearbeiten der Felder live aktualisiert.",
    generatedUrlPlaceholder: "Deine UTM-URL erscheint hier.",
    parameterSummaryTitle: "Parameterübersicht",
    parameterSummaryDescription: "Prüfe die Kampagnenwerte, die aktuell in deiner URL enthalten sind.",
    emptySummaryMessage: "Füge mindestens einen UTM-Wert hinzu, um hier eine Übersicht zu sehen.",
    summaryValueFallback: "Nicht festgelegt"
  }
};

export function getUtmBuilderMessages(locale: LocaleCode): UtmBuilderMessages {
  return utmBuilderMessages[locale] ?? utmBuilderMessages[defaultLocale]!;
}
