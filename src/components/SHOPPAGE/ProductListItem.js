import React from "react";
import classes from "./ProductListItem.module.css";
import { Link } from "react-router-dom";

function ProductListItem(props) {
  return (
    <div>
      <div className={classes.productListItem_wrap}>
        <Link to={`/shoppage/${props.id}`}>
          <img src={props.product.img1} />
        </Link>
        <h5>{props.product.name}</h5>
        <h5>
          {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          VND
        </h5>
      </div>
    </div>
  );
}

export default ProductListItem;
