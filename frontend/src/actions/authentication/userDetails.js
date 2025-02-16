import axios from "axios";
import{
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} from "../constants/userConstants";
import { logout } from "./userLogout";

export const getUserDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_DETAILS_REQUEST
        });
        const {
            userLogin: { userInfo },
        } = getState();
    
    const config ={
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        },
    };
    const {data} = await axios.get(`http://localhost:5000/api/users/${id}`,
        config
    );
    dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data
    });
    } catch (error){
        const errorMessage = error.res && error.res.data.message ? error.res.data.message : error.message
        if(message === "Token Fail!"){
            dispatch(logout());
        }
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: errorMessage
        });
    }
};