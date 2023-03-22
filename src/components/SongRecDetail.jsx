import React from "react";
import { nanoid } from "nanoid";
import SongRecPlay from "./SongRecPlay";

export default function SongRecDetail(props) {
  const song = props.song;
  const getDate = (time) => {
    let date = new Date(time); // 参数需要毫秒数，所以这里将秒数乘于 1000
    let Y = date.getFullYear() + "-";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    let D = date.getDate() + " ";
    return Y + M + D;
  };
  return (
    <div className="w-full h-44 my-3 flex relative">
      <img
        src={song.album.picUrl}
        alt="歌曲封面"
        className="w-44 h-44 rounded-lg"
      />
      <div className="ml-7 w-80 break-all overflow-auto hideScroll">
        <p className="h-10 text-3xl font-black break-all overflow-auto">
          {song.name}
        </p>
        <div className="my-2">
          歌手：
          {song.artists.map((author) => {
            return (
              <span key={nanoid()} className="mx-1 font-medium">
                {author.name}
              </span>
            );
          })}
        </div>
        <p className="w-full h-12  text-gray-400">
          发行日期：{getDate(song.album.publishTime)}
        </p>
        <div className="absolute bottom-0">
          <SongRecPlay id={song.id} />
        </div>
      </div>
    </div>
  );
}
