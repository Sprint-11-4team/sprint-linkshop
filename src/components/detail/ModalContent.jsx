import React from 'react';
import './ModalContent.css';

const ModalContent = ({ onModalClick }) => {
  const handlePwChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="detail-modal">
      <div className="detail-modal__label">비밀번호 입력</div>
      <div className="detail-modal__text">
        편집하기 위해 설정한 비밀번호를 입력하세요
      </div>
      <div>
        <div style={{ width: '392px' }}>
          <label className="detail-create-label">
            비밀번호
            <input
              className="detail-create-input"
              placeholder="비밀번호를 입력해 주세요."
              onChange={handlePwChange}
              required
            />
          </label>
        </div>
      </div>
      <button className="detail-create-button">편집 시작하기</button>
      {/* <CreateButton /> */}
      {/* 여기부분 css를 파랑버튼 필요 */}
    </div>
  );
};

export default ModalContent;
