import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElements from '../burgerElements/burgerElements';
import BurgerPice from '../burgerPice/burgerPice'
import arr from '../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burgerIngredients.module.css'


const TurnTab = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
        </Tab>
      </div>
    )
  }

  const pice = arr.map((el) => {

    return (
        <BurgerPice { ...el }
        key = {el._id}
        alt = {el.name}
        reactNode = {<CurrencyIcon type="primary" />} />
    )
})
export const piceFilter = (element: any) => pice.filter((el) => {
    return el.props.type === element
})


const BurgerIngredients = () => {

return (<div className={burgerIngredientsStyle.ingredients}>
    <h2 className="text text_type_main-large mb-5" >Соберите Бургер</h2>
    <TurnTab />
    <ul className={burgerIngredientsStyle.list}>
    <BurgerElements label = 'Булки'
    reactNode = {piceFilter("bun")} />
        <BurgerElements label = 'Соусы'
    reactNode = {piceFilter("sauce")} />
        <BurgerElements label = 'Начинки'
    reactNode = {piceFilter("main")} />
    </ul>
</div>)
}

export default BurgerIngredients;



  