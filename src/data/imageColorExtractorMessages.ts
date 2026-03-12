import { defaultLocale, type LocaleCode } from "@/data/locales";

type ExtractorMessages = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  instructionsTitle: string;
  instructions: string[];
  uploadLabel: string;
  emptyState: string;
  imageAlt: string;
  selectedColorTitle: string;
  selectedColorHint: string;
  hexLabel: string;
  rgbLabel: string;
  copyHex: string;
  copyRgb: string;
  copied: string;
  copyNotSupported: string;
  recentColorsTitle: string;
  errorInvalidFile: string;
  errorLoadFailed: string;
};

const extractorMessages: Partial<Record<LocaleCode, ExtractorMessages>> = {
  en: {
    metadataTitle: "Image Color Extractor",
    metadataDescription: "Upload an image, click any pixel, and copy HEX or RGB values instantly in your browser.",
    title: "Image Color Extractor",
    description: "Upload an image, click anywhere, and instantly read the color under your cursor.",
    instructionsTitle: "How to use",
    instructions: [
      "Upload a JPG, PNG, WebP, or GIF file.",
      "Click on the image preview to sample a pixel.",
      "Copy HEX or RGB values with one click."
    ],
    uploadLabel: "Upload image",
    emptyState: "Upload an image to start extracting colors.",
    imageAlt: "Uploaded preview for color extraction",
    selectedColorTitle: "Selected Color",
    selectedColorHint: "Click on the image to pick a color.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "Copy HEX",
    copyRgb: "Copy RGB",
    copied: "Copied!",
    copyNotSupported: "Clipboard is not available in this browser.",
    recentColorsTitle: "Recent Colors",
    errorInvalidFile: "Please upload a valid image file.",
    errorLoadFailed: "Could not read this image. Please try another file."
  },
  ko: {
    metadataTitle: "이미지 색상 추출기",
    metadataDescription: "이미지를 업로드하고 픽셀을 클릭해 브라우저에서 HEX와 RGB 값을 바로 확인하세요.",
    title: "이미지 색상 추출기",
    description: "이미지를 업로드한 뒤 원하는 지점을 클릭하면 해당 색상을 즉시 확인할 수 있습니다.",
    instructionsTitle: "사용 방법",
    instructions: [
      "JPG, PNG, WebP, GIF 이미지를 업로드하세요.",
      "미리보기 이미지를 클릭해 픽셀 색상을 추출하세요.",
      "HEX 또는 RGB 값을 버튼으로 복사하세요."
    ],
    uploadLabel: "이미지 업로드",
    emptyState: "색상을 추출하려면 이미지를 업로드하세요.",
    imageAlt: "색상 추출용 업로드 이미지 미리보기",
    selectedColorTitle: "선택한 색상",
    selectedColorHint: "이미지를 클릭해 색상을 선택하세요.",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyHex: "HEX 복사",
    copyRgb: "RGB 복사",
    copied: "복사됨!",
    copyNotSupported: "이 브라우저에서는 클립보드를 사용할 수 없습니다.",
    recentColorsTitle: "최근 선택 색상",
    errorInvalidFile: "유효한 이미지 파일을 업로드해 주세요.",
    errorLoadFailed: "이미지를 불러오지 못했습니다. 다른 파일을 시도해 주세요."
  }
};

export function getImageColorExtractorMessages(locale: LocaleCode): ExtractorMessages {
  return extractorMessages[locale] ?? extractorMessages[defaultLocale]!;
}

export type { ExtractorMessages };
