import React from "react";
import { useDispatch } from "react-redux";
import { updateListId } from "../features/listIdSlice";
import { useNavigate } from "react-router-dom";

export default function ListOne(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-36 h-46 m-2">
      <img
        src={props.list.picUrl}
        alt="listPic"
        className="h-36 w-36 rounded-lg hover:imageHover"
        onClick={() => {
          dispatch(updateListId(props.list.id));
          navigate("list");
        }}
      />
      <span className="text-xs">{props.list.name}</span>
    </div>
  );
}
