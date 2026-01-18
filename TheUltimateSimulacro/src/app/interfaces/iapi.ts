import { Iproducto } from "./iproducto";

export interface Iapi {
  total: number;
  skip: number;
  limit: number;
  products: Iproducto[];
}
