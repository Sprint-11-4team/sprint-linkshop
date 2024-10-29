import { checkIcon } from '../../images/icons';
import './ToastPopup.css';

const ToastPopup = ({ isOpen, onClose, text, isBtnOne, onClick }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="popup-overlay">
      <div onClick={(e) => e.stopPropagation()} className="popup">
        {isBtnOne ? (
          <>
            <div className="popup-text">{text}</div>
            <div className="popup-btn-area">
              <button onClick={onClose} className="popup-btn-confirm__large">
                확인
              </button>
            </div>
          </>
        ) : (
          <>
            <img src={checkIcon} alt="삭제체크" className="popup-icon" />
            <div className="popup-text">{text}</div>
            <div className="popup-btn-area">
              <button onClick={onClose} className="popup-btn-close">
                취소
              </button>
              <button onClick={onClick} className="popup-btn-confirm">
                확인
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToastPopup;
