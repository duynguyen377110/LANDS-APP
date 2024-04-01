import { configureStore } from "@reduxjs/toolkit";
import storeLoader from "./store-loader";
import storeHeader from "./store-header";
import storeMessage from "./store-message";
import storeAuth from "./store-auth";
import storeListScrollHorizontal from "./store-list-scroll-horizontal";

const store = configureStore({
    reducer: {
        auth: storeAuth,
        loader: storeLoader,
        header: storeHeader,
        message: storeMessage,
        listScrollHorizontal: storeListScrollHorizontal
    }
})

export default store;
