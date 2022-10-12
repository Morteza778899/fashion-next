import { setVisibility } from './action';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

const footerVisibilitySlice = createSlice({
    name: 'footerVisibility',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setVisibility.fulfilled, (state, action) => {
                state.value = action.payload
            })
    },
})
export default footerVisibilitySlice.reducer