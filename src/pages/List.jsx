import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ListDetail from "../components/ListDetail";
import ListHeader from "../components/ListHeader";
import { getListDetail } from "../api";
import { selectListId } from "../features/listIdSlice";

export default function List() {
  const listId = useSelector(selectListId);
  const [songs, setSongs] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await getListDetail(listId);
      setSongs(result.data.songs);
      // console.log("每个歌单的详情", result);
    }
    fetchData();
  }, [listId]);
  return (
    <div className="bg-white w-11/12 mx-auto">
      <ListHeader />
      <ListDetail songs={songs} />
    </div>
  );
}
