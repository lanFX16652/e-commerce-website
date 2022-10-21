import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

//Tạo cửa sổ modal để hiển thị thông tin sản phẩm
const ModalOverlay = (props) => {
  return (
    <div className="modal-popup">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays-popup");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-popup">
      <div className="modal-content-wrap">
        <div className="content">{props.children}</div>
      </div>
    </div>,
    portalElement
  );
};
export default Modal;
