
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DownloadGamePageFooter from '@/features/gps/downloadGamePage/components/Footer';
import AboutGolfinGame from '@/features/gps/downloadGamePage/components/AboutGolfinGame';
import Header from '@/features/gps/downloadGamePage/components/Header';

const GPSDownloadGamePage: React.FC = () => {
    const { t, ready } = useTranslation('gpsDownloadGame');

    // メタタグの設定
    useEffect(() => {
        if (ready) {
            document.title = t('meta.title');

            // メタタグの更新
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

            updateMetaTag('description', t('meta.description'));
            updateMetaTag('keywords', t('meta.keywords'));
            updatePropertyMetaTag('og:title', t('meta.title'));
            updatePropertyMetaTag('og:description', t('meta.description'));
            updatePropertyMetaTag('twitter:title', t('meta.title'));
            updatePropertyMetaTag('twitter:description', t('meta.description'));
        }
    }, [ready, t]);

    return (
        <div style={{ maxWidth: '452px', margin: '0 auto' }}>
            <Header />
            <AboutGolfinGame />
            <DownloadGamePageFooter />
        </div >
    );
};

export default GPSDownloadGamePage;
