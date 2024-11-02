import { useState } from 'react';
import CreateInput from '../../components/create/CreateInput';
import '../../components/create/CreateProductInput.css';
import ItemImgInput from '../../components/create/ItemImgInput';

const MyproductList = () => {
  // const [itemImg, setItemImg] = useState('');
  const [userName, setItemName] = useState([]);
  const [url, setUrl] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <div className="create-input-package">
      <ItemImgInput />
      <CreateInput
        label="이름"
        name="userName"
        value={userName}
        placeholder="상품 이름을 입력해 주세요."
        onChange={(e) => setItemName(e.target.value)}
      />
      <CreateInput
        label="url"
        name="url"
        value={url}
        placeholder="Url을 입력해주세요"
        onChange={(e) => setUrl(e.target.value)}
      />
      <CreateInput
        label="비밀번호"
        name="pwd"
        value={pwd}
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => setPwd(e.target.value)}
        type="password"
      />
    </div>
  );
};

export default MyproductList;
