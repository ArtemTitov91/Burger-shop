import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import payOrder from "./payOrder.module.css";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL } from '../../service/action/cart';



const PayOrder = ({ count }) => {

  const ingredients = useSelector(state => state.reducer.ingredients);

  const dispatch = useDispatch();
  const openOrder = () => {
    dispatch({
      type: MODAL,
      mainModal: true,
      modalOrder: true,
    })
  }

  return (
    <div className={"mt-10 pr-3 " + payOrder.payOrder}>
      <div className={"mr-10 " + payOrder.price}>
        <p className="text text_type_digits-medium">
          {isNaN(count) ? 0 : count}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
       onClick={openOrder}
        type="primary"
         size="large"
         disabled={ingredients.length === 0}
         >
        Оформить Заказ
      </Button>
    </div>
  );
};

PayOrder.propTypes = {
  count: PropTypes.number.isRequired,
};

export default PayOrder;
