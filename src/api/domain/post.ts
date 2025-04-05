import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { PostFormData } from '@customTypes/post';

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

  create: async (createPostData: PostFormData) => {
    await axiosInstance.post(END_POINTS.POST.CREATE, createPostData);
  },

  update: async (postId: string, updatePostData: PostFormData) => {
    const { data } = await axiosInstance.post(END_POINTS.POST.UPDATE(postId), updatePostData);

    return data.result;
  },
};

export default postApi;
