import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  gap: 7px;

  width: 100%;
`;

const More = styled.TouchableOpacity`
  display: flex;
  align-items: center;

  width: 100%;
`;

const MoreText = styled.Text`
  ${({ theme }) => theme.font.common.extraSmall};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const Replies = styled.View`
  display: flex;
  gap: 16px;

  padding: 10px 0 0 20px;
`;

const S = {
  Container,
  More,
  MoreText,
  Replies,
};

export default S;
