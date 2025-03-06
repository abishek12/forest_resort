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
    console.log(error);
    throw error;
  }
};
