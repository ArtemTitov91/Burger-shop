import React, {useContext} from "react";
import ingredientDetails from "../ingredientDetails/ingredientDetails.module.css";
import {
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import orderDetails from "./orderDetails.module.css";
import PropTypes from 'prop-types';
import { OrderNumber } from '../../service/ingredientsContext';
import useFetch from '../../hooks/useFetch';




const OrderDetails = ({ onClose, ingredients }) => {
  const ingredientsId = ingredients.data.map((el) => { return el._id });
  const { post } = useContext(OrderNumber);

  const { loading, error, res } = useFetch('https://norma.nomoreparties.space/api/orders', post,
  {method: "POST",
  body: JSON.stringify({ "ingredients": ingredientsId })
  });

  if(loading) return <div>ЗАГРУЗКА</div>
  if(error) return <div>ОШИБКА</div>

  return(
    <div className={orderDetails.order}>
        <p className={"text text_type_digits-large " + orderDetails.title}>
          {res && res.number}
        </p>
        <p className={"text text_type_main-medium " + ingredientDetails.text}>
          Идентификатор заказа
        </p>
        <button
          onClick={onClose}
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
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
