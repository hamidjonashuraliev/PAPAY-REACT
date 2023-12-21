import { MeLiked } from "./product";
import { Member } from "./user";



export interface boArticle {
    _id: string;
    art_subject: string;
    art_content: string;
    art_image: string;
    bo_id: string;
    art_status: string;
    art_likes: number;
    art_views: number;
    mb_id: string;
    createdAt: Date;
    updatedAt: Date;
    mb_data: Member
    me_liked: MeLiked[]; 
}
