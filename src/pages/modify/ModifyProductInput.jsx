import React, { useState } from 'react';
import './ModifyProductInput.css';
import CreateInput from '../../components/create/CreateInput';
import ItemImgInput from './ItemImgInput';
import { uploadImageApi } from '../../api/modifyApi';

const ModifyProductInput = ({ onChangeProductInput, data, index }) => {
  const [price, setPrice] = useState(data.price);

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
    } else {
      onChangeProductInput(index, 'imageUrl', null);
    }
  };

  const handleChange = (e, index) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^\d]/g, '');
    inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // 상태 업데이트
    setPrice(inputValue);

    let inputNum = inputValue.replace(/[^\d]/g, '');
    onChangeProductInput(index, 'price', inputNum);
  };

  return (
    <div className="create-input-package">
      <ItemImgInput
        imageUrl={data.imageUrl}
        onFileChange={(file, id) => handleFileChange(file, id)}
        index={index}
      />
      <CreateInput
        label="상품 이름"
        name="name"
        value={data.name}
        placeholder="상품 이름을 입력해 주세요."
        onChange={(e) => onChangeProductInput(index, 'name', e.target.value)}
      />
      <CreateInput
        label="상품 가격"
        name="price"
        value={price.toLocaleString()}
        placeholder="원화로 표기해 주세요."
        onChange={(e) => handleChange(e, index)}
      />
    </div>
  );
};

export default ModifyProductInput;
