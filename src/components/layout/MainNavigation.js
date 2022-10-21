import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import React, { useState, useEffect } from "react";
import {
  login,
  logout,
  selectIsLoggedIn,
  selectUser,
} from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function MainNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logindata, setLoginData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggin = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUser);

  console.log(loggin);

  console.log(logindata);
  //const accountName = logindata[0].name;

  const getuser = localStorage.getItem("user_login");

  function nameUser() {
    //const getuser = localStorage.getItem("user_login");
    if (getuser /*getuser && getuser.length*/) {
      const user = JSON.parse(getuser);
      //console.log(user);
      setLoginData(user);
      setIsLoggedIn(true);
    } /*else {
      setIsLoggedIn(false);
    }*/
  }

  function userLogout() {
    localStorage.removeItem("user_login");
    navigate("/loginpage");
    setIsLoggedIn(false);
    dispatch(logout());
  }

  useEffect(() => {
    nameUser();
  }, [loggin]);

  return (
    <header>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a
              onClick={() => navigate("/homepage")}
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/shoppage")}
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Shop
            </a>
          </li>
        </ul>

        <h1>BOUTIQUE</h1>

        <ul>
          <li>
            <a
              onClick={() => navigate("/cartpage")}
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Cart
            </a>
          </li>

          {
            <li>
              {loggin ? (
                <a onClick={userLogout}>
                  {/*logindata[0].name*/}
                  {currentUser.payload[0].name} (Logout)
                </a>
              ) : (
                <a
                  onClick={() => navigate("/loginpage")}
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                >
                  Login
                </a>
              )}
            </li>
          }
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;

{
  /*!isLoggedIn && (
            <li>
              <a
                onClick={() => navigate("/loginpage")}
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Login
              </a>
            </li>
          )}

          {isLoggedIn && (
            <li>
              {" "}
              <a onClick={userLogout}>{logindata[0].name} (Logout)</a>
            </li>
          )*/
}
