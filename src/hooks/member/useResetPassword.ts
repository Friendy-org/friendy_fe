import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import memberApi from '@api/domain/member';

import { NavigationProp } from '@customTypes/navigation';

export default function useResetPassword() {
  const navigation = useNavigation<NavigationProp>();

  const resetPasswordMutate = useMutation({
    mutationFn: memberApi.resetPassword,
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return {
    resetPasswordMutate,
  };
}
