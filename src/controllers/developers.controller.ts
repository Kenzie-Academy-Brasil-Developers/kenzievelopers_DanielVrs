import { Request, Response } from "express";
import { TDeveloper } from "../interfaces/developers.interface";
import {
  createDeveloperService,
  deleteDeveloperService,
  getDeveloperService,
  updateDeveloperService,
} from "../services/developers.service";
import { TGetDeveloperInfos } from "../interfaces/developersInfos.interface";

export const createDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: TDeveloper = await createDeveloperService(req.body);
  return res.status(201).json(developer);
};

export const getDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developerInfos: TGetDeveloperInfos = await getDeveloperService(
    req.params.id
  );
  return res.status(200).json(developerInfos);
};

export const updateDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: TDeveloper = await updateDeveloperService(
    req.params.id,
    req.body
  );
  return res.status(200).json(developer);
};

export const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<void> => {
  await deleteDeveloperService(req.params.id);
  res.status(204).json();
};
