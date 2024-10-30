import React from 'react';
import { edit, heartEmpty, share } from '../../images/icons';
import './ShopCard.css';

const ShopCard = ({
  onClickModify,
  onClickHeart,
  onShareClick,
  detailData,
  likes,
}) => {
  if (!detailData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const { name, userId, shop } = detailData;

  const handleHeartClick = () => {};

  return (
    <div className="shopcard-containter">
      <div className="shopcard-content">
        <div className="shopcard-header">
          <div className="shopcard-header__heart">
            <img
              src={heartEmpty}
              alt="좋아요아이콘"
              className="heart-image"
              onClick={onClickHeart}
            ></img>
            <div onClick={handleHeartClick}>{likes}</div>
          </div>
          <div className="shopcard-header__iconarea">
            <img
              src={share}
              alt="공유하기아이콘"
              onClick={onShareClick}
              className="share-image"
            ></img>
            <img
              src={edit}
              alt="작성하기아이콘"
              onClick={onClickModify}
              className="edit-image"
            ></img>
          </div>
        </div>
        <div className="shopcard-center">
          <img
            src={shop.imageUrl}
            alt="샵대표이미지"
            className="shopcard-center__image"
          ></img>
          <div className="shopcard-center__name">{name}</div>
          <div className="shopcard-center__id">{userId}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
