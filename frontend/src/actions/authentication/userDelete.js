import axios from "axios";
import{
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL
} from "../../constants/userConstants";
import { logout } from "./userLogout";

export const usersDelete = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: USER_DELETE_REQUEST
        });
        const {
            userLogin: {userInfo}
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const {data} = await axios.delete(`http://localhost:8888/api/users/${id}`,
            config
        );
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        const errorMessage = error.res && error.res.data.message ? error.res.data.message : error.message;
        if(message === "Token Fail!"){
            dispatch(logout());
        }
        dispatch ({
            type: USER_DELETE_FAIL,
            payload: errorMessage
        });
    }
};