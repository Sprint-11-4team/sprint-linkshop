// import { useState } from 'react';
import './ItemImgInput.css';

const ItemImgInput = () => {
  // const [itemImg, setItemImg] = useState();
  // const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const itemImageURL = URL.createObjectURL(file);
  //     setImagePreviewUrl(itemImageURL);
  //   }
  // };

  //   const handleDelete = () => {
  //     setImagePreviewURL('');
  //   };

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
          name="itemImgFile"
          className="item-img-input"
          type="file"
          accept="image/*"
          // onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ItemImgInput;
