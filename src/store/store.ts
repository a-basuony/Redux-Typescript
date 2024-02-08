import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// to Infer the `RootState` and `AppDispatch` types from the store itself.
//example to  dispatch a reducer action:
// { const name = "ahmed";
//  type N = typeof name; }

// Infer the `RootState` and `AppDispatch` types from the store itself.
//  AppDispatch for useDispatch
export type AppDispatch = typeof store.dispatch;

// define RootState for useSelector
export type RootState = ReturnType<typeof store.getState>;
