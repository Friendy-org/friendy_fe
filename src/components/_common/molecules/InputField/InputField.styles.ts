import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.Text``;

const InputWrapper = styled.View`
  position: relative;
`;

const Input = styled.TextInput<{ isError: boolean }>`
  width: 100%;
  height: 46px;
  border: 1px solid ${({ isError }) => (isError ? '#FF3B30' : '#717d96')};
  border-radius: 25px;
  margin: 5px 0 5px 0;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ErrorText = styled.Text`
  color: #757575;
  font-size: 14px;
  margin-left: 8px;
`;

const S = {
  Wrapper,
  Label,
  InputWrapper,
  Input,
  Footer,
  ErrorText,
};

export default S;
