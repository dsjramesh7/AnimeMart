import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
