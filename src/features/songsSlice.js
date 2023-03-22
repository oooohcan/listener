import { createSlice } from "@reduxjs/toolkit";
export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    value: [
      {
        al: {
          id: 514761281,
          name: "白羊",
          picUrl:
            "http://p3.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg",
        },
        ar: [
          { id: 1197168, name: "徐秉龙" },
          { id: 12002248, name: "沈以诚" },
        ],
        dt: 168420,
        id: 514761281,
        mv: 0,
        name: "白羊",
        publishTime: 1508947200007,
        tns: ["我心永恒"],
      },
    ],
    currentIndex: 0,
  },
  reducers: {
    updateSongs: (state, action) => {
      state.value = [...action.payload];
    },
    updateCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});
export const { updateSongs, updateCurrentIndex } = songsSlice.actions;
export const selectSongs = (state) => state.songs.value;
export const selectSongsCurrentIndex = (state) => state.songs.currentIndex;
export default songsSlice.reducer;
