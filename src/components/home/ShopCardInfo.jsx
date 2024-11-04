import { useNavigate } from 'react-router-dom';
import ShopInfo from './ShopInfo';
import { useState } from 'react';

const ShopCardInfo = ({ shopData }) => {
  const [likes, setLikes] = useState(shopData.likes);
  const detailNavigate = useNavigate();

  const handleLikeChange = (newLikes) => {
    setLikes(newLikes);
  };

  const handleCardClick = () => {
    detailNavigate(`/link/${shopData.id}`);
  };

  return (
    <div className="shop-card">
      <ShopInfo
        shop={shopData.shop}
        userId={shopData.userId}
        likes={likes}
        productsCount={shopData.productsCount}
        products={shopData.products}
        onLikeChange={handleLikeChange}
        onCardClick={handleCardClick}
        linkShopId={shopData.id}
      />
    </div>
  );
};

export default ShopCardInfo;
