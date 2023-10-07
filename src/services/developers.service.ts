import {
  TCreateDeveloper,
  TDeveloper,
  TDeveloperResult,
  TUpdateDeveloper,
} from "../interfaces/developers.interface";
import {
  TGetDeveloperInfos,
  TGetDeveloperInfosResult,
} from "../interfaces/developersInfos.interface";
import { defaultQuery } from "../utils/defaultQuery";

export const createDeveloperService = async (
  data: TCreateDeveloper
): Promise<TDeveloper> => {
  const queryResult = await defaultQuery(
    `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;`,
    [Object.keys(data), Object.values(data)]
  );

  return queryResult.rows[0];
};

export const getDeveloperService = async (
  data: string
): Promise<TGetDeveloperInfos> => {
  const queryResult: TGetDeveloperInfosResult = await defaultQuery(
    `SELECT
  "d"."id" AS "developerId",
  "d"."name" AS "developerName",
  "d"."email" AS "developerEmail",
  "di"."developerSince" AS "developerInfoDeveloperSince",
  "di"."preferredOS" AS "developerInfoPreferredOS"
FROM "developers" AS "d"
LEFT JOIN "developerInfos" AS "di"
  ON "di"."developerId" = "d"."id"
WHERE "d"."id" = (%L)
;`,
    [data]
  );

  return queryResult.rows[0];
};

export const updateDeveloperService = async (
  id: string,
  data: TUpdateDeveloper
): Promise<TDeveloper> => {
  const queryResult: TDeveloperResult = await defaultQuery(
    'UPDATE "developers" SET (%I) = ROW (%L) WHERE "id" = (%L) RETURNING *;',
    [Object.keys(data), Object.values(data), id]
  );

  return queryResult.rows[0];
};

export const deleteDeveloperService = async (id: string): Promise<void> => {
  await defaultQuery('DELETE FROM "developers" WHERE "id" = (%L);', [id]);
};
