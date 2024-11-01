import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import CreateProductInput from '../../components/create/CreateProductInput';
import CreateButton from '../../components/create/CreateButton';
// import CreateShopInput from '../../components/create/CreateShopInput';
import '../../components/create/Create.css';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import ItemImgInput from '../../components/create/ItemImgInput';

function Create() {
  const [shopName, setShopName] = useState();
  const [Url, setUrl] = useState();
  // 인풋 초기 상태 저장
  // const [userName, setUserName] = useState('');
  // const [userId, setUserId] = useState('');

  // const [userIdMessage, setUserIdMessage] = useState('');

  // 유효성 검사 위한 상태 저장
  // const [isUserId, setIsUserId] = useState(null);

  // 이름, 쇼핑몰 URL 에도 유효성 검사를 해야 하는지 고민

  // const handleUserName = (e) => {
  //   const currentUserName = e.target.value.trim(); //이름에 공백 허용된다면 trim() 제거해야 함
  //   setUserName(currentUserName);
  // };

  // 입력 시 유효성 검사
  // const onChangeUserId = (e) => {
  //   const currentUserId = e.target.value;
  //   setUserId(currentUserId);

  //   const userIdRegExp = /^[A-Za-z0-9]{1,}$/;
  //   setIsUserId(
  //     !currentUserId === '' || !userIdRegExp.test(currentUserId) ? false : true,
  //   );
  // };

  // focust out 시 메시지 출력
  // const handleUserId = () => {
  //   setUserIdMessage(
  //     isUserId
  //       ? '사용할 수 있는 아이디입니다.'
  //       : '아이디에 띄어쓰기, 특수기호를 사용할 수 없습니다.',
  //   );
  // };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div className="create-input-wrapper">
          {/* <div className="create-input-package-wrapper"> */}
          <div className="create-input-title">
            <h3>대표 상품</h3>
            <AddButton />
          </div>
          <CreateProductInput />
          <CreateProductInput />
          {/* </div> */}
          {/* <div className="create-input-package-wrapper"> */}
          {/* <div className="create-input-title"> */}
          <h3 className="create-input-title">내 쇼핑몰</h3>
          {/* </div> */}
          <div className="create-input-my-shop-wrapper">
            <ItemImgInput />
            <CreateInput
              label="이름"
              name="shopName"
              value={shopName}
              placeholder="표시하고 싶은 이름을 적어 주세요."
              onChange={(e) => setShopName(e.target.value)}
            />
            <CreateInput
              label="Url"
              name="Url"
              value={Url}
              placeholder="Url을 입력해 주세요."
              onChange={(e) => setUrl(e.target.value)}
            />
            <CreatePasswordButton />
          </div>
          {/* </div> */}
          <CreateButton />
        </div>
      </form>
    </div>
  );
}

export default Create;
