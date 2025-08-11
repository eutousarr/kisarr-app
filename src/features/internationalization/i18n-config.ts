export const i18n = {
  defaultLocale: 'en-US',
  locales: ['en-US', 'fr-FR'],
} as const;
 
export type Locale = (typeof i18n)['locales'][number];