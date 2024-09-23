import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data =  res.json()
    return data
})
export const getCategoryProducts = createAsyncThunk('getcategory', async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = res.json()
    return data
})
export const getProductDetail = createAsyncThunk('getproduct', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data =await res.json()
    return data
})



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.productsStatus = STATUS.SUCCESS
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.productsStatus = STATUS.ERROR
        })
        builder.addCase(getProductDetail.pending, (state) => {
            state.productDetailStatus = STATUS.LOADING
        })
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload
            state.productDetailStatus = STATUS.SUCCESS
        })
        builder.addCase(getProductDetail.rejected, (state) => {
            
            state.productDetailStatus = STATUS.ERROR
        })
        builder.addCase(getCategoryProducts.pending, (state) => {
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.productsStatus = STATUS.SUCCESS
        })
        builder.addCase(getCategoryProducts.rejected, (state) => {
            state.productsStatus = STATUS.ERROR
        })
    }
})

export default productSlice.reducer