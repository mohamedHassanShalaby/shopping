import React from "react";
import "./specialOffers.css";
import { specialOffers } from "../../data/special-offers";
import { Offer } from "./Offer";

export const SpeciaOffers = () => {
  
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض كبيرة اليوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>ل 24 ساعة فقط
        </span>
      </h1>

      <div className="special-offers-wrapper">
        {specialOffers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};
