import axios from "axios";
import { logout } from "./userLogout";

export const listUsers = async (
  keyword = "",
  page = 1,
  limit = 10,
  sort = "desc"
) => {
  try {
    const { data } = await axios.get(`http://localhost:8888/api/users`);

    return data.items;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
