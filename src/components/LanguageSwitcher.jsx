import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="flex items-center gap-4">
      <img
        src="https://flagcdn.com/40x30/vn.png"
        alt="Tiếng Việt"
        className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => handleLanguageChange('vi')}
        title="Tiếng Việt"
      />
      <img
        src="https://flagcdn.com/40x30/gb-eng.png"
        alt="English"
        className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => handleLanguageChange('en')}
        title="English"
      />
      <img
        src="https://flagcdn.com/40x30/cn.png"
        alt="中文"
        className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => handleLanguageChange('zh')}
        title="中文"
      />
    </div>
  );
}
