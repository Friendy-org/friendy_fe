import styled from '@emotion/native';

const Container = styled.View`
  display: flex;

  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.View`
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
  InputWrapper,
  Label,
  Info,
};

export default S;
