export type CampType = "popular" | "sale";
export interface ICamp {
  id?: number;
  name: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail?: string;
}
export interface ICampDetail {
  id: number;
  name: string;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  process: string;
  thumbnail: string;
}
