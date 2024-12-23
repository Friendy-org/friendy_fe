import PinCodeInput from '../../_common/molecules/PinCodeInput/PinCodeInput';
import S from './EmailVerificationStep2.styles';
import Button from '../../_common/atoms/Button/Button';

interface EmailVerificationStep2Props {
  email: string;
  nextStep: () => void;
}

export default function EmailVerificationStep2({ email, nextStep }: EmailVerificationStep2Props) {
  const handleStep2Submit = () => {
    console.log('Step 2 complete');
  };

  const handlePress = () => {
    handleStep2Submit();
    nextStep();
  };

  return (
    <>
      <S.VerificationContainer>
        <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
        <PinCodeInput pinLength={6} />
        <S.InfoWrapper>
          <S.ResendLink>인증 코드가 오지 않나요?</S.ResendLink>
          <S.Timer>5:00</S.Timer>
        </S.InfoWrapper>
      </S.VerificationContainer>
      <Button onPress={handlePress}>다음</Button>
    </>
  );
}
