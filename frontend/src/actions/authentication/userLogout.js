// import axios from "axios";
import{
    USER_LOGOUT
} from "../constants/userConstants";

import { USER_DETAILS_RESET,
     USER_LIST_RESET } from "../../constants/userConstants";

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_LIST_RESET});
};
