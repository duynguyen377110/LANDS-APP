import { configureStore } from "@reduxjs/toolkit";
import storeLoader from "./store-loader";
import storeHeader from "./store-header";

const store = configureStore({
    reducer: {
        loader: storeLoader,
        header: storeHeader,
    }
})

export default store;
