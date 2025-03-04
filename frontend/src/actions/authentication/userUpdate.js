import axios from "axios";
import{
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL
} from "../constants/userConstants";
import { USER_DETAILS_SUCCESS,
         USER_DETAILS_RESET
 } from "../../constants/userConstants";
import { logout } from "./userLogout";

export const usersUpdate = (user) => async(dispatch, getState) => {
    try{
    dispatch({
        type: USER_UPDATE_REQUEST
    });
    const {
        userLogin: {userInfo}
    } = getState();
    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "content-type": "applications/json"
        },
    };
    const {data} = await axios.put(`/users/${user._id}`,
        user,
        config
    )
    dispatch({
        type: USER_UPDATE_SUCCESS
    });

    dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data
    });

    dispatch({
        type: USER_DETAILS_RESET
    });
 } catch (error) {
    const errorMessage = error.res && error.res.data.message ? error.res.data.message : error.message;
    if(message === "Token Fail!"){
        dispatch(logout());
    }
    dispatch({
        type: USER_UPDATE_FAIL,
        payload: errorMessage
    });
 }
};