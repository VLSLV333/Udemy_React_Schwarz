import { useDispatch, useSelector } from 'react-redux'

import classes from './CartButton.module.css';
import { showCartActions } from '../store/showCart';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const itemsInCart = useSelector(state => state.cartOrder.together)

  const cartButtonHandler = () => {
    dispatch(showCartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
