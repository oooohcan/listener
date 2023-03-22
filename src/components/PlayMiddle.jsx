import React, { Fragment } from "react";
export default function PlayMiddle(props) {
  const { paused, song, goMusic, handlePlay } = props;
  return (
    <Fragment>
      {song && (
        <div className="w-60 flex justify-center py-3">
          <svg className="icon" aria-hidden="true" onClick={() => goMusic(-1)}>
            <use xlinkHref="#icon-shangyishou"></use>
          </svg>
          <svg
            className="icon mx-4"
            aria-hidden="true"
            onClick={() => handlePlay()}
          >
            <use
              xlinkHref={paused ? "#icon-icon-bofang" : "#icon-zanting"}
            ></use>
          </svg>
          <svg className="icon" aria-hidden="true" onClick={() => goMusic(1)}>
            <use xlinkHref="#icon-xiayishou"></use>
          </svg>
        </div>
      )}
    </Fragment>
  );
}
