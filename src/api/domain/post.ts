import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { CreatePostData } from '@customTypes/post';

const postApi = {
  getDetail: async (postId: string) => {
    const { data } = await axiosInstance.get(END_POINTS.POST.DETAIL(postId));

    return data.result;
  },

  getList: async (lastPostId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS.POST.LIST, {
      params: { lastPostId },
    });

    return data.result;
  },

  create: async (createPostData: CreatePostData) => {
    await axiosInstance.post(END_POINTS.POST.CREATE, createPostData);
  },
};

export default postApi;
