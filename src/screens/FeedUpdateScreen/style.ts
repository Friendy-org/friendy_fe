import styled from '@emotion/native';

const Layout = styled.View`
  display: flex;

  padding: 40px 30px;
  background-color: ${({ theme }) => theme.color.gray[50]};

  width: 100%;
  height: 100%;
`;

const FeedCreateContainer = styled.View`
  display: flex;
  flex: 1;
  gap: 14px;
`;

const ImageWrapper = styled.View`
  display: flex;
  gap: 6px;
`;

const ImageForm = styled.View<{ hasImages: boolean }>`
  padding-left: ${({ hasImages }) => (hasImages ? '-30px' : '0px')};
`;

const ImageLabel = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ContentWrapper = styled.View`
  display: flex;
  gap: 6px;

  max-height: 265px;
`;

const ContentLabel = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ButtonWrapper = styled.View`
  padding: 0 30px;
`;

const S = {
  FeedCreateContainer,
  Layout,
  ImageWrapper,
  ImageForm,
  ImageLabel,
  ContentWrapper,
  ContentLabel,
  ButtonWrapper,
};

export default S;
