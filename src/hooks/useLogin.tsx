import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import authApis from '../api/domain/auth';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function useLogin() {
  const navigation = useNavigation<NavigationProp>();

  const loginMutate = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authApis.login({
        email,
        password,
      }),
    onSuccess: () => {
      console.log('로그인 성공');
      // Todo: navigate to Home
      navigation.navigate('Root');
    },
  });

  return { loginMutate };
}
