import styled from '@emotion/native';

const Dot = styled.View<{ isActive: boolean; isLast: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: black;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.3')};
  margin-right: ${({ isLast }) => (isLast ? '0px' : '8px')};
`;

const S = {
  Dot,
};

export default S;
