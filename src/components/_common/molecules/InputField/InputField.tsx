import { ReactNode } from 'react';
import S from './InputField.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  marginBottom?: number;
  isShow?: boolean;
  error?: string;
  children?: ReactNode;
}

export default function InputField({
  label,
  value,
  onChange,
  marginBottom,
  isShow = true,
  error,
  children,
}: InputFieldProps) {
  return (
    <S.Wrapper marginBottom={marginBottom ? marginBottom : 0}>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          value={value}
          onChangeText={onChange}
          secureTextEntry={!isShow}
          isError={!!error}
        />
        {children}
      </S.InputWrapper>
      {error && (
        <S.Footer>
          <AntDesign name='exclamationcircleo' size={13} color={'#757575'} />
          <S.ErrorText>{error}</S.ErrorText>
        </S.Footer>
      )}
    </S.Wrapper>
  );
}
