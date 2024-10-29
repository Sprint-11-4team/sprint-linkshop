import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import CreateInputPackage from '../../components/create/CreateInputPackage';
import CreateButton from '../../components/create/CreateButton';
import '../../components/create/Title.css';
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

  const { name, userId, password } = userInfo;

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div>
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
          <div>
            <CreateInput
              className="passwordInput"
              label="비밀번호"
              name="password"
              value={password}
              placeholder="숫자 4자리를 입력해주세요."
              onChange={handleInputChange}
            />
            <CreatePasswordButton />
          </div>
          <h3 className="create-h3">
            대표 상품
            <AddButton />
          </h3>
          {/* h3 대신 SectionTitle로? */}
          <CreateInputPackage />
          <CreateInputPackage />
          <h3 className="create-h3">
            내 쇼핑몰
            <AddButton />
          </h3>
          <CreateInputPackage />
          <CreateButton />
        </div>
      </form>
    </div>
  );
}

export default Create;
