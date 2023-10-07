import { Request, Response } from "express";
import { TCreateDeveloperInfos } from "../interfaces/developersInfos.interface";
import { createDeveloperInfosService } from "../services/developerInfos.service";

export const createDeveloperInfosController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCreateDeveloperInfos = {
    ...req.body,
    developerId: req.params.id,
  };

  const developerInfos: TCreateDeveloperInfos =
    await createDeveloperInfosService(data);

  return res.status(201).json(developerInfos);
};
