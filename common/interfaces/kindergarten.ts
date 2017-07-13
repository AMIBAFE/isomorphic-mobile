export interface KindergartenBasic {
    id: number;
    name: string;
    intro?: string;
    video?: {
        title?: string;
        cover?: string;
        mp4?: string;
        webm?: string;
    };
    address?: {
        contact?: string;
        tels?: string[];
        email?: string;
    };
    envAlbum?: {
        name: string;
        src: string;
    }[];
    honorAlbum?: {
        name: string;
        src: string;
    }[];
}
