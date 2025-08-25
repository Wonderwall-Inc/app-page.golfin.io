import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

interface LanguageSwitcherProps {
  variant?: 'default' | 'footer';
}

const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' }
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'default' }) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        const currentPath = location.pathname;
        const newPath = currentPath.replace(/^\/(en|ja)/, `/${newLang}`);
        
        i18n.changeLanguage(newLang);
        navigate(newPath);
    };

    const isFooter = variant === 'footer';

    return (
        <div className="language-switcher" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className={`bg-transparent text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 cursor-pointer ${
                    isFooter ? 'text-sm' : 'text-base'
                }`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    padding: isFooter ? '8px 40px 8px 12px' : '12px 48px 12px 16px',
                    appearance: 'none',
                    fontSize: isFooter ? '14px' : '18px',
                    fontWeight: '500',
                    minHeight: isFooter ? '40px' : '48px',
                    maxWidth: isFooter ? '100px' : '120px',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {availableLanguages.map((lang) => (
                    <option
                        key={lang.code}
                        value={lang.code}
                        style={{
                            fontSize: isFooter ? '14px' : '18px',
                            fontWeight: '500',
                            backgroundColor: '#1f2937',
                            color: 'white',
                            padding: '8px'
                        }}
                    >
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher; 