export interface CourseDictionary<T> {
    [key: number]: T
}

export interface CourseBasic {
    id: number;
    name: string;
    cover: string;
    type: string;
    fitAge: string;
    price: number;
    priceUnitNum: number;
    priceUnit: string;
    cats: string[];
    intro?: string;
}
export interface RecommendsResponseBasic {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    recommends: CourseBasic[];
}