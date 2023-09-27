import { BaseError, UniqueConstraintError, ValidationError, ValidationErrorItem } from "sequelize";
import { NotFound, CustomError } from "../error/index.js";
import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Ups! Something went wrong.",
  };
  if (err instanceof BaseError) {
    if (err instanceof UniqueConstraintError) {
      defaultError.statusCode = StatusCodes.BAD_REQUEST;
      defaultError.msg = err.errors.map(err => err.message)
    }
    if (err instanceof ValidationError) {
      defaultError.statusCode = StatusCodes.BAD_REQUEST;
      defaultError.msg = err.errors.map(err => err.message)
    }
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandler;
