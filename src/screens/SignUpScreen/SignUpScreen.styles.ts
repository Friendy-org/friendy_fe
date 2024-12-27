import styled from '@emotion/native';
import { ScrollView } from 'react-native-gesture-handler';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const SignUpContainer = styled(ScrollView)``;

const Title = styled.Text`
  font-size: 24px;
`;

const InnerForm = styled.View`
  display: flex;
  padding: 40px 0;
`;

const IndicatorContainer = styled.View`
  padding: 10px 0 10px 0;
`;

const S = {
  Layout,
  SignUpContainer,
  Title,
  InnerForm,
  IndicatorContainer,
};

export default S;
