import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import i18n from './i18n';
import GPSDownloadGamePage from './pages/gps/DownloadGamePage';
import HomePage from './pages/HomePage';
import './index.css'

const App: React.FC = () => {
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) document.documentElement.classList.add('safari');

    const checkI18nReady = () => {
      if (i18n.isInitialized) {
        setIsI18nReady(true);
      } else {
        setTimeout(checkI18nReady, 100);
      }
    };

    checkI18nReady();
  }, []);

  if (!isI18nReady) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Initializing language system...</div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gps/download-game" element={<GPSDownloadGamePage />} />
      </Routes>
    </>
  )
}

export default App;
