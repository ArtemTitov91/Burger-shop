import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import payOrder from "./payOrder.module.css";
import PropTypes from 'prop-types';



const PayOrder = ({ingredients, count, oneClick }) => {

  
  return (
    <div className={"mt-10 pr-3 " + payOrder.payOrder}>
      <div className={"mr-10 " + payOrder.price}>
        <p className="text text_type_digits-medium">
          {isNaN(count) ? 0 : count}
          </p>
        <CurrencyIcon type="primary" />
      </div> 
      <Button onClick={oneClick} type="primary" size="large">
        Оформить Заказ
      </Button>
    </div>
  );
};

PayOrder.propTypes = {
  oneClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  // ingredients: PropTypes.array.isRequired, 
};

export default PayOrder;
