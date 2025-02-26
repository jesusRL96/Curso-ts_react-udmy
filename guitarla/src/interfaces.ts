export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

// export interface ICartProduct extends IProduct {
//   cantidad: number;
// }
//

export type ICartProduct = Pick<IProduct, "id" | "title" | "price"> & {
  cantidad: number;
};
