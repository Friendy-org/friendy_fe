import { MemberData } from './member';

export interface PostData {
  me: boolean;
  id: number;
  content: string;
  location: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  authorResponse: MemberData;
  imageUrls: string[];
}

export interface PostFormData {
  content: string;
  location: string;
  hashtags: string[];
  imageUrls: string[];
}

export interface PostGetUpdateData {
  id: number;
  content: string;
  location: string;
  imageUrls: string[];
}
