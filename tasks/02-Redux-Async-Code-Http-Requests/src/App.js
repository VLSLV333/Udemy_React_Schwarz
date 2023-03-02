import { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const hideCart = useSelector((state) => state.showCart.showCart);
  const cart = useSelector((state) => state.cartOrder);

  const notification = useSelector((state) => state.showCart.notification);

  useEffect( () => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    if (cart.isChanged){
      dispatch(sendCartData(cart))
    }
    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {hideCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
