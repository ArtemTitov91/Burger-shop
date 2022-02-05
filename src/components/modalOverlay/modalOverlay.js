import React from 'react';
import modalOverlay from './modalOverlay.module.css';

const ModalOverlay = () => {
    return(
        <div id="count" className={modalOverlay.overlay}></div>
    )
}

export default ModalOverlay;