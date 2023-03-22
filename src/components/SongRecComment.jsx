import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { getComment } from "../api";

import "swiper/css";
import "swiper/css/effect-cards";
import styles from "../css/swiperCards.module.css";

export default function SongRecComment(props) {
  const [comments, setComments] = useState([]);

  const fetchComment = async (id) => {
    let result = await getComment(id);
    // console.log("歌曲评论详情", result.data.hotComments);
    setComments(result.data.hotComments);
  };

  useEffect(() => {
    fetchComment(props.id);
  }, [props.id]);
  return (
    <div>
      <Swiper
        className={styles.Swiper}
        loop={true}
        modules={[EffectCards, Autoplay]}
        grabCursor={true}
        effect={"cards"}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
      >
        {comments?.map((comment) => {
          return (
            <SwiperSlide className={styles.SwiperSlide} key={nanoid()}>
              <div className="h-64 break-all overflow-auto hideScroll">
                {comment.content}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
