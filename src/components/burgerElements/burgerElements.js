import React from "react";
import burgerElementsStyle from "./burgerElements.module.css";
import PropTypes from 'prop-types';


const BurgerElements = ({ label, reactNode, className }) => {

  return (
    <li className={className}>
      <h3 className="text text_type_main-medium mb-4 mt-10">{label}</h3>
      <ul className={burgerElementsStyle.element}>{reactNode}</ul>
    </li>
  );
};

BurgerElements.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  reactNode: PropTypes.array.isRequired
}

export default BurgerElements;
