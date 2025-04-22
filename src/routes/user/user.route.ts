import express from "express";
import { userController } from "../../controllers";

const userRoute = express.Router();

userRoute.get("/", userController.getUser);

export { userRoute };
