import React from 'react';
import modalOverlay from './modalOverlay.module.css';

const ModalOverlay = (onClose) => {

    return (
        <div className={modalOverlay.overlay}
            onClick={onClose.onClose}
        ></div>
    )
}

export default ModalOverlay;