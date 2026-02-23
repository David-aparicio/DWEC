import { Ininja } from "./ininja";

export interface IninjaResponse {
    content: Ininja[];
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    size: number;
}
