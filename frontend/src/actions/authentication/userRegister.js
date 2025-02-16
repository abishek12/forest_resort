import axios from "axios";
import{
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from "../constants/userConstants";

export const register = (fullname, email, password, phone_no) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST,
        });
        const config = {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({fullname, email, password, phone_no}),
        };
        const {data} = await axios.post(
            "http://localhost:5000/api/users",
            {fullname, email, password, phone_no},
            config
        );
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: data
        });

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        let errorMessage = error.message;
        if(error.res && error.res.data && error.res.data.message){
            errorMessage = error.res.data.message;
        }
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: errorMessage
        });
     }
};
