import './NotFoundResults.css';
import NotFound from '../../images/icons/not-found.png';

const NotFoundResults = () => {
  return (
    <>
      <div className="not-found-container">
        <img src={NotFound} className="not-found-icon" alt="not-found-icon" />
        <div className="not-found-info">
          검색 결과가 없어요<br></br>
          지금 프로필을 만들고 내 상품을 소개해보세요
        </div>
      </div>
    </>
  );
};

export default NotFoundResults;
