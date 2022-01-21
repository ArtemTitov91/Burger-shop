import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import payOrder from "./payOrder.module.css";

const PayOrder = () => {
  return (
    <div className={"mt-10 pr-3 " + payOrder.payOrder}>
      <div className={"mr-10 " + payOrder.price}>
        <p className="text text_type_digits-medium">777</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large">
        Оформить Заказ
      </Button>
    </div>
  );
};

export default PayOrder;
