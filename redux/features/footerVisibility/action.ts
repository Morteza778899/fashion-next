import { createAsyncThunk } from "@reduxjs/toolkit";

export const setVisibility = createAsyncThunk('footerVisibility/setVisibility', async (bool: boolean) => {
    return bool
})