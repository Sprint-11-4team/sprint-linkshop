import React from 'react';
import './Modal.css';
import { close } from '../../images/icons';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img
          src={close}
          alt="모달창닫기버튼"
          className="close-button"
          onClick={onClose}
        ></img>
        {children}
      </div>
    </div>
  );
};

export default Modal;
