import React, { useEffect, useState } from 'react';
import Banner from '../../components/detail/Banner';
import ShopCard from '../../components/detail/ShopCard';
import './Detail.css';
import { back } from '../../images/icons';
import Modal from '../../components/common/Modal';
import { Link } from 'react-router-dom';
import {
  fetchDeleteLike,
  fetchDetailData,
  fetchLike,
} from '../../api/detailApi';
import useAsync from '../../api/useAsync';
import Bottom from '../../components/detail/Bottom';
import LoadingSpinner from '../home/LoadingSpinner';
import ModalContent from '../../components/detail/ModalContent';
import ShopListBtn from '../../components/detail/ShopListBtn';

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

  // 좋아요클릭
  const handleLikeChange = async (newCount, isLiked) => {
    setLikes(newCount);
    const fetchFunction = isLiked ? fetchLike : fetchDeleteLike;

    try {
      await fetchFunction(params); // API 호출
    } catch (error) {
      console.error('error', error);
      setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    }
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

  if (isLoading || loadingError) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Banner />
      <div className="detail-container">
        <Link to="/list" className="detail-container__back">
          <img src={back} alt="뒤로가기버튼" className="back-image"></img>
          <div className="text">돌아가기</div>
        </Link>
        <ShopCard
          detailData={detailData}
          onClickModify={() => setModalOpen(true)}
          onLikeChange={handleLikeChange}
          onShareClick={handleShareClick}
          likes={likes}
        />
        <ShopListBtn />
        <Bottom />
      </div>
      <Modal
        modalType="none"
        width="438px"
        height="342px"
        borderRadius="30px"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ModalContent />
      </Modal>
    </div>
  );
};

export default Detail;
