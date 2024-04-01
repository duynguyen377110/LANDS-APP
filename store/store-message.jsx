import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: ''
}

const storeMessage = createSlice({
    name: 'STORE-MESSAGE',
    initialState,
    reducers: {
        open:(state, action) => {
            let { message } = action.payload;

            console.log(message);

            return {
                ...state,
                message
            }
        },
        close: (state) => {
            return {
                ...state,
                message: ''
            }
        }
    }
})

export const { open, close } = storeMessage.actions;
export default storeMessage.reducer;