import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import modalStyle from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modalOverlay';

const modalDom = document.getElementById("modals");

const Modal = ({ oneClick, modal, children }) => {

  useEffect(() => {
    document.addEventListener("keydown", escClose);
    document.addEventListener("click", overflowClose);
    return () => {
      document.removeEventListener("keydown", escClose);
      document.removeEventListener("click", overflowClose);
    };
  }, []);

  const overflowClose = (e) => {
    document.querySelectorAll("#count").forEach((el) => {
      if (e.target === el) {
        { oneClick() };
      }
    });
  };

  const escClose = (e) => {
    if (e.key === "Escape") {
      { oneClick() };
    }
  };

  return ReactDOM.createPortal(
    (<div className={modal ? modalStyle.modal : modalStyle.off}>
      <div className={modal ? modalStyle.modal : modalStyle.off}>
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
      <ModalOverlay />
    </div>

    ),
    modalDom
  )

}

Modal.propTypes = {
  oneClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  modal: PropTypes.bool.isRequired,
};

export default Modal;