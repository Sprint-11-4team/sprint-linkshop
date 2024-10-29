
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import CardList from './CardList';
import ToastPopup from '../../components/common/ToastPopup';
import Modal from '../../components/common/Modal';

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/modify');
  };

  const handleOkClick = () => {
    // 다른동작
    console.log('동작진행');
    setOpenPopupTwo(false);
  };

  return (
    <>
      <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
      <SearchInput />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="/detail">detail - 임시링크</a>
        <br />
        <a href="/modify">modify - 임시링크</a>
        <div>
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Home;
