import jwt from "jsonwebtoken";

export const tokenGenerator = async (data) => {
  const token = jwt.sign(
    {
      userId: data._id,
      fullname: data.fullname,
      email: data.email,
      roles: data.roles,
      phoneNo: data.phone_no,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "12h" }
  );

  return token;
};
