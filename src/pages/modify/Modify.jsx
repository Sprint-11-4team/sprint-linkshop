import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import AddButton from '../../components/create/AddButton';
import ModifyButton from '../../components/create/ModifyButton';
import MyproductList from './MyProductList';
import useAsync from '../../api/useAsync';
import { fetchDetailData } from '../../api/detailApi';
import ModifyProductInput from './ModifyProductInput';
import { updateLinkShop } from '../../api/modifyApi';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ToastPopup from '../../components/common/ToastPopup';

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
  currentPassword: '',
  userId: '',
  name: '',
};

const Modify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const paramsPwd = queryParams.get('pwd');
  // eslint-disable-next-line
  const [pwd, setPwd] = useState(paramsPwd);
  const [openPopup, setOpenPopup] = useState(false);
  const [validationOpenPopup, setValidationOpenPopup] = useState(false);
  const [validationOpenPopupText, setValidationOpenPopupText] = useState('');
  const [detailData, setDetailData] = useState({}); //조회 state
  const [products, setProducts] = useState([initialProduct]);
  // 내쇼핑몰 state
  const [shopData, setShopData] = useState(initialShop);
  // ect state
  const [etcData, setEtcData] = useState(initialUserInfo);
  // 유효성검사
  const [validationState, setValidationState] = useState({
    currentPassword: true, // 비밀번호 검증 결과
    shopUrl: true,
    userId: true,
  });

  const [isLoading, loadingError, getDetailDataAsync] = useAsync(() =>
    fetchDetailData({
      teamId: '11-4',
      linkShopId: id,
    }),
  );

  // 내쇼핑몰 handler
  const handleChangeShopInput = (e, data) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value,
    });
  };

  const handleChangeShopFileInput = (field, value) => {
    setShopData({
      ...shopData,
      [field]: value,
    });
  };

  // 대표상품 handler
  const handleChangeProductInput = (index, field, value) => {
    const updatedProducts = products.map((product, i) => {
      if (i === index) {
        return { ...product, [field]: value }; // 필드 업데이트
      }
      return product;
    });
    setProducts(updatedProducts); // 상태 업데이트
  };

  // etc handler
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEtcData({
      ...etcData,
      [name]: value,
    });
  };

  const getProductData = (products) => {
    return products.map(({ imageUrl, name, price }) => ({
      imageUrl,
      name,
      price,
    }));
  };

  const handleLoadData = async () => {
    let result = await getDetailDataAsync();
    if (!result) return;
    setDetailData(result);
    setProducts(getProductData(result.products));
    setShopData({
      imageUrl: result.shop.imageUrl,
      urlName: 'test',
      shopUrl: result.shop.shopUrl,
    });
    setEtcData({
      currentPassword: pwd,
      userId: result.userId,
      name: result.name,
    });
  };

  const isImageUrlEmpty = (url) => {
    return !url || url.trim() === null;
  };

  // 파일공백검사체크
  const checkFileEmpty = () => {
    const firstInvalidIndex = products.findIndex((product) =>
      isImageUrlEmpty(product.imageUrl),
    );
    if (firstInvalidIndex !== -1 || shopData.imageUrl === null) {
      return true;
    }
    return false;
  };

  const handleValidity = (test, type) => {
    setValidationState((prevState) => ({
      ...prevState,
      [type]: test,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(validationState);

    const { currentPassword, shopUrl, userId } = validationState;
    if (!shopUrl) {
      setValidationOpenPopupText('url을 https:// 형식에 맞춰주세요');
      setValidationOpenPopup(true);
      return;
    }

    if (!currentPassword) {
      setValidationOpenPopupText(
        '비밀번호 영문+숫자 최소 6자 이상 입력해주세요',
      );
      setValidationOpenPopup(true);
      return;
    }

    if (!userId) {
      setValidationOpenPopupText(
        '아이디는 띄어쓰기, 특수기호 사용불가 합니다.',
      );
      setValidationOpenPopup(true);
      return;
    }

    // 파일체크
    if (checkFileEmpty()) {
      setValidationOpenPopupText('이미지를 모두 등록해주세요');
      setValidationOpenPopup(true);
      return;
    }

    setOpenPopup(true);
  };

  const submit = async () => {
    try {
      let result = await updateLinkShop('11-4', detailData.id, {
        products: products,
        shop: shopData,
        ...etcData,
      });
      if (!result) return;
      navigate(`/link/${id}`);
    } catch (error) {
      console.error('수정 실패:', error.message);
      alert(error.message);
    }
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault(); // 버튼 클릭 시 새로고침 되는 현상 막기 위함(type=button 으로 대체 가능)
    if (products.length < 3) {
      setProducts((prevInputs) => [...prevInputs, { ...initialProduct }]);
    }
  };

  // 버튼 활성화 여부 체크
  const isFormValid = () => {
    return (
      products.every(
        (product) => product.imageUrl && product.name && product.price,
      ) &&
      shopData.imageUrl &&
      shopData.shopUrl &&
      shopData.urlName &&
      etcData.currentPassword &&
      etcData.userId &&
      etcData.name
    );
  };

  useEffect(() => {
    handleLoadData();
    // eslint-disable-next-line
  }, []);

  if (isLoading || loadingError) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header buttonName="내 스토어" onButtonClick={() => navigate('/')} />
      {/* 경로의 공백 제거 */}
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="create-input-wrapper">
          <div>
            <div className="create-input-title">
              <h3>대표 상품</h3>
              <AddButton type="button" onClick={handleAddButtonClick} />
            </div>
            {products?.map((data, index) => (
              <div key={index}>
                <ModifyProductInput
                  data={data}
                  onChangeProductInput={handleChangeProductInput}
                  index={index}
                />
              </div>
            ))}
            <h3 className="create-input-title">내 쇼핑몰</h3>
            <MyproductList
              shopData={shopData}
              etcData={etcData}
              onChangeShopInput={handleChangeShopInput}
              onChangeShopFileInput={handleChangeShopFileInput}
              onChangeInput={handleChangeInput}
              onValidityChange={(test, type) => handleValidity(test, type)}
            />
            <ModifyButton type="submit" addClass={isFormValid()} />
          </div>
        </div>
      </form>
      <ToastPopup
        isOpen={validationOpenPopup}
        onClose={() => setValidationOpenPopup(false)}
        text={validationOpenPopupText}
        isBtnOne={true}
      ></ToastPopup>
      <ToastPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
        text="수정을 하시겠습니까?"
        isBtnOne={false}
        onClick={() => submit()}
      ></ToastPopup>
    </div>
  );
};

export default Modify;
