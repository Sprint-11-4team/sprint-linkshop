import React, { useState, useEffect } from 'react';
import './bottom.css';

function MainProduct() {
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    const Product = async () => {
      // const response = await fetch('API_ENDPOINT');
      // const data = await response.json();

      // API데이터
      const data = {
        image: "https://example.com/featured-image.png",
        name: "아디다스 신발 - PZ379",
        price: "₩134,000"
      };

      setProduct(data);
    };

    Product();
  }, []);

  // 로딩 상태를 처리
  if (!Product) {
    return <p>로딩 중...</p>;
  }

  return (
    <div className="product">
      <img src={Product.image} alt={Product.name} className="image" />
      <div className="info">
        <h2 className="name">{Product.name}</h2>
        <p className="price">{Product.price}</p>
      </div>
    </div>
  );
}

export default MainProduct;