import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: false,
  },
  reducers: {
    handleCart: (prevState) => {
      prevState.value = !prevState.value;
      console.log(prevState.value);
    },
    closeCart: (prevState) => {
      prevState.value = false;
    },
  },
});

export const { handleCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
