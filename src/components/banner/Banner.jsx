import React from "react";
import "./banner.css";
// import shose from '../../../public/images/banners/shoes.png';
// import house from '../../../public/images/banners/house.png';
export const Banner = () => {
  return (
    <div className="banner">
      <img src="/images/banners/shoes.png" alt="" className="banner-img" />
      <img src="/images/banners/house.png" alt="" className="banner-img" />
    </div>
  );
};
