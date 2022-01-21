import React from 'react';
import burgerPiceStyle from './burgerPice.module.css';

const BurgerPice = (props: any) => {

    const {image, alt, price, 
        reactNode, name } = props;


    return (
        <li className={burgerPiceStyle.pice} >
            <img className='mb-2' alt = { alt } src = { image }></img>
            <div className ={ burgerPiceStyle.discription }>
                <p style={{ margin:0 }} className='className="text text_type_digits-default'>{ price }</p>
                { reactNode }
            </div>
            <p className= {'mt-1 mb-1 text text_type_main-default ' + burgerPiceStyle.text} >{ name }</p>
        </li>
    )
}

export default BurgerPice;

