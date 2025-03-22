import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  padding: 12px 20px;
  width: 100%;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 1;
  gap: 10px;
`;

const Date = styled.Text`
  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[500]};
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const S = {
  ButtonWrapper,
  ContentWrapper,
  Date,
  Container,
};

export default S;
