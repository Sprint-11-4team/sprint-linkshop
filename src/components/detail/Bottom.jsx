import React, { useEffect, useState } from 'react';
import './Bottom.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('')//api url주소
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">₩{product.price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
