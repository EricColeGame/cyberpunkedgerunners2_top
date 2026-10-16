import { defineRouting } from "next-intl/routing";

// 唯一真相源：站点支持的语言集合。
// 必须与 src/i18n/request.ts、src/components/language-switcher.tsx 的标签键
// 以及 src/locales/*.json 的文件名保持一致。
export const locales = ["en", "ja", "es", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
