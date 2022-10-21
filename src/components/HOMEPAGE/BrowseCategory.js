import React from "react";
import classes from "./BrowseCategory.module.css";
import { useNavigate } from "react-router-dom";

function BrowseCategory() {
  const navigate = useNavigate();
  const shoppageClickHandler = () => {
    navigate("/shoppage");
  };

  return (
    <div className={classes.browseCategory_wrap}>
      <div className={classes.browseTittle_wrap}>
        <h3 className={classes.browseTittle1}>CAREFULLY CREATED COLLECTION</h3>
        <h2 className={classes.browseTittle2}>BROWSE YOUR CATEGORY</h2>
      </div>
      <div className={classes.imageCategory_wrap1}>
        <img
          onClick={shoppageClickHandler}
          src={
            process.env.PUBLIC_URL + "./Resource Assignment 03/product_1.png"
          }
        />
        <img
          onClick={shoppageClickHandler}
          src={
            process.env.PUBLIC_URL + "./Resource Assignment 03/product_2.png"
          }
        />
      </div>

      <div className={classes.imageCategory_wrap2}>
        <img
          onClick={shoppageClickHandler}
          src={
            process.env.PUBLIC_URL + "./Resource Assignment 03/product_3.png"
          }
        />
        <img
          onClick={shoppageClickHandler}
          src={
            process.env.PUBLIC_URL + "./Resource Assignment 03/product_4.png"
          }
        />
        <img
          onClick={shoppageClickHandler}
          src={
            process.env.PUBLIC_URL + "./Resource Assignment 03/product_5.png"
          }
        />
      </div>
    </div>
  );
}

export default BrowseCategory;
