import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    back: false,
    navigation: null
}

const storeHeader = createSlice({
    name: 'STORE-HEADER',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            let { navigation, back } = action.payload;

            return {
                ...state,
                navigation,
                back
            };
        }
    }
})

export const { setHeader } = storeHeader.actions;

export default storeHeader.reducer;