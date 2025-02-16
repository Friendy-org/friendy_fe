import styled from '@emotion/native';

const TextWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Content = styled.Text`
  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[900]};

  flex-shrink: 1;
`;

const ReadMoreText = styled.Text`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[700]};

  margin-left: 1px;
`;

const S = {
  TextWrapper,
  Content,
  ReadMoreText,
};

export default S;
