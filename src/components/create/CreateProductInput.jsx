import { useState } from 'react';
import CreateInput from './CreateInput';
import './CreateProductInput.css';
import ItemImgInput from './ItemImgInput';

const CreateProductInput = () => {
  // const [itemImg, setItemImg] = useState('');
  const [itemName, setItemName] = useState([]);
  const [price, setPrice] = useState('');

  return (
    <div className="create-input-package">
      <ItemImgInput />
      <CreateInput
        label="상품 이름"
        name="itemName"
        value={itemName}
        placeholder="상품 이름을 입력해 주세요."
        onChange={(e) => setItemName(e.target.value)}
      />
      <CreateInput
        label="상품 가격"
        name="price"
        value={price}
        placeholder="원화로 표기해 주세요."
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
};

export default CreateProductInput;
