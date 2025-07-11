import LanguageSwitcher from "../components/LanguageSwitcher";
import Theme from "./Theme";
import { useTranslation } from "react-i18next";

export default function Header({isDarkMode, onToggleDark}) {
  const { t } = useTranslation();
  return (
    <header className="w-full px-4 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">Logo</div>    
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">{t("nav.home")}</a>
            <a href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">{t("nav.tour")}</a>
            <a href="./Contact" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">{t("nav.contact")}</a>
          </nav>
          <LanguageSwitcher/>
          <Theme isDark={isDarkMode} onToggle={onToggleDark}/>
        </div>
      </div>
    </header>
  );
}
