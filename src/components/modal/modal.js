import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import modalStyle from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modalOverlay';
import {useSelector, useDispatch } from 'react-redux';
import {MODAL} from '../../service/action/cart';

const modalDom = document.getElementById("modals");

const Modal = ({children}) => {
const mainModal = useSelector(store=>store.reducer.mainModal)
  const dispatch = useDispatch();
  const closeButton = () => {
    dispatch( {
      type: MODAL,
      mainModal: false,
      modalOrder: false,
      modalIngredient: false,
    })
  }

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
         closeButton();
      }
    });
  };

  const escClose = (e) => {
    e.preventDefault()
    if (e.key === "Escape") {
       closeButton();
    }
  };

  return ReactDOM.createPortal(
    (
    <div className={mainModal ? modalStyle.cover : modalStyle.off}>
      <div className={mainModal ? modalStyle.modal : modalStyle.off}>
          <button onClick={closeButton} className={modalStyle.button}>
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
  children: PropTypes.array.isRequired,
};

export default Modal;