import React from 'react';

const ProductItem = () => {
  return (
    <div className="product-item">
      <label className="small-label">상품대표이미지</label>
      <input type="file" className="image-input" accept="image/*" />

      <label className="small-label">상품이름</label>
      <input type="text" placeholder="상품 이름을 입력해 주세요" />

      <label className="small-label">상품가격</label>
      <input type="text" placeholder="판매할 금액을 입력해 주세요" />
    </div>
  );
};


export default ProductItem;
