import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: JSON.parse(localStorage.getItem("currency") || "")
}

const currencySlices = createSlice({
    name: "currency",
    initialState,
    reducers: {
        currency: (state, action) => {
              localStorage.setItem("currency", JSON.stringify(action.payload))
              state.currency = action.payload
        },
    }
})

export const { currency } = currencySlices.actions;
export const reducer = currencySlices.reducer;