import styled from '@emotion/native';
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled(ScrollView)`
  display: flex;

  background-color: ${({ theme }) => theme.color.gray[50]};

  padding: 0 40px 50px 40px;
`;

const IndicatorWrapper = styled.View`
  margin-top: 12px;
`;

const S = {
  Container,
  IndicatorWrapper,
};

export default S;
