import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";

const store = configureStore({
    reducer:{
        booksReducer: booksReducer,
    },
});
export default store;