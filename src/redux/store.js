import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/HeaderSlice";
import userReducer from "./slices/UserSlice";

export const store = configureStore({
    reducer:{
        header: headerReducer,
        user: userReducer
    }
});