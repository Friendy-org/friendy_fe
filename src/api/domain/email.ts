import ApiClient from '../ApiClient';

const apiClient = new ApiClient('/email');

const emailApis = {
  sendCode: async ({ email }: { email: string }) =>
    await apiClient.post({
      path: '/send-code',
      body: { email },
    }),

  verifyCode: async ({ email, password }: { email: string; password: string }) =>
    await apiClient.post({
      path: '/verify-code',
      body: { email, password },
    }),
};

export default emailApis;
