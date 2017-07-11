import { PhotoBasic, PhotoAlbumBasic } from "./common";
import { CourseBasic } from "./course";
import { TeacherBasic } from "./teacher";

export interface StudioBasic {
    id: number;
    name: string;
    intro: string;
    city?: string;
    area?: string;
    address?: string;
    banner: string;
    notices: string[];
    tels: string[];
}

export interface StudioHomeDataBasic {
    hotCourses: CourseBasic[];
    hotTeachers: TeacherBasic[];
    teachingEnvironmentPhotos: PhotoBasic[];
    studentStylePhotoAlbums: PhotoAlbumBasic[];
}
