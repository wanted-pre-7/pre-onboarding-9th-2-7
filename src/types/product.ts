export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}
export interface IReservationProduct extends IProduct {
  id: number;
  cnt: number;
}
