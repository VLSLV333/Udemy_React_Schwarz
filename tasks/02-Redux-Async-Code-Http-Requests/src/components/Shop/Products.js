import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { useEffect, useCallback, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { menuActions } from "../store/menu";

const Products = (props) => {

  const [productsArray, setProductsArray] = useState([]);

  const getProductsArray = useCallback(async () => {
    try {
      const responce = await fetch(
        "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );

      if (!responce.ok) {
        throw new Error("Didn`t fetch!");
      }

      const receivedProducts = await responce.json();

      const menuForToday = []

      for (let foodID in receivedProducts) {
        menuForToday.push({
          title: receivedProducts[foodID].item,
          price: +receivedProducts[foodID].price,
          description: receivedProducts[foodID].description,
          id: foodID
        });
      }

      setProductsArray(menuForToday)

    } catch (error) {
      console.log('I can create useState to handle this Error, for now Will just console this')
    }
  }, []);

  // I made this, because I thought it was a great idea to fetch menu and store it in Redux. 
  // But then this menu was never used, so I just commented menu in store out and logic of this update action.
  
  // const dispatch = useDispatch()
  
  // const updateProductsList = useCallback(() => {
  //   dispatch(menuActions.updateMenuList(productsArray))
  // }, [dispatch, productsArray])

  useEffect(() => {
    getProductsArray();
  }, [getProductsArray]);

  // useEffect(() => {
  //   updateProductsList()
  // }, [updateProductsList]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsArray.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
