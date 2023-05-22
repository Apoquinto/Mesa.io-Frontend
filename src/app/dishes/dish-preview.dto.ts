import Dish from '../Interfaces/dish';

export type DishPreviewDTO = Pick<
  Dish,
  'name' | 'description' | 'price' | 'dishThumbnailURL'
>;
