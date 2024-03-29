import { QueryResult } from "pg";

export type TDeveloper = {
  id: number;
  name: string;
  email: string;
};

export type TCreateDeveloper = Omit<TDeveloper, "id">;

export type TDeveloperResult = QueryResult<TDeveloper>;

export type TUpdateDeveloper = Partial<TDeveloper>;
