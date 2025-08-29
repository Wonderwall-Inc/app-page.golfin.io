import { SafeHtml } from '@/features/share';
import '../assets/styles/about-golfin-game.css'
import GolfinGamePhones from '../assets/images/about_golfin_game/phones.png'
import ShotsBubble from "../assets/images/about_golfin_game/shots.png"
import ItemsBubble from "../assets/images/about_golfin_game/items.png"
import GolfGpsBubble from "../assets/images/about_golfin_game/golf-gps-hybrid.png"


import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyImage } from '@/features/share/components/LazyImage';

const AboutGolfinGame: React.FC = () => {
  const { t, ready } = useTranslation('gpsDownloadGamePage');

  if (!ready) {
    return null;
  }

  return (
    <>
      <div className="about-golfin-game-text">
        <h2>{t('about_golfin_game.header_text')}</h2>
        <SafeHtml html={t('about_golfin_game.header_p_text')} element="p" />
      </div>

      {/* PHONES */}
      <div className="about-golfin-game-phones-container">
        <LazyImage src={GolfinGamePhones} alt="Golfin Game Phones" />
        <img src={ShotsBubble} alt="" className="shots bubble" />
        <span className='box-one-text'>
          {t('about_golfin_game.phone_box_one')}
        </span>
        <img src={ItemsBubble} alt="" className="items bubble" />
        <span className='box-two-text'>
          {t('about_golfin_game.phone_box_two')}
        </span>
        <img src={GolfGpsBubble} alt="" className="golf-gps bubble" />
        <span className='box-three-text'>
          {t('about_golfin_game.phone_box_three')}
        </span>
      </div>

      <div className="about-golfin-game-overlay"></div>
      <section className='about-golfin-game-container'>
        {/* BOX ONE */}
        <div className="box box-one">
          <div className="box-heading">
            <p>{t('about_golfin_game.box_one.heading')}</p>
          </div>
          <div className="box-subheading">
            <strong>
              <SafeHtml html={t('about_golfin_game.box_one.subtext_heading')} />
            </strong>
            <SafeHtml
              html={t('about_golfin_game.box_one.subtext_p')}
              element="p"
              className='box-subtext'
            />
            <p><strong>{t('about_golfin_game.box_one.subtext_p_subheading')}</strong></p>
          </div>
        </div>

        {/* BOX TWO */}
        <div className="box box-two">
          <div className="box-heading">
            <p>{t('about_golfin_game.box_two.heading')}</p>
          </div>
          <div className="box-subheading">
            <strong>
              <SafeHtml html={t('about_golfin_game.box_two.subtext_heading')} />
            </strong>

            <SafeHtml
              html={t('about_golfin_game.box_two.subtext_p')}
              element="p"
              className='box-subtext'
            />
            <p className='box-subtext'><strong>{t('about_golfin_game.box_two.subtext_p_subheading')}</strong></p>
          </div>
        </div>

        {/* BOX THREE */}
        <div className="box box-three">
          <div className="box-heading">
            <p>{t('about_golfin_game.box_three.heading')}</p>
          </div>
          <div className="box-subheading">
            <strong>
              <SafeHtml html={t('about_golfin_game.box_three.subtext_heading')} />
            </strong>
            <SafeHtml html={t('about_golfin_game.box_three.subtext_p')} element='p'

              className='box-subtext'
            />
            <p className='box-subtext'><strong>{t('about_golfin_game.box_three.subtext_p_subheading')}</strong></p>
          </div>
        </div>

        {/* LEVEL UP YOUR GAME */}
        <div className="level-up-your-game-container">
          <div>
            <SafeHtml html={t('about_golfin_game.level_up_your_game.heading')} element='h3' />
            <SafeHtml html={t('about_golfin_game.level_up_your_game.subtext')} element='p' />
          </div>
        </div>
      </section>
      <div className="dont-let-your-points-sit">
        <p>{t('about_golfin_game.level_up_your_game.dont_let_your_points_sit')}</p>
      </div>
    </>
  );
};

export default AboutGolfinGame;
