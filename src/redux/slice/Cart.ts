import { createSlice } from "@reduxjs/toolkit";
import { Response } from "../../types";

const initialState = {
    cartProduct: JSON.parse(localStorage.getItem("cartProduct") || "[]")
}

const productSlices = createSlice({
    name: "products",
    initialState,
    reducers: {
        product: (state, action) => {
            const isproductsExist = state.cartProduct.some((products: Response) => products.id === action.payload.id);
            if (!isproductsExist) {
                state.cartProduct.push(action.payload);
                localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));
            }
        },
        removeproducts: (state, action) => {
              const newState =  state.cartProduct.filter((product: Response) => product.id !== action.payload.id)
              state.cartProduct = newState
              localStorage.setItem("cartProduct", JSON.stringify(newState))
        }
    }
})

export const { product, removeproducts } = productSlices.actions;
export const reducer = productSlices.reducer;
