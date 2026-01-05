import Language from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from './Vi.json';
import en from './En.json';
import zh from './Zh.json';

Language.use(initReactI18next).init({
  resources: {
    vi: { translation: vi },
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: localStorage.getItem('lang') || 'vi',
  fallbackLng: 'vi',
  interpolation: { escapeValue: false },
});

export default Language;
