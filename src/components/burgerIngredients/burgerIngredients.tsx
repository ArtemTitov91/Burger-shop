import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import BurgerElements from "../burgerElements/burgerElements";
import BurgerPice from "../burgerPice/burgerPice";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const TurnTab = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

const createBurger = (items: any, type: string, oneClick: any) => {
  return items
    .filter((el: any) => {
      return el.type === type;
    })
    .map((data: any) => (
      <li key={data._id}>
      <BurgerPice
        oneClick={() => {
          oneClick(data.image, data.name);
        }}
        alt={data.name}
        reactNode={<CurrencyIcon type="primary" />}
        price={data.price}
        image={data.image}
        name={data.name}
      />
      </li>
    ));
};

const BurgerIngredients = (props: any) => {
  const { oneClick, items } = props;

  return (
    <div className={burgerIngredientsStyle.ingredients}>
      <h2 className="text text_type_main-large mb-5">Соберите Бургер</h2>
      <TurnTab />
      <ul className={burgerIngredientsStyle.list}>
        <BurgerElements
        key = '101'
          label="Булки"
          reactNode={createBurger(items, "bun", oneClick)}
        />
        <BurgerElements
        key = '102'
          label="Соусы"
          reactNode={createBurger(items, "sauce", oneClick)}
        />
        <BurgerElements
        key = '103'
          label="Начинки"
          reactNode={createBurger(items, "main", oneClick)}
        />
      </ul>
    </div>
  );
};

export default BurgerIngredients;

export { createBurger };
