import React, { useState } from 'react';
import PinCodeInput from '../../_common/molecules/PinCodeInput/PinCodeInput';
import S from './VerificationCodeStep.styles';
import Button from '../../_common/atoms/Button/Button';
import LinkedText from '../../_common/atoms/LinkedText/LinkedText';
import useEmail from '../../../hooks/useEmail';

interface VerificationCodeStepProps {
  email: string;
  handlePress: (func: any) => void;
}

export default function VerificationCodeStep({ email, handlePress }: VerificationCodeStepProps) {
  const [authCode, setAuthCode] = useState('');
  const { verifyCodeMutate } = useEmail();

  const handleSubmit = async () => {
    await verifyCodeMutate.mutateAsync({
      email: email,
      authCode: authCode,
    });
  };

  const handleResend = () => {
    // todo: 이메일 재전송 api
    console.log('Resend email');
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <S.VerificationContainer>
          <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
          <PinCodeInput pinLength={6} setAuthCode={setAuthCode} />
          <S.InfoWrapper>
            <LinkedText
              onPress={() => {
                // handlePress(handleResend);
              }}
            >
              인증 코드가 오지 않나요?
            </LinkedText>
            <S.Timer>5:00</S.Timer>
          </S.InfoWrapper>
        </S.VerificationContainer>
        <Button
          onPress={() => {
            handlePress(handleSubmit);
          }}
        >
          다음
        </Button>
      </S.Layout>
    </S.AppContainer>
  );
}
