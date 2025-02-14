import axios form "axios";

import{
USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,
USER_LOGIN_FAIL
} from "constants/userConstants";

export const loginUser = (email, password) => async (dispatch) {
try{
    dispatch({
        type: USER_LOGIN_REQUEST,
    });
    const config ={
        method: "POST",
        headers: {
         "content-type": "application/json"
        },
        body: JSON.stringify({email, password}),
    };

    const {message} = await axios.post(
        "http://localhost:8000/api/users/login",
        {email, password},
    );

    if(message){

    }

}
}
