import '../assets/styles/header.css'
import GolfinGameLogo from '../assets/images/golfin_game_logo.png'
import HeaderImg from '../assets/images/header_image.png'

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppleAppStoreButton } from '@/features/share/components/AppleAppStoreButton';
import { GooglePlayButton } from '@/features/share/components/GooglePlayButton';

const Header: React.FC = () => {
  const { t, ready } = useTranslation('gpsDownloadGamePage');

  if (!ready) {
    return null;
  }

  return (
    <>
      <section className='header-container'>
        <div className="base">
          <img src={HeaderImg} alt="" />
        </div>

        <div className="overlay">

          {/* Header Text */}
          <div className="header-text-section">
            <div className="header-text-image">
              <img src={GolfinGameLogo} alt="Golfin Game Logo" />
            </div>
            <div className="header-text">
              <div>
                <strong>
                  {t('hero.hero_text_line_1')}
                </strong>
              </div>
              <div>
                <strong>
                  {t('hero.hero_text_line_2')}
                </strong>
              </div>
              <div>
                <strong>
                  {t('hero.hero_text_line_3')}
                </strong>
              </div>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className='app-store-section'>
            <div className="app-store-box" />
            <div className="app-store-overlay">
              <div className="app-store-text">
                <p>{t('hero.download_button_text')}</p>
              </div>
              <div className="app-store-icons">
                <AppleAppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
