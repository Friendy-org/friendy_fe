import React from 'react';
import InputField from '../../_common/molecules/InputField/InputField';
import Button from '../../_common/atoms/Button/Button';

interface EmailVerificationStep1Props {
  emailRegister: {
    value: string;
    onChange: (value: string) => void;
    error?: string;
  };
  handlePress: (func: any) => void;
}

export default function EmailVerificationStep1({
  emailRegister,
  handlePress,
}: EmailVerificationStep1Props) {
  const handleStep1Submit = () => {
    console.log('Step 1 complete');
  };

  return (
    <>
      <InputField label='이메일을 입력해 주세요.' {...emailRegister} />
      <Button onPress={() => handlePress(handleStep1Submit)}>다음</Button>
    </>
  );
}
