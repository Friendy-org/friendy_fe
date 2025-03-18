import React from 'react';
import Swiper from 'react-native-swiper';
import PostImage from '@components/_common/atoms/PostImage';

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
        {imageUrls.map((imageUrl) => (
          <PostImage
            key={imageUrl}
            imageUrl={imageUrl}
            size='fillContainer'
            shape='default'
          />
        ))}
      </Swiper>
    </S.ImageSliderContainer>
  );
}
