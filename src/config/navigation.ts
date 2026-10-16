import type { LucideIcon } from "lucide-react";
import { BookOpen, Calendar, Compass, Film, Music, Users } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

// 分类 slug 的四处真相源必须完全一致：
// 1) 本文件的 NAVIGATION_CONFIG   2) content/<locale>/ 的子目录名
// 3) src/lib/content.ts 的 GROUP_TITLES / GROUP_ORDER
// 4) src/locales/en.json 的 nav 与各分类顶级 key（overviewTitle / overviewDescription）
// key 是翻译键，path 是 URL，两者不可合并；SiteHeader 与 Footer 均消费这两个字段。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: Compass, isContentType: true },
  { key: "release", path: "/release", icon: Calendar, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "story", path: "/story", icon: BookOpen, isContentType: true },
  { key: "music", path: "/music", icon: Music, isContentType: true },
  { key: "trailers", path: "/trailers", icon: Film, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
