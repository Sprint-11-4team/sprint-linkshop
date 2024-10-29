import React, { useState } from 'react';
import './SearchInput.css';
import search from '../../images/icons/search.png';
import NotFoundResults from './NotFoundResults';

// 샵 리스트 (API로 데이터를 가져올 경우 이 부분을 fetch로 대체)
const shops = [
  { id: 1, name: '너구리 직구 상점' },
  { id: 2, name: '코드잇 상점' },
  { id: 3, name: '당근 마켓' },
  { id: 4, name: '스프린트 마켓' },
];

const SearchInput = () => {
  const [searchShop, setSearchShop] = useState(''); // 검색어 상태
  const [visibleShops, setVisibleShops] = useState(shops); // 화면에 보이는 샵 목록 상태

  // 입력된 검색어에 맞는 샵 필터링 함수
  const handleSearchChange = (e) => {
    const newShopList = e.target.value;
    setSearchShop(newShopList);

    // 검색어에 포함된 샵 이름을 필터링
    const filtered = shops.filter((shop) => shop.name.includes(newShopList));
    setVisibleShops(filtered); // 필터링된 샵 목록을 업데이트
  };

  return (
    <div>
      <form className="search-form">
        <div className="search-container">
          <img src={search} className="search-icon" alt="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="제목으로 검색해 보세요."
            value={searchShop}
            onChange={handleSearchChange} // 검색어 변경 시 필터링
          />
        </div>
      </form>

      {visibleShops.length > 0 ? ( // 검색된 샵이 있을 경우
        visibleShops.map((shop) => <div key={shop.id}>{shop.name}</div>) //각 샵의 이름을 표시
      ) : (
        //없을경우 아래 컴포넌트 표시
        <div>
          <NotFoundResults />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
