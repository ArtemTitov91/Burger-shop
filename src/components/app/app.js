import React, { useEffect, useState } from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import useFetch from '../../hooks/useFetch';
import Modal from "../modal/modal";
import { OrderDetails } from "../orderDetails";
import { IngredientDetails } from "../ingredientDetails";
import {IngredientContext, OrderNumber} from '../../service/ingredientsContext';



const App = () => {
  const { loading, error, data } = useFetch(
    'https://norma.nomoreparties.space/api/ingredients', '', {method:"GET"});


  const [order, setOrder] = useState({
    mainModal: false,
    modalOrder: false,
    modalIngredient: false,
    image: "",
    name: "",
    post: true
  });

  const [ingredients, setIngredient] = useState({
    data: [],
    bun:'',
    burgerInsides:[]
  });
useEffect(() => {
  
 setIngredient((prev)=>{
   return {...prev, data: data }
 })
}, [data])

  const closeButton = () => {
    setOrder({
      ...order,
      mainModal: false,
      modalOrder: false,
      modalIngredient: false,
    })
  }
  if(loading) return <div>ЗАГРУЗКА</div>
  if(error) return <div>ОШИБКА</div>

  return (
    <>
      <Header />
      <OrderNumber.Provider value={{
        post: order.post}}>
      <main className={appStyle.main} tabIndex={0}>
        <IngredientContext.Provider value={{data:data, ingredients:ingredients}}>
        {data && (
          <BurgerIngredients
            openIngredient={(img, name) => {
              setOrder({
                ...order,
                mainModal: true,
                modalIngredient: true,
                image: img,
                name: name,
              });
            }}
          />
        )}
          {ingredients.data?.length && (<BurgerConstructors
          setIngridient={setIngredient}
          openOrder={(img, name) => {
              setOrder({
                ...order,
                mainModal: true,
                modalOrder: true,
                image: img,
                name: name,
                post: !order.post
              });
            }}
          />)}
        </IngredientContext.Provider>
      </main>
       {order.mainModal && (<Modal
       modal = {order.mainModal}
      onClose = {closeButton}
      >
        {order.modalOrder && <OrderDetails 
        ingredients = {ingredients}
        onClose = {closeButton}
        />}
        
        {order.modalIngredient && <IngredientDetails 
        image={order.image}
        name={order.name}
        />}
      </Modal>)}
      </OrderNumber.Provider>
    </>
  );
 
};


export default App;
