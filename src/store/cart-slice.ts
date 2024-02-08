import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // import payloadAction from redux and <{payload}> is id, title, price without quantity to type the action.
    addToCart: (
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // itemIndex it will return -1 if not found
      // if item found it will return the index of it

      if (itemIndex >= 0) {
        // if the item in the array
        state.items[itemIndex].quantity++;
      } else {
        // if the item is not on the array we push it into the array
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // action payload is the id
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        // remove the item from array splice(index, number of element to be removed)
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
