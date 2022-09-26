import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const { data } = await axios.get('https://api.npoint.io/d08c4cfbcded5228dd52')
    return data
})