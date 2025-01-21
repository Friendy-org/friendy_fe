import styled from '@emotion/native';

const Container = styled.View<{ hasImages: boolean }>`
  padding-right: 30px;
  padding-left: ${({ hasImages }) => (hasImages ? '0px' : '30px')};
`;

const ImageWrapper = styled.View`
  position: relative;
  margin-right: 10px;
`;

const UploadImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #ddd;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const AddImageButton = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border: 1px #000 dashed;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const S = {
  Container,
  ImageWrapper,
  UploadImage,
  CloseButton,
  AddImageButton,
};

export default S;
