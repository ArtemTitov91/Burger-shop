import React from "react";
import ingredientDetails from "./ingredientDetails.module.css";
import { useSelector } from 'react-redux';

const IngredientDetails = () => {

const{image, name} = useSelector(store=>(store.reducer))

  return (
      <div className={ingredientDetails.ingredient}>
        <p className={"text text_type_main-large " + ingredientDetails.title}>Детали ингридиента</p>
      <img src={image} alt={name}></img>
      <p className={"text text_type_main-medium " + ingredientDetails.text}>
        {name}
      </p>
      <div className={ingredientDetails.discription}>
        <div className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default">244,4</p>
        </div>
        <div className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default">12,2</p>
        </div>
        <div className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default">17,2</p>
        </div>
        <div className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default">10,2</p>
        </div>
      </div>
    </div>
  )
};


export default IngredientDetails;
