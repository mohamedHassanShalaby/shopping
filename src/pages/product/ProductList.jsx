import React from "react";
import "./product.css";
import { ProductItem } from "./ProductItem";
export const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
