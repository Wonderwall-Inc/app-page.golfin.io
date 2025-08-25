import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface TranslationResources {
  [lang: string]: {
    [namespace: string]: Record<string, unknown>;
  };
}

// 翻訳リソースを動的にインポート
const loadTranslations = async (): Promise<TranslationResources> => {
  const resources: TranslationResources = {
    ja: {},
    en: {}
  };

  try {
    const gpsDownloadGamePageJa = await import('@/features/gps/downloadGamePage/i18n/ja.json');
    const gpsDownloadGamePageEn = await import('@/features/gps/downloadGamePage/i18n/en.json');

    // リソースを構築
    resources.ja.gpsDownloadGamePage = (gpsDownloadGamePageJa as { default?: Record<string, unknown> }).default || gpsDownloadGamePageJa;
    resources.en.gpsDownloadGamePage = (gpsDownloadGamePageEn as { default?: Record<string, unknown> }).default || gpsDownloadGamePageEn;

  } catch (error) {
    console.error('Error loading translations:', error);
  }

  return resources;
};

// i18nの初期化
export const initializeI18n = async (): Promise<void> => {
  const resources = await loadTranslations();

  return new Promise((resolve) => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        ns: ['gpsDownloadGamePage'],
        interpolation: {
          escapeValue: false,
        },

        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
      }, () => {
        // 初期化完了をログ出力
        resolve();
      });
  });
};

// 初期化を開始
// initializeI18n(); // <-- ここをコメントアウトまたは削除

export default i18n; 