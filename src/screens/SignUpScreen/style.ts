import styled from '@emotion/native';
import { ScrollView } from 'react-native-gesture-handler';

const Layout = styled(ScrollView)`
  display: flex;
  flex-grow: 1;

  width: 100%;
  height: 100%;
  padding: 0px 40px;
`;

const S = {
  Layout,
};

export default S;
