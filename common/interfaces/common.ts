export interface RecommendBasic {
    id: number;
    role: number;
    avatarUrl?: string;
    name: string;
    selfIntro?: string;
    favCount?: number;
    viewedCount?: number;
    teachingAge?: number;
    certified?: boolean;
    courses: {
        cid: number;
        name: string;
        type?: string;
        floorPrice?: number | string;
        priceUnit?: number;
    }[];
    address?: string;
}
export interface RecommendsResponseBasic {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    recommends: RecommendBasic[];
}