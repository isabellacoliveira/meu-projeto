export interface CardInfo {
    imgSrc: string;
    title: string;
    description: string;
    impacts: { id: number; description: string }[];
    values: string[];
  }