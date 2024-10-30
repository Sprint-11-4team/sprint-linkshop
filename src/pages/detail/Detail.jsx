import React, { useEffect, useState } from 'react';
import Banner from '../../components/detail/Banner';
import ShopCard from '../../components/detail/ShopCard';
import './Detail.css';
import { back } from '../../images/icons';
import Modal from '../../components/common/Modal';
import CreateForm from '../../components/create/CreateForm';
import CreateButton from '../../components/create/CreateButton';
import { Link } from 'react-router-dom';
import { fetchDetailData, fetchLike } from '../../api/detailApi';
import useAsync from '../../api/useAsync';

const Detail = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [detailData, setDetailData] = useState();
  const [likes, setLikes] = useState(0);
  const params = {
    teamId: '10-4',
    linkShopId: '55',
  };
  const [isLoading, loadingError, getReviewsAsync] = useAsync(() =>
    fetchDetailData(params),
  );

  // 수정하기팝업
  const handleClickModify = () => {
    setModalOpen(true);
  };

  // 좋아요클릭
  const handleClickHeart = () => {
    fetchLike(params);
    setLikes((prevLikes) => prevLikes + 1);
  };

  // 공유하기
  const handleShareClick = async () => {
    const { shop } = detailData;
    try {
      await navigator.clipboard.writeText(shop.shopUrl);
    } catch (error) {
      console.error('복사 실패!');
    }
  };

  const handleLoadData = async () => {
    let result = await getReviewsAsync();
    if (!result) return;
    setDetailData(result);
    setLikes(result.likes);
  };

  useEffect(() => {
    handleLoadData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Banner />
      {(isLoading || loadingError) && '로딩중'}
      <div className="detail-container">
        <Link to="/list" className="detail-container__back">
          <img src={back} alt="뒤로가기버튼" className="back-image"></img>
          <div className="text">돌아가기</div>
        </Link>
        <ShopCard
          detailData={detailData}
          onClickModify={handleClickModify}
          onClickHeart={handleClickHeart}
          onShareClick={handleShareClick}
          likes={likes}
        />
        <div>쇼핑몰</div>
        <Modal
          type="default"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          <div className="detail-modal">
            <div className="detail-modal__label">비밀번호 입력</div>
            <div className="detail-modal__text">
              편집하기 위해 설정한 비밀번호를 입력하세요
            </div>
            <CreateForm
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
            />
            <CreateButton />
            {/* 여기부분 css를 파랑버튼 필요 */}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Detail;
