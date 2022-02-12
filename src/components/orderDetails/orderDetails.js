import React, {useContext} from "react";
import ingredientDetails from "../ingredientDetails/ingredientDetails.module.css";
import {
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import orderDetails from "./orderDetails.module.css";
import PropTypes from 'prop-types';




const OrderDetails = ({ oneClick }) => {


  


  return(
    <div className={orderDetails.order}>
        <p className={"text text_type_digits-large " + orderDetails.title}>
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

OrderDetails.propTypes = {
  oneClick: PropTypes.func.isRequired,
};

export default OrderDetails;
