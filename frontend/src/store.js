import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  blogListReducer,
  blogDetailsReducer,
  blogDeleteReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogTopRatedReducer,
} from "./reducers/blogReducers";
import {
  contactListReducer,
  contactDetailsReducer,
  contactDeleteReducer,
  contactCreateReducer,
  contactUpdateReducer,
  contactTopRatedReducer,
} from "./reducers/contactReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  appointmentListReducer,
  appointmentDetailsReducer,
  appointmentDeleteReducer,
  appointmentCreateReducer,
  appointmentUpdateReducer,
  appointmentTopRatedReducer,
} from "./reducers/appointmentReducers";

const reducer = combineReducers({
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogTopRated: blogTopRatedReducer,
  contactList: contactListReducer,
  contactDetails: contactDetailsReducer,
  contactDelete: contactDeleteReducer,
  contactCreate: contactCreateReducer,
  contactUpdate: contactUpdateReducer,
  contactTopRated: contactTopRatedReducer,
  appointmentList: appointmentListReducer,
  appointmentDetails: appointmentDetailsReducer,
  appointmentDelete: appointmentDeleteReducer,
  appointmentCreate: appointmentCreateReducer,
  appointmentUpdate: appointmentUpdateReducer,
  appointmentTopRated: appointmentTopRatedReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
