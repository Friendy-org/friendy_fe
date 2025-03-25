import { MemberData } from './member';

export interface CommentItemData {
  id: number;
  content: string;
  createdAt: string;
  likeCount: number;
  replyCount?: number;
  authorResponse: MemberData;
}

export interface CreateCommentData {
  postId: number;
  content: string;
}

export interface CreateReplyData {
  commentId: number;
  postId: number;
  content: string;
}
