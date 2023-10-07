import { NextFunction, Request, Response } from "express";
import { TDeveloperResult } from "../interfaces/developers.interface";
import { defaultQuery } from "../utils/defaultQuery";
import AppError from "../errors/App.error";

export const verifyProjectsId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const queryResult: TDeveloperResult = await defaultQuery(
    'SELECT * FROM "projects" WHERE "id" = (%L);',
    [id]
  );

  if (queryResult.rows[0]) {
    return next();
  }
  throw new AppError("Project not found", 404);
};
