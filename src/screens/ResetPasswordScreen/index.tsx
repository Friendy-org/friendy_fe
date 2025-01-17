import useForm from '@hooks/utils/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import { RootStackParamList } from 'src/types/NavigationTypes';
import S from './style';
import EmailInputStep from '@components/EmailVerification/EmailInputStep';
import { validateEmail, validatePassword } from 'src/validations/userValidators';
import VerificationCodeStep from '@components/EmailVerification/VerificationCodeStep';
import PasswordInput from '@components/PasswordInput';
import Button from '@components/_common/atoms/Button';

export type ResetPasswordScreenProps = StackScreenProps<RootStackParamList, 'ResetPassword'>;

export default function ResetPasswordScreen({ navigation }: ResetPasswordScreenProps) {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(prev => prev + 1);

  const handlePress = async (func: () => Promise<void>) => {
    const hasError = await handleSubmit(async () => await func());

    if (!hasError) {
      nextStep();
    }
  };

  const handleResetPassword = async () => {
    // Todo: 비밀번호 재설정 API
    navigation.goBack();
  };

  return (
    <S.Layout>
      <S.MainContainer>
        {step === 1 && (
          <EmailInputStep
            emailRegister={register('email', { validate: validateEmail })}
            handlePress={handlePress}
          />
        )}

        {step === 2 && <VerificationCodeStep email={formData.email} nextStep={nextStep} />}

        {step === 3 && (
          <S.ResetPasswordContainer>
            <S.FormWrapper>
              <S.InnerForm>
                <PasswordInput
                  marginBottom={14}
                  label='비밀번호'
                  {...register('password', { validate: validatePassword })}
                />
                <PasswordInput
                  marginBottom={30}
                  label='비밀번호 확인'
                  {...register('confirmPassword', { validate: validatePassword })}
                />
              </S.InnerForm>
              <Button onPress={() => handlePress(handleResetPassword)}>완료</Button>
            </S.FormWrapper>
          </S.ResetPasswordContainer>
        )}
      </S.MainContainer>
    </S.Layout>
  );
}
