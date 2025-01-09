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
    onSuccess: data => {
      console.log('백엔드 응답 데이터:', data);
      navigation.navigate('Login');
    },
  });

  return { signUpMutate };
}
