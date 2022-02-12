import React, { useState } from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import useFetchGet from '../../hooks/useFetchGet';
import Modal from "../modal/modal";
import { OrderDetails } from "../orderDetails";
import { IngredientDetails } from "../ingredientDetails";
import {IngredientContext, OrderNumber} from '../../utils/service/ingridientsContext';



const App = () => {
  const { loading, error, data } = useFetchGet();

  const [order, setOrder] = useState({
    mainModal: false,
    modalOrder: false,
    modalIngredient: false,
    image: "",
    name: "",
    post: true
  });

  // const [ingredients, setIngridient] = useState({
  //   data: data,
  //   bun:'',
  //   burgerInsides:[]
  // });
  // console.log(ingredients.data);

  const closeButton = () => {
    setOrder({
      ...order,
      mainModal: false,
      modalOrder: false,
      modalIngredient: false,
    })
  }
  

 
  return (
    <>
      <Header />
      {loading && "Загрузка"}
        {error && "Ошибка"}
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
        
        {data && (
          <BurgerConstructors
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
          />
        )}
        </IngredientContext.Provider>
      </main>
      <Modal modal={order.mainModal}
      orderModal = {order.modalOrder}
      oneClick = {closeButton}
      >
        
        {order.modalOrder && <OrderDetails 
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
