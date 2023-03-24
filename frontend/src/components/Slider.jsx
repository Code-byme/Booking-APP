import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="lg:mx-[20%] mt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/667/original_994x485px.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/698/original_slider.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/677/original_Slider_festival.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/699/original_otium_sliderrrrr.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/694/original_Slider.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/697/original_BERRADA_SLIDERR.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/618/original_Tickets_ma_SLIDER_MOGACAPA23_Blind.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/700/original_SLIDER_TASUTA_Plan_de_travail_1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ticket.ma/upload/sliders/695/original_oasis_slider.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
