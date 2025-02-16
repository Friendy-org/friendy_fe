import styled from '@emotion/native';

const ContentInput = styled.TextInput`
  width: 100%;
  min-height: 130px;
  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[800]};
  border-radius: 8px;
  padding: 11px 16px;
`;

const NormalText = styled.Text`
  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const HashtagText = styled.Text`
  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[900]};
  background-color: ${({ theme }) => theme.color.primary[50]};
  border-radius: 5px;
`;

const S = {
  ContentInput,
  NormalText,
  HashtagText,
};

export default S;
