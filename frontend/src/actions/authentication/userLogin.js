import axios from "axios";

import{
USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,
USER_LOGIN_FAIL
} from "../../constants/userConstants";

export const loginUser = (email, password) => async (dispatch) => {
try{
    dispatch({
        type: USER_LOGIN_REQUEST,
    });
    const config ={
        headers: {
         "content-type": "application/json"
        },
        body: JSON.stringify({email, password}),
    };

    const {data} = await axios.post(
        "http://localhost:8888/api/auth/login",
        {email, password},
        config
    );

    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
} catch (error){
    let errorMessage = error.message;
    if(error.res && error.res.data && error.res.data.message){
        errorMessage = error.res.data.message;
    }
    dispatch({
    type: USER_LOGIN_FAIL,
    payload: errorMessage
    });
}
};
