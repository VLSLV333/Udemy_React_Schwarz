import React, { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import style from "./Main.module.css";
import MenuElement from "./MenuElement";

const Main = (props) => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("Sorry, try to reload page");

  const fetchMenuHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      if (!response.ok) {
        throw new Error("Food didn`t fetch!");
      }

      const data = await response.json();

      const loadedFood = [];

      for (let food in data) {
        loadedFood.push({ ...data[food], id: food });
      }

      setMenu(loadedFood);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMenuHandler();
  }, [fetchMenuHandler]);

  return (
    <main className={style.main}>
      <Card className={style.banner}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are coocked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
      <Card className={style.menu}>
        {menu.map((food) => (
          <MenuElement
            item={food.item}
            description={food.description}
            price={food.price}
            key={food.id}
            id={food.id}
          />
        ))}
        {menu.length === 0 && <p>{error}</p>}
      </Card>
    </main>
  );
};

export default Main;
