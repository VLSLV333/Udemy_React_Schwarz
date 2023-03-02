import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { cartOrderActions } from '../store/cartOrder';

import { useDispatch } from 'react-redux'

const ProductItem = (props) => {

  const { title, price, description, id } = props;
  const dispatch = useDispatch()

  const addCartHandler = () => {
    dispatch(cartOrderActions.addToCart({ title, price, description, id, quantity: 1 }))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
