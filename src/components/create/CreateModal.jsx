// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateModal.css';

// const CreateModal = ({ isOpen, modalType, width, height, borderRadius }) => {
//   const navigate = useNavigate();
//   const handleGopageClick = () => {
//     navigate(`/link/{linkid}`);
//   };

//   if (!isOpen) return null;

//   const modalStyle = {
//     width: width || '400px',
//     height: height || '400px',
//     borderRadius: borderRadius || '8px',
//   };

//   return (
//     <div className="modal-overlay">
//       <div
//         className={`modal ${modalType === 'bottom' ? 'modal-bottom' : ''}`}
//         style={modalStyle}
//       >
//         등록이 완료되었습니다.
//         <button
//           className="detail-create-button"
//           onClick={handleGopageClick}
//         ></button>
//       </div>
//     </div>
//   );
// };

const CreateModal = ({
  isOpen,
  modalType,
  width,
  height,
  borderRadius,
  modalMessage,
  onClick,
}) => {
  const modalStyle = {
    width: width || '400px',
    height: height || '400px',
    borderRadius: borderRadius || '8px',
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className={`modal ${modalType === 'bottom' ? 'modal-bottom' : ''}`}
        style={modalStyle}
      >
        {modalMessage}
        <button className="close-button" onClick={onClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CreateModal;
