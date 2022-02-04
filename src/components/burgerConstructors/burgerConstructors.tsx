import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";
import PayOrder from "../payOrder/payOrder";

const burgerPices = (items: any) =>
  items.map((el: any) => {
    if (el.type !== "bun") {
      return (
        <div key={el._id} className={burgerConstructor.burgerComponent}>
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

const burgerBun = (items: any, id: any) =>
  items.find((el: any) => {
    return el._id === id;
  });

const BurgerConstructors = (props: any) => {
  const { items, oneClick } = props;

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

export default BurgerConstructors;
