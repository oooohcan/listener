import React from "react";
import { useDispatch } from "react-redux";
import { getMusic } from "../api";
import { updateSongs, updateCurrentIndex } from "../features/songsSlice";

export default function SongRecPlay(props) {
  const dispatch = useDispatch();
  const handleClick = async (id) => {
    let song = (await getMusic(id)).data.songs[0];
    // console.log("播放单曲", song);
    dispatch(updateSongs([song]));
    dispatch(updateCurrentIndex(0));
  };
  return (
    <div
      className="bg-indigo-500 px-6 py-2 flex text-white text-center font-medium rounded-full cursor-pointer hover:bg-indigo-600"
      onClick={() => handleClick(props.id)}
    >
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-play"></use>
      </svg>
      <span className="leading-6">播放</span>
    </div>
  );
}
