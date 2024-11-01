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

const Modify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const paramsPwd = queryParams.get('pwd');
  // eslint-disable-next-line
  const [pwd, setPwd] = useState(paramsPwd);

  const [detailData, setDetailData] = useState({}); //조회 state
  const [products, setProducts] = useState([]);
  // 내쇼핑몰 state
  const [shopData, setShopData] = useState({
    urlName: '',
    shopUrl: '',
    imageUrl: '',
  });
  // ect state
  const [etcData, setEtcData] = useState({
    currentPassword: '',
    userId: '',
    name: '',
  });

  const [isLoading, loadingError, getDetailDataAsync] = useAsync(() =>
    fetchDetailData({
      teamId: '11-4',
      linkShopId: id,
    }),
  );

  // 내쇼핑몰 handler
  const handleChangeShopInput = (e) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value,
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
      urlName: result.shop.urlName,
      shopUrl: result.shop.shopUrl,
    });
    setEtcData({
      currentPassword: pwd,
      userId: result.userId,
      name: result.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      products: products,
      shop: shopData,
      ...etcData,
    };
    console.log(formData, '수정시보내는데이터');

    try {
      await updateLinkShop('11-4', detailData.id, formData);
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log('성공');
    }
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
      <Header buttonName="내 스토어" onButtonClick={() => navigate('/ ')} />
      <form className="form-body" onSubmit={handleSubmit}>
        <div>
          <h3 className="create-h3">
            대표 상품
            <AddButton />
            {products?.map((data, index) => (
              <ModifyProductInput
                data={data}
                onChangeProductInput={handleChangeProductInput}
                index={index}
                key={index}
              />
            ))}
          </h3>
          <h3 className="create-h3">
            내 쇼핑몰
            <MyproductList
              shopData={shopData}
              etcData={etcData}
              onChangeProductInput={handleChangeShopInput}
              onChangeInput={handleChangeInput}
            />
          </h3>
          <ModifyButton type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Modify;
