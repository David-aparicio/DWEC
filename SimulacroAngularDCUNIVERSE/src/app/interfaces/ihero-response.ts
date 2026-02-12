import { Ihero } from "./ihero";

export interface IheroResponse {
    content: Ihero[];
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
}
