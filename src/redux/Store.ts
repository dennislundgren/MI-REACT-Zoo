import { configureStore } from "@reduxjs/toolkit";
import animalsSlice from "./features/animalsSlice";

export default configureStore({
  reducer: { animals: animalsSlice },
});
