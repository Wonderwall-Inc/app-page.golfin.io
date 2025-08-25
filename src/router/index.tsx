import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import App from '@/App';
import i18n from '@/i18n';

const PathRedirector: React.FC = () => {
    const location = useLocation();
    const lang = /ja/i.test(navigator.language) ? 'ja' : 'en';
    const newPath = `/${lang}${location.pathname}${location.search}${location.hash}`;
    return <Navigate to={newPath} replace />;
};

const AppWithLang: React.FC<{ lang: 'ja' | 'en' }> = ({ lang }) => {
    React.useEffect(() => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
    }, [lang]);
    return <App />;
};

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/ja/*" element={<AppWithLang lang="ja" />} />
            <Route path="/en/*" element={<AppWithLang lang="en" />} />
            <Route path="*" element={<PathRedirector />} />
        </Routes>
    </BrowserRouter>
);

export default Router; 