import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Language toggle component.
 * Displays current language and toggles between Chinese and English.
 */
const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const currentLang = i18n.language;
  const isZh = currentLang === 'zh';

  const toggleLanguage = () => {
    const newLang = isZh ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    localStorage.setItem('plumYiLanguage', newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-switcher"
      title={t('language.switch')}
      aria-label={t('language.switch')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 10px',
        border: '1px solid rgba(139, 115, 85, 0.3)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'inherit',
        cursor: 'pointer',
        fontSize: '0.8rem',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        letterSpacing: '0.5px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(139, 115, 85, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(139, 115, 85, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(139, 115, 85, 0.3)';
      }}
    >
      <span style={{ opacity: isZh ? 1 : 0.5, fontWeight: isZh ? 700 : 400 }}>中</span>
      <span style={{ opacity: 0.4, fontSize: '0.65rem' }}>/</span>
      <span style={{ opacity: isZh ? 0.5 : 1, fontWeight: isZh ? 400 : 700 }}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
