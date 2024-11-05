// 상점 정보 담당
import LikeButton from './LikeButton';
import ProductImages from './ProductImages';
import './ShopInfo.css';

const ShopInfo = ({
  shop,
  name,
  userId,
  likes,
  productsCount,
  products,
  onLikeChange,
  onCardClick,
  linkShopId,
}) => {
  return (
    <div className="shop-card-info" onClick={onCardClick}>
      <div className="shop-container">
        <div className="shop-profile-products">
          <div className="shop-profile">
            <img src={shop.imageUrl} alt={name} className="shop-image-url" />
            <div className="shop-name-id">
              <p className="shop-name">{name}</p>
              <p className="shop-id">@{userId}</p>
            </div>
          </div>
          <p className="shop-products">대표 상품 {productsCount}</p>
        </div>
        <div className="like-button">
          <LikeButton
            initialLikes={likes}
            onLikeChange={onLikeChange}
            linkShopId={linkShopId}
          />
          <p className="likes-count">{likes}</p>
        </div>
      </div>
      <div>
        <ProductImages products={products} />
      </div>
    </div>
  );
};

export default ShopInfo;
