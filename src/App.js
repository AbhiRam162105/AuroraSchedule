import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import events from './events/events';
import Container from './container/container';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function App() {
  return (
    <div className="container">
      <div className='logo'></div>
      <h1 className="heading">Schedule</h1>

       <div>
        <h1 className='day'>Day 1 :</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {events.map((event, index) => (
                          <SwiperSlide key={index}>
                              <Container
                                  title={event.Title}
                                  Image={event.Image}
                                  content={event.Content}
                                  date={event.Date}
                                  description={event.Description}
                                  time={event.Time}
                                  day={event.Day}
                                  className="card"
                              />
                          </SwiperSlide>
                      ))}

          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>      

      <div>
        <h1 className='day'>Day 2 :</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {events.map((event, index) => (
                          <SwiperSlide key={index}>
                              <Container
                                  title={event.Title}
                                  Image={event.Image}
                                  content={event.Content}
                                  date={event.Date}
                                  description={event.Description}
                                  time={event.Time}
                                  day={event.Day}
                                  className="card"
                              />
                          </SwiperSlide>
                      ))}

          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div>
        <h1 className='day'>Day 3 :</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {events.map((event, index) => (
                          <SwiperSlide key={index}>
                              <Container
                                  title={event.Title}
                                  Image={event.Image}
                                  content={event.Content}
                                  date={event.Date}
                                  description={event.Description}
                                  time={event.Time}
                                  day={event.Day}
                                  className="card"
                              />
                          </SwiperSlide>
                      ))}

          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div> 
    </div>
  );
}

export default App;