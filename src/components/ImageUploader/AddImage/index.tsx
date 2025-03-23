import React from 'react';

import Icon from '@components/_common/atoms/Icon';

import S from './style';

interface AddImageProps {
  onPress: () => void;
}

export default function AddImage({ onPress }: AddImageProps) {
  return (
    <S.AddImageButton onPress={onPress}>
      <Icon
        name='plus'
        size='lg'
        color='gray'
      />
    </S.AddImageButton>
  );
}
