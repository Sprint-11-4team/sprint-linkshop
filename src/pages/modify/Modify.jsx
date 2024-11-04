import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import AddButton from '../../components/create/AddButton';
import ModifyButton from '../../components/modify/ModifyButton';
import CreateProductInput from '../../components/create/CreateProductInput';
import ItemImgInput from '../../components/create/ItemImgInput';
import CreateInput from '../../components/create/CreateInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';

const Modify = () => {
  const [shopName, setShopName] = useState('');
  const [Url, setUrl] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pwd = queryParams.get('pwd');

  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div className="create-input-wrapper">
          <div className="create-input-title">
            <h3>대표 상품</h3>
            <AddButton />
          </div>
          <CreateProductInput />
          <CreateProductInput />
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

          {/* ModifyButton에 itemId로 id를 전달 */}
          <ModifyButton itemId={id} pwd={pwd} />
        </div>
      </form>
    </div>
  );
};

export default Modify;
