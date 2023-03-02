import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartOrder: [], together: 0 , isChanged: false};

const cartOrder = createSlice({
  name: "cartOrder",
  initialState,
  reducers: {
    addToCart(state, action) {
      let orderedItem = action.payload;
      let olreadyInCart = state.cartOrder.find(
        (item) => item.title === orderedItem.title
      );
      state.together += 1;
      state.isChanged = true

      if (olreadyInCart) {
        olreadyInCart.quantity += 1;
      } else {
        state.cartOrder.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      let olreadyInCart = state.cartOrder.find(
        (item) => item.title === action.payload.title
      );
      olreadyInCart.quantity -= 1;
      state.together -= 1;
      state.isChanged = true
      if (olreadyInCart.quantity === 0) {
        state.cartOrder = state.cartOrder.filter(
            (item) => item.title !== action.payload.title
          );
      }
    },
    replaceCart(state, action) {
      state.cartOrder = action.payload.cartOrder
     state.together = action.payload.together
    }
  },
});

export const cartOrderActions = cartOrder.actions;

export default cartOrder.reducer;
