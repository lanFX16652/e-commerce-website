import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

import "./RegisterPage.css";

function RegisterPage() {
  const userArr = JSON.parse(localStorage.getItem("userSignUp")) || [];

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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
    const { name, email, password, phone } = inpval;
    const newEmail = userArr.some((e) => e.email === email);
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (phone === "") {
      alert("phone field is required");
    } else if (password.length <= 8) {
      alert("password must be at least 9 letters");
    } else if (newEmail) {
      alert("this email is already signup. Please input different email");
    } else {
      console.log("data added successlly");

      const newUserArr = [...userArr, inpval];
      console.log(newUserArr);
      localStorage.setItem("userSignUp", JSON.stringify(newUserArr));
      //localStorage.setItem("userSignUp", JSON.stringify([...data, inpval]));
      //userArr.push(inpval);
      //localStorage.setItem("userSignUp", JSON.stringify(userArr));
    }
  }

  return (
    <div className="register-background">
      <div className="register-container">
        <h1>Sign Up</h1>
        <Form className="register-wrap">
          <Form.Control
            onChange={getdata}
            name="name"
            type="text"
            placeholder="Full name"
            className="register-form"
          />
          <Form.Control
            onChange={getdata}
            name="email"
            type="email"
            placeholder="Email"
            className="register-form"
          />
          <Form.Control
            onChange={getdata}
            name="password"
            type="password"
            placeholder="Password"
            className="register-form"
          />
          <Form.Control
            onChange={getdata}
            name="phone"
            type="text"
            placeholder="Phone"
            className="register-form"
          />
        </Form>
        <Button
          onClick={addData}
          variant="primary"
          type="submit"
          className="register-button"
        >
          Sign Up
        </Button>

        <p>
          Login?
          <span>
            <NavLink to="/loginpage">Click</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;

/*
import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Cheking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnterEmail(emailState.isValid);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    //setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

*/
