import React from "react";
import { categories } from "../../data/category";
import "./category.css";
export const Category = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category-item" key={category.id}>
          <img
            src={category.image}
            alt={category.title}
            className="category-item-img"
          />
          <b className="category-item-title">{category.title}</b>
        </div>
      ))}
    </div>
  );
};
