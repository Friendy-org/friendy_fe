import { useState } from 'react';

import { FormRegister } from '@customTypes/common';

import UserProfile from '@components/_common/molecules/UserProfile';
import InputField from '@components/_common/molecules/InputField';
import DateInputField from '@components/_common/molecules/DateInputField';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface SetProfileProps<TFieldData> {
  nicknameRegister: FormRegister;
  passwordRegister: FormRegister;
  confirmPasswordRegister: FormRegister;
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => void;
  nextStep: () => void;
}

export default function SetProfile<TFieldData>({
  nicknameRegister,
  passwordRegister,
  confirmPasswordRegister,
  handlePress,
  nextStep,
}: SetProfileProps<TFieldData>) {
  const [date, setDate] = useState(new Date());

  const handleSubmit = async () => {
    nextStep();
  };

  return (
    <S.Container>
      <S.InnerForm>
        <UserProfile text='프로필 사진 선택' />
        <InputField
          label='닉네임'
          {...nicknameRegister}
        />
        <InputField
          label='비밀번호'
          {...passwordRegister}
        />
        <InputField
          label='비밀번호 확인'
          {...confirmPasswordRegister}
        />
        <DateInputField
          selectedDate={date}
          onChangeDate={setDate}
        />
      </S.InnerForm>
      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={() => handlePress(handleSubmit)}
      >
        완료
      </Button>
    </S.Container>
  );
}
