import React from "react";
import { nanoid } from "nanoid";

export default function PlayHeader(props) {
  const { song, handleShow } = props;
  return (
    <div className="w-60 h-10 ml-2">
      {song && (
        <div className="flex">
          <img
            src={song.al.picUrl}
            alt="歌曲封面"
            className="w-10 h-10 rounded hover:imageHover"
            onClick={() => handleShow(true)}
          />
          <div className="truncate mt-2">
            <span className="m-1">{song.name}</span>
            <span>-</span>
            {song.ar.map((author) => {
              return (
                <span key={nanoid()} className="ml-1 text-xs text-gray-400">
                  {author.name}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
