// import './CreateModal.css';
// import { useNavigate } from 'react-router-dom';

// const ModalContent = () => {
//   const navigate = useNavigate();
//   const handleGopageClick = () => {
//     navigate('/link');
//   };

//   return (
//     <div className="detail-modal">
//       <div className="detail-modal__text">등록이 완료되었습니다.</div>
//       <button className="detail-create-button" onClick={handleGopageClick}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default ModalContent;
import React from 'react';
import './CreateModal.css';
// import { close } from '../../images/icons';

const Modal = ({
  isOpen,
  // children,
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
        {/* {children} */}
      </div>
    </div>
  );
};

export default Modal;
