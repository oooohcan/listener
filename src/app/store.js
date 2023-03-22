import { configureStore } from "@reduxjs/toolkit";
import listIdReducer from "../features/listIdSlice";
import songsReducer from "../features/songsSlice";
import playReducer from "../features/playSlice";

export default configureStore({
  reducer: {
    listId: listIdReducer,
    songs: songsReducer,
    play: playReducer,
  },
});
