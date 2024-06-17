import { Library } from "./library-type";

export type Manga = {
    id: number, 
    title: string;
    author: string;
    avatar: string;
    volumeNumber: string;
    library: Library;
}