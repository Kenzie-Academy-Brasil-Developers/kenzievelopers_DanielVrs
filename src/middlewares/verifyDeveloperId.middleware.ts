import { NextFunction, Request, Response } from "express";
import {
  TDeveloper,
  TDeveloperResult,
} from "../interfaces/developers.interface";
import { defaultQuery } from "../utils/defaultQuery";
import AppError from "../errors/App.error";

export const verifyDeveloperId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const queryResult: TDeveloperResult = await defaultQuery(
    'SELECT * FROM "developers" WHERE "id" = (%L);',
    [id]
  );

  if (!queryResult.rowCount) {
    throw new AppError("Developer not found", 404);
  }

  const foundDeveloper: TDeveloper = queryResult.rows[0];

  res.locals = { ...res.locals, foundDeveloper };

  return next();
};
