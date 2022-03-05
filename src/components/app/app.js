import React, { useEffect } from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import Modal from "../modal/modal";
import { OrderDetails } from "../orderDetails";
import { IngredientDetails } from "../ingredientDetails";
import { useSelector, useDispatch } from 'react-redux';
import { getItems, MODAL } from '../../service/action/cart';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const { items, itemsRequest, itemsFailed,
    modalOrder, modalIngredient, mainModal } =
    useSelector(state => state.reducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  const closeButton = () => {
    dispatch({
      type: MODAL,
      mainModal: false,
      modalOrder: false,
      modalIngredient: false,
    })
  }

  if (itemsRequest) return <div>ЗАГРУЗКА</div>
  if (itemsFailed) return <div>ОШИБКА</div>

  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        {items && (<main className={appStyle.main} tabIndex={0}>
          <BurgerIngredients />
          {items?.length && (<BurgerConstructors />)}
        </main>)}
      </DndProvider>
      {mainModal && (<Modal onClose={closeButton}>
        {modalOrder && <OrderDetails />}
        {modalIngredient && <IngredientDetails />}
      </Modal>)}
    </>
  );

};


export default App;
