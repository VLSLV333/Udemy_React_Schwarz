import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  cartStatus: false
});

// we can use LocalStorage to store cart products and useEffect to add it automaticaly on reload

export const CartContextProvider = (props) => {

  const [cartOpened, setCartOpened] = useState(false)

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

  const cartOpenHandler = () => {
    setCartOpened(true)
    const body = document.getElementById('body')
    body.setAttribute('class', 'noscroll')
  }

  const cartCloseHandler = () => {
    setCartOpened(false)
    const body = document.getElementById('body')
    body.setAttribute('class', '')
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        openCart: cartOpenHandler,
        closeCart: cartCloseHandler,
        cartStatus: cartOpened
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
