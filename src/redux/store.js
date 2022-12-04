import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
