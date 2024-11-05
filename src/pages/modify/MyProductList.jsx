import { uploadImageApi } from '../../api/modifyApi';
import CreateInput from '../../components/create/CreateInput';
import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import '../../components/create/CreateProductInput.css';
import ItemImgInput from './ItemImgInput';

const MyproductList = ({
  shopData,
  etcData,
  onChangeShopInput,
  onChangeShopFileInput,
  onChangeInput,
  index,
  onValidityChange,
}) => {
  const handleFileChange = (file) => {
    if (file) {
      const itemImageURL = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file); // 실제 파일 객체를 추가

      uploadImageApi(formData)
        .then((data) => {
          console.log('업로드 성공:', data);
          onChangeShopFileInput('imageUrl', data.url);
        })
        .catch((error) => {
          console.error('업로드 실패:', error);
        });

      // 메모리 해제
      return () => URL.revokeObjectURL(itemImageURL);
    } else {
      onChangeShopFileInput('imageUrl', null); // 삭제시
    }
  };

  const handleChangeShopInput = (e) => {
    const regex = /^https?:\/\//;
    const validate = regex.test(e.target.value);
    onValidityChange(validate, e.target.name);
    onChangeShopInput(e);
  };

  const handleChangeUserIdInput = (e) => {
    const regex = /^[A-Za-z0-9]+$/;
    const validate = regex.test(e.target.value);
    onValidityChange(validate, e.target.name);
    onChangeInput(e);
  };

  return (
    <div className="create-input-package">
      <ItemImgInput
        imageUrl={shopData?.imageUrl}
        onFileChange={(file) => handleFileChange(file)}
        index={index}
      />
      <CreateInput
        label="이름"
        name="name"
        value={etcData?.name}
        placeholder="표시하고 싶은 이름을 입력해 주세요."
        onChange={onChangeInput}
      />
      <CreateInput
        label="아이디"
        name="userId"
        value={etcData.userId}
        placeholder="URL로 사용될 아이디를 입력해주세요."
        onChange={handleChangeUserIdInput}
      />
      <CreateInput
        label="url"
        name="shopUrl"
        value={shopData?.shopUrl}
        placeholder="Url을 입력해주세요"
        onChange={handleChangeShopInput}
      />
      <CreatePasswordButton
        label="비밀번호"
        name="currentPassword"
        value={etcData.currentPassword}
        placeholder="비밀번호를 입력해주세요."
        onChange={onChangeInput}
        type="password"
        onValidityChange={onValidityChange}
      />
    </div>
  );
};

export default MyproductList;
