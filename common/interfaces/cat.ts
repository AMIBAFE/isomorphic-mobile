export interface CatDictionary<T> {
    [key: number]: T;
}

export interface catBasic {
    id: number;
    label: string;
    description: string;
    cover: string;
}
