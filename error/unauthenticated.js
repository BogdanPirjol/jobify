import { CustomError } from "./index.js";
import { StatusCodes } from "http-status-codes";

class UnauthenticatedError extends Error {
  constructor(props) {
    super(props);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;