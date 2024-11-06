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
  // 유효성 검사 규칙
  const urlPattern = /^(https:\/\/)[\w-]+(\.[\w-]+)+([/?#].*)?$/;
  const userIdPattern = /^[A-Za-z0-9]+$/;
  const userPasswordRegExp = /^[A-Za-z0-9]{6,}$/;

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
    const validate = urlPattern.test(e.target.value);
    onValidityChange(validate, e.target.name);
    onChangeShopInput(e);
  };

  const handleChangeUserIdInput = (e) => {
    const validate = userIdPattern.test(e.target.value);
    onValidityChange(validate, e.target.name);
    onChangeInput(e);
  };

  const handleChangePasswordInput = (e) => {
    const validate = userPasswordRegExp.test(e.target.value);
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
        label="url"
        name="shopUrl"
        value={shopData?.shopUrl}
        placeholder="Url을 입력해주세요"
        onChange={handleChangeShopInput}
        errorMessage="https://example.com/...와 같은 형식으로 적어주세요."
        validationRule={urlPattern}
      />
      <CreateInput
        label="아이디"
        name="userId"
        value={etcData.userId}
        placeholder="유저 ID를 입력해주세요."
        onChange={handleChangeUserIdInput}
        errorMessage="유저 ID는 중복, 띄어쓰기, 특수기호 사용 불가입니다."
        validationRule={userIdPattern}
      />

      <CreatePasswordButton
        label="비밀번호"
        name="currentPassword"
        value={etcData.currentPassword}
        onChange={handleChangePasswordInput}
        validationRule={userPasswordRegExp}
      />
    </div>
  );
};

export default MyproductList;
