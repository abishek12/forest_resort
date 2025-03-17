import axios from "axios";
import api from "./api";
import { logout } from "./authentication/userLogout";

const userInfo = localStorage.getItem("userInfo");

export const listBlogs = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc",
  q = ""
) => {
  try {
    const { data } = await api.get(`/blog`, {
      params: {
        page,
        limit,
        sort,
        q,
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

export const listHomeBlogs = async (
  keyword = "",
  page = 1,
  limit = 3,
  sort = "desc",
  q = ""
) => {
  try {
    const { data } = await axios.get(`/blog`, {
      params: {
        page,
        limit,
        sort,
        q,
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

export const listBlogInfo = async (id) => {
  try {
    const { data } = await axios.get(`/blog/${id}`);
    return data;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const removeBlog = async (id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/blog/${id}`);
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

export const createBlog = async (blogData) => {
  try {
    console.log(blogData);
    const { data } = await api.post(`/blog`, blogData);
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

export const updateBlog = async (blog, userInfo) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/blogs/${blog._id}`, blog, config);
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
