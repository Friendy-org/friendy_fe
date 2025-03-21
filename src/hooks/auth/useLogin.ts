import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { axiosInstance } from '@api/axiosInstance';
import authApi from '@api/domain/auth';

import { NavigationProp } from '@customTypes/navigation';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@constants/api';
import { STACK_NAME } from '@constants/navigation';

export default function useLogin() {
  const navigation = useNavigation<NavigationProp>();

  const loginMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ accessToken, refreshToken }) => {
      EncryptedStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      EncryptedStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      navigation.reset({ index: 0, routes: [{ name: STACK_NAME.MAP }] });
    },
  });

  return {
    loginMutate,
  };
}
