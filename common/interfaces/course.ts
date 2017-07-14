import { TeacherBasic } from './teacher';
export interface CourseDictionary<T> {
    [key: number]: T
}

export interface CourseBasic {
    id: number;
    name: string;
    cover: string;
    cats: string[];
    type: string;
    ways: string[];
    fitAge: string;
    fitAgeTags: {
        id: number;
        label: string;
    }[];
    targetTags: {
        id: number;
        label: string;
    }[];
    price: number;
    priceUnitNum: number;
    priceUnit: string;
    intro?: string;
    teachers: TeacherBasic[];
}
export interface RecommendsResponseBasic {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    recommends: CourseBasic[];
}