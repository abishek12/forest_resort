import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_CREATE_RESET,
  CONTACT_CREATE_FAIL,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_REQUEST,
  CONTACT_UPDATE_REQUEST,
  CONTACT_UPDATE_SUCCESS,
  CONTACT_UPDATE_FAIL,
  CONTACT_UPDATE_RESET,
  // CONTACT_CREATE_REVIEW_REQUEST,
  // CONTACT_CREATE_REVIEW_SUCCESS,
  // CONTACT_CREATE_REVIEW_FAIL,
  // CONTACT_CREATE_REVIEW_RESET,
  CONTACT_TOP_REQUEST,
  CONTACT_TOP_SUCCESS,
  CONTACT_TOP_FAIL,
} from "../constants/contactConstants";

export const contactListReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return { loading: true, contacts: [] };
    case CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        contacts: action.payload.contacts,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case CONTACT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDetailsReducer = (
  state = { contact: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CONTACT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CONTACT_DETAILS_SUCCESS:
      return { loading: false, contact: action.payload };
    case CONTACT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_DELETE_REQUEST:
      return { loading: true };
    case CONTACT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_CREATE_REQUEST:
      return { loading: true };
    case CONTACT_CREATE_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const contactUpdateReducer = (state = { contact: {} }, action) => {
  switch (action.type) {
    case CONTACT_UPDATE_REQUEST:
      return { loading: true };
    case CONTACT_UPDATE_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_UPDATE_RESET:
      return { contact: {} };
    default:
      return state;
  }
};

export const contactTopRatedReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_TOP_REQUEST:
      return { loading: true, contacts: [] };
    case CONTACT_TOP_SUCCESS:
      return { loading: false, contacts: action.payload };
    case CONTACT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
