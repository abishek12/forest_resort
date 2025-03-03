import axios from "axios";

export const registerUser = async (fullname, email, password, phone_no) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
        phone_no,
        roles: {
          subscriber: false,
        },
      }),
    };
    const response = await axios.post(
      "/auth/register",
      { fullname, email, password, phone_no },
      config
    );

    return response;
  } catch (error) {
    let errorMessage = error.message;
    if (error.res && error.res.data && error.res.data.message) {
      errorMessage = error.res.data.message;
    }
  }
};
