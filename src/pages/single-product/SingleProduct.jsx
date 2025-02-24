import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../../components/rating/Rating";
import "./singleProduct.css";
import { ProductDesc } from "../special-offer-pages/ProductDesc";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import { Spinner } from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
export const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, [id]);
  //add to cart handler
  function addToCartHandler() {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  }
  if (loading) return <Spinner />;
  //(product &&) == product?
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-img-wrapper">
          <img src={product && product.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product && product.title}</h1>
          <Rating
            rating={product && product.rating}
            reviews={product && product.reviews}
          />
          <div className="product-price">{product && product.price}</div>
          <div className="product-add-to-cart">
            <div>الكمية</div>
            <input
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              min={1}
              max={10}
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              اضافه الى سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDesc />
    </div>
  );
};
