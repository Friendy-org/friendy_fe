import React from 'react';
import Swiper from 'react-native-swiper';
import S from './style';

interface ImageSliderProps {
  imageUrls: string[];
}

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  return (
    <S.ImageSliderContainer>
      <Swiper
        showsPagination
        dotStyle={S.dotStyle}
        activeDotStyle={S.activeDotStyle}
        paginationStyle={S.paginationStyle}
        loop={false}
      >
        {imageUrls.map((url, index) => (
          <S.SliderImage key={index} source={{ uri: url }} resizeMode='cover' />
        ))}
      </Swiper>
    </S.ImageSliderContainer>
  );
}
