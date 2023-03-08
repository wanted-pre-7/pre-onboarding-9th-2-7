const Product = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <img src={product.mainImage} alt={product.description}></img>
      <div>{product.price}</div>
      <div>{product.registrationDate}</div>
    </div>
  );
};

export default Product;

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
