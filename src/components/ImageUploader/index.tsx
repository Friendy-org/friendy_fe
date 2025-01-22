import React from 'react';
import { FlatList } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
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
    <S.Container>
      <FlatList
        data={[...images, null]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          item ? (
            <S.ImageWrapper key={index}>
              <S.UploadImage source={{ uri: item }} />
              <S.CloseButton onPress={() => removeImage(index)}>
                <Icon name='x' size={16} color='#000' />
              </S.CloseButton>
            </S.ImageWrapper>
          ) : (
            <S.AddImageButton onPress={selectImage}>
              <Icon name='plus' size={32} color='#000' />
            </S.AddImageButton>
          )
        }
        keyExtractor={(_, index) => index.toString()}
      />
    </S.Container>
  );
}
