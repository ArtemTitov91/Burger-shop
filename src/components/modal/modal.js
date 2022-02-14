import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import modalStyle from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modalOverlay';

const modalDom = document.getElementById("modals");

const Modal = ({ onClose, modal, children}) => {

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
        { onClose() };
      }
    });
  };

  const escClose = (e) => {
    e.preventDefault()
    if (e.key === "Escape") {
      { onClose() };
    }
  };

  return ReactDOM.createPortal(
    (
    <div className={modal ? modalStyle.cover : modalStyle.off}>
      <div className={modal ? modalStyle.modal : modalStyle.off}>
          <button onClick={onClose} className={modalStyle.button}>
            <CloseIcon type={"primary"} />
          </button>
        {children}
      </div>
      <ModalOverlay />
    </div>
    ),
    modalDom
  )

}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  modal: PropTypes.bool.isRequired,
};

export default Modal;