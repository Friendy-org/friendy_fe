import styled from '@emotion/native';

const ListButton = styled.View`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border-radius: 18px;
  padding: 10px 0;
`;

const Divider = styled.View`
  width: 95%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray[300]};
`;

const S = {
  ListButton,
  Divider,
};

export default S;
