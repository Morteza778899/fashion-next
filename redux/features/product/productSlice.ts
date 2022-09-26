import { getProduct } from './action';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    value: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false
                state.value = action.payload
            })
    },
})
export default productSlice.reducer