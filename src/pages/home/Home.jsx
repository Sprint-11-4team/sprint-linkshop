import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import ShopList from '../../components/home/ShopList';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ScrollHandler from '../../components/home/ScrollHandler';
import { fetchShopData } from '../../api/homeApi';
import ShopSort from '../../components/home/ShopSort';

const Home = () => {
  const navigate = useNavigate();
  const [searchShop, setSearchShop] = useState('');
  const [sortedShops, setSortedShops] = useState([]);
  const [visibleShops, setVisibleShops] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const shopData = await fetchShopData();
        setSortedShops(shopData);
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
    const filtered = sortedShops.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered.slice(0, page * itemsPerPage));
  }, [searchShop, sortedShops, page]);

  const handleSearchChange = (value) => {
    setSearchShop(value);
    setPage(1);
  };

  const handleButtonClick = () => {
    navigate('/create');
  };

  const loadMoreShops = () => {
    if (visibleShops.length < sortedShops.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSortDataChange = (sortData) => {
    setSortedShops(sortData);
    setPage(1);
    const filtered = sortData.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered.slice(0, itemsPerPage));
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
      <ShopSort onSortDataChange={handleSortDataChange} />
      <ShopList visibleShops={visibleShops} />
      <ScrollHandler loadMore={loadMoreShops} />
    </>
  );
};

export default Home;
