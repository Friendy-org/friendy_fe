import styled from '@emotion/native';
import { ScrollView } from 'react-native-gesture-handler';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 40px;
  background-color: white;
`;

const SignUpContainer = styled(ScrollView)``;

const ProfileSettingsContainer = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

const InnerForm = styled.View`
  display: flex;
  padding: 40px 0;
`;

const IndicatorContainer = styled.View`
  padding: 10px 0 10px 0;
  margin-bottom: 40px;
`;

const S = {
  Layout,
  SignUpContainer,
  ProfileSettingsContainer,
  InnerForm,
  IndicatorContainer,
};

export default S;
