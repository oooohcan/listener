import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import SongRecComment from "./SongRecComment";
import SongRecDetail from "./SongRecDetail";
import { getRecommendSong } from "../api";
import styles from "../css/swiperVertical.module.css";
import "swiper/css";
import "swiper/css/pagination";

export default function SongRecommend() {
  const [recSong, setRecSong] = useState([]);

  useEffect(() => {
    async function fetchRecommendSong() {
      let result = await getRecommendSong();
      setRecSong(result.data.result);
    }
    fetchRecommendSong();
  }, []);
  return (
    <div className="w-full h-96">
      <div className="text-xl font-bold ml-5 h-10">新歌发行</div>
      <Swiper
        direction={"vertical"}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay
        mousewheel={true}
        pagination
        className={styles.Swiper}
      >
        {recSong?.map((recSong, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="flex justify-center items-center">
                <div className="w-1/3 h-52">
                  <SongRecDetail song={recSong.song} />
                </div>
                <div className="w-1/3 h-auto">
                  <SongRecComment id={recSong.id} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
