import ApiClient from '@api/ApiClient';
import tokenService from '@api/services/tokenService';

const apiClient = new ApiClient('/auth');

const authApis = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const response = await apiClient.post({
      path: '/login',
      body: {
        email,
        password,
      },
      requiresAuth: false,
    });

    await tokenService.saveTokensFromResponse(response.headers);
  },
};

export default authApis;
