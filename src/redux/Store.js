import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistReducer";

const store = configureStore({
   reducer:
   {
    wish: wishlistReducer
   }
})

export default store