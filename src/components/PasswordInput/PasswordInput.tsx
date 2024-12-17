import { useState } from 'react';
import InputField from '../_common/molecules/InputField/InputField';
import IconButton from '../_common/atoms/IconButton/IconButton';
import Icon from 'react-native-vector-icons/Feather';
import S from './PasswordInput.styles';

interface PasswordInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export default function PasswordInput({
  label,
  value,
  onChangeText,
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
      onChangeText={onChangeText}
      isShow={isShow}
      error={error}
    >
      {value && (
        <S.EyeIcon>
          <IconButton onPress={handlePress}>
            {isShow ? (
              <Icon name='eye' size={20} />
            ) : (
              <Icon name='eye-off' size={20} />
            )}
          </IconButton>
        </S.EyeIcon>
      )}
    </InputField>
  );
}
