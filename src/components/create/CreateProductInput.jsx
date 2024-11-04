import React from 'react';
import CreateInput from './CreateInput';
import './CreateProductInput.css';
import ItemImgInput from './ItemImgInput';
import { uploadImageApi } from '../../api/createApi';

const CreateProductInput = ({ data, onChangeProductInput, index }) => {
  // const [itemName, setItemName] = useState('');
  // const [price, setPrice] = useState('');

  // const priceChangeHandler = (e) => {
  //   const rawPrice = e.target.value.replace(/,/g, '');
  //   if (isNaN(Number(rawPrice))) {
  //     setPrice('');
  //   } else {
  //     setPrice(Number(rawPrice).toLocaleString('ko-KR'));
  //   }
  // };

  //  react-hook-form 적용? 상품 인풋 패키지가 여러 개 추가 되면 렌더링 시 이슈 있을 수도 있음. 있으면 진짜 완성도 높겠지만 지금 중요하진 않음.

  const handleFileChange = (file, index) => {
    if (file) {
      const itemImageURL = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file); // 실제 파일 객체를 추가
      uploadImageApi(formData)
        .then((data) => {
          console.log('업로드 성공:', data);
          onChangeProductInput(index, 'imageUrl', data.url);
        })
        .catch((error) => {
          console.error('업로드 실패:', error);
        });
      // 메모리 해제
      return () => URL.revokeObjectURL(itemImageURL);
    }
  };

  return (
    <div className="create-input-package">
      <ItemImgInput
        name="imageUrl"
        value={data.imageUrl}
        onFileChange={handleFileChange}
        index={index}
      />
      <CreateInput
        label="상품 이름"
        value={data.name}
        name="name"
        placeholder="상품 이름을 입력해 주세요."
        onChange={(e) => onChangeProductInput(index, 'name', e.target.value)}
      />
      <CreateInput
        label="상품 가격"
        value={data.price}
        name="price"
        placeholder="원화로 표기해 주세요."
        onChange={(e) => onChangeProductInput(index, 'price', e.target.value)}
      />
    </div>
  );
};

export default CreateProductInput;
