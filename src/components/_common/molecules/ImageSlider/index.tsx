import React from 'react';
import Swiper from 'react-native-swiper';
import S from './style';
import PostImage from '@components/_common/atoms/PostImage';

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
        {imageUrls.map((imageUrl, index) => (
          <PostImage key={index} imageUrl={imageUrl} size='fillContainer' shape='default' />
        ))}
      </Swiper>
    </S.ImageSliderContainer>
  );
}
