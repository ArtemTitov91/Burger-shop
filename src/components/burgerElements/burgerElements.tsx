import React from "react";
import burgerElementsStyle from "./burgerElements.module.css";

const BurgerElements = (props: any) => {
  const { label, reactNode } = props;

  return (
    <li>
      <h3 className="text text_type_main-medium mb-4 mt-10">{label}</h3>
      <ul className={burgerElementsStyle.element}>{reactNode}</ul>
    </li>
  );
};

export default BurgerElements;
