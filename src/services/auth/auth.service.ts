import bcrypt from "bcrypt";
import prisma from "../../utils/prisma.util";
import { Service } from "../service";
import jwt from "jsonwebtoken";

class AuthService extends Service {
  constructor() {
    super();
  }

  register = async (name: string, email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return this.response({
        code: 400,
        data: null,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return this.response({
      code: 201,
      data: { id: newUser.id, name: newUser.name, email: newUser.email },
      message: "Registration successful",
    });
  };

  login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return this.response({
        code: 404,
        data: null,
        message: "User not found",
      });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return this.response({
        code: 401,
        data: null,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return this.response({
      code: 200,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      },
      message: "Login successful",
    });
  };
}

export default new AuthService();
