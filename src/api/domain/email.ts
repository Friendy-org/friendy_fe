import ApiClient from '../ApiClient';

const apiClient = new ApiClient('/email');

const emailApis = {
  sendCode: async ({ email }: { email: string }) =>
    await apiClient.post({
      path: '/send-code',
      body: { email },
    }),
};

export default emailApis;
