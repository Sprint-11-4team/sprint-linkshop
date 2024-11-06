import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import ShopList from '../../components/home/ShopList';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import InfiniteScrollList from '../../components/home/ScrollHandler';
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
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState('recent');

  const resetCursor = useCallback(() => {
    setShopList([]);
    setVisibleShops([]);
    setCurrentCursor(null);
    setIsLast(false);
    setIsMore(true);
  }, []);

  const fetchShops = useCallback(
    async (cursor) => {
      setLoading(true);
      try {
        const { list, nextCursor } = await fetchShopData({ cursor, orderBy });
        if (!nextCursor) {
          setIsLast(true);
        } else {
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
    },
    [orderBy],
  );

  useEffect(() => {
    if (isMore && !isLast) {
      fetchShops(currentCursor);
    }
  }, [isMore, currentCursor, isLast, orderBy, fetchShops]);

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

  const handleSortChange = (newOrderBy) => {
    setOrderBy(newOrderBy);
    resetCursor();
  };

  const onLoadMore = () => {
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
      <ShopSort orderBy={orderBy} onSortChange={handleSortChange} />
      <ShopList visibleShops={visibleShops} />
      <InfiniteScrollList loading={loading} onLoadMore={onLoadMore} />
    </>
  );
};

export default Home;
