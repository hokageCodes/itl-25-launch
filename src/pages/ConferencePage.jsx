import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import AboutSection from '../components/about-us/About';
import PartnersSection from '../components/partners/PartnersSection';
import Schedule from '../components/schedule-section/Schedule';
import hero1 from '/assets/hero1.png';
import hero2 from '/assets/hero2.png';
import hero3 from '/assets/hero3.png';

export default function ConferencePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pt-24">
          {/* Swiper carousel setup */}
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide-container">
                <img className="swiper-slide-image" src={hero1} alt="Slide 1"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-container">
                <img className="swiper-slide-image" src={hero2} alt="Slide 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-container">
                <img className="swiper-slide-image" src={hero3} alt="Slide 3" />
              </div>
            </SwiperSlide>
          </Swiper>
          <main className="mt-12">
            <AboutSection />
            <PartnersSection />
            <Schedule />
          </main>
        </div>
      )}
    </>
  );
}
