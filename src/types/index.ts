export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
  count?: number;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}
