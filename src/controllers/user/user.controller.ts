import { Response } from "express";
import { AuthRequest } from "../../interfaces";
import { userService } from "../../services";

class UserController {
  getUser = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const response = await userService.getUser(userId);
    return res.status(response.code).json(response);
  };
}

export default new UserController();
