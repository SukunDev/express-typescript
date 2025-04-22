import { Request, Response } from "express";
import { authService } from "../../services";

class AuthController {
  register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const response = await authService.register(name, email, password);
    return res.status(response.code).json(response);
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    return res.status(response.code).json(response);
  };
}

export default new AuthController();
