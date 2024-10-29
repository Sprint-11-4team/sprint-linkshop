import React, { useState } from 'react';
import ToastPopup from '../../components/common/ToastPopup';
import Modal from '../../components/common/Modal';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const RootPage = () => {
  const [openPopupOne, setOpenPopupOne] = useState(false);
  const [openPopupTwo, setOpenPopupTwo] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOkClick = () => {
    // 다른동작
    console.log('동작진행');
    setOpenPopupTwo(false);
  };

  const handleButtonClick = () => {
    navigate('/modify');
  };

  return (
    <>
      <div>
        <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="/detail">detail - 임시링크</a>
        <br />
        <a href="/modify">modify - 임시링크</a>
      </div>
      <div>
        <br />
        <br />
        <br />
        <button onClick={() => setOpenPopupOne(true)}>팝업 클릭 1</button>
        <button onClick={() => setOpenPopupTwo(true)}>팝업 클릭 2</button>
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
        <ToastPopup
          isOpen={openPopupOne}
          onClose={() => setOpenPopupOne(false)}
          text="등록이 완료되었습니다."
          isBtnOne={true}
        ></ToastPopup>
        <ToastPopup
          isOpen={openPopupTwo}
          onClose={() => setOpenPopupTwo(false)}
          text="정말 삭제하시겠어요?"
          onClick={handleOkClick}
        ></ToastPopup>
        <Modal
          type="default"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        ></Modal>
      </div>
    </>
  );
};

export default RootPage;