import styled from '@emotion/native';
import { ScrollView } from 'react-native-gesture-handler';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 40px 40px 40px;
  background-color: white;
`;

const MainContainer = styled.View`
  display: flex;
  flex-grow: 1;
`;

const ResetPasswordContainer = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const InnerForm = styled.View`
  display: flex;
  padding: 40px 0;
`;

const FormWrapper = styled.View`
  display: flex;
  height: 75%;
  justify-content: space-between;
`;

const S = {
  Layout,
  MainContainer,
  ResetPasswordContainer,
  InnerForm,
  FormWrapper,
};

export default S;
