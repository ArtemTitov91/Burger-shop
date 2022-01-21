import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderItems from './items/header__items'
import  header from './header.module.css';



const headerItemsArr =[ 
    {
    icon: <BurgerIcon type="secondary" />,
    discription: 'Конструктор',
    link: '#',
    id: 1
},
{
    icon: <ListIcon type="secondary" />,
    discription: 'Лента Заказов',
    link: '#',
    id: 2
}
];

   
const headerItems = headerItemsArr.map((el) =>{
    return (
        <HeaderItems { ...el }
        key = {el.id} />
    )
})

   const Header = () => {

        return (<header className = {header.header} >
            <div className = {header.info}>
            {headerItems}
            <div className={header.logo}><Logo /></div>
            <HeaderItems icon = { <ProfileIcon type="secondary" /> }
            discription='Личный кабинет'
            link='#'

            />
            </div>
        </header>)
    }


export default Header;