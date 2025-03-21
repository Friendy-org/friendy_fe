import React from 'react';

import { FormRegister } from '@customTypes/common';

import useSendCode from '@hooks/email/useSendCode';

import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';
import ToastList from '@components/_common/molecules/ToastList';

import S from './style';

interface EmailInputProps<TFieldData> {
  emailRegister: FormRegister;
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => () => void;
  nextStep: () => void;
}

export default function EmailInput<TFieldData>({ emailRegister, handlePress, nextStep }: EmailInputProps<TFieldData>) {
  const { sendCodeMutate } = useSendCode(nextStep);

  const handleSubmit = async () => {
    sendCodeMutate.mutate({ email: emailRegister.value });
  };

  return (
    <S.Container>
      <S.InputForm>
        <InputField
          label='이메일을 입력해 주세요.'
          {...emailRegister}
        />
      </S.InputForm>

      <ToastList />
      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handlePress(handleSubmit, ['nickname', 'password', 'confirmPassword'] as (keyof TFieldData)[])}
      >
        다음
      </Button>
    </S.Container>
  );
}
