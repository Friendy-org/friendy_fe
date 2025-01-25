import styled from '@emotion/native';

const CommentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentActions = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6px;
`;

const S = {
  CommentWrapper,
  CommentActions,
  ButtonWrapper,
};

export default S;
