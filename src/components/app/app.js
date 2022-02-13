import React, { useEffect, useState } from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import useFetch from '../../hooks/useFetch';
import Modal from "../modal/modal";
import { OrderDetails } from "../orderDetails";
import { IngredientDetails } from "../ingredientDetails";
import {IngredientContext, OrderNumber} from '../../utils/service/ingridientsContext';



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

  const [ingredients, setIngridient] = useState({
    data: [],
    bun:'',
    burgerInsides:[]
  });
useEffect(() => {
  
 setIngridient((prev)=>{
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
        <IngredientContext.Provider value={{data:data}}>
        {data && (
          <BurgerIngredients
            oneClick={(img, name) => {
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
          setIngridient={setIngridient}
          ingredients ={ingredients}
            oneClick={(img, name) => {
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
      <Modal modal={order.mainModal}
      orderModal = {order.modalOrder}
      oneClick = {closeButton}
      >
        
        {order.modalOrder && <OrderDetails 
        ingredients = {ingredients}
        oneClick = {closeButton}
        />}
        
        {order.modalIngredient && <IngredientDetails 
        image={order.image}
        name={order.name}
        />}
      </Modal>
      </OrderNumber.Provider>
    </>
  );
 
};


export default App;
