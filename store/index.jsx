import { configureStore } from "@reduxjs/toolkit";
import storeLoader from "./store-loader";
import storeHeader from "./store-header";
import storeListScrollHorizontal from "./store-list-scroll-horizontal";

const store = configureStore({
    reducer: {
        loader: storeLoader,
        header: storeHeader,
        listScrollHorizontal: storeListScrollHorizontal
    }
})

export default store;
