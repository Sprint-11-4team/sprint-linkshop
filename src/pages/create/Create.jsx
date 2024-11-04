import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import ItemImgInput from '../../components/create/ItemImgInput';
import CreateProductInput from '../../components/create/CreateProductInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import CreateButton from '../../components/create/CreateButton';
import ToastPopup from '../../components/common/ToastPopup';
import './Create.css';

function Create() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { id } = useParams();
  // const queryParams = new URLSearchParams(location.search);

  const [shop, setShop] = useState({
    imageUrl: '',
    urlName: '',
    shopUrl: '',
  });

  // eslint-disable-next-line
  const [products, setProducts] = useState({
    price: '',
    imageUrl: '',
    name: '',
  });

  const [userInfo, setUserInfo] = useState({
    password: '',
    userId: '',
    name: '',
  });

  // 돌아가기 버튼 클릭 시 주소 이동
  // const handleButtonClick = () => {
  //   navigate('/list');
  // };

  // 대표 상품 인풋 추가 동작
  // 인풋에서 엔터 입력하면 추가 버튼 눌려서 대표 상품 인풋 추가되는 버그 있음
  const [productInputs, setProductInputs] = useState([{}, {}]);

  const handleAddButtonClick = (e) => {
    e.preventDefault(); // 버튼 클릭 시 새로고침 되는 현상 막기 위함(type=button 으로 대체 가능)
    if (productInputs.length < 3) {
      setProductInputs((prevInputs) => {
        const NewInputs = [...prevInputs, <CreateProductInput />];
        return NewInputs;
      });
    }
  };

  // 대표 상품
  const handleProductsChange = (index, field, value) => {
    const updatedProducts = productInputs.map((productInput, i) => {
      if (i === index) {
        return { ...productInput, [field]: value };
      }
      return productInput;
    });
    setProductInputs(updatedProducts);
  };
  // const handleProductsChange = (index, field, value) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index] = { ...updatedProducts[index], [field]: value };
  //   setProducts(updatedProducts);
  //   console.log('Updated Products:', updatedProducts);
  // };

  // 내 쇼핑몰
  const handleShopChange = (e) => {
    const { name, value } = e.target;
    setShop({
      [name]: value,
    });
  };

  // 내 쇼핑몰 비밀번호
  const handlePasswordChange = (e) => {
    setUserInfo((prev) => ({ ...prev, password: e.target.value }));
  };

  // eslint-disable-next-line
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      [name]: value,
    });
  };

  // 생성하기 버튼 클릭 시 작동
  const handleSubmit = (e) => {
    e.preventDefault();

    // const formdData = {
    //   products: products,
    //   shop: shop,
    //   ...userInfo,
    // };
    // console.log(formData, '생성 데이터');

    // try {
    //   await updateLinkShop('11-4', detailData.id, formData);
    // } catch (err) {
    //   console.error(err.message);
    // } finally {
    //   console.log('성공');
    // }

    setIsModalOpen(true);
    console.log(shop, products, userInfo);
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={() => navigate('/list')} />
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="create-input-wrapper">
          <div className="create-input-title">
            <h3 className="create-input-title">대표 상품</h3>
            <AddButton type="button" onClick={handleAddButtonClick} />
          </div>
          {/* 옵셔널 체이닝 */}
          {productInputs?.map((data, index) => (
            <CreateProductInput
              data={data}
              key={index}
              index={index}
              onChange={handleProductsChange}
            />
          ))}
          <h3 className="create-input-title">내 쇼핑몰</h3>
          <div className="create-input-my-shop-wrapper">
            <ItemImgInput name="imageUrl" value={shop.imageUrl} />
            <CreateInput
              label="이름"
              name="urlName"
              value={shop.urlName}
              placeholder="표시하고 싶은 이름을 적어 주세요."
              onChange={handleShopChange}
            />
            <CreateInput
              label="Url"
              name="shopUrl"
              value={shop.shopUrl}
              placeholder="Url을 입력해 주세요."
              onChange={handleShopChange}
            />
            <CreatePasswordButton
              value={userInfo.password}
              onChange={handlePasswordChange}
            />
          </div>
          <CreateButton type="submit" />
        </div>
      </form>
      <div>
        <ToastPopup
          isOpen={isModalOpen}
          text="등록이 완료되었습니다."
          isBtnOne={true}
          onClose={() => navigate('/list/{linkid}')}
        ></ToastPopup>
      </div>
    </div>
  );
}

export default Create;

// onChange 를 전달하기 보다 컴포넌트 자체를 전달
// 커스텀 훅 제작
// props drilling
// 컨택스트 만들고 프로바이더로 감싸고, 상태를 지역적으로 공유할 수 있게
// onChange 2개일 때? 객체 useState
// 비밀번호 p 태그 -> position: absolute
