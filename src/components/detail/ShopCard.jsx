import React, { useState } from 'react';
import { meatball, share } from '../../images/icons';
import './ShopCard.css';
import LikeButton from '../home/LikeButton';

const ShopCard = ({
  onClickModify,
  onClickDelete,
  onLikeChange,
  onShareClick,
  detailData,
  likes,
}) => {
  const { name, userId, shop, id } = detailData || {};
  const [hovered, setHovered] = useState(false);

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
            <div>
              <img
                alt="메뉴바"
                src={meatball}
                onMouseOver={() => {
                  setHovered((prevHovered) => !prevHovered);
                }}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
              ></img>
            </div>
            {hovered && (
              <div className="shopcard-header__dropdown show">
                <div className="dropdown-box-up" onClick={onClickModify}>
                  수정하기
                </div>
                <div
                  className="dropdown-box-down"
                  onClick={() => onClickDelete(id)}
                >
                  삭제하기
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="shopcard-center">
          {shop && shop.imageUrl ? (
            <img
              src={shop.imageUrl}
              alt="샵대표이미지"
              className="shopcard-center__image"
            />
          ) : (
            <div className="placeholder-image">이미지가 없습니다</div>
          )}
          <div className="shopcard-center__name">{name}</div>
          <div className="shopcard-center__id">@{userId}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
