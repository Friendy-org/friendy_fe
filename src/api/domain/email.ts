import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS } from '@constants/api';
import { SendCodeData, VerifyCodeData } from '@customTypes/email';

const emailApi = {
  sendCode: async (sendCodeData: SendCodeData) => {
    await axiosInstance.post(END_POINTS.EMAIL.SEND_CODE, sendCodeData, { useAuth: false });
  },

  verifyCode: async (verifyCodeData: VerifyCodeData) => {
    await axiosInstance.post(END_POINTS.EMAIL.VERIFY_CODE, verifyCodeData, { useAuth: false });
  },
};

export default emailApi;
