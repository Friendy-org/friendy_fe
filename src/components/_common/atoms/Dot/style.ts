import styled from '@emotion/native';

const Dot = styled.View<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.gray[900] : theme.color.gray[600])};
  opacity: ${({ isActive }) => (isActive ? '1' : '0.3')};
`;

const S = {
  Dot,
};

export default S;
