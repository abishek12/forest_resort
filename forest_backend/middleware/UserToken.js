import jwt from "jsonwebtoken";
import { User } from "../components/users/model/UserModel.js";

export const authenticateToken = async (req, res, next) => {
  try {
    const accessToken =
      req.cookies.token || req.headers["authorization"]?.split(" ")[1];
    const refreshToken = req.headers["x-refresh-token"];
    const { JWT_TOKEN, JWT_REFRESH, NODE_ENV, ACCESS_TOKEN_EXPIRY } =
      process.env;

    // 1. Validate Access Token
    if (accessToken) {
      try {
        const decoded = jwt.verify(accessToken, JWT_TOKEN);
        req.user = decoded.data;
        return next(); // Token is valid, proceed
      } catch (error) {
        if (!(error instanceof jwt.TokenExpiredError)) {
          return res
            .status(403)
            .json({ status: 403, message: "Invalid Access Token" });
        }
        // If expired, proceed to refresh token verification
      }
    }

    // 2. Validate Refresh Token
    if (!refreshToken) {
      return res
        .status(401)
        .json({ status: 401, message: "No Refresh Token Provided" });
    }

    // 3. Decode Refresh Token
    let decodedRefresh = jwt.verify(refreshToken, JWT_REFRESH);
    let user_id = decodedRefresh.data.id;

    // 4. Find User in Database
    let user = await User.findById(user_id); // Ensure token exists in DB
    if (!user) {
      return res.status(401).json({ status: 401, message: "User not found" });
    }

    // 5. Generate New Access Token
    const newAccessToken = jwt.sign(
      {
        data: { id: user._id, email: user.email, role: user.roles },
      },
      JWT_TOKEN,
      {
        expiresIn: ACCESS_TOKEN_EXPIRY,
      }
    );

    // 6. Set Response Headers and Cookies
    res.cookie("token", newAccessToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "none",
      maxAge: parseInt(ACCESS_TOKEN_EXPIRY),
    });

    req.user = { id: user._id, email: user.email, role: user.roles };
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
};
