import React, { useEffect, useState } from 'react';
import './Bottom.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://linkshop-api.vercel.app/10-4/linkshops/55')
            .then(response => response.json())
            .then(data => setProducts(Array.isArray(data.products) ? data.products : []))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <img src={product.imageUrl} alt={product.imageUrl} className="product-image" />
                    <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">₩{product.price.toLocaleString()}</div>
                </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;