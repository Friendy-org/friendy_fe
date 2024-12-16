import { useState } from 'react';
import S from './InputField.styles';
import IconButton from '../../atoms/IconButton/IconButton';
import Icon from 'react-native-vector-icons/Feather';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  error?: string;
}

export default function InputField({
  label,
  value,
  onChangeText,
  isPassword = false,
  error,
}: InputFieldProps) {
  const [isShow, setIsShow] = useState(!isPassword);

  const handlePress = () => {
    setIsShow(prev => !prev);
  };

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isShow}
        />
        {isPassword && value && (
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
      </S.InputWrapper>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}
