import React, { useState } from 'react';
import PinCodeInput from '../../_common/molecules/PinCodeInput/PinCodeInput';
import S from './VerificationCodeStep.styles';
import Button from '../../_common/atoms/Button/Button';
import LinkedText from '../../_common/atoms/LinkedButton/LinkedButton';
import useEmail from '../../../hooks/useEmail';
import ApiError from '../../../api/ApiError';

interface VerificationCodeStepProps {
  email: string;
  nextStep: () => void;
}

export default function VerificationCodeStep({ email, nextStep }: VerificationCodeStepProps) {
  const [authCode, setAuthCode] = useState('');
  const [error, setError] = useState('');
  const { sendCodeMutate, verifyCodeMutate } = useEmail();

  const handleSubmit = async () => {
    await verifyCodeMutate.mutateAsync({
      email: email,
      authCode: authCode,
    });
  };

  const handleResend = async () => {
    console.log('resend');
    await sendCodeMutate.mutateAsync({
      email: email,
    });
  };

  const handlePress = async (func: any) => {
    try {
      await func();
      nextStep();
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        console.error('예상치 못한 에러 발생:', error);
      }
    }
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <S.VerificationContainer>
          <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
          <PinCodeInput pinLength={6} setAuthCode={setAuthCode} />
          {error && <S.ErrorText>{error}</S.ErrorText>}
          <S.InfoWrapper>
            <LinkedText onPress={handleResend}>인증 코드가 오지 않나요?</LinkedText>
            <S.Timer>5:00</S.Timer>
          </S.InfoWrapper>
        </S.VerificationContainer>
        <Button onPress={() => handlePress(handleSubmit)}>다음</Button>
      </S.Layout>
    </S.AppContainer>
  );
}
