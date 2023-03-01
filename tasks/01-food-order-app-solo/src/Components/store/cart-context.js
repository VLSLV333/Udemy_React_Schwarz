import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  order: () => {},
  cartStatus: false,
  justOrdered: false,
});

export const CartContextProvider = (props) => {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartJustOrdered, setCartJustOrdered] = useState(false);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

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
          id: itemID,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cartToUpdate));
      return cartToUpdate;
    });
  };

  const removeFromCartHandler = (itemName) => {
    setCart((prevState) => {
      let cartToUpdate = [...prevState];
      for (let product of cartToUpdate) {
        if (product.item === itemName) {
          product.quantity = +product.quantity - 1;
        }
        if (+product.quantity === 0) {
          let goneItemIndex = cartToUpdate.indexOf(product);
          cartToUpdate.splice(goneItemIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cartToUpdate));
      if (cartToUpdate.length === 0) {
        localStorage.removeItem("cart");
      }
      return cartToUpdate;
    });
  };

  const cartOpenHandler = () => {
    setCartOpened(true);
  };

  const cartCloseHandler = () => {
    setCartOpened(false);
  };

  const orderHandler = async (obj) => {
    console.log("Order was made!");

    let smallCart = [];

    for (let food of cart) {
      smallCart.push({ item: food.item, quantity: food.quantity });
    }

    let order = { clientInfo: obj, orderedItems: smallCart };

    try{
      const responce = await fetch(
        "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (responce.ok) {
        setCartJustOrdered(true);
        setCart([]);
        setTimeout(() => {
          setCartOpened(false);
        }, 4000);
        setTimeout(() => {
          setCartJustOrdered(false);
        }, 5000);
        localStorage.removeItem("cart");
      } else {
        console.log("I don't really understand when exactly this responce in not ok! ALWAYS gives me back 200 WTF");
      }
    } catch (err) {
      console.log(err.message)
      //    create new state set this state to error provide need logic...
    }
    
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        openCart: cartOpenHandler,
        closeCart: cartCloseHandler,
        order: orderHandler,
        cartStatus: cartOpened,
        justOrdered: cartJustOrdered,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
