import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';

const postApi = {
  getList: async (lastPostId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS.POST.LIST, {
      params: { lastPostId },
    });

    return data.result;
  },
};

export default postApi;
