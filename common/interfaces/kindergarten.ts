import { VideoStatic, PhotoBasic } from "./common";

export interface KindergartenBasic {
    id: number;
    name: string;
    intro?: string;
    video?: VideoStatic;
    address?: {
        contact?: string;
        tels?: string[];
        email?: string;
    };
    envAlbum?: PhotoBasic[];
    honorAlbum?: PhotoBasic[];
    checkinExcel: string;
}
