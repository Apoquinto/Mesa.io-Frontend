export default interface Dish {
  items: Ind_Dish[];
}

export interface Ind_Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  dishThumbnailURL: string;
  idsCategories: string[];
  dishThumbnailURL: string;
}
