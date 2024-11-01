import React, { useRef } from 'react';
import './ModalContent.css';
import { useNavigate } from 'react-router-dom';
import useAsync from '../../api/useAsync';
import { fetchDelete } from '../../api/detailApi';

const ModalContent = ({ types, detailData, onSuccessDel, onFailDel }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [isLoadingDel, loadingErrorDel, deleteDataAsync] = useAsync(() =>
    fetchDelete({
      teamId: '10-4',
      linkShopId: `${detailData.id}`,
      currentPassword: inputRef.current.value,
    }),
  );

  const getMessage = (type) => {
    return type === 'modify' ? '수정' : '삭제';
  };

  const handleGopageClick = () => {
    navigate(`/modify?pwd=${inputRef.current.value}`);
  };

  const handleDelete = async () => {
    let result = await deleteDataAsync();

    if (isLoadingDel || loadingErrorDel) {
      console.log('로딩중');
    }
    if (result.error || !result) {
      onFailDel();
    } else {
      onSuccessDel();
    }
  };

  return (
    <div className="detail-modal">
      <div className="detail-modal__label">비밀번호 입력</div>
      <div className="detail-modal__text">
        {getMessage(types)}하기 위해 설정한 비밀번호를 입력하세요
      </div>
      <div>
        <div style={{ width: '392px' }}>
          <label className="detail-create-label">
            비밀번호
            <input
              type="password"
              className="detail-create-input"
              placeholder="비밀번호를 입력해 주세요."
              ref={inputRef}
              required
            />
          </label>
        </div>
      </div>
      {types === 'modify' ? (
        <button className="detail-create-button" onClick={handleGopageClick}>
          편집 시작하기
        </button>
      ) : (
        <button className="detail-create-button" onClick={handleDelete}>
          삭제하기
        </button>
      )}
      {/* <CreateButton /> */}
      {/* 여기부분 css를 파랑버튼 필요 */}
    </div>
  );
};

export default ModalContent;
