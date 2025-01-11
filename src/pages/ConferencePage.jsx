import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import PartnersSection from '../components/partners/PartnersSection';
import hero1 from '/assets/hero1.webp';
import hero2 from '/assets/conn.png';
import hero3 from '/assets/hero3.webp';
// import AgendaTable from '../components/Agenda';
import ScheduleTimeline from '../components/schedule-section/Schedule';
import KennysSection from '../components/Kenny/KennysSection';

export default function ConferencePage() {

  return (
    <>
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
            <KennysSection />
            <PartnersSection />
            <ScheduleTimeline />
          </main>
        </div>
    </>
  );
}
