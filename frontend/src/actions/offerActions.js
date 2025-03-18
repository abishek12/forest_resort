import axios from "axios";
import { logout } from "./authentication/userLogout";

export const listOffers = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc"
) => {
  try {
    const { data } = await axios.get(`/offer`, {
      params: {
        page,
        limit,
        sort,
      },
    });
    return data.items;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const removeOffer = async (id, userInfo) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    await axios.delete(`offer/${id}/delete`);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      logout();
    }
    throw new Error(message);
  }
};

export const editOffer = async (id, offerData) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //     "Content-Type": "application/json",
    //   },
    // };
    const { data } = await axios.put(
      `/offer/${id}`,
      offerData
    );
    return data;
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      logout();
    }
    throw new Error(message);
  }
};

export const createOffer = async (offerData) => {
  try {
    // pass userInfo in params in function
    const config = {
      headers: {
        // Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `/offer`,
      offerData
    );
    return data;
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      logout();
    }
    throw new Error(message);
  }
};

export const updateCategory = async (id, catdata) => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.put(
      `/category/${id}`,
      catdata
    );
    return data;
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      logout();
    }
    throw new Error(message);
  }
};
