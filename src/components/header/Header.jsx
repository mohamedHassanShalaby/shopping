import React, { useState } from "react";
import "./header.css";
import { Navbar } from "./Navbar";
import { TopHeader } from "./TopHeader";
import { MiddleHeader } from "./MiddleHeader";
export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};
