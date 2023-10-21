import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/HeaderSlice";

export const store = configureStore({
    reducer:{
        header: headerReducer,
    }
});