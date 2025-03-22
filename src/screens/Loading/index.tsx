import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { LOGO_IMAGE } from '@constants/common';

import S from './style';

interface LoadingProps {
  size?: number;
}

export default function Loading({ size = 60 }: LoadingProps) {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinAnim]);

  const rotate = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <S.Container>
      <Animated.Image
        source={{ uri: LOGO_IMAGE }}
        style={{
          width: size,
          height: size,
          transform: [{ rotate }],
        }}
        resizeMode='contain'
      />
    </S.Container>
  );
}
