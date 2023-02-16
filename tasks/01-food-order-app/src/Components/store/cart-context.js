import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// we can use LocalStorage to store cart products and useEffect to add it automaticaly on reload

export const CartContextProvider = (props) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))){
        setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addToCartHandler = (itemName, itemPrice, itemQuantity) => {
    let itemAlreadyInCart = false;
    setCart((prevState) => {
      let cartToUpdate = [...prevState];
      for (let product of cartToUpdate) {
        if (product.item === itemName) {
          product.quantity = +product.quantity + +itemQuantity;
          itemAlreadyInCart = true;
        }
      }
      if (!itemAlreadyInCart) {
        cartToUpdate.push({
          item: itemName,
          quantity: itemQuantity,
          price: itemPrice,
        });
      }
      localStorage.setItem('cart', JSON.stringify(cartToUpdate))
      return cartToUpdate
    });
  };

  const removeFromCartHandler = () => {
    console.log(JSON.parse(localStorage.getItem('cart')));
    localStorage.removeItem('cart')
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
