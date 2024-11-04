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
import './Create.css';
import { uploadImageApi } from '../../api/modifyApi';

const initialShop = {
  imageUrl: '',
  urlName: '',
  shopUrl: '',
};

const initialProduct = {
  price: '',
  imageUrl: '',
  name: '',
};

const initialUserInfo = {
  password: '',
  userId: '',
  name: '',
};

function Create() {
  const navigate = useNavigate();
  const [shop, setShop] = useState(initialShop);
  // 대표 상품 인풋 추가 동작
  // 인풋에서 엔터 입력하면 추가 버튼 눌려서 대표 상품 인풋 추가되는 버그 있음
  const [productInputs, setProductInputs] = useState([
    initialProduct,
    initialProduct,
  ]);
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  // 모달 버튼 클릭 시 주소 이동
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigateClick = () => {
    navigate(`/link/{linkid}`);
  };

  // 돌아가기 버튼 클릭 시 주소 이동
  const handleButtonClick = () => {
    navigate('/list');
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault(); // 버튼 클릭 시 새로고침 되는 현상 막기 위함(type=button 으로 대체 가능)
    if (productInputs.length < 3) {
      setProductInputs((prevInputs) => [...prevInputs, { ...initialProduct }]);
    }
  };

  // 대표 상품
  const handleChangeProductInput = (index, field, value) => {
    const updatedProducts = productInputs.map((productInput, i) => {
      if (i === index) {
        return { ...productInput, [field]: value };
      }
      return productInput;
    });
    setProductInputs(updatedProducts);
  };

  // 내 쇼핑몰
  const handleShopChange = (e) => {
    const { name, value } = e.target;
    // handleFileChange(name, value);
    setShop({
      ...shop,
      [name]: value,
    });
  };

  // 내 쇼핑몰 비밀번호
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleFileChange = (file) => {
    if (file) {
      const itemImageURL = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file); // 실제 파일 객체를 추가
      uploadImageApi(formData)
        .then((data) => {
          console.log('업로드 성공:', data);
          setShop({ ...shop, imageUrl: data.url });
        })
        .catch((error) => {
          console.error('업로드 실패:', error);
        });
      // 메모리 해제
      return () => URL.revokeObjectURL(itemImageURL);
    }
  };

  // 생성하기 버튼 클릭 시 작동
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      products: productInputs,
      shop: shop,
      ...userInfo,
    };

    console.log(formData, '생성 데이터');

    setIsModalOpen(false);
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
          {/* 옵셔널 체이닝 */}
          {productInputs?.map((data, index) => (
            <div key={index}>
              <CreateProductInput
                index={index}
                data={data}
                onChangeProductInput={handleChangeProductInput}
              />
            </div>
          ))}
          <h3 className="create-input-title">내 쇼핑몰</h3>
          <div className="create-input-my-shop-wrapper">
            <ItemImgInput
              name="imageUrl"
              value={shop.imageUrl}
              onFileChange={handleFileChange}
            />
            <CreateInput
              label="이름"
              name="name"
              value={userInfo.name}
              placeholder="표시하고 싶은 이름을 적어 주세요."
              onChange={handleUserChange}
            />
            <CreateInput
              label="아이디"
              name="userId"
              value={userInfo.userId}
              placeholder="URL로 사용될 아이디를 입력해주세요."
              onChange={handleUserChange}
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
              onChange={handleUserChange}
            />
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
