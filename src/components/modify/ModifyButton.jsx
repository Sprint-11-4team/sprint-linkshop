import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastPopup from '../common/ToastPopup.jsx';
import '../create/CreateButton.css';

const ModifyButton = ({ itemId }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsToastOpen(true);
  };

  const handleConfirmClick = () => {
    setIsToastOpen(false);
    navigate(`/link/${itemId}`);
  };

  return (
    <div>
      <button className="create-button" onClick={handleButtonClick}>
        수정하기
      </button>

      <ToastPopup
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
        text="수정이 완료되었습니다."
        isBtnOne={true}
        onClick={handleConfirmClick}
      />
    </div>
  );
};

export default ModifyButton;
