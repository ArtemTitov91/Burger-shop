import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";
import PayOrder from "../payOrder/payOrder";
import PropTypes from 'prop-types';
import {menuItemPropTypes} from '../../utils/constants';



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

const burgerBun = (items, id) =>
  items.find((el) => {
    return el._id === id;
  });

  burgerBun.propTypes = {
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    el: menuItemPropTypes
  };

const BurgerConstructors = ({ items, oneClick }) => {

  const bun = burgerBun(items, "60d3b41abdacab0026a733c6");

  return (
    <div>
      <div className={burgerConstructor.burgerConstructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name + " (верх)"}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          className={burgerConstructor.burgerComponents}
        >
          {burgerPices(items)}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name + " (низ)"}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <PayOrder oneClick={oneClick} />
    </div>
  );
};

BurgerConstructors.propTypes = {
  oneClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  el: menuItemPropTypes
};

export default BurgerConstructors;
