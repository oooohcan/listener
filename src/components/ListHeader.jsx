import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";

import { getListHeader } from "../api";
import { selectListId } from "../features/listIdSlice";

export default function ListHeader() {
  const listId = useSelector(selectListId);
  const [listDetail, setListDetail] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getListHeader(listId);
      setListDetail(result.data.playlist);
      // console.log(listDetail);
    }
    fetchData();
  }, [listId]);
  return (
    <div>
      {listDetail && (
        <div className="w-full h-44 my-3 flex relative">
          <img
            src={listDetail.coverImgUrl}
            alt="歌单封面"
            className="w-44 h-44 rounded-lg"
          />
          <div className="ml-7">
            <p className="h-10 text-3xl font-black break-all overflow-auto mb-0">
              {listDetail.name}
            </p>
            <div className="my-4">
              <Avatar src={listDetail.creator.avatarUrl} />
              <span className="mx-3 font-medium text-xs ">
                {listDetail.creator.nickname}
              </span>
              {listDetail.tags.map((tag, i) => {
                return (
                  <span key={i} className="text-xs text-gray-400 mx-1">
                    #{tag}
                  </span>
                );
              })}
            </div>
            <p className="w-full h-12 text-xs text-gray-400 break-all overflow-auto hideScroll">
              {listDetail.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
