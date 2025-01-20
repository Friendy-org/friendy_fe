import styled from '@emotion/native';

const PostCardContainer = styled.View``;

const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 20px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 18px;
`;

const ContentWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-right: 20px;
`;

const Date = styled.Text`
  color: #737373;
`;

const PostFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 20px;
  width: 100%;
  height: 70px;
`;

const S = {
  PostCardContainer,
  PostHeader,
  ButtonWrapper,
  ContentWrapper,
  Date,
  PostFooter,
};

export default S;
