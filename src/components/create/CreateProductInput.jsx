import CreateInput from './CreateInput';
import './CreateProductInput.css';
import ItemImgInput from './ItemImgInput';
import { uploadImageApi } from '../../api/createApi';

const CreateProductInput = ({
  data: { price, imageUrl, name },
  onChangeProductInput,
  index,
  onValidityChange = () => {},
}) => {
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
      // 이미지 삭제 처리
      onChangeProductInput(index, 'imageUrl', null); // 이미지 삭제 시 null로 설정
    }
  };

  return (
    <div className="create-input-package">
      <ItemImgInput
        name="imageUrl"
        value={imageUrl}
        onFileChange={handleFileChange}
        index={index}
      />
      <CreateInput
        label="상품 이름"
        value={name}
        name="name"
        placeholder="상품 이름을 입력해주세요."
        onChange={(e) => onChangeProductInput(index, 'name', e.target.value)}
        onValidityChange={(isValid) => onValidityChange(isValid)}
      />
      <CreateInput
        label="상품 가격"
        value={price}
        name="price"
        placeholder="원화로 표기해주세요."
        onChange={(e) => onChangeProductInput(index, 'price', e.target.value)}
        onValidityChange={(isValid) => onValidityChange(isValid)}
      />
    </div>
  );
};

export default CreateProductInput;
