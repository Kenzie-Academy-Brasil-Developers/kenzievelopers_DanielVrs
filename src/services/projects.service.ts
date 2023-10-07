import { TProject, TProjectResult } from "../interfaces/projects.interface";
import { defaultQuery } from "../utils/defaultQuery";

export const createProjectService = async (
  data: TProject
): Promise<TProject> => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 60);

  const newData: TProject = {
    ...data,
    endDate,
  };

  const queryResult: TProjectResult = await defaultQuery(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    [Object.keys(newData), Object.values(newData)]
  );
  return queryResult.rows[0];
};

export const getProjectService = async (id: string) => {
  const queryResult: TProjectResult = await defaultQuery(
    `SELECT 
    "p"."id" AS "projectId",
    "p"."name" AS "projectName",
    "p"."description" AS "projectDescription",
    "p"."repository" AS "projectRepository",
    "p"."startDate" AS "projectStartDate",
    "p"."endDate" AS "projectEndDate",
    "d"."name" AS "projectDeveloperName"
  FROM "projects" AS "p"
  LEFT JOIN "developers" AS "d" 
    ON "d"."id" = "p"."developerId"
  WHERE "p".id = (%L);
`,
    [id]
  );
  return queryResult.rows[0];
};

export const updateProjectService = async (id: string, data: TProject) => {
  const queryResult: TProjectResult = await defaultQuery(
    'UPDATE "projects" SET (%I) = ROW (%L) WHERE "id" = (%L) RETURNING *;',
    [Object.keys(data), Object.values(data), id]
  );
  return queryResult.rows[0];
};
