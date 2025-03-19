import styled from '@emotion/native';

const Container = styled.View`
  display: flex;

  background-color: ${({ theme }) => theme.color.gray[50]};

  width: 100%;
  height: 100%;
  padding: 0 40px 50px 40px;
`;

const InputForm = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 16px;
`;

const S = {
  Container,
  InputForm,
};

export default S;
