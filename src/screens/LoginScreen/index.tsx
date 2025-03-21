import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import useForm from '@hooks/utils/useForm';

import { RootStackParamList } from '@customTypes/navigation';
import { validateEmail, validatePassword } from '@utils/validations/user';

import { STACK_NAME } from '@constants/navigation';

import useLogin from '@hooks/auth/useLogin';

import Button from '@components/_common/atoms/Button';
import LinkedText from '@components/_common/atoms/LinkedText';

import InputField from '@components/_common/molecules/InputField';

import S from './style';

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { loginMutate } = useLogin();
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: { value: '', validate: { onBlur: validateEmail.onBlur } },
      password: { value: '', validate: validatePassword },
    },
  });

  const handleLogin = async () => {
    loginMutate.mutate({ email: formData.email, password: formData.password });
  };

  const handleForgotPassword = () => {
    navigation.navigate(STACK_NAME.RESET_PASSWORD);
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
