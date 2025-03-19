import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import useLogin from '@hooks/useLogin';
import useForm from '@hooks/utils/useForm';

import { RootStackParamList } from 'src/types/NavigationTypes';
import { validateEmail, validatePassword } from '@utils/validations/user';

import Button from '@components/_common/atoms/Button';
import LinkedText from '@components/_common/atoms/LinkedText';

import InputField from '@components/_common/molecules/InputField';

import S from './style';

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: { value: '', validate: { onBlur: validateEmail.onBlur } },
      password: { value: '', validate: validatePassword },
    },
  });
  const { loginMutate } = useLogin();

  const handleLogin = async () => {
    // loginMutate.mutate({
    //   email: formData.email,
    //   password: formData.password,
    // });
    // navigation.navigate('Map');
    console.log('login');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <S.Container>
      <S.InputForm>
        <InputField
          label='이메일'
          {...register('email')}
        />

        <InputField
          type='password'
          label='비밀번호'
          {...register('password')}
        />

        <LinkedText
          color='secondary'
          isUnderlined
          onPress={handleForgotPassword}
        >
          비밀번호가 기억나지 않나요?
        </LinkedText>
      </S.InputForm>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handleSubmit(handleLogin)}
      >
        완료
      </Button>
    </S.Container>
  );
}
