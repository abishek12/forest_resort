import axios from "axios";
import { logout } from "./authentication/userLogout";

export const listOffers = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc"
) => {
  try {
    const { data } = await axios.get(`http://localhost:8888/api/offer`, {
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
    await axios.delete(`http://localhost:8888/api/offer/${id}/delete`);
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

export const editOffer = async (id, userInfo) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.put(`http://localhost:8888/api/offer/${id}/edit`);
  } catch (error){
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      logout();
    }
    throw new Error(message);
  }
}

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
      `http://localhost:8888/api/offer`,
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
      `http://localhost:8888/api/category/${id}`,
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
