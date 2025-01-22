import styled from '@emotion/native';

const Layout = styled.View`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const FeedCreateContainer = styled.View``;

const ImageForm = styled.View<{ hasImages: boolean }>`
  padding-right: 30px;
  padding-left: ${({ hasImages }) => (hasImages ? '0px' : '30px')};
  margin: 5px 0;
`;

const ImageLabel = styled.Text`
  margin-left: 30px;
  font-size: 13px;
`;

const ContentWrapper = styled.View`
  padding: 0 30px;
  margin-top: 15px;
  max-height: 265px;
`;

const ContentLabel = styled.Text`
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.View`
  padding: 0 30px;
`;

const S = {
  FeedCreateContainer,
  Layout,
  ImageForm,
  ImageLabel,
  ContentWrapper,
  ContentLabel,
  ButtonWrapper,
};

export default S;
