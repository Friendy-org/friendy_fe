import styled from '@emotion/native';

const PostCardContainer = styled.View`
  background-color: #ffff;
`;

const Header = styled.View`
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
  height: 44px;
`;

const ContentWrapper = styled.View`
  display: flex;
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
`;

const Wrapper = styled.View`
  width: 26px;
  height: 44px;
`;

const Overlay = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const S = {
  PostCardContainer,
  Header,
  ButtonWrapper,
  ContentWrapper,
  Date,
  PostFooter,
  Wrapper,
  Overlay,
};

export default S;
