// import { useState } from 'react';
import './ItemImgInput.css';

function ItemImgInput() {
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
    <label>
      <input
        className="itemImgInput"
        type="file"
        placeholder="상품 이미지를 첨부해주세요."
        accept="image/*"
        // onChange={handleFileChange}
      />
      <button>파일 첨부</button>
    </label>
  );
}

export default ItemImgInput;
