import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleProduct = createAsyncThunk('singleProduct/getSingleProduct', async (id,{rejectWithValue}) => {
    try {
        const { data } = await axios.get('https://api.npoint.io/d08c4cfbcded5228dd52')
        const singleProduct = data[0]
        return singleProduct
    } catch (error) {
        return rejectWithValue(error)
    }
})