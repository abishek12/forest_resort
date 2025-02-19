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
    const { data } = await axios.get(`http://localhost:8888/api/booking`, {
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
    const { data } = await axios.get(`http://localhost:8888/api/booking/${id}`);
    return data;
  } catch (error) {
    console.error(
      "Error fetching appointment details:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Remove an appointment
export const removeAppointment = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`http://localhost:5000/api/appointments/${id}`, config);
  } catch (error) {
    console.error(
      "Error deleting appointment:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/appointments`,
      appointmentData
    );
    return data;
  } catch (error) {
    console.error(
      "Error creating appointment:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Update an appointment
export const updateAppointment = async (appointment, token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/appointments/${appointment._id}`,
      appointment,
      config
    );
    return data;
  } catch (error) {
    console.error(
      "Error updating appointment:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Update appointment viewed status
export const updateAppointmentViewedStatus = async (id, viewed, token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/appointments/${id}/viewed`,
      { viewed },
      config
    );
    return data;
  } catch (error) {
    console.error(
      "Error updating appointment viewed status:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Create a review for an appointment
export const createAppointmentReview = async (appointmentId, review, token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(
      `http://localhost:5000/api/appointments/${appointmentId}/reviews`,
      review,
      config
    );
  } catch (error) {
    console.error(
      "Error creating review:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// Get top appointments
export const listTopAppointments = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/appointments/top`
    );
    return data;
  } catch (error) {
    console.error(
      "Error fetching top appointments:",
      error.response ? error.response.data.message : error.message
    );
  }
};
