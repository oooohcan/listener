import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainBarSearch() {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const toSearch = () => {
    navigate(`search?keywords=${keywords}`);
    setKeywords("");
    // console.log("搜索框内容", keywords);
  };
  return (
    <div className="flex w-50 relative">
      <input
        value={keywords}
        placeholder="搜搜看~"
        type="text"
        className="w-52 h-8 pl-2 pr-8 bg-gray-200 text-xs rounded-full focus:outline-none"
        onChange={(e) => setKeywords(e.target.value)}
        onKeyUp={(e) => {
          // console.log("键盘事件",e);
          if (e.code === "Enter") toSearch();
        }}
      />
      <svg
        className="icon absolute right-1"
        aria-hidden="true"
        onClick={toSearch}
      >
        <use xlinkHref="#icon-sousuo"></use>
      </svg>
    </div>
  );
}
