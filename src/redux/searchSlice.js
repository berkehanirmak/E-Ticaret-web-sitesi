// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { STATUS } from "../utils/status";

// const initialState = {
//     products: [],
//     productsStatus: STATUS.IDLE,
//     productDetail: [],
//     productDetailStatus: STATUS.IDLE
// }

// export const getSearchProducts = createAsyncThunk('searchProducts', async (keyword) => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data =  res.json()
//     return data
// })


// const searchSlice = createSlice({
//     name: 'search',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getProducts.pending, (state) => {
//             state.productsStatus = STATUS.LOADING
//         })
//     }
// })

// export default searchSlice.reducer