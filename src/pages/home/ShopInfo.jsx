// 상점 정보 담당
import LikeButton from './LikeButton';
import ProductImages from './ProductImages';
import './ShopInfo.css';

const ShopInfo = ({ shop, likes, productsCount, products, onLikeChange }) => {
  return (
    <div className="shop-card">
      <div className="shop-container">
        <div className="shop-profile-products">
          <div className="shop-profile">
            <img
              src={shop.imageUrl}
              alt={shop.urlName}
              className="shop-image"
            />
            <div className="shop-name-id">
              <p className="shop-name">{shop.urlName}</p>
              <p className="shop-id">@{shop.id}</p>
            </div>
          </div>
          <p className="shop-products">대표 상품 {productsCount}</p>
        </div>
        <div className="like-button">
          <LikeButton initialLikes={likes} onLikeChange={onLikeChange} />
          <p className="likes-count">{likes}</p>
        </div>
      </div>
      <ProductImages products={products} />
    </div>
  );
};

export default ShopInfo;