import React, { useState } from 'react';
import CreateInput from './CreateInput';
import './CreateProductInput.css';
import ItemImgInput from './ItemImgInput';

const CreateProductInput = ({ value, onChange }) => {
  // const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');

  const priceChangeHandler = (e) => {
    const rawPrice = e.target.value.replace(/,/g, '');
    if (isNaN(Number(rawPrice))) {
      setPrice('');
    } else {
      setPrice(Number(rawPrice).toLocaleString('ko-KR'));
    }
  };

  //  react-hook-form 적용? 상품 인풋 패키지가 여러 개 추가 되면 렌더링 시 이슈 있을 수도 있음. 있으면 진짜 완성도 높겠지만 지금 중요하진 않음.

  return (
    <div className="create-input-package">
      <ItemImgInput name="imageUrl" value={value} onChange={onChange} />
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
