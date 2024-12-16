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

const Input = styled.TextInput`
  width: 100%;
  height: 46px;
  border: 1px solid #717d96;
  border-radius: 25px;
  margin: 5px 0 5px 0;
`;

const EyeIcon = styled.View`
  position: absolute;
  top: 17px;
  right: 17px;
`;

const ErrorText = styled.Text`
  color: red;
`;

const S = {
  Wrapper,
  Label,
  InputWrapper,
  Input,
  EyeIcon,
  ErrorText,
};

export default S;
