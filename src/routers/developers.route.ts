import { Router } from "express";
import {
  createDeveloperController,
  deleteDeveloperController,
  getDeveloperController,
  updateDeveloperController,
} from "../controllers/developers.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyDeveloperId } from "../middlewares/verifyDeveloperId.middleware";
import { createDeveloperInfosController } from "../controllers/developersInfos.controller";
import { verifyPreferredOS } from "../middlewares/verifyPreferredOS.middleware";
import { verifyDeveloperInfosExist } from "../middlewares/verifyDeveloperInfosExist.middleware";

export const developersRoutes: Router = Router();

developersRoutes.post("/", verifyEmail, createDeveloperController);

developersRoutes.use("/:id", verifyDeveloperId);

developersRoutes.get("/:id", getDeveloperController);
developersRoutes.patch("/:id", verifyEmail, updateDeveloperController);
developersRoutes.delete("/:id", deleteDeveloperController);

developersRoutes.post(
  "/:id/infos",
  verifyPreferredOS,
  verifyDeveloperInfosExist,
  createDeveloperInfosController
);
