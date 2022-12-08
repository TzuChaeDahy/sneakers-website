import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: false,
  },
  reducers: {
    handleProfile: (prevState) => {
      prevState.value = !prevState.value;
      console.log(prevState.value);
    },
    closeProfile: (prevState) => {
      prevState.value = false;
    },
  },
});

export const { handleProfile, closeProfile } = profileSlice.actions;

export default profileSlice.reducer;
