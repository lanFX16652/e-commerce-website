//for Bootstrap
import Table from "react-bootstrap/Table";
//for Redux Toolkit
import { useSelector } from "react-redux";
import { cartItems, quantity, amount } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotals,
} from "../store/cartSlice";
//for CSS
import "./CartPage.css";
//for React
import { useEffect } from "react";
//Router
import { NavLink } from "react-router-dom";

import { LocalStorageService, PRODUCT_STORAGE_KEY } from "../services";

import CartPageRender from "../components/CARTPAGE/CartPageRender";

function CartPage() {
  //State imported form Redux Toolkit
  const selectCartItems = useSelector(cartItems);
  const selectQuantity = useSelector(quantity);
  const selectAmount = useSelector(amount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [selectCartItems]);

  return (
    <div>
      <div className="cartBanner_wrap">
        <h1 className="cartBanner_title1">CART</h1>
        <h4 className="cartBanner_title2">CART</h4>
      </div>
      <h4 className="cartBannerContent_title">SHOPPING CART</h4>
      <div className="cartBannerContent_wrap">
        <div>
          <Table striped="columns">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                for (let i = 0; i < selectCartItems.length; i++) {
                  return selectCartItems.map((item, i) => (
                    <tr>
                      <td>
                        <img
                          className="cartPageRender-image"
                          src={selectCartItems[i].productRender.img1}
                        />
                      </td>
                      <td>{selectCartItems[i].productRender.name}</td>
                      <td>
                        {selectCartItems[i].productRender.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        VND
                      </td>
                      <td>
                        <div>
                          <span>
                            <svg
                              onClick={() => {
                                dispatch(decrementQuantity(selectCartItems[i]));
                              }}
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
                          <p>{selectCartItems[i].cartQuantity}</p>

                          <span>
                            <svg
                              onClick={() => {
                                dispatch(incrementQuantity(selectCartItems[i]));
                              }}
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
                      </td>
                      <td>
                        {(
                          selectCartItems[i].productRender.price *
                          selectCartItems[i].cartQuantity
                        )
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        VND
                      </td>
                      <td>
                        <span className="cartPageRender-removeicon">
                          <svg
                            onClick={() => {
                              dispatch(removeItem(selectCartItems[i]));
                            }}
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ));
                }
              })()}
            </tbody>
          </Table>
          <div className="cartpageNavigate_wrap">
            <div>
              <button className="navigate-button">
                <span className="arrow">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    ></path>
                  </svg>
                </span>
                <p>
                  <NavLink to="/shoppage">Continue shopping</NavLink>
                </p>
              </button>
            </div>

            <button className="navigate-button">
              <p>
                <NavLink to="/checkoutpage">Proceed to checkout</NavLink>
              </p>
              <span className="arrow">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div>
          <h2>CART TOTAL</h2>
          <Table striped="columns">
            <tbody>
              <tr>
                <td>SUB TOTAL</td>
                <td>
                  {selectAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td>
                  {selectAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="coupon_wrap">
            <input placeholder="Enter your coupon"></input>
            <button>Apply coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
