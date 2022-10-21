import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import classes from "./ProductList.module.css";

function ProductList(props) {
  console.log(props);
  const { filter } = props;
  console.log(filter);

  const [productList, setProductList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);

  async function fetchProductList() {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await response.json();
      //console.log("data", data);
      setProductList(data);
      //console.log("data222", productList);
    } catch (err) {
      const errorMessage = "Lỗi: " + err.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);
  //console.log("productList", productList);

  console.log(productList);
  useEffect(() => {
    if (productList !== undefined) {
      const productListFilter = productList.filter((product) => {
        if (filter === "all") return true;
        if (filter === "iphone") {
          return product.category === "iphone";
        }
        if (filter === "ipad") {
          return product.category === "ipad";
        }
        if (filter === "macbook") {
          return product.category === "macbook";
        }
        if (filter === "airpod") {
          return product.category === "airpod";
        }
        if (filter === "watch") {
          return product.category === "watch";
        }
      });

      setCategory(productListFilter);
    }
  }, [filter]);

  if (productList !== undefined) {
    return (
      <div>
        <div className={classes.productlist_wrap}>
          {category.map((product) => (
            <ProductListItem
              product={product}
              key={product._id.$oid}
              id={product._id.$oid}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductList;
