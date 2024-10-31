// import { useState } from 'react';
import CreateInput from './CreateInput';
import './CreateShopInput.css';

const CreateShopInput = () => {
  //   const [shopInfo, setShopInfo] = useState({
  //     shopURL: '',
  //     URLName: '',
  //   });
  //   const { shopURL, URLName } = shopInfo;

  return (
    <div className="create-shop-input-package">
      <CreateInput
        label="쇼핑몰 URL"
        name="shopURL"
        // value={shopURL}
        placeholder="URL을 입력해주세요."
      />
      <CreateInput
        label="URL 이름"
        name="URLName"
        // value={URLName}
        placeholder="URL로 사용될 이름을 입력해주세요."
      />
    </div>
  );
};

export default CreateShopInput;
