import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import authApi from '@api/domain/auth';

import { NavigationProp } from '@customTypes/navigation';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@constants/api';
import { STACK_NAME } from '@constants/navigation';

export default function useWithdrawal() {
  const navigation = useNavigation<NavigationProp>();

  const withdrawalMutate = useMutation({
    mutationFn: authApi.withdrawal,
    onSuccess: () => {
      EncryptedStorage.removeItem(ACCESS_TOKEN_KEY);
      EncryptedStorage.removeItem(REFRESH_TOKEN_KEY);

      navigation.navigate(STACK_NAME.ROOT);
    },
  });

  return {
    withdrawalMutate,
  };
}
