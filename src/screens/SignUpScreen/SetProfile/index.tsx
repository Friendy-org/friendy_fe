import { useState } from 'react';

import { FormRegister } from '@customTypes/common';

import useSignup from '@hooks/member/useSignup';

import { DEFAULT_PROFILE_IMAGE } from '@constants/common';

import UserProfile from '@components/_common/molecules/UserProfile';
import InputField from '@components/_common/molecules/InputField';
import DateInputField from '@components/_common/molecules/DateInputField';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface SetProfileProps<TFieldData> {
  email: string;
  nicknameRegister: FormRegister;
  passwordRegister: FormRegister;
  confirmPasswordRegister: FormRegister;
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => () => void;
}

export default function SetProfile<TFieldData>({
  email,
  nicknameRegister,
  passwordRegister,
  confirmPasswordRegister,
  handlePress,
}: SetProfileProps<TFieldData>) {
  const { signupMutate } = useSignup();
  const [date, setDate] = useState(new Date());
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_PROFILE_IMAGE);

  const handleSubmit = async () => {
    signupMutate.mutate({
      email,
      nickname: nicknameRegister.value,
      password: passwordRegister.value,
      birthDate: date.toISOString().split('T')[0],
      imageUrl,
    });
  };

  return (
    <S.Container>
      <S.SetProfileForm>
        <UserProfile
          text='프로필 사진 선택'
          imageUrl={imageUrl}
          onSelectImage={setImageUrl}
        />

        <S.InputForm>
          <InputField
            label='닉네임'
            {...nicknameRegister}
          />

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

        <DateInputField
          selectedDate={date}
          onChangeDate={setDate}
        />
      </S.SetProfileForm>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handlePress(handleSubmit)}
      >
        완료
      </Button>
    </S.Container>
  );
}
