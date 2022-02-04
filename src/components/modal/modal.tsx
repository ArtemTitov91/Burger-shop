import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import modalStyle from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const modalDom = document.getElementById("modals")!;

const Modal = ( props:any) => {
    
    const {oneClick, modal, children} = props;


    useEffect(() => {
        document.addEventListener("keydown", escClose);
        document.addEventListener("click", overflowClose);
        return () => {
          document.removeEventListener("keydown", escClose);
          document.removeEventListener("click", overflowClose);
        };
      }, []);

      const overflowClose = (e: any) => {
        document.querySelectorAll("#count").forEach((el) => {
          if (e.target === el) {
            {oneClick()};
          }
        });
      };
    
      const escClose = (e: any) => {
        if (e.key === "Escape") {
          {oneClick()};
        }
      };

    return ReactDOM.createPortal(
        (
            <div    
      id="count"
      className={modal ? modalStyle.modal : modalStyle.off}
    >
        <div className={modalStyle.coverTitle}>
        <p className={"text text_type_main-large " + modalStyle.title}>
          Детали ингредиента
        </p>
        <button onClick={oneClick} className={modalStyle.button}>
          <CloseIcon type={"primary"} />
        </button>
      </div>
      {children}
    </div>
        
    
            ),
        modalDom
    )

}


      export default Modal;