import { defaultLocale, type LocaleCode } from "@/data/locales";

type Base64EncodeDecodeMessages = {
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

const base64EncodeDecodeMessages: Partial<Record<LocaleCode, Base64EncodeDecodeMessages>> = {
  en: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Encode text to Base64 or decode Base64 back to UTF-8 text directly in your browser.",
    title: "Base64 Encode / Decode",
    description: "Convert plain text to Base64 and decode Base64 back to readable text, with UTF-8 support for multilingual content.",
    supportSectionTitle: "Quick Base64 workflow guide",
    supportSectionDescription: "Use this tool for fast conversion checks, then continue with practical guides for choosing when Base64 helps and when it adds unnecessary complexity.",
    whenToUseTitle: "When to use this tool",
    whenToUseItems: [
      "You need to inspect an encoded API value quickly.",
      "You want to convert a short text sample to Base64 for testing.",
      "You need to confirm whether a decode error comes from malformed input."
    ],
    quickStepsTitle: "Quick steps",
    quickSteps: [
      "Paste text in the input and choose Encode or Decode.",
      "Review the output and confirm it matches expected format.",
      "Copy the result into your workflow and validate in context."
    ],
    commonMistakesTitle: "Common mistakes",
    commonMistakes: [
      "Treating Base64 as encryption for sensitive data.",
      "Assuming every opaque string is valid Base64.",
      "Encoding content that is already readable and does not need conversion."
    ],
    relatedGuidesTitle: "Related Base64 Encode / Decode guides",
    relatedGuidesDescription: "Read these short guides to choose the right encoding approach and avoid common Base64 workflow issues.",
    howToUseTitle: "How to use",
    howToUseSteps: [
      "Enter or paste text in the input area.",
      "Click Encode to convert text to Base64, or Decode to convert Base64 back to text.",
      "Copy the result, try sample text, or clear both fields to start over."
    ],
    inputLabel: "Input text",
    outputLabel: "Result",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copy result",
    copiedButton: "Copied!",
    sampleButton: "Sample text",
    clearButton: "Clear",
    inputPlaceholder: "Enter plain text or Base64 text...",
    outputPlaceholder: "Your result will appear here.",
    decodeErrorMessage: "Decoding failed. Please check if the input is valid Base64 UTF-8 text.",
    emptyInputMessage: "Please enter text before running this action."
  },
  ko: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "브라우저에서 텍스트를 Base64로 인코딩하거나 UTF-8 텍스트로 디코딩하세요.",
    title: "Base64 Encode / Decode",
    description: "일반 텍스트를 Base64로 변환하고 Base64를 다시 읽기 쉬운 텍스트로 복원하세요. 다국어 UTF-8을 지원합니다.",
    supportSectionTitle: "Base64 빠른 실무 가이드",
    supportSectionDescription: "빠른 변환 확인 후, 아래 가이드에서 Base64를 써야 할 때와 피해야 할 때를 실무적으로 이어서 확인하세요.",
    whenToUseTitle: "이 도구가 필요한 상황",
    whenToUseItems: [
      "인코딩된 API 값을 빠르게 확인해야 할 때",
      "테스트용 짧은 텍스트를 Base64로 변환할 때",
      "디코딩 오류가 입력 형식 문제인지 확인할 때"
    ],
    quickStepsTitle: "빠른 사용 순서",
    quickSteps: [
      "입력창에 텍스트를 붙여넣고 Encode 또는 Decode를 선택하세요.",
      "출력 결과가 기대한 형식과 맞는지 확인하세요.",
      "결과를 복사해 실제 워크플로에서 다시 검증하세요."
    ],
    commonMistakesTitle: "자주 하는 실수",
    commonMistakes: [
      "Base64를 민감정보 보호(암호화)로 오해하는 경우",
      "불투명한 문자열이면 모두 Base64라고 가정하는 경우",
      "굳이 변환이 필요 없는 값을 불필요하게 인코딩하는 경우"
    ],
    relatedGuidesTitle: "관련 Base64 Encode / Decode 가이드",
    relatedGuidesDescription: "짧은 가이드로 Base64 사용 기준과 실무에서 자주 생기는 문제를 빠르게 정리해 보세요.",
    howToUseTitle: "사용 방법",
    howToUseSteps: [
      "입력 영역에 텍스트를 입력하거나 붙여넣으세요.",
      "Encode를 누르면 Base64로 변환되고, Decode를 누르면 텍스트로 복원됩니다.",
      "결과를 복사하거나 샘플 텍스트를 넣고, Clear로 초기화할 수 있습니다."
    ],
    inputLabel: "입력 텍스트",
    outputLabel: "결과",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "결과 복사",
    copiedButton: "복사됨!",
    sampleButton: "샘플 텍스트",
    clearButton: "지우기",
    inputPlaceholder: "일반 텍스트 또는 Base64 텍스트를 입력하세요...",
    outputPlaceholder: "결과가 여기에 표시됩니다.",
    decodeErrorMessage: "디코딩에 실패했습니다. 입력값이 올바른 Base64 UTF-8 텍스트인지 확인해 주세요.",
    emptyInputMessage: "실행 전에 텍스트를 입력해 주세요."
  },
  ja: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "ブラウザ上でテキストをBase64にエンコードし、UTF-8テキストにデコードできます。",
    title: "Base64 Encode / Decode",
    description: "通常テキストをBase64に変換し、Base64を読みやすいテキストに戻せます。多言語UTF-8に対応しています。",
    supportSectionTitle: "Base64クイック実務ガイド",
    supportSectionDescription: "このツールで素早く変換確認し、関連ガイドでBase64を使う場面と避ける場面を実務的に整理できます。",
    whenToUseTitle: "このツールを使う場面",
    whenToUseItems: [
      "エンコード済みAPI値をすぐ確認したいとき",
      "テスト用の短い文字列をBase64化したいとき",
      "デコードエラーが入力不正かを切り分けたいとき"
    ],
    quickStepsTitle: "クイックステップ",
    quickSteps: [
      "入力欄にテキストを貼り付け、EncodeまたはDecodeを選びます。",
      "出力が想定フォーマットか確認します。",
      "結果をコピーして実際の処理で再確認します。"
    ],
    commonMistakesTitle: "よくあるミス",
    commonMistakes: [
      "Base64を機密保護の暗号化と誤解すること",
      "読みにくい文字列をすべてBase64だと思い込むこと",
      "変換不要な値までBase64化してしまうこと"
    ],
    relatedGuidesTitle: "関連Base64 Encode / Decodeガイド",
    relatedGuidesDescription: "実務で役立つ短いガイドで、Base64の使いどころと注意点を確認できます。",
    howToUseTitle: "使い方",
    howToUseSteps: [
      "入力欄にテキストを入力または貼り付けます。",
      "EncodeでBase64に変換し、Decodeでテキストに戻します。",
      "結果をコピーしたり、サンプル入力やClearでやり直しできます。"
    ],
    inputLabel: "入力テキスト",
    outputLabel: "結果",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "結果をコピー",
    copiedButton: "コピーしました！",
    sampleButton: "サンプルテキスト",
    clearButton: "クリア",
    inputPlaceholder: "通常テキストまたはBase64テキストを入力してください...",
    outputPlaceholder: "ここに結果が表示されます。",
    decodeErrorMessage: "デコードに失敗しました。入力が有効なBase64 UTF-8テキストか確認してください。",
    emptyInputMessage: "実行前にテキストを入力してください。"
  },
  es: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Codifica texto a Base64 o decodifica Base64 a texto UTF-8 directamente en tu navegador.",
    title: "Base64 Encode / Decode",
    description: "Convierte texto normal a Base64 y vuelve de Base64 a texto legible con soporte UTF-8 para contenido multilingüe.",
    supportSectionTitle: "Guía rápida de flujo Base64",
    supportSectionDescription: "Usa esta herramienta para conversiones rápidas y continúa con guías prácticas para decidir cuándo Base64 ayuda y cuándo solo añade complejidad.",
    whenToUseTitle: "Cuándo usar esta herramienta",
    whenToUseItems: [
      "Necesitas inspeccionar rápido un valor codificado en una API.",
      "Quieres convertir texto corto a Base64 para pruebas.",
      "Debes validar si un error de decodificación viene de entrada mal formada."
    ],
    quickStepsTitle: "Pasos rápidos",
    quickSteps: [
      "Pega texto en la entrada y elige Encode o Decode.",
      "Revisa la salida y confirma que coincide con el formato esperado.",
      "Copia el resultado y valídalo dentro de tu flujo real."
    ],
    commonMistakesTitle: "Errores comunes",
    commonMistakes: [
      "Tratar Base64 como si fuera cifrado de datos sensibles.",
      "Asumir que cualquier cadena opaca es Base64 válida.",
      "Codificar contenido que ya era legible y no lo necesitaba."
    ],
    relatedGuidesTitle: "Guías relacionadas de Base64 Encode / Decode",
    relatedGuidesDescription: "Consulta estas guías breves para elegir mejor tu estrategia de codificación y evitar errores frecuentes con Base64.",
    howToUseTitle: "Cómo usarlo",
    howToUseSteps: [
      "Escribe o pega texto en el área de entrada.",
      "Haz clic en Encode para convertir a Base64, o en Decode para recuperar el texto.",
      "Copia el resultado, usa texto de ejemplo o limpia todo para empezar de nuevo."
    ],
    inputLabel: "Texto de entrada",
    outputLabel: "Resultado",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copiar resultado",
    copiedButton: "¡Copiado!",
    sampleButton: "Texto de ejemplo",
    clearButton: "Limpiar",
    inputPlaceholder: "Ingresa texto normal o Base64...",
    outputPlaceholder: "Tu resultado aparecerá aquí.",
    decodeErrorMessage: "La decodificación falló. Verifica si la entrada es Base64 UTF-8 válida.",
    emptyInputMessage: "Ingresa texto antes de ejecutar esta acción."
  },
  fr: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Encodez du texte en Base64 ou décodez du Base64 en texte UTF-8 directement dans votre navigateur.",
    title: "Base64 Encode / Decode",
    description: "Convertissez du texte brut en Base64 et revenez à du texte lisible avec prise en charge UTF-8 pour le contenu multilingue.",
    supportSectionTitle: "Guide rapide de workflow Base64",
    supportSectionDescription: "Faites une conversion rapide ici, puis utilisez les guides liés pour savoir quand Base64 est utile et quand il complique inutilement le flux.",
    whenToUseTitle: "Quand utiliser cet outil",
    whenToUseItems: [
      "Vous devez vérifier rapidement une valeur API encodée.",
      "Vous voulez encoder un court texte en Base64 pour un test.",
      "Vous devez confirmer si une erreur de décodage vient d'une entrée invalide."
    ],
    quickStepsTitle: "Étapes rapides",
    quickSteps: [
      "Collez le texte puis choisissez Encode ou Decode.",
      "Vérifiez que la sortie correspond au format attendu.",
      "Copiez le résultat et validez-le dans votre workflow réel."
    ],
    commonMistakesTitle: "Erreurs fréquentes",
    commonMistakes: [
      "Considérer Base64 comme un chiffrement de données sensibles.",
      "Supposer qu'une chaîne opaque est forcément du Base64 valide.",
      "Encoder des contenus déjà lisibles sans besoin réel."
    ],
    relatedGuidesTitle: "Guides Base64 Encode / Decode associés",
    relatedGuidesDescription: "Parcourez ces guides courts pour choisir le bon usage de Base64 et éviter les erreurs courantes.",
    howToUseTitle: "Mode d'emploi",
    howToUseSteps: [
      "Saisissez ou collez du texte dans la zone d'entrée.",
      "Cliquez sur Encode pour convertir en Base64, ou sur Decode pour restaurer le texte.",
      "Copiez le résultat, utilisez un exemple ou effacez tout pour recommencer."
    ],
    inputLabel: "Texte d'entrée",
    outputLabel: "Résultat",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Copier le résultat",
    copiedButton: "Copié !",
    sampleButton: "Texte exemple",
    clearButton: "Effacer",
    inputPlaceholder: "Saisissez du texte brut ou Base64...",
    outputPlaceholder: "Votre résultat apparaîtra ici.",
    decodeErrorMessage: "Le décodage a échoué. Vérifiez que l'entrée est un texte Base64 UTF-8 valide.",
    emptyInputMessage: "Veuillez saisir du texte avant d'exécuter cette action."
  },
  de: {
    metadataTitle: "Base64 Encode / Decode",
    metadataDescription: "Kodiere Text in Base64 oder dekodiere Base64 zurück zu UTF-8-Text direkt im Browser.",
    title: "Base64 Encode / Decode",
    description: "Wandle normalen Text in Base64 um und dekodiere Base64 zurück in lesbaren Text mit UTF-8-Unterstützung für mehrsprachige Inhalte.",
    supportSectionTitle: "Kurzer Base64-Workflow-Guide",
    supportSectionDescription: "Nutze dieses Tool für schnelle Umwandlungen und gehe danach in die verlinkten Guides, um sinnvolle und unnötige Base64-Einsätze besser zu unterscheiden.",
    whenToUseTitle: "Wann du dieses Tool nutzen solltest",
    whenToUseItems: [
      "Du musst einen kodierten API-Wert schnell prüfen.",
      "Du willst kurzen Text für Tests in Base64 umwandeln.",
      "Du möchtest klären, ob ein Decode-Fehler von ungültiger Eingabe kommt."
    ],
    quickStepsTitle: "Schnelle Schritte",
    quickSteps: [
      "Text einfügen und Encode oder Decode wählen.",
      "Ausgabe prüfen und mit dem erwarteten Format vergleichen.",
      "Ergebnis kopieren und im echten Workflow verifizieren."
    ],
    commonMistakesTitle: "Häufige Fehler",
    commonMistakes: [
      "Base64 als Verschlüsselung für sensible Daten zu behandeln.",
      "Jeden unlesbaren String automatisch als gültiges Base64 anzunehmen.",
      "Bereits lesbare Inhalte ohne Grund zu kodieren."
    ],
    relatedGuidesTitle: "Verwandte Base64 Encode / Decode-Guides",
    relatedGuidesDescription: "Diese kurzen Guides helfen dir, Base64 gezielt einzusetzen und typische Workflow-Fehler zu vermeiden.",
    howToUseTitle: "So funktioniert's",
    howToUseSteps: [
      "Gib Text in das Eingabefeld ein oder füge ihn ein.",
      "Klicke auf Encode, um in Base64 umzuwandeln, oder auf Decode, um den Text wiederherzustellen.",
      "Kopiere das Ergebnis, nutze Beispieltext oder lösche alles für einen Neustart."
    ],
    inputLabel: "Eingabetext",
    outputLabel: "Ergebnis",
    encodeButton: "Encode",
    decodeButton: "Decode",
    copyButton: "Ergebnis kopieren",
    copiedButton: "Kopiert!",
    sampleButton: "Beispieltext",
    clearButton: "Leeren",
    inputPlaceholder: "Normalen Text oder Base64-Text eingeben...",
    outputPlaceholder: "Dein Ergebnis erscheint hier.",
    decodeErrorMessage: "Dekodierung fehlgeschlagen. Bitte prüfe, ob die Eingabe gültiger Base64-UTF-8-Text ist.",
    emptyInputMessage: "Bitte gib Text ein, bevor du diese Aktion ausführst."
  }
};

export function getBase64EncodeDecodeMessages(locale: LocaleCode): Base64EncodeDecodeMessages {
  return base64EncodeDecodeMessages[locale] ?? base64EncodeDecodeMessages[defaultLocale]!;
}

export type { Base64EncodeDecodeMessages };
