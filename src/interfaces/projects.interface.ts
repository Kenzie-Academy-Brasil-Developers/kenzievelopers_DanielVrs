import { QueryResult } from "pg";

export type TProject = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date;
  developerId: number;
};

export type TProjectResult = QueryResult<TProject>;
