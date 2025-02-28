import axios from "axios";
import{
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL
} from "../../constants/userConstants";
import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";
import { logout } from "./userLogout";

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        });
        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                "content-type": "applications/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        };
        const {data} = await axios.put(`http://localhost:8888/api/users/profile`,
        user,
         config);
         dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
         });
         dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
         });
         localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error){
        const errorMessage = error.res && error.res.data.message ? error.res.data.message : error.message;
        if(message === "Token Fail!"){
            dispatch(logout());
            dispatch({
                type: USER_UPDATE_PROFILE_FAIL,
                payload: errorMessage
            });
        }
    }
};
