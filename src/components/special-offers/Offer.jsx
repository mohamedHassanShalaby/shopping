import React, { useState } from "react";
import { Rating } from "../rating/Rating";
import { Link } from "react-router-dom";

export const Offer = ({ offer }) => {
  const {
    firstImage,
    secondImage,
    title,
    price,
    discount,
    rating,
    reviews,
    id,
  } = offer;
  const [imgSrc, setImgSrc] = useState(firstImage);
  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img
          onMouseEnter={() => setImgSrc(secondImage)}
          onMouseLeave={() => setImgSrc(firstImage)}
          src={imgSrc}
          alt={title}
          className="offer-img"
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-price-after-discount">
            ${price - (discount * price) / 100}
          </b>
        </div>
        <Link to={`/specialOffer/${id}`} className="offer-see-more">
          شاهد المزيد...
        </Link>
        <div className="offer-discount">خصم{discount}%</div>
      </div>
    </div>
  );
};
