import styled from '@emotion/native';

const AppContainer = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
`;

const Layout = styled.View`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: space-between;
`;

const VerificationContainer = styled.View`
  display: flex;
  width: 100%;
`;

const Label = styled.Text`
  width: 100%;
`;

const ErrorText = styled.Text`
  color: #ff3b30;
  font-size: 14px;
  margin-bottom: 15px;
`;

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const S = {
  AppContainer,
  Layout,
  ErrorText,
  VerificationContainer,
  Label,
  InfoWrapper,
};

export default S;
