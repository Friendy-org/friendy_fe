import ApiClient from '../ApiClient';

const apiClient = new ApiClient('/email');

const emailApis = {
  sendCode: async ({ email }: { email: string }) =>
    await apiClient.post({
      path: '/send-code',
      body: { email },
    }),

  verifyCode: async ({ email, authCode }: { email: string; authCode: string }) =>
    await apiClient.post({
      path: '/verify-code',
      body: { email, authCode },
    }),
};

export default emailApis;
