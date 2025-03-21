import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';

const uploadApi = {
  image: async (formData: FormData) => {
    const { data } = await axiosInstance.post(END_POINTS.UPLOAD.IMAGE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.result;
  },
};

export default uploadApi;
