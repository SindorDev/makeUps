import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index"
import { reducer as likesReducer } from "../slice/Likes";
const store = configureStore({
     reducer: {
          likes: likesReducer,
          [api.reducerPath]:  api.reducer
     },
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export default store