import React from 'react';
import { edit, heartEmpty, share } from '../../images/icons';
import shopImg from '../../images/shopInfo.png';
import './ShopCard.css';

const ShopCard = () => {
  return (
    <div className="shopcard-containter">
      <div className="shopcard-content">
        <div className="shopcard-header">
          <div className="shopcard-header__heart">
            <img
              src={heartEmpty}
              alt="좋아요아이콘"
              className="heart-image"
            ></img>
            <div>65</div>
          </div>
          <div className="shopcard-header__iconarea">
            <img src={share} alt="공유하기아이콘" className="share-image"></img>
            <img src={edit} alt="작성하기아이콘" className="edit-image"></img>
          </div>
        </div>
        <div className="shopcard-center">
          <img
            src={shopImg}
            alt="샵대표이미지"
            className="shopcard-center__image"
          ></img>
          <div className="shopcard-center__name">너구리 직구상점</div>
          <div className="shopcard-center__id">@pumpkinraccoon</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
