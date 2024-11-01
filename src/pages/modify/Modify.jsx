import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
// import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
// import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import ModifyButton from '../../components/create/ModifyButton';
import CreateProductInput from '../../components/create/CreateProductInput';
// import MyproductList from './MyProductList';
import ItemImgInput from '../../components/create/ItemImgInput';
import CreateInput from '../../components/create/CreateInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';

const Modify = () => {
  // const [userInfo, setUserInfo] = useState({
  //   name: '',
  //   userId: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo((userInfo) => ({
  //     ...userInfo,
  //     [name]: value,
  //   }));
  // };
  const [shopName, setShopName] = useState();
  const [Url, setUrl] = useState();
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pwd = queryParams.get('pwd'); // pwd 값을 가져옵니다.
  console.log(id + ' 확인' + pwd);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/ ');
  };

  // const { name, userId, password } = userInfo;

  return (
    <div>
      <Header buttonName="내 스토어" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div>
          <h3 className="create-h3">
            대표 상품
            <AddButton />
          </h3>
          <CreateProductInput />
          <CreateProductInput />
          {/* h3 대신 SectionTitle로? */}
          <h3 className="create-h3">내 쇼핑몰</h3>
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
          <ModifyButton />
        </div>
      </form>
    </div>
  );
};

export default Modify;
