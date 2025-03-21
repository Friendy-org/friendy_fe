import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { ResetPasswordData, SignupData } from '@customTypes/member';

const memberApi = {
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

  getInfo: async (memberId: string) => {
    const { data } = await axiosInstance.get(END_POINTS.MEMBER.INFO(memberId), {
      useAuth: false,
    });

    return data.result;
  },
};

export default memberApi;
