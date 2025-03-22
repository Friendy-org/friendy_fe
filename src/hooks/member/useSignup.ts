import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import memberApi from '@api/domain/member';

import { NavigationProp } from '@customTypes/navigation';

import { STACK_NAME } from '@constants/navigation';

export default function useSignup() {
  const navigation = useNavigation<NavigationProp>();

  const signupMutate = useMutation({
    mutationFn: memberApi.signup,
    onSuccess: () => {
      navigation.replace(STACK_NAME.LOGIN);
    },
  });

  return {
    signupMutate,
  };
}
