import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const InputForm = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 16px;
`;

const Label = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const S = {
  Container,
  InputForm,
  Label,
  Info,
};

export default S;
