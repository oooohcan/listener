import React, { useRef, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSongs,
  selectSongsCurrentIndex,
  updateCurrentIndex,
} from "../features/songsSlice";
import {
  selectCurrentTime,
  selectPaused,
  selectShow,
  updateCurrentTime,
  updatePaused,
  updateShow,
} from "../features/playSlice";
import PlayHeader from "./PlayHeader";
import PlayMiddle from "./PlayMiddle";
import PlayTail from "./PlayTail";
import PlayDetail from "./PlayDetail";

export default function PlayController() {
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);
  const currentIndex = useSelector(selectSongsCurrentIndex);
  const paused = useSelector(selectPaused);
  const show = useSelector(selectShow);
  const currentTime = useSelector(selectCurrentTime);
  const audioEl = useRef(null);

  const goMusic = (num) => {
    let index = currentIndex;
    if (index + num < 0) index = songs.length - 1;
    else if (index + num >= songs.length) index = 0;
    else index += num;
    dispatch(updateCurrentIndex(index));
  };
  const handlePlay = () => {
    if (audioEl.current.paused) {
      audioEl.current.play();
      dispatch(updatePaused(false));
    } else {
      audioEl.current.pause();
      dispatch(updatePaused(true));
    }
    // console.log("audio信息", [audioEl.current]);
  };
  const handleShow = (show) => {
    dispatch(updateShow(show));
  };

  useEffect(() => {
    dispatch(updatePaused(audioEl.current.paused));
  }, [currentIndex]);

  useEffect(() => {
    let lyricTimer = setInterval(() => {
      dispatch(updateCurrentTime(audioEl.current.currentTime));
      // console.log("播放时间", currentTime);
    }, 1000);
    return () => clearInterval(lyricTimer);
  });

  useEffect(() => {
    if (audioEl.current.currentTime === audioEl.current.duration) {
      goMusic(1);
      audioEl.current.play();
    }
  });

  return (
    <Fragment>
      {songs != null && (
        <div className="flex justify-between">
          <audio
            ref={audioEl}
            src={`https://music.163.com/song/media/outer/url?id=${songs[currentIndex].id}.mp3`}
          />
          {show && (
            <PlayDetail
              paused={paused}
              song={songs[currentIndex]}
              goMusic={goMusic}
              handlePlay={handlePlay}
              handleShow={handleShow}
              currentTime={currentTime}
            />
          )}
          <PlayHeader song={songs[currentIndex]} handleShow={handleShow} />
          <PlayMiddle
            paused={paused}
            song={songs[currentIndex]}
            goMusic={goMusic}
            handlePlay={handlePlay}
          />
          <PlayTail />
        </div>
      )}
    </Fragment>
  );
}
