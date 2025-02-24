import React from "react";
import "./brands.css";
import {brands} from '../../data/brands'
export const Brands = () => {
    return <div className="brands-wrappeer">
      {brands.map(brand => 
        <div key={brand.id} className="brand">
          <img src={brand.image} alt="brandsImg" className="brand-img" />
        </div>
      )}
  </div>;
};
