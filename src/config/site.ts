export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  website?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Cyberpunk Edgerunners 2 Wiki",
  shortName: "Cyberpunk Edgerunners 2",
  logoText: "CE",
  tagline: "Characters, Episodes, Story & Night City Lore",
  description: "Fan-made Cyberpunk: Edgerunners 2 wiki covering the 10-episode Netflix anime — characters, episodes, story, release date, trailers and Night City lore.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cyberpunkedgerunners2.top",
  supportEmail: "support@cyberpunkedgerunners2.top",
  gameUrl: "https://www.netflix.com/title/81744226",
  website: "https://www.cyberpunk.net/en/edgerunners2",
  heroVideoId: "mV7451mcw-E", // Cyberpunk: Edgerunners 2 official teaser trailer
  social: {
    discord: "https://discord.gg/cyberpunkgame",
    youtube: "https://www.youtube.com/@CyberpunkGame",
    twitter: "https://x.com/cyberpunkgame",
  },
  locales: ["en", "ja", "es", "de"],
  defaultLocale: "en",
};
