import axios from "axios";
import{
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_SUCCESS
} from "../constants/userConstants";
import { logout } from "./userLogout";
import { USER_LIST_FAIL } from "../../constants/userConstants";

export const usersList = () => async (dispatch, getState) => {
try {
    dispatch ({
        type: USER_LIST_REQUEST,
    });
    const{
        userLogin: {userInfo},
    } = getState();

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
    },
  };

 const {data} = await axios.get(`http://localhost:5000/api/users`,
 config);
 dispatch({
    type: USER_LIST_SUCCESS,
    payload: data
 });
} catch (error) {
    const errorMessage = error.res && error.res.data.message ? error.res.data.message : error.message;
    if(message === "Token Fail!"){
        dispatch(logout());
  }
   dispatch({
    type: USER_LIST_FAIL,
    payload: errorMessage
  });
 }
};
