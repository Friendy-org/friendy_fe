import React from 'react';
import PinCodeInput from '../../_common/molecules/PinCodeInput/PinCodeInput';
import S from './VerificationCodeStep.styles';
import Button from '../../_common/atoms/Button/Button';
import LinkedText from '../../_common/atoms/LinkedText/LinkedText';

interface VerificationCodeStepProps {
  email: string;
  nextStep: () => void;
}

export default function VerificationCodeStep({ email, nextStep }: VerificationCodeStepProps) {
  const handleStep2Submit = () => {
    // todo: 이메일 인증번호 검증 api
    console.log('Step 2 complete');
  };

  const handleResend = () => {
    // todo: 이메일 재전송 api
    console.log('Resend email');
  };

  const handlePress = (func: any) => {
    func();
    nextStep();
  };

  // Todo: 타이머 로직

  return (
    <S.AppContainer>
      <S.Layout>
        <S.VerificationContainer>
          <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
          <PinCodeInput pinLength={6} />
          <S.InfoWrapper>
            <LinkedText
              onPress={() => {
                handlePress(handleResend);
              }}
            >
              인증 코드가 오지 않나요?
            </LinkedText>
            <S.Timer>5:00</S.Timer>
          </S.InfoWrapper>
        </S.VerificationContainer>
        <Button
          onPress={() => {
            handlePress(handleStep2Submit);
          }}
        >
          다음
        </Button>
      </S.Layout>
    </S.AppContainer>
  );
}
