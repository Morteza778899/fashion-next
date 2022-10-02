import { getSingleProduct } from './action';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    error: {
        status : false,
    }
}

const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.error.status = false
                state.value = action.payload
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.error.status = true
            })
    },
})
export default singleProductSlice.reducer