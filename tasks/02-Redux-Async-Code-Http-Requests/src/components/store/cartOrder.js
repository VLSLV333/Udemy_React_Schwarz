import { createSlice } from "@reduxjs/toolkit";

import { showCartActions } from "./showCart";

const initialState = { cartOrder: [], together: 0 };

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
      if (olreadyInCart.quantity === 0) {
        state.cartOrder = state.cartOrder.filter(
          (item) => item.title !== action.payload.title
        );
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showCartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
        const responce = await fetch(
            "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
            {
              method: "PUT",
              body: JSON.stringify(cart),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      
          if (!responce.ok) {
            throw new Error("Didn`t upload data=(");
          }
    }
    try{
        await sendRequest()
        
        dispatch(
            showCartActions.showNotification({
              status: "success",
              title: "Success!",
              message: "Sent cart data successfully!",
            })
          );
    } catch (err){
        dispatch(
            showCartActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Sending data failed!",
            })
          );
    }
  };
};

export const cartOrderActions = cartOrder.actions;

export default cartOrder.reducer;
