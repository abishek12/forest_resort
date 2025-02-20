import axios from "axios";
import { jwtDecode } from "jwt-decode";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_DETAILS,
} from "../../constants/userConstants";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8888/api/auth/login",
      { email, password },
      config
    );

    console.log("Login response:", data);

    const decodedToken = jwtDecode(data.accessToken);

    const userInfo = {
      accessToken: data.accessToken,
      role: decodedToken.roles,
      fullname: decodedToken.fullname,
      email: decodedToken.email,
      phone_no: decodedToken.phone_no,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userInfo,
    });
    // localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    let errorMessage = error.message;
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    dispatch({ type: USER_LOGIN_FAIL, payload: errorMessage });
  }
};
