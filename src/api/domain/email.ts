import ApiClient from '@api/ApiClient';

const apiClient = new ApiClient('/email');

const emailApis = {
  sendCode: async ({ email }: { email: string }) =>
    await apiClient.post({
      path: '/send-code',
      body: { email },
      requiresAuth: false,
    }),

  verifyCode: async ({ email, authCode }: { email: string; authCode: string }) =>
    await apiClient.post({
      path: '/verify-code',
      body: { email, authCode },
      requiresAuth: false,
    }),
};

export default emailApis;
