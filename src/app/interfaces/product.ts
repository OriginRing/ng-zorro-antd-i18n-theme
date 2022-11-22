import { Categories } from '@my/interfaces/productCategory';

export interface Product {
  totalCount?: number;
  pages?: number;
  products?: ProductList[];
}
export interface ProductList {
  _id?: string;
  name: string;
  descriptions: string;
  onSale: boolean;
  content: string;
  quantity: number;
  price: number;
  coverImg: string;
  productCategory: Categories;
}
