import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({toggle, setToggle}) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <Link to={"/"} onClick={() => setToggle(false)} className="navbar-link">
          الصفحة الرئيسية
        </Link>
        <Link to={'/products'} onClick={() => setToggle(false)} className="navbar-link">
          الالكترونيات و الموبايلات
        </Link>
        <li onClick={() => setToggle(false)} className="navbar-link">
          المنزل و المطبخ
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          رجالية
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          نسائيه
        </li>
      </ul>
    </nav>
  );
}
