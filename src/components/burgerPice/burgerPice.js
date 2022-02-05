import React from "react";
import burgerPiceStyle from "./burgerPice.module.css";
import PropTypes from 'prop-types';
import {menuItemPropTypes} from '../../utils/constants';

const BurgerPice = ({ image, alt, price, reactNode, name, oneClick }) => {

  return (
    <div className={burgerPiceStyle.pice} onClick={oneClick}>
      <img className="mb-2" alt={alt} src={image}></img>
      <div className={burgerPiceStyle.discription}>
        <p
          style={{ margin: 0 }}
          className='className="text text_type_digits-default'
        >
          {price}
        </p>
        {reactNode}
      </div>
      <p
        className={
          "mt-1 mb-1 text text_type_main-default " + burgerPiceStyle.text
        }
      >
        {name}
      </p>
    </div>
  );
};


BurgerPice.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reactNode: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  oneClick: PropTypes.func.isRequired
};

export default BurgerPice;
