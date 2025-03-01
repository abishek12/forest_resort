import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { logout } from "./userLogout";

export const getUserDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8888/api/users/${id}`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (errorMessage === "Token Fail!") {
      dispatch(logout());
    }

    dispatch({
      type: USER_DETAILS_FAIL,
      payload: errorMessage,
    });
  }
};
