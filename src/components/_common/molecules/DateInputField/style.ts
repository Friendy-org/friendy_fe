import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const ChangeDateButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 123px;
  height: 34px;
  background-color: ${({ theme }) => theme.color.gray[300]};
  border-radius: 6px;
`;

const Text = styled.Text`
  ${({ theme }) => theme.font.common.large};
  color: ${({ theme }) => theme.color.secondary[700]};
`;

const S = {
  Wrapper,
  Label,
  ChangeDateButton,
  Text,
};

export default S;
