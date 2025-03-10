import axios from "axios";
import { logout } from "./authentication/userLogout";

export const listService = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc"
) => {
  try {
    const { data } = await axios.get(`/services`, {
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

export const removeService = async (id) => {
  try {
    await axios.delete(`services/${id}`);
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

//edit services
export const editService = async (id, serviceData) => {
  try {
    const { data } = await axios.put(`/services/${id}`, serviceData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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

export const createService = async (serviceData) => {
  try {
    console.log(serviceData);
    // pass userInfo in params in function
    const config = {
      headers: {
        // Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(`/services`, serviceData, config);
    return data;
  } catch (error) {
    console.log(error);
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
    const { data } = await axios.put(`/category/${id}`, catdata);
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
