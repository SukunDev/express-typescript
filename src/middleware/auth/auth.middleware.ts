import { Response, NextFunction } from "express";
import { AuthRequest } from "../../interfaces";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

const AuthMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      code: 401,
      message: "Unauthorized - no token provided",
      data: null,
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // taruh data user ke `req.user`
    next();
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: "Invalid or expired token",
      data: null,
    });
  }
};

export default AuthMiddleware;
