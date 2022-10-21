import { useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import "./DetailPage.css";

//Redux Toolkit
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";
import { useSelector } from "react-redux";
import { LocalStorageService, PRODUCT_STORAGE_KEY } from "../services";
import { cartItems } from "../store/cartSlice";

function DetailPage() {
  //State imported form Redux Toolkit
  const selectCartItems = useSelector(cartItems);

  //Setup dispatch
  const dispatch = useDispatch();

  //Đặt biến cho Router
  const params = useParams();

  //Gọi API
  const [productList, setProductList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const successHandler = () => {
    alertMessage();
  };

  useEffect(() => {
    LocalStorageService.store(PRODUCT_STORAGE_KEY, selectCartItems);
  }, [JSON.stringify(selectCartItems)]);

  const alertMessage = () => alert("Success");

  console.log("555555F", selectCartItems);

  useEffect(() => {
    fetchProductList();
  }, []);

  if (productList !== undefined) {
    const productRender = productList.find(
      (product) => product._id.$oid === params.productId
    );
    const productsRelated = productList.filter(
      (productRelated) =>
        productRelated.category === productRender.category &&
        productRelated._id.$oid !== params.productId
    );
    console.log(productsRelated);
    return (
      <div className="productRenderContent_container">
        <div className="productRenderContent_wrap">
          <div className="productRenderImage_wrap">
            <div className="productRenderImageCollection_wrap">
              <img src={productRender.img1} />
              <img src={productRender.img2} />
              <img src={productRender.img3} />
              <img src={productRender.img4} />
            </div>
            <div className="productRenderImageMain_wrap">
              <img src={productRender.img1} />
            </div>
          </div>
          <div className="productRenderText_wrap">
            <h1>{productRender.name}</h1>
            <br />
            <h5>
              {productRender.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </h5>
            <br />
            <p>{productRender.short_desc}</p>
            <br />
            <div className="productRenderTextCategory">
              <h5>CATEGORY:</h5>
              <span>{productRender.category}</span>
            </div>
            <div className="productRenderQuantityForm">
              <div className="chevron-quantity_wrap">
                <input className="quantity" placeholder="QUANTITY"></input>
                <div>
                  <span onClick={() => dispatch(decrementQuantity())}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="chevron"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <input className="show-number" type="number" />
                  <span onClick={() => dispatch(incrementQuantity())}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="chevron"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      productRender,
                    })
                  );
                  successHandler();
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="productDescription">
          <button>DESCRIPTION</button>
          <h5>PRODUCT DESCRIPTION</h5>
          <p>{productRender.long_desc}</p>
        </div>

        <div>
          <h5>RELATED PRODUCT</h5>
          <div className="relatedProduct_container">
            {productsRelated.map((item) => (
              <div className="relatedProduct_wrap">
                <img src={item.img1} />
                <h6>{item.name}</h6>
                <p>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default DetailPage;
