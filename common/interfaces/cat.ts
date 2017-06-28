export interface CatDictionary<T> {
    [key: number]: T;
}

export interface catBasic {
    id: number;
    label: string;
}
export interface HotSearchCatBasic {
    hotSearchCats: catBasic[];
}
