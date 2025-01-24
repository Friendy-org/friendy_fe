import styled from '@emotion/native';

const CommentContainer = styled.View`
  display: flex;
  justify-content: center;
  border: 1px solid #b0b0b0;
  border-radius: 28px;
  margin: 6px 14px;
  padding: 8px 23px 8px 8px;
  min-height: 56px;
`;

const ReadMoreText = styled.Text`
  color: #333333;
  font-size: 8px;
`;

const S = {
  CommentContainer,
  ReadMoreText,
};

export default S;
