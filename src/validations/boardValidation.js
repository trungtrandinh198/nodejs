import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import ApiError from '~/utils/ApiError';

const creatNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(1).max(255)
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next()
  } catch (err) {
    const errorMessage = new Error(err).message

    const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
    next(customError)
  }

}

export const boardValidation = {
  creatNew
}