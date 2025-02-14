import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
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
    clearCartItem: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItem } = cartSlice.actions;

export default cartSlice.reducer;
