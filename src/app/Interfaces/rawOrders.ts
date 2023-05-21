export default interface rawOrders{
    // id:number;
    // dishId: number;
    // dishName: string;
    // amount: number;
    // date: Date;
    // dishData: string[];

    id: number;
    userId: number;
    dishId: number;
    dishName: string;
    amount: number;
    datePurchase: Date;
    dish: {
      id: number;
      name: string;
      description: string;
      imgDish: string | null;
      price: string;
      createdAt: Date;
      idsCategories: string[];
    };
    user: {
      id: number;
      username: string;
      password: string;
      role: string;
    };
}