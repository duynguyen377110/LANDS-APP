import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    back: false,
    props: null
}

const storeHeader = createSlice({
    name: 'STORE-HEADER',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            let { props, back } = action.payload;

            return {
                ...state,
                props,
                back
            };
        }
    }
})

export const { setHeader } = storeHeader.actions;

export default storeHeader.reducer;