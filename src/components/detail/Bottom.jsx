import React, { useState, useEffect } from "react";
import "../../css/bottom.css";

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(""); // API 주소
        if (!response.ok) {
          throw new Error("데이터를 가져오지 못했습니다.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className="product">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p>{product.name}</p>
          <p>{product.price.toLocaleString()}원</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
