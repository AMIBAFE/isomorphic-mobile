import { CourseBasic } from './course';

export interface TeacherDictionary<T> {
    [key: number]: T
}

export interface TeacherBasic {
    id: number;
    name: string;
    labels: string;
    teachingAge: number;
    avatar: string;
    courses: CourseBasic[];
    shortIntro: string;
    intro: string;
    selfIntro?: string;
    isHot?: boolean;
}

export interface RecommendsResponseBasic {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    recommends: TeacherBasic[];
}