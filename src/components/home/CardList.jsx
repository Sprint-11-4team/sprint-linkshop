import ShopCardInfo from './ShopCardInfo';
import './CardList.css';

const CardList = ({ shops, renderKey }) => {
  return (
    <div className="shop-card-list-parent">
      <div className="shop-card-list">
        {shops.map((shop) => (
          <div key={`${shop.id}-${shop.name}`}>
            <ShopCardInfo shopData={shop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
