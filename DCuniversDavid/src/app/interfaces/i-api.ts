import { IHero } from "./i-hero";
import { Pageable } from "./pageable";
import { Sort2 } from "./sort2";

export interface IApi {
    content: IHero[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  first: boolean
  empty: boolean
}
