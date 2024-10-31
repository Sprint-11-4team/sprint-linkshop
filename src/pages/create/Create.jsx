import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import CreateProductInput from '../../components/create/CreateProductInput';
import CreateButton from '../../components/create/CreateButton';
import CreateShopInput from '../../components/create/CreateShopInput';
import '../../components/create/Create.css';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';

function Create() {
  // 인풋 초기 상태 저장
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  // 오류 메시지 상태 저장
  const [userIdMessage, setUserIdMessage] = useState('');

  // 유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  // 이름, 상품 가격, 쇼핑몰 URL 에도 유효성 검사를 해야 하는지 고민

  const onChangeUserName = (e) => {
    const currentUserName = e.target.value;
    setUserName(currentUserName);
  };

  const onChangeUserId = (e) => {
    const currentUserId = e.target.value;
    setUserId(currentUserId);
    const userIdRegExp = /^A-Za-z0-9&/;

    if (!userIdRegExp.test(currentUserId)) {
      setUserIdMessage('아이디에 띄어쓰기, 특수기호를 사용할 수 없습니다.');
      setIsUserId(false);
    } else {
      setUserIdMessage('사용할 수 있는 아이디입니다.');
      setIsUserId(true);
    }
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div className="create-input-wrapper">
          <CreateInput
            label="이름"
            name="name"
            value={userName}
            placeholder="표시하고 싶은 이름을 적어 주세요."
            onChange={onChangeUserName}
          />
          <CreateInput
            label="아이디"
            name="userId"
            value={userId}
            placeholder="URL로 사용될 아이디를 입력해주세요."
            onChange={onChangeUserId}
            message={userIdMessage}
          />
          <CreatePasswordButton />
          <div className="create-input-package-wrapper">
            <div className="create-input-package-title">
              <h3>대표 상품</h3>
              <AddButton />
            </div>
            <CreateProductInput />
            <CreateProductInput />
          </div>
          <div className="create-input-package-wrapper">
            <div className="create-input-package-title">
              <h3>내 쇼핑몰</h3>
              <AddButton />
            </div>
            <CreateShopInput />
          </div>
          <CreateButton />
        </div>
      </form>
    </div>
  );
}

export default Create;
