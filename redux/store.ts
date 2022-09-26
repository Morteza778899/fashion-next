import { getProduct } from './features/product/action';
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
    reducer: {
        allProduct: productSlice
    }
})
store.dispatch(getProduct())
// this is for nextjs.
// in react, you can just export store
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

// this is for typeScript
export type AppDispatch = typeof store.dispatch;  // useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>; // useSelector((state:RootState) =>...)