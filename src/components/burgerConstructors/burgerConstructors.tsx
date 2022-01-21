import React from 'react';
import { ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import arr from '../utils/data';
import burgerConstructor from './burgerConstructor.module.css';

const burgerPices = arr.map((el) => {
    if(el.type !== "bun") {
        return (
    <div 
    key = {el._id}
    className = {burgerConstructor.burgerComponent}>
        <DragIcon type="primary" />
        <ConstructorElement
    text={ el.name }
    price={ el.price }
    thumbnail={ el.image_mobile }
        />
  </div>
  )}
})

const burgerBun = (id: any) => arr.find((el) => {
    return el._id === id
})

export const bun = burgerBun("60666c42cc7b410027a1a9b1");


const BurgerConstructors = (props : any) => {
const {bunObject} = props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} className={burgerConstructor.burgerConstructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunObject.name + ' (верх)'}
          price={bunObject.price}
          thumbnail={bunObject.image_mobile}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} className={burgerConstructor.burgerComponents}>
            {burgerPices}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunObject.name + ' (низ)'}
          price={bunObject.price}
          thumbnail={bunObject.image_mobile}
        />
      </div>
    )
  }


export default BurgerConstructors;











// const burgerComponent = arr.map((el) => {

//     return (
//         <BurgerComponents {...el}
//         key = {el._id}
//         alt = {el.name}
//         />
//     )
// })

// const BurgerConstructor = (props:any) => {
//     const { commonPrice } = props;
//     return (
//     <div className={'mt-10 ' + burgerConstructor.burgerConstructor}>
//         <ul className = {burgerConstructor.burgerList}>
//         { burgerComponent } 
//         </ul>
//         <div>
//             <p>{ commonPrice }</p>
//             <CurrencyIcon type="primary" />
//             <Button type="primary" size="medium">
//             Нажми на меня
//             </Button>
//         </div>
//     </div>
//     )
// }

// export default BurgerConstructor;