import { NextFunction, Request, Response } from "express";
import { TCreateDeveloperInfosResult } from "../interfaces/developersInfos.interface";
import { defaultQuery } from "../utils/defaultQuery";
import AppError from "../errors/App.error";

export const verifyDeveloperInfosExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const queryResult: TCreateDeveloperInfosResult = await defaultQuery(
    'SELECT * FROM "developerInfos" WHERE "developerId" = (%L);',
    [req.params.id]
  );

  if (queryResult.rows[0]) {
    throw new AppError("Developer infos already exists", 409);
  }
  return next();
};
