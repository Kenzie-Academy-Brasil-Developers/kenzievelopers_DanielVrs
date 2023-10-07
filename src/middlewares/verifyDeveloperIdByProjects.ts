import { NextFunction, Request, Response } from "express";
import {
  TDeveloper,
  TDeveloperResult,
} from "../interfaces/developers.interface";
import { defaultQuery } from "../utils/defaultQuery";
import AppError from "../errors/App.error";

export const verifyDeveloperIdByProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body;

  const queryResult: TDeveloperResult = await defaultQuery(
    'SELECT * FROM "developers" WHERE "id" = (%L);',
    [developerId]
  );

  if (queryResult.rows[0]) {
    return next();
  }
  throw new AppError("Developer not found", 404);
};
