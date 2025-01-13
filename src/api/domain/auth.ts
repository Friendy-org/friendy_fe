import ApiClient from '../ApiClient';

const apiClient = new ApiClient('/auth');

const authApis = {
  login: async ({ email, password }: { email: string; password: string }) =>
    await apiClient.post({
      path: '/login',
      body: {
        email,
        password,
      },
    }),
};

export default authApis;
