import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { ResetPasswordData, SignupData } from '@customTypes/member';

const memberApi = {
  getInfo: async (memberId: string) => {
    const { data } = await axiosInstance.get(END_POINTS.MEMBER.INFO(memberId));

    return data.result;
  },

  signup: async (signupData: SignupData) => {
    const { data } = await axiosInstance.post(END_POINTS.MEMBER.SIGNUP, signupData, {
      useAuth: false,
    });

    return data.result;
  },

  resetPassword: async (resetPasswordData: ResetPasswordData) => {
    await axiosInstance.post(END_POINTS.MEMBER.RESET_PASSWORD, resetPasswordData, {
      useAuth: false,
    });
  },
};

export default memberApi;
