export interface PropsFromState {
  component: React.ElementType;
}

export interface FoodUnit {
  bílkoviny: number;
  cena: number;
  id: number;
  image: string;
  kalorie: number;
  množství: number;
  picked: boolean;
  sacharidy: number;
  tuky: number;
  vláknina: number;
}

export interface UserObject {
  token: string;
  email: string;
  uid: string;
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

export interface AuthObject {
  token: string;
  uid: string;
}
