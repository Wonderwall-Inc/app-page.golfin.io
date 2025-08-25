import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppleAppStoreButton } from '@/features/share/components/AppleAppStoreButton';
import { GooglePlayButton } from '@/features/share/components/GooglePlayButton';
import "../assets/styles/footer.css"
import { SafeHtml } from '@/features/share';

const DownloadGamePageFooter: React.FC = () => {
  const { t, ready } = useTranslation('gpsDownloadGamePage');

  if (!ready) {
    return null;
  }

  return (
    <footer>
      <div>
        <div>
          <div className="footer-img-container">
            <div className="footer-overlay-text">
              <SafeHtml html={t('footer.heading')} />
              <div className="footer-app-store-icons">
                <AppleAppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>
          <div className="footer-copywrite-container">
            <p>
              Apple logo and App Store are trademarks of Apple Inc.,
            </p>
            <p>
              registered in the U.S. and other countries.
            </p>
            <p>
              Google Play and the Google Play logo are
            </p>
            <p>
              trademarks of Google LLC.
            </p>
            <p>
              © <span>{`${new Date().getFullYear()}`}</span> GOLFIN. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DownloadGamePageFooter;
