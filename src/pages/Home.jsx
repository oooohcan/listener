import React from "react";
import AdSwiper from "../components/AdSwiper";
import ListHot from "../components/ListHot";
import SongRecommend from "../components/SongRecommend";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center space-y-4 p-1">
      <AdSwiper></AdSwiper>
      <ListHot></ListHot>
      <SongRecommend></SongRecommend>
    </div>
  );
}
