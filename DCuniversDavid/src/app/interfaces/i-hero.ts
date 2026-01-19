import { IPower } from "./i-power";

export interface IHero {
    id: number;
    heroName: string;
    fullName: string;
    image1: string;
    image2: string;
    image3: string;
    gender: string;
    race: string;
    alignment: string;
    powerstats?: IPower;
}
