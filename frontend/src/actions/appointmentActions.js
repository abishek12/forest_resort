import axios from "axios";

// Get list of appointments
export const listAppointments = async (
  keyword = "",
  pageNumber = 1,
  limit = 10,
  sort = "",
  statusFilter = ""
) => {
  try {
    const { data } = await axios.get(`booking`, {
      params: {
        page: pageNumber,
        limit: limit,
        keyword,
        sort,
        status: statusFilter,
      },
    });
    return data;
  } catch (error) {
    console.error(
      "Error fetching appointments:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Get appointment details by ID
export const listAppointmentInfo = async (id) => {
  try {
    const { data } = await axios.get(`/booking/${id}`);
    return data;
  } catch (error) {
    console.error(
      "Error fetching appointment details:",
      error.response ? error.response.data.message : error.message
    );
  }
};

