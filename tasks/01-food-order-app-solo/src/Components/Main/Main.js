import React from "react";
import Card from "../UI/Card/Card";
import style from "./Main.module.css";
import MenuElement from "./MenuElement";

const Main = (props) => {

  const fetchMenu = async () => {
    try {
      const responce = await fetch('https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/menu.json')
      if (!responce.ok){
        throw new Error('smth s not working!')
      }
      const menuData = await responce.json()
      // const menuData = responce
      const test = JSON.parse(menuData)
      console.log(test)
      // console.log(JSON.parse(menuData))
      // for (let food in menuData){
      //   console.log(menuData)
      // } 
    } catch (error) {
      console.log(error)
    }
  };
  fetchMenu()

  const menu = [
    {
      item: "Sushi",
      description: "Finest fish and veggies",
      price: "22.99",
      id: Math.random().toString(),
    },
    {
      item: "Schnitzel",
      description: "A german specialty!",
      price: "16.50",
      id: Math.random().toString(),
    },
    {
      item: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "12.99",
      id: Math.random().toString(),
    },
    {
      item: "Green Bowl",
      description: "Healthy...and green...",
      price: "18.99",
      id: Math.random().toString(),
    },
  ];

  return (
    <main className={style.main}>
      <Card className={style.banner}>
        <h1>Delicious Julia, Delivered To You</h1>
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
      </Card>
    </main>
  );
};

export default Main;
