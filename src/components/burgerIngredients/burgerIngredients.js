import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import BurgerElements from "../burgerElements/burgerElements";
import IngredientCard from "../ingredientCard/ingredientCard";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

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


const createBurger = (items, type, oneClick) => {
  return items
    .filter((el) => {
      return el.type === type;
    })
    .map((data) => (
      <li key={data._id}>
      <IngredientCard
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

createBurger.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  oneClick: PropTypes.func.isRequired,
  el: PropTypes.array.isRequired
}


const BurgerIngredients = (props) => {
  const { oneClick, items } = props;

  return (
    <div className={burgerIngredientsStyle.ingredients}>
      <h2 className="text text_type_main-large mb-5">Соберите Бургер</h2>
      <TurnTab />
      <ul className={burgerIngredientsStyle.list}>
        <BurgerElements
        el = '101'
          label="Булки"
          reactNode={createBurger(items, "bun", oneClick)}
        />
        <BurgerElements
        el = '102'
          label="Соусы"
          reactNode={createBurger(items, "sauce", oneClick)}
        />
        <BurgerElements
        el = '103'
          label="Начинки"
          reactNode={createBurger(items, "main", oneClick)}
        />
      </ul>
    </div>
  );
};

BurgerIngredients.propTypes = {
  items: PropTypes.array.isRequired,
  oneClick: PropTypes.func.isRequired,
}

export default BurgerIngredients;

export { createBurger };
