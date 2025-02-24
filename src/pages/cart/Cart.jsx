import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cartItems.length < 1 ? (
    <div className="empty-cart">
      <h1>سلة التسوق الخاصة بك فارغه</h1>
      <p>لا يوجد سلع</p>
      <Link className="empty-cart-link" to={"/products"}>
        صفحة السلع
      </Link>
    </div>
  ) : (
    <div className="cart">
      <h1 className="cart-title">سله التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-quantity">
                  الكميه
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر:
                  <span>{item.price * item.quantity}$</span>
                </div>
                <i
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bi bi-trash cart-item-delete-icon"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
            جزء من طلبك مؤهل للشحن المجانى. قم بتحديد هذا الخيار عند الدفع
            التفاصيل
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>
              {cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0
              )}
              $
            </span>
          </div>
          <button className="cart-summary-btn">تابع عمليات الشراء</button>
        </div>
      </div>
    </div>
  );
};
