import React from "react";
import ingredientCard from "./ingredientCard.module.css";
import PropTypes from 'prop-types';

const IngredientCard = ({ image, alt, price, reactNode, name, openIngredient }) => {

  return (
    <div className={ingredientCard.pice} onClick={openIngredient}>
      <img className="mb-2" alt={alt} src={image}></img>
      <div className={ingredientCard.discription}>
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
          "mt-1 mb-1 text text_type_main-default " + ingredientCard.text
        }
      >
        {name}
      </p>
    </div>
  );
};


IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reactNode: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  openIngredient: PropTypes.func.isRequired
};

export default IngredientCard;
