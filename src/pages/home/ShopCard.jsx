import ShopInfo from './ShopInfo';
import { useState } from 'react';

const ShopCard = ({ shopData }) => {
  const [likes, setLikes] = useState(shopData.likes);

  const handleLikeChange = (newLikes) => {
    setLikes(newLikes);
  };
  return (
    <div className="shop-card">
      <ShopInfo
        shop={shopData.shop}
        likes={likes}
        productsCount={shopData.productsCount}
        products={shopData.products}
        onLikeChange={handleLikeChange}
      />
    </div>
  );
};

export default ShopCard;
