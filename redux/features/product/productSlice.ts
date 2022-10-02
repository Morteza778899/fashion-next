import { getProduct } from './action';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    value: [],
    error: {
        status : false,
        message : ''
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.fulfilled, (state, action) => {
                state.value = action.payload
                state.error.status = false
                state.error.message = ''
                state.loading = false
            })
            .addCase(getProduct.rejected, (state, action) => {
                // console.log(action.payload) // this is error res
                state.error.status = true
                state.error.message = 'ارتباط با سرور برقرار نشد'
                state.loading = false
            })
    },
})
export default productSlice.reducer