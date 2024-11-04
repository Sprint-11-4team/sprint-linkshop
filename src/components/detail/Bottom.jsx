import React from 'react';
import './Bottom.css';

const ProductList = ({ detailData }) => {
  if (!detailData || !detailData.products) {
    return null; 
  }

  return (
    <div className="product-list">
      {detailData.products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-price">₩{product.price.toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
