import styled from '@emotion/native';

const CommentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

const Author = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const InfoWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const InfoHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;

const Name = styled.Text`
  ${({ theme }) => theme.font.common.regularAccent};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const Time = styled.Text`
  ${({ theme }) => theme.font.common.extraSmall};
  color: ${({ theme }) => theme.color.gray[600]};
`;

const Content = styled.Text`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const ReplyText = styled.Text`
  ${({ theme }) => theme.font.common.extraSmall};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const S = {
  CommentWrapper,
  Author,
  InfoWrapper,
  InfoHeader,
  Name,
  Time,
  Content,
  ReplyText,
};

export default S;
