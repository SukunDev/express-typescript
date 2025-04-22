import { ResponseModel } from "../../interfaces";

class Service {
  response({ code, message, data, error }: ResponseModel) {
    return {
      code,
      message:
        code !== 500
          ? message
          : process.env.DEBUG
          ? message
          : "Request failed due to an internal error.",
      data,
      error,
    };
  }
}

export { Service };
