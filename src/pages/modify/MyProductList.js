import React from "react";
import ProductItem from "./ProductItem";

const MyProductList = ({title}) => {
    return (
        <div className="product-list">
            <h2>{title}</h2>
            <ProductItem />
        </div>
    )
}

export default MyProductList;