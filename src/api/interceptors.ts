import EncryptedStorage from 'react-native-encrypted-storage';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { HTTPError } from '@api/HTTPError';
import { axiosInstance } from '@api/axiosInstance';

import { ACCESS_TOKEN_KEY, ERROR_CODE, HTTP_STATUS_CODE, MEMBER_ID_KEY, REFRESH_TOKEN_KEY } from '@constants/api';
import authApi from './domain/auth';

export interface ErrorResponseData {
  message?: string;
  code?: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth) {
    // eslint-disable-next-line
    delete config.headers.Authorization;
    // eslint-disable-next-line
    delete config.headers['Authorization-Refresh'];

    return config;
  }

  const accessToken = EncryptedStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = EncryptedStorage.getItem(REFRESH_TOKEN_KEY);

  if (!accessToken || !refreshToken) {
    return config;
  }

  // eslint-disable-next-line
  config.headers.Authorization = `Bearer ${accessToken}`;
  // eslint-disable-next-line
  config.headers['Authorization-Refresh'] = `Bearer ${refreshToken}`;

  return config;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};

export const handleResponse = async (response: AxiosResponse) => {
  const { status, data, config } = response;

  if (status >= 400) {
    if (status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.EXPIRED_TOKEN) {
      try {
        const { accessToken, refreshToken } = await authApi.reIssue();
        config.headers.Authorization = `Bearer ${accessToken}`;
        EncryptedStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        EncryptedStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

        return axiosInstance(config);
      } catch (error) {
        EncryptedStorage.removeItem(ACCESS_TOKEN_KEY);
        EncryptedStorage.removeItem(REFRESH_TOKEN_KEY);
        EncryptedStorage.removeItem(MEMBER_ID_KEY);

        throw new HTTPError(status, data?.message, data?.code);
      }
    }

    if (
      status === HTTP_STATUS_CODE.UNAUTHORIZED &&
      (data.code === ERROR_CODE.INVALID_SIGNATURE ||
        data.code === ERROR_CODE.UNSUPPORTED_TOKEN ||
        data.code === ERROR_CODE.INVALID_TOKEN ||
        data.code === ERROR_CODE.TOKEN_ERROR ||
        data.code === ERROR_CODE.EXTRACTING_ERROR)
    ) {
      EncryptedStorage.removeItem(ACCESS_TOKEN_KEY);
      EncryptedStorage.removeItem(REFRESH_TOKEN_KEY);
      EncryptedStorage.removeItem(MEMBER_ID_KEY);

      throw new HTTPError(status, data?.message, data?.code);
    }

    throw new HTTPError(status, data?.message, data?.code);
  }

  return response;
};
