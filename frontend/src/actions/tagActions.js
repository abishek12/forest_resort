import axios from "axios";
import { logout } from "./authentication/userLogout";

export const listTags = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc",
  status
) => {
  try {
    const { data } = await axios.get(`/tag`, {
      params: {
        page,
        limit,
        sort,
      },
    });
    console.log("MyData: ", data);
    return data.items;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const removeTag = async (id) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    await axios.delete(`/tag/${id}`);
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

export const createTag = async (tagData) => {
  try {
    // pass userInfo in params in function
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.post(`/tag`, tagData);
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

export const updateTag = async (id, updateData) => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.put(
      `/tag/${id}`,
      updateData
      // config
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