export const locales = ["en", "fi"] as const;
export type Locale = (typeof locales)[number];