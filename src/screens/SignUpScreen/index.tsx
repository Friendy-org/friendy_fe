import useSignUp from '@hooks/useSignUp';
import useForm from '@hooks/utils/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { RootStackParamList } from 'src/types/NavigationTypes';
import S from './style';
import EmailInputStep from '@components/EmailVerification/EmailInputStep';
import { validateEmail, validateNickname, validatePassword } from 'src/validations/userValidators';
import VerificationCodeStep from '@components/EmailVerification/VerificationCodeStep';
import ChangeProfileImageField from '@components/_common/molecules/ChangeProfileImageField';
import InputField from '@components/_common/molecules/InputField';
import PasswordInput from '@components/PasswordInput';
import DateInputField from '@components/_common/molecules/DateInputField';
import Button from '@components/_common/atoms/Button';
import DotIndicator from '@components/_common/molecules/DotIndicator';

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const { signUpMutate } = useSignUp();

  const nextStep = () => setStep(prev => prev + 1);

  const handlePress = async (func: () => Promise<void>) => {
    const hasError = await handleSubmit(async () => await func());

    if (!hasError) {
      nextStep();
    }
  };

  const handleSignUp = async () => {
    await signUpMutate.mutateAsync({
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
      birthDate: date.toISOString().split('T')[0],
    });
  };

  return (
    <S.Layout>
      <S.SignUpContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        {step === 1 && (
          <EmailInputStep
            emailRegister={register('email', { validate: validateEmail })}
            handlePress={handlePress}
          />
        )}

        {step === 2 && <VerificationCodeStep email={formData.email} nextStep={nextStep} />}

        {step === 3 && (
          <S.ProfileSettingsContainer>
            <S.InnerForm>
              <ChangeProfileImageField buttonText='프로필 사진 선택' />
              <InputField
                marginBottom={30}
                label='닉네임'
                {...register('nickname', { validate: validateNickname })}
              />
              <PasswordInput
                marginBottom={30}
                label='비밀번호'
                {...register('password', { validate: validatePassword })}
              />
              <PasswordInput
                marginBottom={30}
                label='비밀번호 확인'
                {...register('confirmPassword', { validate: validatePassword })}
              />
              <DateInputField selectedDate={date} onChangeDate={setDate} />
            </S.InnerForm>
            <Button onPress={() => handlePress(handleSignUp)}>완료</Button>
          </S.ProfileSettingsContainer>
        )}
        <S.IndicatorContainer>
          {step < 3 && <DotIndicator totalStep={step + 1} step={step} />}
        </S.IndicatorContainer>
      </S.SignUpContainer>
    </S.Layout>
  );
}
