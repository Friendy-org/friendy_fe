import styled from '@emotion/native';

const DropdownList = styled.View`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px;
  padding: 5px 0;
`;

const Divider = styled.View`
  width: 95%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray[400]};
`;

const S = {
  DropdownList,
  Divider,
};

export default S;
