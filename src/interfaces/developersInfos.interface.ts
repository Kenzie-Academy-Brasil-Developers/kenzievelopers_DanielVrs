import { QueryResult } from "pg";

export type TGetDeveloperInfos = {
  developerId: number;
  developerName: string;
  developerEmail: string;
  developerInfoDeveloperSince: Date | null;
  developerInfoPreferredOS: string | null;
};

export type TCreateDeveloperInfos = {
  id: number;
  developerSince: Date;
  preferredOS: string;
  developerId: number;
};

export type TGetDeveloperInfosResult = QueryResult<TGetDeveloperInfos>;
export type TCreateDeveloperInfosResult = QueryResult<TCreateDeveloperInfos>;
