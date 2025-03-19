import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex: 1;

  background-color: ${({ theme }) => theme.color.gray[50]};

  padding: 0 40px 50px 40px;
`;

const S = {
  Container,
};

export default S;
