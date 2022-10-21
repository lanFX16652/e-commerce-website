import Form from "react-bootstrap/Form";
import classes from "./ShoppageContent.module.css";
import Pagination from "react-bootstrap/Pagination";
import ProductList from "./ProductList";

function ShoppageContent(props) {
  return (
    <div className={classes.shoppageContent_wrap}>
      <div className={classes.shoppageContent_menu}>
        <input
          className={classes.shoppageContent_input}
          placeholder="Enter search here"
        ></input>
        <div className={classes.shoppage_select}>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>

      <div>
        <ProductList filter={props.filter} />
      </div>
      <div className={classes.shoppage_pagination}>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}

export default ShoppageContent;
