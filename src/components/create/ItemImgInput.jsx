import { useEffect, useRef, useState } from 'react';
import './ItemImgInput.css';
import CloseIcon from '../../images/icons/close.png';

const ItemImgInput = () => {
  const [imgPreviewUrl, setImgPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleImgChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const itemImgURL = URL.createObjectURL(file);
      setImgPreviewUrl(itemImgURL);
    }
  };

  const handleImgDelete = () => {
    setImgPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // input 값 초기화
    }
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
            <button className="close-img" onClick={handleImgDelete}>
              <img src={CloseIcon} alt="대표 상품 이미지 삭제" />
            </button>
          </div>
        )}
      </label>
      <div className="item-img-div">
        <label htmlFor="itemImgFile" className="item-img-label">
          파일 첨부
        </label>
        <input
          id="itemImgFile"
          name="itemImgFile"
          className="item-img-input"
          type="file"
          accept="image/*"
          onChange={handleImgChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default ItemImgInput;
