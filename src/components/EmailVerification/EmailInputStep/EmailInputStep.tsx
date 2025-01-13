import React from 'react';
import InputField from '../../_common/molecules/InputField/InputField';
import Button from '../../_common/atoms/Button/Button';
import S from './EmailInputStep.styles';
import useEmail from '../../../hooks/useEmail';

interface EmailInputStepProps {
  emailRegister: {
    value: string;
    onChange: (value: string) => void;
    error?: string;
  };
  handlePress: (func: any) => void;
}

export default function EmailInputStep({ emailRegister, handlePress }: EmailInputStepProps) {
  const { sendCodeMutate } = useEmail();

  const handleSubmit = async () => {
    await sendCodeMutate.mutateAsync({
      email: emailRegister.value,
    });
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <InputField label='이메일을 입력해 주세요.' {...emailRegister} />
        <Button onPress={() => handlePress(handleSubmit)}>다음</Button>
      </S.Layout>
    </S.AppContainer>
  );
}
