import React from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { updateCurrentIndex } from "../features/songsSlice";

export default function Music(props) {
  const { song, currentIndex } = props;
  const dispatch = useDispatch();

  const playTime = (num) => {
    let m = Math.floor(num / 60000)
      .toString()
      .padStart(2, "0");
    let s = Math.floor((num - m * 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <li
      onClick={() => {
        dispatch(updateCurrentIndex(currentIndex));
        // console.log("歌曲信息", song);
      }}
    >
      <div className="w-full h-12 py-3 rounded flex  cursor-pointer hover:bg-gray-50 hover:text-blue-300">
        <div className="w-2/5 truncate font-normal">{song.name}</div>
        <div className="w-1/3 truncate">
          {song.ar.map((author) => {
            return (
              <span key={nanoid()} className="mr-2">
                {author.name}
              </span>
            );
          })}
        </div>
        <span className="w-1/6 truncate">{song.al.name}</span>
        <div className="w-10 absolute right-3">{playTime(song.dt)}</div>
      </div>
    </li>
  );
}
