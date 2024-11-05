import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
import ItemImgInput from '../../components/create/ItemImgInput';
import CreateProductInput from '../../components/create/CreateProductInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import CreateButton from '../../components/create/CreateButton';
import ToastPopup from '../../components/common/ToastPopup';
import './Create.css';
import { createLinkShop } from '../../api/createApi';
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
  const [shop, setShop] = useState(initialShop);
  // 버그: 인풋에서 엔터 입력 시 대표 상품 인풋 세트 추가됨
  const [productInputs, setProductInputs] = useState([
    initialProduct,
    initialProduct,
  ]);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  // 유효성 검사 규칙
  const urlPattern = /^(https:\/\/)[\w-]+(\.[\w-]+)+([/?#].*)?$/;
  const userIdPattern = /^[A-Za-z0-9]+$/;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  // const [isButtonActive, setIsButtonActive] = useState(false);

  // // 각 인풋 필드가 유효한지 확인하는 상태 배열
  // const [inputValidations, setInputValidations] = useState({
  //   shopUrl: false,
  //   userId: false,
  //   password: false,
  //   // 초기화 등등 다른 인풋 필드들 추가
  // });

  // // 모든 필드가 유효할 때만 버튼을 활성화하는 useEffect
  // useEffect(() => {
  //   const allValid = Object.values(inputValidations).every(Boolean);
  //   setIsButtonActive(allValid);
  // }, [inputValidations]);

  // const handleValidationChange = (fieldName, isValid) => {
  //   setInputValidations((prev) => ({ ...prev, [fieldName]: isValid }));
  // };

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
    setShop({
      ...shop,
      [name]: value,
    });
  };

  // 내 쇼핑몰 user info
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
    if (!shop.imageUrl) {
      alert('상품 대표 이미지를 업로드해주세요.');
      return;
    }

    if (!userInfo.name) {
      console.error('사용자 이름이 필요합니다.');
      return;
    }

    if (
      userInfo.password.length < 6 ||
      !/[A-Za-z]/.test(userInfo.password) ||
      !/\d/.test(userInfo.password)
    ) {
      console.error(
        '비밀번호는 최소 6자 이상이어야 하며, 영문과 숫자를 포함해야 합니다.',
      );
      return;
    }

    if (
      !userInfo.userId ||
      /\s/.test(userInfo.userId) ||
      /[^A-Za-z0-9]/.test(userInfo.userId)
    ) {
      console.error(
        '유저 아이디는 중복 불가, 띄어쓰기 및 특수 기호를 사용할 수 없습니다.',
      );
      return;
    }

    try {
      await createLinkShop('11-4', formData);
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log('성공');
    }

    setIsModalOpen(true);
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
              placeholder="표시하고 싶은 이름을 적어주세요."
              onChange={handleUserChange}
            />
            <CreateInput
              label="Url"
              name="shopUrl"
              value={shop.shopUrl}
              placeholder="Url을 입력해주세요."
              onChange={handleShopChange}
              errorMessage="https://example.com/...와 같은 형식으로 적어주세요."
              validationRule={urlPattern}
            />
            <CreateInput
              label="유저 ID"
              name="userId"
              value={userInfo.userId}
              placeholder="유저 ID를 입력해주세요."
              onChange={handleUserChange}
              errorMessage="유저 ID는 중복, 띄어쓰기, 특수기호 사용 불가입니다."
              validationRule={userIdPattern}
            />
            <CreatePasswordButton
              name="password"
              value={userInfo.password}
              onChange={handleUserChange}
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
