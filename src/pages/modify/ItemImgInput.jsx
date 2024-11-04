// import { useState } from 'react';
import './ItemImgInput.css';

const ItemImgInput = ({ imageUrl, onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file); // 부모 컴포넌트로 파일 전달
  };

  return (
    <div className="img-box">
      <label className="item-img-title">
        상품 대표 이미지
        <p>상품 이미지를 첨부해 주세요.</p>
      </label>
      <div>
        <label htmlFor="itemImgFile" className="item-img-label">
          파일 첨부
        </label>
        <input
          id="itemImgFile"
          name="imageUrl"
          className="item-img-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <img
          src={imageUrl}
          alt="Product Preview"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    </div>
  );
};

export default ItemImgInput;
