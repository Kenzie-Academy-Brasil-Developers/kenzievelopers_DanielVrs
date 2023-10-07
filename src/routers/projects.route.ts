import { Router } from "express";
import { verifyDeveloperIdByProject } from "../middlewares/verifyDeveloperIdByProjects";
import {
  createProjectController,
  getProjectController,
  updateProjectController,
} from "../controllers/projects.controller";
import { verifyProjectsId } from "../middlewares/verifyProjectsId";

export const projectsRoutes: Router = Router();

projectsRoutes.post("/", verifyDeveloperIdByProject, createProjectController);
projectsRoutes.get("/:id", verifyProjectsId, getProjectController);

projectsRoutes.patch(
  "/:id",
  verifyProjectsId,
  verifyDeveloperIdByProject,
  updateProjectController
);
