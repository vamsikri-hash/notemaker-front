import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOGOUT
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //LoadUser
  const loaduser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("https://note-ticker.herokuapp.com/auth");
      console.log(res.data);
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.message
      });
    }
  };

  //Register User
  const register = async formdata => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "https://note-ticker.herokuapp.com/signup",
        formdata,
        config
      );
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loaduser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message
      });
    }
  };

  //LoginUser
  const login = async formdata => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    console.log(formdata);
    try {
      const res = await axios.post(
        "https://note-ticker.herokuapp.com/auth/login",
        formdata,
        config
      );
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loaduser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message
      });
    }
  };

  //Logout
  const logout = () => dispatch({ type: LOGOUT });
  //clearError
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loaduser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
