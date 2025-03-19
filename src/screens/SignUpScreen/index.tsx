import React, { useState } from 'react';

import useForm from '@hooks/utils/useForm';

import { validateEmail, validateNickname, validatePassword } from '@utils/validations/user';

import DotIndicator from '@components/_common/molecules/DotIndicator';
import EmailInput from '@components/EmailVerification/EmailInput';
import VerificationCode from '@components/EmailVerification/VerificationCode';
import SetProfile from './SetProfile';

import S from './style';

export default function SignUpScreen() {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: { value: '', validate: validateEmail },
      nickname: { value: '', validate: validateNickname },
      password: { value: '', validate: validatePassword },
      confirmPassword: { value: '', validate: validatePassword },
    },
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      bounces={false}
    >
      {step === 1 && (
        <EmailInput
          emailRegister={register('email')}
          handlePress={handleSubmit}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <VerificationCode
          email={formData.email}
          nextStep={nextStep}
        />
      )}

      {step === 3 && (
        <SetProfile
          nicknameRegister={register('nickname')}
          passwordRegister={register('password')}
          confirmPasswordRegister={register('confirmPassword')}
          handlePress={handleSubmit}
        />
      )}

      {step < 3 && (
        <S.IndicatorWrapper>
          <DotIndicator
            totalStep={step + 1}
            step={step}
          />
        </S.IndicatorWrapper>
      )}
    </S.Container>
  );
}
