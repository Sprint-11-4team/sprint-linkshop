import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import ShopList from './ShopList';
import LoadingSpinner from './LoadingSpinner';
import ScrollHandler from './ScrollHandler';
import { fetchShopData } from '../../api/homeApi';

const Home = () => {
  const navigate = useNavigate();
  const [searchShop, setSearchShop] = useState('');
  const [shopList, setShopList] = useState([]);
  const [visibleShops, setVisibleShops] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const shopData = await fetchShopData();
        setShopList(shopData);
        setVisibleShops(shopData.slice(0, itemsPerPage));
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShops();
  }, []);

  useEffect(() => {
    const filtered = shopList.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered.slice(0, page * itemsPerPage));
  }, [searchShop, shopList, page]);

  const handleSearchChange = (value) => {
    setSearchShop(value);
    setPage(1);
  };

  const handleButtonClick = () => {
    navigate('/linkpost');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
      <SearchInput
        searchTerm={searchShop}
        onSearchChange={handleSearchChange}
      />
      <ShopList visibleShops={visibleShops} />
      <ScrollHandler setPage={setPage} />
    </>
  );
};

export default Home;
