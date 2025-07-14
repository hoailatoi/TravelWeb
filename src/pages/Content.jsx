import { useTranslation } from "react-i18next";
import images from "../components/images";

const Content = () => {
  const { t } = useTranslation();
  const destinations = [
    {
      id: 8,
      name: t('nav.title8'),
      image: 'banner8',
      description: t('nav.description8'),
    },
    {
      id: 7,
      name: t("nav.title7"),
      image: 'banner7',
      description: t("nav.description7"),
    },
    {
      id: 4,
      name: t("nav.title4"),
      image: 'banner4',
      description: t("nav.description4"),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">
          {t("nav.titleContent1")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("nav.titleContent2")}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700"
            >
              <img src={images[place.image]} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold text-green-700 dark:text-green-400">{place.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="https://tiktok.com/@visa.tq.jingjing.l" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow transition">{t("nav.explore")}</a>
        </div>
      </div>
    </section>
  );
};

export default Content;
