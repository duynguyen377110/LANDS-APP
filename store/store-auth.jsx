import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    accessToken: '',
    refreshToken: ''
}

const storeAuth = createSlice({
    name: 'STORE-AUTH',
    initialState,
    reducers: {
        signin: (state, action) => {
            let { accessToke, refreshToken, address, email, phone, id } = action.payload;
            return {
                ...state,
                accessToke,
                refreshToken,
                address,
                email,
                phone,
                id
            }
        },
        signout: (state) => {
            return {
                id: '',
                fullName: '',
                email: '',
                phone: '',
                address: '',
                accessToken: '',
                refreshToken: ''
            }
        }
    }
})

export const { signin, signout } = storeAuth.actions;
export default storeAuth.reducer;