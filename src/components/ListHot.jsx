import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getListHot } from "../api";
import ListOne from "./ListOne";

export default function ListsHot() {
  const [ListHot, setListHot] = useState();
  useEffect(() => {
    async function getApiListHot() {
      let value = (await getListHot()).data.result;
      setListHot(value);
      // console.log("热门歌单数据", value);
    }
    getApiListHot();
  }, []);
  return (
    <div className="w-full h-auto">
      <div className="text-xl font-bold ml-5 h-10">热门歌单</div>
      <div className="flex flex-wrap w-full h-auto justify-around">
        {ListHot?.map((list) => {
          return <ListOne key={nanoid()} list={list}></ListOne>;
        })}
      </div>
    </div>
  );
}
