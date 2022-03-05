import React, { useMemo } from "react";
import ingredientCard from "./ingredientCard.module.css";
import PropTypes from 'prop-types';
import { MODAL } from '../../service/action/cart';
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';

const IngredientCard = ({ id, image, alt, price, reactNode, name }) => {

  const { ingredients } = useSelector(state => state.reducer);


  const [, ElemRef] = useDrag({
    type: 'outsideItems',
    item: { id },

  })

  const countPices = useMemo(() => {
    return ingredients.filter(el => el._id === id).length
  }, [ingredients])

  const dispatch = useDispatch();
  const openIngredient = () => {
    dispatch({
      type: MODAL,
      mainModal: true,
      modalIngredient: true,
      image: image,
      name: name
    })
  }

  return (
    <li className={ingredientCard.pice}
      onClick={openIngredient}
      id={id}
      ref={ElemRef}>
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
      {countPices > 0 && <div className={ingredientCard.count}>{countPices}</div>}
    </li>
  );
};


IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reactNode: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  // __v: PropTypes.number.isRequired,
};

export default IngredientCard;


