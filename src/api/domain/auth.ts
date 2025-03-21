import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { LoginData } from '@customTypes/auth';

const authApi = {
  login: async (logInData: LoginData) => {
    const { data } = await axiosInstance.post(END_POINTS.AUTH.LOGIN, logInData, {
      useAuth: false,
    });

    return data.result;
  },

  withdrawal: async () => {
    await axiosInstance.post(END_POINTS.AUTH.WITHDRAWAL);
  },

  reIssue: async () => {
    const { data } = await axiosInstance.post(END_POINTS.AUTH.REISSUE);

    return data.result;
  },
};

export default authApi;
