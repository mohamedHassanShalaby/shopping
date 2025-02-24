import React from "react";
import "./footer.css";
import { TopFooter } from "./TopFooter";
import { FooterWrapper } from "./FooterWrapper";
export const Footer = () => {
  return (
    <footer className="footer">
      <TopFooter />
      <FooterWrapper />
      <div className="bottom-footer">&copy; 2024 كل الحقوق محفوظه</div>
    </footer>
  );
};
