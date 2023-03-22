import React from "react";
import { useNavigate } from "react-router-dom";
import MainBarSearch from "./MainBarSearch";

export default function MainBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center w-72 h-10">
      <svg className="icon" aria-hidden="true" onClick={() => navigate(-1)}>
        <use xlinkHref="#icon-xiangzuo1"></use>
      </svg>
      <svg className="icon" aria-hidden="true" onClick={() => navigate(1)}>
        <use xlinkHref="#icon-xiangyou1"></use>
      </svg>
      <MainBarSearch />
    </div>
  );
}
