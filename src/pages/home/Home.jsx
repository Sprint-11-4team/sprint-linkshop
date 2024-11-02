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
  const [shopList, setShopList] = useState([]);
  const [visibleShops, setVisibleShops] = useState([]);
  const [currentCursor, setCurrentCursor] = useState(null);
  const [isMore, setIsMore] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchShops = async (cursor) => {
    setLoading(true);

    try {
      const { list, nextCursor } = await fetchShopData({
        cursor,
        keyword: null,
      });

      if (!nextCursor) {
        console.log('[!nextCursor]>>', nextCursor);
        setIsLast(true);
      } else {
        console.log('[nextCursor]>>', nextCursor);
        setCurrentCursor(nextCursor);
      }
      setShopList((prev) => [...prev, ...list]);
      setVisibleShops((prev) => [...prev, ...list]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
      setIsMore(false);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (isMore && !isLast) {
      fetchShops(currentCursor);
    }
  }, [currentCursor, isMore, isLast]);

  useEffect(() => {
    const filtered = shopList.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered);
  }, [searchShop, shopList]);

  const handleSearchChange = (value) => {
    setSearchShop(value);
  };

  const handleButtonClick = () => {
    navigate('/linkpost');
  };

  const handleSortDataChange = (sortData) => {
    setShopList(sortData);
    // setPage(1);
    const filtered = sortData.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered);
  };

  const onLoadMore = () => {
    console.log('onLoadMore');
    setIsMore(true);
  };

  if (pageLoading) {
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
      <ScrollHandler loading={loading} onLoadMore={onLoadMore} />
    </>
  );
};

export default Home;
