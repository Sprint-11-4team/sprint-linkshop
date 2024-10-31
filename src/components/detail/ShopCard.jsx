import React from 'react';
import { edit, share } from '../../images/icons';
import './ShopCard.css';
import LikeButton from '../../pages/home/LikeButton';

const ShopCard = ({
  onClickModify,
  onLikeChange,
  onShareClick,
  detailData,
  likes,
}) => {
  if (!detailData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const { name, userId, shop } = detailData;

  return (
    <div className="shopcard-containter">
      <div className="shopcard-content">
        <div className="shopcard-header">
          <div className="shopcard-header__heart">
            <LikeButton initialLikes={likes} onLikeChange={onLikeChange} />
            <p className="likes-count">{likes}</p>
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
