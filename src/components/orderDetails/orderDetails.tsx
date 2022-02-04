import React from "react";
import ingredientDetails from "../ingredientDetails/ingredientDetails.module.css";
import {
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import orderDetails from "./orderDetails.module.css";
// import Modal from '../modal/modal';



const OrderDetails = (props: any) => {
  const {oneClick} = props;

  return(
    <>
        <p className={"text text_type_digits-large " + ingredientDetails.title}>
          034536
        </p>
        <p className={"text text_type_main-medium " + ingredientDetails.text}>
          Идентификатор заказа
        </p>
        <button
          onClick={oneClick}
          type="button"
          className={orderDetails.button}
        >
          <CheckMarkIcon type="primary"></CheckMarkIcon>
        </button>
        <p className="text text_type_main-small">Ваш заказ начали готовить</p>
        <p
          className={
            "text text_type_main-default text_color_inactive " +
            orderDetails.text
          }
        >
          Дождитесь готовностина орбитальной станции
        </p>
        <div className={ingredientDetails.discription}></div>
        </>
  )
};

export default OrderDetails;
