import { defaultLocale, type LocaleCode } from "@/data/locales";

type UrlEncodeDecodeMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  supportSectionTitle: string;
  supportSectionDescription: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  quickStepsTitle: string;
  quickSteps: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  inputLabel: string;
  outputLabel: string;
  encodeButton: string;
  decodeButton: string;
  copyButton: string;
  copiedButton: string;
  sampleButton: string;
  clearButton: string;
  inputPlaceholder: string;
  outputPlaceholder: string;
  decodeErrorMessage: string;
  emptyInputMessage: string;
};

const urlEncodeDecodeMessages: Partial<Record<LocaleCode, UrlEncodeDecodeMessages>> = {
  en: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Encode and decode URL text safely in your browser.",
    title: "URL Encode / Decode",
    description: "Convert plain text into URL-safe format or decode encoded text back to readable form.",
    supportSectionTitle: "Quick URL encoding guide",
    supportSectionDescription: "Use this tool for fast encoding fixes, then continue with short practical guides for cleaner links and safer tracking.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You are adding dynamic values like names, search terms, or UTM labels into a URL.",
      "A shared link fails because spaces or symbols were handled incorrectly.",
      "You need to verify whether a value was encoded once or encoded twice."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste the original text or URL fragment into the input.",
      "Click Encode or Decode once, then inspect the result for expected characters.",
      "Copy the result and test the final link in your browser."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Encoding an entire URL when only one parameter value needed encoding.",
      "Running Encode multiple times and creating %25 sequences.",
      "Decoding repeatedly without checking the original source format."
    ],
    relatedGuidesTitle: "Related URL Encode / Decode guides",
    relatedGuidesDescription: "Read the linked guides for practical workflows on fixing encoding issues and building safer URLs.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Paste text into the input area.",
      "Click Encode to convert special characters to URL-safe values, or Decode to convert them back.",
      "Copy the result or clear everything to start over."
    ],
    inputLabel: "Input text",
    outputLabel: "Result",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copy result",
    copiedButton: "Copied!",
    sampleButton: "Sample text",
    clearButton: "Clear",
    inputPlaceholder: "Enter text to encode or decode...",
    outputPlaceholder: "Your result will appear here.",
    decodeErrorMessage: "Decoding failed. Please check if the text is a valid encoded URL string.",
    emptyInputMessage: "Please enter text before running this action."
  },
  ko: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "브라우저에서 URL 텍스트를 안전하게 인코딩하거나 디코딩하세요.",
    title: "URL Encode / Decode",
    description: "일반 텍스트를 URL에서 안전한 형식으로 변환하거나, 인코딩된 텍스트를 다시 읽기 쉽게 복원하세요.",
    supportSectionTitle: "URL 인코딩 빠른 가이드",
    supportSectionDescription: "빠른 변환 이후, 아래 가이드를 통해 링크 오류 수정과 안정적인 추적 워크플로까지 이어서 확인하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "이름, 검색어, UTM 라벨 같은 동적 값을 URL에 넣어야 할 때",
      "공백/기호 처리 문제로 공유 링크가 깨졌을 때",
      "값이 한 번 인코딩됐는지, 이중 인코딩됐는지 확인해야 할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "원문 텍스트 또는 URL 조각을 입력칸에 붙여넣으세요.",
      "Encode 또는 Decode를 한 번 실행하고 결과 문자를 확인하세요.",
      "결과를 복사한 뒤 최종 링크를 브라우저에서 테스트하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "파라미터 값만 인코딩하면 되는데 URL 전체를 인코딩하는 경우",
      "Encode를 여러 번 눌러 %25 패턴을 만드는 경우",
      "원본 포맷 확인 없이 반복 디코딩하는 경우"
    ],
    relatedGuidesTitle: "관련 URL Encode / Decode 가이드",
    relatedGuidesDescription: "인코딩 오류 수정과 안전한 URL 작성 흐름을 짧은 실전 가이드로 확인하세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 붙여넣으세요.",
      "Encode 버튼으로 특수 문자를 URL-safe 값으로 변환하거나 Decode 버튼으로 다시 복원하세요.",
      "결과를 복사하거나 Clear 버튼으로 모두 지우고 다시 시작하세요."
    ],
    inputLabel: "입력 텍스트",
    outputLabel: "결과",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플 텍스트",
    clearButton: "지우기",
    inputPlaceholder: "인코딩 또는 디코딩할 텍스트를 입력하세요...",
    outputPlaceholder: "결과가 여기에 표시됩니다.",
    decodeErrorMessage: "디코딩에 실패했습니다. 올바르게 인코딩된 URL 문자열인지 확인해 주세요.",
    emptyInputMessage: "실행 전에 텍스트를 입력해 주세요."
  },
  ja: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "ブラウザでURLテキストを安全にエンコード/デコードできます。",
    title: "URL Encode / Decode",
    description: "通常のテキストをURLで安全な形式に変換したり、エンコード済みテキストを読みやすい形に戻したりできます。",
    supportSectionTitle: "URLエンコードのクイックガイド",
    supportSectionDescription: "このツールで素早く変換し、下のガイドでリンク修正や計測運用を実務的に整理できます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "名前・検索語・UTMラベルなど動的値をURLに入れるとき",
      "空白や記号の扱いで共有リンクが壊れたとき",
      "値が1回エンコードか二重エンコードか確認したいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "元テキストまたはURL断片を入力欄に貼り付けます。",
      "EncodeまたはDecodeを1回実行し、結果を確認します。",
      "結果をコピーし、最終リンクをブラウザでテストします。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "値だけでなくURL全体を不要にエンコードすること",
      "Encodeを繰り返して%25を増やしてしまうこと",
      "元形式を確認せずに何度もデコードすること"
    ],
    relatedGuidesTitle: "関連URL Encode / Decodeガイド",
    relatedGuidesDescription: "エンコード修正と安全なURL作成を、短い実践ガイドで確認できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを貼り付けます。",
      "Encodeで特殊文字をURL安全形式に変換し、Decodeで元に戻します。",
      "結果をコピーするか、Clearでリセットしてやり直します。"
    ],
    inputLabel: "入力テキスト",
    outputLabel: "結果",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプルテキスト",
    clearButton: "クリア",
    inputPlaceholder: "エンコードまたはデコードするテキストを入力してください...",
    outputPlaceholder: "ここに結果が表示されます。",
    decodeErrorMessage: "デコードに失敗しました。文字列が正しくURLエンコードされているか確認してください。",
    emptyInputMessage: "実行前にテキストを入力してください。"
  },
  es: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Codifica y decodifica texto de URL de forma segura en tu navegador.",
    title: "URL Encode / Decode",
    description: "Convierte texto normal a formato seguro para URL o devuelve texto codificado a una forma legible.",
    supportSectionTitle: "Guía rápida de codificación URL",
    supportSectionDescription: "Úsalo para resolver conversiones rápidas y sigue con guías prácticas para enlaces limpios y tracking estable.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Debes añadir valores dinámicos como nombres, búsquedas o etiquetas UTM en una URL.",
      "Un enlace compartido falla por espacios o símbolos mal tratados.",
      "Necesitas confirmar si un valor fue codificado una vez o dos."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega el texto original o fragmento de URL en la entrada.",
      "Haz clic en Encode o Decode una vez y revisa el resultado.",
      "Copia el resultado y prueba el enlace final en tu navegador."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Codificar toda la URL cuando solo hacía falta un valor de parámetro.",
      "Ejecutar Encode varias veces y generar secuencias %25.",
      "Decodificar repetidamente sin validar el formato original."
    ],
    relatedGuidesTitle: "Guías relacionadas de URL Encode / Decode",
    relatedGuidesDescription: "Consulta guías breves para corregir errores de codificación y construir URLs más seguras.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Pega texto en el área de entrada.",
      "Haz clic en Encode para convertir caracteres especiales a formato URL seguro, o en Decode para revertirlos.",
      "Copia el resultado o limpia todo para empezar de nuevo."
    ],
    inputLabel: "Texto de entrada",
    outputLabel: "Resultado",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    sampleButton: "Texto de ejemplo",
    clearButton: "Limpiar",
    inputPlaceholder: "Ingresa texto para codificar o decodificar...",
    outputPlaceholder: "El resultado aparecerá aquí.",
    decodeErrorMessage: "La decodificación falló. Verifica si el texto es una cadena URL codificada válida.",
    emptyInputMessage: "Ingresa texto antes de ejecutar esta acción."
  },
  fr: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Encodez et décodez du texte URL en toute sécurité dans votre navigateur.",
    title: "URL Encode / Decode",
    description: "Convertissez du texte brut en format sûr pour URL ou restaurez un texte encodé dans un format lisible.",
    supportSectionTitle: "Guide rapide d'encodage URL",
    supportSectionDescription: "Utilisez cet outil pour corriger rapidement des valeurs, puis suivez les guides liés pour des liens plus fiables.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vous ajoutez des valeurs dynamiques (nom, recherche, libellé UTM) dans une URL.",
      "Un lien partagé casse à cause des espaces ou symboles.",
      "Vous devez vérifier un encodage simple vs double encodage."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez le texte source ou fragment URL dans l'entrée.",
      "Cliquez sur Encode ou Decode une seule fois puis contrôlez le résultat.",
      "Copiez le résultat et testez le lien final dans le navigateur."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Encoder toute l'URL alors qu'une seule valeur devait l'être.",
      "Cliquer plusieurs fois sur Encode et produire des séquences %25.",
      "Décoder en boucle sans vérifier le format source."
    ],
    relatedGuidesTitle: "Guides URL Encode / Decode associés",
    relatedGuidesDescription: "Lisez ces guides courts pour corriger les erreurs d'encodage et construire des URLs plus robustes.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Collez du texte dans la zone d'entrée.",
      "Cliquez sur Encode pour convertir les caractères spéciaux en valeurs URL sûres, ou sur Decode pour les restaurer.",
      "Copiez le résultat ou effacez tout pour recommencer."
    ],
    inputLabel: "Texte d'entrée",
    outputLabel: "Résultat",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    sampleButton: "Texte exemple",
    clearButton: "Effacer",
    inputPlaceholder: "Saisissez un texte à encoder ou décoder...",
    outputPlaceholder: "Votre résultat apparaîtra ici.",
    decodeErrorMessage: "Le décodage a échoué. Vérifiez que le texte est une chaîne URL encodée valide.",
    emptyInputMessage: "Veuillez saisir du texte avant d'exécuter cette action."
  },
  de: {
    metadataTitle: "URL Encode / Decode",
    metadataDescription: "Kodiere und dekodiere URL-Text sicher direkt im Browser.",
    title: "URL Encode / Decode",
    description: "Wandle normalen Text in ein URL-sicheres Format um oder dekodiere kodierten Text zurück in lesbare Form.",
    supportSectionTitle: "Schnellguide für URL-Encoding",
    supportSectionDescription: "Nutze das Tool für schnelle Umwandlungen und lies danach die verlinkten Guides für stabilere Links und sauberes Tracking.",
    whenToUseTitle: "Wann dieses Tool sinnvoll ist",
    whenToUseItems: [
      "Du fügst dynamische Werte wie Namen, Suchbegriffe oder UTM-Labels in URLs ein.",
      "Ein geteilter Link scheitert wegen falsch behandelten Leerzeichen oder Symbolen.",
      "Du möchtest prüfen, ob ein Wert einmal oder doppelt codiert wurde."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "Originaltext oder URL-Fragment ins Eingabefeld einfügen.",
      "Einmal Encode oder Decode ausführen und Ergebnis prüfen.",
      "Ergebnis kopieren und den finalen Link im Browser testen."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Die komplette URL codieren statt nur den Parameterwert.",
      "Mehrfach Encode ausführen und %25-Ketten erzeugen.",
      "Mehrfach decodieren, ohne das Ursprungsformat zu prüfen."
    ],
    relatedGuidesTitle: "Verwandte URL Encode / Decode-Guides",
    relatedGuidesDescription: "Diese kurzen Guides helfen beim Beheben von Encoding-Fehlern und beim sicheren URL-Aufbau.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Füge Text in das Eingabefeld ein.",
      "Klicke auf Encode, um Sonderzeichen URL-sicher zu kodieren, oder auf Decode, um sie zurückzuwandeln.",
      "Kopiere das Ergebnis oder lösche alles, um neu zu starten."
    ],
    inputLabel: "Eingabetext",
    outputLabel: "Ergebnis",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispieltext",
    clearButton: "Leeren",
    inputPlaceholder: "Text zum Kodieren oder Dekodieren eingeben...",
    outputPlaceholder: "Dein Ergebnis erscheint hier.",
    decodeErrorMessage: "Dekodierung fehlgeschlagen. Bitte prüfe, ob der Text ein gültig URL-kodierter String ist.",
    emptyInputMessage: "Bitte gib Text ein, bevor du diese Aktion ausführst."
  }
};

export function getUrlEncodeDecodeMessages(locale: LocaleCode): UrlEncodeDecodeMessages {
  return urlEncodeDecodeMessages[locale] ?? urlEncodeDecodeMessages[defaultLocale]!;
}

export type { UrlEncodeDecodeMessages };
