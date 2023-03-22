import React from "react";

import { nanoid } from "nanoid";
import Music from "./Music";
import { useDispatch } from "react-redux";
import { updateSongs } from "../features/songsSlice";

export default function ListDetail(props) {
  const songs = props.songs;
  const dispatch = useDispatch();
  const update = () => {
    dispatch(updateSongs(songs));
  };
  return (
    <div className="relative">
      <div className="flex text-gray-500 text-xs my-2">
        <span className="w-2/5">歌曲</span>
        <span className="w-1/3">歌手</span>
        <span className="w-1/6">专辑</span>
        <div className="w-10 absolute right-3">时长</div>
      </div>
      {songs != null && (
        <ul onClick={() => update()}>
          {songs.map((song, index) => {
            // console.log("我是歌曲的数据:", song);
            return <Music song={song} currentIndex={index} key={nanoid()} />;
          })}
        </ul>
      )}
    </div>
  );
}
