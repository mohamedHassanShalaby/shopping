import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import "./specialOfferPage.css";
import { Rating } from "../../components/rating/Rating";
import { ProductDesc } from "./ProductDesc";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import { useDispatch } from "react-redux";
export const SpecialOfferPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = specialOffers.find((p) => p.id === +id);
  const [imageIndex, setImageIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const { images, title, rating, reviews, price, discount } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //add to cart handler
  function addToCartHandler() {
    dispatch(
      addToCart({
        id: id,
        quantity: qty,
        price: price,
        title: title,
        image: images[0],
      })
    );
  }
  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offer-page-img"
          />
          <div className="special-pffer-page-select-img">
            {images.map((src, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={src}
                className="select-img"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-page-price-item">${price}</b>
            <b className="special-offer-page-final-price-item">
              ${price - (discount * price) / 100}
            </b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <div>الكمية</div>
            <input
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              min={1}
              max={10}
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              اضافة الى سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDesc />
    </>
  );
};
