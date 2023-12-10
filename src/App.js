import React from 'react';
import Container from './Components/container.js' ;
import "./App.css"
import events from './events/events';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination ,Navigation} from 'swiper/modules';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Aurora Event Schedule</h1>
            </header>

            <div className="container11">
                <h1 className="heading">Day 1</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 1,
                        stretch: 1,
                        depth: 300,
                        modifier: 3.5,
                    }}
                    pagination={{el: '.swiper-pagination', clickable: true}}
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
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

            <div className="container11">
                <h1 className="heading">Day 2</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 1,
                        stretch: 1,
                        depth: 300,
                        modifier: 3.5,
                    }}
                    pagination={{el: '.swiper-pagination', clickable: true}}
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
                                content={event.Content}
                                date={event.Date}
                                description={event.Description}
                                time={event.Time}
                                day={event.Day}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
            <div className="container11">
                <h1 className="heading">Day 3</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 1,
                        stretch: 1,
                        depth: 300,
                        modifier: 3.5,
                    }}
                    pagination={{el: '.swiper-pagination', clickable: true}}
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
                                content={event.Content}
                                date={event.Date}
                                description={event.Description}
                                time={event.Time}
                                day={event.Day}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

        </div>
    );
}

export default App;