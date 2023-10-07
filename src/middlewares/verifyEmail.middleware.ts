import { NextFunction, Request, Response } from "express";
import { TDeveloperResult } from "../interfaces/developers.interface";
import AppError from "../errors/App.error";
import { defaultQuery } from "../utils/defaultQuery";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) return next();

  const queryResult: TDeveloperResult = await defaultQuery(
    `SELECT * FROM "developers" WHERE "email" = (%L);`,
    [email]
  );

  if (queryResult.rowCount) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
