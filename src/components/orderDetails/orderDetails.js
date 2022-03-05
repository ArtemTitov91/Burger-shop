import React, { useEffect } from "react";
import ingredientDetails from "../ingredientDetails/ingredientDetails.module.css";
import {
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import orderDetails from "./orderDetails.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { MODAL } from '../../service/action/cart';
import { postOrder } from '../../service/action/cart';


const OrderDetails = () => {
  const { order, orderRequest, orderFailed, ingredients } =
    useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const closeButton = () => {
    dispatch({
      type: MODAL,
      mainModal: false,
      modalOrder: false,
      modalIngredient: false,
    })
  }

  const ingredientsId = ingredients.map((el) => { return el._id })

  useEffect(() => {
    dispatch(postOrder(ingredientsId))
  }, [])


  if (orderRequest) return <div>ЗАГРУЗКА</div>
  if (orderFailed) return <div>ОШИБКА</div>

  return (
    <div className={orderDetails.order}>
      <p className={"text text_type_digits-large " + orderDetails.title}>
        {order && order.number}
      </p>
      <p className={"text text_type_main-medium " + ingredientDetails.text}>
        Идентификатор заказа
      </p>
      <button
        type="button"
        className={orderDetails.button}
      >
        <CheckMarkIcon type="primary"></CheckMarkIcon>
      </button>
      <p className={"text text_type_main-small " +
        orderDetails.text}>Ваш заказ начали готовить</p>
      <p
        className={
          "text text_type_main-default text_color_inactive " +
          orderDetails.text
        }
      >
        Дождитесь готовностина орбитальной станции
      </p>
      <div className={ingredientDetails.discription}></div>
    </div>
  )
};


export default OrderDetails;
