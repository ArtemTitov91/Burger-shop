import React, { useState } from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import { useFetch } from "../../hooks";
import Modal from "../modal/modal";
import { OrderDetails } from "../orderDetails";
import { IngredientDetails } from "../ingredientDetails";




const App = () => {
  const { loading, error, data } = useFetch();
  

  const [order, setOrder] = useState({
    mainModal: false,
    modalOrder: false,
    modalIngredient: false,
    image: "",
    name: "",
  });


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
      <main className={appStyle.main} tabIndex={0}>
        {loading && "Загрузка"}
        {error && "Ошибка"}
        {data && (
          <BurgerIngredients
            items={data}
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
            items={data}
            oneClick={(img, name) => {
              setOrder({
                ...order,
                mainModal: true,
                modalOrder: true,
                image: img,
                name: name,
              });
            }}
          />
        )}
      </main>
      <Modal modal={order.mainModal}
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
    </>
  );

};


export default App;
