import React from 'react';
import { FlatList } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import useSelectImage from '@hooks/utils/useSelectImage';

import SelectedImage from './SelectedImage';
import AddImage from './AddImage';

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
          <SelectedImage
            key={index}
            uri={item}
            index={index}
            onRemove={removeImage}
            isLoading={isLoading}
          />
        ) : (
          <AddImage onPress={selectImage} />
        )
      }
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
