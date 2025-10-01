import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = (req, res, next) => {
 try {
  throw new ApiError(StatusCodes.BAD_REQUEST, 'Not implemented yet')
    /*res.status(StatusCodes.CREATED).json({
      message: "Board created!"
    })*/
  } catch (err) {
   next(err)
  }
}

export const boardController = { 
  createNew
}