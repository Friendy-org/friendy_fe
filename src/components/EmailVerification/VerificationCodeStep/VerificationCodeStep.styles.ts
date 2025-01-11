import styled from '@emotion/native';

const AppContainer = styled.View`
  width: 100%;
  height: 100%;
  
  display: flex;
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

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Timer = styled.Text``;

const S = {
  AppContainer,
  Layout,
  VerificationContainer,
  Label,
  InfoWrapper,
  Timer,
};

export default S;
