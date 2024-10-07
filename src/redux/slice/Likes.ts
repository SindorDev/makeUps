import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    liks: JSON.parse(localStorage.getItem("likes") || "[]")
}

const likeSlices = createSlice({
    name: "Likes",
    initialState,
    reducers: {
        like: (state, action) => {
            const isLikesExist = state.liks.some((likes: any) => likes.id === action.payload.id);
            if (!isLikesExist) {
                state.liks.push(action.payload);
                localStorage.setItem("likes", JSON.stringify(state.liks));
            }
        },
        removeLikes: (state, action) => {
              const newState =  state.liks.filter((like: any) => like.id !== action.payload.id)
              state.liks = newState
              localStorage.setItem("likes", JSON.stringify(newState))
        }
    }
})

export const { like, removeLikes } = likeSlices.actions;
export const reducer = likeSlices.reducer;
