import React, { useEffect, useState } from "react";
import { Banner } from "../../components/banner/Banner";
import { Category } from "../../components/category/Category";
import { SpeciaOffers } from "../../components/special-offers/SpeciaOffers";
import { HeadingTitle } from "../../components/heading-title/HeadingTitle";
import { Slider } from "../../components/slider/Slider";
import { Brands } from "../../components/brands/Brands";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const laptops = products.filter((p) => p.isLaptop === true);
  const phones = products.filter((p) => p.isLaptop === false);
  return (
    <>
      <Banner />
      <Category />
      <SpeciaOffers />
      <HeadingTitle title="الجديد من اللابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجديد من الموبايلات" />
      <Slider data={phones} />
      <HeadingTitle title="تسوق حسب المارك" />
      <Brands />
    </>
  );
};
