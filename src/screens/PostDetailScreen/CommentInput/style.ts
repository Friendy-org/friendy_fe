import styled from '@emotion/native';

const Container = styled.View`
  display: flex;

  width: 100%;
`;

const ReplyBanner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  width: 100%;
  padding: 8px 20px;

  background-color: ${({ theme }) => theme.color.gray[200]};
`;

const ReplyText = styled.Text`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.gray[50]};
`;

const InputField = styled.TextInput`
  display: flex;
  flex: 1;

  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 16px;
  padding: 10px 14px;

  ${({ theme }) => theme.font.common.regular};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const S = {
  Container,
  ReplyBanner,
  ReplyText,
  InputWrapper,
  InputField,
};

export default S;
