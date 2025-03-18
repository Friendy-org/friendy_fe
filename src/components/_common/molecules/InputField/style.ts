import styled from '@emotion/native';

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const Label = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const InputWrapper = styled.View`
  position: relative;
`;

const Input = styled.TextInput<{ isError: boolean }>`
  width: 100%;
  height: 46px;
  border: 1px solid ${({ isError, theme }) => (isError ? theme.color.tertiary[500] : theme.color.gray[600])};
  border-radius: 25px;

  padding: 0 20px;
`;

const EyeIcon = styled.View`
  position: absolute;
  top: 17px;
  right: 17px;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ErrorText = styled.Text`
  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const S = {
  InputContainer,
  Label,
  InputWrapper,
  Input,
  EyeIcon,
  Footer,
  ErrorText,
};

export default S;
