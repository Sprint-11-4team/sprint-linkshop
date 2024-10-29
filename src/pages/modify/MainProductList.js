import React from "react";
import ProductItem from "./ProductItem";

const MainProductList = ({title}) => {
    return (
        <div className="product-list">
            <h2>{title}</h2>
            <ProductItem />
            <ProductItem />
        </div>
    )
}

export default MainProductList;