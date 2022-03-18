import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import BurgerElements from "../burgerElements/burgerElements";
import IngredientCard from "../ingredientCard/ingredientCard";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { SCROLL_CHANGE } from '../../service/action/cart';


const TurnTab = () => {
  const { bunScroll, souseScroll, mainScroll } = useSelector(state => state.reducer)

  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={bunScroll} >
        Булки
      </Tab>
      <Tab value="two" active={souseScroll} >
        Соусы
      </Tab>
      <Tab value="three" active={mainScroll} >
        Начинки
      </Tab>
    </div>
  );
};


const createBurger = (items, type) => {
  return items
    .filter((el) => {
      return el.type === type;
    })
    .map((data) => (
      <IngredientCard
        key={data._id}
        alt={data.name}
        id={data._id}
        reactNode={<CurrencyIcon type="primary" />}
        price={data.price}
        image={data.image}
        name={data.name}
        count={data.__v}
      />
    ));
};

createBurger.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}


const BurgerIngredients = () => {
  const items = useSelector(state => state.reducer.items)
  const dispatch = useDispatch();

  const handleScroll = (e) => {
    let element = e.target
    if (element.scrollTop >= document.querySelector('.bun').scrollHeight && element.scrollTop <= (document.querySelector('.bun').scrollHeight + document.querySelector('.sauce').scrollHeight)) {
      dispatch({
        type: SCROLL_CHANGE,
        bunScroll: false,
        souseScroll: true
      })
    } else if (element.scrollTop >= (document.querySelector('.bun').scrollHeight + document.querySelector('.sauce').scrollHeight)) {
      dispatch({
        type: SCROLL_CHANGE,
        mainScroll: true,
        souseScroll: false
      })
    } else {
      dispatch({
        type: SCROLL_CHANGE,
        bunScroll: true,
        mainScroll: false
      })
    }
  }

  return (
    <div className={burgerIngredientsStyle.ingredients}>
      <h2 className="text text_type_main-large mb-5">Соберите Бургер</h2>
      <TurnTab />
      <ul className={burgerIngredientsStyle.list + ' ingredientsList'}
        onScroll={handleScroll}>
        <BurgerElements
          className="bun"
          el='101'
          label="Булки"
          reactNode={createBurger(items, "bun",)}
        />
        <BurgerElements
          className="sauce"
          el='102'
          label="Соусы"
          reactNode={createBurger(items, "sauce",)}
        />
        <BurgerElements
          className="main"
          el='103'
          label="Начинки"
          reactNode={createBurger(items, "main",)}
        />
      </ul>
    </div>
  );
};


export default BurgerIngredients;

export { createBurger };
