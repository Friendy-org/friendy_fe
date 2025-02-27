import { useState } from 'react';
import S from './style';
import InputField from '@components/_common/molecules/InputField';
import IconButton from '@components/_common/molecules/IconButton';

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  marginBottom?: number;
  error?: string;
}

export default function PasswordInput({
  label,
  value,
  onChange,
  marginBottom,
  error,
}: PasswordInputProps) {
  const [isShow, setIsShow] = useState(false);

  const handlePress = () => {
    setIsShow(prev => !prev);
  };

  return (
    <InputField
      label={label}
      value={value}
      onChange={onChange}
      isShow={isShow}
      error={error}
      marginBottom={marginBottom}
    >
      {value && (
        <S.EyeIcon>
          <IconButton onPress={handlePress} iconName={isShow ? 'eye' : 'eye-off'} iconSize={20} />
        </S.EyeIcon>
      )}
    </InputField>
  );
}
