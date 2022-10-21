import React from "react";
import Modal from "../UI/Modal";
import { toggleModal } from "../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Popup.css";
import { productContent } from "../../store/modalSlice";

function Popup(props) {
  const dispatch = useDispatch();
  const productContent = useSelector((state) => state.modal.productContent);
  console.log(productContent);

  return (
    <div>
      <Modal>
        <div className="container_swap">
          <div className="contentPopup-container">
            <img className="product-image" src={productContent.payload.img1} />
            <div className="contentPopup-wrap">
              <h2>{productContent.payload.name}</h2>
              <h4>
                {productContent.payload.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                VND
              </h4>
              <p>{productContent.payload.short_desc}</p>
              <button className="popup-button">View detail</button>
            </div>
          </div>

          <button
            onClick={() => {
              dispatch(toggleModal());
            }}
            className="close-btn"
          >
            x
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default Popup;
