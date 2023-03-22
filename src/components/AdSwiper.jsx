import React, { useState, useEffect } from "react";
import { EffectCreative, Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBanners } from "../api";
import { nanoid } from "nanoid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function AdSwiper() {
  const [banners, setBanners] = useState();
  useEffect(() => {
    async function getApiBanners() {
      setBanners((await getBanners()).data.banners);
      // console.log((await getBanners()).data.banners);
    }
    getApiBanners();
  }, []);
  return (
    <div className="mx-auto w-3/5 h-auto">
      <Swiper
        loop={true}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [0, 180, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [0, -180, 0],
          },
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
      >
        {banners?.map((banner) => {
          return (
            <SwiperSlide key={nanoid()}>
              <a href={banner.url}>
                <img
                  src={banner.imageUrl}
                  alt="adImage"
                  className="rounded-lg"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
