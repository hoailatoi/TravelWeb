import { FaFacebook, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-400 pb-6 mb-6">
          <div className="text-lg font-semibold mb-4 md:mb-0">{t("nav.title1")}</div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com/TranHoai0125" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://tiktok.com/@visa.tq.jingjing.l" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTiktok /></a>
            <a href="https://instagram.com/TranHoai0125" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://youtube.com/@TranHoai-0125" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <p>© 2025 TravelWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
