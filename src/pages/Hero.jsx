import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  const slides = [
    {
      id: 2,
      image: '/ImagesBanner/banner2.jpg',
      title: 'Trải nghiệm thiên nhiên kỳ thú!',
    },
    {
      id: 3,
      image: '/ImagesBanner/banner3.jpg',
      title: 'Khám phá tour mùa hè 2025!',
    },
    {
      id: 5,
      image: '/ImagesBanner/banner5.jpg',
      title: 'Trải nghiệm thiên nhiên kỳ thú!',
    },
    {
      id: 9,
      image: '/ImagesBanner/banner9.jpg',
      title: 'Khám phá tour mùa hè 2025!',
    },
    {
      id: 10,
      image: '/ImagesBanner/banner10.jpg',
      title: 'Trải nghiệm thiên nhiên kỳ thú!',
    },
    {
      id: 11,
      image: '/ImagesBanner/banner11.jpg',
      title: 'Khám phá tour mùa hè 2025!',
    },
    {
      id: 12,
      image: '/ImagesBanner/banner12.jpg',
      title: 'Trải nghiệm thiên nhiên kỳ thú!',
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
                src={slide.image}
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




