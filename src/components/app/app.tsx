import React from "react";
import Header from "../header/header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import appStyle from "./app.module.css";
import BurgerConstructors from "../burgerConstructors/burgerConstructors";
import { bun } from "../burgerConstructors/burgerConstructors";

const App = () => {
  return (
    <>
      <Header />
      <main className={appStyle.main}>
        <BurgerIngredients />
        <BurgerConstructors bunObject={bun} />
      </main>
    </>
  );
};

export default App;
