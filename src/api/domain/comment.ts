import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';

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
};

export default commentApi;
