import prisma from "../../utils/prisma.util";
import { Service } from "../service";

class UserService extends Service {
  constructor() {
    super();
  }

  getUser = async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return this.response({
        code: 404,
        message: "User not found",
        data: null,
      });
    }

    return this.response({
      code: 200,
      message: "User fetched successfully",
      data: user,
    });
  };
}

export default new UserService();
