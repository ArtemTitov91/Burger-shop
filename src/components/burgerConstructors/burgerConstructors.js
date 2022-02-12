import React, {useContext, useEffect, useMemo, useState} from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";
import PayOrder from "../payOrder/payOrder";
import PropTypes from 'prop-types';
import {menuItemPropTypes} from '../../utils/constants';
import {IngredientContext, OrderNumber} from '../../utils/service/ingridientsContext';
import useFetchPost from '../../hooks/useFetchPost';


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

  burgerPices.propTypes = {
    items: PropTypes.array.isRequired,
    el: menuItemPropTypes
  };


const BurgerConstructors = ({ oneClick }) => {
  const {data} = useContext(IngredientContext);
  const [ingredients, setIngridient] = useState({
    data: data,
    bun:'',
    burgerInsides:[]
  });

  const ingredientsId = ingredients.data.map((el) =>{ return el._id});
  const {post} = useContext(OrderNumber);

  const { loadingPost, errorPost, dataPost } = useFetchPost(ingredientsId, post);

useEffect (() => {
  let bun = '';
  const burgerInsides = [];
  const data = ingredients.data;

  data.forEach((el) => {
    if(el.type === 'bun'){
      bun = el
    } else {
      burgerInsides.push(el);
    }
  });
  setIngridient({data, bun, burgerInsides});
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
      oneClick={oneClick}
       count={burgerPrice}
       ingredients={ingredients.data}/>
    </div>
  );
};

BurgerConstructors.propTypes = {
  oneClick: PropTypes.func.isRequired,
  el: menuItemPropTypes
};

export default BurgerConstructors;
