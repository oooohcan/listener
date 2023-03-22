import React, { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { getLyric } from "../api";

export default function PlayDetail(props) {
  const { paused, song, goMusic, handlePlay, handleShow, currentTime } = props;
  const [lyricArr, setLyricArr] = useState();

  const handleLyric = (lyric) => {
    let data = lyric.split(/\n/gis).map((item) => {
      let min = parseInt(item.slice(1, 3));
      let sec = parseInt(item.slice(4, 6));
      let mill = parseInt(item.slice(7, 9));
      let lyricOne =
        item[9] === "]"
          ? item.slice(10, item.length)
          : item.slice(11, item.length);
      return {
        min,
        sec,
        mill,
        lyricOne,
        time: mill + sec * 1000 + min * 60 * 1000,
        content: item,
        nextTime: null,
      };
    });
    data.forEach((item, index) => {
      if (index === data.length - 1) item.nextTime = data.length - 1;
      else item.nextTime = data[index + 1].time;
    });
    return data;
  };

  const playLyricNow = (currentTime, lyricOne) => {
    if (
      lyricOne.time < currentTime * 1000 &&
      currentTime * 1000 < lyricOne.nextTime
    )
      return true;
    else return false;
  };

  const lyricNow = useRef();
  const scrollDiv = useRef();

  // let lyricNow = document.getElementsByClassName("lyricActive");
  // let scroll = document.getElementById("scroll");

  useEffect(() => {
    async function fetchLyric() {
      let result = (await getLyric(song.id)).data.lrc.lyric;
      let lyricArr = handleLyric(result);
      setLyricArr(lyricArr);
    }
    fetchLyric();
  }, [song.id]);

  useEffect(() => {
    // console.log("歌词详情", lyricArr);
    // console.log("歌曲内容", song);
    // console.log("当前音频时间", currentTime);
    // lyricArr != null &&
    // lyricArr.map((item) => {
    //   console.log("判断时间位于区间", playLyricNow(currentTime * 1000, item));
    //   console.log("当前歌词时间", item.time);
    //   console.log("下句歌词时间", item.nextTime);
    // });
    // console.log("滚动条所在元素滚动高度", scroll.current.scrollTop);
    // console.log("当前歌词所在元素", lyricNow.current.offsetTop);

    if (lyricNow.current) {
      scrollDiv.current.scrollTop =
        lyricNow.current.offsetTop - (scrollDiv.current.offsetHeight * 7) / 9;
    }
  });

  return (
    <div
      className="bgPlayMusic"
      style={{ backgroundImage: `url(${song.al.picUrl})` }}
    >
      <div className="bgVague bgGrid">
        <div className="relative">
          <img
            src={song.al.picUrl}
            alt="歌曲封面"
            className="w-3/5 absolute left-44 top-36"
          />
        </div>
        <div className="relative">
          <svg
            className="icon absolute right-8 top-4"
            aria-hidden="true"
            onClick={() => handleShow(false)}
          >
            <use xlinkHref="#icon-guanbi"></use>
          </svg>
          <div className="absolute left-10 top-28 w-2/3 h-2/3 text-center">
            <p className="text-2xl text-white">{song.name}</p>
            <p className="text-sm text-gray-500 ">
              歌手：
              {song.ar.map((author) => {
                return <span key={nanoid()}>{author.name}</span>;
              })}
              <br />
              专辑：{song.al.name}
            </p>
            <div
              className="text-lg text-white overflow-scroll h-2/3 scrollSmooth transition-all"
              ref={scrollDiv}
            >
              {lyricArr != null &&
                lyricArr.map((item) => {
                  return (
                    <p
                      key={nanoid()}
                      className={`lyricOrigin ${
                        playLyricNow(currentTime, item) ? "lyricActive" : ""
                      }`}
                      ref={playLyricNow(currentTime, item) ? lyricNow : null}
                    >
                      {item.lyricOne}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center pt-8 gap-3">
          <svg className="icon" aria-hidden="true" onClick={() => goMusic(-1)}>
            <use xlinkHref="#icon-shangyishou1"></use>
          </svg>
          <svg className="icon" aria-hidden="true" onClick={() => handlePlay()}>
            <use xlinkHref={paused ? "#icon-playCircle" : "#icon-ai06"}></use>
          </svg>
          <svg className="icon" aria-hidden="true" onClick={() => goMusic(1)}>
            <use xlinkHref="#icon-xiayishou1"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
