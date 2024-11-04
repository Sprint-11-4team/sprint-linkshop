import React, { useState } from 'react';
import CreateInput from './CreateInput';
import './CreateProductInput.css';
import ItemImgInput from './ItemImgInput';
import { uploadImageApi } from '../../api/createApi';

const CreateProductInput = ({ value, onChange, index }) => {
  const handleFileChange = (file, index) => {
    if (file) {
      const itemImageURL = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file); // 실제 파일 객체를 추가

      uploadImageApi(formData)
        .then((data) => {
          console.log('업로드 성공:', data);
          onChange(index, 'imageUrl', data.url);
        })
        .catch((error) => {
          console.error('업로드 실패:', error);
        });

      // 메모리 해제
      return () => URL.revokeObjectURL(itemImageURL);
    }
  };

  const [price, setPrice] = useState('');

  const priceChangeHandler = (e) => {
    const rawPrice = e.target.value.replace(/,/g, '');
    if (isNaN(Number(rawPrice))) {
      setPrice('');
    } else {
      setPrice(Number(rawPrice).toLocaleString('ko-KR'));
    }
  };

  return (
    <div className="create-input-package">
      <ItemImgInput
        name="imageUrl"
        index={index}
        onFileChange={(file, id) => handleFileChange(file, id)}
      />
      <CreateInput
        label="상품 이름"
        name="itemName"
        value={value}
        placeholder="상품 이름을 입력해 주세요."
        onChange={onChange}
      />
      <CreateInput
        label="상품 가격"
        name="price"
        // type="text"
        value={price}
        placeholder="원화로 표기해 주세요."
        onChange={priceChangeHandler}
      />
    </div>
  );
};

export default CreateProductInput;
