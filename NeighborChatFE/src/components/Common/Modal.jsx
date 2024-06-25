import React from 'react';
import './Modal.module.css';

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
