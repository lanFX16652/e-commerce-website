import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./TrendingProducts.module.css";

import Popup from "./Popup";
import { toggleModal } from "../../store/modalSlice";
import modalSlice from "../../store/modalSlice";
import { useSelector } from "react-redux";

import { isModalVisible } from "../../store/modalSlice";
import { productContent } from "../../store/modalSlice";

function TrendingProducts() {
  const [trendingProducts, setTrendingProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isModalVisible = useSelector((state) => state.modal.isModalVisible);
  const productContent = useSelector((state) => state.modal.productContent);
  //console.log(isModalVisible);
  console.log(productContent);

  async function fetchTrendingProducts() {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await response.json();
      //console.log("data", data);
      setTrendingProducts(data);
      //console.log("data1111", trendingProducts);
    } catch (err) {
      const errorMessage = "Lỗi: " + err.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTrendingProducts();
  }, []);
  //console.log("trendingProducts", trendingProducts);
  if (trendingProducts !== undefined) {
    return (
      <div>
        <h5 className={classes.trendingProduct_tittle1}>MAKE THE HARD WAY</h5>
        <h3 className={classes.trendingProduct_tittle2}>
          TOP TRENDING PRODUCTS
        </h3>
        <div className={classes.products_wrap}>
          {trendingProducts.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
        {isModalVisible && <Popup />}
      </div>
    );
  }
}

export default TrendingProducts;
