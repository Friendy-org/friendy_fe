import S from './InputField.styles';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export default function InputField({
  label,
  value,
  onChangeText,
  error,
}: InputFieldProps) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input value={value} onChangeText={onChangeText}></S.Input>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}
