import React from "react";
import classes from "./Banner.module.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className={classes.banner_wrap}>
      <div className={classes.imageBanner_wrap}>
        <img
          src={process.env.PUBLIC_URL + "/Resource Assignment 03/banner1.jpg"}
        ></img>
      </div>
      <div className={classes.contentBanner_wrap}>
        <span className={classes.content1_wrap}>
          <h5>NEW INSPIRATION 2020</h5>
        </span>
        <span className={classes.content2_wrap}>
          <h1>20% OFF ON NEW SEASON</h1>
        </span>
        <button onClick={() => navigate("/shoppage")}>
          Browse collections
        </button>
      </div>
    </div>
  );
}
export default Banner;
