import { configureStore } from "@reduxjs/toolkit";
import storeLoader from "./store-loader";

const store = configureStore({
    reducer: {
        loader: storeLoader
    }
})

export default store;
