import useForm from '@hooks/utils/useForm';
import { useState } from 'react';
import { validateEmail, validatePassword } from '@utils/validations/user';

import EmailInput from '@components/EmailVerificationForm/EmailInput';
import VerificationCode from '@components/EmailVerificationForm/VerificationCode';

import S from './style';
import SetPassword from './SetPassword';

export default function ResetPasswordScreen() {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: { value: '', validate: validateEmail },
      password: { value: '', validate: validatePassword },
      confirmPassword: { value: '', validate: validatePassword },
    },
  });
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <S.Container>
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
        <SetPassword
          email={formData.email}
          passwordRegister={register('password')}
          confirmPasswordRegister={register('confirmPassword')}
          handlePress={handleSubmit}
        />
      )}
    </S.Container>
  );
}
