import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false
}

const storeLoadBanner = createSlice({
    name: 'STORE-LOAD-BANNER',
    initialState,
    reducers: {
        toggle: (state) => {
            return {
                ...state,
                status: !state.status
            }
        }
    }
})

export const { toggle } = storeLoadBanner.actions;
export default storeLoadBanner.reducer;