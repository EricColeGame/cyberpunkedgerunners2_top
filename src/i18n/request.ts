import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";

type Messages = typeof en;

// 与 src/i18n/routing.ts 的 locales 保持一致；未翻译的键由 deepMerge 回退到 en。
const messagesMap: Record<string, unknown> = {
  "en": en,
  "ja": ja,
  "es": es,
  "de": de,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  let localeMessages: Partial<Messages> = {};
  if (locale !== "en") {
    localeMessages = (messagesMap[locale] ?? {}) as Partial<Messages>;
  }

  const messages = deepMerge(en, localeMessages);
  return { locale, messages };
});
