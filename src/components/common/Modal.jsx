import React from 'react';
import './Modal.css';
import { close } from '../../images/icons';

const Modal = ({
  isOpen,
  onClose,
  children,
  modalType,
  width,
  height,
  borderRadius,
}) => {
  if (!isOpen) return null;

  const modalStyle = {
    width: width || '400px', // 기본 너비 설정
    height: height || '400px', // 기본 높이 설정
    borderRadius: borderRadius || '8px', // 기본 테두리 반경 설정
  };

  return (
    <div className="modal-overlay">
      <div
        className={`modal ${modalType === 'bottom' ? 'modal-bottom' : ''}`}
        style={modalStyle}
      >
        <img
          src={close}
          alt="모달창닫기버튼"
          className="close-button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
