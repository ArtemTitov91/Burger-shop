import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import modalStyle from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modalOverlay';
import { useSelector } from 'react-redux';


const modalDom = document.getElementById("modals");

const Modal = ({ onClose, children }) => {
  const mainModal = useSelector(store => store.reducer.mainModal)

  useEffect(() => {
    document.addEventListener("keydown", escClose);
    return () => {
      document.removeEventListener("keydown", escClose);
    };
  }, []);

  const escClose = (e) => {
    e.preventDefault()
    if (e.key === "Escape") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    (
      <div className={mainModal ? modalStyle.cover : modalStyle.off}>
        <div className={mainModal ? modalStyle.modal : modalStyle.off}>
          <button onClick={onClose} className={modalStyle.button}>
            <CloseIcon type={"primary"} />
          </button>
          {children}
        </div>
        <ModalOverlay onClose={onClose} />
      </div>
    ),
    modalDom
  )

}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;