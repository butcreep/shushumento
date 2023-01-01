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
  tags: string[];
  desc: string;
  seat: string;
  reviewMaterial: string[];
  headerImage: string;
  images: string[];
  process: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
  reviews: { content: string; reviewer: string }[];
  faqs: { question: string; answer: string }[];
}
