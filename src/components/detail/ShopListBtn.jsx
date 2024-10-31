import React from 'react';
import './ShopListBtn.css';
import { Link } from 'react-router-dom';

const ShopListBtn = () => {
  return (
    <div className="shoplistbtn-containter">
      <div className="shoplistbtn-text">대표 샵</div>
      <div className="shoplistbtn-area">
        <Link className="shoplistbtn">너구리 직구상점 공식 스토어</Link>
        <Link className="shoplistbtn">지그재그</Link>
        <Link className="shoplistbtn">카카오 쇼핑하기</Link>
        <Link className="shoplistbtn">지마켓</Link>
      </div>
    </div>
  );
};

export default ShopListBtn;
