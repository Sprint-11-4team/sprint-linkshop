import { useEffect, useRef, useState } from 'react';
import './ItemImgInput.css';
import { deleteIcon } from '../../images/icons';

const ItemImgInput = ({ index, onFileChange }) => {
  const [imgPreviewUrl, setImgPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (id, e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const itemImgURL = URL.createObjectURL(file);
      setImgPreviewUrl(itemImgURL);
      onFileChange(file, id); // 부모 컴포넌트로 파일 전달
    }
  };

  const handleImgDelete = () => {
    setImgPreviewUrl(''); // 미리보기 이미지 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // input 값 초기화
    }
    onFileChange(null, index);
  };

  useEffect(() => {}, [imgPreviewUrl]);

  return (
    <div className="img-box">
      <label className="item-img-title">
        상품 대표 이미지
        <p>상품 이미지를 첨부해 주세요.</p>
        {imgPreviewUrl && (
          <div className="close-img-wrapper">
            <img
              className="img-preview"
              src={imgPreviewUrl}
              alt="대표 상품 이미지 파일"
            />
            <img
              src={deleteIcon}
              className="delete-icon"
              onClick={handleImgDelete}
              alt="대표 상품 이미지 삭제"
            />
          </div>
        )}
      </label>
      <div>
        <label htmlFor={`itemImgFile${index}`} className="item-img-label">
          파일 첨부
        </label>
        <input
          id={`itemImgFile${index}`} // 고유한 id 부여
          name="itemImgFile"
          className="item-img-input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(index, e)}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default ItemImgInput;
