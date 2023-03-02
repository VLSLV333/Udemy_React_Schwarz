import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const hideCart = useSelector(state => state.showCart.showCart)
  return (
    <Layout>
      {hideCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;