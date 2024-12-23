import styled from '@emotion/native';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  padding: 46px;
`;

const SignUpContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
`;

const InnerForm = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 20px 0;
`;

const ActionContainer = styled.View``;

const IndicatorContainer = styled.View`
  padding: 10px 0 10px 0;
`;

const S = {
  Layout,
  SignUpContainer,
  Title,
  InnerForm,
  ActionContainer,
  IndicatorContainer,
};

export default S;
