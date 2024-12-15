import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import InputField from '../../components/_common/molecules/InputField/InputField';
import Button from '../../components/_common/atoms/Button/Button';
import DotIndicator from '../../components/_common/molecules/DotIndicator/DotIndicator';
import EmailVerifyField from '../../components/EmailVerifyField/EmailVerifyField';
import ChangeProfileImageField from '../../components/_common/molecules/ChangeProfileImageField/ChangeProfileImageField';
import S from './SignUpScreen.styles';
import DateInputField from '../../components/_common/molecules/DateInputField/DateInputField';

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [confirmPassword, setConfirmPassword] = useState('');

  const [step, setStep] = useState(1);

  const handlePress = () => {
    setStep(step + 1);
  };

  console.log(step);

  return (
    <S.Layout>
      <S.SignUpContainer>
        <S.Title>회원가입</S.Title>
        {step === 1 && (
          <InputField
            label='이메일을 입력해 주세요.'
            value={email}
            onChangeText={setEmail}
          />
        )}

        {step === 2 && <EmailVerifyField email={email} />}

        {step === 3 && (
          <S.InnerForm>
            <ChangeProfileImageField buttonText='프로필 사진 선택' />
            <InputField
              label='닉네임'
              value={nickname}
              onChangeText={setNickname}
            />
            <InputField
              label='비밀번호'
              value={password}
              onChangeText={setPassword}
            />
            <InputField
              label='비밀번호 확인'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <DateInputField selectedDate={date} onChangeDate={setDate} />
          </S.InnerForm>
        )}
        <S.ActionContainer>
          <Button onPress={handlePress}>다음</Button>
          <S.IndicatorContainer>
            <DotIndicator totalStep={step + 1} step={step} />
          </S.IndicatorContainer>
        </S.ActionContainer>
      </S.SignUpContainer>
    </S.Layout>
  );
}
