import axios from "axios";
import { logout } from "./authentication/userLogout";

export const listTag = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc"
) => {
  try {
    const { data } = await axios.get(`http://localhost:8888/api/tag`, {
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

export const listBlogInfo = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8888/api/blog/${id}`);
    return data;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const removeBlog = async (id, userInfo) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`http://localhost:8888/api/blogs/${id}`, config);
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
    // pass userInfo in params in function
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.post(
      `http://localhost:8888/api/blog`,
      blogData
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

export const updateBlog = async (blog, userInfo) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:8888/api/blogs/${blog._id}`,
      blog,
      config
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

export const createBlogReview = async (blogId, review, userInfo) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.post(
      `http://localhost:8888/api/blogs/${blogId}/reviews`,
      review,
      config
    );
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

export const listTopBlogs = async () => {
  try {
    const { data } = await axios.get(`http://localhost:8888/api/blogs/top`);
    return data;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
