import React from 'react';
import Banner from '../../components/detail/Banner';
import ShopCard from '../../components/detail/ShopCard';
import './Detail.css';
import { back } from '../../images/icons';

const Detail = () => {
  return (
    <div>
      <Banner />
      <div className="detail-container">
        <div className="detail-container__back">
          <img src={back} alt="뒤로가기버튼" className="back-image"></img>
          <div className="text">돌아가기</div>
        </div>
        <ShopCard />
        <div>쇼핑몰</div>
      </div>
    </div>
  );
};

export default Detail;
