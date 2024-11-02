// import { useEffect, useState } from 'react';
import './ItemImgInput.css';

const ItemImgInput = ({ name, value, onChange }) => {
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

  const handleFileChange = (e) => {
    const nextitemImg = e.target.files[0];
    onChange(name, nextitemImg);
  };

  // const [preview, setPreview] = useState();

  // side effect
  // useEffect(() => {
  //   if (!itemImg) return;
  //   const nextPreview = URL.createObjectURL(itemImg);
  //   setPreview(nextPreview);
  // }, [itemImg]);

  return (
    <div className="img-box">
      {/* <img src={preview} alt="이미지 미리보기" /> */}
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
          // value={itemImg} // 비제어 컴포넌트
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ItemImgInput;
