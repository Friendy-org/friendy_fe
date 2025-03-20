import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { BASE_URL } from '@constants/api';
import { checkAndSetToken, handleAPIError, handleResponse } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  useAuth: true,
  validateStatus: () => true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use((response) => handleResponse(response, useNavigation()));
