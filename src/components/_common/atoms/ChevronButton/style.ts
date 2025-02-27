import { Platform } from 'react-native';
import styled from '@emotion/native';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 13px 20px;
  border-radius: 18px;

  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 6px;
    `,
    android: `
      elevation: 3;
    `,
  })}
`;

const Text = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const S = {
  Container,
  Text,
};

export default S;
