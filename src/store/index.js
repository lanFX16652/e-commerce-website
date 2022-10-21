/*
import { combineReducers } from "redux";
import todosReducer from "./todos";
import visibilityFilterReducer from "./visibilityFilter";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
*/

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: { modal: modalReducer, user: userReducer, cart: cartReducer },
});

export default store;

/*
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
});

const store = configureStore(rootReducer);
export default store;
*/
