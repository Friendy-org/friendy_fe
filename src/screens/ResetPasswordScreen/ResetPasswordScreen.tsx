import { useState } from 'react';
import Button from '../../components/_common/atoms/Button/Button';
import EmailInputStep from '../../components/EmailVerification/EmailInputStep/EmailInputStep';
import VerificationCodeStep from '../../components/EmailVerification/VerificationCodeStep/VerificationCodeStep';
import useForm from '../../hooks/utils/useForm';
import { validateEmail, validatePassword } from '../../validations/userValidators';
import S from './ResetPasswordScreen.styles';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';

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

  const handlePress = async (func: any) => {
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
      <S.MainContainer
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
