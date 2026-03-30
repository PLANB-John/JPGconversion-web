import Script from "next/script";

const ADSENSE_PUBLISHER_CLIENT = "ca-pub-7078124525466670";

export function AdSense() {
  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_CLIENT}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
