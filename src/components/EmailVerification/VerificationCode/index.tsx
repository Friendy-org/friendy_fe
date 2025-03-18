import React, { useState } from 'react';

import useEmail from '@hooks/useEmail';

import Button from '@components/_common/atoms/Button';
import Timer from '@components/_common/atoms/Timer';
import LinkedText from '@components/_common/atoms/LinkedText';
import PinCodeInput from '@components/_common/molecules/PinCodeInput';

import S from './style';

interface VerificationCodeProps {
  email: string;
  nextStep: () => void;
}

export default function VerificationCode({ email, nextStep }: VerificationCodeProps) {
  const [authCode, setAuthCode] = useState('');
  const { sendCodeMutate, verifyCodeMutate } = useEmail();

  const handleSubmit = async () => {
    verifyCodeMutate.mutate({ email, authCode });
    nextStep();
  };

  const handleResend = async () => {
    sendCodeMutate.mutate({ email });
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
        <PinCodeInput
          pinLength={6}
          setAuthCode={setAuthCode}
        />
        <S.Info>
          <LinkedText
            color='secondary'
            isUnderlined
            onPress={handleResend}
          >
            인증 코드가 오지 않나요?
          </LinkedText>
          <Timer />
        </S.Info>
      </S.InputWrapper>
      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handleSubmit}
      >
        다음
      </Button>
    </S.Container>
  );
}
