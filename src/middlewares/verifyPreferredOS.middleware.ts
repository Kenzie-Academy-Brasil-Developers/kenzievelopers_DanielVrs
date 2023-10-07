import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const verifyPreferredOS = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const preferredOS = req.body.preferredOS;

  if (
    preferredOS === "Windows" ||
    preferredOS === "Linux" ||
    preferredOS === "MacOS"
  ) {
    return next();
  }

  throw new AppError("Invalid OS option.", 400);
};
