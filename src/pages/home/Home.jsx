import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import CardList from './CardList';
import { fetchShopData } from '../../api/homeApi';
import NotFoundResults from '../../components/home/NotFoundResults';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchShop, setSearchShop] = useState(''); // 검색어 상태
  const [shopList, setShopList] = useState([]); // 전체 샵 목록
  const [visibleShops, setVisibleShops] = useState([]); // 화면에 보이는 샵 목록 상태
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  // 데이터 가져오기
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

  // 검색어 변경 시 필터링
  useEffect(() => {
    const filtered = shopList.filter((shop) =>
      shop.name.toLowerCase().includes(searchShop.toLowerCase()),
    );
    setVisibleShops(filtered.slice(0, page * itemsPerPage));
  }, [searchShop, shopList, page]);

  const handleSearchChange = (value) => {
    setSearchShop(value); // 검색어 업데이트
    setPage(1);
  };

  const handleButtonClick = () => {
    navigate('/create');
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 200
    ) {
      setPage((prevPage) => prevPage + 1); // 페이지 증가
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-icon"></div>
      </div>
    );
  }

  return (
    <>
      <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
      <SearchInput
        searchTerm={searchShop}
        onSearchChange={handleSearchChange}
      />
      <div>
        <div>
          {visibleShops.length > 0 ? (
            <CardList shops={visibleShops} />
          ) : (
            <NotFoundResults />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
