"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SlideShop({ shops }) {
  return (
    <Swiper
      spaceBetween={16}
      centeredSlides={true}
      slidesPerView={"auto"}
      allowTouchMove={false}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      speed={3000}
      className="marquee"
    >
      {shops?.map((item) => (
        <SwiperSlide>
          <div className="shop" key={item}>
            {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
