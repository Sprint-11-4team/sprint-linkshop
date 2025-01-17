// import { useState } from 'react';
import { useRef, useState } from 'react';
import './ItemImgInput.css';
import { deleteIcon } from '../../images/icons';

const ItemImgInput = ({ index, onFileChange, imageUrl }) => {
  const [imgPreviewUrl, setImgPreviewUrl] = useState(imageUrl);
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

  const handleImgDelete = (id) => {
    setImgPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // input 값 초기화
    }
    onFileChange(null, id);
  };

  return (
    <div className="img-file-box">
      <div className="img-file">
        <label className="item-img-title">
          상품 대표 이미지
          <p>상품 이미지를 첨부해 주세요.</p>
        </label>
        <label htmlFor={`itemImgFile${index}`} className="item-img-label">
          파일 첨부
        </label>
        <input
          id={`itemImgFile${index}`} // 고유한 id 부여
          name="imageUrl"
          className="item-img-input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(index, e)}
          ref={fileInputRef}
        />
      </div>
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
    </div>
  );
};

export default ItemImgInput;
