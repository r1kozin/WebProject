export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  category: number;
  image: ImageBitmap;
}

export interface IAuth {
  token: string;
}
