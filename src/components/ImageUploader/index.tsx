import React from 'react';
import { FlatList } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import PostImage from '@components/_common/atoms/PostImage';
import IconButton from '@components/_common/molecules/IconButton';
import Icon from '@components/_common/atoms/Icon';
import S from './style';

interface ImageUploaderProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export default function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
      if (response.assets && response.assets[0]?.uri) {
        setImages([...images, response.assets[0].uri]);
      }
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <FlatList
      data={[...images, null]}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) =>
        item ? (
          <S.ImageWrapper key={index}>
            <PostImage imageUrl={item} size='md' shape='round' />
            <S.CloseButton>
              <IconButton
                iconName='x'
                size='x_sm'
                color='gray'
                onPress={() => removeImage(index)}
              />
            </S.CloseButton>
          </S.ImageWrapper>
        ) : (
          <S.AddImageButton onPress={selectImage}>
            <Icon name='plus' size='lg' color='gray' />
          </S.AddImageButton>
        )
      }
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
