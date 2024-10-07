import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index"
import { reducer as likesReducer } from "../slice/Likes";
import { reducer as cartReducer } from "../slice/Cart";
import { reducer as currencyReducer } from "../slice/currency";
const store = configureStore({
     reducer: {
          likes: likesReducer,
          cartProducts: cartReducer,
          currency: currencyReducer,
          [api.reducerPath]:  api.reducer
     },
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export default store