import { useEffect, useState } from 'react';
import { filterBtn, check } from '../../images/icons';
import Modal from '../common/Modal';
import './ShopSort.css';

const ShopSort = ({ orderBy, onSortChange }) => {
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [sortButtonText, setSortButtonText] = useState('상세 필터');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sortOptions = {
    recent: { label: '최신순' },
    likes: { label: '좋아요순' },
    productsCount: { label: '등록된 상품순' },
  };

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
    setSortButtonText(sortOptions[sortOption].label);
    setSortModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sort-container">
      <div className="shop-sort-filter">
        <span>{sortButtonText}</span>
        <button
          onClick={() => setSortModalOpen(true)}
          className="detail-filter"
        >
          <img src={filterBtn} alt="필터 버튼" className="button" />
        </button>
      </div>
      <Modal
        width={isMobile ? '100%' : '375px'}
        height="300px"
        borderRadius={isMobile ? '24px 24px 0 0' : '24px'}
        isOpen={sortModalOpen}
        onClose={() => setSortModalOpen(false)}
        modalType={isMobile ? 'bottom' : 'center'}
        className="sort-modal"
      >
        <p className="filter">정렬</p>
        <div>
          <div className="sort-option">
            <button
              onClick={() => handleSortChange('recent')}
              className={`filter-name ${orderBy === 'recent' ? 'selecte' : ''}`}
            >
              {sortOptions.recent.label}
            </button>
            {orderBy === 'recent' && (
              <img src={check} alt="선택" className="selecte-image" />
            )}
          </div>
          <div className="filter-divider"></div>
          <div className="sort-option">
            <button
              onClick={() => handleSortChange('likes')}
              className={`filter-name ${orderBy === 'likes' ? 'selecte' : ''}`}
            >
              {sortOptions.likes.label}
            </button>
            {orderBy === 'likes' && (
              <img src={check} alt="선택" className="selecte-image" />
            )}
          </div>
          <div className="filter-divider"></div>
          <div className="sort-option">
            <button
              onClick={() => handleSortChange('productsCount')}
              className={`filter-name ${orderBy === 'productsCount' ? 'selecte' : ''}`}
            >
              {sortOptions.productsCount.label}
            </button>
            {orderBy === 'productsCount' && (
              <img src={check} alt="선택" className="selecte-image" />
            )}
          </div>
          <div className="filter-divider"></div>
        </div>
      </Modal>
    </div>
  );
};

export default ShopSort;
