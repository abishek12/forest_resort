import axios from "axios";
import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_FAIL,
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
  CONTACT_UPDATE_REQUEST,
  CONTACT_UPDATE_SUCCESS,
  CONTACT_UPDATE_FAIL,
  CONTACT_CREATE_REVIEW_REQUEST,
  CONTACT_CREATE_REVIEW_SUCCESS,
  CONTACT_CREATE_REVIEW_FAIL,
  CONTACT_TOP_REQUEST,
  CONTACT_TOP_SUCCESS,
  CONTACT_TOP_FAIL,
} from "../constants/contactConstants";
import { logout } from "./userActions";

export const listContacts =
  (keyword = "", pageNumber = "") =>
    async (dispatch) => {
      try {
        dispatch({ type: CONTACT_LIST_REQUEST });

        const { data } = await axios.get(
          `http://localhost:5000/api/contacts`
          // `http://localhost:5000/api/contacts?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        // console.log("YOYO: ", data)

        dispatch({
          type: CONTACT_LIST_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CONTACT_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };

export const listContactInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/contacts/${id}`);

    dispatch({
      type: CONTACT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeContact = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`http://localhost:5000/api/contacts/${id}`, config);

    dispatch({
      type: CONTACT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createContact = (contactData) => async (dispatch, getState) => {
  try {
    // console.log("contactData", contactData)
    dispatch({
      type: CONTACT_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    // console.log("auth", userInfo)

    const { data } = await axios.post(`http://localhost:5000/api/contacts`, contactData);

    dispatch({
      type: CONTACT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CONTACT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateContact = (contact) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/contacts/${contact._id}`,
      contact,
      config
    );

    dispatch({
      type: CONTACT_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: CONTACT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CONTACT_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const updateContactViewedStatus = (id, viewed) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/contacts/${id}/viewed`,
      { viewed },
      config
    );

    dispatch({
      type: CONTACT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CONTACT_UPDATE_FAIL,
      payload: message,
    });
  }
};


export const createContactReview =
  (contactId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTACT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`http://localhost:5000/api/contacts/${contactId}/reviews`, review, config);

      dispatch({
        type: CONTACT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: CONTACT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

export const listTopContacts = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_TOP_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/contacts/top`);

    dispatch({
      type: CONTACT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
