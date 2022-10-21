import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../store/userSlice";

import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Select data from store
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  //console.log(inpval);

  function getdata(e) {
    //console.log(e.target.value);
    const { value, name } = e.target;
    //console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  }

  function addData(e) {
    e.preventDefault();
    //console.log(inpval);
    const getuserArr = localStorage.getItem("userSignUp");
    console.log(getuserArr);

    const { email, password } = inpval;
    //console.log(getuserArr.indexOf(email));
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length <= 8) {
      alert("password must be at least 9 letters");
    } else if (getuserArr.indexOf(email) === -1) {
      alert("Your email has not signed up");
    } else {
      const userdata = JSON.parse(getuserArr);
      //console.log(userdata);
      const userlogin = userdata.filter((el, k) => {
        return el.email === email && el.password === password;
      });
      console.log("user login successfully");
      localStorage.setItem("user_login", JSON.stringify(userlogin));
      //const userInfo = getuserArr.find((e) => e.email === email);
      dispatch(login(userlogin));
      history("/homepage");
      /*
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        //console.log(userdata);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        //console.log(userlogin);
        if (userlogin.length === 0) {
          alert("invalid detail");
        } else {
          console.log("user login successfully");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/homepage");
          dispatch(
            login(
              "aaa"
              //email: email,
              //password: password,
              //loggedIn: true,
            )
          );
        }
      }
      */
    }
  }

  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  }
*/

  return (
    <div className="login-background">
      <div className="login-container">
        <h1>Sign In</h1>
        <Form className="login-wrap" /*onSubmit={(e) => handleSubmit(e)}*/>
          <Form.Control
            onChange={getdata}
            name="email"
            type="email"
            placeholder="Email"
            className="login-form"
          />
          <Form.Control
            onChange={getdata}
            name="password"
            type="password"
            placeholder="Password"
            className="login-form"
          />
        </Form>
        <Button
          onClick={addData}
          variant="primary"
          type="submit"
          className="login-button"
          /*onClick={(e) => handleSubmit(e)}*/
        >
          Sign In
        </Button>

        <p>
          Create an account?
          <span>
            <NavLink to="/registerpage">Sign up</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
