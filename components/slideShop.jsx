"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SlideShop({ shops, reverseDirection }) {
  // const swiper = new Swiper(".swiper.marquee", {
  //   spaceBetween: 16,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   navigation: true,
  //   speed: 3000,
  // });
  return (
    <Swiper
      spaceBetween={16}
      centeredSlides={true}
      slidesPerView={"auto"}
      allowTouchMove={false}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={5000}
      className="marquee"
      dir={reverseDirection}
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
