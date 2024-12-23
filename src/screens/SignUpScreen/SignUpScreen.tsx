import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import InputField from '../../components/_common/molecules/InputField/InputField';
import Button from '../../components/_common/atoms/Button/Button';
import DotIndicator from '../../components/_common/molecules/DotIndicator/DotIndicator';
import ChangeProfileImageField from '../../components/_common/molecules/ChangeProfileImageField/ChangeProfileImageField';
import S from './SignUpScreen.styles';
import DateInputField from '../../components/_common/molecules/DateInputField/DateInputField';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import useForm from '../../hooks/utils/useForm';
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from '../../validations/userValidators';
import EmailVerificationStep1 from '../../components/EmailVerification/EmailVerificationStep1/EmailVerificationStep1';
import EmailVerificationStep2 from '../../components/EmailVerification/EmailVerificationStep2/EmailVerificationStep2';

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { formData, register, errors, handleSubmit } = useForm({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);

  const handlePress = (func: any) => {
    handleSubmit(async () => {
      try {
        await func();

        if (Object.values(errors).some(error => error)) {
          nextStep();
        }
      } catch (err) {
        console.error('Error during func execution:', err);
      }
    });
  };

  const handleSignUp = () => {
    console.log('SignUp complete');
  };

  return (
    <S.Layout>
      <S.SignUpContainer>
        <S.Title>회원가입</S.Title>
        {step === 1 && (
          <EmailVerificationStep1
            emailRegister={register('email', { validate: validateEmail })}
            handlePress={handlePress}
          />
        )}

        {step === 2 && <EmailVerificationStep2 email={formData.email} nextStep={nextStep} />}

        {step === 3 && (
          <>
            <S.InnerForm>
              <ChangeProfileImageField buttonText='프로필 사진 선택' />
              <InputField
                label='닉네임'
                {...register('nickname', { validate: validateNickname })}
              />
              <PasswordInput
                label='비밀번호'
                {...register('password', { validate: validatePassword })}
              />
              <PasswordInput
                label='비밀번호 확인'
                {...register('confirmPassword', { validate: validatePassword })}
              />
              <DateInputField selectedDate={date} onChangeDate={setDate} />
            </S.InnerForm>
            <Button onPress={() => handlePress(handleSignUp)}>완료</Button>
          </>
        )}
      </S.SignUpContainer>
      <S.IndicatorContainer>
        {step !== 3 && <DotIndicator totalStep={step + 1} step={step} />}
      </S.IndicatorContainer>
    </S.Layout>
  );
}
