import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import signUp from '../api/domain/member';
import { RootStackParamList } from '../types/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function useSignUp() {
  const navigation = useNavigation<NavigationProp>();

  const signUpMutate = useMutation({
    mutationFn: ({
      email,
      nickname,
      password,
      birthDate,
    }: {
      email: string;
      nickname: string;
      password: string;
      birthDate: string;
    }) =>
      signUp({
        email,
        nickname,
        password,
        birthDate,
      }),
    onSuccess: () => {
      console.log('회원가입 성공');
      navigation.navigate('Login');
    },
  });

  return { signUpMutate };
}
