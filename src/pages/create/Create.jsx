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
  const [userInfo, setUserInfo] = useState({
    name: '',
    userId: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const { name, userId } = userInfo;

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
            value={name}
            placeholder="표시하고 싶은 이름을 적어 주세요."
            onChange={handleInputChange}
          />
          <CreateInput
            label="아이디"
            name="userId"
            value={userId}
            placeholder="아이디를 입력해주세요."
            onChange={handleInputChange}
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
