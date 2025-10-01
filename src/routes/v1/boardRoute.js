import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardValidation } from '~/validations/boardValidation.js';
import { boardController } from '~/controllers/boardController.js';
const Router = express.Router();

Router.route('')
.get((req, res) => {
  res.status(StatusCodes.OK).json({"message": "Board route is working!"});
})
.post(boardValidation.creatNew, boardController.createNew)
.put((req, res) => {
  res.status(StatusCodes.OK).json({"message": "Board updated!"});
})
.delete((req, res) => {
  res.status(StatusCodes.OK).json({"message": "Board deleted!"});
})

export const boardRoute = Router;