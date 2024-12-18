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
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import useForm from '../../hooks/utils/useForm';
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from '../../validations/userValidators';

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

  const onSubmitStep1 = (data: typeof formData) => {
    console.log('Step 1 data:', data);
    setStep(2);
  };

  const onSubmitStep2 = (data: typeof formData) => {
    console.log('Step 2 data:', data);
    setStep(3);
  };

  const onSubmitStep3 = (data: typeof formData) => {
    console.log('Final Step data:', data);
  };

  const handlePress = () => {
    if (step === 1) {
      handleSubmit(onSubmitStep1);
    } else if (step === 2) {
      handleSubmit(onSubmitStep2);
    } else if (step === 3) {
      handleSubmit(onSubmitStep3);
    }
  };

  return (
    <S.Layout>
      <S.SignUpContainer>
        <S.Title>회원가입</S.Title>
        {step === 1 && (
          <InputField
            label='이메일을 입력해 주세요.'
            {...register('email', { validate: validateEmail })}
          />
        )}

        {step === 2 && <EmailVerifyField email={formData.email} />}

        {step === 3 && (
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
        )}
        <S.ActionContainer>
          <Button onPress={handlePress}>다음</Button>
          <S.IndicatorContainer>
            {step !== 3 && <DotIndicator totalStep={step + 1} step={step} />}
          </S.IndicatorContainer>
        </S.ActionContainer>
      </S.SignUpContainer>
    </S.Layout>
  );
}
