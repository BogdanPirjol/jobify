import CustomError from "./customError.js";
import { StatusCodes } from 'http-status-codes';

class NotFound extends CustomError {
    constructor(errorMessage){
        super(errorMessage);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

export default NotFound;