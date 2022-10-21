import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import Popup from "./Popup";
import { toggleModal } from "../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductItem(props) {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.isModalVisible);

  return (
    <div>
      <div className={classes.productItem_wrap}>
        <img
          onClick={() => {
            dispatch(toggleModal(props.product));
          }}
          src={props.product.img1}
        />
        <h5>{props.product.name}</h5>
        <h5>
          {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          VND
        </h5>
      </div>

      {/* isModalVisible && <Popup popupData={props.product} /> */}
    </div>
  );
}

export default ProductItem;
