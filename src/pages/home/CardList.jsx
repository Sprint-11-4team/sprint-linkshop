import { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import './CardList.css';

const CardList = () => {
  const [shopCardList, setShopCardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://linkshop-api.vercel.app/10-4/linkshops',
        );
        if (!response.ok) {
          throw new Error('네트워크가 응답하지 않습니다.');
        }
        const shopData = await response.json();
        setShopCardList(shopData.list);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>로딩중</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="shop-card-list-parent">
      <div className="shop-card-list">
        {shopCardList.map((shop) => (
          <ShopCard key={shop.id} shopData={shop} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
