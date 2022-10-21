import { LocalStorageService, PRODUCT_STORAGE_KEY } from "../../services/index";
import "./CartPageRender.css";

//for Redux
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cartSlice";

function CartPageRender(props) {
  //   const userCart = LocalStorageService.load(PRODUCT_STORAGE_KEY);
  //   console.log(userCart);

  //Setup dispatch
  const dispatch = useDispatch();

  console.log("EEEEEE", props.data);

  return (
    <tr>
      <td>
        <img
          className="cartPageRender-image"
          src={props.data.productRender.img1}
        />
      </td>
      <td>{props.data.productRender.name}</td>
      <td>
        {props.data.productRender.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
        VND
      </td>
      <td>
        <div>
          <span>
            <svg
              onClick={() => {
                dispatch(decrementQuantity(props.data));
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
          <p>{props.data.quantity}</p>
          {/* <input
            className="show-number"
            type="number"
            placeholder={props.data.quantity}
          /> */}
          <span>
            <svg
              onClick={() => {
                dispatch(incrementQuantity(props.data));
                // props.data.quantity++;
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
      <td>TOTAL PRICE</td>
      <td>
        <span className="cartPageRender-removeicon">
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </span>
      </td>
    </tr>
  );
}
export default CartPageRender;
