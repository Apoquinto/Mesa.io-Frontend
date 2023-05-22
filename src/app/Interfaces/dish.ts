export default interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  dishThumbnailURL: string;
  idsCategories: string[];
}
