import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import memberApi from '@api/domain/member';

import { NavigationProp } from '@customTypes/navigation';
import { ResetPasswordData } from '@customTypes/member';

export default function useResetPassword() {
  const navigation = useNavigation<NavigationProp>();

  const resetPasswordMutate = useMutation({
    mutationFn: async (resetPasswordData: ResetPasswordData) => {
      memberApi.resetPassword(resetPasswordData);
    },
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return {
    resetPasswordMutate,
  };
}
