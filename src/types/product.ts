export interface Product {
  id: number;
  title: string;
  price: number;
  rate: number;
  image: string;
}

export interface ProductGroup {
  id: number;
  title: string;
  products: Product[];
}