import { FormRegister } from '@customTypes/common';

import useResetPassword from '@hooks/member/useResetPassword';

import Button from '@components/_common/atoms/Button';
import InputField from '@components/_common/molecules/InputField';

import S from './style';

interface SetPasswordProps<TFieldData> {
  email: string;
  passwordRegister: FormRegister;
  confirmPasswordRegister: FormRegister;
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => () => void;
}

export default function SetPassword<TFieldData>({
  email,
  passwordRegister,
  confirmPasswordRegister,
  handlePress,
}: SetPasswordProps<TFieldData>) {
  const { resetPasswordMutate } = useResetPassword();

  const handleResetPassword = async () => {
    resetPasswordMutate.mutate({ email, newPassword: passwordRegister.value });
  };

  return (
    <S.Container>
      <S.InputForm>
        <InputField
          type='password'
          label='비밀번호'
          {...passwordRegister}
        />

        <InputField
          type='password'
          label='비밀번호 확인'
          {...confirmPasswordRegister}
        />
      </S.InputForm>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handlePress(handleResetPassword)}
      >
        완료
      </Button>
    </S.Container>
  );
}
