import { Library } from "./library-type";

export type Manga = {
    id: number, 
    title: string;
    author: string;
    description: string;
    library: Library;
}