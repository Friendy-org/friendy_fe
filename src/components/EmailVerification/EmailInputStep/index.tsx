import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import useEmail from '@hooks/useEmail';
import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface EmailInputStepProps<TFieldData> {
  emailRegister: {
    value: string;
    error?: string;
    onChange: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  };
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => void;
  nextStep: () => void;
}

export default function EmailInputStep<TFieldData>({
  emailRegister,
  handlePress,
  nextStep,
}: EmailInputStepProps<TFieldData>) {
  const { sendCodeMutate } = useEmail();

  const handleSubmit = async () => {
    sendCodeMutate.mutate({ email: emailRegister.value });
    nextStep();
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <InputField
          label='이메일을 입력해 주세요.'
          {...emailRegister}
        />
      </S.InputWrapper>
      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={() => handlePress(handleSubmit, ['nickname', 'password', 'confirmPassword'] as (keyof TFieldData)[])}
      >
        다음
      </Button>
    </S.Container>
  );
}
