import React, { useEffect, useMemo, useContext} from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";
import PayOrder from "../payOrder/payOrder";
import PropTypes from 'prop-types';
import { menuItemPropTypes } from '../../utils/constants';
import {IngredientContext} from '../../service/ingredientsContext';



const burgerPices = (items) =>
  items.map((el, index) => {
    if (el.type !== "bun") {
      return (
        <div key={index} className={burgerConstructor.burgerComponent}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={el.name}
            price={el.price}
            thumbnail={el.image_mobile}
          />
        </div>
      );
    }
  });

const BurgerConstructors = ({ openOrder, setIngridient }) => {
  const { ingredients } = useContext(IngredientContext);
  
  useEffect(() => {
    let bun = '';
    const burgerInsides = [];
    const data = ingredients.data;

    data.forEach((el) => {
      if (el.type === 'bun') {
        bun = el
      } else {
        burgerInsides.push(el);
      }
    });
    setIngridient({ data, bun, burgerInsides });
  }, []);


  const burgerPrice = useMemo(
    () => {
      let price = 0;

      price += ingredients.bun.price * 2;
      ingredients.burgerInsides.forEach((el) => {
        price += el.price;
      });

      return price;
    },
    [ingredients]
  );
  return (
    <div>
      <div className={burgerConstructor.burgerConstructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={ingredients.bun.name + " (верх)"}
          price={ingredients.bun.price}
          thumbnail={ingredients.bun.image_mobile}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          className={burgerConstructor.burgerComponents}
        >
          {burgerPices(ingredients.burgerInsides)}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={ingredients.bun.name + " (низ)"}
          price={ingredients.bun.price}
          thumbnail={ingredients.bun.image_mobile}
        />
      </div>
      <PayOrder
        openOrder={openOrder}
        count={burgerPrice}
        ingredients={ingredients.data} />
    </div>
  );
};

BurgerConstructors.propTypes = {
  openOrder: PropTypes.func.isRequired,
  setIngridient: PropTypes.func.isRequired,
  ingredients: menuItemPropTypes
};

export default BurgerConstructors;
