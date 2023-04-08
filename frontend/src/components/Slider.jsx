import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

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
          <Link to={"/eventdetail/2680"}>
            <img
              src="https://www.ticket.ma/upload/sliders/667/original_994x485px.png" //jazz
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2732"}>
          <img
            src="https://www.ticket.ma/upload/sliders/698/original_slider.png" //ninho
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2703"}>
            <img
              src="https://www.ticket.ma/upload/sliders/677/original_Slider_festival.png" // sama oum
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2713"}>
          <img
            src="https://www.ticket.ma/upload/sliders/710/original_WhatsApp_Image_2023_03_31_at_10_17_48.jpeg" // otium
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2729"}>
          <img
            src="https://www.ticket.ma/upload/sliders/694/original_Slider.jpg" //agafay
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2722"}>
          <img
            src="https://www.ticket.ma/upload/sliders/697/original_BERRADA_SLIDERR.jpeg" //berrada
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="w-full" to={"/eventdetail/2608"}>
          <img
            src="https://www.ticket.ma/upload/sliders/618/original_Tickets_ma_SLIDER_MOGACAPA23_Blind.png" // moga
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2733"}>
          <img
            src="https://www.ticket.ma/upload/sliders/700/original_SLIDER_TASUTA_Plan_de_travail_1.png" // tasuta
            alt=""
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/eventdetail/2707"}>
          <img
            src="https://www.ticket.ma/upload/sliders/695/original_oasis_slider.png" // oasis
            alt=""
          />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
