import ShopCard from './ShopCard';
import './CardList.css';

const CardList = ({ shops }) => {
  return (
    <div className="shop-card-list-parent">
      <div className="shop-card-list">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shopData={shop} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
