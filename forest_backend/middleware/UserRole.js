export const authorizeRole = (allowedRoles) => {
    return async (req, res, next) => {
      // Get user information from the request
      const user = req.user;
  
      if (!user || !user.roles) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // Check if any of the allowed roles exist in the user's roles object and are set to true
      const hasAccess = allowedRoles.some(role => user.roles[role]);
  
      if (hasAccess) {
        next(); // Proceed to the next middleware or route handler
      } else {
        return res.status(403).json({ message: "Access Denied" });
      }
    };
  };
  