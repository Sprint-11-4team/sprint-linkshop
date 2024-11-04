import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import ItemImgInput from '../../components/create/ItemImgInput';
import CreateProductInput from '../../components/create/CreateProductInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import CreateButton from '../../components/create/CreateButton';
import CrateModal from '../../components/create/CreateModal';
import '../../components/create/Create.css';

function Create() {
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

  // eslint-disable-next-line
  const [userInfo, setUserInfo] = useState({
    password: '',
    userId: '',
    name: '',
  });

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigateClick = () => {
    navigate(`/link/{linkid}`);
  };

  // const [shopName, setShopName] = useState();
  // const [Url, setUrl] = useState();

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/linkpost');
  };

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

  // onChange 작성 중
  const handleFileChange = (name, value) => {
    setShop((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShopChange = (e) => {
    const { name, value } = e.target;
    handleFileChange(name, value);
    setShop((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductsChange = (e) => {
    const { name, value } = e.target;
    setProducts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // console.log({ shop, products, userInfo });
  };

  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={handleButtonClick} />
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="create-input-wrapper">
          <div className="create-input-title">
            <h3 className="create-input-title">대표 상품</h3>
            <AddButton type="button" onClick={handleAddButtonClick} />
          </div>
          {/* map 배열에서 언더바를 매개변수로 사용해서 eslint 오류 발생 */}
          {productInputs.map((_, index) => (
            <CreateProductInput key={index} onChange={handleProductsChange} />
          ))}
          <h3 className="create-input-title">내 쇼핑몰</h3>
          <div className="create-input-my-shop-wrapper">
            <ItemImgInput
              name="imageUrl"
              value={shop.imageUrl}
              onChange={handleFileChange}
            />
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
            <CreatePasswordButton onChange={handleUserInfoChange} />
          </div>
          <CreateButton type="submit" />
        </div>
      </form>
      <div>
        <CrateModal
          modalType="none"
          width="438px"
          height="342px"
          borderRadius="30px"
          isOpen={isModalOpen}
          onClick={handleNavigateClick}
          modalMessage="등록이 완료되었습니다."
        />
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
