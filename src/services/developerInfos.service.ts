import {
  TCreateDeveloperInfos,
  TCreateDeveloperInfosResult,
} from "../interfaces/developersInfos.interface";
import { defaultQuery } from "../utils/defaultQuery";

export const createDeveloperInfosService = async (
  data: Partial<TCreateDeveloperInfos>
): Promise<TCreateDeveloperInfos> => {
  const queryResult: TCreateDeveloperInfosResult = await defaultQuery(
    'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
    [Object.keys(data), Object.values(data)]
  );

  return queryResult.rows[0];
};
