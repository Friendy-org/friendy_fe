import { useState } from 'react';
import { TextInputProps } from 'react-native';
import Icon from '@components/_common/atoms/Icon';
import IconButton from '../IconButton';
import S from './style';

interface InputFieldProps extends TextInputProps {
  type?: string;
  label?: string;
  error?: string;
}

export default function InputField({ type = 'text', label, error, ...props }: InputFieldProps) {
  const [isVisible, setIsVisible] = useState(type !== 'password');

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <S.InputContainer>
      {label && <S.Label>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input
          {...props}
          secureTextEntry={!isVisible}
          isError={!!error}
        />
        {type === 'password' && props.value && (
          <S.EyeIcon>
            <IconButton
              iconName={isVisible ? 'eye' : 'eye-off'}
              size='sm'
              color='gray'
              onPress={toggleVisibility}
            />
          </S.EyeIcon>
        )}
      </S.InputWrapper>

      <S.Footer>
        {error && (
          <>
            <Icon
              name='info'
              size='x_sm'
              color='gray'
            />
            <S.ErrorText>{error}</S.ErrorText>
          </>
        )}
      </S.Footer>
    </S.InputContainer>
  );
}
