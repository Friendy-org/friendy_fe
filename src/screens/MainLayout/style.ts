import styled from '@emotion/native';

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray[50]};
`;

const S = {
  MainContainer,
  ContentWrapper,
};

export default S;
