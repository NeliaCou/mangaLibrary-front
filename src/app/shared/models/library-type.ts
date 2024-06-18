import { Manga } from "./manga-type";

export type Library = {
    id: number;
    genre: string;
    mangas?: Manga[];
}