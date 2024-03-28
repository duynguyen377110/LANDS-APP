import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentItem: ''
}

const storeListScrollHorizontal = createSlice({
    name: 'STORE-LIST-SCROLL-HORIZONTAL',
    initialState,
    reducers: {
        setCurrentItem: (state, action) => {
            let { key } = action.payload;
            return {
                ...state,
                currentItem: key
            }
        }
    }
})

export const { setCurrentItem } = storeListScrollHorizontal.actions;
export default storeListScrollHorizontal.reducer;