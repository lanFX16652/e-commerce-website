import Nav from "react-bootstrap/Nav";
import classes from "./SideBar.module.css";
//import {useDispatch} from "react-redux";

function SideBar(props) {
  //const dispatch = useDispatch()
  const { changeFilterHandler } = props;

  return (
    <div className={classes.sidebar}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <h4>CATEGORIES</h4>

        <h5 className={classes.sidebar_title}>APPLE</h5>
        <h6
          onClick={() => {
            changeFilterHandler("all");
          }}
        >
          All
        </h6>

        <h5 className={classes.sidebar_titleCategory}>IPHONE & MAC</h5>
        <h6
          onClick={() => {
            changeFilterHandler("iphone");
          }}
        >
          Iphone
        </h6>
        <h6
          onClick={() => {
            changeFilterHandler("ipad");
          }}
        >
          Ipad
        </h6>
        <h6
          onClick={() => {
            changeFilterHandler("macbook");
          }}
        >
          Macbook
        </h6>

        <h5 className={classes.sidebar_titleCategory}>WIRELESS</h5>
        <h6
          onClick={() => {
            changeFilterHandler("airpod");
          }}
        >
          Airpod
        </h6>
        <h6
          onClick={() => {
            changeFilterHandler("watch");
          }}
        >
          Watch
        </h6>

        <h5 className={classes.sidebar_titleCategory}>OTHERS</h5>
        <h6>Mouse</h6>
        <h6>Keyboard</h6>
        <h6>Other</h6>
      </Nav>
    </div>
  );
}

export default SideBar;
