import React from 'react';
import './ModifyProductInput.css';
import CreateInput from '../../components/create/CreateInput';
import ItemImgInput from './ItemImgInput';
import { uploadImageApi } from '../../api/modifyApi';

const ModifyProductInput = ({ onChangeProductInput, data, index }) => {
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
        imageUrl={data.imageUrl}
        onFileChange={(file) => handleFileChange(file, index)}
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
        value={data.price}
        placeholder="원화로 표기해 주세요."
        onChange={(e) => onChangeProductInput(index, 'price', e.target.value)}
      />
    </div>
  );
};

export default ModifyProductInput;
