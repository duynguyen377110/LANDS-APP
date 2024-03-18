import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoader: false
}

const storeLoader = createSlice({
    name: 'STORE-LOADER',
    initialState: initialState,
    reducers: {
        open: (state) => {
            return {
                ...state,
                isLoader: true
            };
        },
        close: (state) => {
            return {
                ...state,
                isLoader: false
            };
        }
    }
})

export const { open, close } = storeLoader.actions;
export default storeLoader.reducer;