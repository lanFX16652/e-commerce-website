import ShopBanner from "../components/SHOPPAGE/ShopBanner";
import SideBar from "../components/SHOPPAGE/SideBar";
import ShoppageContent from "../components/SHOPPAGE/ShoppageContent";
import "./ShopPage.css";
import { useState } from "react";

function ShopPage() {
  const [filter, setFilter] = useState("all");

  const changeFilterHandler = (filterName) => {
    setFilter(filterName);
  };

  return (
    <div>
      <ShopBanner />
      <div className="shoppage_container">
        <SideBar changeFilterHandler={changeFilterHandler} />
        <ShoppageContent filter={filter} />
      </div>
    </div>
  );
}
export default ShopPage;
