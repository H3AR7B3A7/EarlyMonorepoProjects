export interface Game {
  name: string;
  id: string;
  image?: string;
  description: string;
  price: number;
  rating?: number;
  reviews?: Array<Review>;
}

export interface Test {
  nums: Array<number>;
  strings: Array<string>;
}

export interface Review {
  game?: string;
  rating: number;
  content: string;
}

export interface CartItem {
  game: string;
  quantity: number;
}
