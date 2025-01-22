import styled from '@emotion/native';

const Layout = styled.View`
  padding: 40px 0px;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const ImageForm = styled.View<{ hasImages: boolean }>`
  padding-right: 30px;
  padding-left: ${({ hasImages }) => (hasImages ? '0px' : '30px')};
  margin: 5px 0;
`;

const ImageLabel = styled.Text`
  margin-left: 30px;
  font-size: 13px;
`;

const S = {
  Layout,
  ImageForm,
  ImageLabel,
};

export default S;
