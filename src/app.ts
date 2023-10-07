import "express-async-errors";
import express, { Application } from "express";
import { routes } from "./routers/index.route";
import { handleErrors } from "./middlewares/handleErrors.middleware";

const app: Application = express();

app.use(express.json());

app.use("/", routes);

app.use(handleErrors);

export default app;
