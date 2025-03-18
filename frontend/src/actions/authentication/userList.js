import axios from "axios";
import { useSelector } from "react-redux";

import { logout } from "./userLogout";

export const listUsers = async (
  token,
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc",
  role = ""
) => {
  try {
    // let config = {
    //   Authorization: `Bearer ${token}`,
    // };

    const { data } = await axios.get(`/users`, {
      params: {
        page,
        limit,
        sort,
        role,
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
