import { createSlice } from "@reduxjs/toolkit";
export const playSlice = createSlice({
  name: "play",
  initialState: {
    paused: true,
    show: false,
    currentTime: 0,
  },
  reducers: {
    updatePaused: (state, action) => {
      state.paused = action.payload;
    },
    updateShow: (state, action) => {
      state.show = action.payload;
    },
    updateCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});
export const { updatePaused, updateShow, updateCurrentTime } =
  playSlice.actions;
export const selectPaused = (state) => state.play.paused;
export const selectShow = (state) => state.play.show;
export const selectCurrentTime = (state) => state.play.currentTime;

export default playSlice.reducer;
