import styled from '@emotion/native';

const ImageSliderContainer = styled.View`
  height: 393px;
`;

const dotStyle = {
  backgroundColor: '#FFFFFF',
  width: 6,
  height: 6,
  borderRadius: 3,
  margin: 3,
};

const activeDotStyle = {
  backgroundColor: '#9E9E9E',
  width: 6,
  height: 6,
  borderRadius: 3,
};

const paginationStyle = {
  bottom: 10,
};

const S = {
  ImageSliderContainer,
  dotStyle,
  activeDotStyle,
  paginationStyle,
};

export default S;
