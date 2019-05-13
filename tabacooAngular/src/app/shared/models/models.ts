export interface ICategory {
  id: number;
  name: string;
  created_by: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  count: string;
  category: string;
}