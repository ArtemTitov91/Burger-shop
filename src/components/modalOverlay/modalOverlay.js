import React from 'react';
import modalOverlay from './modalOverlay.module.css';
import PropTypes from 'prop-types';
const ModalOverlay = (onClose) => {

    return (
        <div className={modalOverlay.overlay}
            onClick={onClose.onClose}
        ></div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default ModalOverlay;