import { CourseBasic } from "./course";

export interface RoleCardBasic {
    id: number;
    role?: number;
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

export interface RecommendBasic extends RoleCardBasic {}
export interface RecommendsResponseBasic {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    recommends: RecommendBasic[];
}

export interface PhotoBasic {
    src: string;
    alt: string;
    w?: number;
    h?: number;
}

export interface PhotoAlbumBasic {
    name: string;
    desc: string;
    photos: PhotoBasic[];
}
