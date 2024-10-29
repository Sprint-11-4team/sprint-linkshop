import React, { useState } from 'react';
import Banner from '../../components/detail/Banner';
import ShopCard from '../../components/detail/ShopCard';
import './Detail.css';
import { back } from '../../images/icons';
import Modal from '../../components/common/Modal';
import CreateForm from '../../components/create/CreateForm';
import CreateButton from '../../components/create/CreateButton';

const Detail = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClickModify = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Banner />
      <div className="detail-container">
        <div className="detail-container__back">
          <img src={back} alt="뒤로가기버튼" className="back-image"></img>
          <div className="text">돌아가기</div>
        </div>
        <ShopCard onClickModify={handleClickModify} />
        <div>쇼핑몰</div>
        <Modal
          type="default"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          <div className="detail-modal">
            <div className="detail-modal__label">비밀번호 입력</div>
            <div className="detail-modal__text">
              편집하기 위해 설정한 비밀번호를 입력하세요
            </div>
            <CreateForm
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
            />
            <CreateButton />
            {/* 여기부분 css를 파랑버튼 필요 */}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Detail;
