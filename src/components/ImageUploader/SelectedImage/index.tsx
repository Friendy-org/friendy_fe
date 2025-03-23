import React from 'react';
import { ActivityIndicator } from 'react-native';
import PostImage from '@components/_common/atoms/PostImage';
import IconButton from '@components/_common/molecules/IconButton';
import S from './style';

interface SelectedImageProps {
  uri: string;
  index: number;
  onRemove: (index: number) => void;
  isLoading: boolean;
}

export default function SelectedImage({ uri, index, onRemove, isLoading }: SelectedImageProps) {
  return (
    <S.Container>
      {isLoading ? (
        <ActivityIndicator
          size='large'
          color='#1BD15E'
        />
      ) : (
        <>
          <PostImage
            imageUrl={uri}
            size='md'
            shape='round'
          />
          <S.CloseButton>
            <IconButton
              iconName='x'
              size='x_sm'
              color='gray'
              onPress={() => onRemove(index)}
            />
          </S.CloseButton>
        </>
      )}
    </S.Container>
  );
}
