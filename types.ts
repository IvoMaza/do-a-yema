
export enum ProductionType {
  CageFree = "Gallinas camperas",
  Organic = "Orgánicos",
  PastureRaised = "Pastoril",
  Conventional = "Convencional"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

export interface Producer {
  id: string;
  name: string;
  location: string;
  productionType: ProductionType;
  rating: number;
  certifications: string[];
  imageUrl: string;
  description: string;
  products: Product[];
  reviews: Review[];
}

export interface Order {
  id: string;
  customerName: string;
  items: { productName: string; quantity: number }[];
  status: 'pending' | 'confirmed' | 'delivered';
  deliveryDate: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
