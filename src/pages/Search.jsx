import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ListDetail from "../components/ListDetail";
import { getSearch } from "../api";

export default function Search() {
  const [songs, setSongs] = useState([]);
  //获取url中参数对象，第二个参数可以set修改url
  const [barSearch] = useSearchParams();
  const search = async (keywords) => {
    const result = await getSearch(keywords);
    setSongs(result.data.result.songs);
    // console.log("搜索结果", result);
  };
  useEffect(() => {
    search(barSearch.get("keywords"));
  }, [barSearch]);
  return (
    <div className="bg-white w-11/12 mx-auto">
      <div className="text-xl font-semibold h-10">{`搜索"${barSearch.get(
        "keywords"
      )}"`}</div>
      <ListDetail songs={songs} />
    </div>
  );
}
