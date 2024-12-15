import S from './EmailVerifyField.styles';
import PinCodeInput from '../_common/molecules/PinCodeInput/PinCodeInput';

interface EmailVerifyFieldProps {
  email: string;
}

export default function EmailVerifyField({ email }: EmailVerifyFieldProps) {
  return (
    <S.Wrapper>
      <S.Label>{email}으로 전송된 인증 코드 6자리를 입력해 주세요.</S.Label>
      <PinCodeInput pinLength={6} />
      <S.InfoWrapper>
        <S.ResendLink>인증 코드가 오지 않나요?</S.ResendLink>
        <S.Timer>5:00</S.Timer>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
