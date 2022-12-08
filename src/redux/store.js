import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import cartSlice from "./cartSlice";
import profileSlice from "./profileSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    cart: cartSlice,
    profile: profileSlice,
  },
});
