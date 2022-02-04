import React, { ReactNode } from "react";
import burgerPiceStyle from "./burgerPice.module.css";

type componentProps = {
  image: string;
  alt:string;
  price:string;
  name:string;
  oneClick:any;
  reactNode: ReactNode;
  
};


const BurgerPice = (props: componentProps) => {
  const { image, alt, price, reactNode, name, oneClick } = props;

  return (
    <div className={burgerPiceStyle.pice} onClick={oneClick}>
      <img className="mb-2" alt={alt} src={image}></img>
      <div className={burgerPiceStyle.discription}>
        <p
          style={{ margin: 0 }}
          className='className="text text_type_digits-default'
        >
          {price}
        </p>
        {reactNode}
      </div>
      <p
        className={
          "mt-1 mb-1 text text_type_main-default " + burgerPiceStyle.text
        }
      >
        {name}
      </p>
    </div>
  );
};

export default BurgerPice;
