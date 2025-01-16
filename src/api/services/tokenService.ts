import EncryptedStorage from 'react-native-encrypted-storage';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

const tokenService = {
  getAccessToken: async (): Promise<string> => {
    const token = await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) {
      throw new Error('액세스 토큰이 존재하지 않습니다.');
    }
    return token;
  },

  setAccessToken: async (token: string): Promise<void> => {
    await EncryptedStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  removeAccessToken: async (): Promise<void> => {
    await EncryptedStorage.removeItem(ACCESS_TOKEN_KEY);
  },

  getRefreshToken: async (): Promise<string> => {
    const token = await EncryptedStorage.getItem(REFRESH_TOKEN_KEY);
    if (!token) {
      throw new Error('리프레시 토큰이 존재하지 않습니다.');
    }
    return token;
  },

  setRefreshToken: async (token: string): Promise<void> => {
    await EncryptedStorage.setItem(REFRESH_TOKEN_KEY, token);
  },

  removeRefreshToken: async (): Promise<void> => {
    await EncryptedStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  saveTokensFromResponse: async (headers: Headers): Promise<void> => {
    const accessToken = headers.get('authorization');
    const refreshToken = headers.get('authorization-refresh');

    if (!accessToken || !refreshToken) {
      throw new Error('토큰이 누락되었습니다.');
    }

    await tokenService.setAccessToken(accessToken);
    await tokenService.setRefreshToken(refreshToken);
  },

  clearTokens: async (): Promise<void> => {
    await tokenService.removeAccessToken();
    await tokenService.removeRefreshToken();
  },
};

export default tokenService;
