import { createSlice } from "@reduxjs/toolkit";
export const listIdSlice = createSlice({
  name: "listId",
  initialState: {
    value: 2112365697,
  },
  reducers: {
    updateListId: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateListId } = listIdSlice.actions;
export const selectListId = (state) => state.listId.value;
export default listIdSlice.reducer;
