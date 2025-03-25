import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { CreateCommentData, CreateReplyData } from '@customTypes/comment';

const commentApi = {
  getList: async (postId: string, lastCommentId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS.COMMENT.LIST(postId), {
      params: { lastCommentId },
    });

    return data.result;
  },

  getReplyList: async (commentId: string, lastReplyId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS.COMMENT.REPLY_LIST(commentId), {
      params: { lastReplyId },
    });

    return data.result;
  },

  create: async (createCommentData: CreateCommentData) => {
    await axiosInstance.post(END_POINTS.COMMENT.CREATE, createCommentData);
  },

  createReply: async (createReplyData: CreateReplyData) => {
    await axiosInstance.post(END_POINTS.COMMENT.REPLY_CREATE, createReplyData);
  },
};

export default commentApi;
