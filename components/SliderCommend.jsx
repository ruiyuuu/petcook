"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderCommend() {
  const data = [
    {
      img: "/commend-photo-1.png",
      name: "皮蛋&米血",
      age: "6",
      des: "每次聽到開冰箱聲音就會興奮的一直叫,所以想把他們趕出一個空間的話，拿出你們家的凍乾，就會跑出來了",
    },
    {
      img: "/commend-photo-1.png",
      name: "崽崽/璐娜/櫻桃",
      age: "1/0.4/0.2",
      des: "每一餐都要吃鴨肉和雞肉凍乾搭配才行",
    },
    {
      img: "/commend-photo-1.png",
      name: "伯朗",
      age: "3.5",
      des: "蛋黃凍乾跟羊奶凍乾味道超香🥺，包裝越出越可愛，毛孩真的超愛！",
    },
    {
      img: "/commend-photo-1.png",
      name: "Uni & money",
      age: "0.9",
      des: "大家極推鮭魚，但雙寶目前最愛的就是干貝了❤️",
    },
    {
      img: "/commend-photo-1.png",
      name: "憨吉",
      age: "0.6",
      des: "丁香魚凍乾，香脆而且有蛋，憨吉吃得很開心",
    },
    {
      img: "/commend-photo-1.png",
      name: "姆姆",
      age: "0.6",
      des: "我們家貓咪最喜歡吃派庫的主食罐，最喜歡的口味是鱷魚雞肉，可能是口感質地他很愛，市面上感覺也真的很少這種質地的主食罐",
    },
  ];
  // HTML輪播
  // const swiper = new Swiper(".swiper.commend", {
  //   spaceBetween: "30",
  //   slidesPerView: "1",
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   navigation: true,
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //   },
  // });
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="commend"
    >
      {data?.map((item) => (
        <SwiperSlide>
          <Card img={item.img} des={item.des} age={item.age} name={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function Card({ img, name, age, des }) {
  return (
    <div className="slide-card">
      <Image
        alt=""
        src={img}
        width={295}
        height={214}
        unoptimized
        priority
        className="slide-card__img"
      />
      <div className="slide-card__content">
        <div className="slide-card__content__title">
          {name} | {age} 歲
        </div>
        <div className="slide-card__content__des">{des}</div>
      </div>
    </div>
  );
}
