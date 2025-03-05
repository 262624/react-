import i18n from 'i18next';

import enTranslation from './en/translation.json';
import koTranslation from './ko/translation.json';
// 修改
import zhTranslation from "./zh/translation.json";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.init({
  resources: {
    ko: { translation: koTranslation },
    en: { translation: enTranslation },
    // 修改
    zh: { translation: zhTranslation }
  },
  defaultNS: 'translation',
  fallbackLng: 'en',
  debug: process.env.RUN_MODE === 'development',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
