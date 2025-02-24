import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MiddleHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="ماذا تريد؟" />
        <button className="search-box-btn">ابحث</button>
      </div>
      <Link to={"/cart"} className="middle-header-shopping-cart">
        سلة التسوق
        <i className="bi bi-cart3"></i>
        {cartItems.length > 0 && (
          <span className="cart-notification">{cartItems.length}</span>
        )}
      </Link>
    </div>
  );
};
