import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  order: () => {},
  cartStatus: false
});

export const CartContextProvider = (props) => {

  const [cartOpened, setCartOpened] = useState(false)

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))){
        setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addToCartHandler = (itemName, itemPrice, itemQuantity, itemID) => {
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
          id: itemID
        });
      }
      localStorage.setItem('cart', JSON.stringify(cartToUpdate))
      return cartToUpdate
    });
  };

  const removeFromCartHandler = (itemName) => {
    setCart((prevState) => {
      let cartToUpdate = [...prevState];
      for (let product of cartToUpdate) {
        if (product.item === itemName) {
          product.quantity = +product.quantity - 1;
        }
        if( +product.quantity === 0) {
          let goneItemIndex = cartToUpdate.indexOf(product)
          cartToUpdate.splice(goneItemIndex, 1)
        }
      }
      localStorage.setItem('cart', JSON.stringify(cartToUpdate))
      if (cartToUpdate.length === 0){
        localStorage.removeItem('cart')
      }
      return cartToUpdate
    })
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

  const orderHandler = () => {
    console.log('Order was made!')
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        openCart: cartOpenHandler,
        closeCart: cartCloseHandler,
        cartStatus: cartOpened,
        order: orderHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
