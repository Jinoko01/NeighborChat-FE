import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <div className="ModalOverlay">
      <div className="ModalContent">
        {children}
      </div>
    </div>
  );
};

export default Modal;
