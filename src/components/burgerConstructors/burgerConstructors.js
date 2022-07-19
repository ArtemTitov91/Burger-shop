import React, { useEffect, useMemo } from "react";
import {
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";
import PayOrder from "../payOrder/payOrder";
import { useSelector, useDispatch } from 'react-redux';
import { INGREDIENTS_PICK, UPDATE_TYPE } from '../../service/action/cart';
import { useDrop } from "react-dnd";
import BurgerPices from '../burgerPices/burgerPices';
import { v4 as uuidv4 } from 'uuid';

//изменено
const burgerPices = (items) => {
  return items.map((el,) => {
    return (
      <BurgerPices
      key = {el.constructorKey}
        id={el._id}
        name={el.name}
        price={el.price}
        image_mobile={el.image_mobile} />
    )
  })
}



const BurgerConstructors = () => {
  const { ingredients, bun, burgerInsides, items } = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const [, transfer] = useDrop(() => ({ accept: 'insideItems' }));

  useEffect(() => {
    const burgerInsides = [];
    let bun = [];


    ingredients.forEach((el) => {
      if (el.type === 'bun') {
        bun = el
      }else{
        burgerInsides.push(el);
      }
    });
    dispatch({
      type: INGREDIENTS_PICK,
      bun: bun,
      burgerInsides: burgerInsides
    })
  }, [ingredients, dispatch]);

  const burgerPrice = useMemo(
    () => {
      let price = 0;

      price += bun.price * 2;
      burgerInsides.forEach((el) => {
        price += el.price;
      });

      return price;
    },
    [bun, burgerInsides]
  );

  const [, drop] = useDrop({
    accept: "outsideItems",
    drop(itemId) {
      dispatch({
        type: UPDATE_TYPE,
        ...itemId,
        constructorKey: uuidv4()
      });
    },
  });

  return (
    <div>
      <div className={burgerConstructor.burgerConstructor} ref={drop}>
        {ingredients.length === 0 && "Переместите выбранные вами вид булочки"}
        {ingredients.length > 0 && <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name + " (верх)"}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />}
        <div
          ref={transfer}
          className={burgerConstructor.burgerComponents}
        >
          {burgerPices(burgerInsides)}
        </div>
        {ingredients.length > 0 && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name + " (низ)"}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />}
      </div>
      <PayOrder
        count={burgerPrice}
        ingredients={items.data} />
    </div>
  );
};

export default BurgerConstructors;
