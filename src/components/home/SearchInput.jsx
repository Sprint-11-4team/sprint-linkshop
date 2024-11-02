import './SearchInput.css';
import search from '../../images/icons/search.png';

const SearchInput = ({ searchShop, onSearchChange }) => {
  return (
    <div>
      <form className="search-form">
        <div className="search-container">
          <img src={search} className="search-icon" alt="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="샵 이름으로 검색해 보세요."
            value={searchShop}
            onChange={(e) => onSearchChange(e.target.value)} // 검색어 변경 시 필터링
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
