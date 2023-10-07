import { Request, Response } from "express";
import { TProject } from "../interfaces/projects.interface";
import {
  createProjectService,
  getProjectService,
  updateProjectService,
} from "../services/projects.service";

export const createProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: TProject = await createProjectService(req.body);
  return res.status(201).json(project);
};

export const getProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developerInfos: TProject = await getProjectService(req.params.id);
  return res.status(200).json(developerInfos);
};

export const updateProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: TProject = await updateProjectService(req.params.id, req.body);
  return res.status(200).json(project);
};
