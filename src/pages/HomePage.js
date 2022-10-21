import React from "react";
import Banner from "../components/HOMEPAGE/Banner";
import BrowseCategory from "../components/HOMEPAGE/BrowseCategory";
import Information from "../components/HOMEPAGE/Information";
import SubscribeForm from "../components/HOMEPAGE/SubscribeForm";
import TrendingProducts from "../components/HOMEPAGE/TrendingProducts";

function HomePage() {
  return (
    <div>
      <Banner />
      <BrowseCategory />
      <TrendingProducts />
      <Information />
      <SubscribeForm />
    </div>
  );
}
export default HomePage;
