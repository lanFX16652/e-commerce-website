//for Bootstrap
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CheckoutPage.css";
//for React
import { useEffect } from "react";
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

function CheckoutPage() {
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
      <div className="checkoutBanner_wrap">
        <h1 className="checkoutBanner_title1">CART</h1>
        <div className="checkoutBanner_breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/homepage">HOME</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/cartpage">CART</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <NavLink>CHECKOUT</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="checkoutContent_wrap">
        <div className="checkoutContent_billing_wrap">
          <h5>BILLING DETAILS</h5>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FULL NAME</Form.Label>
              <Form.Control placeholder="Enter Your Full Name Here" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email Here" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PHONE NUMBER</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Phone Number Here"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ADDRESS</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Address Here"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              PLACE ORDER
            </Button>
          </Form>
        </div>

        <div>
          <div>
            <h5>YOUR ORDER</h5>
            <Table striped="columns">
              <tbody>
                {(() => {
                  for (let i = 0; i < selectCartItems.length; i++) {
                    return selectCartItems.map((item, i) => (
                      <tr>
                        <td>{selectCartItems[i].productRender.name}</td>
                        <td>
                          {selectCartItems[i].productRender.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                          VND x {selectCartItems[i].cartQuantity}
                        </td>
                      </tr>
                    ));
                  }
                })()}
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
