import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  currentUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup(state, payload) {
      state.isLoggedIn = false;
      state.currentUser = payload;
    },
    login(state, payload) {
      state.isLoggedIn = true;
      //state.currentUser = true;
      state.currentUser = payload;
      console.log(payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

// Select state currentUser from slice
export const selectUser = (state) => state.user.currentUser;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectErrorMessage = (state) => state.user.errorMessage;

//export Action
export const { login, logout } = userSlice.actions;

//export Reducer
const userReducer = userSlice.reducer;

export default userReducer;
