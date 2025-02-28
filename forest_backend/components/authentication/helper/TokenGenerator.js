import jwt from "jsonwebtoken";

export const tokenGenerator = async (data) => {
  const token = jwt.sign(
    { userId: data._id, email: data.email, roles: data.roles },
    process.env.JWT_TOKEN,
    { expiresIn: "1h" }
  );

  return token;
};
