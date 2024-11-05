import React, { useRef, useState } from 'react';
import './ModalContent.css';
import { useNavigate } from 'react-router-dom';
import useAsync from '../../api/useAsync';
import { fetchDelete } from '../../api/detailApi';

const ModalContent = ({ types, detailData, onSuccessDel, onFailDel }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [error, setError] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState('');

  const [isLoadingDel, loadingErrorDel, deleteDataAsync] = useAsync(() =>
    fetchDelete({
      teamId: '11-4',
      linkShopId: `${detailData.id}`,
      currentPassword: inputRef.current.value,
    }),
  );

  const getMessage = (type) => {
    return type === 'modify' ? '수정' : '삭제';
  };

  const handleGopageClick = () => {
    navigate(`/link/${detailData.id}/edit?pwd=${inputRef.current.value}`);
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

  const handleChangeInput = () => {
    //   // 비밀번호, 영문+숫자 최소 6자 이상
    const password = inputRef.current.value;
    if (
      password.length < 6 ||
      !/[A-Za-z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setError(true);
      setPasswordMessage('영문을 포함한 숫자 6자 이상을 입력해주세요.');
    } else {
      setError(false);
      setPasswordMessage('');
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
          <label
            className={`detail-create-label ${passwordMessage !== '' ? 'error' : ''}`}
          >
            비밀번호
            <input
              type="password"
              className="detail-create-input"
              placeholder="비밀번호를 입력해 주세요."
              ref={inputRef}
              required
              onBlur={handleChangeInput}
            />
          </label>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <p className="detail-password-message">{passwordMessage}</p>
      </div>
      {types === 'modify' ? (
        <button
          className="detail-create-button"
          onClick={handleGopageClick}
          disabled={error}
        >
          편집 시작하기
        </button>
      ) : (
        <button
          className="detail-create-button"
          onClick={handleDelete}
          disabled={error}
        >
          삭제하기
        </button>
      )}
      {/* <CreateButton /> */}
      {/* 여기부분 css를 파랑버튼 필요 */}
    </div>
  );
};

export default ModalContent;
