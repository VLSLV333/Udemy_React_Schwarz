import React, { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import style from "./Main.module.css";
import MenuElement from "./MenuElement";

const Main = (props) => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchMenuHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      //  ================    this validation makes sens but didn't work for me, so I changed it for more simple
      if (!response.ok) {
        throw new Error("Food didn`t fetch!");
      }

      const data = await response.json();

      const loadedFood = [];

      for (let food in data) {
        loadedFood.push({ ...data[food], id: food });
      }

      if (loadedFood.length === 0) {
        throw new Error("Wrong fetch link provided:(");
      }

      setMenu(loadedFood);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
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
        {error && !loading && <p>{error}</p>}
        {loading && <p>Receiving menu...</p>}
      </Card>
    </main>
  );
};

export default Main;
