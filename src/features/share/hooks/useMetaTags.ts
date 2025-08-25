import { useEffect } from 'react';

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const useMetaTags = (config: MetaTagsConfig) => {
  useEffect(() => {
    // タイトルの設定
    if (config.title) {
      document.title = config.title;
    }

    // メタタグの設定
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 基本メタタグ
    if (config.description) {
      updateMetaTag('description', config.description);
    }
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Open Graph メタタグ
    if (config.ogTitle) {
      updatePropertyMetaTag('og:title', config.ogTitle);
    }
    if (config.ogDescription) {
      updatePropertyMetaTag('og:description', config.ogDescription);
    }
    if (config.ogImage) {
      updatePropertyMetaTag('og:image', config.ogImage);
    }

    // Twitter メタタグ
    if (config.twitterTitle) {
      updatePropertyMetaTag('twitter:title', config.twitterTitle);
    }
    if (config.twitterDescription) {
      updatePropertyMetaTag('twitter:description', config.twitterDescription);
    }
    if (config.twitterImage) {
      updatePropertyMetaTag('twitter:image', config.twitterImage);
    }
  }, [config]);
}; 