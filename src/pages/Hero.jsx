import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import images from '../components/images';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation()
  const slides = [
    {
      id: 2,
      image: 'banner2',
      title: t('nav.title2'),
    },
    {
      id: 3,
      image: 'banner3',
      title: t('nav.title3'),
    },
    {
      id: 5,
      image: 'banner5',
      title: t('nav.title5'),
    },
    {
      id: 9,
      image: 'banner9',
      title: t('nav.title2'),
    },
    {
      id: 10,
      image: 'banner10',
      title: t('nav.title10'),
    },
    {
      id: 11,
      image: 'banner11',
      title: t('nav.title11'),
    },
    {
      id: 12,
      image: 'banner12',
      title: t('nav.title12'),
    },
  ];

   return (
    <div className="w-full h-[300px] overflow-hidden rounded-xl shadow-lg">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[300px]">
              <img
                src={images[slide.image]}
                alt={slide.title}
                className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold px-4 py-2 rounded">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;




