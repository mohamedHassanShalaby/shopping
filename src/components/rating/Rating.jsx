import React from "react";
import "./rating.css";
export const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span>{reviews} التقييمات</span>
    </div>
  );
};
